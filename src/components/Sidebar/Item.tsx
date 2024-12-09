interface ItemProps {
    icon: string
    title: string
    menuOpen: boolean
    onLoadPrompt?: () => void
}


const Item = ({icon, title, menuOpen, onLoadPrompt}: ItemProps) => {
  const handleClick = onLoadPrompt || (() => {});

  return (
    <div className="flex gap-3 items-center cursor-pointer hover:bg-[#e2e6eb] px-4 py-2 mx-2 rounded-3xl"
    onClick={handleClick}
    >
          <img src={icon} alt={title} className="w-[20px]" />
          {menuOpen && <p className="whitespace-nowrap">{title}</p>}
    </div>
  )
}

export default Item