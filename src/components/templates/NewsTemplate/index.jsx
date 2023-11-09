import { CardNews } from "../../../atoms/CardNews";
import { List_news_data } from "../../../data/ListNewsData";

export const NewsTemplate = () => {
  return (
    <div>
      <div>
        {List_news_data.map((data, i) => (
          <div className="p-[8px]">
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
