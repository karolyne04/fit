import { NavigationContainer } from "@react-navigation/native";
import { AppRoutes } from "./app.routes";

export function Routes() {
	console.log('Routes component rendered');
	return (
		<NavigationContainer >
			<AppRoutes />
		</NavigationContainer>
	);
}