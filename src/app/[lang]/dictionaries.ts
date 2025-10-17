const dictionaries = {
  it: () =>
    import("../../dictionaries/it.json").then((module) => module.default),
  en: () =>
    import("../../dictionaries/en.json").then((module) => module.default),
  es: () =>
    import("../../dictionaries/es.json").then((module) => module.default)
};

export const getDictionary = async (locale: "it" | "en" | "es") => {
  const loader = dictionaries[locale];
  if (!loader) {
    throw new Error(`Locale non supportato: ${locale}`)
  }
  return loader();
}

