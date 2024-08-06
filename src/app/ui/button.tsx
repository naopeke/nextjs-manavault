import clsx from 'clsx';

//標準のHTMLボタン要素の属性（type, onClick, など）を継承します。これにより、ボタン要素が標準のHTMLボタンのすべての属性をサポートすることができます。
interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
//ボタンの内容として表示されるReactノード（テキスト、他のコンポーネントなど）を指定します
    children: React.ReactNode;
}

//childrenはボタンの内容として表示されるものです。
//classNameは、ボタンに追加のクラス名を指定するためのものです。
//...restは、ButtonPropsで定義されている他のすべてのプロパティを含む残りのプロパティです。これにより、例えばonClickやdisabledなどの標準のボタン属性が利用できます。
export function Button({ children, className, ...rest }: ButtonProps) {
  return (
    <button
    //...restは、ボタンに追加の属性やイベントハンドラーを適用するためのものです。
      {...rest}
      //いくつかの基本的なスタイリングクラス（例えば、bg-blue-500、text-white）と、プロパティとして渡された追加のクラス名（className）を結合します。
      //{children}は、ボタンの中に表示される内容です。
      className={clsx(
        'flex h-10 items-center rounded-lg bg-blue-500 px-4 text-sm font-medium text-white transition-colors hover:bg-blue-400 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-blue-500 active:bg-blue-600 aria-disabled:cursor-not-allowed aria-disabled:opacity-50',
        className,
      )}
    >
      {children}
    </button>
  );
}