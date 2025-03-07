export interface Page<T> {
    content: T[];
    pageable: {
      pageNumber: number;
      pageSize: number;
      sort: Sort;
    };
    totalElements: number;
    totalPages: number;
  }
  
  export interface Sort {
    direction: string;
    active: string;
    sorted: boolean;
    unsorted: boolean;
    empty: boolean;
  }