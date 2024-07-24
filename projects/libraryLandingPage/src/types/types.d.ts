export type ApiResult = {
    total_results?: number;
    total_pages?:   number;
    results?:       BookInfo[];
}

export type BookInfo = {
    subcategories?:               string[];
    english_language_learner?:    boolean;
    vocab_words?:                 string[];
    page_count?:                  number;
    title_search?:                string;
    author_first_names?:          string[];
    max_age?:                     number;
    canonical_published_work_id?: number;
    copyright?:                   number;
    title?:                       string;
    measurements?:                Measurements;
    subject_tags?:                string[];
    chapter_measurements?:        ChapterMeasurement[];
    recommended_isbns?:           any[];
    published_works?:             PublishedWork[];
    author_last_names?:           string[];
    series_name?:                 string;
    min_age?:                     number;
    book_type?:                   string;
    awards?:                      any[];
    authors?:                     string[];
    categories?:                  string[];
    language?:                    string;
    summary?:                     string;
    work_id?:                     number;
    canonical_isbn?:              string;
}

export type ChapterMeasurement = {
    vocab_words?: string[];
    lexile?:      number;
    name?:        string;
    number?:      number;
}

export type Measurements = {
    english?: English;
}

export type English = {
    mlf?:                         number;
    syntactic_demand_percentile?: null;
    semantic_demand_percentile?:  null;
    lexile_code?:                 string;
    decoding_demand_percentile?:  null;
    measurable?:                  boolean;
    msl?:                         number;
    lexile?:                      number;
    structure_demand_percentile?: null;
}

export type PublishedWork = {
    isbn?:                     string;
    english_language_learner?: boolean;
    copyright?:                number;
    published_work_id?:        number;
    page_count?:               number;
    binding?:                  string;
    cover_art_url?:            string;
}

export type EventsType = React.ChangeEvent<HTMLInputElement> | React.ChangeEvent<HTMLSelectElement>

export type RoutesType = {
  path: string,
  component: ReactNode
}

export type LinkProps = React.AnchorHTMLAttributes<HTMLAnchorElement> & { to: string, state?: any }