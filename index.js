fetch("https://www.themealdb.com/api/json/v1/1/search.php?s")
        .then((res) => res.json())
        .then((data) => displayItem(data));

      const displayItem = (mealItem) => {
        const main = document.getElementById("main");
        for (let i = 0; i < mealItem.length; i++) {
          console.log(mealItem);
          const allItem = mealItem[i];
          console.log(allItem);
          //   const div = document.createElement("div");
          //   console.log(div);
          //   const courentItem = `
          //       <img/>
          //       <h3>${allItem.strMeal}</h3>
          //   `;

          //   courentItem.innerHTML = courentItem;
          //   main.appendChild(div);
        }
      };