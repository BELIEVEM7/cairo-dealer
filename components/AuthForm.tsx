type AuthFormProps = {
  title: string;
  description: string;
  children: React.ReactNode;
};

export default function AuthForm({
  title,
  description,
  children,
}: AuthFormProps) {
  return (
    <div>
      <h1 className="text-3xl font-bold">
        {title}
      </h1>

      <p className="mt-2 text-muted-foreground">
        {description}
      </p>

      <div className="mt-6">
        {children}
      </div>
    </div>
  );
}