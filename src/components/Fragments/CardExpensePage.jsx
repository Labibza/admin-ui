import React from "react";
import Card from "../Elements/Card";
import Icon from "../Elements/Icon";

/* ICON MAP */
const categoryIcon = {
  housing: Icon.House,
  food: Icon.Food,
  transportation: Icon.Transport,
  shopping: Icon.Shopping,
  entertainment: Icon.Movie,
  others: Icon.Other,
};

function CardExpensePage({ data = [] }) {
  return (
    <Card
      title={null}
      desc={
        <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-6">
          {data.length > 0 ? (
            data.map((item, index) => {
              const CategoryIcon =
                categoryIcon[item.category] || Icon.Other;

              return (
                <div
                  key={index}
                  className="
                    bg-white
                    border
                    border-gray-200
                    rounded-2xl
                    overflow-hidden
                    hover:shadow-md
                    transition
                  "
                >
                  {/* HEADER */}
                  <div className="bg-color-gray-03 px-5 py-4">
                    <div className="flex justify-between items-start">
                      <div className="flex items-center gap-3">
                        <div className="bg-special-bg text-gray-02 p-3 rounded-xl">
                          <CategoryIcon size={22} />
                        </div>

                        <div>
                          <p className="capitalize text-sm text-gray-02">
                            {item.category}
                          </p>
                          <p className="text-xl font-bold mt-1">
                            ${item.amount}
                          </p>
                        </div>
                      </div>

                      {/* PERCENT */}
                      <div className="flex items-center gap-1 text-sm">
                        <span
                          className={
                            item.trend === "up"
                              ? "text-red-500"
                              : "text-green-500"
                          }
                        >
                          {item.percentage}%
                        </span>

                        {item.trend === "up" ? (
                          <Icon.ArrowUp size={16} className="text-red-500" />
                        ) : (
                          <Icon.ArrowDown
                            size={16}
                            className="text-green-500"
                          />
                        )}
                      </div>
                    </div>

                    <p className="text-xs text-gray-400 mt-1">
                      Compare to the last month
                    </p>
                  </div>

                  {/* CONTENT */}
                  <div className="px-5 py-4">
                    <div className="space-y-3">
                      {item.detail?.map((detail, i) => (
                        <div
                          key={i}
                          className="flex justify-between text-sm"
                        >
                          <div>
                            <p className="text-gray-700">
                              {detail.item}
                            </p>
                            <p className="text-xs text-gray-400">
                              {detail.date}
                            </p>
                          </div>

                          <p className="text-gray-700">
                            ${detail.amount}
                          </p>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
              );
            })
          ) : (
            <p className="col-span-full text-center text-gray-400">
              Tidak ada data expenses
            </p>
          )}
        </div>
      }
    />
  );
}

export default CardExpensePage;