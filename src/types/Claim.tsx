interface Claim {
  type: "claim";

  address: string;
  amount: string;
  canonical_url: string;
  claim_id: string;
  claim_op: "create" | "update";
  confirmations: number;
  height: number;
  meta: object[unknown]; // Meta
  name: string;
  normalized_name: string;
  nout: number;
  permanent_url: string;
  short_url: string;
  timestamp: number;
  txid: string;
  value: object[unknown];
  value_type: "channel" | "repost" | "stream";
}

interface Channel extends Claim {
  has_signing_key: boolean;
  value_type: "channel";
}

interface Repost extends Claim {
  value_type: "repost";
}

interface Stream extends Claim {
  is_channel_signature_valid: boolean;
  signing_channel?: Channel;
  value: {
    description: string;
    languages: string[];
    license: string;
    release_time: string;
    source: object[unknown];
    stream_type: "";
    tags: string[];
    thumbnail: {
      url: string;
    };
    title: string;
  };
  value_type: "stream";
}
