const About = () => {
  return (
    <section id="about" className="py-24 md:py-32 bg-background">
      <div className="container mx-auto px-6">
        <div className="max-w-3xl mx-auto text-center space-y-6">
          <h2 className="text-5xl md:text-6xl font-bold text-foreground mb-8">
            Keyword
          </h2>

          <div className="flex justify-center gap-8 mb-12">
            <span className="text-2xl font-semibold text-primary">오너십</span>
            <span className="text-2xl font-semibold text-primary">고객 집중</span>
            <span className="text-2xl font-semibold text-primary">빠른 실행</span>
          </div>

          <p className="text-xl md:text-2xl text-muted-foreground leading-relaxed font-light">
            영역을 한계짓지 않습니다.
            <br />
            고객을 추정하지 않습니다.
            <br />
            Show &amp; Prove로 조직의 신뢰를 얻습니다.
          </p>

          <p className="text-sm text-muted-foreground/70 italic mt-4">
            *문구는 리더 및 동료평가를 인용했습니다.
          </p>
        </div>
      </div>
    </section>
  );
};

export default About;
