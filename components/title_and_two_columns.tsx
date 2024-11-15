import './title_and_two_columns.scss';


interface TitleAndTwoColumnsProps {
  data: any;
  props: any;
}

export default function TitleAndTwoColumns({
  data, props
}: TitleAndTwoColumnsProps ) {
  return (
    <div>
      {/* <pre>{JSON.stringify(props, null, 2)}</pre> */}

      {data.title && <h1>{data.title}</h1>}

      <div className="grid grid-cols-2 gap-8">
        <div>
          <ul className={`pl-5 space-y-4 ${props.listStyle?.size ? 'list-disc-' + props.listStyle.size : 'list-disc'}`}>
            { data.body?.map((item: any, index: number) => (
              <li key={index}>
                {item.point && <p>{item.point}</p>}
              </li>
            )) }
          </ul>
        </div>

        <div>
            {/* <pre>{JSON.stringify(data.image, null, 2)}</pre> */}
            {data.image?.image_id && 
              <>
                <img src={data.image.image_id} className="w-full rounded-lg"/>
                <figcaption className="text-right mt-2 text-xs">
                    Photo by {data.image.author_name} on Unsplash
                </figcaption>
              </>
            }
        </div>
      </div>
    </div>
  );
}
