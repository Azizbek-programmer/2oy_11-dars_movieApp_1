import { Select } from 'antd'
import { memo,  } from 'react'
import { useSearchParams } from 'react-router-dom';

export const MovieSort = memo(() => {
    
    const [searchParams, setSearchParams] = useSearchParams();

    const onChange = (value: string) => {
        searchParams.set("sort_by", value);
        searchParams.set("page", "1");
        setSearchParams(searchParams);
    };
    

    return (
        <Select
            className="w-60"
            placeholder="Sort by"
            onChange={onChange}
            options={[
                { value: "original_title.asc", label: "Title A-Z" },
                { value: "original_title.desc", label: "Title Z-A" },
                { value: "popularity.asc", label: "Popularity ↑" },
                { value: "popularity.desc", label: "Popularity ↓" },
                { value: "revenue.asc", label: "Revenue ↑" },
                { value: "revenue.desc", label: "Revenue ↓" },
                { value: "primary_release_date.asc", label: "Release Date ↑" },
                { value: "primary_release_date.desc", label: "Release Date ↓" },
                { value: "title.asc", label: "Title A-Z" },
                { value: "title.desc", label: "Title Z-A" },
                { value: "vote_average.asc", label: "Vote Average ↓" },
                { value: "vote_average.desc", label: "Vote Average ↑" },
                { value: "vote_count.asc", label: "Vote Count ↓" },
                { value: "vote_count.desc", label: "Vote Count ↑" },
            ]}
        />
    )
})
