import { Trans, type TransProps } from 'react-i18next';

const defaultComponents = {
	hope: <span className="hope" />,
	fear: <span className="fear" />,
	crit: <span className="crit" />,
};

function Translate({ i18nKey, components = {}, ...rest }: TransProps<any>) {
	const mergedComponents = { ...defaultComponents, ...components };

	return <Trans i18nKey={i18nKey} components={mergedComponents} {...rest}/>
}

export default Translate;
