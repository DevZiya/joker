export type Joke = {
  id: number;
  joke?: string;
  delivery?: string;
  setup?: string;
  lang: "cs" | "de" | "en" | "es" | "fr" | "pt";
  type: "single" | "twopart";
  category:
    | "Any"
    | "Misc"
    | "Programming"
    | "Dark"
    | "Pun"
    | "Spooky"
    | "Christmas";
  error: boolean;
  safe: boolean;
  flags: {
    nsfw: boolean;
    religious: boolean;
    political: boolean;
    racist: boolean;
    sexist: boolean;
    explicit: boolean;
  };
};

export type flagsKeys =
| "nsfw"
| "religious"
| "political"
| "racist"
| "sexist"
| "explicit";
