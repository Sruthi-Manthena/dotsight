import {
  META as WALLET_TOKEN_META,
  METRICS as WALLET_TOKEN_METRICS,
} from './wallet-token.entity';
import {
  META as WALLET_META,
  METRICS as WALLET_METRICS,
} from './wallet.entity';
import {
  META as PROTOCOL_META,
  METRICS as PROTOCOL_METRICS,
} from './protocol.entity';

export const ENTITIES = ['protocol', 'wallet', 'walletToken'] as const;

export const FIELDS: Record<
  (typeof ENTITIES)[number],
  { meta: string[]; metrics: string[] }
> = {
  walletToken: {
    meta: WALLET_TOKEN_META,
    metrics: WALLET_TOKEN_METRICS,
  },
  wallet: {
    meta: WALLET_META,
    metrics: WALLET_METRICS,
  },
  protocol: {
    meta: PROTOCOL_META,
    metrics: PROTOCOL_METRICS,
  },
};
