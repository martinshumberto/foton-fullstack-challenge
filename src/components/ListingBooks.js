import React from 'react';

class ListingBooks extends React.Component {
  constructor(props) {
    super(props);

    this.list = [
      {
        img: "/images/1.png",
        title: "The One Thing",
        by: "Gary Keller"
      },
      {
        img: "/images/2.png",
        title: "HOOKED",
        by: "Gary Keller"
      },
      {
        img: "/images/3.png",
        title: "Good To Great",
        by: "Jim Collins"
      },
      {
        img: "/images/1.png",
        title: "The One Thing",
        by: "Gary Keller"
      },
      {
        img: "/images/2.png",
        title: "HOOKED",
        by: "Gary Keller"
      },
      {
        img: "/images/3.png",
        title: "Good To Great",
        by: "Jim Collins"
      },
      {
        img: "/images/1.png",
        title: "The One Thing",
        by: "Gary Keller"
      },
      {
        img: "/images/2.png",
        title: "HOOKED",
        by: "Gary Keller"
      }
    ]
  }
  render() {
    return (
      <div className="grid grid-cols-3 gap-y-6 gap-x-6">
        {
          Array.from({ length: this.list.length }, (_, i) => (
            <article className="flex flex-1 flex-col">
              <div><img className="rounded-lg filter drop-shadow-smh w-full" src={this.list[i].img} /></div>
              <h2 className="mt-2 text-sm font-semibold text-gray-600">{this.list[i].title}</h2>
              <small className="text-xs mt-1 font-semibold text-gray-600">by {this.list[i].by}</small>
            </article>
          ))
        }
      </div>
    );
  }
}

export default ListingBooks;
