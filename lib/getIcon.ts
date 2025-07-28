"use server";

const ICONFINDER_API_KEY = process.env.ICONFINDER_API_KEY;

export default async function getIcon(
  keyword: string
): Promise<{ imageUrlArray: string[] } | undefined | null> {
  try {
    console.log("searching for:" + keyword);
    if (!keyword) return undefined;

    const res = await fetch(
      `https://api.iconfinder.com/v4/icons/search?query=${keyword}`,
      {
        headers: {
          Authorization: `Bearer ${ICONFINDER_API_KEY}`,
        },
      }
    );

    if (res.status === 429) {
      return null;
    } else if (res.status !== 200) {
      console.log("aaaaaaaaa");
      return undefined;
    }

    const jsonRes = await res.json();
    console.log(jsonRes);

    const icons = jsonRes.icons;
    const imageUrlArray: string[] = [];

    // use a for of loop to iterate through each icon
    // source: https://www.w3schools.com/js/js_loop_forof.asp
    for (const icon of icons) {
      if (!icon.is_premium && icon.raster_sizes.length > 0) {
        const largestRaster = icon.raster_sizes.at(-1);
        const imageUrl = largestRaster.formats[0].preview_url;
        imageUrlArray.push(imageUrl);
      }
    }

    console.log(imageUrlArray);
    return { imageUrlArray: imageUrlArray };
  } catch (error) {
    console.log("error occurred:", error);
    return undefined;
  }
}
