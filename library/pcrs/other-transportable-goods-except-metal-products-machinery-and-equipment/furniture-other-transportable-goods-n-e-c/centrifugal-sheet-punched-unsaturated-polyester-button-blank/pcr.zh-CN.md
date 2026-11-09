---
pcr_id: pcr.other-transportable-goods-except-metal-products-machinery-and-equipment.furniture-other-transportable-goods-n-e-c.centrifugal-sheet-punched-unsaturated-polyester-button-blank
language: zh-CN
sync_with: pcr.en-US.md
status: candidate
content_maturity: authored_methodology
translation_status: aligned
---

# 离心浇片冲切制造的实体聚酯纽扣坯

## 1. 范围与适用性

本方法适用于供后续车削/钻孔制扣的完整实体、不发泡、无增强、无颜料不饱和聚酯纽扣坯。仅选择一条有据路线：供货液态树脂体系 → 离心浇片 → 冲坯 → 实际硬化/固化/调节 → 坯料首次质量放行。坯料是此前景的完整交易部件，不是完整缝纫纽扣。公开来源提供互补产品及工艺事实；技术综合不声称同一SKU、订单或工厂。验收限值、配料及全部数量来自实际生产者/买方记录。

## 2. 产品类别识别

| Field | Value |
| --- | --- |
| canonical_pcr_id | pcr.other-transportable-goods-except-metal-products-machinery-and-equipment.furniture-other-transportable-goods-n-e-c.centrifugal-sheet-punched-unsaturated-polyester-button-blank |
| classification_refs | CPC 3.0 38924; narrower product and route boundary |
| covered_products | 第1节限定的完整硬质可加工UPR浇片冲切纽扣坯 |
| excluded_products | CPC38923完整纽扣/扣件; 拉链及拉链零件; 模塑设备; 原树脂; 整片板材; 棒切/直接单坯浇注; 颜料着色、发泡、增强或金属嵌件; 成扣钻孔车削抛光染色; 外购成品重包装 |
| representative_product | 一件图样特定的无孔实体已固化聚酯纽扣坯; 不假定直径或质量 |
| production_route | 整份液态UPR供货及实际独立添加经离心浇片冲切固化至首次放行; 另计已观察FG服务 |
| market_state | 首次质量放行、验收用于后续制扣的裸完整硬坯; 无缝纫孔及成扣表面精饰 |

## 3. 参考流

| Field | Value |
| --- | --- |
| What | 提供合格完整可加工聚酯坯作为后续制扣的独立完整部件 |
| How much | 同一声明配置/批次新首次放行完整坯的净1 kg |
| How well | 按实际买方坯料图样及尺寸、固化状态、完整性、可加工验收方案; 不编数值限值 |
| How long or cycle | 一个生产/首次放行批次，不是服装使用寿命 |
| reference_flow_link | released_blank |

| Field | Value |
| --- | --- |
| Reference amount | 1 |
| Reference product flow | 纽扣模及其他纽扣零件，纽扣坯料，拉链的零件 `95266833-c3f6-48ca-b9ca-724c29e03eb3` |
| Reference flow property | Mass `93a60a56-a3c8-11da-a746-0800200b9a66` |
| Reference unit group | Units of mass `93a60a57-a4c8-11da-a746-0800200c9a66` |
| Reference unit | kg |
| Required qualifiers | 实际场址地理期间与批次; 买方坯料图样尺寸及验收方案; 实体不发泡无增强无颜料已固化UPR坯; 仅离心浇片及冲坯路线; 无孔且未经成品制扣精加工; 整份供货UPR牌号配方与上游所有者; 各实际独立加入制剂及供货状态; 实际固化调节及可加工证据; 唯一首次放行净Q及皮重历史; 如用件数则记录同配置实测件数质量换算方法; 原料非WIP实体WIP及FG实物库存与各继承交换向量; 全部失败零产出清理返工及重复检测; 原Qc已观察FG服务区间H及毛流转; 每种包装池毛发运退回及废物账; 独立物种水相态及物料元素平衡; 原生流供方兼容性及分配不确定性; 固定首次齐套可供货门及原Q0全去向湿桥; 实际首次包装与后续服务和设备负荷互不重叠; 包装真实I和双向J H2O及仅OTHER同侧重复X; 完整污染receiverQt及实际provider总需求和各原队列A; 完整配置设备台群湿库存和真实provider覆盖服务分母; 完整FTIR程序与Method18反证及真实DF印刷矛盾 |

全部限定须进入数据集元数据、完整参考/流描述或可追溯过程说明。宽泛原生已制造零件产品族仅限上述完整固化坯，并保留原始质量/kg基准。

## 4. 计量与单位规则

| rule_id | Applies to | Required property | Required unit | Rule |
| --- | --- | --- | --- | --- |
| reference_mass | reference product | Mass `93a60a56-a3c8-11da-a746-0800200b9a66` | kg | 首次验收位于同配置全部实际混合、离心浇铸、冲切、固化/硬化、调理、坯检验/返工及必要供货包装完成、工厂可供货之时。Q（亦记Q0或原队列c的Qc）为独立实测的唯一首次完整纽扣坯验收净kg，包含实际留存树脂成分和水一次，排除实测可拆包装皮重。首次必要包装归新增制造，后续留库/重包/再交付/修理/复检仅是H内原队列真实服务。件数转质量仅用独立实测同配置M及抽样/不确定性，不用目录坯重。 |
| whole_supply | all inventory rows | Mass | kg | 每份外部配制树脂、引发剂或促进剂按整份供货采购一次；含量、活性物及载水为非加和子账。真实厂内配制则逐项记录独立外购材料及实际混合能耗损失。 |
| raw_units | all inventory rows | Measured extensive quantity | raw units | 保留原生单位与真实状态。仅对真实测量速率积分；已积分的气液体积不能再乘时间。体积换质量使用该物质实际组成/温压下独立测得密度，不能把水密度套给溶剂、树脂、废液或气体。实测电力kWh在分配前乘3.6转MJ。 |
| one_normalization | all inventory rows | actual row numerator per original net Mass denominator | row native unit per kg | 协议采集未除基准的原始量。convert_raw、trace_cohort及select_denominator先于report_once；卡片与aggregation仅引用同一次结果。Q或Qc非正时保留全部真实负荷和继承向量，不出单位结果；不能删除失败期间或把未知关系强称通过。 |

## 5. 系统边界

### 边界概化

| Field | Value |
| --- | --- |
| declared_starting_condition | 完整外购液态制扣浇注UPR及其真实内含组成; 每种真实独立厂内添加及供货状态 |
| starting_condition_role | 真实前景供货边界; 树脂化学合成仍属上游 |
| product_classification_scope | CPC3.0:38924; 仅选定坯料子集 |
| recursive_input_rule | 外购现成坯属于不同转换/重包装边界，不是本原料体系至新坯制造。内部转移带完整向量抵消; 返回/复验坯不产生Q。 |
| upstream_dataset_requirement | 实际整份供货配方/实物及供方符合全部原生限制; 单一上游所有者，不重复采购组成 |
| disclosure | 声明真实配方所有权、路线固化验收、实物与继承向量门、已观察FG服务、排除项及未知。 |

| rule_id | applies_to | rule | source_ids |
| --- | --- | --- | --- |
| b_route | make_blank | 从实际整份外购液态UPR及独立购入化学物开始；纳入接收/领用、真实混料、离心鼓筒浇片、凝胶片取出、冲坯、实际固化/调节、检验及首次放行。选定终端是作为部件销售的完整硬质可加工坯。已属上游的树脂合成、棒材切片、单坯直接浇注、发泡/增强/颜料着色、车削钻孔抛光染色形成完整纽扣、拉链制造及外购成坯重包装均排除。 | jindal-polyester-casting; pfb-polyester-blanks; classic-button-process; epa-polyester-fabrication |
| b_events | all inventory rows | 保留真实拒收、失败、未授权或验收不合格作业、启停、待机、抽样、清理与返工；授权不通过不能删除实物活动。不得猜零、用集合截断或默认产率。每个真实但未列的材料、燃料、载热体、水、制冷剂、包装、废物和化学物种须增列具体原子卡；not_applicable须有不存在的证据。 |  |
| b_cohort | make_blank; post_release | 独立核对Q0 = D0_c + FG0_c + Held0_c + L0_c + T0_c，各项分别为互不重叠的尚存原物料交付、现场已放行FG、全部其他实际现场已验收状态、原物料/水不可逆损失和其他终端去向。按每个真实地点/状态继续细分；gross交付/退回循环仅在此事件桥中抵消。各原物料去向在锁定验收基准下仅记一次。另将各幸存制品当前湿质量桥接到仍在其中的原物料以及后续真实留存非水物料和水变化。不将原损失恢复进幸存物后又记入L0_c。新料/吸湿增加实物质量，不增加Q。Q0=0或未知保留全部原始负荷且无归一化结果。 完整湿原料、WIP、非WIP、已验收/待检/退回FG、包装、真实工具/设备及设备内流体库存，独立于参考事件和逐交换负荷。自有期初WIP全部真实既往前景历史只承接一次，仅转移有据的期末仍未分配向量。实际整份液态UPR、MEKP制剂、钴促进剂及各真实独立供货添加物具有一个完整真实上游生产者，已含单体/载体/抑制剂/促进剂仅作非加和组成。现场真实配制记录独立外购成分及全部混合/清理/废物。整份supplier数据集与相同树脂/化学品/公用工程/运输/设备历史的展开表示互斥。不购买成品坯隐藏浇铸，也不以采购热或预混物隐藏真实现场生产。 |  |
| b_service | post_release | 全部已执行包装、仓储、搬运及发运服务，包括滞留FG，均按原Qc和观察H保留。Qc始终为原首次放行kg；H是观察描述而非第二除数。保留历史批次期初/期末FG及完整继承负荷向量；未来未观察作业明示未知。 |  |
| b_water | all inventory rows | 完整湿态实物质量及相关元素门独立闭合；真实分子物种、游离/相态/结构/反应水另有证据。UPR固化不是树脂合成，不能强加缩聚水。不能用一个残差拟合两个未知；COD/VOC/PM指标不能变成具体化学物。真实存在的外部冷凝水或换热水返回须另作产品输出，记录实际热状态/焓及供方水能约定；不得虚构蒸汽或锅炉。 | epa-polyester-fabrication |
| b_full_1 | all actual applicable exchanges | 终端为一种真实完整、实心、非泡沫、未增强、未着色且已固化的不饱和聚酯纽扣坯，未钻孔，也未车削/抛光成完整缝纫纽扣。Jindal直接描述液态树脂离心浇片、软片冲坯及随后硬化，邻述蜡处理管棒材切片是不同路线。PFB独立生产和供货聚酯坯，不证明与Jindal同SKU或工厂。Classic区分冲坯与后续车削、钻孔、抛光和成品纽扣检验，其颜料/珠光实例不用于本未着色配置。Samrat独立供货透明浇铸级UPR并说明MEKP/钴体系作用，所广告剂量、苯乙烯分数、固化时间、温度和桶重不作为默认值。这是透明定性技术综合，不是同一工厂/订单实测、配方或认证。 | `ilcd-attributional-allocation-2010`; `jindal-polyester-casting`; `epa-polyester-fabrication` |
| b_full_2 | all actual applicable exchanges | 首次验收位于同配置全部实际混合、离心浇铸、冲切、固化/硬化、调理、坯检验/返工及必要供货包装完成、工厂可供货之时。Q（亦记Q0或原队列c的Qc）为独立实测的唯一首次完整纽扣坯验收净kg，包含实际留存树脂成分和水一次，排除实测可拆包装皮重。首次必要包装归新增制造，后续留库/重包/再交付/修理/复检仅是H内原队列真实服务。件数转质量仅用独立实测同配置M及抽样/不确定性，不用目录坯重。 | `ilcd-attributional-allocation-2010`; `jindal-polyester-casting`; `epa-polyester-fabrication` |
| b_full_3 | all actual applicable exchanges | 独立核对Q0 = D0_c + FG0_c + Held0_c + L0_c + T0_c，各项分别为互不重叠的尚存原物料交付、现场已放行FG、全部其他实际现场已验收状态、原物料/水不可逆损失和其他终端去向。按每个真实地点/状态继续细分；gross交付/退回循环仅在此事件桥中抵消。各原物料去向在锁定验收基准下仅记一次。另将各幸存制品当前湿质量桥接到仍在其中的原物料以及后续真实留存非水物料和水变化。不将原损失恢复进幸存物后又记入L0_c。新料/吸湿增加实物质量，不增加Q。Q0=0或未知保留全部原始负荷且无归一化结果。 | `ilcd-attributional-allocation-2010`; `jindal-polyester-casting`; `epa-polyester-fabrication` |
| b_full_4 | all actual applicable exchanges | 完整湿原料、WIP、非WIP、已验收/待检/退回FG、包装、真实工具/设备及设备内流体库存，独立于参考事件和逐交换负荷。自有期初WIP全部真实既往前景历史只承接一次，仅转移有据的期末仍未分配向量。实际整份液态UPR、MEKP制剂、钴促进剂及各真实独立供货添加物具有一个完整真实上游生产者，已含单体/载体/抑制剂/促进剂仅作非加和组成。现场真实配制记录独立外购成分及全部混合/清理/废物。整份supplier数据集与相同树脂/化学品/公用工程/运输/设备历史的展开表示互斥。不购买成品坯隐藏浇铸，也不以采购热或预混物隐藏真实现场生产。 | `ilcd-attributional-allocation-2010`; `jindal-polyester-casting`; `epa-polyester-fabrication` |
| b_full_5 | all actual applicable exchanges | 每个实际聚乙烯膜内衬或瓦楞纸箱整湿池以kg核对O + P + I + ERin + J_in + H2O_in - X_in = C + S + EOout + W + J_out + H2O_out - X_out。O/C包含空包、附着WIP、附着FG、退回及复用实物库存；P为新增采购，I为真实供应商已含接收，ERin为外部退回收进，S为gross对外发运，EOout为对外退还，W为实际整湿废物出口。内部复用配对在合并时抵消，不是ERin、EOout或采购。供应商已含包装具有一个完整上游所有者，不再购买一次。 | `ilcd-attributional-allocation-2010`; `jindal-polyester-casting`; `epa-polyester-fabrication` |
| b_full_6 | all actual applicable exchanges | J_in/J_out为独立实证且互不重叠的额外非水转移，例如真实留存修理料、粉尘或油，仅限尚未包含于其他整gross腿的部分。H2O_in/H2O_out为实际吸湿/加水/蒸发或其他未包含于整湿腿的水转移。期末C保留全部真实增量，即使没有修理。X_in/X_out仅扣OTHER同侧流观测间已证重叠，不扣真实J/H2O、C、反向流、未知闭合差或卡片存在。未知项不拟合。真实增量追到物理来源/接收方及具体原子接口；配对内部J/水不是新增provider或废物出口。gross湿腿内含的水/物料只计一次。 | `ilcd-attributional-allocation-2010`; `jindal-polyester-casting`; `epa-polyester-fabrication` |
| b_full_7 | all actual applicable exchanges | 实际固化边角料、未固化混合物、废丙酮、含水废物、污染擦布/过滤件、废内衬/纸箱或退役工具/设备的一次整件接收事件保留完整湿Qt，基材加全部留存树脂/溶剂/残留/水仅一次。嵌套来源/物种/检验质量不是额外出口，除非真实分离。实际receiver/provider按其兼容单位一次接收全部实物Qt。另保留实际建模服务总需求及各受服务原Qc或真实新增Q的非重叠A_e,c。不按归属份额缩Qt，不另加留存溶剂/水，不向各队列重新计全部Qt，也不推再生抵扣。A未知保持未解，完整实物事件/历史保留。 | `ilcd-attributional-allocation-2010`; `jindal-polyester-casting`; `epa-polyester-fabrication` |
| b_full_8 | all actual applicable exchanges | 各实际离心浇铸鼓、冲床、切模及调理架有一份真实配置实物台群，包含完整收进、退回/退役、湿库存、实际设备内流体、磨损和修理。整设备provider与展开制造/维护互斥。实物V/M独立于兼容provider/服务A及真实服务覆盖/历史。Mass/kg设备产品provider须完整配置实测M及provider真实覆盖历史支持的分配/服务份额，不猜寿命/能力，不把观察H当总寿命。小时服务provider保留其单位及真实记录换算桥，不直接替成kg。分母未知保留真实已执行服务、失败及库存，不编A。 | `ilcd-attributional-allocation-2010`; `jindal-polyester-casting`; `epa-polyester-fabrication` |
| b_full_9 | all actual applicable exchanges | 这里固化为供货UPR制剂真实自由基交联，不凭假定变成现场新聚酯缩聚。实际单体结合、留存未反应单体、蒸发、引发剂分解及各真实物种生成/消耗，独立于总湿质量和元素守恒。各反应分子物种记录期初 + 实际输入 + 独立实证生成 = 期末 + 实际输出 + 独立实证消耗，不把已固化聚合物当未改变苯乙烯单体守恒，也不强加缩合水。含挥发物整废物和收集冷凝液保持整件实物接收。实际试样完整性、硬化及可加工性验收采用机械/买方证据，不编残余单体化学限值、统一硬度或时间/温度。若真实等级要求化学检验，其真实基质特定程序须存在后才完成该主张。 | `ilcd-attributional-allocation-2010`; `jindal-polyester-casting`; `epa-polyester-fabrication` |
| b_full_10 | all actual applicable exchanges | 对实际外部苯乙烯、丙酮和分子H2O蒸气，EPA Method320及所含FTIR Protocol提供独立抽取式气相程序：真实目标/参考光谱或Protocol4.6制备、含水等光谱/干扰选择、合适光路/T/P条件、不冷凝的加热惰性输送、漏检/线性/背景/CTS检查、完整原始光谱及残差分析、独立同基准气量/流量与浓度积分，以及分析物特定输送/基质验证。遵守不同的例行QA加标和第13节验证/Method301偏差精密度程序，普通加标不替代初次验证，其结果不是自动校正因子。不声称现场实际验证或全部蒸气/基质覆盖。程序确实存在，未执行现场/参考/QA工作属于研究要求；实际不适用或未建立的必要程序仍具体hold。不把交联聚合物粒子或液体冷凝物当气相单体测量。 | `ilcd-attributional-allocation-2010`; `epa-method320`; `epa-method18-counter`; `epa-method4-moisture` |
| b_full_11 | all actual applicable exchanges | 保留Method320真实印刷矛盾：第9.2.3节式3写tracer_spiked/tracer_standard，却称DF至少10，式4又将其作为混合分数。不照抄不兼容量纲的倒数约定。本PCR明确独立量纲综合为同一真实摩尔湿/干基准上k=(tracer_spiked-tracer_native)/(tracer_standard-tracer_native)，要求不同且非零差的端元、守恒示踪物及0<k<1；C_expected=k*C_standard+(1-k)*C_native。倒数稀释比为1/k，不能替k。保留实际流量、端元/背景及现场回收证据，算例不规定示踪剂量、SF6使用、配方或已执行QA。光谱采用来源真实光程/温度/压力校正；排放质量只积分一次实际同状态浓度与气量，已积分体积不再乘时间。 | `ilcd-attributional-allocation-2010`; `epa-method320`; `epa-method18-counter`; `epa-method4-moisture` |
| b_full_12 | all actual applicable exchanges | Method18是相反范围证据，不是无条件苯乙烯方法：第1.2.2节排除高分子聚合物、可能在分析前聚合的化合物及极低蒸气压化合物，仅有GC检测器程序不能闭合可聚合样品的保全。Method4独立区分准确参考水分测定和设备设定近似估计，并提示饱和/液滴正偏差，含有机物冷凝液不能自动算纯水。FTIR定量水要求真实Protocol4.6定量参考，不能仅用水干扰光谱。总VOC、暴露浓度、COD及总PM不是苯乙烯/丙酮/聚酯物种质量。真实聚合物特定颗粒主张须有已建立的识别/回收/基质程序，缺失时将受影响真实主张保持hold，不把全部收集PM贴为UPR。这些方法文件均不提供已测纽扣坯生产结果。 | `ilcd-attributional-allocation-2010`; `epa-method320`; `epa-method18-counter`; `epa-method4-moisture` |

## 6. 过程清单结构

### 过程图

| process_id | process_name | inclusion | inclusion_condition | role | quantitative_reference |
| --- | --- | --- | --- | --- | --- |
| make_blank | 完整体系供货至坯料首次放行 | required | 选定离心浇片冲坯路线 | manufacturing | released_blank |
| post_release | 首次必要包装、设备保管及原FG队列真实服务 | conditional | 制造期间真实首次包装/设备台群及H内后续服务，含留库或零发运 | foreground_support_and_original_cohort_service | 首次制造使用Q；后续使用原Qc，H不是分母 |

### 过程： 浇片冲坯固化及放行 (`make_blank`)

#### 输入

##### 产品流

###### 整份供货制扣浇注树脂 (`upr_supply`)

整份实际液态树脂到货及浇注领用；购入树脂的合成保留在其上游数据集。 原生产品身份为作为原材料供应的不饱和聚酯树脂，工厂生产混合，全球；未规定纽扣级配方、反应稀释剂比例、固化状态或供方性能。选择实际液态制扣浇注用不饱和聚酯供货配方，由一个上游所有者整份记录一次。内含苯乙烯、阻聚剂、载体或已含促进剂只作组成分账，不另作采购。不得用热塑性PET、固化废料或醇酸树脂替代，也不得假定配方等效。 实际原生单位毛实物流V_r与归属负荷A_r及完整继承交换向量独立记录。原始采集不除基准；report_once唯一执行实际归属A_r经唯一report_once除D_r；完整实物V_r另保留，不重复provider。。实物卡的N_r为完整V_r，不能是分配缩小量或库存净差；公用工程/服务卡采用归属A_r。 本卡建模分子N_r为真实兼容provider/服务归属A_r；独立完整收支实物V_r不产生第二采购或处理。


- 选定流：不饱和聚酯树脂 `6af057bf-05f5-446b-b69c-e66c5b8e66e2`
- 流属性/单位：Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- 数量规则: N_r / D_r
- 数值来源模式：`calculated_value`
- 适用范围：`site_specific`
- 归一化基准：每 1 kg 参考流
- 基准类型：`process_output`
- 证据类型：`calculated_from_collection`
- 采集协议：`cp_materials`
- 来源：`jindal-polyester-casting`; `epa-polyester-fabrication`; `samrat-button-resin`

###### 过氧化甲乙酮引发剂制剂 (`mekp_supply`)

仅在实际加入时记录整份供货MEKP固化制剂；过氧化物含量及稳定剂/载体不是独立采购。不编造MEKP用量或活性浓度。仅用于现场实际独立购入；另一供货配方已含的同一组成不能再次采购。保留整份配方、含量/载体分账、实际领退、未使用非WIP库存及供方。其他实际化学物/制剂须另建原子卡。 实际原生单位毛实物流V_r与归属负荷A_r及完整继承交换向量独立记录。原始采集不除基准；report_once唯一执行实际归属A_r经唯一report_once除D_r；完整实物V_r另保留，不重复provider。。实物卡的N_r为完整V_r，不能是分配缩小量或库存净差；公用工程/服务卡采用归属A_r。 本卡建模分子N_r为真实兼容provider/服务归属A_r；独立完整收支实物V_r不产生第二采购或处理。


- 选定流：过氧化甲乙酮固化溶液
- 流属性/单位：Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- 数量规则: N_r / D_r
- 数值来源模式：`calculated_value`
- 适用范围：`site_specific`
- 归一化基准：每 1 kg 参考流
- 基准类型：`process_output`
- 证据类型：`calculated_from_collection`
- 采集协议：`cp_materials`
- 来源：`epa-polyester-fabrication`; `samrat-button-resin`

###### 钴促进剂溶液 (`cobalt_supply`)

有条件记录实际辛酸钴制剂；供方须确认本化合物和整份溶液。制造商单写钴不能证明金属钴、草酸钴、醋酸钴或溶液浓度。仅用于现场实际独立购入；另一供货配方已含的同一组成不能再次采购。保留整份配方、含量/载体分账、实际领退、未使用非WIP库存及供方。其他实际化学物/制剂须另建原子卡。 实际原生单位毛实物流V_r与归属负荷A_r及完整继承交换向量独立记录。原始采集不除基准；report_once唯一执行实际归属A_r经唯一report_once除D_r；完整实物V_r另保留，不重复provider。。实物卡的N_r为完整V_r，不能是分配缩小量或库存净差；公用工程/服务卡采用归属A_r。 本卡建模分子N_r为真实兼容provider/服务归属A_r；独立完整收支实物V_r不产生第二采购或处理。


- 选定流：2-乙基己酸钴(II)促进剂溶液
- 流属性/单位：Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- 数量规则: N_r / D_r
- 数值来源模式：`calculated_value`
- 适用范围：`site_specific`
- 归一化基准：每 1 kg 参考流
- 基准类型：`process_output`
- 证据类型：`calculated_from_collection`
- 采集协议：`cp_materials`
- 来源：`classic-button-process`; `samrat-button-resin`

###### 独立购入的苯乙烯单体 (`styrene_supply`)

仅记录实际另加的反应稀释剂CAS100-42-5；不能重复计算液态UPR已有的苯乙烯。采购须使用产品身份，不能借用基本排放流UUID。仅用于现场实际独立购入；另一供货配方已含的同一组成不能再次采购。保留整份配方、含量/载体分账、实际领退、未使用非WIP库存及供方。其他实际化学物/制剂须另建原子卡。 实际原生单位毛实物流V_r与归属负荷A_r及完整继承交换向量独立记录。原始采集不除基准；report_once唯一执行实际归属A_r经唯一report_once除D_r；完整实物V_r另保留，不重复provider。。实物卡的N_r为完整V_r，不能是分配缩小量或库存净差；公用工程/服务卡采用归属A_r。 本卡建模分子N_r为真实兼容provider/服务归属A_r；独立完整收支实物V_r不产生第二采购或处理。


- 选定流：作为产品供应的苯乙烯单体
- 流属性/单位：Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- 数量规则: N_r / D_r
- 数值来源模式：`calculated_value`
- 适用范围：`site_specific`
- 归一化基准：每 1 kg 参考流
- 基准类型：`process_output`
- 证据类型：`calculated_from_collection`
- 采集协议：`cp_materials`
- 来源：`classic-button-process`; `epa-polyester-fabrication`

###### 实际浇注使用的石蜡 (`wax_supply`)

若确实存在，记录实际独立供应的石蜡CAS8002-74-2及声明的脱模/配方用途。不假定废塑料再生路线；复配脱模制剂须改用其真实完整身份。仅用于现场实际独立购入；另一供货配方已含的同一组成不能再次采购。保留整份配方、含量/载体分账、实际领退、未使用非WIP库存及供方。其他实际化学物/制剂须另建原子卡。 实际原生单位毛实物流V_r与归属负荷A_r及完整继承交换向量独立记录。原始采集不除基准；report_once唯一执行实际归属A_r经唯一report_once除D_r；完整实物V_r另保留，不重复provider。。实物卡的N_r为完整V_r，不能是分配缩小量或库存净差；公用工程/服务卡采用归属A_r。 本卡建模分子N_r为真实兼容provider/服务归属A_r；独立完整收支实物V_r不产生第二采购或处理。


- 选定流：石蜡
- 流属性/单位：Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- 数量规则: N_r / D_r
- 数值来源模式：`calculated_value`
- 适用范围：`site_specific`
- 归一化基准：每 1 kg 参考流
- 基准类型：`process_output`
- 证据类型：`calculated_from_collection`
- 采集协议：`cp_materials`
- 来源：`classic-button-process`

###### 实际丙酮清洗溶剂 (`acetone_supply`)

有条件记录实际用于鼓筒/工具清理的丙酮CAS67-64-1。真实供货不符时不得采用晶圆专用丙酮或固定摩尔浓度溶液。收集废溶剂与空气损失分别记录去向。仅用于现场实际独立购入；另一供货配方已含的同一组成不能再次采购。保留整份配方、含量/载体分账、实际领退、未使用非WIP库存及供方。其他实际化学物/制剂须另建原子卡。 实际原生单位毛实物流V_r与归属负荷A_r及完整继承交换向量独立记录。原始采集不除基准；report_once唯一执行实际归属A_r经唯一report_once除D_r；完整实物V_r另保留，不重复provider。。实物卡的N_r为完整V_r，不能是分配缩小量或库存净差；公用工程/服务卡采用归属A_r。 本卡建模分子N_r为真实兼容provider/服务归属A_r；独立完整收支实物V_r不产生第二采购或处理。


- 选定流：丙酮清洗溶剂
- 流属性/单位：Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- 数量规则: N_r / D_r
- 数值来源模式：`calculated_value`
- 适用范围：`site_specific`
- 归一化基准：每 1 kg 参考流
- 基准类型：`process_output`
- 证据类型：`calculated_from_collection`
- 采集协议：`cp_materials`
- 来源：`epa-polyester-fabrication`

###### 实际外供液态清洗或冷却水 (`water_supply`)

仅记录实际跨界供水，并独立确定水质、水源、状态与测量量。本路线不强制水浴、盐浴、蒸汽、锅炉或去离子化；真实存在时须逐项增加盐、能耗与返回流。仅用于现场实际独立购入；另一供货配方已含的同一组成不能再次采购。保留整份配方、含量/载体分账、实际领退、未使用非WIP库存及供方。其他实际化学物/制剂须另建原子卡。 实际原生单位毛实物流V_r与归属负荷A_r及完整继承交换向量独立记录。原始采集不除基准；report_once唯一执行实际归属A_r经唯一report_once除D_r；完整实物V_r另保留，不重复provider。。实物卡的N_r为完整V_r，不能是分配缩小量或库存净差；公用工程/服务卡采用归属A_r。 本卡建模分子N_r为真实兼容provider/服务归属A_r；独立完整收支实物V_r不产生第二采购或处理。


- 选定流：液态工艺用水
- 流属性/单位：Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- 数量规则: N_r / D_r
- 数值来源模式：`calculated_value`
- 适用范围：`site_specific`
- 归一化基准：每 1 kg 参考流
- 基准类型：`process_output`
- 证据类型：`calculated_from_collection`
- 采集协议：`cp_materials`
- 来源：

###### 浇片冲坯固化及辅助用电 (`make_electricity`)

纳入实际混料、鼓筒驱动、取片、冲坯、实际固化/调节、通风、检测、失败、待机/启停、清理和返工。电加热仅在实测存在时纳入，不假定烘箱周期。 原生产品身份为中国、低于1千伏、送达用户的电网平均消费组合；不是单一水电发电或高压供电。仅对实际符合的供电采用该UUID。其他国家、电压、发电合同或现场电源须使用自身已核实的身份与供方。原生净热值属性使用以MJ为参考的能量单位组；实测kWh在归属前乘3.6转换，不能把能量当作kg。 实际原生单位毛实物流V_r与归属负荷A_r及完整继承交换向量独立记录。原始采集不除基准；report_once唯一执行N_r / D_r。实物卡的N_r为完整V_r，不能是分配缩小量或库存净差；公用工程/服务卡采用归属A_r。 首次必要包装及设备保管属于真实制造支持，provider/电量归新增Q；后续原FG服务归原Qc和实际H。同一电表、设备或包装历史的两个阶段按实际事件互斥分配，不能采购/计量两次，也不因机器过程ID仍名post_release而移出首次验收前的真实制造负荷。

- 选定流：交流电 `50657322-939c-4829-a87b-47c093bfa6a7`
- 流属性/单位：Net calorific value `93a60a56-a3c8-11da-a746-0800200c9a66` / MJ
- 数量规则：N_r / D_r
- 数值来源模式：`calculated_value`
- 适用范围：`site_specific`
- 归一化基准：每 1 kg 参考流
- 基准类型：`process_output`
- 证据类型：`calculated_from_collection`
- 采集协议：`cp_energy`
- 来源：`jindal-polyester-casting`; `classic-button-process`

##### 废物流

##### 基本流

#### 输出

##### 产品流

###### 首次质量放行的完整坯料 (`released_blank`)

Q是声明批次新制完整坯料唯一首次放行的净质量。同批期末合格FG已含于Q，不能再次增加。放行须有实际买方图样/规格、稳定固化可加工状态、尺寸、完整性和验收证据；不编造硬度、质量、寿命或未来成品纽扣性能。 原生身份为工厂生产混合中的已制造完整零件；其产品族明确包括纽扣坯。本卡仅选择完整、实体、不发泡、无增强、无颜料、已固化的不饱和聚酯浇片冲切坯；没有缝纫孔及最终制扣精加工。它不是树脂、整片板材、模塑机器、混合件集合、完整纽扣或拉链。原生产品族未固定树脂牌号、尺寸、地理或单件质量；必须由实际供货与验收记录确定这些限定。原生参考属性为质量而非件数。 实际原生单位毛实物流V_r与归属负荷A_r及完整继承交换向量独立记录。原始采集不除基准；report_once唯一执行N_r / D_r。实物卡的N_r为完整V_r，不能是分配缩小量或库存净差；公用工程/服务卡采用归属A_r。

- 选定流：纽扣模及其他纽扣零件，纽扣坯料，拉链的零件 `95266833-c3f6-48ca-b9ca-724c29e03eb3`
- 流属性/单位：Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- 数量规则：1 千克
- 数值来源模式：`calculated_value`
- 适用范围：`site_specific`
- 归一化基准：每 1 kg 参考流
- 基准类型：`process_output`
- 证据类型：`calculated_from_collection`
- 采集协议：`cp_release`
- 来源：`jindal-polyester-casting`; `pfb-polyester-blanks`; `classic-button-process`

###### 未改变未使用UPR的对外退回 (`unused_resin_return`)

仅用于真实对外退回同一供货身份、未改变且可用的未反应UPR。记录完整实物出口，不作负采购、抵扣、固化废物、WIP或Q。保留原批次及继承向量；其他退回未改变材料须另列卡。 原生产品身份为作为原材料供应的不饱和聚酯树脂，工厂生产混合，全球；未规定纽扣级配方、反应稀释剂比例、固化状态或供方性能。选择实际液态制扣浇注用不饱和聚酯供货配方，由一个上游所有者整份记录一次。内含苯乙烯、阻聚剂、载体或已含促进剂只作组成分账，不另作采购。不得用热塑性PET、固化废料或醇酸树脂替代，也不得假定配方等效。 实际原生单位毛实物流V_r与归属负荷A_r及完整继承交换向量独立记录。原始采集不除基准；report_once唯一执行N_r / D_r。实物卡的N_r为完整V_r，不能是分配缩小量或库存净差；公用工程/服务卡采用归属A_r。

- 选定流：不饱和聚酯树脂 `6af057bf-05f5-446b-b69c-e66c5b8e66e2`
- 流属性/单位：Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- 数量规则：N_r / D_r
- 数值来源模式：`calculated_value`
- 适用范围：`site_specific`
- 归一化基准：每 1 kg 参考流
- 基准类型：`process_output`
- 证据类型：`calculated_from_collection`
- 采集协议：`cp_materials`
- 来源：

##### 废物流

###### 固化聚酯冲切骨架及废坯 (`cured_scrap`)

单一实际分流的固化固体出口，测量完整湿态质量及污染/物质分账。交联树脂不能假定热塑性熔融回用。出售仍保留真实废物状态，不自动转移负荷或抵扣。 实际原生单位毛实物流V_r与归属负荷A_r及完整继承交换向量独立记录。原始采集不除基准；report_once唯一执行N_r / D_r。实物卡的N_r为完整V_r，不能是分配缩小量或库存净差；公用工程/服务卡采用归属A_r。 实际固化边角料、未固化混合物、废丙酮、含水废物、污染擦布/过滤件、废内衬/纸箱或退役工具/设备的一次整件接收事件保留完整湿Qt，基材加全部留存树脂/溶剂/残留/水仅一次。嵌套来源/物种/检验质量不是额外出口，除非真实分离。实际receiver/provider按其兼容单位一次接收全部实物Qt。另保留实际建模服务总需求及各受服务原Qc或真实新增Q的非重叠A_e,c。不按归属份额缩Qt，不另加留存溶剂/水，不向各队列重新计全部Qt，也不推再生抵扣。A未知保持未解，完整实物事件/历史保留。

- 选定流：固化不饱和聚酯固体废料
- 流属性/单位：Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- 数量规则：N_r / D_r
- 数值来源模式：`calculated_value`
- 适用范围：`site_specific`
- 归一化基准：每 1 kg 参考流
- 基准类型：`process_output`
- 证据类型：`calculated_from_collection`
- 采集协议：`cp_outlets`
- 来源：`epa-polyester-fabrication`

###### 未固化树脂混合废物 (`uncured_waste`)

实际未反应/部分反应的料罐、鼓筒及失败批次混合物，作为一个按接收方测量的废物记录。同一混合物的来源组成分账不加和；同一实物出口不能再重复作固化废料或废溶剂。 实际原生单位毛实物流V_r与归属负荷A_r及完整继承交换向量独立记录。原始采集不除基准；report_once唯一执行N_r / D_r。实物卡的N_r为完整V_r，不能是分配缩小量或库存净差；公用工程/服务卡采用归属A_r。 实际固化边角料、未固化混合物、废丙酮、含水废物、污染擦布/过滤件、废内衬/纸箱或退役工具/设备的一次整件接收事件保留完整湿Qt，基材加全部留存树脂/溶剂/残留/水仅一次。嵌套来源/物种/检验质量不是额外出口，除非真实分离。实际receiver/provider按其兼容单位一次接收全部实物Qt。另保留实际建模服务总需求及各受服务原Qc或真实新增Q的非重叠A_e,c。不按归属份额缩Qt，不另加留存溶剂/水，不向各队列重新计全部Qt，也不推再生抵扣。A未知保持未解，完整实物事件/历史保留。

- 选定流：未固化聚酯浇注混合废物
- 流属性/单位：Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- 数量规则：N_r / D_r
- 数值来源模式：`calculated_value`
- 适用范围：`site_specific`
- 归一化基准：每 1 kg 参考流
- 基准类型：`process_output`
- 证据类型：`calculated_from_collection`
- 采集协议：`cp_outlets`
- 来源：`epa-polyester-fabrication`

###### 收集的废丙酮清洗液 (`spent_acetone`)

有条件记录单一实际收集的富丙酮废制剂，包含完整载体/树脂，分离容器皮重并确认真实回收/处理接收方。内部溶剂回收抵消配对转移，不自动抵扣原生溶剂。 实际原生单位毛实物流V_r与归属负荷A_r及完整继承交换向量独立记录。原始采集不除基准；report_once唯一执行N_r / D_r。实物卡的N_r为完整V_r，不能是分配缩小量或库存净差；公用工程/服务卡采用归属A_r。 实际固化边角料、未固化混合物、废丙酮、含水废物、污染擦布/过滤件、废内衬/纸箱或退役工具/设备的一次整件接收事件保留完整湿Qt，基材加全部留存树脂/溶剂/残留/水仅一次。嵌套来源/物种/检验质量不是额外出口，除非真实分离。实际receiver/provider按其兼容单位一次接收全部实物Qt。另保留实际建模服务总需求及各受服务原Qc或真实新增Q的非重叠A_e,c。不按归属份额缩Qt，不另加留存溶剂/水，不向各队列重新计全部Qt，也不推再生抵扣。A未知保持未解，完整实物事件/历史保留。

- 选定流：废丙酮树脂清洗液
- 流属性/单位：Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- 数量规则：N_r / D_r
- 数值来源模式：`calculated_value`
- 适用范围：`site_specific`
- 归一化基准：每 1 kg 参考流
- 基准类型：`process_output`
- 证据类型：`calculated_from_collection`
- 采集协议：`cp_outlets`
- 来源：`epa-polyester-fabrication`

###### 收集的含水清洗液或冷却排污 (`aqueous_waste`)

有条件记录实际单独收集的含水废液及液固组成、温度和接收方；不是纯水或基本排放。现场处理时增加真实处理交换和经鉴定的分子排放；COD是水质指标而非化学物质量。 实际原生单位毛实物流V_r与归属负荷A_r及完整继承交换向量独立记录。原始采集不除基准；report_once唯一执行N_r / D_r。实物卡的N_r为完整V_r，不能是分配缩小量或库存净差；公用工程/服务卡采用归属A_r。 实际固化边角料、未固化混合物、废丙酮、含水废物、污染擦布/过滤件、废内衬/纸箱或退役工具/设备的一次整件接收事件保留完整湿Qt，基材加全部留存树脂/溶剂/残留/水仅一次。嵌套来源/物种/检验质量不是额外出口，除非真实分离。实际receiver/provider按其兼容单位一次接收全部实物Qt。另保留实际建模服务总需求及各受服务原Qc或真实新增Q的非重叠A_e,c。不按归属份额缩Qt，不另加留存溶剂/水，不向各队列重新计全部Qt，也不推再生抵扣。A未知保持未解，完整实物事件/历史保留。

- 选定流：聚酯生产线含水清洗废液
- 流属性/单位：Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- 数量规则：N_r / D_r
- 数值来源模式：`calculated_value`
- 适用范围：`site_specific`
- 归一化基准：每 1 kg 参考流
- 基准类型：`process_output`
- 证据类型：`calculated_from_collection`
- 采集协议：`cp_outlets`
- 来源：`epa-polyester-fabrication`

##### 基本流

###### 外部苯乙烯单体排放 (`styrene_air`)

测量混料/浇注/固化/清理时实际逸出的单体，并独立核对留存、回收和废弃单体。不能把全部树脂失重当作苯乙烯；不得把复材铺层因子移用于纽扣浇注。 原生基本流为苯乙烯CAS100-42-5，排放至未细分空气，质量/kg。长同义词表包含聚合物/商品名噪声；这不允许用聚苯乙烯颗粒或α-甲基苯乙烯替代。仅用于独立鉴定的单体实际跨越外部空气门；室内暴露不是额外外排。已知城市、高架或其他介质分区时，须选匹配原生流。不得把总VOC当作苯乙烯，也不移用AP-42因子。 实际原生单位毛实物流V_r与归属负荷A_r及完整继承交换向量独立记录。原始采集不除基准；report_once唯一执行N_r / D_r。实物卡的N_r为完整V_r，不能是分配缩小量或库存净差；公用工程/服务卡采用归属A_r。 对实际外部苯乙烯、丙酮和分子H2O蒸气，EPA Method320及所含FTIR Protocol提供独立抽取式气相程序：真实目标/参考光谱或Protocol4.6制备、含水等光谱/干扰选择、合适光路/T/P条件、不冷凝的加热惰性输送、漏检/线性/背景/CTS检查、完整原始光谱及残差分析、独立同基准气量/流量与浓度积分，以及分析物特定输送/基质验证。遵守不同的例行QA加标和第13节验证/Method301偏差精密度程序，普通加标不替代初次验证，其结果不是自动校正因子。不声称现场实际验证或全部蒸气/基质覆盖。程序确实存在，未执行现场/参考/QA工作属于研究要求；实际不适用或未建立的必要程序仍具体hold。不把交联聚合物粒子或液体冷凝物当气相单体测量。 Method18是相反范围证据，不是无条件苯乙烯方法：第1.2.2节排除高分子聚合物、可能在分析前聚合的化合物及极低蒸气压化合物，仅有GC检测器程序不能闭合可聚合样品的保全。Method4独立区分准确参考水分测定和设备设定近似估计，并提示饱和/液滴正偏差，含有机物冷凝液不能自动算纯水。FTIR定量水要求真实Protocol4.6定量参考，不能仅用水干扰光谱。总VOC、暴露浓度、COD及总PM不是苯乙烯/丙酮/聚酯物种质量。真实聚合物特定颗粒主张须有已建立的识别/回收/基质程序，缺失时将受影响真实主张保持hold，不把全部收集PM贴为UPR。这些方法文件均不提供已测纽扣坯生产结果。

- 选定流：苯乙烯 `08a91e70-3ddc-11dd-9910-0050c2490048`
- 流属性/单位：Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- 数量规则：N_r / D_r
- 数值来源模式：`calculated_value`
- 适用范围：`site_specific`
- 归一化基准：每 1 kg 参考流
- 基准类型：`process_output`
- 证据类型：`calculated_from_collection`
- 采集协议：`cp_species`
- 来源：`epa-polyester-fabrication`

###### 外部丙酮排放 (`acetone_air`)

有条件记录实际外部清洗溶剂损失，与收集废液区分。 原生基本流为丙酮CAS67-64-1，排放至未细分空气，质量/kg。仅记录独立测量并逸出外部空气边界的实际溶剂物种；外购丙酮、收集的废溶剂和室内转移属于不同物理状态。已有明确分区时选用匹配介质；总VOC/COD及清洗配方损失不等于丙酮质量。 实际原生单位毛实物流V_r与归属负荷A_r及完整继承交换向量独立记录。原始采集不除基准；report_once唯一执行N_r / D_r。实物卡的N_r为完整V_r，不能是分配缩小量或库存净差；公用工程/服务卡采用归属A_r。 对实际外部苯乙烯、丙酮和分子H2O蒸气，EPA Method320及所含FTIR Protocol提供独立抽取式气相程序：真实目标/参考光谱或Protocol4.6制备、含水等光谱/干扰选择、合适光路/T/P条件、不冷凝的加热惰性输送、漏检/线性/背景/CTS检查、完整原始光谱及残差分析、独立同基准气量/流量与浓度积分，以及分析物特定输送/基质验证。遵守不同的例行QA加标和第13节验证/Method301偏差精密度程序，普通加标不替代初次验证，其结果不是自动校正因子。不声称现场实际验证或全部蒸气/基质覆盖。程序确实存在，未执行现场/参考/QA工作属于研究要求；实际不适用或未建立的必要程序仍具体hold。不把交联聚合物粒子或液体冷凝物当气相单体测量。 Method18是相反范围证据，不是无条件苯乙烯方法：第1.2.2节排除高分子聚合物、可能在分析前聚合的化合物及极低蒸气压化合物，仅有GC检测器程序不能闭合可聚合样品的保全。Method4独立区分准确参考水分测定和设备设定近似估计，并提示饱和/液滴正偏差，含有机物冷凝液不能自动算纯水。FTIR定量水要求真实Protocol4.6定量参考，不能仅用水干扰光谱。总VOC、暴露浓度、COD及总PM不是苯乙烯/丙酮/聚酯物种质量。真实聚合物特定颗粒主张须有已建立的识别/回收/基质程序，缺失时将受影响真实主张保持hold，不把全部收集PM贴为UPR。这些方法文件均不提供已测纽扣坯生产结果。

- 选定流：丙酮 `08a91e70-3ddc-11dd-9520-0050c2490048`
- 流属性/单位：Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- 数量规则：N_r / D_r
- 数值来源模式：`calculated_value`
- 适用范围：`site_specific`
- 归一化基准：每 1 kg 参考流
- 基准类型：`process_output`
- 证据类型：`calculated_from_collection`
- 采集协议：`cp_species`
- 来源：`epa-polyester-fabrication`

###### 外部分子水蒸发 (`water_air`)

仅有条件记录实际水蒸发。购入UPR交联不等于上游聚酯缩聚，不设反应水系数。用独立证据区分携带游离水、相态水及化学生成水。 原生基本流为分子水蒸气CAS7732-18-5，排放至未细分空气，质量/kg。按实际相态、湿度和观察状态测量外部蒸发；它不是外购蒸汽、液态废水或假定聚合反应水。已知外部介质分区时须采用对应身份。不得把水密度用于其他气体，也不得拟合蒸发残差来掩盖未知溶剂损失。 同义词噪声不授权采用同位素富集水、冰或化学结合水身份。 实际原生单位毛实物流V_r与归属负荷A_r及完整继承交换向量独立记录。原始采集不除基准；report_once唯一执行N_r / D_r。实物卡的N_r为完整V_r，不能是分配缩小量或库存净差；公用工程/服务卡采用归属A_r。 对实际外部苯乙烯、丙酮和分子H2O蒸气，EPA Method320及所含FTIR Protocol提供独立抽取式气相程序：真实目标/参考光谱或Protocol4.6制备、含水等光谱/干扰选择、合适光路/T/P条件、不冷凝的加热惰性输送、漏检/线性/背景/CTS检查、完整原始光谱及残差分析、独立同基准气量/流量与浓度积分，以及分析物特定输送/基质验证。遵守不同的例行QA加标和第13节验证/Method301偏差精密度程序，普通加标不替代初次验证，其结果不是自动校正因子。不声称现场实际验证或全部蒸气/基质覆盖。程序确实存在，未执行现场/参考/QA工作属于研究要求；实际不适用或未建立的必要程序仍具体hold。不把交联聚合物粒子或液体冷凝物当气相单体测量。 Method18是相反范围证据，不是无条件苯乙烯方法：第1.2.2节排除高分子聚合物、可能在分析前聚合的化合物及极低蒸气压化合物，仅有GC检测器程序不能闭合可聚合样品的保全。Method4独立区分准确参考水分测定和设备设定近似估计，并提示饱和/液滴正偏差，含有机物冷凝液不能自动算纯水。FTIR定量水要求真实Protocol4.6定量参考，不能仅用水干扰光谱。总VOC、暴露浓度、COD及总PM不是苯乙烯/丙酮/聚酯物种质量。真实聚合物特定颗粒主张须有已建立的识别/回收/基质程序，缺失时将受影响真实主张保持hold，不把全部收集PM贴为UPR。这些方法文件均不提供已测纽扣坯生产结果。

- 选定流：水蒸气 `fe0acd60-3ddc-11dd-ac04-0050c2490048`
- 流属性/单位：Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- 数量规则：N_r / D_r
- 数值来源模式：`calculated_value`
- 适用范围：`site_specific`
- 归一化基准：每 1 kg 参考流
- 基准类型：`process_output`
- 证据类型：`calculated_from_collection`
- 采集协议：`cp_species`
- 来源：`epa-polyester-fabrication`

###### 实际逸入空气的固化聚酯颗粒 (`polyester_dust_air`)

有条件记录搬运/冲坯实际测得的聚合物颗粒；独立确定粒径、组成及外部介质。捕集滤尘是废物，不能再次作逸出颗粒。不把通用PM指标替代成聚合物质量。 实际原生单位毛实物流V_r与归属负荷A_r及完整继承交换向量独立记录。原始采集不除基准；report_once唯一执行N_r / D_r。实物卡的N_r为完整V_r，不能是分配缩小量或库存净差；公用工程/服务卡采用归属A_r。 对实际外部苯乙烯、丙酮和分子H2O蒸气，EPA Method320及所含FTIR Protocol提供独立抽取式气相程序：真实目标/参考光谱或Protocol4.6制备、含水等光谱/干扰选择、合适光路/T/P条件、不冷凝的加热惰性输送、漏检/线性/背景/CTS检查、完整原始光谱及残差分析、独立同基准气量/流量与浓度积分，以及分析物特定输送/基质验证。遵守不同的例行QA加标和第13节验证/Method301偏差精密度程序，普通加标不替代初次验证，其结果不是自动校正因子。不声称现场实际验证或全部蒸气/基质覆盖。程序确实存在，未执行现场/参考/QA工作属于研究要求；实际不适用或未建立的必要程序仍具体hold。不把交联聚合物粒子或液体冷凝物当气相单体测量。 Method18是相反范围证据，不是无条件苯乙烯方法：第1.2.2节排除高分子聚合物、可能在分析前聚合的化合物及极低蒸气压化合物，仅有GC检测器程序不能闭合可聚合样品的保全。Method4独立区分准确参考水分测定和设备设定近似估计，并提示饱和/液滴正偏差，含有机物冷凝液不能自动算纯水。FTIR定量水要求真实Protocol4.6定量参考，不能仅用水干扰光谱。总VOC、暴露浓度、COD及总PM不是苯乙烯/丙酮/聚酯物种质量。真实聚合物特定颗粒主张须有已建立的识别/回收/基质程序，缺失时将受影响真实主张保持hold，不把全部收集PM贴为UPR。这些方法文件均不提供已测纽扣坯生产结果。

- 选定流：排入空气的交联不饱和聚酯颗粒
- 流属性/单位：Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- 数量规则：N_r / D_r
- 数值来源模式：`calculated_value`
- 适用范围：`site_specific`
- 归一化基准：每 1 kg 参考流
- 基准类型：`process_output`
- 证据类型：`calculated_from_collection`
- 采集协议：`cp_species`
- 来源：

### 过程： 已观察FG服务 (`post_release`)

#### 输入

##### 产品流

###### 已放行坯料转入FG服务 (`fg_received`)

实际接收此前已首次放行的坯料实物，带原Qc及继承负荷向量。合并门抵消制造至FG的配对转移；接收或复验不产生Q。 原生身份为工厂生产混合中的已制造完整零件；其产品族明确包括纽扣坯。本卡仅选择完整、实体、不发泡、无增强、无颜料、已固化的不饱和聚酯浇片冲切坯；没有缝纫孔及最终制扣精加工。它不是树脂、整片板材、模塑机器、混合件集合、完整纽扣或拉链。原生产品族未固定树脂牌号、尺寸、地理或单件质量；必须由实际供货与验收记录确定这些限定。原生参考属性为质量而非件数。 实际原生单位毛实物流V_r与归属负荷A_r及完整继承交换向量独立记录。原始采集不除基准；report_once唯一执行N_r / D_r。实物卡的N_r为完整V_r，不能是分配缩小量或库存净差；公用工程/服务卡采用归属A_r。

- 选定流：纽扣模及其他纽扣零件，纽扣坯料，拉链的零件 `95266833-c3f6-48ca-b9ca-724c29e03eb3`
- 流属性/单位：Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- 数量规则：N_r / D_r
- 数值来源模式：`calculated_value`
- 适用范围：`site_specific`
- 归一化基准：每 1 kg 参考流
- 基准类型：`process_output`
- 证据类型：`calculated_from_collection`
- 采集协议：`cp_fg`
- 来源：`pfb-polyester-blanks`

###### 此前已放行完整坯的外部退回 (`fg_return_received`)

真实从外部退回的此前已放行完整坯，保留原批次、首次Qc、原交付/退回历史及继承向量。这是与内部接收分开的完整毛实物输入。复验不产生Q；如确实执行增量返工，其负荷及失败仍归原批次。 原生身份为工厂生产混合中的已制造完整零件；其产品族明确包括纽扣坯。本卡仅选择完整、实体、不发泡、无增强、无颜料、已固化的不饱和聚酯浇片冲切坯；没有缝纫孔及最终制扣精加工。它不是树脂、整片板材、模塑机器、混合件集合、完整纽扣或拉链。原生产品族未固定树脂牌号、尺寸、地理或单件质量；必须由实际供货与验收记录确定这些限定。原生参考属性为质量而非件数。 实际原生单位毛实物流V_r与归属负荷A_r及完整继承交换向量独立记录。原始采集不除基准；report_once唯一执行N_r / D_r。实物卡的N_r为完整V_r，不能是分配缩小量或库存净差；公用工程/服务卡采用归属A_r。

- 选定流：纽扣模及其他纽扣零件，纽扣坯料，拉链的零件 `95266833-c3f6-48ca-b9ca-724c29e03eb3`
- 流属性/单位：Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- 数量规则：N_r / D_r
- 数值来源模式：`calculated_value`
- 适用范围：`site_specific`
- 归一化基准：每 1 kg 参考流
- 基准类型：`process_output`
- 证据类型：`calculated_from_collection`
- 采集协议：`cp_fg`
- 来源：`pfb-polyester-blanks`

###### 瓦楞运输纸箱 (`carton_purchase`)

实际完整外购包装实物进入空包装/附着/可复用包装池；不设每坯固定用量或假定复用寿命。 具体真实瓦楞纸箱保持未绑定。历史未指定包装Product没有实物总备注，并混列纸箱/内袋/缠绕膜同义词，不足正面定义此具体纸箱的材料/制品。完整旧采用保留为反证，不是当前纸箱UUID或穷尽无匹配声明。整只供货纸箱及已含胶粘剂/印刷记录一次，不重新采购其组成。纸箱等级、含水、组成和供方仍须独立记录；薄膜、胶带、托盘与废物是不同交换。 实际原生单位毛实物流V_r与归属负荷A_r及完整继承交换向量独立记录。原始采集不除基准；report_once唯一执行N_r / D_r。实物卡的N_r为完整V_r，不能是分配缩小量或库存净差；公用工程/服务卡采用归属A_r。 每个实际聚乙烯膜内衬或瓦楞纸箱整湿池以kg核对O + P + I + ERin + J_in + H2O_in - X_in = C + S + EOout + W + J_out + H2O_out - X_out。O/C包含空包、附着WIP、附着FG、退回及复用实物库存；P为新增采购，I为真实供应商已含接收，ERin为外部退回收进，S为gross对外发运，EOout为对外退还，W为实际整湿废物出口。内部复用配对在合并时抵消，不是ERin、EOout或采购。供应商已含包装具有一个完整上游所有者，不再购买一次。 J_in/J_out为独立实证且互不重叠的额外非水转移，例如真实留存修理料、粉尘或油，仅限尚未包含于其他整gross腿的部分。H2O_in/H2O_out为实际吸湿/加水/蒸发或其他未包含于整湿腿的水转移。期末C保留全部真实增量，即使没有修理。X_in/X_out仅扣OTHER同侧流观测间已证重叠，不扣真实J/H2O、C、反向流、未知闭合差或卡片存在。未知项不拟合。真实增量追到物理来源/接收方及具体原子接口；配对内部J/水不是新增provider或废物出口。gross湿腿内含的水/物料只计一次。

- 选定流：包装材料，未指定
- 流属性/单位：Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- 数量规则：N_r / D_r
- 数值来源模式：`calculated_value`
- 适用范围：`site_specific`
- 归一化基准：每 1 kg 参考流
- 基准类型：`process_output`
- 证据类型：`calculated_from_collection`
- 采集协议：`cp_carton`
- 来源：

###### 瓦楞运输纸箱 (`carton_return_received`)

ER为实际从外部退回并接收的包装，不是新购或内部复用。保留历史、原负荷与物理状态。 具体真实瓦楞纸箱保持未绑定。历史未指定包装Product没有实物总备注，并混列纸箱/内袋/缠绕膜同义词，不足正面定义此具体纸箱的材料/制品。完整旧采用保留为反证，不是当前纸箱UUID或穷尽无匹配声明。整只供货纸箱及已含胶粘剂/印刷记录一次，不重新采购其组成。纸箱等级、含水、组成和供方仍须独立记录；薄膜、胶带、托盘与废物是不同交换。 实际原生单位毛实物流V_r与归属负荷A_r及完整继承交换向量独立记录。原始采集不除基准；report_once唯一执行N_r / D_r。实物卡的N_r为完整V_r，不能是分配缩小量或库存净差；公用工程/服务卡采用归属A_r。 每个实际聚乙烯膜内衬或瓦楞纸箱整湿池以kg核对O + P + I + ERin + J_in + H2O_in - X_in = C + S + EOout + W + J_out + H2O_out - X_out。O/C包含空包、附着WIP、附着FG、退回及复用实物库存；P为新增采购，I为真实供应商已含接收，ERin为外部退回收进，S为gross对外发运，EOout为对外退还，W为实际整湿废物出口。内部复用配对在合并时抵消，不是ERin、EOout或采购。供应商已含包装具有一个完整上游所有者，不再购买一次。 J_in/J_out为独立实证且互不重叠的额外非水转移，例如真实留存修理料、粉尘或油，仅限尚未包含于其他整gross腿的部分。H2O_in/H2O_out为实际吸湿/加水/蒸发或其他未包含于整湿腿的水转移。期末C保留全部真实增量，即使没有修理。X_in/X_out仅扣OTHER同侧流观测间已证重叠，不扣真实J/H2O、C、反向流、未知闭合差或卡片存在。未知项不拟合。真实增量追到物理来源/接收方及具体原子接口；配对内部J/水不是新增provider或废物出口。gross湿腿内含的水/物料只计一次。

- 选定流：包装材料，未指定
- 流属性/单位：Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- 数量规则：N_r / D_r
- 数值来源模式：`calculated_value`
- 适用范围：`site_specific`
- 归一化基准：每 1 kg 参考流
- 基准类型：`process_output`
- 证据类型：`calculated_from_collection`
- 采集协议：`cp_carton`
- 来源：

###### PE内衬膜 (`liner_purchase`)

实际完整外购包装实物进入空包装/附着/可复用包装池；不设每坯固定用量或假定复用寿命。 原生产品为聚乙烯薄膜，CAS9002-88-4，工厂生产混合，质量/kg；同义词包括聚膜及聚乙烯片膜。备注描述聚乙烯包装膜并区分竞争材料PET；PET不属于本身份。保留的行李/皮革分类是孤立分类瑕疵，不是另一聚合物或路线的证据。仅用于实际PE内衬膜，并记录牌号、厚度、制袋转换和供方；外购已制成袋须包含实际转换负荷，不能默变成原膜。不得用PET、复合袋或未定塑料替代。 实际原生单位毛实物流V_r与归属负荷A_r及完整继承交换向量独立记录。原始采集不除基准；report_once唯一执行N_r / D_r。实物卡的N_r为完整V_r，不能是分配缩小量或库存净差；公用工程/服务卡采用归属A_r。 每个实际聚乙烯膜内衬或瓦楞纸箱整湿池以kg核对O + P + I + ERin + J_in + H2O_in - X_in = C + S + EOout + W + J_out + H2O_out - X_out。O/C包含空包、附着WIP、附着FG、退回及复用实物库存；P为新增采购，I为真实供应商已含接收，ERin为外部退回收进，S为gross对外发运，EOout为对外退还，W为实际整湿废物出口。内部复用配对在合并时抵消，不是ERin、EOout或采购。供应商已含包装具有一个完整上游所有者，不再购买一次。 J_in/J_out为独立实证且互不重叠的额外非水转移，例如真实留存修理料、粉尘或油，仅限尚未包含于其他整gross腿的部分。H2O_in/H2O_out为实际吸湿/加水/蒸发或其他未包含于整湿腿的水转移。期末C保留全部真实增量，即使没有修理。X_in/X_out仅扣OTHER同侧流观测间已证重叠，不扣真实J/H2O、C、反向流、未知闭合差或卡片存在。未知项不拟合。真实增量追到物理来源/接收方及具体原子接口；配对内部J/水不是新增provider或废物出口。gross湿腿内含的水/物料只计一次。

- 选定流：聚乙烯薄膜 `e64eb06c-6dc9-45f1-b003-3dc6c44b27e2`
- 流属性/单位：Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- 数量规则：N_r / D_r
- 数值来源模式：`calculated_value`
- 适用范围：`site_specific`
- 归一化基准：每 1 kg 参考流
- 基准类型：`process_output`
- 证据类型：`calculated_from_collection`
- 采集协议：`cp_liner`
- 来源：

###### 外部退回PE内衬膜 (`liner_return_received`)

ER为实际从外部退回并接收的包装，不是新购或内部复用。保留历史、原负荷与物理状态。 原生产品为聚乙烯薄膜，CAS9002-88-4，工厂生产混合，质量/kg；同义词包括聚膜及聚乙烯片膜。备注描述聚乙烯包装膜并区分竞争材料PET；PET不属于本身份。保留的行李/皮革分类是孤立分类瑕疵，不是另一聚合物或路线的证据。仅用于实际PE内衬膜，并记录牌号、厚度、制袋转换和供方；外购已制成袋须包含实际转换负荷，不能默变成原膜。不得用PET、复合袋或未定塑料替代。 实际原生单位毛实物流V_r与归属负荷A_r及完整继承交换向量独立记录。原始采集不除基准；report_once唯一执行N_r / D_r。实物卡的N_r为完整V_r，不能是分配缩小量或库存净差；公用工程/服务卡采用归属A_r。 每个实际聚乙烯膜内衬或瓦楞纸箱整湿池以kg核对O + P + I + ERin + J_in + H2O_in - X_in = C + S + EOout + W + J_out + H2O_out - X_out。O/C包含空包、附着WIP、附着FG、退回及复用实物库存；P为新增采购，I为真实供应商已含接收，ERin为外部退回收进，S为gross对外发运，EOout为对外退还，W为实际整湿废物出口。内部复用配对在合并时抵消，不是ERin、EOout或采购。供应商已含包装具有一个完整上游所有者，不再购买一次。 J_in/J_out为独立实证且互不重叠的额外非水转移，例如真实留存修理料、粉尘或油，仅限尚未包含于其他整gross腿的部分。H2O_in/H2O_out为实际吸湿/加水/蒸发或其他未包含于整湿腿的水转移。期末C保留全部真实增量，即使没有修理。X_in/X_out仅扣OTHER同侧流观测间已证重叠，不扣真实J/H2O、C、反向流、未知闭合差或卡片存在。未知项不拟合。真实增量追到物理来源/接收方及具体原子接口；配对内部J/水不是新增provider或废物出口。gross湿腿内含的水/物料只计一次。

- 选定流：聚乙烯薄膜 `e64eb06c-6dc9-45f1-b003-3dc6c44b27e2`
- 流属性/单位：Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- 数量规则：N_r / D_r
- 数值来源模式：`calculated_value`
- 适用范围：`site_specific`
- 归一化基准：每 1 kg 参考流
- 基准类型：`process_output`
- 证据类型：`calculated_from_collection`
- 采集协议：`cp_liner`
- 来源：

###### 实际观察的包装仓储搬运发运用电 (`fg_electricity`)

保留已对滞留FG和已发货FG执行的服务，归于原放行批次Qc和观察区间H。H记录服务时长/覆盖范围，不能作产品结果除数。未观察的未来服务保持未知。不能因尚未发货而扣除已执行的滞留库存服务。 原生产品身份为中国、低于1千伏、送达用户的电网平均消费组合；不是单一水电发电或高压供电。仅对实际符合的供电采用该UUID。其他国家、电压、发电合同或现场电源须使用自身已核实的身份与供方。原生净热值属性使用以MJ为参考的能量单位组；实测kWh在归属前乘3.6转换，不能把能量当作kg。 实际原生单位毛实物流V_r与归属负荷A_r及完整继承交换向量独立记录。原始采集不除基准；report_once唯一执行N_r / D_r。实物卡的N_r为完整V_r，不能是分配缩小量或库存净差；公用工程/服务卡采用归属A_r。 首次必要包装及设备保管属于真实制造支持，provider/电量归新增Q；后续原FG服务归原Qc和实际H。同一电表、设备或包装历史的两个阶段按实际事件互斥分配，不能采购/计量两次，也不因机器过程ID仍名post_release而移出首次验收前的真实制造负荷。

- 选定流：交流电 `50657322-939c-4829-a87b-47c093bfa6a7`
- 流属性/单位：Net calorific value `93a60a56-a3c8-11da-a746-0800200c9a66` / MJ
- 数量规则：N_r / D_r
- 数值来源模式：`calculated_value`
- 适用范围：`site_specific`
- 归一化基准：每 1 kg 参考流
- 基准类型：`process_output`
- 证据类型：`calculated_from_collection`
- 采集协议：`cp_fg`
- 来源：

###### 瓦楞运输纸箱 (`carton_included`)

一份真实供应商已含实物包装接收I，不重新采购。每个实际聚乙烯膜内衬或瓦楞纸箱整湿池以kg核对O + P + I + ERin + J_in + H2O_in - X_in = C + S + EOout + W + J_out + H2O_out - X_out。O/C包含空包、附着WIP、附着FG、退回及复用实物库存；P为新增采购，I为真实供应商已含接收，ERin为外部退回收进，S为gross对外发运，EOout为对外退还，W为实际整湿废物出口。内部复用配对在合并时抵消，不是ERin、EOout或采购。供应商已含包装具有一个完整上游所有者，不再购买一次。 J_in/J_out为独立实证且互不重叠的额外非水转移，例如真实留存修理料、粉尘或油，仅限尚未包含于其他整gross腿的部分。H2O_in/H2O_out为实际吸湿/加水/蒸发或其他未包含于整湿腿的水转移。期末C保留全部真实增量，即使没有修理。X_in/X_out仅扣OTHER同侧流观测间已证重叠，不扣真实J/H2O、C、反向流、未知闭合差或卡片存在。未知项不拟合。真实增量追到物理来源/接收方及具体原子接口；配对内部J/水不是新增provider或废物出口。gross湿腿内含的水/物料只计一次。 本卡仅披露完整真实实物V_r作为N_r；实际provider/服务A_r另归属，不因该物理腿另建provider。


- 选定流: 瓦楞运输纸箱
- 流属性/单位: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- 数量规则: N_r / D_r
- 数值来源模式: `calculated_value`
- 适用范围: `site_specific`
- 归一化基准: per 1 kg reference flow
- 基准类型: `process_output`
- 证据类型: `calculated_from_collection`
- 采集协议: `cp_carton`
- 来源: `jindal-polyester-casting`; `ilcd-attributional-allocation-2010`

###### 瓦楞运输纸箱 (`carton_burden`)

一份真实整包装provider/服务A，含真实完整制造/转化和兼容供货状态，不是另一个实物接收。每个实际聚乙烯膜内衬或瓦楞纸箱整湿池以kg核对O + P + I + ERin + J_in + H2O_in - X_in = C + S + EOout + W + J_out + H2O_out - X_out。O/C包含空包、附着WIP、附着FG、退回及复用实物库存；P为新增采购，I为真实供应商已含接收，ERin为外部退回收进，S为gross对外发运，EOout为对外退还，W为实际整湿废物出口。内部复用配对在合并时抵消，不是ERin、EOout或采购。供应商已含包装具有一个完整上游所有者，不再购买一次。 J_in/J_out为独立实证且互不重叠的额外非水转移，例如真实留存修理料、粉尘或油，仅限尚未包含于其他整gross腿的部分。H2O_in/H2O_out为实际吸湿/加水/蒸发或其他未包含于整湿腿的水转移。期末C保留全部真实增量，即使没有修理。X_in/X_out仅扣OTHER同侧流观测间已证重叠，不扣真实J/H2O、C、反向流、未知闭合差或卡片存在。未知项不拟合。真实增量追到物理来源/接收方及具体原子接口；配对内部J/水不是新增provider或废物出口。gross湿腿内含的水/物料只计一次。 本卡建模分子N_r为真实兼容provider/服务归属A_r；独立完整收支实物V_r不产生第二采购或处理。


- 选定流: 瓦楞运输纸箱
- 流属性/单位: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- 数量规则: N_r / D_r
- 数值来源模式: `calculated_value`
- 适用范围: `site_specific`
- 归一化基准: per 1 kg reference flow
- 基准类型: `process_output`
- 证据类型: `calculated_from_collection`
- 采集协议: `cp_carton`
- 来源: `jindal-polyester-casting`; `ilcd-attributional-allocation-2010`

###### 聚乙烯薄膜 (`liner_included`)

一份真实供应商已含实物包装接收I，不重新采购。每个实际聚乙烯膜内衬或瓦楞纸箱整湿池以kg核对O + P + I + ERin + J_in + H2O_in - X_in = C + S + EOout + W + J_out + H2O_out - X_out。O/C包含空包、附着WIP、附着FG、退回及复用实物库存；P为新增采购，I为真实供应商已含接收，ERin为外部退回收进，S为gross对外发运，EOout为对外退还，W为实际整湿废物出口。内部复用配对在合并时抵消，不是ERin、EOout或采购。供应商已含包装具有一个完整上游所有者，不再购买一次。 J_in/J_out为独立实证且互不重叠的额外非水转移，例如真实留存修理料、粉尘或油，仅限尚未包含于其他整gross腿的部分。H2O_in/H2O_out为实际吸湿/加水/蒸发或其他未包含于整湿腿的水转移。期末C保留全部真实增量，即使没有修理。X_in/X_out仅扣OTHER同侧流观测间已证重叠，不扣真实J/H2O、C、反向流、未知闭合差或卡片存在。未知项不拟合。真实增量追到物理来源/接收方及具体原子接口；配对内部J/水不是新增provider或废物出口。gross湿腿内含的水/物料只计一次。 本卡仅披露完整真实实物V_r作为N_r；实际provider/服务A_r另归属，不因该物理腿另建provider。


- 选定流: 聚乙烯薄膜 `e64eb06c-6dc9-45f1-b003-3dc6c44b27e2`
- 流属性/单位: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- 数量规则: N_r / D_r
- 数值来源模式: `calculated_value`
- 适用范围: `site_specific`
- 归一化基准: per 1 kg reference flow
- 基准类型: `process_output`
- 证据类型: `calculated_from_collection`
- 采集协议: `cp_liner`
- 来源: `jindal-polyester-casting`; `ilcd-attributional-allocation-2010`

###### 聚乙烯薄膜 (`liner_burden`)

一份真实整包装provider/服务A，含真实完整制造/转化和兼容供货状态，不是另一个实物接收。每个实际聚乙烯膜内衬或瓦楞纸箱整湿池以kg核对O + P + I + ERin + J_in + H2O_in - X_in = C + S + EOout + W + J_out + H2O_out - X_out。O/C包含空包、附着WIP、附着FG、退回及复用实物库存；P为新增采购，I为真实供应商已含接收，ERin为外部退回收进，S为gross对外发运，EOout为对外退还，W为实际整湿废物出口。内部复用配对在合并时抵消，不是ERin、EOout或采购。供应商已含包装具有一个完整上游所有者，不再购买一次。 J_in/J_out为独立实证且互不重叠的额外非水转移，例如真实留存修理料、粉尘或油，仅限尚未包含于其他整gross腿的部分。H2O_in/H2O_out为实际吸湿/加水/蒸发或其他未包含于整湿腿的水转移。期末C保留全部真实增量，即使没有修理。X_in/X_out仅扣OTHER同侧流观测间已证重叠，不扣真实J/H2O、C、反向流、未知闭合差或卡片存在。未知项不拟合。真实增量追到物理来源/接收方及具体原子接口；配对内部J/水不是新增provider或废物出口。gross湿腿内含的水/物料只计一次。 本卡建模分子N_r为真实兼容provider/服务归属A_r；独立完整收支实物V_r不产生第二采购或处理。


- 选定流: 聚乙烯薄膜 `e64eb06c-6dc9-45f1-b003-3dc6c44b27e2`
- 流属性/单位: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- 数量规则: N_r / D_r
- 数值来源模式: `calculated_value`
- 适用范围: `site_specific`
- 归一化基准: per 1 kg reference flow
- 基准类型: `process_output`
- 证据类型: `calculated_from_collection`
- 采集协议: `cp_liner`
- 来源: `jindal-polyester-casting`; `ilcd-attributional-allocation-2010`

###### 聚酯片离心浇铸鼓 (`casting_drum_in`)

仅限此完整真实配置资产实际in事件，不规定质量、配方、寿命或技术能力。各实际离心浇铸鼓、冲床、切模及调理架有一份真实配置实物台群，包含完整收进、退回/退役、湿库存、实际设备内流体、磨损和修理。整设备provider与展开制造/维护互斥。实物V/M独立于兼容provider/服务A及真实服务覆盖/历史。Mass/kg设备产品provider须完整配置实测M及provider真实覆盖历史支持的分配/服务份额，不猜寿命/能力，不把观察H当总寿命。小时服务provider保留其单位及真实记录换算桥，不直接替成kg。分母未知保留真实已执行服务、失败及库存，不编A。 本卡仅披露完整真实实物V_r作为N_r；实际provider/服务A_r另归属，不因该物理腿另建provider。


- 选定流: 聚酯片离心浇铸鼓
- 流属性/单位: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- 数量规则: N_r / D_r
- 数值来源模式: `calculated_value`
- 适用范围: `site_specific`
- 归一化基准: per 1 kg reference flow
- 基准类型: `process_output`
- 证据类型: `calculated_from_collection`
- 采集协议: `cp_assets`
- 来源: `jindal-polyester-casting`; `ilcd-attributional-allocation-2010`

###### 聚酯片离心浇铸鼓 (`casting_drum_burden`)

仅限此完整真实配置资产实际burden事件，不规定质量、配方、寿命或技术能力。各实际离心浇铸鼓、冲床、切模及调理架有一份真实配置实物台群，包含完整收进、退回/退役、湿库存、实际设备内流体、磨损和修理。整设备provider与展开制造/维护互斥。实物V/M独立于兼容provider/服务A及真实服务覆盖/历史。Mass/kg设备产品provider须完整配置实测M及provider真实覆盖历史支持的分配/服务份额，不猜寿命/能力，不把观察H当总寿命。小时服务provider保留其单位及真实记录换算桥，不直接替成kg。分母未知保留真实已执行服务、失败及库存，不编A。 本卡建模分子N_r为真实兼容provider/服务归属A_r；独立完整收支实物V_r不产生第二采购或处理。


- 选定流: 聚酯片离心浇铸鼓
- 流属性/单位: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- 数量规则: N_r / D_r
- 数值来源模式: `calculated_value`
- 适用范围: `site_specific`
- 归一化基准: per 1 kg reference flow
- 基准类型: `process_output`
- 证据类型: `calculated_from_collection`
- 采集协议: `cp_assets`
- 来源: `jindal-polyester-casting`; `ilcd-attributional-allocation-2010`

###### 片坯冲床 (`punch_press_in`)

仅限此完整真实配置资产实际in事件，不规定质量、配方、寿命或技术能力。各实际离心浇铸鼓、冲床、切模及调理架有一份真实配置实物台群，包含完整收进、退回/退役、湿库存、实际设备内流体、磨损和修理。整设备provider与展开制造/维护互斥。实物V/M独立于兼容provider/服务A及真实服务覆盖/历史。Mass/kg设备产品provider须完整配置实测M及provider真实覆盖历史支持的分配/服务份额，不猜寿命/能力，不把观察H当总寿命。小时服务provider保留其单位及真实记录换算桥，不直接替成kg。分母未知保留真实已执行服务、失败及库存，不编A。 本卡仅披露完整真实实物V_r作为N_r；实际provider/服务A_r另归属，不因该物理腿另建provider。


- 选定流: 片坯冲床
- 流属性/单位: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- 数量规则: N_r / D_r
- 数值来源模式: `calculated_value`
- 适用范围: `site_specific`
- 归一化基准: per 1 kg reference flow
- 基准类型: `process_output`
- 证据类型: `calculated_from_collection`
- 采集协议: `cp_assets`
- 来源: `jindal-polyester-casting`; `ilcd-attributional-allocation-2010`

###### 片坯冲床 (`punch_press_burden`)

仅限此完整真实配置资产实际burden事件，不规定质量、配方、寿命或技术能力。各实际离心浇铸鼓、冲床、切模及调理架有一份真实配置实物台群，包含完整收进、退回/退役、湿库存、实际设备内流体、磨损和修理。整设备provider与展开制造/维护互斥。实物V/M独立于兼容provider/服务A及真实服务覆盖/历史。Mass/kg设备产品provider须完整配置实测M及provider真实覆盖历史支持的分配/服务份额，不猜寿命/能力，不把观察H当总寿命。小时服务provider保留其单位及真实记录换算桥，不直接替成kg。分母未知保留真实已执行服务、失败及库存，不编A。 本卡建模分子N_r为真实兼容provider/服务归属A_r；独立完整收支实物V_r不产生第二采购或处理。


- 选定流: 片坯冲床
- 流属性/单位: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- 数量规则: N_r / D_r
- 数值来源模式: `calculated_value`
- 适用范围: `site_specific`
- 归一化基准: per 1 kg reference flow
- 基准类型: `process_output`
- 证据类型: `calculated_from_collection`
- 采集协议: `cp_assets`
- 来源: `jindal-polyester-casting`; `ilcd-attributional-allocation-2010`

###### 纽扣坯切模 (`cutting_die_in`)

仅限此完整真实配置资产实际in事件，不规定质量、配方、寿命或技术能力。各实际离心浇铸鼓、冲床、切模及调理架有一份真实配置实物台群，包含完整收进、退回/退役、湿库存、实际设备内流体、磨损和修理。整设备provider与展开制造/维护互斥。实物V/M独立于兼容provider/服务A及真实服务覆盖/历史。Mass/kg设备产品provider须完整配置实测M及provider真实覆盖历史支持的分配/服务份额，不猜寿命/能力，不把观察H当总寿命。小时服务provider保留其单位及真实记录换算桥，不直接替成kg。分母未知保留真实已执行服务、失败及库存，不编A。 本卡仅披露完整真实实物V_r作为N_r；实际provider/服务A_r另归属，不因该物理腿另建provider。


- 选定流: 纽扣坯切模
- 流属性/单位: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- 数量规则: N_r / D_r
- 数值来源模式: `calculated_value`
- 适用范围: `site_specific`
- 归一化基准: per 1 kg reference flow
- 基准类型: `process_output`
- 证据类型: `calculated_from_collection`
- 采集协议: `cp_assets`
- 来源: `jindal-polyester-casting`; `ilcd-attributional-allocation-2010`

###### 纽扣坯切模 (`cutting_die_burden`)

仅限此完整真实配置资产实际burden事件，不规定质量、配方、寿命或技术能力。各实际离心浇铸鼓、冲床、切模及调理架有一份真实配置实物台群，包含完整收进、退回/退役、湿库存、实际设备内流体、磨损和修理。整设备provider与展开制造/维护互斥。实物V/M独立于兼容provider/服务A及真实服务覆盖/历史。Mass/kg设备产品provider须完整配置实测M及provider真实覆盖历史支持的分配/服务份额，不猜寿命/能力，不把观察H当总寿命。小时服务provider保留其单位及真实记录换算桥，不直接替成kg。分母未知保留真实已执行服务、失败及库存，不编A。 本卡建模分子N_r为真实兼容provider/服务归属A_r；独立完整收支实物V_r不产生第二采购或处理。


- 选定流: 纽扣坯切模
- 流属性/单位: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- 数量规则: N_r / D_r
- 数值来源模式: `calculated_value`
- 适用范围: `site_specific`
- 归一化基准: per 1 kg reference flow
- 基准类型: `process_output`
- 证据类型: `calculated_from_collection`
- 采集协议: `cp_assets`
- 来源: `jindal-polyester-casting`; `ilcd-attributional-allocation-2010`

###### 纽扣坯调理架 (`conditioning_rack_in`)

仅限此完整真实配置资产实际in事件，不规定质量、配方、寿命或技术能力。各实际离心浇铸鼓、冲床、切模及调理架有一份真实配置实物台群，包含完整收进、退回/退役、湿库存、实际设备内流体、磨损和修理。整设备provider与展开制造/维护互斥。实物V/M独立于兼容provider/服务A及真实服务覆盖/历史。Mass/kg设备产品provider须完整配置实测M及provider真实覆盖历史支持的分配/服务份额，不猜寿命/能力，不把观察H当总寿命。小时服务provider保留其单位及真实记录换算桥，不直接替成kg。分母未知保留真实已执行服务、失败及库存，不编A。 本卡仅披露完整真实实物V_r作为N_r；实际provider/服务A_r另归属，不因该物理腿另建provider。


- 选定流: 纽扣坯调理架
- 流属性/单位: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- 数量规则: N_r / D_r
- 数值来源模式: `calculated_value`
- 适用范围: `site_specific`
- 归一化基准: per 1 kg reference flow
- 基准类型: `process_output`
- 证据类型: `calculated_from_collection`
- 采集协议: `cp_assets`
- 来源: `jindal-polyester-casting`; `ilcd-attributional-allocation-2010`

###### 纽扣坯调理架 (`conditioning_rack_burden`)

仅限此完整真实配置资产实际burden事件，不规定质量、配方、寿命或技术能力。各实际离心浇铸鼓、冲床、切模及调理架有一份真实配置实物台群，包含完整收进、退回/退役、湿库存、实际设备内流体、磨损和修理。整设备provider与展开制造/维护互斥。实物V/M独立于兼容provider/服务A及真实服务覆盖/历史。Mass/kg设备产品provider须完整配置实测M及provider真实覆盖历史支持的分配/服务份额，不猜寿命/能力，不把观察H当总寿命。小时服务provider保留其单位及真实记录换算桥，不直接替成kg。分母未知保留真实已执行服务、失败及库存，不编A。 本卡建模分子N_r为真实兼容provider/服务归属A_r；独立完整收支实物V_r不产生第二采购或处理。


- 选定流: 纽扣坯调理架
- 流属性/单位: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- 数量规则: N_r / D_r
- 数值来源模式: `calculated_value`
- 适用范围: `site_specific`
- 归一化基准: per 1 kg reference flow
- 基准类型: `process_output`
- 证据类型: `calculated_from_collection`
- 采集协议: `cp_assets`
- 来源: `jindal-polyester-casting`; `ilcd-attributional-allocation-2010`

##### 废物流

##### 基本流

#### 输出

##### 产品流

###### 坯料毛实物发运 (`fg_dispatched`)

完整记录实际完整坯料的毛发运，另追踪退货及重复发运。发货/退货/复验均不产生新Q。保留期初/期末FG及历史批次继承向量；实物S可与本期首次放行Q不同。 原生身份为工厂生产混合中的已制造完整零件；其产品族明确包括纽扣坯。本卡仅选择完整、实体、不发泡、无增强、无颜料、已固化的不饱和聚酯浇片冲切坯；没有缝纫孔及最终制扣精加工。它不是树脂、整片板材、模塑机器、混合件集合、完整纽扣或拉链。原生产品族未固定树脂牌号、尺寸、地理或单件质量；必须由实际供货与验收记录确定这些限定。原生参考属性为质量而非件数。 实际原生单位毛实物流V_r与归属负荷A_r及完整继承交换向量独立记录。原始采集不除基准；report_once唯一执行N_r / D_r。实物卡的N_r为完整V_r，不能是分配缩小量或库存净差；公用工程/服务卡采用归属A_r。

- 选定流：纽扣模及其他纽扣零件，纽扣坯料，拉链的零件 `95266833-c3f6-48ca-b9ca-724c29e03eb3`
- 流属性/单位：Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- 数量规则：N_r / D_r
- 数值来源模式：`calculated_value`
- 适用范围：`site_specific`
- 归一化基准：每 1 kg 参考流
- 基准类型：`process_output`
- 证据类型：`calculated_from_collection`
- 采集协议：`cp_fg`
- 来源：`pfb-polyester-blanks`

###### 瓦楞运输纸箱 (`carton_gross_out`)

S为随全部毛发运实际离开的完整附着包装，包括退回再发货；不是净产品Q或负荷份额。 具体真实瓦楞纸箱保持未绑定。历史未指定包装Product没有实物总备注，并混列纸箱/内袋/缠绕膜同义词，不足正面定义此具体纸箱的材料/制品。完整旧采用保留为反证，不是当前纸箱UUID或穷尽无匹配声明。整只供货纸箱及已含胶粘剂/印刷记录一次，不重新采购其组成。纸箱等级、含水、组成和供方仍须独立记录；薄膜、胶带、托盘与废物是不同交换。 实际原生单位毛实物流V_r与归属负荷A_r及完整继承交换向量独立记录。原始采集不除基准；report_once唯一执行N_r / D_r。实物卡的N_r为完整V_r，不能是分配缩小量或库存净差；公用工程/服务卡采用归属A_r。 每个实际聚乙烯膜内衬或瓦楞纸箱整湿池以kg核对O + P + I + ERin + J_in + H2O_in - X_in = C + S + EOout + W + J_out + H2O_out - X_out。O/C包含空包、附着WIP、附着FG、退回及复用实物库存；P为新增采购，I为真实供应商已含接收，ERin为外部退回收进，S为gross对外发运，EOout为对外退还，W为实际整湿废物出口。内部复用配对在合并时抵消，不是ERin、EOout或采购。供应商已含包装具有一个完整上游所有者，不再购买一次。 J_in/J_out为独立实证且互不重叠的额外非水转移，例如真实留存修理料、粉尘或油，仅限尚未包含于其他整gross腿的部分。H2O_in/H2O_out为实际吸湿/加水/蒸发或其他未包含于整湿腿的水转移。期末C保留全部真实增量，即使没有修理。X_in/X_out仅扣OTHER同侧流观测间已证重叠，不扣真实J/H2O、C、反向流、未知闭合差或卡片存在。未知项不拟合。真实增量追到物理来源/接收方及具体原子接口；配对内部J/水不是新增provider或废物出口。gross湿腿内含的水/物料只计一次。

- 选定流：包装材料，未指定
- 流属性/单位：Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- 数量规则：N_r / D_r
- 数值来源模式：`calculated_value`
- 适用范围：`site_specific`
- 归一化基准：每 1 kg 参考流
- 基准类型：`process_output`
- 证据类型：`calculated_from_collection`
- 采集协议：`cp_carton`
- 来源：

###### 瓦楞运输纸箱 (`carton_return_out`)

EO为本未改变可用包装实物的真实单独对外退回，保留毛实物量和原批次历史。内部复用抵消，不能作采购、新产品或自动共产品。 具体真实瓦楞纸箱保持未绑定。历史未指定包装Product没有实物总备注，并混列纸箱/内袋/缠绕膜同义词，不足正面定义此具体纸箱的材料/制品。完整旧采用保留为反证，不是当前纸箱UUID或穷尽无匹配声明。整只供货纸箱及已含胶粘剂/印刷记录一次，不重新采购其组成。纸箱等级、含水、组成和供方仍须独立记录；薄膜、胶带、托盘与废物是不同交换。 实际原生单位毛实物流V_r与归属负荷A_r及完整继承交换向量独立记录。原始采集不除基准；report_once唯一执行N_r / D_r。实物卡的N_r为完整V_r，不能是分配缩小量或库存净差；公用工程/服务卡采用归属A_r。 每个实际聚乙烯膜内衬或瓦楞纸箱整湿池以kg核对O + P + I + ERin + J_in + H2O_in - X_in = C + S + EOout + W + J_out + H2O_out - X_out。O/C包含空包、附着WIP、附着FG、退回及复用实物库存；P为新增采购，I为真实供应商已含接收，ERin为外部退回收进，S为gross对外发运，EOout为对外退还，W为实际整湿废物出口。内部复用配对在合并时抵消，不是ERin、EOout或采购。供应商已含包装具有一个完整上游所有者，不再购买一次。 J_in/J_out为独立实证且互不重叠的额外非水转移，例如真实留存修理料、粉尘或油，仅限尚未包含于其他整gross腿的部分。H2O_in/H2O_out为实际吸湿/加水/蒸发或其他未包含于整湿腿的水转移。期末C保留全部真实增量，即使没有修理。X_in/X_out仅扣OTHER同侧流观测间已证重叠，不扣真实J/H2O、C、反向流、未知闭合差或卡片存在。未知项不拟合。真实增量追到物理来源/接收方及具体原子接口；配对内部J/水不是新增provider或废物出口。gross湿腿内含的水/物料只计一次。

- 选定流：包装材料，未指定
- 流属性/单位：Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- 数量规则：N_r / D_r
- 数值来源模式：`calculated_value`
- 适用范围：`site_specific`
- 归一化基准：每 1 kg 参考流
- 基准类型：`process_output`
- 证据类型：`calculated_from_collection`
- 采集协议：`cp_carton`
- 来源：

###### PE内衬膜 (`liner_gross_out`)

S为随全部毛发运实际离开的完整附着包装，包括退回再发货；不是净产品Q或负荷份额。 原生产品为聚乙烯薄膜，CAS9002-88-4，工厂生产混合，质量/kg；同义词包括聚膜及聚乙烯片膜。备注描述聚乙烯包装膜并区分竞争材料PET；PET不属于本身份。保留的行李/皮革分类是孤立分类瑕疵，不是另一聚合物或路线的证据。仅用于实际PE内衬膜，并记录牌号、厚度、制袋转换和供方；外购已制成袋须包含实际转换负荷，不能默变成原膜。不得用PET、复合袋或未定塑料替代。 实际原生单位毛实物流V_r与归属负荷A_r及完整继承交换向量独立记录。原始采集不除基准；report_once唯一执行N_r / D_r。实物卡的N_r为完整V_r，不能是分配缩小量或库存净差；公用工程/服务卡采用归属A_r。 每个实际聚乙烯膜内衬或瓦楞纸箱整湿池以kg核对O + P + I + ERin + J_in + H2O_in - X_in = C + S + EOout + W + J_out + H2O_out - X_out。O/C包含空包、附着WIP、附着FG、退回及复用实物库存；P为新增采购，I为真实供应商已含接收，ERin为外部退回收进，S为gross对外发运，EOout为对外退还，W为实际整湿废物出口。内部复用配对在合并时抵消，不是ERin、EOout或采购。供应商已含包装具有一个完整上游所有者，不再购买一次。 J_in/J_out为独立实证且互不重叠的额外非水转移，例如真实留存修理料、粉尘或油，仅限尚未包含于其他整gross腿的部分。H2O_in/H2O_out为实际吸湿/加水/蒸发或其他未包含于整湿腿的水转移。期末C保留全部真实增量，即使没有修理。X_in/X_out仅扣OTHER同侧流观测间已证重叠，不扣真实J/H2O、C、反向流、未知闭合差或卡片存在。未知项不拟合。真实增量追到物理来源/接收方及具体原子接口；配对内部J/水不是新增provider或废物出口。gross湿腿内含的水/物料只计一次。

- 选定流：聚乙烯薄膜 `e64eb06c-6dc9-45f1-b003-3dc6c44b27e2`
- 流属性/单位：Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- 数量规则：N_r / D_r
- 数值来源模式：`calculated_value`
- 适用范围：`site_specific`
- 归一化基准：每 1 kg 参考流
- 基准类型：`process_output`
- 证据类型：`calculated_from_collection`
- 采集协议：`cp_liner`
- 来源：

###### PE内衬膜 (`liner_return_out`)

EO为本未改变可用包装实物的真实单独对外退回，保留毛实物量和原批次历史。内部复用抵消，不能作采购、新产品或自动共产品。 原生产品为聚乙烯薄膜，CAS9002-88-4，工厂生产混合，质量/kg；同义词包括聚膜及聚乙烯片膜。备注描述聚乙烯包装膜并区分竞争材料PET；PET不属于本身份。保留的行李/皮革分类是孤立分类瑕疵，不是另一聚合物或路线的证据。仅用于实际PE内衬膜，并记录牌号、厚度、制袋转换和供方；外购已制成袋须包含实际转换负荷，不能默变成原膜。不得用PET、复合袋或未定塑料替代。 实际原生单位毛实物流V_r与归属负荷A_r及完整继承交换向量独立记录。原始采集不除基准；report_once唯一执行N_r / D_r。实物卡的N_r为完整V_r，不能是分配缩小量或库存净差；公用工程/服务卡采用归属A_r。 每个实际聚乙烯膜内衬或瓦楞纸箱整湿池以kg核对O + P + I + ERin + J_in + H2O_in - X_in = C + S + EOout + W + J_out + H2O_out - X_out。O/C包含空包、附着WIP、附着FG、退回及复用实物库存；P为新增采购，I为真实供应商已含接收，ERin为外部退回收进，S为gross对外发运，EOout为对外退还，W为实际整湿废物出口。内部复用配对在合并时抵消，不是ERin、EOout或采购。供应商已含包装具有一个完整上游所有者，不再购买一次。 J_in/J_out为独立实证且互不重叠的额外非水转移，例如真实留存修理料、粉尘或油，仅限尚未包含于其他整gross腿的部分。H2O_in/H2O_out为实际吸湿/加水/蒸发或其他未包含于整湿腿的水转移。期末C保留全部真实增量，即使没有修理。X_in/X_out仅扣OTHER同侧流观测间已证重叠，不扣真实J/H2O、C、反向流、未知闭合差或卡片存在。未知项不拟合。真实增量追到物理来源/接收方及具体原子接口；配对内部J/水不是新增provider或废物出口。gross湿腿内含的水/物料只计一次。

- 选定流：聚乙烯薄膜 `e64eb06c-6dc9-45f1-b003-3dc6c44b27e2`
- 流属性/单位：Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- 数量规则：N_r / D_r
- 数值来源模式：`calculated_value`
- 适用范围：`site_specific`
- 归一化基准：每 1 kg 参考流
- 基准类型：`process_output`
- 证据类型：`calculated_from_collection`
- 采集协议：`cp_liner`
- 来源：

###### 聚酯片离心浇铸鼓 (`casting_drum_out`)

仅限此完整真实配置资产实际out事件，不规定质量、配方、寿命或技术能力。各实际离心浇铸鼓、冲床、切模及调理架有一份真实配置实物台群，包含完整收进、退回/退役、湿库存、实际设备内流体、磨损和修理。整设备provider与展开制造/维护互斥。实物V/M独立于兼容provider/服务A及真实服务覆盖/历史。Mass/kg设备产品provider须完整配置实测M及provider真实覆盖历史支持的分配/服务份额，不猜寿命/能力，不把观察H当总寿命。小时服务provider保留其单位及真实记录换算桥，不直接替成kg。分母未知保留真实已执行服务、失败及库存，不编A。 本卡仅披露完整真实实物V_r作为N_r；实际provider/服务A_r另归属，不因该物理腿另建provider。


- 选定流: 聚酯片离心浇铸鼓
- 流属性/单位: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- 数量规则: N_r / D_r
- 数值来源模式: `calculated_value`
- 适用范围: `site_specific`
- 归一化基准: per 1 kg reference flow
- 基准类型: `process_output`
- 证据类型: `calculated_from_collection`
- 采集协议: `cp_assets`
- 来源: `jindal-polyester-casting`; `ilcd-attributional-allocation-2010`

###### 片坯冲床 (`punch_press_out`)

仅限此完整真实配置资产实际out事件，不规定质量、配方、寿命或技术能力。各实际离心浇铸鼓、冲床、切模及调理架有一份真实配置实物台群，包含完整收进、退回/退役、湿库存、实际设备内流体、磨损和修理。整设备provider与展开制造/维护互斥。实物V/M独立于兼容provider/服务A及真实服务覆盖/历史。Mass/kg设备产品provider须完整配置实测M及provider真实覆盖历史支持的分配/服务份额，不猜寿命/能力，不把观察H当总寿命。小时服务provider保留其单位及真实记录换算桥，不直接替成kg。分母未知保留真实已执行服务、失败及库存，不编A。 本卡仅披露完整真实实物V_r作为N_r；实际provider/服务A_r另归属，不因该物理腿另建provider。


- 选定流: 片坯冲床
- 流属性/单位: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- 数量规则: N_r / D_r
- 数值来源模式: `calculated_value`
- 适用范围: `site_specific`
- 归一化基准: per 1 kg reference flow
- 基准类型: `process_output`
- 证据类型: `calculated_from_collection`
- 采集协议: `cp_assets`
- 来源: `jindal-polyester-casting`; `ilcd-attributional-allocation-2010`

###### 纽扣坯切模 (`cutting_die_out`)

仅限此完整真实配置资产实际out事件，不规定质量、配方、寿命或技术能力。各实际离心浇铸鼓、冲床、切模及调理架有一份真实配置实物台群，包含完整收进、退回/退役、湿库存、实际设备内流体、磨损和修理。整设备provider与展开制造/维护互斥。实物V/M独立于兼容provider/服务A及真实服务覆盖/历史。Mass/kg设备产品provider须完整配置实测M及provider真实覆盖历史支持的分配/服务份额，不猜寿命/能力，不把观察H当总寿命。小时服务provider保留其单位及真实记录换算桥，不直接替成kg。分母未知保留真实已执行服务、失败及库存，不编A。 本卡仅披露完整真实实物V_r作为N_r；实际provider/服务A_r另归属，不因该物理腿另建provider。


- 选定流: 纽扣坯切模
- 流属性/单位: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- 数量规则: N_r / D_r
- 数值来源模式: `calculated_value`
- 适用范围: `site_specific`
- 归一化基准: per 1 kg reference flow
- 基准类型: `process_output`
- 证据类型: `calculated_from_collection`
- 采集协议: `cp_assets`
- 来源: `jindal-polyester-casting`; `ilcd-attributional-allocation-2010`

###### 纽扣坯调理架 (`conditioning_rack_out`)

仅限此完整真实配置资产实际out事件，不规定质量、配方、寿命或技术能力。各实际离心浇铸鼓、冲床、切模及调理架有一份真实配置实物台群，包含完整收进、退回/退役、湿库存、实际设备内流体、磨损和修理。整设备provider与展开制造/维护互斥。实物V/M独立于兼容provider/服务A及真实服务覆盖/历史。Mass/kg设备产品provider须完整配置实测M及provider真实覆盖历史支持的分配/服务份额，不猜寿命/能力，不把观察H当总寿命。小时服务provider保留其单位及真实记录换算桥，不直接替成kg。分母未知保留真实已执行服务、失败及库存，不编A。 本卡仅披露完整真实实物V_r作为N_r；实际provider/服务A_r另归属，不因该物理腿另建provider。


- 选定流: 纽扣坯调理架
- 流属性/单位: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- 数量规则: N_r / D_r
- 数值来源模式: `calculated_value`
- 适用范围: `site_specific`
- 归一化基准: per 1 kg reference flow
- 基准类型: `process_output`
- 证据类型: `calculated_from_collection`
- 采集协议: `cp_assets`
- 来源: `jindal-polyester-casting`; `ilcd-attributional-allocation-2010`

##### 废物流

###### 废弃瓦楞纸箱 (`carton_waste`)

W为实际单独测量的分流废物，含污染/水分并对应一个接收方。若该来源已进入同一个实测混合废物W，则仅保留非加和来源分账，不能重复实物出口或指定第二供方。出售废物不自动抵扣。 实际原生单位毛实物流V_r与归属负荷A_r及完整继承交换向量独立记录。原始采集不除基准；report_once唯一执行N_r / D_r。实物卡的N_r为完整V_r，不能是分配缩小量或库存净差；公用工程/服务卡采用归属A_r。 每个实际聚乙烯膜内衬或瓦楞纸箱整湿池以kg核对O + P + I + ERin + J_in + H2O_in - X_in = C + S + EOout + W + J_out + H2O_out - X_out。O/C包含空包、附着WIP、附着FG、退回及复用实物库存；P为新增采购，I为真实供应商已含接收，ERin为外部退回收进，S为gross对外发运，EOout为对外退还，W为实际整湿废物出口。内部复用配对在合并时抵消，不是ERin、EOout或采购。供应商已含包装具有一个完整上游所有者，不再购买一次。 J_in/J_out为独立实证且互不重叠的额外非水转移，例如真实留存修理料、粉尘或油，仅限尚未包含于其他整gross腿的部分。H2O_in/H2O_out为实际吸湿/加水/蒸发或其他未包含于整湿腿的水转移。期末C保留全部真实增量，即使没有修理。X_in/X_out仅扣OTHER同侧流观测间已证重叠，不扣真实J/H2O、C、反向流、未知闭合差或卡片存在。未知项不拟合。真实增量追到物理来源/接收方及具体原子接口；配对内部J/水不是新增provider或废物出口。gross湿腿内含的水/物料只计一次。

- 选定流：废弃瓦楞运输纸箱
- 流属性/单位：Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- 数量规则：N_r / D_r
- 数值来源模式：`calculated_value`
- 适用范围：`site_specific`
- 归一化基准：每 1 kg 参考流
- 基准类型：`process_output`
- 证据类型：`calculated_from_collection`
- 采集协议：`cp_carton`
- 来源：

###### 废弃PE内衬膜 (`liner_waste`)

W为实际单独测量的分流废物，含污染/水分并对应一个接收方。若该来源已进入同一个实测混合废物W，则仅保留非加和来源分账，不能重复实物出口或指定第二供方。出售废物不自动抵扣。 实际原生单位毛实物流V_r与归属负荷A_r及完整继承交换向量独立记录。原始采集不除基准；report_once唯一执行N_r / D_r。实物卡的N_r为完整V_r，不能是分配缩小量或库存净差；公用工程/服务卡采用归属A_r。 每个实际聚乙烯膜内衬或瓦楞纸箱整湿池以kg核对O + P + I + ERin + J_in + H2O_in - X_in = C + S + EOout + W + J_out + H2O_out - X_out。O/C包含空包、附着WIP、附着FG、退回及复用实物库存；P为新增采购，I为真实供应商已含接收，ERin为外部退回收进，S为gross对外发运，EOout为对外退还，W为实际整湿废物出口。内部复用配对在合并时抵消，不是ERin、EOout或采购。供应商已含包装具有一个完整上游所有者，不再购买一次。 J_in/J_out为独立实证且互不重叠的额外非水转移，例如真实留存修理料、粉尘或油，仅限尚未包含于其他整gross腿的部分。H2O_in/H2O_out为实际吸湿/加水/蒸发或其他未包含于整湿腿的水转移。期末C保留全部真实增量，即使没有修理。X_in/X_out仅扣OTHER同侧流观测间已证重叠，不扣真实J/H2O、C、反向流、未知闭合差或卡片存在。未知项不拟合。真实增量追到物理来源/接收方及具体原子接口；配对内部J/水不是新增provider或废物出口。gross湿腿内含的水/物料只计一次。

- 选定流：废弃聚乙烯内衬膜
- 流属性/单位：Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- 数量规则：N_r / D_r
- 数值来源模式：`calculated_value`
- 适用范围：`site_specific`
- 归一化基准：每 1 kg 参考流
- 基准类型：`process_output`
- 证据类型：`calculated_from_collection`
- 采集协议：`cp_liner`
- 来源：

###### 报废聚酯片离心浇铸鼓 (`casting_drum_waste`)

仅限此完整真实配置资产实际waste事件，不规定质量、配方、寿命或技术能力。各实际离心浇铸鼓、冲床、切模及调理架有一份真实配置实物台群，包含完整收进、退回/退役、湿库存、实际设备内流体、磨损和修理。整设备provider与展开制造/维护互斥。实物V/M独立于兼容provider/服务A及真实服务覆盖/历史。Mass/kg设备产品provider须完整配置实测M及provider真实覆盖历史支持的分配/服务份额，不猜寿命/能力，不把观察H当总寿命。小时服务provider保留其单位及真实记录换算桥，不直接替成kg。分母未知保留真实已执行服务、失败及库存，不编A。 实际固化边角料、未固化混合物、废丙酮、含水废物、污染擦布/过滤件、废内衬/纸箱或退役工具/设备的一次整件接收事件保留完整湿Qt，基材加全部留存树脂/溶剂/残留/水仅一次。嵌套来源/物种/检验质量不是额外出口，除非真实分离。实际receiver/provider按其兼容单位一次接收全部实物Qt。另保留实际建模服务总需求及各受服务原Qc或真实新增Q的非重叠A_e,c。不按归属份额缩Qt，不另加留存溶剂/水，不向各队列重新计全部Qt，也不推再生抵扣。A未知保持未解，完整实物事件/历史保留。 本卡仅披露完整真实实物V_r作为N_r；实际provider/服务A_r另归属，不因该物理腿另建provider。


- 选定流: 报废聚酯片离心浇铸鼓
- 流属性/单位: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- 数量规则: N_r / D_r
- 数值来源模式: `calculated_value`
- 适用范围: `site_specific`
- 归一化基准: per 1 kg reference flow
- 基准类型: `process_output`
- 证据类型: `calculated_from_collection`
- 采集协议: `cp_assets`
- 来源: `jindal-polyester-casting`; `ilcd-attributional-allocation-2010`

###### 报废片坯冲床 (`punch_press_waste`)

仅限此完整真实配置资产实际waste事件，不规定质量、配方、寿命或技术能力。各实际离心浇铸鼓、冲床、切模及调理架有一份真实配置实物台群，包含完整收进、退回/退役、湿库存、实际设备内流体、磨损和修理。整设备provider与展开制造/维护互斥。实物V/M独立于兼容provider/服务A及真实服务覆盖/历史。Mass/kg设备产品provider须完整配置实测M及provider真实覆盖历史支持的分配/服务份额，不猜寿命/能力，不把观察H当总寿命。小时服务provider保留其单位及真实记录换算桥，不直接替成kg。分母未知保留真实已执行服务、失败及库存，不编A。 实际固化边角料、未固化混合物、废丙酮、含水废物、污染擦布/过滤件、废内衬/纸箱或退役工具/设备的一次整件接收事件保留完整湿Qt，基材加全部留存树脂/溶剂/残留/水仅一次。嵌套来源/物种/检验质量不是额外出口，除非真实分离。实际receiver/provider按其兼容单位一次接收全部实物Qt。另保留实际建模服务总需求及各受服务原Qc或真实新增Q的非重叠A_e,c。不按归属份额缩Qt，不另加留存溶剂/水，不向各队列重新计全部Qt，也不推再生抵扣。A未知保持未解，完整实物事件/历史保留。 本卡仅披露完整真实实物V_r作为N_r；实际provider/服务A_r另归属，不因该物理腿另建provider。


- 选定流: 报废片坯冲床
- 流属性/单位: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- 数量规则: N_r / D_r
- 数值来源模式: `calculated_value`
- 适用范围: `site_specific`
- 归一化基准: per 1 kg reference flow
- 基准类型: `process_output`
- 证据类型: `calculated_from_collection`
- 采集协议: `cp_assets`
- 来源: `jindal-polyester-casting`; `ilcd-attributional-allocation-2010`

###### 报废纽扣坯切模 (`cutting_die_waste`)

仅限此完整真实配置资产实际waste事件，不规定质量、配方、寿命或技术能力。各实际离心浇铸鼓、冲床、切模及调理架有一份真实配置实物台群，包含完整收进、退回/退役、湿库存、实际设备内流体、磨损和修理。整设备provider与展开制造/维护互斥。实物V/M独立于兼容provider/服务A及真实服务覆盖/历史。Mass/kg设备产品provider须完整配置实测M及provider真实覆盖历史支持的分配/服务份额，不猜寿命/能力，不把观察H当总寿命。小时服务provider保留其单位及真实记录换算桥，不直接替成kg。分母未知保留真实已执行服务、失败及库存，不编A。 实际固化边角料、未固化混合物、废丙酮、含水废物、污染擦布/过滤件、废内衬/纸箱或退役工具/设备的一次整件接收事件保留完整湿Qt，基材加全部留存树脂/溶剂/残留/水仅一次。嵌套来源/物种/检验质量不是额外出口，除非真实分离。实际receiver/provider按其兼容单位一次接收全部实物Qt。另保留实际建模服务总需求及各受服务原Qc或真实新增Q的非重叠A_e,c。不按归属份额缩Qt，不另加留存溶剂/水，不向各队列重新计全部Qt，也不推再生抵扣。A未知保持未解，完整实物事件/历史保留。 本卡仅披露完整真实实物V_r作为N_r；实际provider/服务A_r另归属，不因该物理腿另建provider。


- 选定流: 报废纽扣坯切模
- 流属性/单位: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- 数量规则: N_r / D_r
- 数值来源模式: `calculated_value`
- 适用范围: `site_specific`
- 归一化基准: per 1 kg reference flow
- 基准类型: `process_output`
- 证据类型: `calculated_from_collection`
- 采集协议: `cp_assets`
- 来源: `jindal-polyester-casting`; `ilcd-attributional-allocation-2010`

###### 报废纽扣坯调理架 (`conditioning_rack_waste`)

仅限此完整真实配置资产实际waste事件，不规定质量、配方、寿命或技术能力。各实际离心浇铸鼓、冲床、切模及调理架有一份真实配置实物台群，包含完整收进、退回/退役、湿库存、实际设备内流体、磨损和修理。整设备provider与展开制造/维护互斥。实物V/M独立于兼容provider/服务A及真实服务覆盖/历史。Mass/kg设备产品provider须完整配置实测M及provider真实覆盖历史支持的分配/服务份额，不猜寿命/能力，不把观察H当总寿命。小时服务provider保留其单位及真实记录换算桥，不直接替成kg。分母未知保留真实已执行服务、失败及库存，不编A。 实际固化边角料、未固化混合物、废丙酮、含水废物、污染擦布/过滤件、废内衬/纸箱或退役工具/设备的一次整件接收事件保留完整湿Qt，基材加全部留存树脂/溶剂/残留/水仅一次。嵌套来源/物种/检验质量不是额外出口，除非真实分离。实际receiver/provider按其兼容单位一次接收全部实物Qt。另保留实际建模服务总需求及各受服务原Qc或真实新增Q的非重叠A_e,c。不按归属份额缩Qt，不另加留存溶剂/水，不向各队列重新计全部Qt，也不推再生抵扣。A未知保持未解，完整实物事件/历史保留。 本卡仅披露完整真实实物V_r作为N_r；实际provider/服务A_r另归属，不因该物理腿另建provider。


- 选定流: 报废纽扣坯调理架
- 流属性/单位: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- 数量规则: N_r / D_r
- 数值来源模式: `calculated_value`
- 适用范围: `site_specific`
- 归一化基准: per 1 kg reference flow
- 基准类型: `process_output`
- 证据类型: `calculated_from_collection`
- 采集协议: `cp_assets`
- 来源: `jindal-polyester-casting`; `ilcd-attributional-allocation-2010`

##### 基本流

## 7. 分配与共产品处理

| rule_id | applies_to | rule | source_ids |
| --- | --- | --- | --- |
| a_framework | all inventory rows | 本方法构建归因型清单。先把专属作业及实测交换归于真实批次；用实际或虚拟细分隔离独占交换。兼容既有PCR可提供可复用原则，但不能替代坯料特定适用性。制造文献不提供LCA分配授权。 | ilcd-attributional-allocation-2010 |
| a_causal | all inventory rows | 对每个确实共享的剩余交换，识别其与各功能间的决定性物理因果关系，并采用该交换及实际状态的实测驱动。不得任意选择物理/经济分配、对所有交换统一套质量比例或按负荷份额缩小毛实物流。保留驱动证据和不确定性。 | ilcd-attributional-allocation-2010 |
| a_residual | all inventory rows | 仅对缺乏可论证决定性物理因果关系的真正剩余，采用同一共同过程门、实际状态的同期共功能市场价值。记录数量、状态、币种、期间、价格来源及剩余分母；缺乏可比价格时分配保持未解决。不设固定比例、不自动抵扣避免生产，也不因卖废料转移负荷。废物状态与实际处理责任始终明确。 | ilcd-attributional-allocation-2010 |

## 8. 前景数据采集、计算与质量规则

全部协议采集未除基准的原始数量。aggregation_rule字段仅声明同一report_once结果的报告基准，不在采集时进行除法。实物卡N_r为完整毛V_r，公用工程/服务卡为已追溯A_r。D_r为批次正值Q或原Qc，绝不是H。

### 数据采集协议

| protocol_id | process_id | flow_role | record_type | raw_fields | collection_method | unit | frequency | temporal_coverage | site_scope | aggregation_rule | quality_evidence |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| cp_release | make_blank | released_blank | 验收及净称重记录 | cohort; 图样版本; 坯尺寸; 固化调节状态; 验收事件; 原放行历史; 毛kg; 皮重kg; 净Q; 如用件数; 同配置实测M; 不确定性 | 首次验收位于同配置全部实际混合、离心浇铸、冲切、固化/硬化、调理、坯检验/返工及必要供货包装完成、工厂可供货之时。Q（亦记Q0或原队列c的Qc）为独立实测的唯一首次完整纽扣坯验收净kg，包含实际留存树脂成分和水一次，排除实测可拆包装皮重。首次必要包装归新增制造，后续留库/重包/再交付/修理/复检仅是H内原队列真实服务。件数转质量仅用独立实测同配置M及抽样/不确定性，不用目录坯重。 独立核对Q0 = D0_c + FG0_c + Held0_c + L0_c + T0_c，各项分别为互不重叠的尚存原物料交付、现场已放行FG、全部其他实际现场已验收状态、原物料/水不可逆损失和其他终端去向。按每个真实地点/状态继续细分；gross交付/退回循环仅在此事件桥中抵消。各原物料去向在锁定验收基准下仅记一次。另将各幸存制品当前湿质量桥接到仍在其中的原物料以及后续真实留存非水物料和水变化。不将原损失恢复进幸存物后又记入L0_c。新料/吸湿增加实物质量，不增加Q。Q0=0或未知保留全部原始负荷且无归一化结果。 | kg | 每批及每次首次放行事件 | 完整生产批次，含失败和零产出期间 | 声明浇注场址及配置 | 每 1 kg 参考流 | 校准; 毛皮重单; 买方图样; 完整批次放行账 |
| cp_materials | make_blank | 每种独立供货及退回 | 称重及供货追踪 | row_id; 批次; 整份供货配方; 原生毛输入V; 对外返回V; 原料期初期末; 未使用非WIP; WIP状态; 逐流继承向量; 实际加入; 供方; 组成子账; 已净额标记 | 实测接收/领退与库存记录及配方所有者核对；保留全部真实材料及完整原料/WIP向量。组成含量不能重复采购。 | 原生单位 | 每次领退及库存边界 | 完整批次，含清理失败和返工 | 实际供货及制造门 | 每 1 kg 参考流 | 供方文件; 批次配方; 称重单; 完整库存历史 |
| cp_energy | make_blank | make_electricity | 表计及事件账 | 电表id; 原始kWh或MJ; 如有真实速率及时间; 供电地理电压组合; 作业事件; 失败待机清理返工; 驱动; 批次; 不确定性 | 使用实际表计区间及事件账；仅真实功率速率积分。真实因果分配前记录专属与共享使用。 | kWh; MJ | 表计区间及作业事件 | 批次全部作业及待机期间 | 声明供电表计及机器辅助范围 | 每 1 kg 参考流 | 电表校准; 区间核对; 供电合同; 驱动证据 |
| cp_species | make_blank | 单项基本排放 | 物种及外部门测量 | row_id; 实际分子或颗粒; 分子CAS; 外部介质分区; 组成; 实际积分体积或速率; 仅速率对应时间; T; P; 湿度; 独立密度; 捕集份额; 毛V; 不确定性 | 对实际外部苯乙烯、丙酮和分子H2O蒸气，EPA Method320及所含FTIR Protocol提供独立抽取式气相程序：真实目标/参考光谱或Protocol4.6制备、含水等光谱/干扰选择、合适光路/T/P条件、不冷凝的加热惰性输送、漏检/线性/背景/CTS检查、完整原始光谱及残差分析、独立同基准气量/流量与浓度积分，以及分析物特定输送/基质验证。遵守不同的例行QA加标和第13节验证/Method301偏差精密度程序，普通加标不替代初次验证，其结果不是自动校正因子。不声称现场实际验证或全部蒸气/基质覆盖。程序确实存在，未执行现场/参考/QA工作属于研究要求；实际不适用或未建立的必要程序仍具体hold。不把交联聚合物粒子或液体冷凝物当气相单体测量。 保留Method320真实印刷矛盾：第9.2.3节式3写tracer_spiked/tracer_standard，却称DF至少10，式4又将其作为混合分数。不照抄不兼容量纲的倒数约定。本PCR明确独立量纲综合为同一真实摩尔湿/干基准上k=(tracer_spiked-tracer_native)/(tracer_standard-tracer_native)，要求不同且非零差的端元、守恒示踪物及0<k<1；C_expected=k*C_standard+(1-k)*C_native。倒数稀释比为1/k，不能替k。保留实际流量、端元/背景及现场回收证据，算例不规定示踪剂量、SF6使用、配方或已执行QA。光谱采用来源真实光程/温度/压力校正；排放质量只积分一次实际同状态浓度与气量，已积分体积不再乘时间。 Method18是相反范围证据，不是无条件苯乙烯方法：第1.2.2节排除高分子聚合物、可能在分析前聚合的化合物及极低蒸气压化合物，仅有GC检测器程序不能闭合可聚合样品的保全。Method4独立区分准确参考水分测定和设备设定近似估计，并提示饱和/液滴正偏差，含有机物冷凝液不能自动算纯水。FTIR定量水要求真实Protocol4.6定量参考，不能仅用水干扰光谱。总VOC、暴露浓度、COD及总PM不是苯乙烯/丙酮/聚酯物种质量。真实聚合物特定颗粒主张须有已建立的识别/回收/基质程序，缺失时将受影响真实主张保持hold，不把全部收集PM贴为UPR。这些方法文件均不提供已测纽扣坯生产结果。 | 原生单位; kg | 代表性作业及全部异常事件 | 真实混料浇注固化清理搬运观察 | 声明外部空气/液体门及过程 | 每 1 kg 参考流 | 抽样校准; 物种鉴定; 介质状态; 不确定性; 独立水证据 |
| cp_outlets | make_blank | 各废物出口 | 接收方及废物批次实测 | 出口id; 实物混合物id; 来源子账; 毛湿V; 皮重; 实际物种水分; 废物状态; 接收方; 内部回收转移; 废物期初期末; 继承向量 | 实际固化边角料、未固化混合物、废丙酮、含水废物、污染擦布/过滤件、废内衬/纸箱或退役工具/设备的一次整件接收事件保留完整湿Qt，基材加全部留存树脂/溶剂/残留/水仅一次。嵌套来源/物种/检验质量不是额外出口，除非真实分离。实际receiver/provider按其兼容单位一次接收全部实物Qt。另保留实际建模服务总需求及各受服务原Qc或真实新增Q的非重叠A_e,c。不按归属份额缩Qt，不另加留存溶剂/水，不向各队列重新计全部Qt，也不推再生抵扣。A未知保持未解，完整实物事件/历史保留。 | kg | 每个出口及库存边界 | 完整批次与实际处理观察 | 实际废物收集与接收方接口 | 每 1 kg 参考流 | 称重单; 转移单; 接收方验收; 物种元素证据 |
| cp_fg | post_release | fg_received; fg_return_received; fg_dispatched; fg_electricity | 已放行库存及服务账 | 原批次; 原Qc; H; 内部接收; FG期初期末; 每个继承交换向量; 毛发运; 外部产品退回; 重复检验; 真实增量返工; 实际能耗; 原生毛V; 归属A | 追踪已放行实物的滞留、包装、仓储、搬运、发运与返回。滞留FG已执行服务仍保留。配对内部转移及原放行记录；H仅描述观察，未来服务未知。 | kg; MJ; h | 每个事件及观察边界 | 声明的实际服务区间H | FG库包装及发运门 | 每 1 kg 参考流 | 原放行单; 库存历史; 发运退回单; 实际服务表计 |
| cp_carton | post_release | carton_purchase; carton_return_received; carton_gross_out; carton_return_out; carton_waste | 包装池平衡 | 真实P/I/ERin/S/EOout/W；内部复用配对与外部退还分开；完整湿O/C各状态；实际J_in/J_out/H2O_in/H2O_out；仅OTHER同侧重复X；独立provider服务A及原Qc。 | 每个实际聚乙烯膜内衬或瓦楞纸箱整湿池以kg核对O + P + I + ERin + J_in + H2O_in - X_in = C + S + EOout + W + J_out + H2O_out - X_out。O/C包含空包、附着WIP、附着FG、退回及复用实物库存；P为新增采购，I为真实供应商已含接收，ERin为外部退回收进，S为gross对外发运，EOout为对外退还，W为实际整湿废物出口。内部复用配对在合并时抵消，不是ERin、EOout或采购。供应商已含包装具有一个完整上游所有者，不再购买一次。 J_in/J_out为独立实证且互不重叠的额外非水转移，例如真实留存修理料、粉尘或油，仅限尚未包含于其他整gross腿的部分。H2O_in/H2O_out为实际吸湿/加水/蒸发或其他未包含于整湿腿的水转移。期末C保留全部真实增量，即使没有修理。X_in/X_out仅扣OTHER同侧流观测间已证重叠，不扣真实J/H2O、C、反向流、未知闭合差或卡片存在。未知项不拟合。真实增量追到物理来源/接收方及具体原子接口；配对内部J/水不是新增provider或废物出口。gross湿腿内含的水/物料只计一次。 | kg | 每次流转及库存边界 | 完整实际包装服务区间 | 本组件的空包装附着及复用池 | 每 1 kg 参考流 | 称重记录; 实际组件规格; 池账; 毛发运退回及废物凭证 |
| cp_liner | post_release | liner_purchase; liner_return_received; liner_gross_out; liner_return_out; liner_waste | 包装池平衡 | 真实P/I/ERin/S/EOout/W；内部复用配对与外部退还分开；完整湿O/C各状态；实际J_in/J_out/H2O_in/H2O_out；仅OTHER同侧重复X；独立provider服务A及原Qc。 | 每个实际聚乙烯膜内衬或瓦楞纸箱整湿池以kg核对O + P + I + ERin + J_in + H2O_in - X_in = C + S + EOout + W + J_out + H2O_out - X_out。O/C包含空包、附着WIP、附着FG、退回及复用实物库存；P为新增采购，I为真实供应商已含接收，ERin为外部退回收进，S为gross对外发运，EOout为对外退还，W为实际整湿废物出口。内部复用配对在合并时抵消，不是ERin、EOout或采购。供应商已含包装具有一个完整上游所有者，不再购买一次。 J_in/J_out为独立实证且互不重叠的额外非水转移，例如真实留存修理料、粉尘或油，仅限尚未包含于其他整gross腿的部分。H2O_in/H2O_out为实际吸湿/加水/蒸发或其他未包含于整湿腿的水转移。期末C保留全部真实增量，即使没有修理。X_in/X_out仅扣OTHER同侧流观测间已证重叠，不扣真实J/H2O、C、反向流、未知闭合差或卡片存在。未知项不拟合。真实增量追到物理来源/接收方及具体原子接口；配对内部J/水不是新增provider或废物出口。gross湿腿内含的水/物料只计一次。 | kg | 每次流转及库存边界 | 完整实际包装服务区间 | 本组件的空包装附着及复用池 | 每 1 kg 参考流 | 称重记录; 实际组件规格; 池账; 毛发运退回及废物凭证 |
| cp_assets | post_release | actual individual equipment fleet and compatible service | actual event record | actual configuration; measured whole M and V; installed fluids; opening closing all states; receipt return retirement; repair wear failure; complete supplier/history ownership; actual provider covered service unit and denominator; originalQ/Qc; observedH; actual nonoverlap A; uncertainty | 各实际离心浇铸鼓、冲床、切模及调理架有一份真实配置实物台群，包含完整收进、退回/退役、湿库存、实际设备内流体、磨损和修理。整设备provider与展开制造/维护互斥。实物V/M独立于兼容provider/服务A及真实服务覆盖/历史。Mass/kg设备产品provider须完整配置实测M及provider真实覆盖历史支持的分配/服务份额，不猜寿命/能力，不把观察H当总寿命。小时服务provider保留其单位及真实记录换算桥，不直接替成kg。分母未知保留真实已执行服务、失败及库存，不编A。 | kg; actual compatible service unit | each actual event and stock/service close | full actual production and original cohort observed H | actual casting/punching/conditioning site and complete real provider scope | per 1 kg reference flow | calibrated masses and actual whole BOM; receipts/returns/receiver; compatible provider coverage and service history; failure and unknown disclosure |

### 计算规则

| rule_id | Applies to | Formula or rule | Inputs | Output | source_ids |
| --- | --- | --- | --- | --- | --- |
| convert_raw | all inventory rows | 各原始量在归属前转换为原生行单位。kWh * 3.6 = MJ。真实速率仅积分一次，已积分体积不再积分。仅在需要时采用独立同状态密度或同配置实测坯料M；保留原值/单位、转换及不确定性。 | raw_value; raw_unit; measured_state; independent_conversion; cp_release | converted_raw |  |
| trace_cohort | all inventory rows | 完整毛实物V与归属A分别保留。先归专属交换，再细分、识别逐交换决定性物理因果关系，仅对真正共同门剩余负荷按可比实际状态市场价值分配。逐项追溯原料/非WIP/WIP/FG/返回向量的期初期末历史；已净额数量不能二次调整。 | converted_raw; inherited_vectors; physical_V; actual_driver; cp_materials; cp_fg | N_r; cohort_id | ilcd-attributional-allocation-2010 |
| select_denominator | all inventory rows | 新首次放行批次的D_r = Q；后续真实服务/实物流转的D_r = 原Qc。Q及Qc为首次放行净kg，不是毛发货或服务观察H。D_r非正时保留真实原始负荷，不出单位结果。发运、复验或退回不产生重复放行。 | cp_release; cp_fg; original_cohort_id; Q; Qc | D_r |  |
| report_once | all inventory rows | x_r = N_r / D_r。实物卡的N_r为完整毛V_r；公用工程/服务负荷卡采用已追溯A_r。D_r为select_denominator得到的正值批次放行kg。原始换算及真实归属后仅除一次；卡片数量及协议aggregation引用x_r，不能再除。 实际provider行upr_supply/mekp_supply/cobalt_supply/styrene_supply/wax_supply/acetone_supply/water_supply以及各_burden行取实际兼容归属A_r为N_r；各gross实物/废物/气相出口行保留完整V_r，provider需求另按实际兼容服务非重叠归属，不能从物理腿自动再采购。 | N_r; D_r; convert_raw; trace_cohort; select_denominator | x_r |  |
| close_gates | all inventory rows | 每个实际聚乙烯膜内衬或瓦楞纸箱整湿池以kg核对O + P + I + ERin + J_in + H2O_in - X_in = C + S + EOout + W + J_out + H2O_out - X_out。O/C包含空包、附着WIP、附着FG、退回及复用实物库存；P为新增采购，I为真实供应商已含接收，ERin为外部退回收进，S为gross对外发运，EOout为对外退还，W为实际整湿废物出口。内部复用配对在合并时抵消，不是ERin、EOout或采购。供应商已含包装具有一个完整上游所有者，不再购买一次。 J_in/J_out为独立实证且互不重叠的额外非水转移，例如真实留存修理料、粉尘或油，仅限尚未包含于其他整gross腿的部分。H2O_in/H2O_out为实际吸湿/加水/蒸发或其他未包含于整湿腿的水转移。期末C保留全部真实增量，即使没有修理。X_in/X_out仅扣OTHER同侧流观测间已证重叠，不扣真实J/H2O、C、反向流、未知闭合差或卡片存在。未知项不拟合。真实增量追到物理来源/接收方及具体原子接口；配对内部J/水不是新增provider或废物出口。gross湿腿内含的水/物料只计一次。 实际固化边角料、未固化混合物、废丙酮、含水废物、污染擦布/过滤件、废内衬/纸箱或退役工具/设备的一次整件接收事件保留完整湿Qt，基材加全部留存树脂/溶剂/残留/水仅一次。嵌套来源/物种/检验质量不是额外出口，除非真实分离。实际receiver/provider按其兼容单位一次接收全部实物Qt。另保留实际建模服务总需求及各受服务原Qc或真实新增Q的非重叠A_e,c。不按归属份额缩Qt，不另加留存溶剂/水，不向各队列重新计全部Qt，也不推再生抵扣。A未知保持未解，完整实物事件/历史保留。 制造/FG/合并完整湿实物门及元素/真实反应物种另独立核对；内部首次放行及复用交接配对抵消。 | cp_release; cp_materials; cp_fg; cp_carton; cp_liner; cp_species; cp_outlets | physical_and_vector_reconciliation |  |
| original_q0_fates | reference product | 独立核对Q0 = D0_c + FG0_c + Held0_c + L0_c + T0_c，各项分别为互不重叠的尚存原物料交付、现场已放行FG、全部其他实际现场已验收状态、原物料/水不可逆损失和其他终端去向。按每个真实地点/状态继续细分；gross交付/退回循环仅在此事件桥中抵消。各原物料去向在锁定验收基准下仅记一次。另将各幸存制品当前湿质量桥接到仍在其中的原物料以及后续真实留存非水物料和水变化。不将原损失恢复进幸存物后又记入L0_c。新料/吸湿增加实物质量，不增加Q。Q0=0或未知保留全部原始负荷且无归一化结果。 | cp_release; cp_fg; cp_outlets; originalQ0 | original Q0 and independent present wet states | `ilcd-attributional-allocation-2010` |
| tracer_fraction | actual FTIR dynamic spike | k = (tracer_spiked - tracer_native) / (tracer_standard - tracer_native); C_expected = k*C_standard + (1-k)*C_native. 保留Method320真实印刷矛盾：第9.2.3节式3写tracer_spiked/tracer_standard，却称DF至少10，式4又将其作为混合分数。不照抄不兼容量纲的倒数约定。本PCR明确独立量纲综合为同一真实摩尔湿/干基准上k=(tracer_spiked-tracer_native)/(tracer_standard-tracer_native)，要求不同且非零差的端元、守恒示踪物及0<k<1；C_expected=k*C_standard+(1-k)*C_native。倒数稀释比为1/k，不能替k。保留实际流量、端元/背景及现场回收证据，算例不规定示踪剂量、SF6使用、配方或已执行QA。光谱采用来源真实光程/温度/压力校正；排放质量只积分一次实际同状态浓度与气量，已积分体积不再乘时间。 | actual same-basis tracer and analyte endmembers; actual flow and spectra; cp_species | k; C_expected | `epa-method320` |

### 数据质量要求

| requirement_id | Applies to | Requirement | Evidence |
| --- | --- | --- | --- |
| dq_identity | all inventory rows | 每份实际完整供货及原生材质、形态、路线、地理、type和介质限制均须一致。辅助UUID/供方未知须披露；核心硬不匹配阻断适用性，不能用CPC标签修复。 | 完整原生身份及精确单位链; 实际供货验收记录 |
| dq_raw | all inventory rows | 这里固化为供货UPR制剂真实自由基交联，不凭假定变成现场新聚酯缩聚。实际单体结合、留存未反应单体、蒸发、引发剂分解及各真实物种生成/消耗，独立于总湿质量和元素守恒。各反应分子物种记录期初 + 实际输入 + 独立实证生成 = 期末 + 实际输出 + 独立实证消耗，不把已固化聚合物当未改变苯乙烯单体守恒，也不强加缩合水。含挥发物整废物和收集冷凝液保持整件实物接收。实际试样完整性、硬化及可加工性验收采用机械/买方证据，不编残余单体化学限值、统一硬度或时间/温度。若真实等级要求化学检验，其真实基质特定程序须存在后才完成该主张。 对实际外部苯乙烯、丙酮和分子H2O蒸气，EPA Method320及所含FTIR Protocol提供独立抽取式气相程序：真实目标/参考光谱或Protocol4.6制备、含水等光谱/干扰选择、合适光路/T/P条件、不冷凝的加热惰性输送、漏检/线性/背景/CTS检查、完整原始光谱及残差分析、独立同基准气量/流量与浓度积分，以及分析物特定输送/基质验证。遵守不同的例行QA加标和第13节验证/Method301偏差精密度程序，普通加标不替代初次验证，其结果不是自动校正因子。不声称现场实际验证或全部蒸气/基质覆盖。程序确实存在，未执行现场/参考/QA工作属于研究要求；实际不适用或未建立的必要程序仍具体hold。不把交联聚合物粒子或液体冷凝物当气相单体测量。 Method18是相反范围证据，不是无条件苯乙烯方法：第1.2.2节排除高分子聚合物、可能在分析前聚合的化合物及极低蒸气压化合物，仅有GC检测器程序不能闭合可聚合样品的保全。Method4独立区分准确参考水分测定和设备设定近似估计，并提示饱和/液滴正偏差，含有机物冷凝液不能自动算纯水。FTIR定量水要求真实Protocol4.6定量参考，不能仅用水干扰光谱。总VOC、暴露浓度、COD及总PM不是苯乙烯/丙酮/聚酯物种质量。真实聚合物特定颗粒主张须有已建立的识别/回收/基质程序，缺失时将受影响真实主张保持hold，不把全部收集PM贴为UPR。这些方法文件均不提供已测纽扣坯生产结果。 | 原始记录; 校准; 独立分析及不确定性 |
| dq_vectors | make_blank; post_release | 制造、FG、合并实物门及每个继承交换向量分别闭合。保留原料、WIP、未使用非WIP及历史FG区别；混合W仅一个总量/供方，来源不加和。 | 完整库存事件向量; 包装池; 接收方及实物物种记录 |
| dq_sources | all inventory rows | 来源支持真实坯料终端及选定浇片路线的透明定性技术综合；不是同一SKU、工厂订单、产率范围、当代排放实测或分配审批。保留相关替代路线及来源限制。 | 完整原件上下文; 各来源适用性判断 |

## 9. 校验规则

| rule_id | applies_to | rule | source_ids |
| --- | --- | --- | --- |
| v_terminal | released_blank | 核对完整固化坯及买方验收状态、无孔/无最终制扣作业、同配置及实测净Q；仅有产品族UUID不能证明适用性。真实缺失的核心终端/路线/计量关系保持未解决，阻止数据集完成。 | jindal-polyester-casting; pfb-polyester-blanks; classic-button-process |
| v_accounting | all inventory rows | 检查各原始分子、源单位换算、实物V与A、唯一除法、Q/Qc唯一性、同批期末FG、WIP/非WIP及完整继承向量门。Q0保留负荷而不出单位结果。未知不能当通过或零。 |  |
| v_packaging | post_release | 每个实际聚乙烯膜内衬或瓦楞纸箱整湿池以kg核对O + P + I + ERin + J_in + H2O_in - X_in = C + S + EOout + W + J_out + H2O_out - X_out。O/C包含空包、附着WIP、附着FG、退回及复用实物库存；P为新增采购，I为真实供应商已含接收，ERin为外部退回收进，S为gross对外发运，EOout为对外退还，W为实际整湿废物出口。内部复用配对在合并时抵消，不是ERin、EOout或采购。供应商已含包装具有一个完整上游所有者，不再购买一次。 J_in/J_out为独立实证且互不重叠的额外非水转移，例如真实留存修理料、粉尘或油，仅限尚未包含于其他整gross腿的部分。H2O_in/H2O_out为实际吸湿/加水/蒸发或其他未包含于整湿腿的水转移。期末C保留全部真实增量，即使没有修理。X_in/X_out仅扣OTHER同侧流观测间已证重叠，不扣真实J/H2O、C、反向流、未知闭合差或卡片存在。未知项不拟合。真实增量追到物理来源/接收方及具体原子接口；配对内部J/水不是新增provider或废物出口。gross湿腿内含的水/物料只计一次。 |  |
| v_species | all inventory rows | 核对完整湿态质量或互斥穷尽组成桥、相关元素、独立真实物种与水状态；一个残差不能解多个未知。确认每个选定流为原子流，且产品/废物/基本流type及真实介质兼容。 | epa-polyester-fabrication |

### 完整适用、原生与方法背景

本方法适用于供后续车削/钻孔制扣的完整实体、不发泡、无增强、无颜料不饱和聚酯纽扣坯。仅选择一条有据路线：供货液态树脂体系 → 离心浇片 → 冲坯 → 实际硬化/固化/调节 → 坯料首次质量放行。坯料是此前景的完整交易部件，不是完整缝纫纽扣。公开来源提供互补产品及工艺事实；技术综合不声称同一SKU、订单或工厂。验收限值、配料及全部数量来自实际生产者/买方记录。

全部限定须进入数据集元数据、完整参考/流描述或可追溯过程说明。宽泛原生已制造零件产品族仅限上述完整固化坯，并保留原始质量/kg基准。

整份实际液态树脂到货及浇注领用；购入树脂的合成保留在其上游数据集。 原生产品身份为作为原材料供应的不饱和聚酯树脂，工厂生产混合，全球；未规定纽扣级配方、反应稀释剂比例、固化状态或供方性能。选择实际液态制扣浇注用不饱和聚酯供货配方，由一个上游所有者整份记录一次。内含苯乙烯、阻聚剂、载体或已含促进剂只作组成分账，不另作采购。不得用热塑性PET、固化废料或醇酸树脂替代，也不得假定配方等效。 实际原生单位毛实物流V_r与归属负荷A_r及完整继承交换向量独立记录。原始采集不除基准；report_once唯一执行实际归属A_r经唯一report_once除D_r；完整实物V_r另保留，不重复provider。。实物卡的N_r为完整V_r，不能是分配缩小量或库存净差；公用工程/服务卡采用归属A_r。 本卡建模分子N_r为真实兼容provider/服务归属A_r；独立完整收支实物V_r不产生第二采购或处理。

仅在实际加入时记录整份供货MEKP固化制剂；过氧化物含量及稳定剂/载体不是独立采购。不编造MEKP用量或活性浓度。仅用于现场实际独立购入；另一供货配方已含的同一组成不能再次采购。保留整份配方、含量/载体分账、实际领退、未使用非WIP库存及供方。其他实际化学物/制剂须另建原子卡。 实际原生单位毛实物流V_r与归属负荷A_r及完整继承交换向量独立记录。原始采集不除基准；report_once唯一执行实际归属A_r经唯一report_once除D_r；完整实物V_r另保留，不重复provider。。实物卡的N_r为完整V_r，不能是分配缩小量或库存净差；公用工程/服务卡采用归属A_r。 本卡建模分子N_r为真实兼容provider/服务归属A_r；独立完整收支实物V_r不产生第二采购或处理。

有条件记录实际辛酸钴制剂；供方须确认本化合物和整份溶液。制造商单写钴不能证明金属钴、草酸钴、醋酸钴或溶液浓度。仅用于现场实际独立购入；另一供货配方已含的同一组成不能再次采购。保留整份配方、含量/载体分账、实际领退、未使用非WIP库存及供方。其他实际化学物/制剂须另建原子卡。 实际原生单位毛实物流V_r与归属负荷A_r及完整继承交换向量独立记录。原始采集不除基准；report_once唯一执行实际归属A_r经唯一report_once除D_r；完整实物V_r另保留，不重复provider。。实物卡的N_r为完整V_r，不能是分配缩小量或库存净差；公用工程/服务卡采用归属A_r。 本卡建模分子N_r为真实兼容provider/服务归属A_r；独立完整收支实物V_r不产生第二采购或处理。

仅记录实际另加的反应稀释剂CAS100-42-5；不能重复计算液态UPR已有的苯乙烯。采购须使用产品身份，不能借用基本排放流UUID。仅用于现场实际独立购入；另一供货配方已含的同一组成不能再次采购。保留整份配方、含量/载体分账、实际领退、未使用非WIP库存及供方。其他实际化学物/制剂须另建原子卡。 实际原生单位毛实物流V_r与归属负荷A_r及完整继承交换向量独立记录。原始采集不除基准；report_once唯一执行实际归属A_r经唯一report_once除D_r；完整实物V_r另保留，不重复provider。。实物卡的N_r为完整V_r，不能是分配缩小量或库存净差；公用工程/服务卡采用归属A_r。 本卡建模分子N_r为真实兼容provider/服务归属A_r；独立完整收支实物V_r不产生第二采购或处理。

若确实存在，记录实际独立供应的石蜡CAS8002-74-2及声明的脱模/配方用途。不假定废塑料再生路线；复配脱模制剂须改用其真实完整身份。仅用于现场实际独立购入；另一供货配方已含的同一组成不能再次采购。保留整份配方、含量/载体分账、实际领退、未使用非WIP库存及供方。其他实际化学物/制剂须另建原子卡。 实际原生单位毛实物流V_r与归属负荷A_r及完整继承交换向量独立记录。原始采集不除基准；report_once唯一执行实际归属A_r经唯一report_once除D_r；完整实物V_r另保留，不重复provider。。实物卡的N_r为完整V_r，不能是分配缩小量或库存净差；公用工程/服务卡采用归属A_r。 本卡建模分子N_r为真实兼容provider/服务归属A_r；独立完整收支实物V_r不产生第二采购或处理。

有条件记录实际用于鼓筒/工具清理的丙酮CAS67-64-1。真实供货不符时不得采用晶圆专用丙酮或固定摩尔浓度溶液。收集废溶剂与空气损失分别记录去向。仅用于现场实际独立购入；另一供货配方已含的同一组成不能再次采购。保留整份配方、含量/载体分账、实际领退、未使用非WIP库存及供方。其他实际化学物/制剂须另建原子卡。 实际原生单位毛实物流V_r与归属负荷A_r及完整继承交换向量独立记录。原始采集不除基准；report_once唯一执行实际归属A_r经唯一report_once除D_r；完整实物V_r另保留，不重复provider。。实物卡的N_r为完整V_r，不能是分配缩小量或库存净差；公用工程/服务卡采用归属A_r。 本卡建模分子N_r为真实兼容provider/服务归属A_r；独立完整收支实物V_r不产生第二采购或处理。

仅记录实际跨界供水，并独立确定水质、水源、状态与测量量。本路线不强制水浴、盐浴、蒸汽、锅炉或去离子化；真实存在时须逐项增加盐、能耗与返回流。仅用于现场实际独立购入；另一供货配方已含的同一组成不能再次采购。保留整份配方、含量/载体分账、实际领退、未使用非WIP库存及供方。其他实际化学物/制剂须另建原子卡。 实际原生单位毛实物流V_r与归属负荷A_r及完整继承交换向量独立记录。原始采集不除基准；report_once唯一执行实际归属A_r经唯一report_once除D_r；完整实物V_r另保留，不重复provider。。实物卡的N_r为完整V_r，不能是分配缩小量或库存净差；公用工程/服务卡采用归属A_r。 本卡建模分子N_r为真实兼容provider/服务归属A_r；独立完整收支实物V_r不产生第二采购或处理。

纳入实际混料、鼓筒驱动、取片、冲坯、实际固化/调节、通风、检测、失败、待机/启停、清理和返工。电加热仅在实测存在时纳入，不假定烘箱周期。 原生产品身份为中国、低于1千伏、送达用户的电网平均消费组合；不是单一水电发电或高压供电。仅对实际符合的供电采用该UUID。其他国家、电压、发电合同或现场电源须使用自身已核实的身份与供方。原生净热值属性使用以MJ为参考的能量单位组；实测kWh在归属前乘3.6转换，不能把能量当作kg。 实际原生单位毛实物流V_r与归属负荷A_r及完整继承交换向量独立记录。原始采集不除基准；report_once唯一执行N_r / D_r。实物卡的N_r为完整V_r，不能是分配缩小量或库存净差；公用工程/服务卡采用归属A_r。 首次必要包装及设备保管属于真实制造支持，provider/电量归新增Q；后续原FG服务归原Qc和实际H。同一电表、设备或包装历史的两个阶段按实际事件互斥分配，不能采购/计量两次，也不因机器过程ID仍名post_release而移出首次验收前的真实制造负荷。

Q是声明批次新制完整坯料唯一首次放行的净质量。同批期末合格FG已含于Q，不能再次增加。放行须有实际买方图样/规格、稳定固化可加工状态、尺寸、完整性和验收证据；不编造硬度、质量、寿命或未来成品纽扣性能。 原生身份为工厂生产混合中的已制造完整零件；其产品族明确包括纽扣坯。本卡仅选择完整、实体、不发泡、无增强、无颜料、已固化的不饱和聚酯浇片冲切坯；没有缝纫孔及最终制扣精加工。它不是树脂、整片板材、模塑机器、混合件集合、完整纽扣或拉链。原生产品族未固定树脂牌号、尺寸、地理或单件质量；必须由实际供货与验收记录确定这些限定。原生参考属性为质量而非件数。 实际原生单位毛实物流V_r与归属负荷A_r及完整继承交换向量独立记录。原始采集不除基准；report_once唯一执行N_r / D_r。实物卡的N_r为完整V_r，不能是分配缩小量或库存净差；公用工程/服务卡采用归属A_r。

仅用于真实对外退回同一供货身份、未改变且可用的未反应UPR。记录完整实物出口，不作负采购、抵扣、固化废物、WIP或Q。保留原批次及继承向量；其他退回未改变材料须另列卡。 原生产品身份为作为原材料供应的不饱和聚酯树脂，工厂生产混合，全球；未规定纽扣级配方、反应稀释剂比例、固化状态或供方性能。选择实际液态制扣浇注用不饱和聚酯供货配方，由一个上游所有者整份记录一次。内含苯乙烯、阻聚剂、载体或已含促进剂只作组成分账，不另作采购。不得用热塑性PET、固化废料或醇酸树脂替代，也不得假定配方等效。 实际原生单位毛实物流V_r与归属负荷A_r及完整继承交换向量独立记录。原始采集不除基准；report_once唯一执行N_r / D_r。实物卡的N_r为完整V_r，不能是分配缩小量或库存净差；公用工程/服务卡采用归属A_r。

单一实际分流的固化固体出口，测量完整湿态质量及污染/物质分账。交联树脂不能假定热塑性熔融回用。出售仍保留真实废物状态，不自动转移负荷或抵扣。 实际原生单位毛实物流V_r与归属负荷A_r及完整继承交换向量独立记录。原始采集不除基准；report_once唯一执行N_r / D_r。实物卡的N_r为完整V_r，不能是分配缩小量或库存净差；公用工程/服务卡采用归属A_r。 实际固化边角料、未固化混合物、废丙酮、含水废物、污染擦布/过滤件、废内衬/纸箱或退役工具/设备的一次整件接收事件保留完整湿Qt，基材加全部留存树脂/溶剂/残留/水仅一次。嵌套来源/物种/检验质量不是额外出口，除非真实分离。实际receiver/provider按其兼容单位一次接收全部实物Qt。另保留实际建模服务总需求及各受服务原Qc或真实新增Q的非重叠A_e,c。不按归属份额缩Qt，不另加留存溶剂/水，不向各队列重新计全部Qt，也不推再生抵扣。A未知保持未解，完整实物事件/历史保留。

实际未反应/部分反应的料罐、鼓筒及失败批次混合物，作为一个按接收方测量的废物记录。同一混合物的来源组成分账不加和；同一实物出口不能再重复作固化废料或废溶剂。 实际原生单位毛实物流V_r与归属负荷A_r及完整继承交换向量独立记录。原始采集不除基准；report_once唯一执行N_r / D_r。实物卡的N_r为完整V_r，不能是分配缩小量或库存净差；公用工程/服务卡采用归属A_r。 实际固化边角料、未固化混合物、废丙酮、含水废物、污染擦布/过滤件、废内衬/纸箱或退役工具/设备的一次整件接收事件保留完整湿Qt，基材加全部留存树脂/溶剂/残留/水仅一次。嵌套来源/物种/检验质量不是额外出口，除非真实分离。实际receiver/provider按其兼容单位一次接收全部实物Qt。另保留实际建模服务总需求及各受服务原Qc或真实新增Q的非重叠A_e,c。不按归属份额缩Qt，不另加留存溶剂/水，不向各队列重新计全部Qt，也不推再生抵扣。A未知保持未解，完整实物事件/历史保留。

有条件记录单一实际收集的富丙酮废制剂，包含完整载体/树脂，分离容器皮重并确认真实回收/处理接收方。内部溶剂回收抵消配对转移，不自动抵扣原生溶剂。 实际原生单位毛实物流V_r与归属负荷A_r及完整继承交换向量独立记录。原始采集不除基准；report_once唯一执行N_r / D_r。实物卡的N_r为完整V_r，不能是分配缩小量或库存净差；公用工程/服务卡采用归属A_r。 实际固化边角料、未固化混合物、废丙酮、含水废物、污染擦布/过滤件、废内衬/纸箱或退役工具/设备的一次整件接收事件保留完整湿Qt，基材加全部留存树脂/溶剂/残留/水仅一次。嵌套来源/物种/检验质量不是额外出口，除非真实分离。实际receiver/provider按其兼容单位一次接收全部实物Qt。另保留实际建模服务总需求及各受服务原Qc或真实新增Q的非重叠A_e,c。不按归属份额缩Qt，不另加留存溶剂/水，不向各队列重新计全部Qt，也不推再生抵扣。A未知保持未解，完整实物事件/历史保留。

有条件记录实际单独收集的含水废液及液固组成、温度和接收方；不是纯水或基本排放。现场处理时增加真实处理交换和经鉴定的分子排放；COD是水质指标而非化学物质量。 实际原生单位毛实物流V_r与归属负荷A_r及完整继承交换向量独立记录。原始采集不除基准；report_once唯一执行N_r / D_r。实物卡的N_r为完整V_r，不能是分配缩小量或库存净差；公用工程/服务卡采用归属A_r。 实际固化边角料、未固化混合物、废丙酮、含水废物、污染擦布/过滤件、废内衬/纸箱或退役工具/设备的一次整件接收事件保留完整湿Qt，基材加全部留存树脂/溶剂/残留/水仅一次。嵌套来源/物种/检验质量不是额外出口，除非真实分离。实际receiver/provider按其兼容单位一次接收全部实物Qt。另保留实际建模服务总需求及各受服务原Qc或真实新增Q的非重叠A_e,c。不按归属份额缩Qt，不另加留存溶剂/水，不向各队列重新计全部Qt，也不推再生抵扣。A未知保持未解，完整实物事件/历史保留。

测量混料/浇注/固化/清理时实际逸出的单体，并独立核对留存、回收和废弃单体。不能把全部树脂失重当作苯乙烯；不得把复材铺层因子移用于纽扣浇注。 原生基本流为苯乙烯CAS100-42-5，排放至未细分空气，质量/kg。长同义词表包含聚合物/商品名噪声；这不允许用聚苯乙烯颗粒或α-甲基苯乙烯替代。仅用于独立鉴定的单体实际跨越外部空气门；室内暴露不是额外外排。已知城市、高架或其他介质分区时，须选匹配原生流。不得把总VOC当作苯乙烯，也不移用AP-42因子。 实际原生单位毛实物流V_r与归属负荷A_r及完整继承交换向量独立记录。原始采集不除基准；report_once唯一执行N_r / D_r。实物卡的N_r为完整V_r，不能是分配缩小量或库存净差；公用工程/服务卡采用归属A_r。 对实际外部苯乙烯、丙酮和分子H2O蒸气，EPA Method320及所含FTIR Protocol提供独立抽取式气相程序：真实目标/参考光谱或Protocol4.6制备、含水等光谱/干扰选择、合适光路/T/P条件、不冷凝的加热惰性输送、漏检/线性/背景/CTS检查、完整原始光谱及残差分析、独立同基准气量/流量与浓度积分，以及分析物特定输送/基质验证。遵守不同的例行QA加标和第13节验证/Method301偏差精密度程序，普通加标不替代初次验证，其结果不是自动校正因子。不声称现场实际验证或全部蒸气/基质覆盖。程序确实存在，未执行现场/参考/QA工作属于研究要求；实际不适用或未建立的必要程序仍具体hold。不把交联聚合物粒子或液体冷凝物当气相单体测量。 Method18是相反范围证据，不是无条件苯乙烯方法：第1.2.2节排除高分子聚合物、可能在分析前聚合的化合物及极低蒸气压化合物，仅有GC检测器程序不能闭合可聚合样品的保全。Method4独立区分准确参考水分测定和设备设定近似估计，并提示饱和/液滴正偏差，含有机物冷凝液不能自动算纯水。FTIR定量水要求真实Protocol4.6定量参考，不能仅用水干扰光谱。总VOC、暴露浓度、COD及总PM不是苯乙烯/丙酮/聚酯物种质量。真实聚合物特定颗粒主张须有已建立的识别/回收/基质程序，缺失时将受影响真实主张保持hold，不把全部收集PM贴为UPR。这些方法文件均不提供已测纽扣坯生产结果。

有条件记录实际外部清洗溶剂损失，与收集废液区分。 原生基本流为丙酮CAS67-64-1，排放至未细分空气，质量/kg。仅记录独立测量并逸出外部空气边界的实际溶剂物种；外购丙酮、收集的废溶剂和室内转移属于不同物理状态。已有明确分区时选用匹配介质；总VOC/COD及清洗配方损失不等于丙酮质量。 实际原生单位毛实物流V_r与归属负荷A_r及完整继承交换向量独立记录。原始采集不除基准；report_once唯一执行N_r / D_r。实物卡的N_r为完整V_r，不能是分配缩小量或库存净差；公用工程/服务卡采用归属A_r。 对实际外部苯乙烯、丙酮和分子H2O蒸气，EPA Method320及所含FTIR Protocol提供独立抽取式气相程序：真实目标/参考光谱或Protocol4.6制备、含水等光谱/干扰选择、合适光路/T/P条件、不冷凝的加热惰性输送、漏检/线性/背景/CTS检查、完整原始光谱及残差分析、独立同基准气量/流量与浓度积分，以及分析物特定输送/基质验证。遵守不同的例行QA加标和第13节验证/Method301偏差精密度程序，普通加标不替代初次验证，其结果不是自动校正因子。不声称现场实际验证或全部蒸气/基质覆盖。程序确实存在，未执行现场/参考/QA工作属于研究要求；实际不适用或未建立的必要程序仍具体hold。不把交联聚合物粒子或液体冷凝物当气相单体测量。 Method18是相反范围证据，不是无条件苯乙烯方法：第1.2.2节排除高分子聚合物、可能在分析前聚合的化合物及极低蒸气压化合物，仅有GC检测器程序不能闭合可聚合样品的保全。Method4独立区分准确参考水分测定和设备设定近似估计，并提示饱和/液滴正偏差，含有机物冷凝液不能自动算纯水。FTIR定量水要求真实Protocol4.6定量参考，不能仅用水干扰光谱。总VOC、暴露浓度、COD及总PM不是苯乙烯/丙酮/聚酯物种质量。真实聚合物特定颗粒主张须有已建立的识别/回收/基质程序，缺失时将受影响真实主张保持hold，不把全部收集PM贴为UPR。这些方法文件均不提供已测纽扣坯生产结果。

仅有条件记录实际水蒸发。购入UPR交联不等于上游聚酯缩聚，不设反应水系数。用独立证据区分携带游离水、相态水及化学生成水。 原生基本流为分子水蒸气CAS7732-18-5，排放至未细分空气，质量/kg。按实际相态、湿度和观察状态测量外部蒸发；它不是外购蒸汽、液态废水或假定聚合反应水。已知外部介质分区时须采用对应身份。不得把水密度用于其他气体，也不得拟合蒸发残差来掩盖未知溶剂损失。 同义词噪声不授权采用同位素富集水、冰或化学结合水身份。 实际原生单位毛实物流V_r与归属负荷A_r及完整继承交换向量独立记录。原始采集不除基准；report_once唯一执行N_r / D_r。实物卡的N_r为完整V_r，不能是分配缩小量或库存净差；公用工程/服务卡采用归属A_r。 对实际外部苯乙烯、丙酮和分子H2O蒸气，EPA Method320及所含FTIR Protocol提供独立抽取式气相程序：真实目标/参考光谱或Protocol4.6制备、含水等光谱/干扰选择、合适光路/T/P条件、不冷凝的加热惰性输送、漏检/线性/背景/CTS检查、完整原始光谱及残差分析、独立同基准气量/流量与浓度积分，以及分析物特定输送/基质验证。遵守不同的例行QA加标和第13节验证/Method301偏差精密度程序，普通加标不替代初次验证，其结果不是自动校正因子。不声称现场实际验证或全部蒸气/基质覆盖。程序确实存在，未执行现场/参考/QA工作属于研究要求；实际不适用或未建立的必要程序仍具体hold。不把交联聚合物粒子或液体冷凝物当气相单体测量。 Method18是相反范围证据，不是无条件苯乙烯方法：第1.2.2节排除高分子聚合物、可能在分析前聚合的化合物及极低蒸气压化合物，仅有GC检测器程序不能闭合可聚合样品的保全。Method4独立区分准确参考水分测定和设备设定近似估计，并提示饱和/液滴正偏差，含有机物冷凝液不能自动算纯水。FTIR定量水要求真实Protocol4.6定量参考，不能仅用水干扰光谱。总VOC、暴露浓度、COD及总PM不是苯乙烯/丙酮/聚酯物种质量。真实聚合物特定颗粒主张须有已建立的识别/回收/基质程序，缺失时将受影响真实主张保持hold，不把全部收集PM贴为UPR。这些方法文件均不提供已测纽扣坯生产结果。

有条件记录搬运/冲坯实际测得的聚合物颗粒；独立确定粒径、组成及外部介质。捕集滤尘是废物，不能再次作逸出颗粒。不把通用PM指标替代成聚合物质量。 实际原生单位毛实物流V_r与归属负荷A_r及完整继承交换向量独立记录。原始采集不除基准；report_once唯一执行N_r / D_r。实物卡的N_r为完整V_r，不能是分配缩小量或库存净差；公用工程/服务卡采用归属A_r。 对实际外部苯乙烯、丙酮和分子H2O蒸气，EPA Method320及所含FTIR Protocol提供独立抽取式气相程序：真实目标/参考光谱或Protocol4.6制备、含水等光谱/干扰选择、合适光路/T/P条件、不冷凝的加热惰性输送、漏检/线性/背景/CTS检查、完整原始光谱及残差分析、独立同基准气量/流量与浓度积分，以及分析物特定输送/基质验证。遵守不同的例行QA加标和第13节验证/Method301偏差精密度程序，普通加标不替代初次验证，其结果不是自动校正因子。不声称现场实际验证或全部蒸气/基质覆盖。程序确实存在，未执行现场/参考/QA工作属于研究要求；实际不适用或未建立的必要程序仍具体hold。不把交联聚合物粒子或液体冷凝物当气相单体测量。 Method18是相反范围证据，不是无条件苯乙烯方法：第1.2.2节排除高分子聚合物、可能在分析前聚合的化合物及极低蒸气压化合物，仅有GC检测器程序不能闭合可聚合样品的保全。Method4独立区分准确参考水分测定和设备设定近似估计，并提示饱和/液滴正偏差，含有机物冷凝液不能自动算纯水。FTIR定量水要求真实Protocol4.6定量参考，不能仅用水干扰光谱。总VOC、暴露浓度、COD及总PM不是苯乙烯/丙酮/聚酯物种质量。真实聚合物特定颗粒主张须有已建立的识别/回收/基质程序，缺失时将受影响真实主张保持hold，不把全部收集PM贴为UPR。这些方法文件均不提供已测纽扣坯生产结果。

实际接收此前已首次放行的坯料实物，带原Qc及继承负荷向量。合并门抵消制造至FG的配对转移；接收或复验不产生Q。 原生身份为工厂生产混合中的已制造完整零件；其产品族明确包括纽扣坯。本卡仅选择完整、实体、不发泡、无增强、无颜料、已固化的不饱和聚酯浇片冲切坯；没有缝纫孔及最终制扣精加工。它不是树脂、整片板材、模塑机器、混合件集合、完整纽扣或拉链。原生产品族未固定树脂牌号、尺寸、地理或单件质量；必须由实际供货与验收记录确定这些限定。原生参考属性为质量而非件数。 实际原生单位毛实物流V_r与归属负荷A_r及完整继承交换向量独立记录。原始采集不除基准；report_once唯一执行N_r / D_r。实物卡的N_r为完整V_r，不能是分配缩小量或库存净差；公用工程/服务卡采用归属A_r。

真实从外部退回的此前已放行完整坯，保留原批次、首次Qc、原交付/退回历史及继承向量。这是与内部接收分开的完整毛实物输入。复验不产生Q；如确实执行增量返工，其负荷及失败仍归原批次。 原生身份为工厂生产混合中的已制造完整零件；其产品族明确包括纽扣坯。本卡仅选择完整、实体、不发泡、无增强、无颜料、已固化的不饱和聚酯浇片冲切坯；没有缝纫孔及最终制扣精加工。它不是树脂、整片板材、模塑机器、混合件集合、完整纽扣或拉链。原生产品族未固定树脂牌号、尺寸、地理或单件质量；必须由实际供货与验收记录确定这些限定。原生参考属性为质量而非件数。 实际原生单位毛实物流V_r与归属负荷A_r及完整继承交换向量独立记录。原始采集不除基准；report_once唯一执行N_r / D_r。实物卡的N_r为完整V_r，不能是分配缩小量或库存净差；公用工程/服务卡采用归属A_r。

实际完整外购包装实物进入空包装/附着/可复用包装池；不设每坯固定用量或假定复用寿命。 具体真实瓦楞纸箱保持未绑定。历史未指定包装Product没有实物总备注，并混列纸箱/内袋/缠绕膜同义词，不足正面定义此具体纸箱的材料/制品。完整旧采用保留为反证，不是当前纸箱UUID或穷尽无匹配声明。整只供货纸箱及已含胶粘剂/印刷记录一次，不重新采购其组成。纸箱等级、含水、组成和供方仍须独立记录；薄膜、胶带、托盘与废物是不同交换。 实际原生单位毛实物流V_r与归属负荷A_r及完整继承交换向量独立记录。原始采集不除基准；report_once唯一执行N_r / D_r。实物卡的N_r为完整V_r，不能是分配缩小量或库存净差；公用工程/服务卡采用归属A_r。 每个实际聚乙烯膜内衬或瓦楞纸箱整湿池以kg核对O + P + I + ERin + J_in + H2O_in - X_in = C + S + EOout + W + J_out + H2O_out - X_out。O/C包含空包、附着WIP、附着FG、退回及复用实物库存；P为新增采购，I为真实供应商已含接收，ERin为外部退回收进，S为gross对外发运，EOout为对外退还，W为实际整湿废物出口。内部复用配对在合并时抵消，不是ERin、EOout或采购。供应商已含包装具有一个完整上游所有者，不再购买一次。 J_in/J_out为独立实证且互不重叠的额外非水转移，例如真实留存修理料、粉尘或油，仅限尚未包含于其他整gross腿的部分。H2O_in/H2O_out为实际吸湿/加水/蒸发或其他未包含于整湿腿的水转移。期末C保留全部真实增量，即使没有修理。X_in/X_out仅扣OTHER同侧流观测间已证重叠，不扣真实J/H2O、C、反向流、未知闭合差或卡片存在。未知项不拟合。真实增量追到物理来源/接收方及具体原子接口；配对内部J/水不是新增provider或废物出口。gross湿腿内含的水/物料只计一次。

ER为实际从外部退回并接收的包装，不是新购或内部复用。保留历史、原负荷与物理状态。 具体真实瓦楞纸箱保持未绑定。历史未指定包装Product没有实物总备注，并混列纸箱/内袋/缠绕膜同义词，不足正面定义此具体纸箱的材料/制品。完整旧采用保留为反证，不是当前纸箱UUID或穷尽无匹配声明。整只供货纸箱及已含胶粘剂/印刷记录一次，不重新采购其组成。纸箱等级、含水、组成和供方仍须独立记录；薄膜、胶带、托盘与废物是不同交换。 实际原生单位毛实物流V_r与归属负荷A_r及完整继承交换向量独立记录。原始采集不除基准；report_once唯一执行N_r / D_r。实物卡的N_r为完整V_r，不能是分配缩小量或库存净差；公用工程/服务卡采用归属A_r。 每个实际聚乙烯膜内衬或瓦楞纸箱整湿池以kg核对O + P + I + ERin + J_in + H2O_in - X_in = C + S + EOout + W + J_out + H2O_out - X_out。O/C包含空包、附着WIP、附着FG、退回及复用实物库存；P为新增采购，I为真实供应商已含接收，ERin为外部退回收进，S为gross对外发运，EOout为对外退还，W为实际整湿废物出口。内部复用配对在合并时抵消，不是ERin、EOout或采购。供应商已含包装具有一个完整上游所有者，不再购买一次。 J_in/J_out为独立实证且互不重叠的额外非水转移，例如真实留存修理料、粉尘或油，仅限尚未包含于其他整gross腿的部分。H2O_in/H2O_out为实际吸湿/加水/蒸发或其他未包含于整湿腿的水转移。期末C保留全部真实增量，即使没有修理。X_in/X_out仅扣OTHER同侧流观测间已证重叠，不扣真实J/H2O、C、反向流、未知闭合差或卡片存在。未知项不拟合。真实增量追到物理来源/接收方及具体原子接口；配对内部J/水不是新增provider或废物出口。gross湿腿内含的水/物料只计一次。

实际完整外购包装实物进入空包装/附着/可复用包装池；不设每坯固定用量或假定复用寿命。 原生产品为聚乙烯薄膜，CAS9002-88-4，工厂生产混合，质量/kg；同义词包括聚膜及聚乙烯片膜。备注描述聚乙烯包装膜并区分竞争材料PET；PET不属于本身份。保留的行李/皮革分类是孤立分类瑕疵，不是另一聚合物或路线的证据。仅用于实际PE内衬膜，并记录牌号、厚度、制袋转换和供方；外购已制成袋须包含实际转换负荷，不能默变成原膜。不得用PET、复合袋或未定塑料替代。 实际原生单位毛实物流V_r与归属负荷A_r及完整继承交换向量独立记录。原始采集不除基准；report_once唯一执行N_r / D_r。实物卡的N_r为完整V_r，不能是分配缩小量或库存净差；公用工程/服务卡采用归属A_r。 每个实际聚乙烯膜内衬或瓦楞纸箱整湿池以kg核对O + P + I + ERin + J_in + H2O_in - X_in = C + S + EOout + W + J_out + H2O_out - X_out。O/C包含空包、附着WIP、附着FG、退回及复用实物库存；P为新增采购，I为真实供应商已含接收，ERin为外部退回收进，S为gross对外发运，EOout为对外退还，W为实际整湿废物出口。内部复用配对在合并时抵消，不是ERin、EOout或采购。供应商已含包装具有一个完整上游所有者，不再购买一次。 J_in/J_out为独立实证且互不重叠的额外非水转移，例如真实留存修理料、粉尘或油，仅限尚未包含于其他整gross腿的部分。H2O_in/H2O_out为实际吸湿/加水/蒸发或其他未包含于整湿腿的水转移。期末C保留全部真实增量，即使没有修理。X_in/X_out仅扣OTHER同侧流观测间已证重叠，不扣真实J/H2O、C、反向流、未知闭合差或卡片存在。未知项不拟合。真实增量追到物理来源/接收方及具体原子接口；配对内部J/水不是新增provider或废物出口。gross湿腿内含的水/物料只计一次。

ER为实际从外部退回并接收的包装，不是新购或内部复用。保留历史、原负荷与物理状态。 原生产品为聚乙烯薄膜，CAS9002-88-4，工厂生产混合，质量/kg；同义词包括聚膜及聚乙烯片膜。备注描述聚乙烯包装膜并区分竞争材料PET；PET不属于本身份。保留的行李/皮革分类是孤立分类瑕疵，不是另一聚合物或路线的证据。仅用于实际PE内衬膜，并记录牌号、厚度、制袋转换和供方；外购已制成袋须包含实际转换负荷，不能默变成原膜。不得用PET、复合袋或未定塑料替代。 实际原生单位毛实物流V_r与归属负荷A_r及完整继承交换向量独立记录。原始采集不除基准；report_once唯一执行N_r / D_r。实物卡的N_r为完整V_r，不能是分配缩小量或库存净差；公用工程/服务卡采用归属A_r。 每个实际聚乙烯膜内衬或瓦楞纸箱整湿池以kg核对O + P + I + ERin + J_in + H2O_in - X_in = C + S + EOout + W + J_out + H2O_out - X_out。O/C包含空包、附着WIP、附着FG、退回及复用实物库存；P为新增采购，I为真实供应商已含接收，ERin为外部退回收进，S为gross对外发运，EOout为对外退还，W为实际整湿废物出口。内部复用配对在合并时抵消，不是ERin、EOout或采购。供应商已含包装具有一个完整上游所有者，不再购买一次。 J_in/J_out为独立实证且互不重叠的额外非水转移，例如真实留存修理料、粉尘或油，仅限尚未包含于其他整gross腿的部分。H2O_in/H2O_out为实际吸湿/加水/蒸发或其他未包含于整湿腿的水转移。期末C保留全部真实增量，即使没有修理。X_in/X_out仅扣OTHER同侧流观测间已证重叠，不扣真实J/H2O、C、反向流、未知闭合差或卡片存在。未知项不拟合。真实增量追到物理来源/接收方及具体原子接口；配对内部J/水不是新增provider或废物出口。gross湿腿内含的水/物料只计一次。

保留已对滞留FG和已发货FG执行的服务，归于原放行批次Qc和观察区间H。H记录服务时长/覆盖范围，不能作产品结果除数。未观察的未来服务保持未知。不能因尚未发货而扣除已执行的滞留库存服务。 原生产品身份为中国、低于1千伏、送达用户的电网平均消费组合；不是单一水电发电或高压供电。仅对实际符合的供电采用该UUID。其他国家、电压、发电合同或现场电源须使用自身已核实的身份与供方。原生净热值属性使用以MJ为参考的能量单位组；实测kWh在归属前乘3.6转换，不能把能量当作kg。 实际原生单位毛实物流V_r与归属负荷A_r及完整继承交换向量独立记录。原始采集不除基准；report_once唯一执行N_r / D_r。实物卡的N_r为完整V_r，不能是分配缩小量或库存净差；公用工程/服务卡采用归属A_r。 首次必要包装及设备保管属于真实制造支持，provider/电量归新增Q；后续原FG服务归原Qc和实际H。同一电表、设备或包装历史的两个阶段按实际事件互斥分配，不能采购/计量两次，也不因机器过程ID仍名post_release而移出首次验收前的真实制造负荷。

一份真实供应商已含实物包装接收I，不重新采购。每个实际聚乙烯膜内衬或瓦楞纸箱整湿池以kg核对O + P + I + ERin + J_in + H2O_in - X_in = C + S + EOout + W + J_out + H2O_out - X_out。O/C包含空包、附着WIP、附着FG、退回及复用实物库存；P为新增采购，I为真实供应商已含接收，ERin为外部退回收进，S为gross对外发运，EOout为对外退还，W为实际整湿废物出口。内部复用配对在合并时抵消，不是ERin、EOout或采购。供应商已含包装具有一个完整上游所有者，不再购买一次。 J_in/J_out为独立实证且互不重叠的额外非水转移，例如真实留存修理料、粉尘或油，仅限尚未包含于其他整gross腿的部分。H2O_in/H2O_out为实际吸湿/加水/蒸发或其他未包含于整湿腿的水转移。期末C保留全部真实增量，即使没有修理。X_in/X_out仅扣OTHER同侧流观测间已证重叠，不扣真实J/H2O、C、反向流、未知闭合差或卡片存在。未知项不拟合。真实增量追到物理来源/接收方及具体原子接口；配对内部J/水不是新增provider或废物出口。gross湿腿内含的水/物料只计一次。 本卡仅披露完整真实实物V_r作为N_r；实际provider/服务A_r另归属，不因该物理腿另建provider。

一份真实整包装provider/服务A，含真实完整制造/转化和兼容供货状态，不是另一个实物接收。每个实际聚乙烯膜内衬或瓦楞纸箱整湿池以kg核对O + P + I + ERin + J_in + H2O_in - X_in = C + S + EOout + W + J_out + H2O_out - X_out。O/C包含空包、附着WIP、附着FG、退回及复用实物库存；P为新增采购，I为真实供应商已含接收，ERin为外部退回收进，S为gross对外发运，EOout为对外退还，W为实际整湿废物出口。内部复用配对在合并时抵消，不是ERin、EOout或采购。供应商已含包装具有一个完整上游所有者，不再购买一次。 J_in/J_out为独立实证且互不重叠的额外非水转移，例如真实留存修理料、粉尘或油，仅限尚未包含于其他整gross腿的部分。H2O_in/H2O_out为实际吸湿/加水/蒸发或其他未包含于整湿腿的水转移。期末C保留全部真实增量，即使没有修理。X_in/X_out仅扣OTHER同侧流观测间已证重叠，不扣真实J/H2O、C、反向流、未知闭合差或卡片存在。未知项不拟合。真实增量追到物理来源/接收方及具体原子接口；配对内部J/水不是新增provider或废物出口。gross湿腿内含的水/物料只计一次。 本卡建模分子N_r为真实兼容provider/服务归属A_r；独立完整收支实物V_r不产生第二采购或处理。

仅限此完整真实配置资产实际in事件，不规定质量、配方、寿命或技术能力。各实际离心浇铸鼓、冲床、切模及调理架有一份真实配置实物台群，包含完整收进、退回/退役、湿库存、实际设备内流体、磨损和修理。整设备provider与展开制造/维护互斥。实物V/M独立于兼容provider/服务A及真实服务覆盖/历史。Mass/kg设备产品provider须完整配置实测M及provider真实覆盖历史支持的分配/服务份额，不猜寿命/能力，不把观察H当总寿命。小时服务provider保留其单位及真实记录换算桥，不直接替成kg。分母未知保留真实已执行服务、失败及库存，不编A。 本卡仅披露完整真实实物V_r作为N_r；实际provider/服务A_r另归属，不因该物理腿另建provider。

仅限此完整真实配置资产实际burden事件，不规定质量、配方、寿命或技术能力。各实际离心浇铸鼓、冲床、切模及调理架有一份真实配置实物台群，包含完整收进、退回/退役、湿库存、实际设备内流体、磨损和修理。整设备provider与展开制造/维护互斥。实物V/M独立于兼容provider/服务A及真实服务覆盖/历史。Mass/kg设备产品provider须完整配置实测M及provider真实覆盖历史支持的分配/服务份额，不猜寿命/能力，不把观察H当总寿命。小时服务provider保留其单位及真实记录换算桥，不直接替成kg。分母未知保留真实已执行服务、失败及库存，不编A。 本卡建模分子N_r为真实兼容provider/服务归属A_r；独立完整收支实物V_r不产生第二采购或处理。

完整记录实际完整坯料的毛发运，另追踪退货及重复发运。发货/退货/复验均不产生新Q。保留期初/期末FG及历史批次继承向量；实物S可与本期首次放行Q不同。 原生身份为工厂生产混合中的已制造完整零件；其产品族明确包括纽扣坯。本卡仅选择完整、实体、不发泡、无增强、无颜料、已固化的不饱和聚酯浇片冲切坯；没有缝纫孔及最终制扣精加工。它不是树脂、整片板材、模塑机器、混合件集合、完整纽扣或拉链。原生产品族未固定树脂牌号、尺寸、地理或单件质量；必须由实际供货与验收记录确定这些限定。原生参考属性为质量而非件数。 实际原生单位毛实物流V_r与归属负荷A_r及完整继承交换向量独立记录。原始采集不除基准；report_once唯一执行N_r / D_r。实物卡的N_r为完整V_r，不能是分配缩小量或库存净差；公用工程/服务卡采用归属A_r。

S为随全部毛发运实际离开的完整附着包装，包括退回再发货；不是净产品Q或负荷份额。 具体真实瓦楞纸箱保持未绑定。历史未指定包装Product没有实物总备注，并混列纸箱/内袋/缠绕膜同义词，不足正面定义此具体纸箱的材料/制品。完整旧采用保留为反证，不是当前纸箱UUID或穷尽无匹配声明。整只供货纸箱及已含胶粘剂/印刷记录一次，不重新采购其组成。纸箱等级、含水、组成和供方仍须独立记录；薄膜、胶带、托盘与废物是不同交换。 实际原生单位毛实物流V_r与归属负荷A_r及完整继承交换向量独立记录。原始采集不除基准；report_once唯一执行N_r / D_r。实物卡的N_r为完整V_r，不能是分配缩小量或库存净差；公用工程/服务卡采用归属A_r。 每个实际聚乙烯膜内衬或瓦楞纸箱整湿池以kg核对O + P + I + ERin + J_in + H2O_in - X_in = C + S + EOout + W + J_out + H2O_out - X_out。O/C包含空包、附着WIP、附着FG、退回及复用实物库存；P为新增采购，I为真实供应商已含接收，ERin为外部退回收进，S为gross对外发运，EOout为对外退还，W为实际整湿废物出口。内部复用配对在合并时抵消，不是ERin、EOout或采购。供应商已含包装具有一个完整上游所有者，不再购买一次。 J_in/J_out为独立实证且互不重叠的额外非水转移，例如真实留存修理料、粉尘或油，仅限尚未包含于其他整gross腿的部分。H2O_in/H2O_out为实际吸湿/加水/蒸发或其他未包含于整湿腿的水转移。期末C保留全部真实增量，即使没有修理。X_in/X_out仅扣OTHER同侧流观测间已证重叠，不扣真实J/H2O、C、反向流、未知闭合差或卡片存在。未知项不拟合。真实增量追到物理来源/接收方及具体原子接口；配对内部J/水不是新增provider或废物出口。gross湿腿内含的水/物料只计一次。

EO为本未改变可用包装实物的真实单独对外退回，保留毛实物量和原批次历史。内部复用抵消，不能作采购、新产品或自动共产品。 具体真实瓦楞纸箱保持未绑定。历史未指定包装Product没有实物总备注，并混列纸箱/内袋/缠绕膜同义词，不足正面定义此具体纸箱的材料/制品。完整旧采用保留为反证，不是当前纸箱UUID或穷尽无匹配声明。整只供货纸箱及已含胶粘剂/印刷记录一次，不重新采购其组成。纸箱等级、含水、组成和供方仍须独立记录；薄膜、胶带、托盘与废物是不同交换。 实际原生单位毛实物流V_r与归属负荷A_r及完整继承交换向量独立记录。原始采集不除基准；report_once唯一执行N_r / D_r。实物卡的N_r为完整V_r，不能是分配缩小量或库存净差；公用工程/服务卡采用归属A_r。 每个实际聚乙烯膜内衬或瓦楞纸箱整湿池以kg核对O + P + I + ERin + J_in + H2O_in - X_in = C + S + EOout + W + J_out + H2O_out - X_out。O/C包含空包、附着WIP、附着FG、退回及复用实物库存；P为新增采购，I为真实供应商已含接收，ERin为外部退回收进，S为gross对外发运，EOout为对外退还，W为实际整湿废物出口。内部复用配对在合并时抵消，不是ERin、EOout或采购。供应商已含包装具有一个完整上游所有者，不再购买一次。 J_in/J_out为独立实证且互不重叠的额外非水转移，例如真实留存修理料、粉尘或油，仅限尚未包含于其他整gross腿的部分。H2O_in/H2O_out为实际吸湿/加水/蒸发或其他未包含于整湿腿的水转移。期末C保留全部真实增量，即使没有修理。X_in/X_out仅扣OTHER同侧流观测间已证重叠，不扣真实J/H2O、C、反向流、未知闭合差或卡片存在。未知项不拟合。真实增量追到物理来源/接收方及具体原子接口；配对内部J/水不是新增provider或废物出口。gross湿腿内含的水/物料只计一次。

S为随全部毛发运实际离开的完整附着包装，包括退回再发货；不是净产品Q或负荷份额。 原生产品为聚乙烯薄膜，CAS9002-88-4，工厂生产混合，质量/kg；同义词包括聚膜及聚乙烯片膜。备注描述聚乙烯包装膜并区分竞争材料PET；PET不属于本身份。保留的行李/皮革分类是孤立分类瑕疵，不是另一聚合物或路线的证据。仅用于实际PE内衬膜，并记录牌号、厚度、制袋转换和供方；外购已制成袋须包含实际转换负荷，不能默变成原膜。不得用PET、复合袋或未定塑料替代。 实际原生单位毛实物流V_r与归属负荷A_r及完整继承交换向量独立记录。原始采集不除基准；report_once唯一执行N_r / D_r。实物卡的N_r为完整V_r，不能是分配缩小量或库存净差；公用工程/服务卡采用归属A_r。 每个实际聚乙烯膜内衬或瓦楞纸箱整湿池以kg核对O + P + I + ERin + J_in + H2O_in - X_in = C + S + EOout + W + J_out + H2O_out - X_out。O/C包含空包、附着WIP、附着FG、退回及复用实物库存；P为新增采购，I为真实供应商已含接收，ERin为外部退回收进，S为gross对外发运，EOout为对外退还，W为实际整湿废物出口。内部复用配对在合并时抵消，不是ERin、EOout或采购。供应商已含包装具有一个完整上游所有者，不再购买一次。 J_in/J_out为独立实证且互不重叠的额外非水转移，例如真实留存修理料、粉尘或油，仅限尚未包含于其他整gross腿的部分。H2O_in/H2O_out为实际吸湿/加水/蒸发或其他未包含于整湿腿的水转移。期末C保留全部真实增量，即使没有修理。X_in/X_out仅扣OTHER同侧流观测间已证重叠，不扣真实J/H2O、C、反向流、未知闭合差或卡片存在。未知项不拟合。真实增量追到物理来源/接收方及具体原子接口；配对内部J/水不是新增provider或废物出口。gross湿腿内含的水/物料只计一次。

EO为本未改变可用包装实物的真实单独对外退回，保留毛实物量和原批次历史。内部复用抵消，不能作采购、新产品或自动共产品。 原生产品为聚乙烯薄膜，CAS9002-88-4，工厂生产混合，质量/kg；同义词包括聚膜及聚乙烯片膜。备注描述聚乙烯包装膜并区分竞争材料PET；PET不属于本身份。保留的行李/皮革分类是孤立分类瑕疵，不是另一聚合物或路线的证据。仅用于实际PE内衬膜，并记录牌号、厚度、制袋转换和供方；外购已制成袋须包含实际转换负荷，不能默变成原膜。不得用PET、复合袋或未定塑料替代。 实际原生单位毛实物流V_r与归属负荷A_r及完整继承交换向量独立记录。原始采集不除基准；report_once唯一执行N_r / D_r。实物卡的N_r为完整V_r，不能是分配缩小量或库存净差；公用工程/服务卡采用归属A_r。 每个实际聚乙烯膜内衬或瓦楞纸箱整湿池以kg核对O + P + I + ERin + J_in + H2O_in - X_in = C + S + EOout + W + J_out + H2O_out - X_out。O/C包含空包、附着WIP、附着FG、退回及复用实物库存；P为新增采购，I为真实供应商已含接收，ERin为外部退回收进，S为gross对外发运，EOout为对外退还，W为实际整湿废物出口。内部复用配对在合并时抵消，不是ERin、EOout或采购。供应商已含包装具有一个完整上游所有者，不再购买一次。 J_in/J_out为独立实证且互不重叠的额外非水转移，例如真实留存修理料、粉尘或油，仅限尚未包含于其他整gross腿的部分。H2O_in/H2O_out为实际吸湿/加水/蒸发或其他未包含于整湿腿的水转移。期末C保留全部真实增量，即使没有修理。X_in/X_out仅扣OTHER同侧流观测间已证重叠，不扣真实J/H2O、C、反向流、未知闭合差或卡片存在。未知项不拟合。真实增量追到物理来源/接收方及具体原子接口；配对内部J/水不是新增provider或废物出口。gross湿腿内含的水/物料只计一次。

仅限此完整真实配置资产实际out事件，不规定质量、配方、寿命或技术能力。各实际离心浇铸鼓、冲床、切模及调理架有一份真实配置实物台群，包含完整收进、退回/退役、湿库存、实际设备内流体、磨损和修理。整设备provider与展开制造/维护互斥。实物V/M独立于兼容provider/服务A及真实服务覆盖/历史。Mass/kg设备产品provider须完整配置实测M及provider真实覆盖历史支持的分配/服务份额，不猜寿命/能力，不把观察H当总寿命。小时服务provider保留其单位及真实记录换算桥，不直接替成kg。分母未知保留真实已执行服务、失败及库存，不编A。 本卡仅披露完整真实实物V_r作为N_r；实际provider/服务A_r另归属，不因该物理腿另建provider。

W为实际单独测量的分流废物，含污染/水分并对应一个接收方。若该来源已进入同一个实测混合废物W，则仅保留非加和来源分账，不能重复实物出口或指定第二供方。出售废物不自动抵扣。 实际原生单位毛实物流V_r与归属负荷A_r及完整继承交换向量独立记录。原始采集不除基准；report_once唯一执行N_r / D_r。实物卡的N_r为完整V_r，不能是分配缩小量或库存净差；公用工程/服务卡采用归属A_r。 每个实际聚乙烯膜内衬或瓦楞纸箱整湿池以kg核对O + P + I + ERin + J_in + H2O_in - X_in = C + S + EOout + W + J_out + H2O_out - X_out。O/C包含空包、附着WIP、附着FG、退回及复用实物库存；P为新增采购，I为真实供应商已含接收，ERin为外部退回收进，S为gross对外发运，EOout为对外退还，W为实际整湿废物出口。内部复用配对在合并时抵消，不是ERin、EOout或采购。供应商已含包装具有一个完整上游所有者，不再购买一次。 J_in/J_out为独立实证且互不重叠的额外非水转移，例如真实留存修理料、粉尘或油，仅限尚未包含于其他整gross腿的部分。H2O_in/H2O_out为实际吸湿/加水/蒸发或其他未包含于整湿腿的水转移。期末C保留全部真实增量，即使没有修理。X_in/X_out仅扣OTHER同侧流观测间已证重叠，不扣真实J/H2O、C、反向流、未知闭合差或卡片存在。未知项不拟合。真实增量追到物理来源/接收方及具体原子接口；配对内部J/水不是新增provider或废物出口。gross湿腿内含的水/物料只计一次。

仅限此完整真实配置资产实际waste事件，不规定质量、配方、寿命或技术能力。各实际离心浇铸鼓、冲床、切模及调理架有一份真实配置实物台群，包含完整收进、退回/退役、湿库存、实际设备内流体、磨损和修理。整设备provider与展开制造/维护互斥。实物V/M独立于兼容provider/服务A及真实服务覆盖/历史。Mass/kg设备产品provider须完整配置实测M及provider真实覆盖历史支持的分配/服务份额，不猜寿命/能力，不把观察H当总寿命。小时服务provider保留其单位及真实记录换算桥，不直接替成kg。分母未知保留真实已执行服务、失败及库存，不编A。 实际固化边角料、未固化混合物、废丙酮、含水废物、污染擦布/过滤件、废内衬/纸箱或退役工具/设备的一次整件接收事件保留完整湿Qt，基材加全部留存树脂/溶剂/残留/水仅一次。嵌套来源/物种/检验质量不是额外出口，除非真实分离。实际receiver/provider按其兼容单位一次接收全部实物Qt。另保留实际建模服务总需求及各受服务原Qc或真实新增Q的非重叠A_e,c。不按归属份额缩Qt，不另加留存溶剂/水，不向各队列重新计全部Qt，也不推再生抵扣。A未知保持未解，完整实物事件/历史保留。 本卡仅披露完整真实实物V_r作为N_r；实际provider/服务A_r另归属，不因该物理腿另建provider。

全部协议采集未除基准的原始数量。aggregation_rule字段仅声明同一report_once结果的报告基准，不在采集时进行除法。实物卡N_r为完整毛V_r，公用工程/服务卡为已追溯A_r。D_r为批次正值Q或原Qc，绝不是H。

终端为一种真实完整、实心、非泡沫、未增强、未着色且已固化的不饱和聚酯纽扣坯，未钻孔，也未车削/抛光成完整缝纫纽扣。Jindal直接描述液态树脂离心浇片、软片冲坯及随后硬化，邻述蜡处理管棒材切片是不同路线。PFB独立生产和供货聚酯坯，不证明与Jindal同SKU或工厂。Classic区分冲坯与后续车削、钻孔、抛光和成品纽扣检验，其颜料/珠光实例不用于本未着色配置。Samrat独立供货透明浇铸级UPR并说明MEKP/钴体系作用，所广告剂量、苯乙烯分数、固化时间、温度和桶重不作为默认值。这是透明定性技术综合，不是同一工厂/订单实测、配方或认证。

首次验收位于同配置全部实际混合、离心浇铸、冲切、固化/硬化、调理、坯检验/返工及必要供货包装完成、工厂可供货之时。Q（亦记Q0或原队列c的Qc）为独立实测的唯一首次完整纽扣坯验收净kg，包含实际留存树脂成分和水一次，排除实测可拆包装皮重。首次必要包装归新增制造，后续留库/重包/再交付/修理/复检仅是H内原队列真实服务。件数转质量仅用独立实测同配置M及抽样/不确定性，不用目录坯重。

独立核对Q0 = D0_c + FG0_c + Held0_c + L0_c + T0_c，各项分别为互不重叠的尚存原物料交付、现场已放行FG、全部其他实际现场已验收状态、原物料/水不可逆损失和其他终端去向。按每个真实地点/状态继续细分；gross交付/退回循环仅在此事件桥中抵消。各原物料去向在锁定验收基准下仅记一次。另将各幸存制品当前湿质量桥接到仍在其中的原物料以及后续真实留存非水物料和水变化。不将原损失恢复进幸存物后又记入L0_c。新料/吸湿增加实物质量，不增加Q。Q0=0或未知保留全部原始负荷且无归一化结果。

完整湿原料、WIP、非WIP、已验收/待检/退回FG、包装、真实工具/设备及设备内流体库存，独立于参考事件和逐交换负荷。自有期初WIP全部真实既往前景历史只承接一次，仅转移有据的期末仍未分配向量。实际整份液态UPR、MEKP制剂、钴促进剂及各真实独立供货添加物具有一个完整真实上游生产者，已含单体/载体/抑制剂/促进剂仅作非加和组成。现场真实配制记录独立外购成分及全部混合/清理/废物。整份supplier数据集与相同树脂/化学品/公用工程/运输/设备历史的展开表示互斥。不购买成品坯隐藏浇铸，也不以采购热或预混物隐藏真实现场生产。

每个实际聚乙烯膜内衬或瓦楞纸箱整湿池以kg核对O + P + I + ERin + J_in + H2O_in - X_in = C + S + EOout + W + J_out + H2O_out - X_out。O/C包含空包、附着WIP、附着FG、退回及复用实物库存；P为新增采购，I为真实供应商已含接收，ERin为外部退回收进，S为gross对外发运，EOout为对外退还，W为实际整湿废物出口。内部复用配对在合并时抵消，不是ERin、EOout或采购。供应商已含包装具有一个完整上游所有者，不再购买一次。

J_in/J_out为独立实证且互不重叠的额外非水转移，例如真实留存修理料、粉尘或油，仅限尚未包含于其他整gross腿的部分。H2O_in/H2O_out为实际吸湿/加水/蒸发或其他未包含于整湿腿的水转移。期末C保留全部真实增量，即使没有修理。X_in/X_out仅扣OTHER同侧流观测间已证重叠，不扣真实J/H2O、C、反向流、未知闭合差或卡片存在。未知项不拟合。真实增量追到物理来源/接收方及具体原子接口；配对内部J/水不是新增provider或废物出口。gross湿腿内含的水/物料只计一次。

实际固化边角料、未固化混合物、废丙酮、含水废物、污染擦布/过滤件、废内衬/纸箱或退役工具/设备的一次整件接收事件保留完整湿Qt，基材加全部留存树脂/溶剂/残留/水仅一次。嵌套来源/物种/检验质量不是额外出口，除非真实分离。实际receiver/provider按其兼容单位一次接收全部实物Qt。另保留实际建模服务总需求及各受服务原Qc或真实新增Q的非重叠A_e,c。不按归属份额缩Qt，不另加留存溶剂/水，不向各队列重新计全部Qt，也不推再生抵扣。A未知保持未解，完整实物事件/历史保留。

各实际离心浇铸鼓、冲床、切模及调理架有一份真实配置实物台群，包含完整收进、退回/退役、湿库存、实际设备内流体、磨损和修理。整设备provider与展开制造/维护互斥。实物V/M独立于兼容provider/服务A及真实服务覆盖/历史。Mass/kg设备产品provider须完整配置实测M及provider真实覆盖历史支持的分配/服务份额，不猜寿命/能力，不把观察H当总寿命。小时服务provider保留其单位及真实记录换算桥，不直接替成kg。分母未知保留真实已执行服务、失败及库存，不编A。

这里固化为供货UPR制剂真实自由基交联，不凭假定变成现场新聚酯缩聚。实际单体结合、留存未反应单体、蒸发、引发剂分解及各真实物种生成/消耗，独立于总湿质量和元素守恒。各反应分子物种记录期初 + 实际输入 + 独立实证生成 = 期末 + 实际输出 + 独立实证消耗，不把已固化聚合物当未改变苯乙烯单体守恒，也不强加缩合水。含挥发物整废物和收集冷凝液保持整件实物接收。实际试样完整性、硬化及可加工性验收采用机械/买方证据，不编残余单体化学限值、统一硬度或时间/温度。若真实等级要求化学检验，其真实基质特定程序须存在后才完成该主张。

对实际外部苯乙烯、丙酮和分子H2O蒸气，EPA Method320及所含FTIR Protocol提供独立抽取式气相程序：真实目标/参考光谱或Protocol4.6制备、含水等光谱/干扰选择、合适光路/T/P条件、不冷凝的加热惰性输送、漏检/线性/背景/CTS检查、完整原始光谱及残差分析、独立同基准气量/流量与浓度积分，以及分析物特定输送/基质验证。遵守不同的例行QA加标和第13节验证/Method301偏差精密度程序，普通加标不替代初次验证，其结果不是自动校正因子。不声称现场实际验证或全部蒸气/基质覆盖。程序确实存在，未执行现场/参考/QA工作属于研究要求；实际不适用或未建立的必要程序仍具体hold。不把交联聚合物粒子或液体冷凝物当气相单体测量。

保留Method320真实印刷矛盾：第9.2.3节式3写tracer_spiked/tracer_standard，却称DF至少10，式4又将其作为混合分数。不照抄不兼容量纲的倒数约定。本PCR明确独立量纲综合为同一真实摩尔湿/干基准上k=(tracer_spiked-tracer_native)/(tracer_standard-tracer_native)，要求不同且非零差的端元、守恒示踪物及0<k<1；C_expected=k*C_standard+(1-k)*C_native。倒数稀释比为1/k，不能替k。保留实际流量、端元/背景及现场回收证据，算例不规定示踪剂量、SF6使用、配方或已执行QA。光谱采用来源真实光程/温度/压力校正；排放质量只积分一次实际同状态浓度与气量，已积分体积不再乘时间。

Method18是相反范围证据，不是无条件苯乙烯方法：第1.2.2节排除高分子聚合物、可能在分析前聚合的化合物及极低蒸气压化合物，仅有GC检测器程序不能闭合可聚合样品的保全。Method4独立区分准确参考水分测定和设备设定近似估计，并提示饱和/液滴正偏差，含有机物冷凝液不能自动算纯水。FTIR定量水要求真实Protocol4.6定量参考，不能仅用水干扰光谱。总VOC、暴露浓度、COD及总PM不是苯乙烯/丙酮/聚酯物种质量。真实聚合物特定颗粒主张须有已建立的识别/回收/基质程序，缺失时将受影响真实主张保持hold，不把全部收集PM贴为UPR。这些方法文件均不提供已测纽扣坯生产结果。

首次必要包装及设备保管属于真实制造支持，provider/电量归新增Q；后续原FG服务归原Qc和实际H。同一电表、设备或包装历史的两个阶段按实际事件互斥分配，不能采购/计量两次，也不因机器过程ID仍名post_release而移出首次验收前的真实制造负荷。

## 10. 发布数据集画像

| Field | Value |
| --- | --- |
| dataset_role | secondary_dataset; background_dataset |
| downstream_use | 完整供货坯料作为后续制扣输入; 保留完整状态路线参考限定 |
| allowed_use | 完成前景测量、声明配置及供货兼容的实体UPR浇片冲切固化坯 |
| excluded_use | 完整纽扣或拉链; 原树脂; 通用塑料片材; 其他成坯路线; 无额外功能证据的服装寿命比较 |
| required_metadata | 实际场址地理期间与批次; 买方坯料图样尺寸及验收方案; 实体不发泡无增强无颜料已固化UPR坯; 仅离心浇片及冲坯路线; 无孔且未经成品制扣精加工; 整份供货UPR牌号配方与上游所有者; 各实际独立加入制剂及供货状态; 实际固化调节及可加工证据; 唯一首次放行净Q及皮重历史; 如用件数则记录同配置实测件数质量换算方法; 原料非WIP实体WIP及FG实物库存与各继承交换向量; 全部失败零产出清理返工及重复检测; 原Qc已观察FG服务区间H及毛流转; 每种包装池毛发运退回及废物账; 独立物种水相态及物料元素平衡; 原生流供方兼容性及分配不确定性 |
| required_quality_disclosure | 原始单位换算; 完整逐流向量; Q/Qc/H; 未知供方辅助身份; 来源范围; 真实物种包装分配及不确定性 |
| update_trigger | 树脂配方、浇片路线、固化验收终端、供货坯状态、原生限制、实际供方或实测前景证据改变 |

## 11. 数据源

| Source id | Type | Reference | Used for |
| --- | --- | --- | --- |
| jindal-polyester-casting | extension_guidance | Jindal Polybuttons, Polyester; https://www.jindalbuttons.com/polyester.html | 完整制造商过程页：离心浇片、软片冲坯与坯料固化变硬；相邻棒材浇注路线排除。仅定性路线，不提供本方法配方或固化制度。 |
| pfb-polyester-blanks | extension_guidance | Plastics for Buttons S.r.l., Company; https://plasticsforbuttons.com/en/company/ | 第一方商业生产制扣/配件聚酯坯料，支持真实单独供货坯料终端。不证明Jindal路线、同一SKU或具体交易验收限值。 |
| classic-button-process | extension_guidance | Classic Buttons, Manufacturing process; https://classicbuttons.in/process-for-making-plastic-polyester-buttons-manufacturing-for-garments/ | 完整制造商页面区分浇片冲坯、后续车削、抛光及成扣检验，并指出候选独立苯乙烯/钴/蜡用途。后续成扣作业排除，不移入坯料Q。 |
| epa-polyester-fabrication | official_guidance | US EPA AP-42 §4.4 Polyester Resin Plastic Products Fabrication, 02/2007 with 2008 table update; https://www.epa.gov/sites/default/files/2020-10/documents/c04s04.pdf | 完整第一方PDF：供货液态树脂与上游合成、交联与缩聚区别、引发剂及真实溶剂物种问题。图4.4-1及相邻增强工艺反例限制适用性。不采用复材排放因子、单体含量或用量。 |
| ilcd-attributional-allocation-2010 | official_guidance | European Commission JRC, ILCD Handbook General guide for LCA, Detailed guidance, first edition March2010, §§7.9.2–7.9.3; https://eplca.jrc.ec.europa.eu/uploads/ILCD-Handbook-General-guide-for-LCA-DETAILED-GUIDANCE-12March2010-ISBN-fin-v1.0-EN.pdf | 归因型实际/虚拟细分、逐交换决定性物理因果关系及真正剩余的同门实际状态市场价值。不支持自由选择分配或固定比例。 |
| samrat-button-resin | extension_guidance | Samrat Poly Resins, Button Grade Resin; https://samratpolyresins.in/products/button-grade-resin/ | 液态制扣浇注UPR供货及MEKP、辛酸钴固化用途的第一方例证。不泛化或采用所宣传配方、苯乙烯比例、固化时序、存储及桶装数量。不证明特定浇片路线或同一工厂。 |
| epa-method320 | official_guidance | US EPA Method320 and included FTIR Protocol,1/14/2019 complete original. https://www.epa.gov/sites/default/files/2019-06/documents/method_320.pdf | 真实红外活性蒸气程序、参考制备、加热全输送、光谱/基质验证和QA及来源DF原印矛盾；独立量纲综合，不声称已执行研究或全部基质覆盖。 |
| epa-method18-counter | official_guidance | US EPA Method18,04/01/2025 Internet copy, complete40page original; §§1.2.2/8–13. https://www.epa.gov/system/files/documents/2025-04/m-18-04012025_0.pdf | 真实GC范围排除分析前可聚合化合物、聚合物和低蒸气压物；不是无条件苯乙烯保全或聚合物粉尘方法。 |
| epa-method4-moisture | official_guidance | US EPA Method4,8/2/2017 Internet copy, complete17page original. https://www.epa.gov/sites/default/files/2017-08/documents/method_4_0.pdf | 真实参考与近似水分程序及饱和/液滴偏差，不证明含有机物冷凝液等于纯水或颗粒化学身份。 |
