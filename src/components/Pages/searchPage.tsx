import SearchBox from "../molecules/searchBox";
import TabsFilter from "../molecules/TabsfilterBox";
import ListCards from "../organisms/listCards";
import SelectedFilterForm from "../organisms/selectedFiltersForm";
import SearchTemplate from "../Templators/searchTemplate";
import { createContext, useContext, useEffect, useState } from "react";
import fakeData from "../../services/fakeData";

export interface SearchPageProps {}

export const LikeContext = createContext((id: number, like: number) => {});
const SearchPage: React.SFC<SearchPageProps> = () => {
  const [searchValue, updateSearchValue] = useState("");
  const [selectedvalue, updateValue] = useState(
    {} as { filter1?: number; filter2?: number; filter3?: number }
  );
  const [data, setData] = useState(
    [] as Array<{
      id: number;
      title: string;
      description: string;
      likeNum: number;
    }>
  );
  const [tabsValue, updateTabsValue] = useState(0);
  useEffect(() => {
    setData(fakeData);
    //console.log("update");
  }, []);
  const updateLike = (id: number, like: number) => {
    const upData = data.map((item) => {
      if (item.id === id) item.likeNum = like;
      return item;
    });

    setData(upData);
  };
  const options = [
    { value: 1, label: "select1" },
    { value: 2, label: "select2" },
    { value: 3, label: "select3" },
  ];
  const options2 = [
    { value: 3, label: "more Then 3" },
    { value: 6, label: "more Then 6" },
    { value: 10, label: "more Then 10" },
  ];
  const items = [
    { label: "Blogs" },
    { label: "Questions" },
    { label: "Providres" },
    { label: "Groups" },
  ];

  const getData = () => {
    var filterData = searchValue
      ? data.filter((item) =>
          item.title.toLowerCase().startsWith(searchValue.toLowerCase())
        )
      : data;
    const likeNum = selectedvalue.filter1;
    filterData = likeNum
      ? filterData.filter((item) => {
          return item.likeNum > likeNum;
        })
      : filterData;
    // console.log(filterData);
    return filterData;
  };

  return (
    <SearchTemplate
      searchBox={<SearchBox updateValue={updateSearchValue} />}
      selectedBox={
        <TabsFilter
          value={tabsValue}
          setValue={updateTabsValue}
          items={items}
        />
      }
      listCards={
        <LikeContext.Provider value={updateLike}>
          <ListCards items={getData()} />
        </LikeContext.Provider>
      }
      filterBox={
        <SelectedFilterForm
          updateValue={updateValue}
          // value={selectedvalue}
          // onClear={onClear}
          propsB1={{ options: options2 }}
          propsB2={{ options }}
          propsB3={{ options }}
          //  onSubmit={onSubmit}
        />
      }
    />
  );
};
export default SearchPage;
