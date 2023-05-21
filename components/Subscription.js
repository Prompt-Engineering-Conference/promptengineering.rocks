import * as React from 'react';
import Typography from '@mui/material/Typography';
import { useEffect, useState } from 'react';
import Button from '@mui/material/Button';
import {
  urlBase64ToUint8Array,
  subscribe,
  unsubscribe,
  getExistingSubscription,
  defaultNotification,
  buildNotification,
} from './shared/pushHelpers';
import useAxios from 'axios-hooks';
import { configure } from 'axios-hooks';
import Axios from 'axios';
import { toast } from 'react-toastify';
import ReactGA from 'react-ga4';
import { HtmlTooltip } from './HtmlTooltip';
import { isIOS } from 'react-device-detect';

const axios = Axios.create({
  baseURL: process.env.NEXT_PUBLIC_API_BASE_URL,
});

configure({
  axios,
  defaultOptions: {
    manual: true,
    useCache: false,
    ssr: false,
    autoCancel: false,
  },
});

export default function Subscription(props) {
  const [pushSubscription, setPushSubscription] = useState(false);
  const [isFeatureAvailable, setIsFeatureAvailable] = useState(false);

  const getVapidPublicKey = async () => {
    try {
      await executeGetVapidPublicKey();
    } catch (error) {
      console.error('[App] Error getting VAPID public key', error);
    }
  };

  const [
    {
      data: getVapidPublicKeyData,
      loading: getVapidPublicKeyLoading,
      error: getVapidPublicKeyError,
    },
    executeGetVapidPublicKey,
  ] = useAxios('/vapid-public-key');

  const [
    {
      data: saveSubscriptionData,
      loading: saveSubscriptionLoading,
      error: saveSubscriptionError,
    },
    executeSaveSubscription,
  ] = useAxios({
    url: 'subscription',
    method: 'POST',
  });

  let initialized = false;

  useEffect(() => {
    if (!initialized) {
      initialized = true;

      if ('PushManager' in window) {
        setIsFeatureAvailable(true);
        getVapidPublicKey();
        handleGetExistingSubscription();
      } else {
        setIsFeatureAvailable(false);
      }
    }
  }, []);

  const handleSubscribe = () => {
    ReactGA.event('subscribe', {});

    let convertedVapidKey = urlBase64ToUint8Array(
      getVapidPublicKeyData['vapid-public-key']
    );

    subscribe(convertedVapidKey, process.env.NEXT_PUBLIC_SW_SCOPE)
      .then((pushSubscription) => {
        setPushSubscription(pushSubscription.toJSON());
        saveSubscription(pushSubscription, 'prompt-engineering-conf-2023');
        return pushSubscription;
      })
      .catch((error) => {
        console.log('[App] Subscription failed', error);
        toast.error(
          'Cannot subscribe this browser. Check notification permission.'
        );
      });
  };

  const handleUnsubscribe = () => {
    ReactGA.event('unsubscribe', {});

    unsubscribe(process.env.NEXT_PUBLIC_SW_SCOPE)
      .then((success) => {
        setPushSubscription(null);
        toast.info('You will not receive push notifications anymore');
      })
      .catch((error) => {
        console.error('[App] Unsubscription failed', error);
      });
  };

  const handleGetExistingSubscription = () => {
    getExistingSubscription()
      .then((pushSubscription) => {
        setPushSubscription(pushSubscription?.toJSON());

        return pushSubscription;
      })
      .catch((err) => {
        console.error(err);
      });
  };

  const saveSubscription = (pushSubscription, tag) => {
    ReactGA.event('save_subscription', { pushSubscription: pushSubscription });

    executeSaveSubscription({
      data: { pushSubscription: pushSubscription, tags: [tag] },
    })
      .then(() => {
        toast.success('You are now subscribed to push notifications');
      })
      .catch(() => {
        console.log('[App] Error saving subscription on backend');
      });
  };

  return (
    <>
      {isFeatureAvailable ? (
        <HtmlTooltip
          title="Check the address bar of your browser - you may see a notification block icon"
          arrow
        >
          <Button
            variant={pushSubscription ? "outlined" : "contained"}
            size="large"
            color="secondary"
            style={{ height: '3.4em', color: 'white', margin: '0.5em 0' }}
            onClick={pushSubscription ? handleUnsubscribe : handleSubscribe}
          >
            {!pushSubscription
              ? 'Receive push notifications'
              : 'Unsubscribe from push'}
          </Button>
        </HtmlTooltip>
      ) : (
        <Typography variant="body1" style={{ color: 'white' }}>
          {isIOS
            ? 'To subscribe for push notifications on iOS 16.4+ devices, tap "Add to Home Screen" first (in the "Share" icon menu), open the website using its own icon, and scroll to the bottom of the page.'
            : 'Oh, it looks like push notifications are not available in your browser so just join the mailing list.'}
        </Typography>
      )}
    </>
  );
}
