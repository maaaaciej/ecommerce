import React from 'react'
import {connect} from "react-redux"
import {createStructuredSelector} from "reselect"
import { selectCollectionsForPreview } from "../../redux/collection/collection.selectors";

import "./collection-overview.style.scss"
import Preview from "../preview-collection/preview-collection.component"

const CollectionOverview = ({collections}) => {
    return ( <div className="collections-overview">
    {collections.map(({ id, ...otherCollectionProps }) => (
      <Preview key={id} {...otherCollectionProps} />
    ))}
  </div> );
  }
const mapStateToProps = createStructuredSelector({
    collections: selectCollectionsForPreview,
  });
export default connect(mapStateToProps)(CollectionOverview);