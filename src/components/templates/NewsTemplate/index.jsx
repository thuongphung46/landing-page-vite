import { CardNews } from "../../../components/atoms/CardNews";
import { List_news_data } from "../../../data/ListNewsData";
import "./index.scss";
export const NewsTemplate = () => {
  return (
    <div className="w-full flex justify-center items-center">
      <div className="row">
        {List_news_data.map((data, i) => (
          <div className="p-[8px] column-list-news">
            <CardNews
              title={data.title}
              detail={data.detail}
              image={data.image}
              name={data.name}
              key={i}
              link={data.link}
            />
          </div>
        ))}
      </div>
    </div>
  );
};
