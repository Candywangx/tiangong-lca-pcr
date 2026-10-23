---
pcr_id: pcr.other-transportable-goods-except-metal-products-machinery-and-equipment.rubber-and-plastics-products.safety-headgear
language: zh-CN
sync_with: pcr.en-US.md
status: candidate
content_maturity: authored_methodology
translation_status: aligned
---

# 单射 HDPE 壳体与外购悬挂系统装配制造工业安全帽

## 1. 范围与适用性

本方法适用于中国场址制造一种明确配置、未发泡未增强的工业安全帽：接收完整供货的本色或预着色抗紫外稳定原生 HDPE 粒料，实际调理、单射螺杆注塑、冷却脱模修边与受控清洁内部回料，装配一种匹配的完整外购悬挂系统及实际另供吸汗带或下颏带，最终验收至唯一新增首次质量放行。真实包装、仓储、搬运及发运作为同原批次关联但单独报告的新增服务账保留。不是外购成品包装。 `vitoppe-helmet-manufacturing`; `jsp-evo3-spec-2016`; `ifc-plastic-products-2007`

这是不同一手来源的透明技术综合，不声称同一 SKU、配方、工厂或当代订单。VITOPPE 给出粒料至装配工艺，JSP 历史矿用型号给出 HDPE 壳体及悬挂组成实例；不采用其矿灯架、可选附件、约重、包装重量、耐冲击数值、证书或寿命。Huarong 两射包边案例是相邻工艺反例，不是本单射配方。IFC 是非反应成型与环境清单背景；ILCD 独立支持有条件归因分配。

排除摩托车、自行车、运动、消防、军警或防弹头盔；防碰帽和非防护头饰；纺织帽；ABS、PC 或热固性复合壳；发泡吸能层；两射包边；增强或多层；壳体热成型；外部再生料；现场配色混配；现场织带与悬挂制造；印刷、涂层和粘贴装饰；加装矿灯、护目镜和耳罩；购买成品后处理。真实额外操作不得用本排除条款隐去；须先重评适用性并完整增加原子流。量产验收要求由实际生产者及其适用规范声明，本文不认证任何产品。质量为制造声明单位，不代表不同保护性能、使用寿命或服务等效。

## 2. 产品类别识别

| 字段 | 值 |
| --- | --- |
| canonical_pcr_id | pcr.other-transportable-goods-except-metal-products-machinery-and-equipment.rubber-and-plastics-products.safety-headgear |
| classification_refs | CPC3.0:36971；窄于该叶的工艺情境；较窄关联已接受，以 classifications/mappings/cpc-3.0-to-pcr.yaml 及其决策记录为准；科学审查仍待完成 |
| covered_products | 一种明确配置的完整 HDPE 单射工业安全帽及其外购悬挂 |
| excluded_products | 第1节全部产品与路线排除项 |
| representative_product | 明确配置的工业硬壳安全帽；JSP 仅为独立组分实例 |
| production_route | 完整 HDPE 粒料接收至真实单射壳制造、外购悬挂装配、首次放行；真实放行后服务另计 |
| market_state | 冷却验收的完整裸安全帽首次质量放行；排除可拆卸运输包装 |

## 3. 参考流

| 字段 | 值 |
| --- | --- |
| What | 一种声明工业安全帽配置的完整制造 |
| How much | 1千克新增首次质量放行的完整裸安全帽 |
| How well | 真实图纸和所声明材料、装配与质量验收；不推定认证或保护性能等效 |
| How long or cycle | 一个完整制造批次至首次放行；不量化使用寿命 |
| reference_flow_link | first_release |

| 字段 | 值 |
| --- | --- |
| 参考数量 | 1 |
| 参考产品流 | 安全头套 `89f91a82-ba76-46ea-b587-e5715c72630a` |
| 参考流属性 | Mass `93a60a56-a3c8-11da-a746-0800200b9a66` |
| 参考单位组 | Units of mass `93a60a57-a4c8-11da-a746-0800200c9a66` |
| 参考单位 | kg |
| 必需限定信息 | 实际型号和完整配置; HDPE 完整供货牌号及颜色稳定体系; 单射未发泡未增强路线; 悬挂采购组成及匹配与固定配置; 实际另供吸汗带和下颏带是否已包含; 验收图纸测试与真实符合性证据; 首次放行净质量及独立件数; 原批次和原 Q_h; 期初期末材料在制品与逐交换继承向量; 内部回料热史与谱系; 成品存量退货原交付及新增重工关联; 制造门与真实服务区间; 中国低于1千伏进口门与供方损失边界; 水回路及设备充注存量和真实回水状态; 每种包装的完整分向实物账; 物种粒径相态接收介质与不确定性; 场址期间与归因分配情景 |

所有限定信息须进入真实数据集元数据、过程说明或参考描述等完整可消费字段。官方基本名“安全头套”在此受限定为完整工业安全帽；原生流仅给出厂内已制造成品与 Mass，不给出聚合物、供方、CAS、地域、认证、寿命或单件重量。件数不替代净称重。

## 4. 计量与单位规则

| rule_id | 适用对象 | 必需流属性 | 必需单位 | 规则 |
| --- | --- | --- | --- | --- |
| reference_mass | reference product | Mass `93a60a56-a3c8-11da-a746-0800200b9a66` | kg | Q_h 是同一原批次与配置新增首次放行整帽净千克；用 cp_release 校准称重，排除包装并核对独立件数。同批期末成品已在 Q_h 内。仅 calc_reference 对原始归属分子相除一次。 |
| count_mass_trace | reference product | Mass `93a60a56-a3c8-11da-a746-0800200b9a66` | kg | 不指定每顶千克。N_h 为原始件数追溯；若需要件数报告，另测同配置每顶不含包装的净质量并保留配置和称量方法，不能由 JSP 约重、装箱重量、次级属性或密度猜测。当前所有清单直接采用每1千克参考流，不按件归一化。 |
| native_units | all inventory rows | Native reference property | kg; MJ | Mass 93a60a56-a3c8-11da-a746-0800200b9a66 → 93a60a57-a4c8-11da-a746-0800200c9a66 → kg；电力净热值 93a60a56-a3c8-11da-a746-0800200c9a66 → 93a60a57-a3c8-11da-a746-0800200c9a66 → MJ。原始千瓦时按精确3.6换 MJ。保留原始单位及换算；不由流次级体积系数推密度。 |
| zero_output | all inventory rows | Raw exchange vector | raw units | Q_h=0 保留启动停机、失败、空转、清理、重工及历史向量，不输出单位结果。真实速率才积分；积分体积不再乘时间；体积转质量须独立物质状态密度。 |

## 5. 系统边界

### 边界概化

| 字段 | 值 |
| --- | --- |
| declared_starting_condition | 完整供货 HDPE 粒料和匹配外购悬挂组件接收；上游生产与包装范围明确 |
| starting_condition_role | 完整前景壳体制造与整帽装配的原料、部件供货门 |
| product_classification_scope | CPC3.0:36971 的单射 HDPE 工业安全帽窄子集 |
| recursive_input_rule | 外购已完成安全帽保留原生产负荷且不替代此粒料路线；内部回料与旧退回品保持谱系和历史向量 |
| upstream_dataset_requirement | 逐完整制剂或组件、真实供电水包装及处理匹配；上游实际生产不可省略或重复 |
| disclosure | 声明配置、场址期间、首次放行门、实际服务区间、全部独立存量向量与供方限制 |

| rule_id | Applies to | Rule | source_ids |
| --- | --- | --- | --- |
| boundary_applicability | all processes | 本窄方法仅为中国场址单射、未发泡未增强 HDPE 工业安全帽，壳体实际制造后装配完整外购悬挂，新增首次放行质量为参考；不覆盖摩托车、自行车、运动、消防、军警防弹头盔、防碰帽、非防护或纺织头饰、ABS或PC或热固性壳、发泡衬层、两射包边、增强多层、热成型、外部再生料、现场配色混配或部件制造、印刷涂层装饰及加装矿灯护目镜耳罩。实际偏离须重评并完整记录，不得隐去。来源为独立技术综合而非同一 SKU或工厂；JSP 具体型号重量性能证书与寿命均不转移，本文不建立保护功能等效。 | vitoppe-helmet-manufacturing; jsp-evo3-spec-2016; huarong-helmet-case-2025 |
| boundary_route | manufacture | 采集完整粒料接收、储存与实际调理、螺杆塑化、填充保压冷却脱模、浇口修边、清洁回料控制、壳体检查、完整外购悬挂装配、实际吸汗带与下颏带安装、破坏试样、最终验收及唯一新增首次放行。保留真实设备与全部失败、空转和清理负荷。合并前景抵消内部中间品；购买成品安全帽不是本路线。 | vitoppe-helmet-manufacturing; ifc-plastic-products-2007 |
| boundary_formulation | hdpe_pellets; suspension; sweatband; chinstrap | 完整外购粒料制剂或部件组件只进入一次并带真实上游生产。所含色料、稳定剂、载水、旋钮、织带和卡扣为组成子账，不另行采购。现场配色、化学混配或部件制造不属所定义供货路线，须明确重评适用性并完整记录逐项取得、能耗、损失和排放。采购边界不得抹去真实上游生产。 | vitoppe-helmet-manufacturing; jsp-evo3-spec-2016; ifc-plastic-products-2007 |
| boundary_release | all processes | Q_h 为同一配置原批次 h 完整安全帽唯一新增首次质量放行的正净质量。同批期末成品已在 Q_h 中，不能再作为生产相加。件数 N_h 是独立核对记录，不是重量换算。发运、退回、复验或已放行器物重复放行不产生新增 Q。破坏性试验报废样品为损失而非放行产品。 | ilcd-general-2010 |
| boundary_carry | all processes | 原料、每个在制品和中间品或回料批次、成品、水回路存量、设备油量和制冷剂充注分别设期初期末账，实物不得重叠。保留数量、组成状态及每一种交换继承的上游与前景向量。按真实作业把本期资源负荷与期初在制品历史分派至新完工品或真正未完成的期末在制品；保留失败、空转与重工负荷，不得将其作为无负荷边角料删除。继承负荷保留原分母，不能重复归一化。 | ilcd-general-2010 |
| boundary_service | supply_services | 即使存货未发运，也保留真实放行后包装、仓储、搬运和发运，按每个原批次 h 与观察区间单列新增服务账。服务门未分配实物质量：期初裸帽、服务返工在制、维修材料及水存量 + 新增内部放行转入 + 其他真实跨门内部物料转入 + 总实物外退接收 + 实际外购物料和水 = 对应互斥期末存量 + 裸帽实物总外出 + 分列拆旧件及其他真实外返物料 + 废物、废液及实测物种损失。各出口项互斥：无论拆旧件属于产品返还或废物，每份实物只计一次。逐移动记录净质量及实测含水状态；包装另账，帽内已有组件不再作为独立新输入。拆旧件若已在整帽废物中，不重复输出。各内部转移在合并门抵消。旧批次保留原 Q_h 与完整历史负荷；对真实退货冲回相应原交付归属，真实新增重工只计入该原批次一次；返工后的实际质量不重置原 Q_h，不再次制造或再次分配已继承产品负荷。 | ilcd-general-2010 |
| boundary_rework | supply_services | 仅在实际制造商说明、相容配置和可追溯验收依据允许时记录具体返工，不推定受撞击或损坏的帽可维修或再供应。逐一称量新悬挂、吸汗带、下颏带及任何其他真实补件或水，并独立列原子输入；逐一记录拆旧组件、各相废液、蒸发和其他真实出口的组成、状态和原子输出，整件内含组分仅作子账。每个新外购组件仅承担一次实际新增上游负荷；真实库存领退与采购分账。保留原批次逐交换总历史向量及拆旧件谱系，不按质量变化重算或删除旧负荷，也不把其子向量再加一次。新增物料、能量、损失和处理仅作为同原批次的服务增量，经 calc_reference 唯一除原 Q_h。没有实际安全/验收依据则保留未知或送相符处理，不宣称恢复合格。 | jsp-evo3-spec-2016; ilcd-general-2010 |
| boundary_utilities | all processes | 所采用电力身份明确为中国低于1千伏电网平均用户侧供电。匹配真实进口门、电压、地域和供方边界；上游发电与输配损失只计一次，现场冷却或压缩空气设备通过其真实电水计量。不预设外购压缩空气、蒸汽、锅炉、热源、燃料、治理装置或制冷剂。任何实际额外外供公用工程或燃料均须单列交换和适用生产、处理边界。 | ifc-plastic-products-2007 |
| boundary_water | manufacture | 水回路及设备充注实物存量独立于产品、在制品和包装核对。仅真实游离水蒸发；非反应 HDPE 模塑不预设反应或结构水。真实外供换热水另设总收、总返水流平衡，记录温度、压力、焓及供方水能所有权约定；不重复列为补水或废水，逐一识别真实漂移、蒸发和排污。闭路内循环抵消。 | ifc-plastic-products-2007 |
| boundary_species | manufacture | 潜在正丁烷、聚合物粉尘或水蒸气卡须有真实存在、物种形态、介质和计量证据。IFC 表4描述超过建议最高加工温度的潜在释放，不是正常运行排放率或正丁烷异构体证明。不得由 VOC、COD、TOC推断物种质量，将未测粒径分量改作 PM2.5，或用一个质量残差同时拟合未知排放和水。定量数据包完成前，每种实际缺失材料、制剂、物种及去向均须单列卡；缺少证据不同于不存在。 | ifc-plastic-products-2007 |
| boundary_packaging | all processes | 对每一种独立包装器物维持期初空包装+附着在制品和成品包装+可复用存量+外部取得+外部退回收到=期末对应存量+随向外实物总发运离开的包装+对外返还+废物。树脂料袋和成品纸箱、袋、胶带分别记账；存量状态转移防止附着与空包装重复。内部再用抵消，不产生新采购、参考安全帽质量、避免负荷或自动共产品。实物向外质量不因归属或安全帽净退货而减少。核对上游已含包装，使其制造只计一次而实物转移始终保留。 | ilcd-general-2010 |

## 6. 过程清单结构

### 过程图

| process_id | process_name | inclusion | inclusion_condition | role | quantitative_reference |
| --- | --- | --- | --- | --- | --- |
| manufacture | 完整壳体制造与整帽装配首次放行 | required | 完整真实工艺与设备负荷 | 前景生产、辅设备、水和充注独立账 | 1 kg new first release |
| supply_services | 真实新增包装仓储搬运发运 | required | 原批次的真实观察区间，含未发运库存 | 与制造分开的新增服务和完整成品包装实物账 | per 1 kg reference flow |

所有行均为一种原子交换。条件行只有真实存在时纳入，实际无此流须有不存在证据；未知不是零。每行先采未归一化分子，卡与采集汇总仅引用 calc_reference 的同一次 x_ih 结果。服务使用原批次 Q_h 并单列区间，不把旧成品塞入本期新增 Q。任何真实未列流、材料、设备化学品、包装或物种须先独立新增，不能隐藏为“其他”。

### 过程：完整制造与首次放行 (`manufacture`)

#### 输入

##### 产品流

###### 完整供货的抗紫外稳定原生 HDPE 粒料制剂 (`hdpe_pellets`)

一种完整外购的本色或预着色未填充原生 HDPE 配方，包含供货所含稳定剂和色料载体。称取不含料袋的净质量；不重复采购所含组分。通用 PE 身份不能证明该完整粒料配方或安全用料规格；不规定配方或比例。 参考单位组: Units of mass `93a60a57-a4c8-11da-a746-0800200c9a66`; 参考单位 kg.

- 选定流：完整供货的抗紫外稳定原生 HDPE 粒料制剂
- 流属性/单位：Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- 数量规则：使用本行已唯一计算的 x_ih；以 cp_material 采未归一化原始分子。
- 数值来源模式：`calculated_value`
- 适用范围：`site_specific`
- 归一化基准：每 1 kg 参考流
- 基准类型：`reference_flow`
- 证据类型：`calculated_from_collection`
- 采集协议：`cp_material`
- 来源：`vitoppe-helmet-manufacturing`; `ifc-plastic-products-2007`

###### 安全帽内衬悬挂系统 (`suspension`)

一种完整外购悬挂组件，含其声明的帽箍、旋钮或插扣调节件、卡扣和织带；不重复采购其组分。原生 Product/Mass 身份是中国厂内通用外购部件，同义信息含悬挂、支架、帽箍织带和旋钮内衬，无 CAS 或组成。中国条件为真实限制；它不是成品头盔，也不能证明固定点数、供应商、认证或本配置。要求实际匹配组件及其上游负荷。 参考单位组: Units of mass `93a60a57-a4c8-11da-a746-0800200c9a66`; 参考单位 kg.

- 选定流：安全帽内衬悬挂系统 `515e544b-72fc-4dc2-a2e6-e494e00e2f43`
- 流属性/单位：Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- 数量规则：使用本行已唯一计算的 x_ih；以 cp_material 采未归一化原始分子。
- 数值来源模式：`calculated_value`
- 适用范围：`site_specific`
- 归一化基准：每 1 kg 参考流
- 基准类型：`reference_flow`
- 证据类型：`calculated_from_collection`
- 采集协议：`cp_material`
- 来源：`jsp-evo3-spec-2016`; `vitoppe-helmet-manufacturing`

###### 棉芯聚氨酯涂层安全帽吸汗带 (`sweatband`)

仅当本配置采用这种单独外购的完整棉芯 PU 涂层吸汗带且悬挂采购清单未包含时纳入。棉芯和涂层为组成子账，不另计采购。JSP 仅支持具体组分实例，不证明本 SKU 或所有头盔必须采用该部件。 参考单位组: Units of mass `93a60a57-a4c8-11da-a746-0800200c9a66`; 参考单位 kg.

- 选定流：棉芯聚氨酯涂层安全帽吸汗带
- 流属性/单位：Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- 数量规则：使用本行已唯一计算的 x_ih；以 cp_material 采未归一化原始分子。
- 数值来源模式：`calculated_value`
- 适用范围：`site_specific`
- 归一化基准：每 1 kg 参考流
- 基准类型：`reference_flow`
- 证据类型：`calculated_from_collection`
- 采集协议：`cp_material`
- 来源：`jsp-evo3-spec-2016`

###### 聚酯织带安全帽下颏带组件 (`chinstrap`)

仅当实际安装且悬挂采购未包含时，计入完整外购聚酯织带下颏带及其扣件和连接件。声明实际材料、匹配和紧固配置；其他构造须另设准确身份。 参考单位组: Units of mass `93a60a57-a4c8-11da-a746-0800200c9a66`; 参考单位 kg.

- 选定流：聚酯织带安全帽下颏带组件
- 流属性/单位：Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- 数量规则：使用本行已唯一计算的 x_ih；以 cp_material 采未归一化原始分子。
- 数值来源模式：`calculated_value`
- 适用范围：`site_specific`
- 归一化基准：每 1 kg 参考流
- 基准类型：`reference_flow`
- 证据类型：`calculated_from_collection`
- 采集协议：`cp_material`
- 来源：`vitoppe-helmet-manufacturing`

###### 交流电 (`production_electricity`)

计量实际调理、螺杆与加热器、锁模、冷却泵与冷水机、排风、压缩机、修边、测试以及失败、空转和清理操作。原生产品流为中国低于1千伏的电网平均用户侧供电；geography.locationOfSupply 为 CN。参考净热值为 MJ 能量属性，不是燃料质量。不得视作无地域、特定可再生、高电压、现场发电或变压服务。匹配实际低压进口门和上游供方；支路负荷与真实配电损失只计一次。 参考单位组: Units of energy `93a60a57-a3c8-11da-a746-0800200c9a66`; 参考单位 MJ.

- 选定流：交流电 `50657322-939c-4829-a87b-47c093bfa6a7`
- 流属性/单位：Net calorific value `93a60a56-a3c8-11da-a746-0800200c9a66` / MJ
- 数量规则：使用本行已唯一计算的 x_ih；以 cp_energy 采未归一化原始分子。
- 数值来源模式：`calculated_value`
- 适用范围：`site_specific`
- 归一化基准：每 1 kg 参考流
- 基准类型：`reference_flow`
- 证据类型：`calculated_from_collection`
- 采集协议：`cp_energy`
- 来源：`ifc-plastic-products-2007`

###### 外购液态冷却补充水 (`cooling_makeup`)

冷却回路实际从外部获得的液态水，声明水质与处理。内部循环不是另一投入。分开保留期初期末回路存量、实际对外水回流以及排污和蒸发；密度须有该水状态的证据。 参考单位组: Units of mass `93a60a57-a4c8-11da-a746-0800200c9a66`; 参考单位 kg.

- 选定流：外购液态冷却补充水
- 流属性/单位：Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- 数量规则：使用本行已唯一计算的 x_ih；以 cp_water 采未归一化原始分子。
- 数值来源模式：`calculated_value`
- 适用范围：`site_specific`
- 归一化基准：每 1 kg 参考流
- 基准类型：`reference_flow`
- 证据类型：`calculated_from_collection`
- 采集协议：`cp_water`
- 来源：`ifc-plastic-products-2007`

###### 外部供应的液态换热水 (`external_cooling_supply`)

仅为真实外供且合同要求回水的液态换热水流。总接收质量与真正回路补水分开记录，保留供回水温度、压力、焓及供方水能约定。不推定蒸汽、凝结水或锅炉；同一水流不得重复计入补水。匹配 external_cooling_return 与独立回路存量账。 参考单位组: Units of mass `93a60a57-a4c8-11da-a746-0800200c9a66`; 参考单位 kg.

- 选定流：外部供应的液态换热水
- 流属性/单位：Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- 数量规则：使用本行已唯一计算的 x_ih；以 cp_water 采未归一化原始分子。
- 数值来源模式：`calculated_value`
- 适用范围：`site_specific`
- 归一化基准：每 1 kg 参考流
- 基准类型：`reference_flow`
- 证据类型：`calculated_from_collection`
- 采集协议：`cp_water`
- 来源：`ifc-plastic-products-2007`

###### 外购液态设备清洗水 (`cleaning_water`)

仅计实际设备湿洗或水性测试，保留独立用水记录。不得由干洗模具虚构湿法路线；不重复计入冷却补水或供货制剂载水。 参考单位组: Units of mass `93a60a57-a4c8-11da-a746-0800200c9a66`; 参考单位 kg.

- 选定流：外购液态设备清洗水
- 流属性/单位：Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- 数量规则：使用本行已唯一计算的 x_ih；以 cp_water 采未归一化原始分子。
- 数值来源模式：`calculated_value`
- 适用范围：`site_specific`
- 归一化基准：每 1 kg 参考流
- 基准类型：`reference_flow`
- 证据类型：`calculated_from_collection`
- 采集协议：`cp_water`
- 来源：`ifc-plastic-products-2007`

###### 矿物液压油制剂 (`hydraulic_oil`)

仅用于真实液压设备：完整供货矿物液压油及其添加剂包、牌号和装填更换记录。分开跟踪油箱期初期末存量、泄漏、回收油和废油；密度对实际油品状态独立测量。 参考单位组: Units of mass `93a60a57-a4c8-11da-a746-0800200c9a66`; 参考单位 kg.

- 选定流：矿物液压油制剂
- 流属性/单位：Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- 数量规则：使用本行已唯一计算的 x_ih；以 cp_aux 采未归一化原始分子。
- 数值来源模式：`calculated_value`
- 适用范围：`site_specific`
- 归一化基准：每 1 kg 参考流
- 基准类型：`reference_flow`
- 证据类型：`calculated_from_collection`
- 采集协议：`cp_aux`
- 来源：`ifc-plastic-products-2007`

###### 纤维素设备清洁擦拭布 (`cleaning_wipe`)

设备清洁实际消耗的干纤维素擦拭布。若另加真实清洗制剂，经适用性核对后作为单独完整采购配方记录；不得用擦拭布隐藏溶剂。 参考单位组: Units of mass `93a60a57-a4c8-11da-a746-0800200c9a66`; 参考单位 kg.

- 选定流：纤维素设备清洁擦拭布
- 流属性/单位：Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- 数量规则：使用本行已唯一计算的 x_ih；以 cp_aux 采未归一化原始分子。
- 数值来源模式：`calculated_value`
- 适用范围：`site_specific`
- 归一化基准：每 1 kg 参考流
- 基准类型：`reference_flow`
- 证据类型：`calculated_from_collection`
- 采集协议：`cp_aux`
- 来源：`ifc-plastic-products-2007`

###### 1,1,1,2-四氟乙烷制冷剂 (`r134a_charge`)

仅当真实制冷回路含 R134a 时纳入。同一充注账保留采购、设备期初期末充注量、回收转出和物种损失；不预设制冷剂或泄漏因子。其他制冷剂须分别采用化学身份。 参考单位组: Units of mass `93a60a57-a4c8-11da-a746-0800200c9a66`; 参考单位 kg.

- 选定流：1,1,1,2-四氟乙烷制冷剂
- 流属性/单位：Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- 数量规则：使用本行已唯一计算的 x_ih；以 cp_aux 采未归一化原始分子。
- 数值来源模式：`calculated_value`
- 适用范围：`site_specific`
- 归一化基准：每 1 kg 参考流
- 基准类型：`reference_flow`
- 证据类型：`calculated_from_collection`
- 采集协议：`cp_aux`
- 来源：`ifc-plastic-products-2007`

###### 聚乙烯树脂料袋 (`resin_sack`)

随粒料收到的单种 PE 料袋，独立于树脂净重。核对上游供方是否包含其制造，负荷只计一次；实物总质量始终保留。原生 Product/Mass 聚乙烯袋身份含 CAS9002-88-4、PE袋同义名和“生产混合，在工厂”，且地域为空；未指定袋牌号、LDPE或HDPE支类、厚度、构造、工艺路线或供方。仅在真实料袋或包装袋规格与供方匹配后用于受限定 PE 器物；不证明牌号或密度。返回与发运均保留同一实物器物，不产生新采购。 参考单位组: Units of mass `93a60a57-a4c8-11da-a746-0800200c9a66`; 参考单位 kg.

- 选定流：聚乙烯袋 `10647902-9822-4b06-bc95-f1f30f10c261`
- 流属性/单位：Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- 数量规则：使用本行已唯一计算的 x_ih；以 cp_feed_packaging 采未归一化原始分子。
- 数值来源模式：`calculated_value`
- 适用范围：`site_specific`
- 归一化基准：每 1 kg 参考流
- 基准类型：`reference_flow`
- 证据类型：`calculated_from_collection`
- 采集协议：`cp_feed_packaging`
- 来源：`ilcd-general-2010`

###### 聚乙烯树脂料袋 (`resin_sack_return_in`)

同一种 PE 料袋实际由外部返回前景；保留原制造负荷和所有权，不视为新袋采购。原生 Product/Mass 聚乙烯袋身份含 CAS9002-88-4、PE袋同义名和“生产混合，在工厂”，且地域为空；未指定袋牌号、LDPE或HDPE支类、厚度、构造、工艺路线或供方。仅在真实料袋或包装袋规格与供方匹配后用于受限定 PE 器物；不证明牌号或密度。返回与发运均保留同一实物器物，不产生新采购。 参考单位组: Units of mass `93a60a57-a4c8-11da-a746-0800200c9a66`; 参考单位 kg.

- 选定流：聚乙烯袋 `10647902-9822-4b06-bc95-f1f30f10c261`
- 流属性/单位：Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- 数量规则：使用本行已唯一计算的 x_ih；以 cp_feed_packaging 采未归一化原始分子。
- 数值来源模式：`calculated_value`
- 适用范围：`site_specific`
- 归一化基准：每 1 kg 参考流
- 基准类型：`reference_flow`
- 证据类型：`calculated_from_collection`
- 采集协议：`cp_feed_packaging`
- 来源：`ilcd-general-2010`

#### 输出

##### 产品流

###### 回收的1,1,1,2-四氟乙烷 (`recovered_r134a`)

仅为实际回收并向外转出的 R134a，声明纯度、状态、所有权和去向。这是实物返回，不自动成为共产品或避免生产信用；同一质量不得再列为空气泄漏或废物。 参考单位组: Units of mass `93a60a57-a4c8-11da-a746-0800200c9a66`; 参考单位 kg.

- 选定流：回收的1,1,1,2-四氟乙烷
- 流属性/单位：Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- 数量规则：使用本行已唯一计算的 x_ih；以 cp_aux 采未归一化原始分子。
- 数值来源模式：`calculated_value`
- 适用范围：`site_specific`
- 归一化基准：每 1 kg 参考流
- 基准类型：`reference_flow`
- 证据类型：`calculated_from_collection`
- 采集协议：`cp_aux`
- 来源：`ifc-plastic-products-2007`

###### 对外返回的液态换热水 (`external_cooling_return`)

仅当实际外供水作为产品或服务水流返还时纳入。记录两端总质量、温度、压力、焓及供方水能约定；不预设凝结水或蒸汽。同一水流不得重复列为补水、废水或热产品。 参考单位组: Units of mass `93a60a57-a4c8-11da-a746-0800200c9a66`; 参考单位 kg.

- 选定流：对外返回的液态换热水
- 流属性/单位：Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- 数量规则：使用本行已唯一计算的 x_ih；以 cp_water 采未归一化原始分子。
- 数值来源模式：`calculated_value`
- 适用范围：`site_specific`
- 归一化基准：每 1 kg 参考流
- 基准类型：`reference_flow`
- 证据类型：`calculated_from_collection`
- 采集协议：`cp_water`
- 来源：`ifc-plastic-products-2007`

###### 安全头套 (`first_release`)

完整配置安全帽的唯一新增首次质量放行，排除可拆卸包装；Q 为实测千克，同批期末成品已计入 Q。原生 Product/Mass 记录为厂内生产混合的已制造安全头部防护成品，无 CAS、指定聚合物、供应商、认证、寿命或 locationOfSupply。官方中文基本名为“安全头套”；本方法实际器件为完整工业安全帽。通用名称与 CPC 均不能证明性能或件数质量换算。 参考单位组: Units of mass `93a60a57-a4c8-11da-a746-0800200c9a66`; 参考单位 kg.

- 选定流：安全头套 `89f91a82-ba76-46ea-b587-e5715c72630a`
- 流属性/单位：Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- 数量规则：1 千克
- 数值来源模式：`calculated_value`
- 适用范围：`site_specific`
- 归一化基准：每 1 kg 参考流
- 基准类型：`reference_flow`
- 证据类型：`calculated_from_collection`
- 采集协议：`cp_release`
- 来源：`vitoppe-helmet-manufacturing`; `jsp-evo3-spec-2016`

###### 聚乙烯树脂料袋 (`resin_sack_return`)

实际对外返回的可用 PE 料袋；记录向外总质量、接收方和所有权，内部再用不产生信用或新采购。原生 Product/Mass 聚乙烯袋身份含 CAS9002-88-4、PE袋同义名和“生产混合，在工厂”，且地域为空；未指定袋牌号、LDPE或HDPE支类、厚度、构造、工艺路线或供方。仅在真实料袋或包装袋规格与供方匹配后用于受限定 PE 器物；不证明牌号或密度。返回与发运均保留同一实物器物，不产生新采购。 参考单位组: Units of mass `93a60a57-a4c8-11da-a746-0800200c9a66`; 参考单位 kg.

- 选定流：聚乙烯袋 `10647902-9822-4b06-bc95-f1f30f10c261`
- 流属性/单位：Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- 数量规则：使用本行已唯一计算的 x_ih；以 cp_feed_packaging 采未归一化原始分子。
- 数值来源模式：`calculated_value`
- 适用范围：`site_specific`
- 归一化基准：每 1 kg 参考流
- 基准类型：`reference_flow`
- 证据类型：`calculated_from_collection`
- 采集协议：`cp_feed_packaging`
- 来源：`ilcd-general-2010`

##### 废物流

###### 废弃 HDPE 壳体与浇口料 (`hdpe_scrap`)

实际作为废物离开前景的一种分选 HDPE 流；区分仍留厂内的清洁回料与废弃污染或烧焦边角料，保留热史及负荷谱系。 参考单位组: Units of mass `93a60a57-a4c8-11da-a746-0800200c9a66`; 参考单位 kg.

- 选定流：废弃 HDPE 壳体与浇口料
- 流属性/单位：Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- 数量规则：使用本行已唯一计算的 x_ih；以 cp_waste 采未归一化原始分子。
- 数值来源模式：`calculated_value`
- 适用范围：`site_specific`
- 归一化基准：每 1 kg 参考流
- 基准类型：`reference_flow`
- 证据类型：`calculated_from_collection`
- 采集协议：`cp_waste`
- 来源：`ifc-plastic-products-2007`

###### 废弃已装配工业安全帽 (`helmet_reject`)

实际报废的一种已装配整顶安全帽，保留实测组成、破坏试验史和接收处理。材料分离回收是另一真实操作；破坏试验不得计为新增放行。 参考单位组: Units of mass `93a60a57-a4c8-11da-a746-0800200c9a66`; 参考单位 kg.

- 选定流：废弃已装配工业安全帽
- 流属性/单位：Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- 数量规则：使用本行已唯一计算的 x_ih；以 cp_release 采未归一化原始分子。
- 数值来源模式：`calculated_value`
- 适用范围：`site_specific`
- 归一化基准：每 1 kg 参考流
- 基准类型：`reference_flow`
- 证据类型：`calculated_from_collection`
- 采集协议：`cp_release`
- 来源：`ifc-plastic-products-2007`

###### 废矿物液压油 (`spent_oil`)

实际废油，声明实测污染和液态状态，与供油和回收油分开；不采用假定50%含油或其他原生废物配方。 参考单位组: Units of mass `93a60a57-a4c8-11da-a746-0800200c9a66`; 参考单位 kg.

- 选定流：废矿物液压油
- 流属性/单位：Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- 数量规则：使用本行已唯一计算的 x_ih；以 cp_waste 采未归一化原始分子。
- 数值来源模式：`calculated_value`
- 适用范围：`site_specific`
- 归一化基准：每 1 kg 参考流
- 基准类型：`reference_flow`
- 证据类型：`calculated_from_collection`
- 采集协议：`cp_waste`
- 来源：`ifc-plastic-products-2007`

###### 废纤维素设备清洁擦拭布 (`used_wipe`)

一种废纤维素擦拭布，声明实际捕集油、聚合物、水和危险性；不将其所含组分再作独立外排废物质量。 参考单位组: Units of mass `93a60a57-a4c8-11da-a746-0800200c9a66`; 参考单位 kg.

- 选定流：废纤维素设备清洁擦拭布
- 流属性/单位：Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- 数量规则：使用本行已唯一计算的 x_ih；以 cp_waste 采未归一化原始分子。
- 数值来源模式：`calculated_value`
- 适用范围：`site_specific`
- 归一化基准：每 1 kg 参考流
- 基准类型：`reference_flow`
- 证据类型：`calculated_from_collection`
- 采集协议：`cp_waste`
- 来源：`ifc-plastic-products-2007`

###### 冷却回路排污废水 (`cooling_blowdown`)

仅为水回路实际外排液态废水，声明组成、接收管网或处理及温度；区分清洁合同产品回流与回路存量。 参考单位组: Units of mass `93a60a57-a4c8-11da-a746-0800200c9a66`; 参考单位 kg.

- 选定流：冷却回路排污废水
- 流属性/单位：Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- 数量规则：使用本行已唯一计算的 x_ih；以 cp_water 采未归一化原始分子。
- 数值来源模式：`calculated_value`
- 适用范围：`site_specific`
- 归一化基准：每 1 kg 参考流
- 基准类型：`reference_flow`
- 证据类型：`calculated_from_collection`
- 采集协议：`cp_water`
- 来源：`ifc-plastic-products-2007`

###### 设备清洗废水 (`wash_effluent`)

仅为真实湿洗送往接收处理的废液。实测物种和固体保留为组成子账；COD、TOC和动植物油类指标不是特定分子质量，也不是重复整份废液。 参考单位组: Units of mass `93a60a57-a4c8-11da-a746-0800200c9a66`; 参考单位 kg.

- 选定流：设备清洗废水
- 流属性/单位：Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- 数量规则：使用本行已唯一计算的 x_ih；以 cp_water 采未归一化原始分子。
- 数值来源模式：`calculated_value`
- 适用范围：`site_specific`
- 归一化基准：每 1 kg 参考流
- 基准类型：`reference_flow`
- 证据类型：`calculated_from_collection`
- 采集协议：`cp_water`
- 来源：`ifc-plastic-products-2007`

###### 废聚乙烯树脂料袋 (`resin_sack_waste`)

实际废弃料袋，残留树脂作所含组成计量；不重复处置其中同一树脂质量。 参考单位组: Units of mass `93a60a57-a4c8-11da-a746-0800200c9a66`; 参考单位 kg.

- 选定流：废聚乙烯树脂料袋
- 流属性/单位：Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- 数量规则：使用本行已唯一计算的 x_ih；以 cp_feed_packaging 采未归一化原始分子。
- 数值来源模式：`calculated_value`
- 适用范围：`site_specific`
- 归一化基准：每 1 kg 参考流
- 基准类型：`reference_flow`
- 证据类型：`calculated_from_collection`
- 采集协议：`cp_feed_packaging`
- 来源：`ifc-plastic-products-2007`

##### 基本流

###### 排至室外空气的水蒸气 (`water_vapour`)

仅为声明的冷却或调理过程真实蒸发；区分游离水蒸发、产品和在制品保留水及液滴漂移。本非反应路线不预设反应生成水。 参考单位组: Units of mass `93a60a57-a4c8-11da-a746-0800200c9a66`; 参考单位 kg.

- 选定流：排至室外空气的水蒸气
- 流属性/单位：Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- 数量规则：使用本行已唯一计算的 x_ih；以 cp_species 采未归一化原始分子。
- 数值来源模式：`calculated_value`
- 适用范围：`site_specific`
- 归一化基准：每 1 kg 参考流
- 基准类型：`reference_flow`
- 证据类型：`calculated_from_collection`
- 采集协议：`cp_species`
- 来源：`ifc-plastic-products-2007`

###### 排至室外空气的聚乙烯颗粒物 (`pe_dust`)

仅为真实逸散聚合物粉尘，声明聚合物身份、实测粒径分布和室外介质。无证据不得替换为固定 PM2.5、PM10或室内流；捕集粉尘仍为内部物料或单独实测废物。 参考单位组: Units of mass `93a60a57-a4c8-11da-a746-0800200c9a66`; 参考单位 kg.

- 选定流：排至室外空气的聚乙烯颗粒物
- 流属性/单位：Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- 数量规则：使用本行已唯一计算的 x_ih；以 cp_species 采未归一化原始分子。
- 数值来源模式：`calculated_value`
- 适用范围：`site_specific`
- 归一化基准：每 1 kg 参考流
- 基准类型：`reference_flow`
- 证据类型：`calculated_from_collection`
- 采集协议：`cp_species`
- 来源：`ifc-plastic-products-2007`

###### 排至室外空气的正丁烷 (`n_butane`)

仅当真实物种分析证明正丁烷（CAS106-97-8）及其室外排放时纳入；IFC 高温实例不能证明异构体、存在或数量。VOC 总量仅作指标，其他实际确认物种逐一新增。 参考单位组: Units of mass `93a60a57-a4c8-11da-a746-0800200c9a66`; 参考单位 kg.

- 选定流：排至室外空气的正丁烷
- 流属性/单位：Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- 数量规则：使用本行已唯一计算的 x_ih；以 cp_species 采未归一化原始分子。
- 数值来源模式：`calculated_value`
- 适用范围：`site_specific`
- 归一化基准：每 1 kg 参考流
- 基准类型：`reference_flow`
- 证据类型：`calculated_from_collection`
- 采集协议：`cp_species`
- 来源：`ifc-plastic-products-2007`

###### 排至室外空气的1,1,1,2-四氟乙烷 (`r134a_air`)

仅为已识别回路实际 R134a 排放。实测或独立核对一个含不确定性的充注平衡；同一质量不得同时列为回收制冷剂、去向不明损失或其他物种。 参考单位组: Units of mass `93a60a57-a4c8-11da-a746-0800200c9a66`; 参考单位 kg.

- 选定流：排至室外空气的1,1,1,2-四氟乙烷
- 流属性/单位：Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- 数量规则：使用本行已唯一计算的 x_ih；以 cp_species 采未归一化原始分子。
- 数值来源模式：`calculated_value`
- 适用范围：`site_specific`
- 归一化基准：每 1 kg 参考流
- 基准类型：`reference_flow`
- 证据类型：`calculated_from_collection`
- 采集协议：`cp_species`
- 来源：`ifc-plastic-products-2007`

### 过程：真实放行后服务 (`supply_services`)

#### 输入

##### 产品流

###### 安全头套 (`released_transfer`)

同一首次放行批次内部转入服务账；合并门与制造转出严格抵消，携带完整既有交换向量，不作另一采购。原生 Product/Mass 身份为厂内生产混合的已制造安全头部防护成品；无固定材料、供应商、CAS、geography.locationOfSupply、性能、寿命或单件重量。官方中文基本名为“安全头套”。保留实际配置和历史质量状态；该 UUID 不使退回或不合格品重新合格。 参考单位组: Units of mass `93a60a57-a4c8-11da-a746-0800200c9a66`; 参考单位 kg.

- 选定流：安全头套 `89f91a82-ba76-46ea-b587-e5715c72630a`
- 流属性/单位：Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- 数量规则：使用本行已唯一计算的 x_ih；以 cp_fg 采未归一化原始分子。
- 数值来源模式：`calculated_value`
- 适用范围：`site_specific`
- 归一化基准：每 1 kg 参考流
- 基准类型：`reference_flow`
- 证据类型：`calculated_from_collection`
- 采集协议：`cp_fg`
- 来源：`ilcd-general-2010`

###### 安全头套 (`returned_helmet`)

实际曾对外发运后返厂的完整安全帽，关联原交付、原放行 Q_h 和原逐交换负荷向量；适用时冲回原发运归属。复验和再次发运均不产生新增 Q。 接收和重发分别测净质量及含水状态；仅依据 boundary_rework 允许的实际返工才补入独立新件，分列拆旧和真实水/物种去向，不能用原质量抹平差额或重设原 Q_h。原生 Product/Mass 身份为厂内生产混合的已制造安全头部防护成品；无固定材料、供应商、CAS、geography.locationOfSupply、性能、寿命或单件重量。官方中文基本名为“安全头套”。保留实际配置和历史质量状态；该 UUID 不使退回或不合格品重新合格。 参考单位组: Units of mass `93a60a57-a4c8-11da-a746-0800200c9a66`; 参考单位 kg.

- 选定流：安全头套 `89f91a82-ba76-46ea-b587-e5715c72630a`
- 流属性/单位：Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- 数量规则：使用本行已唯一计算的 x_ih；以 cp_fg 采未归一化原始分子。
- 数值来源模式：`calculated_value`
- 适用范围：`site_specific`
- 归一化基准：每 1 kg 参考流
- 基准类型：`reference_flow`
- 证据类型：`calculated_from_collection`
- 采集协议：`cp_fg`
- 来源：`ilcd-general-2010`

###### 安全帽内衬悬挂系统 (`repair_suspension`)

仅作为制造商说明和真实验收依据允许的原批次返工中实际新增的完整相容悬挂组件。新补件独立称量并承担一次新增上游负荷，原帽内旧件不算另一输入，不能把换件认作新增首次放行。 一种完整外购悬挂组件，含其声明的帽箍、旋钮或插扣调节件、卡扣和织带；不重复采购其组分。原生 Product/Mass 身份是中国厂内通用外购部件，同义信息含悬挂、支架、帽箍织带和旋钮内衬，无 CAS 或组成。中国条件为真实限制；它不是成品头盔，也不能证明固定点数、供应商、认证或本配置。要求实际匹配组件及其上游负荷。 参考单位组: Units of mass `93a60a57-a4c8-11da-a746-0800200c9a66`; 参考单位 kg.

- 选定流：安全帽内衬悬挂系统 `515e544b-72fc-4dc2-a2e6-e494e00e2f43`
- 流属性/单位：Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- 数量规则：使用本行已唯一计算的 x_ih；以 cp_fg 采未归一化原始分子。
- 数值来源模式：`calculated_value`
- 适用范围：`site_specific`
- 归一化基准：每 1 kg 参考流
- 基准类型：`reference_flow`
- 证据类型：`calculated_from_collection`
- 采集协议：`cp_fg`
- 来源：`jsp-evo3-spec-2016`; `vitoppe-helmet-manufacturing`

###### 交流电 (`service_electricity`)

仅为声明批次和区间实际新增包装、仓储、搬运、检验及实际允许返工的服务电量，包含未发运成品；保留旧批次分母并与制造分开。原生产品流为中国低于1千伏的电网平均用户侧供电；geography.locationOfSupply 为 CN。参考净热值为 MJ 能量属性，不是燃料质量。不得视作无地域、特定可再生、高电压、现场发电或变压服务。匹配实际低压进口门和上游供方；支路负荷与真实配电损失只计一次。 参考单位组: Units of energy `93a60a57-a3c8-11da-a746-0800200c9a66`; 参考单位 MJ.

- 选定流：交流电 `50657322-939c-4829-a87b-47c093bfa6a7`
- 流属性/单位：Net calorific value `93a60a56-a3c8-11da-a746-0800200c9a66` / MJ
- 数量规则：使用本行已唯一计算的 x_ih；以 cp_service_energy 采未归一化原始分子。
- 数值来源模式：`calculated_value`
- 适用范围：`site_specific`
- 归一化基准：每 1 kg 参考流
- 基准类型：`reference_flow`
- 证据类型：`calculated_from_collection`
- 采集协议：`cp_service_energy`
- 来源：`ilcd-general-2010`

###### 瓦楞运输纸箱 (`carton`)

实际外部取得，包含未发运成品包装；不得以消耗量替代采购或所有权转移。本流是一种完整真实瓦楞纸箱及其供货纸板和胶粘构造。核实实际组成和供方边界；不重复采购所含组分。若实际存在胶带芯、离型层、其他材料或可重复托盘，均须另立原子行。不假定通用包装材料 UUID 能证明该器物。 参考单位组: Units of mass `93a60a57-a4c8-11da-a746-0800200c9a66`; 参考单位 kg.

- 选定流：瓦楞运输纸箱
- 流属性/单位：Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- 数量规则：使用本行已唯一计算的 x_ih；以 cp_packaging 采未归一化原始分子。
- 数值来源模式：`calculated_value`
- 适用范围：`site_specific`
- 归一化基准：每 1 kg 参考流
- 基准类型：`reference_flow`
- 证据类型：`calculated_from_collection`
- 采集协议：`cp_packaging`
- 来源：`ilcd-general-2010`

###### 瓦楞运输纸箱 (`carton_external_return_in`)

仅为该种可用器物真实从外部返回，保留原有负荷和所有权。本流是一种完整真实瓦楞纸箱及其供货纸板和胶粘构造。核实实际组成和供方边界；不重复采购所含组分。若实际存在胶带芯、离型层、其他材料或可重复托盘，均须另立原子行。不假定通用包装材料 UUID 能证明该器物。 参考单位组: Units of mass `93a60a57-a4c8-11da-a746-0800200c9a66`; 参考单位 kg.

- 选定流：瓦楞运输纸箱
- 流属性/单位：Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- 数量规则：使用本行已唯一计算的 x_ih；以 cp_packaging 采未归一化原始分子。
- 数值来源模式：`calculated_value`
- 适用范围：`site_specific`
- 归一化基准：每 1 kg 参考流
- 基准类型：`reference_flow`
- 证据类型：`calculated_from_collection`
- 采集协议：`cp_packaging`
- 来源：`ilcd-general-2010`

###### LDPE 单顶安全帽包装袋 (`bag`)

实际外部取得，包含未发运成品包装；不得以消耗量替代采购或所有权转移。本流是一种真实供货 LDPE 包装袋及其所含添加剂。核实实际组成和供方边界；不重复采购所含组分。若实际存在胶带芯、离型层、其他材料或可重复托盘，均须另立原子行。不假定通用包装材料 UUID 能证明该器物。原生 Product/Mass 聚乙烯袋身份含 CAS9002-88-4、PE袋同义名和“生产混合，在工厂”，且地域为空；未指定袋牌号、LDPE或HDPE支类、厚度、构造、工艺路线或供方。仅在真实料袋或包装袋规格与供方匹配后用于受限定 PE 器物；不证明牌号或密度。返回与发运均保留同一实物器物，不产生新采购。 参考单位组: Units of mass `93a60a57-a4c8-11da-a746-0800200c9a66`; 参考单位 kg.

- 选定流：聚乙烯袋 `10647902-9822-4b06-bc95-f1f30f10c261`
- 流属性/单位：Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- 数量规则：使用本行已唯一计算的 x_ih；以 cp_packaging 采未归一化原始分子。
- 数值来源模式：`calculated_value`
- 适用范围：`site_specific`
- 归一化基准：每 1 kg 参考流
- 基准类型：`reference_flow`
- 证据类型：`calculated_from_collection`
- 采集协议：`cp_packaging`
- 来源：`ilcd-general-2010`

###### LDPE 单顶安全帽包装袋 (`bag_external_return_in`)

仅为该种可用器物真实从外部返回，保留原有负荷和所有权。本流是一种真实供货 LDPE 包装袋及其所含添加剂。核实实际组成和供方边界；不重复采购所含组分。若实际存在胶带芯、离型层、其他材料或可重复托盘，均须另立原子行。不假定通用包装材料 UUID 能证明该器物。原生 Product/Mass 聚乙烯袋身份含 CAS9002-88-4、PE袋同义名和“生产混合，在工厂”，且地域为空；未指定袋牌号、LDPE或HDPE支类、厚度、构造、工艺路线或供方。仅在真实料袋或包装袋规格与供方匹配后用于受限定 PE 器物；不证明牌号或密度。返回与发运均保留同一实物器物，不产生新采购。 参考单位组: Units of mass `93a60a57-a4c8-11da-a746-0800200c9a66`; 参考单位 kg.

- 选定流：聚乙烯袋 `10647902-9822-4b06-bc95-f1f30f10c261`
- 流属性/单位：Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- 数量规则：使用本行已唯一计算的 x_ih；以 cp_packaging 采未归一化原始分子。
- 数值来源模式：`calculated_value`
- 适用范围：`site_specific`
- 归一化基准：每 1 kg 参考流
- 基准类型：`reference_flow`
- 证据类型：`calculated_from_collection`
- 采集协议：`cp_packaging`
- 来源：`ilcd-general-2010`

###### BOPP 丙烯酸封箱胶带 (`tape`)

实际外部取得，包含未发运成品包装；不得以消耗量替代采购或所有权转移。本流是一种完整外购 BOPP 背材丙烯酸胶粘带制剂。核实实际组成和供方边界；不重复采购所含组分。若实际存在胶带芯、离型层、其他材料或可重复托盘，均须另立原子行。不假定通用包装材料 UUID 能证明该器物。 参考单位组: Units of mass `93a60a57-a4c8-11da-a746-0800200c9a66`; 参考单位 kg.

- 选定流：BOPP 丙烯酸封箱胶带
- 流属性/单位：Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- 数量规则：使用本行已唯一计算的 x_ih；以 cp_packaging 采未归一化原始分子。
- 数值来源模式：`calculated_value`
- 适用范围：`site_specific`
- 归一化基准：每 1 kg 参考流
- 基准类型：`reference_flow`
- 证据类型：`calculated_from_collection`
- 采集协议：`cp_packaging`
- 来源：`ilcd-general-2010`

###### BOPP 丙烯酸封箱胶带 (`tape_external_return_in`)

仅为该种可用器物真实从外部返回，保留原有负荷和所有权。本流是一种完整外购 BOPP 背材丙烯酸胶粘带制剂。核实实际组成和供方边界；不重复采购所含组分。若实际存在胶带芯、离型层、其他材料或可重复托盘，均须另立原子行。不假定通用包装材料 UUID 能证明该器物。 参考单位组: Units of mass `93a60a57-a4c8-11da-a746-0800200c9a66`; 参考单位 kg.

- 选定流：BOPP 丙烯酸封箱胶带
- 流属性/单位：Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- 数量规则：使用本行已唯一计算的 x_ih；以 cp_packaging 采未归一化原始分子。
- 数值来源模式：`calculated_value`
- 适用范围：`site_specific`
- 归一化基准：每 1 kg 参考流
- 基准类型：`reference_flow`
- 证据类型：`calculated_from_collection`
- 采集协议：`cp_packaging`
- 来源：`ilcd-general-2010`

#### 输出

##### 产品流

###### 安全头套 (`gross_helmet_dispatch`)

实际向外实物安全帽总量，包含再次发运，保留分去向记录和交付冲回账。分配负荷前保留完整实物发运质量。这是发运而非首次放行。原生 Product/Mass 身份为厂内生产混合的已制造安全头部防护成品；无固定材料、供应商、CAS、geography.locationOfSupply、性能、寿命或单件重量。官方中文基本名为“安全头套”。保留实际配置和历史质量状态；该 UUID 不使退回或不合格品重新合格。 参考单位组: Units of mass `93a60a57-a4c8-11da-a746-0800200c9a66`; 参考单位 kg.

- 选定流：安全头套 `89f91a82-ba76-46ea-b587-e5715c72630a`
- 流属性/单位：Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- 数量规则：使用本行已唯一计算的 x_ih；以 cp_fg 采未归一化原始分子。
- 数值来源模式：`calculated_value`
- 适用范围：`site_specific`
- 归一化基准：每 1 kg 参考流
- 基准类型：`reference_flow`
- 证据类型：`calculated_from_collection`
- 采集协议：`cp_fg`
- 来源：`ilcd-general-2010`

###### 瓦楞运输纸箱 (`carton_gross_shipped`)

随实物向外安全帽总发运离开的该器物完整质量，含再发运和旧成品发运；不得按经济分配或净退货扣减实物质量。本流是一种完整真实瓦楞纸箱及其供货纸板和胶粘构造。核实实际组成和供方边界；不重复采购所含组分。若实际存在胶带芯、离型层、其他材料或可重复托盘，均须另立原子行。不假定通用包装材料 UUID 能证明该器物。 参考单位组: Units of mass `93a60a57-a4c8-11da-a746-0800200c9a66`; 参考单位 kg.

- 选定流：瓦楞运输纸箱
- 流属性/单位：Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- 数量规则：使用本行已唯一计算的 x_ih；以 cp_packaging 采未归一化原始分子。
- 数值来源模式：`calculated_value`
- 适用范围：`site_specific`
- 归一化基准：每 1 kg 参考流
- 基准类型：`reference_flow`
- 证据类型：`calculated_from_collection`
- 采集协议：`cp_packaging`
- 来源：`ilcd-general-2010`

###### 瓦楞运输纸箱 (`carton_external_return_out`)

仅为该种可用器物独立于安全帽发运的真实对外返回，单列接收方、去向和所有权。本流是一种完整真实瓦楞纸箱及其供货纸板和胶粘构造。核实实际组成和供方边界；不重复采购所含组分。若实际存在胶带芯、离型层、其他材料或可重复托盘，均须另立原子行。不假定通用包装材料 UUID 能证明该器物。 参考单位组: Units of mass `93a60a57-a4c8-11da-a746-0800200c9a66`; 参考单位 kg.

- 选定流：瓦楞运输纸箱
- 流属性/单位：Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- 数量规则：使用本行已唯一计算的 x_ih；以 cp_packaging 采未归一化原始分子。
- 数值来源模式：`calculated_value`
- 适用范围：`site_specific`
- 归一化基准：每 1 kg 参考流
- 基准类型：`reference_flow`
- 证据类型：`calculated_from_collection`
- 采集协议：`cp_packaging`
- 来源：`ilcd-general-2010`

###### LDPE 单顶安全帽包装袋 (`bag_gross_shipped`)

随实物向外安全帽总发运离开的该器物完整质量，含再发运和旧成品发运；不得按经济分配或净退货扣减实物质量。本流是一种真实供货 LDPE 包装袋及其所含添加剂。核实实际组成和供方边界；不重复采购所含组分。若实际存在胶带芯、离型层、其他材料或可重复托盘，均须另立原子行。不假定通用包装材料 UUID 能证明该器物。原生 Product/Mass 聚乙烯袋身份含 CAS9002-88-4、PE袋同义名和“生产混合，在工厂”，且地域为空；未指定袋牌号、LDPE或HDPE支类、厚度、构造、工艺路线或供方。仅在真实料袋或包装袋规格与供方匹配后用于受限定 PE 器物；不证明牌号或密度。返回与发运均保留同一实物器物，不产生新采购。 参考单位组: Units of mass `93a60a57-a4c8-11da-a746-0800200c9a66`; 参考单位 kg.

- 选定流：聚乙烯袋 `10647902-9822-4b06-bc95-f1f30f10c261`
- 流属性/单位：Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- 数量规则：使用本行已唯一计算的 x_ih；以 cp_packaging 采未归一化原始分子。
- 数值来源模式：`calculated_value`
- 适用范围：`site_specific`
- 归一化基准：每 1 kg 参考流
- 基准类型：`reference_flow`
- 证据类型：`calculated_from_collection`
- 采集协议：`cp_packaging`
- 来源：`ilcd-general-2010`

###### LDPE 单顶安全帽包装袋 (`bag_external_return_out`)

仅为该种可用器物独立于安全帽发运的真实对外返回，单列接收方、去向和所有权。本流是一种真实供货 LDPE 包装袋及其所含添加剂。核实实际组成和供方边界；不重复采购所含组分。若实际存在胶带芯、离型层、其他材料或可重复托盘，均须另立原子行。不假定通用包装材料 UUID 能证明该器物。原生 Product/Mass 聚乙烯袋身份含 CAS9002-88-4、PE袋同义名和“生产混合，在工厂”，且地域为空；未指定袋牌号、LDPE或HDPE支类、厚度、构造、工艺路线或供方。仅在真实料袋或包装袋规格与供方匹配后用于受限定 PE 器物；不证明牌号或密度。返回与发运均保留同一实物器物，不产生新采购。 参考单位组: Units of mass `93a60a57-a4c8-11da-a746-0800200c9a66`; 参考单位 kg.

- 选定流：聚乙烯袋 `10647902-9822-4b06-bc95-f1f30f10c261`
- 流属性/单位：Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- 数量规则：使用本行已唯一计算的 x_ih；以 cp_packaging 采未归一化原始分子。
- 数值来源模式：`calculated_value`
- 适用范围：`site_specific`
- 归一化基准：每 1 kg 参考流
- 基准类型：`reference_flow`
- 证据类型：`calculated_from_collection`
- 采集协议：`cp_packaging`
- 来源：`ilcd-general-2010`

###### BOPP 丙烯酸封箱胶带 (`tape_gross_shipped`)

随实物向外安全帽总发运离开的该器物完整质量，含再发运和旧成品发运；不得按经济分配或净退货扣减实物质量。本流是一种完整外购 BOPP 背材丙烯酸胶粘带制剂。核实实际组成和供方边界；不重复采购所含组分。若实际存在胶带芯、离型层、其他材料或可重复托盘，均须另立原子行。不假定通用包装材料 UUID 能证明该器物。 参考单位组: Units of mass `93a60a57-a4c8-11da-a746-0800200c9a66`; 参考单位 kg.

- 选定流：BOPP 丙烯酸封箱胶带
- 流属性/单位：Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- 数量规则：使用本行已唯一计算的 x_ih；以 cp_packaging 采未归一化原始分子。
- 数值来源模式：`calculated_value`
- 适用范围：`site_specific`
- 归一化基准：每 1 kg 参考流
- 基准类型：`reference_flow`
- 证据类型：`calculated_from_collection`
- 采集协议：`cp_packaging`
- 来源：`ilcd-general-2010`

###### BOPP 丙烯酸封箱胶带 (`tape_external_return_out`)

仅为该种可用器物独立于安全帽发运的真实对外返回，单列接收方、去向和所有权。本流是一种完整外购 BOPP 背材丙烯酸胶粘带制剂。核实实际组成和供方边界；不重复采购所含组分。若实际存在胶带芯、离型层、其他材料或可重复托盘，均须另立原子行。不假定通用包装材料 UUID 能证明该器物。 参考单位组: Units of mass `93a60a57-a4c8-11da-a746-0800200c9a66`; 参考单位 kg.

- 选定流：BOPP 丙烯酸封箱胶带
- 流属性/单位：Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- 数量规则：使用本行已唯一计算的 x_ih；以 cp_packaging 采未归一化原始分子。
- 数值来源模式：`calculated_value`
- 适用范围：`site_specific`
- 归一化基准：每 1 kg 参考流
- 基准类型：`reference_flow`
- 证据类型：`calculated_from_collection`
- 采集协议：`cp_packaging`
- 来源：`ilcd-general-2010`

##### 废物流

###### 返工拆下的废悬挂组件 (`removed_suspension`)

仅实际允许的同原批次返工中拆下并送处理的完整旧悬挂组件；实测其净质量、含水、组成和去向，携带组件谱系但不重复叠加原帽已含历史向量。不是整帽 service_reject，也不复用新组件 Product UUID；真实可用件对外返还须另列具体产品方向而非假定废物。参考单位组: Units of mass `93a60a57-a4c8-11da-a746-0800200c9a66`; 参考单位 kg.

- 选定流：废安全帽悬挂组件
- 流属性/单位：Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- 数量规则：使用本行已唯一计算的 x_ih；以 cp_fg 采未归一化原始分子。
- 数值来源模式：`calculated_value`
- 适用范围：`site_specific`
- 归一化基准：每 1 kg 参考流
- 基准类型：`reference_flow`
- 证据类型：`calculated_from_collection`
- 采集协议：`cp_fg`
- 来源：`jsp-evo3-spec-2016`; `ilcd-general-2010`

###### 废弃已装配工业安全帽 (`service_reject`)

实际放行后损坏或退回后报废的安全帽，关联原批次与新增服务、重工负荷；不是另一次制造废品或负新增产量。 参考单位组: Units of mass `93a60a57-a4c8-11da-a746-0800200c9a66`; 参考单位 kg.

- 选定流：废弃已装配工业安全帽
- 流属性/单位：Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- 数量规则：使用本行已唯一计算的 x_ih；以 cp_fg 采未归一化原始分子。
- 数值来源模式：`calculated_value`
- 适用范围：`site_specific`
- 归一化基准：每 1 kg 参考流
- 基准类型：`reference_flow`
- 证据类型：`calculated_from_collection`
- 采集协议：`cp_fg`
- 来源：`ilcd-general-2010`

###### 废瓦楞运输纸箱 (`carton_waste`)

实际送往指定接收处理的废弃器物，污染物计入所含质量而不重复计量。本流是一种完整真实瓦楞纸箱及其供货纸板和胶粘构造。核实实际组成和供方边界；不重复采购所含组分。若实际存在胶带芯、离型层、其他材料或可重复托盘，均须另立原子行。不假定通用包装材料 UUID 能证明该器物。 参考单位组: Units of mass `93a60a57-a4c8-11da-a746-0800200c9a66`; 参考单位 kg.

- 选定流：废瓦楞运输纸箱
- 流属性/单位：Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- 数量规则：使用本行已唯一计算的 x_ih；以 cp_packaging 采未归一化原始分子。
- 数值来源模式：`calculated_value`
- 适用范围：`site_specific`
- 归一化基准：每 1 kg 参考流
- 基准类型：`reference_flow`
- 证据类型：`calculated_from_collection`
- 采集协议：`cp_packaging`
- 来源：`ilcd-general-2010`

###### 废LDPE 单顶安全帽包装袋 (`bag_waste`)

实际送往指定接收处理的废弃器物，污染物计入所含质量而不重复计量。本流是一种真实供货 LDPE 包装袋及其所含添加剂。核实实际组成和供方边界；不重复采购所含组分。若实际存在胶带芯、离型层、其他材料或可重复托盘，均须另立原子行。不假定通用包装材料 UUID 能证明该器物。 参考单位组: Units of mass `93a60a57-a4c8-11da-a746-0800200c9a66`; 参考单位 kg.

- 选定流：废LDPE 单顶安全帽包装袋
- 流属性/单位：Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- 数量规则：使用本行已唯一计算的 x_ih；以 cp_packaging 采未归一化原始分子。
- 数值来源模式：`calculated_value`
- 适用范围：`site_specific`
- 归一化基准：每 1 kg 参考流
- 基准类型：`reference_flow`
- 证据类型：`calculated_from_collection`
- 采集协议：`cp_packaging`
- 来源：`ilcd-general-2010`

###### 废BOPP 丙烯酸封箱胶带 (`tape_waste`)

实际送往指定接收处理的废弃器物，污染物计入所含质量而不重复计量。本流是一种完整外购 BOPP 背材丙烯酸胶粘带制剂。核实实际组成和供方边界；不重复采购所含组分。若实际存在胶带芯、离型层、其他材料或可重复托盘，均须另立原子行。不假定通用包装材料 UUID 能证明该器物。 参考单位组: Units of mass `93a60a57-a4c8-11da-a746-0800200c9a66`; 参考单位 kg.

- 选定流：废BOPP 丙烯酸封箱胶带
- 流属性/单位：Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- 数量规则：使用本行已唯一计算的 x_ih；以 cp_packaging 采未归一化原始分子。
- 数值来源模式：`calculated_value`
- 适用范围：`site_specific`
- 归一化基准：每 1 kg 参考流
- 基准类型：`reference_flow`
- 证据类型：`calculated_from_collection`
- 采集协议：`cp_packaging`
- 来源：`ilcd-general-2010`

## 7. 分配与共产品处理

| rule_id | Applies to | Rule | source_ids |
| --- | --- | --- | --- |
| allocation_scope | all processes | 仅在与研究目标和 ILCD 情景条件一致、确需分配的归因 LCA 中使用这些规则。具体为 ILCD 情景 C2，或 A/B/C1 中依据各自情景条款证明所要求的细分、虚拟细分、替代或系统扩展方案不可实现或不可行的案例；不能自由改用分配替代应执行的替代方案。产品功能比较和后果性替代不属本制造数据集。设备商工艺案例不是分配标准。 | ilcd-general-2010 |
| allocation_dedicated | all processes | 首先分离专属模塑、装配、测试与服务操作，并虚拟细分实际进入产品的材料及专用资源至自身产品或批次。优先采用独立计量。一个安全帽生产批次的壳料、外购悬挂和失败射次不得按总收入自由分摊。 | ilcd-general-2010 |
| allocation_causal | all processes | 对仍共享的交换逐一识别确定性物理因果，按实际情形采用能量需求、冷却负荷、机台占用与强度或仓储占用体积面积及时间。说明所提驱动为何决定该交换；吞吐质量或运行时间不自动适用于所有交换。保留专属启动、空转、清理与失败负荷，对共享停机采用真实因果范围。 | ilcd-general-2010 |
| allocation_residual | all processes | 仅当真正剩余的不可分交换无法识别确定性物理因果时，才可采用真实共功能在同一共同过程门、真实质量、数量、包装和物态下的同期市场价值。比较前扣除各产品后续专属包装、运输和服务价值。披露价格、敏感性和不确定性，不设固定比例，不任意选择物理或经济分配。所有接收者获分负荷之和等于原向量；实物交换仍保留总质量。 | ilcd-general-2010 |
| allocation_rework | all processes | 清洁内部回料保留身份、热史与继承向量，真实粉碎再熔融损失和能耗只计一次。废安全帽、料袋、返回包装、回收制冷剂及可售边角料不自动成为共产品或信用。主张回收分配须依据声明的方法证明真实共同过程、质量和下系统边界；否则保留实物转移与处理义务，不虚构替代信用。 | ilcd-general-2010 |
| asset_manufacture_conservation | 既有资本品及可复用制品制造归属 | 在适用的分配决策情境内，对前景生产、包装或已观察服务中已纳入的实际资本设备或可复用制品按用途归属原始制造负荷时，必须按同一资产建立跨全部作物、产品、批次、制造及放行后服务、所有者和观察期的持久台账。D为有证据支持的完整安装服务总量，即全部已实现历史服务加有依据的剩余服务，其单位须与各受益用途实际服务量u一致；D须为有限正值。当期容量、仅剩余容量、资产或制品自身实物质量以及仅当期产品Q均不能直接作为D；若有证据证明因果服务且与u单位相符，完整服务期的质量通量可用作分母。本规则不按下游寿命摊销本PCR制造的参考产品，也不改变其声明的参考门及Q。u/D与此前已分配的制造份额累计不得超过1。观察期、保管方、供方或维修变化不能重置原始制造负荷余额。替换件使用独立身份，仅计真实新增制造向量；实际维修和处理增量另行保留。服务容量证据修订时，应透明追溯调整既有份额并作敏感性分析，不得另起台账。完整实物质量及存量变动独立于负荷份额。D、既有份额或受益范围不明时须复核，不得给出最终制造负荷归属量；不得假定寿命、利用率、零值或任意分摊。 对本路线既有采集协议中按用途归属已纳入生产、包装或已观察服务资产制造负荷的情形（不摊销本PCR制造的参考产品本身），还须保留持久资产身份、实测完整实物质量及购入/安装/退役存量历史、原始制造负荷向量、全部历史及当前受益用途、同单位服务读数、有证据的完整安装服务分母D、剩余服务依据与不确定性、此前已分配份额及剩余原始制造负荷余额。台账跨观察期及保管方/供方变化持续结转。实际维修、替换、回收和处理分别采集；这些记录不能归一化实物流量或构成另一次资产购入。这些是既有适用协议的补充字段与守恒要求，不是新增假定的资本品清单。 |  |

## 8. 前景数据采集、计算与质量规则

### 数据采集协议

对本路线既有采集协议中按用途归属已纳入生产、包装或已观察服务资产制造负荷的情形（不摊销本PCR制造的参考产品本身），还须保留持久资产身份、实测完整实物质量及购入/安装/退役存量历史、原始制造负荷向量、全部历史及当前受益用途、同单位服务读数、有证据的完整安装服务分母D、剩余服务依据与不确定性、此前已分配份额及剩余原始制造负荷余额。台账跨观察期及保管方/供方变化持续结转。实际维修、替换、回收和处理分别采集；这些记录不能归一化实物流量或构成另一次资产购入。这些是既有适用协议的补充字段与守恒要求，不是新增假定的资本品清单。

先采集并保存全部未归一化原始观测、存量和历史向量。aggregation_rule 单元格仅标明最终报告结果的目的基准，不要求采集阶段相除。单位换算由 calc_raw 完成，真实归属和继承由 calc_attribution 完成，calc_reference 唯一执行 A_ih/Q_h 一次。所有卡的 x_ih 和汇总均引用这一存储结果，不追加除法。首次放行行的1千克是所声明参考数量，不是又一次采集或计算。

| protocol_id | process_id | flow_role | record_type | raw_fields | collection_method | unit | frequency | temporal_coverage | site_scope | aggregation_rule | quality_evidence |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| cp_release | manufacture | first_release; helmet_reject | 称重与首次放行追溯 | 配置；批次 h；单顶或批净质量；皮重；件数 N_h；首次放行事件；破坏试样质量；Q_h；废品质量 | 使用经校准秤称量冷却后验收完整安全帽并排除可拆卸包装；核对件数和唯一放行事件；试样与失败批次另列。 | kg | 逐批和逐放行事件 | 含零产出区间的完整生产批次 | 同一场址一种声明配置 | 每 1 kg 参考流 | 校准；签字验收；件数追溯；试样谱系 |
| cp_material | manufacture | hdpe_pellets; suspension; sweatband; chinstrap | 材料和部件接收使用账 | 器物身份；完整供货配方；供方批次；接收质量；期初期末存量；原始使用量；在制品与回料谱系；继承向量；供方包装范围 | 经校准净称重并核对 BOM、收货与领用存量及供货形态记录；保留组分子账而不重复取得。 | kg | 每次接收使用与存量变化 | 完整批次及继承存量历史 | 匹配制造门和供方关联 | 每 1 kg 参考流 | 供货规格；BOM；称重凭证；存量向量核对 |
| cp_energy | manufacture | production_electricity | 进口支路电量计量 | 电压；地域；供方；电表起止；原始千瓦时；支路负荷；空转与失败负荷；配电损失；共享驱动 | 采集所有制造操作和公用设备进口、支路校准电表；核对中国低于1千伏真实供电；识别真实损失与共享归属。 | kWh; MJ | 每计量区间和生产批次 | 含清理停机的完整批次 | 声明制造进口门 | 每 1 kg 参考流 | 仪表证书；接线门图；区间覆盖；核对 |
| cp_water | manufacture | cooling_makeup; external_cooling_supply; cleaning_water; external_cooling_return; cooling_blowdown; wash_effluent | 独立水回路和废液账 | 物种与水质；质量或积分体积；真实速率和时间区间；独立密度与状态；回路期初期末存量；供水回水状态；总回流；蒸发；漂移；排污；接收处理；供方水能约定 | 采用校准衡器或水表，涉及换算时取得真实温压和独立密度；分列回路、清洗、出口及真实对外返回；不假定蒸汽。 | kg; m3; temperature; pressure | 每区间与存量变化 | 含设备期初期末水量的完整批次 | 真实独立水回路与接收处理 | 每 1 kg 参考流 | 校准；水回路图；独立密度状态；接收与供方记录 |
| cp_aux | manufacture | hydraulic_oil; cleaning_wipe; r134a_charge; recovered_r134a | 设备耗材充注账 | 单种化学品或器物；完整供货配方；设备号；期初期末充注；采购；回收对外返回；损失；真实服务归属 | 称量真实装填、回收和使用量并独立核对设备存量；区分存量转移与消耗；记录真实化学品及状态。 | kg | 每装填服务回收事件 | 完整批次及继承设备历史 | 声明场址门内实际设备 | 每 1 kg 参考流 | 供方 SDS 与规格；称重；设备日志；回收联单 |
| cp_waste | manufacture | hdpe_scrap; spent_oil; used_wipe | 分选废物实物转移 | 具体器物；材料组成；原批次；质量；所含组分；危险性；接收方；存量；真实处理边界 | 称量每项独立外运废物，核对存量和所含组成而不重复处置子组分。 | kg | 每次转移 | 完整批次及暂存废物 | 各真实接收方和制造门 | 每 1 kg 参考流 | 称重凭证；转移联单；组成分析；处理匹配 |
| cp_species | manufacture | water_vapour; pe_dust; n_butane; r134a_air | 物种释放证据 | 单一物质；适用 CAS；粒径分布；相态；室外介质；浓度；积分体积或真实速率；状态修正；充注或回路期初期末存量；独立不确定性 | 采用物种特定采样及校准积分流量，或对真实速率按记录时间积分；区分捕集与排放；诚实评估未检出和未知物种；不取 IFC 通用因子。 | kg; measured concentration and volume units | 真实运行空转清理和异常事件 | 完整观察批次 | 特定设备出口和接收介质 | 每 1 kg 参考流 | 分析方法；检出限；流量校准；介质与不确定性 |
| cp_fg | supply_services | released_transfer; returned_helmet; repair_suspension; removed_suspension; gross_helmet_dispatch; service_reject | 成品退货批次账 | 原 h；原 Q_h；原逐交换总历史向量及拆旧件谱系；期初期末裸帽、服务返工在制、补件和水互斥存量；新增内部放行；其他内部转移；总实物发运及外退；原交付关联；逐新补件及其上游新增；逐拆旧件去向；实测净质量、含水和状态；真实废液蒸发物种；实际验收依据；区间 | 按原批次核对每次移动的件数、实测质量和状态，并闭合 boundary_service 扩展等式。新补件和拆旧件分别称量逐列原子卡；未知去向或无依据返工阻塞定量包。原历史总向量及组件子谱系只保留一次，真实新增服务及上游负荷另账；复验、换件、含水变化和重发均不创造新 Q_h。 | kg; count | 每次移动与区间末 | 真实服务区间和原放行历史 | 声明仓库与发运边界 | 每 1 kg 参考流 | 交付退货凭证；盘点；原放行和向量追溯 |
| cp_service_energy | supply_services | service_electricity | 独立新增服务计量 | 批次 h；原 Q_h；观察区间；原始千瓦时；包装仓储搬运及实际允许返工负荷；空转；共享因果驱动；进口门损失 | 真实新增服务电量与制造分开计量；逐交换因果分派至原批次，包含未发运存量。 | kWh; MJ | 每服务区间 | 真实观察服务时长 | 声明服务账和真实中国低于1千伏供电门 | 每 1 kg 参考流 | 仪表范围记录；共享归属；不重叠核对 |
| cp_feed_packaging | manufacture | each resin sack | 单种器物分向包装账 | 包装器物与组成；供方已含；所有权；原批次；期初空包装；附着在制品；附着成品；可复用存量；外部取得；外部返回收到；期末对应存量；向外总发运；对外返回；废物；接收方 | 逐单种器物称重，按方向和去向分别核对接收、领用、存量、发运、返回和废物记录。实物质量不因负荷分配改变；不重复上游已含制造。 | kg | 每次实物移动与期末 | 完整制造和实际匹配批次服务区间 | 每种器物每个声明外部门 | 每 1 kg 参考流 | 器物称重；供方边界；存量移动记录；废物和返回接收证明 |
| cp_packaging | supply_services | each resin sack; each carton; each helmet bag; each tape article | 单种器物分向包装账 | 包装器物与组成；供方已含；所有权；原批次；期初空包装；附着在制品；附着成品；可复用存量；外部取得；外部返回收到；期末对应存量；向外总发运；对外返回；废物；接收方 | 逐单种器物称重，按方向和去向分别核对接收、领用、存量、发运、返回和废物记录。实物质量不因负荷分配改变；不重复上游已含制造。 | kg | 每次实物移动与期末 | 完整制造和实际匹配批次服务区间 | 每种器物每个声明外部门 | 每 1 kg 参考流 | 器物称重；供方边界；存量移动记录；废物和返回接收证明 |

### 计算规则

| rule_id | Applies to | Formula or rule | Inputs | Output | source_ids |
| --- | --- | --- | --- | --- | --- |
| calc_raw | all inventory rows | 每项原始测量在分配前换至行单位。积分体积已是总量；仅真实速率再积分。体积换千克须采用物质特定独立密度和状态。电力千瓦时换 MJ 精确乘3.6。保留原值与换算。 | raw_measurements; unit_conversions; density_state | raw_row_totals | ifc-plastic-products-2007 |
| calc_attribution | all inventory rows | 在声明批次门，依据 raw_row_totals 与继承交换向量确定每个未归一化 A_ih。核对材料、在制品期初期末；保留失败、空转、清理和重工负荷；按第7节先专属再因果及剩余分配。成品服务账与设备水、充注账不重叠。继承历史保持原单位和原 Q_h，不重复相除或随废物删除。 | raw_row_totals; inherited_exchange_vectors; stock_ledgers; allocation_records | A_ih | ilcd-general-2010 |
| calc_reference | all inventory rows | 当 Q_h>0 时 x_ih = A_ih / Q_h；A_ih 为原批次 h 归属原始交换分子，Q_h 为其唯一首次放行净千克。仅执行这一次报告除法，所有卡与协议汇总引用同一 x_ih。Q_h=0 保留原始负荷而不输出单位结果；参考 first_release 为1千克。服务结果保留原批次 Q_h 和单列真实区间。 | A_ih; Q_h; cp_release; cp_fg | x_ih | ilcd-general-2010 |
| calc_physical | all processes | 在未分配实物基础上，制造门：期初原料与裸在制品+独立回路和油剂充注存量+实际外部物质输入=新增首次放行 Q_h+期末原料与裸在制品+期末对应回路和充注存量+每种真实对外产品回流、废物、物种排放。Q_h 已含本批期末成品，不再相加。包装独立逐器物平衡并排除在裸产品和裸在制品质量之外；能量不是质量项。服务门使用 boundary_service 的成品等式，合并门抵消内部转移。按实测组成独立核对相关元素；偏差与不确定性明确保留。 服务修理逐列真实补入、拆旧、物种和含水改变，服务返工在制及维修材料/水存量与制造在制互斥；不能以原帽质量强制修后实物不变。 | cp_material; cp_release; cp_water; cp_aux; cp_species; cp_waste; cp_fg; cp_feed_packaging; cp_packaging | unallocated_physical_balances | ifc-plastic-products-2007; ilcd-general-2010 |
| asset_manufacture_share | 既有资本品及可复用制品制造归属 | 仅在持久台账核实有依据的完整安装服务分母、全部受益用途及既有已分配份额后，对每项已纳入原始资产制造向量B计算f_current = u_current / D。在既有单次参考量归一化前，将f_current * B仅一次归属于实际受益用途。检查prior_shares加全部当前/新增受益用途份额不超过1，并结转剩余原始余额。容量修订须追溯核对历史台账。完整实物资产/包装质量及实际总存量/退回量不得乘f_current。D或历史不明时，最终归属结果保持不可用，但仍保留实际维修、替换及服务负荷。 | asset_id; original_B; u_current; D; historical_beneficiaries; prior_shares; capacity_evidence | 守恒的制造负荷归属向量 |  |

### 数据质量要求

| requirement_id | Applies to | Requirement | Evidence |
| --- | --- | --- | --- |
| dq_identity | all inventory rows | 提供真实物理身份、原生限制及供方边界匹配；区分一般辅流 UUID 缺口与缺失终端、路线或基准。 | 完整原生记录；供方规格；适用性判定 |
| dq_coverage | all processes | 覆盖含零产出的完整批次与真实服务区间；保留旧批次及每个继承交换向量与分母。 | 完整记录；谱系；存量和向量核对 |
| dq_measurement | all inventory rows | 保留校准、单位状态换算、原始数据、缺失、未检出与不确定性；不以公开特定型号默认替代未知。 | 校准；原始记录；换算和不确定性文件 |
| dq_no_approval | first_release | 声明真实配置、图纸、质量标准及可用独立测试证据。文献实例与工程校验不批准符合性或科学方法。 | 图纸；验收依据；真实测试；明确限制 |

## 9. 校验规则

| rule_id | Applies to | Rule | source_ids |
| --- | --- | --- | --- |
| validate_identity | all inventory rows | 绑定 UUID 前确认每个真实器物、制剂或物种及边界。保留原生全部名称限定、供货形态、CAS、路线、完整 flowInformation 地域、类型、参考属性序号与所有次级属性；名称或分类命中不足以证明身份。Product、Waste、Elementary 及空气介质差异保持独立。未绑定辅流保留准确原子身份和供方证据要求。 | ifc-plastic-products-2007 |
| validate_reference | first_release | 要求真实整帽配置、首次放行质量追溯和独立件数核对；未装配壳体或悬挂不能作终端参考。真实质量与认证证据由数据生产者提供。公开实例的质量、焦耳值、装箱件数、供应商声称或他型号证书均不证明本器物符合性或寿命。 | jsp-evo3-spec-2016; vitoppe-helmet-manufacturing |
| validate_balance | all processes | 总质量与相关元素存量核对须独立于实测化学物种。材料和在制品、成品、水回路、设备充注与每种包装分别不重叠记账。制造门 Q 已含新增期末成品；服务门保留总发运与退货；合并门抵消内部转移。解释不确定性，不以虚构物种、反应水或损失比例强制闭合。 | ifc-plastic-products-2007; ilcd-general-2010 |
| validate_raw_once | all inventory rows | 保留原始仪表和称重记录及原单位，正确转换真实速率与积分体积，分配未归一化交换向量，仅执行 calc_reference 一次。采集汇总和卡数量仅引用同一次结果。每个旧批次和继承向量保留原 Q_h；Q_h=0 保留真实负荷而不输出单位结果。工程检查不构成科学、翻译或实际工厂批准。 | ilcd-general-2010 |
| validate_complete | all processes | 定量数据集完成前解决真实缺失操作、供货配方、辅料、出口去向、物种介质、历史向量和不确定性。不得将真实未知标作零或为满足检查器而排除。核心终端、路线或基准失败阻止适用；单一辅流 UUID 缺口不使方法变成另一产品。 | ifc-plastic-products-2007 |
| validate_asset_manufacture_conservation | 既有资本品及可复用制品制造归属 | 对每项已纳入资本品/可复用制品制造归属，检查同一资产连续性、同单位完整安装服务、全部历史及当前受益用途、既有已分配制造份额和累计份额不超过1。拒绝按观察期、批次、供方、所有者或维修重置。真实替换件及维修/处理增量向量分别核对，保留完整实物质量。分母缺失、既有分配无法解释或受益台账不完整时，须明确复核且最终归属量不可用；结构检查不能声称已获实测完整性。 |  |

## 10. 发布数据集画像

| 字段 | 值 |
| --- | --- |
| dataset_role | secondary_dataset; background_dataset |
| downstream_use | 匹配配置和上游边界的生产数据；制造与实际服务区间分别标注 |
| allowed_use | 适用性核对后的归因工业安全帽供应建模；继承不确定性 |
| excluded_use | 认证、保护功能等效、寿命推断、其他聚合物路线、后果性信用及把旧品当新增产量 |
| required_metadata | 实际型号和完整配置; HDPE 完整供货牌号及颜色稳定体系; 单射未发泡未增强路线; 悬挂采购组成及匹配与固定配置; 实际另供吸汗带和下颏带是否已包含; 验收图纸测试与真实符合性证据; 首次放行净质量及独立件数; 原批次和原 Q_h; 期初期末材料在制品与逐交换继承向量; 内部回料热史与谱系; 成品存量退货原交付及新增重工关联; 制造门与真实服务区间; 中国低于1千伏进口门与供方损失边界; 水回路及设备充注存量和真实回水状态; 每种包装的完整分向实物账; 物种粒径相态接收介质与不确定性; 场址期间与归因分配情景 |
| required_quality_disclosure | 原始数据覆盖、物种与供方缺口、历史向量、全部分向包装、分配依据、不确定性及独立审批状态 |
| update_trigger | 配置、供货形态、材料、工艺、质量门、地域电压、真实物种、供应边界或方法情景变化 |

## 11. 数据源

| Source id | Type | Reference | Used for |
| --- | --- | --- | --- |
| vitoppe-helmet-manufacturing | handbook | https://vitoppe.com/how-to-manufacture-custom-safety-helmets-the-ultimate-oem-odm-guide-for-global-buyers-by-vitoppe/ | 制造商一手 OEM 工艺叙述：原生粒料至注塑壳体、悬挂装配和包装；不采用认证或数值默认。 |
| jsp-evo3-spec-2016 | handbook | https://docs.jsp.co.uk/head_protection/issued/TS-EVO3_MIDPEAK_NONVENT_WHEEL_MINERS_V1.pdf | 2016年11月21日 V7 EVO3 矿用型技术规格完整第1–2页：HDPE 壳体、悬挂和吸汗带组成实例及可选件与限制；不转移该型号质量或性能。 |
| huarong-helmet-case-2025 | literature | https://www.huarong.com.tw/page/news/en/company_news/detail/148/ | 2025年7月16日设备供方头盔案例：冷却、缺陷、附件注塑背景及相邻两射包边反例；不作配方或通用产能、成品率、能耗声明。 |
| ifc-plastic-products-2007 | official_guidance | https://www.ifc.org/content/dam/ifc/doc/2000/2007-metal-plastic-rubber-products-ehs-guidelines-en.pdf | 2007年4月30日第9–11及21–23页含表4和相邻反应路线：非反应粒料熔融、模塑、冷却以及潜在排放、真实水和废物清单；无排放因子或 LCA 分配依据。 |
| ilcd-general-2010 | official_guidance | https://eplca.jrc.ec.europa.eu/uploads/ILCD-Handbook-General-guide-for-LCA-DETAILED-GUIDANCE-12March2010-ISBN-fin-v1.0-EN.pdf | 2010年3月首版§§7.9.2–7.9.3印刷255–272页/PDF275–292页，仅归因且确需分配情景：细分、虚拟细分后逐交换确定性物理因果及剩余共同门市场价值；保留服务和回收限制。 |
