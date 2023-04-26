import { useRouteError, isRouteErrorResponse } from "react-router-dom";

export default function ErrorPage() {
    const error: unknown = useRouteError();

    return (
        <div className="error-page text-center">
            <h1>Oops!</h1>
            <p>Sorry, an unexpected error has occurred.</p>
            <p>
                <i>
                    {isRouteErrorResponse(error) ? (
                        error.statusText
                    ) : (
                        "Unknown Error"
                    )}
                </i>
            </p>
        </div>
    );
}
