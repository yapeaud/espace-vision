import {blocks} from '../constants'

const ValuesBlocks = () => {
    return (
        <>
            <div className="container py-5">
                <div className="row justify-content-center">
                    {blocks.map((block) => (
                        <div key={block.id} className="col-sm-12 col-md-4 text-center mb-4">
                            <div className="p-4 border border-primary rounded shadow-sm h-100">
                                <h4 className="text-uppercase fw-bold mb-3">{block.title}</h4>
                                <p className="text-muted ">{block.description}</p>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </>
    )
}

export default ValuesBlocks