import './Brand.css'

export default function Brand(props: { width: number, height: number }) {

  return (<img
        src="/favicon.png"
        className='brand'
        alt="LeLivros Brand"
        title="LeLivros Brand"
        width={props.width}
        height={props.height}
      />)
}
