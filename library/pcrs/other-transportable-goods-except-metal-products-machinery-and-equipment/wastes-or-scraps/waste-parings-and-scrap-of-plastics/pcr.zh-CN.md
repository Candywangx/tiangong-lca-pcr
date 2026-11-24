---
pcr_id: pcr.other-transportable-goods-except-metal-products-machinery-and-equipment.wastes-or-scraps.waste-parings-and-scrap-of-plastics
language: zh-CN
sync_with: pcr.en-US.md
status: candidate
content_maturity: authored_methodology
translation_status: aligned
---

# 独立压包的LDPE流延膜生产修边供料

## 1. 范围与适用性

本方法仅涵盖一种已知LDPE供货配方的原色、无印刷无涂层、单层非泡沫流延膜生产柔性切边料。源制造从实际接收颗粒开始，经历实际输送、熔融过滤、平模头成膜、冷却辊冷却及切边；接着独立收集、必要干式分选、真实输送和冷压绑扎，到接收方特定规格下首次质量放行的供料。参考料未清洗、未粉碎、未团聚、未再造粒。保留真实添加剂、污染物及水分检验，不能凭“洁净”假定纯LDPE或绝对干燥。

LYB的流延切边系统、Greenview的生产边料买方界面和BOA的压实设备共同支持透明技术综合，不是同一个SKU、工厂或当代订单。不转用产量、配方、默认密度、污染比例或回收信用。ReMA A/B级明确指商业使用后的膜，不能用于本消费前边料的验收证明。排除新膜作为参考、原生/再生粒料、消费后膜、多聚合物/多层/涂层/印刷混流、整合格制品、启动清机料、已清洗/粉碎/热团聚/再造粒及化学解聚的新终端和危废混流。

本规则限需要分割的归因研究。法律废物/副产品状态及真实接收认可分别证实；名称、UUID或回收去向均不能证明零历史负荷或自动避免产品信用。参考商品及中间边条身份保持未绑定：通用原材料聚乙烯记录不能证明已成膜的生产边料或验收回收交接。新膜、农膜、收集的包装废物和挤出加工服务也不能证明本商品身份。保留确切实物名称及待决UUID，直至核实兼容原生记录。

`lyb-film-extrusion`; `boa-plastic-baling`; `greenview-ldpe-scrap`; `rema-plastics-2026`; `ilcd-handbook-2010`

冻结的2025年6月CPC条文列明39270；2026年10月说明将其关联HS 2022品目3915。第39章注6–7排除已经转为初级形状的单一热塑性塑料。因此本方法排除粒料及初级形状碎片（34710）、合格可售薄膜卷（36330），亦排除橡胶废料/旧轮胎（39250/39260）、木残余物（39281–39283）、使用后包装及混合/多层路线。此限定范围的较窄映射已通过独立审阅，见 docs/adr/2026-11-21-accept-cpc-39270-baled-ldpe-cast-film-edge-trim.md。回收商实际正价采购与客户保有物权的委托再加工是不同物权历史；本方法选择未加工废料的首次供料，不选择后续粒料或委托服务。调拨与转售不新增生产。外包操作者、物权变化、实物接收和唯一首次放行均须由源头至接收方关联记录核实。

`unsd-cpc3`; `wco-hs39-2022`; `3g-scrap-interface`; `rpi-scrap-interface`

## 2. 产品类别识别

| 字段 | 值 |
| --- | --- |
| canonical_pcr_id | pcr.other-transportable-goods-except-metal-products-machinery-and-equipment.wastes-or-scraps.waste-parings-and-scrap-of-plastics |
| classification_refs | CPC 3.0:39270，已接受限定范围的较窄映射，见 docs/adr/2026-11-21-accept-cpc-39270-baled-ldpe-cast-film-edge-trim.md |
| covered_products | 单一已知LDPE流延膜来源的未处理生产边条供料 |
| excluded_products | 消费后或其他聚合物混流；新膜/粒料；清机料；洗碎造粒/化学解聚新终端 |
| representative_product | 独立压包的LDPE流延膜生产修边供料 |
| production_route | 接收颗粒至电驱流延切边，再干式隔离及冷压包首次放行 |
| market_state | 独立验收的未洗未碎消费前柔性LDPE边条压包；实际移交状态 |

## 3. 参考流

| 字段 | 值 |
| --- | --- |
| What | 提供可接收的已知来源LDPE修边供料 |
| How much | 1 kg 净供料 |
| How well | 实际接收方约定组成/洁净/含水/形态/压包完整性及法律移交要求 |
| How long or cycle | 一次首次质量放行；后续服务随原批次Qc |
| reference_flow_link | released_trim |

| 字段 | 值 |
| --- | --- |
| Reference amount | 1 |
| Reference product flow | 压包未加工LDPE流延膜修边供料 |
| Reference flow property | Mass `93a60a56-a3c8-11da-a746-0800200b9a66` |
| Reference unit group | Units of mass `93a60a57-a4c8-11da-a746-0800200c9a66` |
| Reference unit | kg |
| 必需限定信息 | 已知LDPE牌号及完整供货配方; 实际添加剂和污染物检验; 单层非泡沫非增强无支撑无涂层无印刷薄膜来源; 电驱平模头冷却辊流延路线; 消费前切边来源及源批次; 未清洗未粉碎未团聚未再造粒的柔性条带状态; 无自由流动液体及实测滞留水分; 原色隔离及实际接收方洁净限值; 确切冷压包及绑丝规格; 法律移交状态及接收认可; 来源制造分配及逐流继承向量; 唯一首次放行及冲回链接; 地理和期间; 实际供电电压及供应边界; 冷却回路及实际水状态; 原料/WIP/FG期初期末库存; 每种包装及复用历史; 实物毛外运量和独立原批次服务 |

构建数据包必须在元数据、过程/参考备注或等效字段逐项声明限定信息。首次放行净物料Q含实际滞留水/添加剂，但排除绑丝/标牌/容器；水及固体子账独立。kg不保证功能等价或法定产品身份。

## 4. 计量与单位规则

| rule_id | Applies to | Required property | Required unit | Rule |
| --- | --- | --- | --- | --- |
| reference_mass | reference product | Mass `93a60a56-a3c8-11da-a746-0800200b9a66` | kg | 1千克首次质量放行的供料净质量；cp_release校准称重，扣实际包装皮重；不得把期末同批FG再加为产量。 |
| raw_units | all inventory rows | actual reference property | declared row unit | 采未归一化原数。真实速率先积分；已积分体积不再乘时间。kWh×3.6=MJ；L×0.001=m3；t×1000=kg；分配后仅执行report_once一次。 |
| material_states | all physical ledgers | Mass / Volume | kg / m3 | 水分、聚合物、真实污染物和氧化物种独立测量；不用一个残差拟合两个未知。液压油Volume/m3转质量需同制剂/温度独立实测密度；不得套水密度或原生次级换算推密度。 |

电表采集的是Energy电能数量，不是燃料热值测量。采用的原生电力记录明确引用净热值属性 `93a60a56-a3c8-11da-a746-0800200c9a66`；Energy `f6811440-ee37-11de-8a39-0800200c9a66` 是另一属性。二者均引用能量单位组 `93a60a57-a3c8-11da-a746-0800200c9a66`，其中MJ为参考、kWh为3.6 MJ。相同单位不能证明供方属性；使用前复核实际供方记录。

## 5. 系统边界

### 边界概化

| 字段 | 值 |
| --- | --- |
| declared_starting_condition | 实际已知LDPE颗粒接收，链接一次上游树脂制造 |
| starting_condition_role | 制造和负荷移交事实，不是零历史废物截断 |
| product_classification_scope | CPC3.0:39270的更窄已知来源LDPE切边供料 |
| recursive_input_rule | 原料/WIP期初期末及每个中间/返回批次携带完整逐流继承向量。外部同类边料须在移交前具备真实源状态/历史及有依据分配；不递归复制PCR或自动废物截断。内部移交抵消实物和账务但不能销毁历史负荷。 |
| upstream_dataset_requirement | 包括实际LDPE颗粒至流延成膜切边、源收集、隔离及必要冷压供料。原树脂上游生产链接一次；不能采购成品压包代替制造，也不能在边料移交重复历史。膜卷专属卷绕/卷芯增量独立归膜卷。 |
| disclosure | 源制造/分配；实际接收状态；WIP/FG逐流向量；Q与V；全部物种/包装及服务截点 |

| rule_id | applies_to | rule | source_ids |
| --- | --- | --- | --- |
| b_origin | source manufacturing | 包括实际LDPE颗粒至流延成膜切边、源收集、隔离及必要冷压供料。原树脂上游生产链接一次；不能采购成品压包代替制造，也不能在边料移交重复历史。膜卷专属卷绕/卷芯增量独立归膜卷。 | `lyb-film-extrusion`; `ilcd-handbook-2010` |
| b_gate | first release | Q为必要准备及接收方特定验收后新首次放行物料净量。同批期末FG已含于Q。复验、发运及链接旧返回不新增Q。真正放行撤销须连同整向量对唯一批次冲回一次；恢复不能多造原产量。保留真实新增返工。 | `boa-plastic-baling`; `greenview-ldpe-scrap`; `ilcd-handbook-2010` |
| b_complete | all stages and states | 保留接收、实际搬运/输送、加热/冷却、负向分选、压实、绑扎、验收、维护及废物移交，包含启动、停机、待机、失败、清理、返工和Q=0期。条件性缺席须证据。每种真实清洁剂、配方助剂、燃料、冷媒、包装、残渣和排放物种另列原子卡，不能藏于其他物料零值或集合。 | `lyb-film-extrusion`; `boa-plastic-baling`; `greenview-ldpe-scrap`; `ilcd-handbook-2010` |
| b_cooling | actual water/energy interface | 选定流延路线有真实冷却辊及实测厂内循环/制冷；循环不是新增供应。若冷却跨外部Product边界，另建真实入口及Product返回卡，记录组成质量、温压、进出焓及供方水/能/净服务约定，避免水生产和冷却能耗重复。不假设蒸汽、凝结水或锅炉。真实其他供应需补路线证据。 | `lyb-film-extrusion` |
| b_history | stocks and recursive inputs | 原料/WIP期初期末及每个中间/返回批次携带完整逐流继承向量。外部同类边料须在移交前具备真实源状态/历史及有依据分配；不递归复制PCR或自动废物截断。内部移交抵消实物和账务但不能销毁历史负荷。 | `ilcd-handbook-2010` |
| b_service | postrelease original cohorts | 首次放行后仓储、包装修复、搬运、装载、返回及返工增量按原批次保留。Qc为原批首次放行量；搬运次数H及毛外运V是服务/实物观察，不能成新生产分母。旧FG不能归入本期新Q；期末FG保留原制造向量及实际服务增量。 | `ilcd-handbook-2010` |

## 6. 过程清单结构

### 过程图

| process_id | process_name | inclusion | inclusion_condition | role | quantitative_reference |
| --- | --- | --- | --- | --- | --- |
| cast_origin | LDPE流延膜制造及切边形成 | required | 实际选定路线或发生的原批次服务 | foreground | 首次供料Q；共同制造与原Qc服务分账 |
| trim_supply | 隔离边料准备及首次放行 | required | 实际选定路线或发生的原批次服务 | foreground | 首次供料Q；共同制造与原Qc服务分账 |
| fg_service | 原批次成品库存服务 | required | 实际选定路线或发生的原批次服务 | foreground | 首次供料Q；共同制造与原Qc服务分账 |

卡片为最小原子集合，不证明某项必然发生或清单已完整。相同配方的真实采购只记一次；所有内部收发按源批次保留并在合并时抵消。整件/整份混合物量与成分来源分区不可叠加且只用一个真实供方。每张非参考卡只呈现report_once的同一次结果，原始实物V、库存及组分账从不因负荷份额而缩减。

### 过程：LDPE流延膜制造及切边形成 (`cast_origin`)

#### 输入

##### 产品流

###### 低密度聚乙烯粒料（PE-LD） (`resin`)

实际整份已知LDPE粒料配方只采购一次。原生Product/Mass/kg限定低密度粒料，但没有CAS、牌号、添加剂配方、路线或地域。需实际兼容供方；成分分析是子账而非再采购。树脂形成由兼容上游数据表示，随后在此记录真实流延制造。

- 选定流：低密度聚乙烯粒料（PE-LD） `4f19f116-7b3b-11dd-ad8b-0800200c9a66`
- 流属性/单位：Mass / kg
- 数量规则：呈现已按所定基准计算的归属数量；此处不再归一化。
- 数值来源模式：前景记录 (`foreground_record`)
- 适用范围：场址特定 (`site_specific`)
- 归一化基准：每 1 kg 参考流
- 基准类型：过程输出 (`process_output`)
- 证据类型：采集记录 (`collected_record`)
- 采集协议：`cp_material_cast`
- 来源：`lyb-film-extrusion`

###### 电力，交流电 (`cast_power`)

原生Product限定中国、到用户的电网平均消费组合、低于1 kV交流电、参考属性净热值/MJ。不能替换成纯水电、发电端或中压。核对实际场址/年份/供方边界；变压及配电增量只计一次。计量包括冷却及失败批次在内的所有运行状态，分配前将kWh换成MJ。

- 选定流：电力，交流电 `50657322-939c-4829-a87b-47c093bfa6a7`
- 流属性/单位：Net calorific value / MJ
- 数量规则：呈现已按所定基准计算的归属数量；此处不再归一化。
- 数值来源模式：前景记录 (`foreground_record`)
- 适用范围：场址特定 (`site_specific`)
- 归一化基准：每 1 kg 参考流
- 基准类型：过程输出 (`process_output`)
- 证据类型：采集记录 (`collected_record`)
- 采集协议：`cp_energy_cast`
- 来源：`lyb-film-extrusion`

###### 自来水 (`water`)

条件性实际处理过的市政补水，用于实测厂内冷却回路及设备清洁。原生Product/Mass/kg，为饮用/公共供水且当地处理可变，没有固定水源或地域。原生第二体积属性不充当默认密度。内部循环不作新增投入，不假设洗膜。原始账分开补水、清洁及其他用途；冷却能源供方不得再重复水生产。

- 选定流：自来水 `d1e0e36c-07f0-4a75-bdcb-efb5d9e2ac36`
- 流属性/单位：Mass / kg
- 数量规则：呈现已按所定基准计算的归属数量；此处不再归一化。
- 数值来源模式：前景记录 (`foreground_record`)
- 适用范围：场址特定 (`site_specific`)
- 归一化基准：每 1 kg 参考流
- 基准类型：过程输出 (`process_output`)
- 证据类型：采集记录 (`collected_record`)
- 采集协议：`cp_water`
- 来源：`lyb-film-extrusion`

###### 硅润滑脂制剂 (`silicone_grease`)

条件性挤出机维护用实际整份润滑脂。识别供货配方中的油、稠化剂、添加剂及兼容供方；不借用蜡-溶剂润滑剂，不再采购其中成分。实际其他清洁剂或清机配方须另建卡片。

- 选定流：硅润滑脂制剂
- 流属性/单位：Mass / kg
- 数量规则：呈现已按所定基准计算的归属数量；此处不再归一化。
- 数值来源模式：前景记录 (`foreground_record`)
- 适用范围：场址特定 (`site_specific`)
- 归一化基准：每 1 kg 参考流
- 基准类型：过程输出 (`process_output`)
- 证据类型：采集记录 (`collected_record`)
- 采集协议：`cp_material_cast`
- 来源：`lyb-film-extrusion`

###### 金属丝网 (`screen`)

实际一种供货钢质过滤网制品，按实测组成和服役历史记录。整件滤网是一个实物；废滤网上残留聚合物是整出口的来源分区。复用制造负荷按持久资产账，不每周期再采购整件。 原生Product/Mass/kg为工厂端互锁编织或焊接金属丝网；钢、不锈钢、铝及镀锌举例不能作为合金选择器。仅用实际已知钢质熔体过滤网制品，供方合金、孔径、网组结构、路线及地域仍须测量/核实，不能以钢板替代。

- 选定流：金属丝网 `f225c346-5bf4-489e-9342-9e1dcedca6ae`
- 流属性/单位：Mass / kg
- 数量规则：呈现已按所定基准计算的归属数量；此处不再归一化。
- 数值来源模式：前景记录 (`foreground_record`)
- 适用范围：场址特定 (`site_specific`)
- 归一化基准：每 1 kg 参考流
- 基准类型：过程输出 (`process_output`)
- 证据类型：采集记录 (`collected_record`)
- 采集协议：`cp_material_cast`
- 来源：`lyb-film-extrusion`

###### 圆纸筒 (`core`)

条件性用于独立合格膜卷的实际卷芯。保留完整卷芯质量及组分库存；细分将膜卷专属包装负荷归膜卷，不自动归修边料。已含于上游的供方包装不再采购。 原生Product/Mass/kg为工厂端圆柱纸板管/芯，没有固定涂层、胶、牌号、强度、尺寸或地域。核实实际无涂层卷芯及已含组分/供方；不假设单件质量。

- 选定流：圆纸筒 `78bf7f6e-519e-4b3d-82f0-eda15b2fee61`
- 流属性/单位：Mass / kg
- 数量规则：呈现已按所定基准计算的归属数量；此处不再归一化。
- 数值来源模式：前景记录 (`foreground_record`)
- 适用范围：场址特定 (`site_specific`)
- 归一化基准：每 1 kg 参考流
- 基准类型：过程输出 (`process_output`)
- 证据类型：采集记录 (`collected_record`)
- 采集协议：`cp_pack_cast`
- 来源：`lyb-film-extrusion`

##### 废物流

##### 基本流

###### 氧气 (`oxygen`)

条件性熔体暴露、启停及清洁中经独立证实的氧化耗氧。通风空气体积不是耗氧量。保留实际物种及C/H/O平衡；不能用一个残差同时拟合耗氧及未知氧化产物。 原生Elementary/Mass/kg、CAS 7782-44-7、来自空气的可再生元素资源；不是采购工业氧或排放。广泛液态/离子同义词不改变此分子氧资源身份；仅计实际耗氧而非整空气吞吐。

- 选定流：氧气 `e2fb04b0-6555-11dd-ad8b-0800200c9a66`
- 流属性/单位：Mass / kg
- 数量规则：呈现已按所定基准计算的归属数量；此处不再归一化。
- 数值来源模式：前景记录 (`foreground_record`)
- 适用范围：场址特定 (`site_specific`)
- 归一化基准：每 1 kg 参考流
- 基准类型：过程输出 (`process_output`)
- 证据类型：采集记录 (`collected_record`)
- 采集协议：`cp_species_cast`
- 来源：`lyb-film-extrusion`

#### 输出

##### 产品流

###### 低密度聚乙烯薄膜（PE-LD） (`film`)

同一实际单层非泡沫无支撑非增强非自粘LDPE流延批次的独立合格膜卷伴随出口。原生Product/Mass/kg未指定CAS、牌号、路线、地域和性能；不能推定供方等价。膜卷不是边料参考Q。在处理剩余共同交换前，分开记录真实膜卷形成量、膜净量及膜卷专属整理/卷芯负荷。

- 选定流：低密度聚乙烯薄膜（PE-LD） `2cecd3a7-d90e-44b4-aec5-1d9dfb907477`
- 流属性/单位：Mass / kg
- 数量规则：呈现已按所定基准计算的归属数量；此处不再归一化。
- 数值来源模式：前景记录 (`foreground_record`)
- 适用范围：场址特定 (`site_specific`)
- 归一化基准：每 1 kg 参考流
- 基准类型：过程输出 (`process_output`)
- 证据类型：采集记录 (`collected_record`)
- 采集协议：`cp_material_cast`
- 来源：`lyb-film-extrusion`; `ilcd-handbook-2010`

###### 未处理LDPE流延膜修边料 (`trim_out`)

已知源批次、原色单一配方LDPE柔性长条边料，来自无印刷无涂层单层平模头冷却辊流延；消费前、独立隔离、未清洗未粉碎未团聚未再造粒。实际添加剂/污染物/水分仍需实测子账；名义单聚合物不证明绝对纯度。不绑定已清洗回收料、微塑料、光学装配或再生聚合物等不兼容UUID。 内部移交完整实物及已归属的原逐流负荷向量一次；合并时与trim_in抵消，不新增采购或放行。实际内部复用分流需独立移交/历史及真实新增加工；不能再次从原料投入扣除其质量。

确切边料商品UUID仍待决。整份实际边条/压包包含实测滞留组分，不以通用树脂替代或另购其中组分。保留原颗粒至成膜制造及继承负荷向量。

- 选定流：未加工LDPE流延膜修边料
- 流属性/单位：Mass / kg
- 数量规则：呈现已按所定基准计算的归属数量；此处不再归一化。
- 数值来源模式：前景记录 (`foreground_record`)
- 适用范围：场址特定 (`site_specific`)
- 归一化基准：每 1 kg 参考流
- 基准类型：过程输出 (`process_output`)
- 证据类型：采集记录 (`collected_record`)
- 采集协议：`cp_material_cast`
- 来源：`lyb-film-extrusion`; `ilcd-handbook-2010`

##### 废物流

###### 氧化LDPE挤出清机料 (`purge`)

实际氧化/不合格熔料和启动料块，与可接受洁净边条及合格膜出口分开。测量添加剂和氧化状态；记录实际接收方，不预设回收信用。

- 选定流：氧化LDPE挤出清机料
- 流属性/单位：Mass / kg
- 数量规则：呈现已按所定基准计算的归属数量；此处不再归一化。
- 数值来源模式：前景记录 (`foreground_record`)
- 适用范围：场址特定 (`site_specific`)
- 归一化基准：每 1 kg 参考流
- 基准类型：过程输出 (`process_output`)
- 证据类型：采集记录 (`collected_record`)
- 采集协议：`cp_material_cast`
- 来源：`lyb-film-extrusion`

###### 附着聚合物的废钢质熔体滤网 (`spent_screen`)

一种实际废滤网制品，测量钢/聚合物/脂的来源分区。整量和分区不可叠加且只有一个接收方/供方；区分复用及最终处置。

- 选定流：附着聚合物的废钢质熔体滤网
- 流属性/单位：Mass / kg
- 数量规则：呈现已按所定基准计算的归属数量；此处不再归一化。
- 数值来源模式：前景记录 (`foreground_record`)
- 适用范围：场址特定 (`site_specific`)
- 归一化基准：每 1 kg 参考流
- 基准类型：过程输出 (`process_output`)
- 证据类型：采集记录 (`collected_record`)
- 采集协议：`cp_material_cast`
- 来源：`lyb-film-extrusion`

###### 硅脂污染的挤出机清洁残渣 (`cleaning_residue`)

条件性实际收集的清洁固体，测量整份组成并记录唯一去向。物理分离的擦布、液体或其他残渣另列，不作其他废物集合。

- 选定流：硅脂污染的挤出机清洁残渣
- 流属性/单位：Mass / kg
- 数量规则：呈现已按所定基准计算的归属数量；此处不再归一化。
- 数值来源模式：前景记录 (`foreground_record`)
- 适用范围：场址特定 (`site_specific`)
- 归一化基准：每 1 kg 参考流
- 基准类型：过程输出 (`process_output`)
- 证据类型：采集记录 (`collected_record`)
- 采集协议：`cp_material_cast`
- 来源：`lyb-film-extrusion`

###### 冷却回路水性排污液 (`cooling_blowdown`)

条件性实际整份水性排液，测量水和每种添加剂/污染物；唯一接收方。它不是洗涤塑料供料，也不能借泛废水替身。独立清洁废液须另建具体卡；真实处理增量和下游边界只链接一次。

- 选定流：冷却回路水性排污液
- 流属性/单位：Mass / kg
- 数量规则：呈现已按所定基准计算的归属数量；此处不再归一化。
- 数值来源模式：前景记录 (`foreground_record`)
- 适用范围：场址特定 (`site_specific`)
- 归一化基准：每 1 kg 参考流
- 基准类型：过程输出 (`process_output`)
- 证据类型：采集记录 (`collected_record`)
- 采集协议：`cp_water`
- 来源：`lyb-film-extrusion`

##### 基本流

###### 颗粒物，粒径未特指 (`cast_dust`)

条件性实测排向空气未特指子环境、且粒径未分级的颗粒物。原生参考Mass/kg，不指定颗粒组成、排放高度、粒径分布或表征因子。熟料示例及其因子仅是背景，不是本过程或路线限制。实际分级排放与捕集废物分开，不再叠加整份粉尘总量。

- 选定流：颗粒物，粒径未特指 `0ce3dedb-caca-407b-a856-a90470eb8ec0`
- 流属性/单位：Mass / kg
- 数量规则：呈现已按所定基准计算的归属数量；此处不再归一化。
- 数值来源模式：前景记录 (`foreground_record`)
- 适用范围：场址特定 (`site_specific`)
- 归一化基准：每 1 kg 参考流
- 基准类型：过程输出 (`process_output`)
- 证据类型：采集记录 (`collected_record`)
- 采集协议：`cp_species_cast`
- 来源：`lyb-film-extrusion`

###### 甲醛 (`formaldehyde`)

条件性实测甲醛物种CAS 50-00-0，排向空气未特指子环境，Mass/kg。原生广泛同义词包含福尔马林和聚合物，但不允许把溶液/聚合物质量当排放单体。需真实完整烟气调查决定存在、物种及未捕集路线；此示例不构成默认正值或完整排放清单。

- 选定流：甲醛 `08a91e70-3ddc-11dd-941b-0050c2490048`
- 流属性/单位：Mass / kg
- 数量规则：呈现已按所定基准计算的归属数量；此处不再归一化。
- 数值来源模式：前景记录 (`foreground_record`)
- 适用范围：场址特定 (`site_specific`)
- 归一化基准：每 1 kg 参考流
- 基准类型：过程输出 (`process_output`)
- 证据类型：采集记录 (`collected_record`)
- 采集协议：`cp_species_cast`
- 来源：`lyb-film-extrusion`

###### 乙醛 (`acetaldehyde`)

条件性实际乙醛CAS 75-07-0排向空气未特指子环境，Mass/kg。原生同义词含乙酰基及聚合物标签，但参考身份是CAS定义的排放单体而非这些材料。调查所有真实热状态及控制并逐一增加实际物种；不能以乙醛替换总VOC。

- 选定流：乙醛 `fe0acd60-3ddc-11dd-a7a5-0050c2490048`
- 流属性/单位：Mass / kg
- 数量规则：呈现已按所定基准计算的归属数量；此处不再归一化。
- 数值来源模式：前景记录 (`foreground_record`)
- 适用范围：场址特定 (`site_specific`)
- 归一化基准：每 1 kg 参考流
- 基准类型：过程输出 (`process_output`)
- 证据类型：采集记录 (`collected_record`)
- 采集协议：`cp_species_cast`
- 来源：`lyb-film-extrusion`

###### 水 (`water_vapour`)

条件性实际冷却/清洁中独立实测的相变水分。不能假设反应水：挤出为物理熔融，实际氧化须有独立化学证据。膜及排液保留水分不在此重复计量。 原生Elementary参考Volume/m3、CAS 7732-18-5、排向空气未特指子环境；没有质量属性。此卡仅为真实普通H2O水蒸气，不是同义词中的重水/同位素水/冰。保留声明温压及含湿基准的实际蒸气体积；质量闭合须独立确定同状态H2O蒸气密度，不用液水密度、原生次级系数或假设温压。

- 选定流：水 `0342f5e5-b53e-4cec-9e67-fb197f24fff0`
- 流属性/单位：Volume / m3
- 数量规则：呈现已按所定基准计算的归属数量；此处不再归一化。
- 数值来源模式：前景记录 (`foreground_record`)
- 适用范围：场址特定 (`site_specific`)
- 归一化基准：每 1 kg 参考流
- 基准类型：过程输出 (`process_output`)
- 证据类型：采集记录 (`collected_record`)
- 采集协议：`cp_water`
- 来源：`lyb-film-extrusion`

### 过程：隔离边料准备及首次放行 (`trim_supply`)

#### 输入

##### 产品流

###### 电力，交流电 (`bale_power`)

原生Product限定中国、到用户的电网平均消费组合、低于1 kV交流电、参考属性净热值/MJ。不能替换成纯水电、发电端或中压。核对实际场址/年份/供方边界；变压及配电增量只计一次。计量包括冷却及失败批次在内的所有运行状态，分配前将kWh换成MJ。

- 选定流：电力，交流电 `50657322-939c-4829-a87b-47c093bfa6a7`
- 流属性/单位：Net calorific value / MJ
- 数量规则：呈现已按所定基准计算的归属数量；此处不再归一化。
- 数值来源模式：前景记录 (`foreground_record`)
- 适用范围：场址特定 (`site_specific`)
- 归一化基准：每 1 kg 参考流
- 基准类型：过程输出 (`process_output`)
- 证据类型：采集记录 (`collected_record`)
- 采集协议：`cp_energy_supply`
- 来源：`boa-plastic-baling`; `greenview-ldpe-scrap`

###### 未处理LDPE流延膜修边料 (`trim_in`)

已知源批次、原色单一配方LDPE柔性长条边料，来自无印刷无涂层单层平模头冷却辊流延；消费前、独立隔离、未清洗未粉碎未团聚未再造粒。实际添加剂/污染物/水分仍需实测子账；名义单聚合物不证明绝对纯度。不绑定已清洗回收料、微塑料、光学装配或再生聚合物等不兼容UUID。 与trim_out质量、源批次及继承向量一致；不能采购已成品压包替代来源制造。包括压实前真实移交/输送及称量分选。

确切边料商品UUID仍待决。整份实际边条/压包包含实测滞留组分，不以通用树脂替代或另购其中组分。保留原颗粒至成膜制造及继承负荷向量。

- 选定流：未加工LDPE流延膜修边料
- 流属性/单位：Mass / kg
- 数量规则：呈现已按所定基准计算的归属数量；此处不再归一化。
- 数值来源模式：前景记录 (`foreground_record`)
- 适用范围：场址特定 (`site_specific`)
- 归一化基准：每 1 kg 参考流
- 基准类型：过程输出 (`process_output`)
- 证据类型：采集记录 (`collected_record`)
- 采集协议：`cp_material_supply`
- 来源：`lyb-film-extrusion`; `boa-plastic-baling`; `greenview-ldpe-scrap`; `ilcd-handbook-2010`

###### 液压油 (`hydraulic`)

条件性电驱液压打包机所用实际一种矿物或合成基础油及添加剂的整份配方。原生Product参考Volume/m3，不是Mass；没有固定CAS、配方、牌号、路线或地域。声明实际配方并保留供货体积；质量平衡须独立测量该配方/温度密度，不能用水密度或次级系数推断。

- 选定流：液压油 `30691a38-a947-4b41-991e-194f6c9aa88f`
- 流属性/单位：Volume / m3
- 数量规则：呈现已按所定基准计算的归属数量；此处不再归一化。
- 数值来源模式：前景记录 (`foreground_record`)
- 适用范围：场址特定 (`site_specific`)
- 归一化基准：每 1 kg 参考流
- 基准类型：过程输出 (`process_output`)
- 证据类型：采集记录 (`collected_record`)
- 采集协议：`cp_material_supply`
- 来源：`boa-plastic-baling`; `greenview-ldpe-scrap`

###### 镀锌钢丝 (`tie`)

条件性实际一种热浸镀锌、淬火、拉拔的钢质包扎丝，不是钢板或泛包装集合。原生Product/Mass/kg；官方英文Steel strip, thread及中文镀锌钢丝虽列入绞线分类，原生正文没有必须为绞绳的要求。仅限明确吻合的镀锌拉拔丝形态及路线；未定牌号、镀层量、耐腐蚀适合性和供方须实际规格。实物绑丝及锌/钢组成在组分账中独立于Q。

- 选定流：镀锌钢丝 `6bebb982-c6c5-4250-88da-6607f8899574`
- 流属性/单位：Mass / kg
- 数量规则：呈现已按所定基准计算的归属数量；此处不再归一化。
- 数值来源模式：前景记录 (`foreground_record`)
- 适用范围：场址特定 (`site_specific`)
- 归一化基准：每 1 kg 参考流
- 基准类型：过程输出 (`process_output`)
- 证据类型：采集记录 (`collected_record`)
- 采集协议：`cp_pack_supply`
- 来源：`boa-plastic-baling`; `greenview-ldpe-scrap`; `rema-plastics-2026`

###### 纸质标签 (`tag`)

条件性一种实际无涂层纸标牌；识别附着方式，另购墨/紧固件各列真实供应，或注明已含于供货制品。保留完整实物组分账。放行后替换只计实际增量。 原生Product/Mass/kg未定纸牌号、胶/印刷、尺寸、供货路线或地域。真实交换为一种已核实无涂层纸标牌；保留的旧分类是来源记录，不是另一实物。不假设件到kg换算。

- 选定流：纸质标签 `7b25a54f-baa6-4593-9670-4240a3315eed`
- 流属性/单位：Mass / kg
- 数量规则：呈现已按所定基准计算的归属数量；此处不再归一化。
- 数值来源模式：前景记录 (`foreground_record`)
- 适用范围：场址特定 (`site_specific`)
- 归一化基准：每 1 kg 参考流
- 基准类型：过程输出 (`process_output`)
- 证据类型：采集记录 (`collected_record`)
- 采集协议：`cp_pack_supply`
- 来源：`boa-plastic-baling`; `greenview-ldpe-scrap`; `rema-plastics-2026`

##### 废物流

##### 基本流

#### 输出

##### 产品流

###### 压包未处理LDPE流延膜修边供料 (`released_trim`)

已知源批次、原色单一配方LDPE柔性长条边料，来自无印刷无涂层单层平模头冷却辊流延；消费前、独立隔离、未清洗未粉碎未团聚未再造粒。实际添加剂/污染物/水分仍需实测子账；名义单聚合物不证明绝对纯度。不绑定已清洗回收料、微塑料、光学装配或再生聚合物等不兼容UUID。 参考出口为1千克放行状态边条供料净量，仅含实测滞留物/水，排除绑丝、标牌及容器。必要压实和接收方特定验收后首次质量放行只形成一次Q；同批期末FG已在Q中。复验、发运及旧料返回不创造新产量。实际密度和接收限值经测量/约定，不借商业使用后A级。

确切边料商品UUID仍待决。整份实际边条/压包包含实测滞留组分，不以通用树脂替代或另购其中组分。保留原颗粒至成膜制造及继承负荷向量。

- 选定流：压包未加工LDPE流延膜修边供料
- 流属性/单位：Mass / kg
- 数量规则：1 千克
- 数值来源模式：前景记录 (`foreground_record`)
- 适用范围：场址特定 (`site_specific`)
- 归一化基准：每 1 kg 参考流
- 基准类型：过程输出 (`process_output`)
- 证据类型：采集记录 (`collected_record`)
- 采集协议：`cp_release`
- 来源：`lyb-film-extrusion`; `boa-plastic-baling`; `greenview-ldpe-scrap`; `rema-plastics-2026`; `ilcd-handbook-2010`

##### 废物流

###### 不合格LDPE流延膜修边料 (`reject_trim`)

实际拒收边条供料，测量污染、来源分配并确认唯一接收方。与清机料、其他聚合物及危废分开。不假设正价值、废物豁免或自动信用。

- 选定流：不合格LDPE流延膜修边料
- 流属性/单位：Mass / kg
- 数量规则：呈现已按所定基准计算的归属数量；此处不再归一化。
- 数值来源模式：前景记录 (`foreground_record`)
- 适用范围：场址特定 (`site_specific`)
- 归一化基准：每 1 kg 参考流
- 基准类型：过程输出 (`process_output`)
- 证据类型：采集记录 (`collected_record`)
- 采集协议：`cp_material_supply`
- 来源：`boa-plastic-baling`; `greenview-ldpe-scrap`; `ilcd-handbook-2010`

###### 废打包机液压油 (`spent_hydraulic`)

实际一种废整份液压配方，测量残油/添加剂/水及供出状态。确认真实废物类型及处理供方；不绑定固定含油50%的配方。

- 选定流：废打包机液压油
- 流属性/单位：Mass / kg
- 数量规则：呈现已按所定基准计算的归属数量；此处不再归一化。
- 数值来源模式：前景记录 (`foreground_record`)
- 适用范围：场址特定 (`site_specific`)
- 归一化基准：每 1 kg 参考流
- 基准类型：过程输出 (`process_output`)
- 证据类型：采集记录 (`collected_record`)
- 采集协议：`cp_material_supply`
- 来源：`boa-plastic-baling`; `greenview-ldpe-scrap`; `ilcd-handbook-2010`

###### 废镀锌钢包扎丝 (`wire_waste`)

实际切余或拆下绑丝，称整丝并测镀层且记录唯一接收方。整量与钢/锌来源分区不叠加。可复用拆丝及对外返丝属于独立库存移动。

- 选定流：废镀锌钢包扎丝
- 流属性/单位：Mass / kg
- 数量规则：呈现已按所定基准计算的归属数量；此处不再归一化。
- 数值来源模式：前景记录 (`foreground_record`)
- 适用范围：场址特定 (`site_specific`)
- 归一化基准：每 1 kg 参考流
- 基准类型：过程输出 (`process_output`)
- 证据类型：采集记录 (`collected_record`)
- 采集协议：`cp_pack_supply`
- 来源：`boa-plastic-baling`; `greenview-ldpe-scrap`; `ilcd-handbook-2010`

###### 废纸质压包标牌 (`tag_waste`)

实际拆下/拒用标牌，记录滞留成分及唯一接收方，不和钢丝或聚合物拒料混并。

- 选定流：废纸质压包标牌
- 流属性/单位：Mass / kg
- 数量规则：呈现已按所定基准计算的归属数量；此处不再归一化。
- 数值来源模式：前景记录 (`foreground_record`)
- 适用范围：场址特定 (`site_specific`)
- 归一化基准：每 1 kg 参考流
- 基准类型：过程输出 (`process_output`)
- 证据类型：采集记录 (`collected_record`)
- 采集协议：`cp_pack_supply`
- 来源：`boa-plastic-baling`; `greenview-ldpe-scrap`; `ilcd-handbook-2010`

##### 基本流

###### 颗粒物，粒径未特指 (`bale_dust`)

条件性实测排向空气未特指子环境、且粒径未分级的颗粒物。原生参考Mass/kg，不指定颗粒组成、排放高度、粒径分布或表征因子。熟料示例及其因子仅是背景，不是本过程或路线限制。实际分级排放与捕集废物分开，不再叠加整份粉尘总量。

- 选定流：颗粒物，粒径未特指 `0ce3dedb-caca-407b-a856-a90470eb8ec0`
- 流属性/单位：Mass / kg
- 数量规则：呈现已按所定基准计算的归属数量；此处不再归一化。
- 数值来源模式：前景记录 (`foreground_record`)
- 适用范围：场址特定 (`site_specific`)
- 归一化基准：每 1 kg 参考流
- 基准类型：过程输出 (`process_output`)
- 证据类型：采集记录 (`collected_record`)
- 采集协议：`cp_species_supply`
- 来源：`boa-plastic-baling`; `greenview-ldpe-scrap`

### 过程：原批次成品库存服务 (`fg_service`)

#### 输入

##### 产品流

###### 电力，交流电 (`service_power`)

原生Product限定中国、到用户的电网平均消费组合、低于1 kV交流电、参考属性净热值/MJ。不能替换成纯水电、发电端或中压。核对实际场址/年份/供方边界；变压及配电增量只计一次。计量包括冷却及失败批次在内的所有运行状态，分配前将kWh换成MJ。

- 选定流：电力，交流电 `50657322-939c-4829-a87b-47c093bfa6a7`
- 流属性/单位：Net calorific value / MJ
- 数量规则：呈现已按所定基准计算的归属数量；此处不再归一化。
- 数值来源模式：前景记录 (`foreground_record`)
- 适用范围：场址特定 (`site_specific`)
- 归一化基准：每 1 kg 参考流
- 基准类型：过程输出 (`process_output`)
- 证据类型：采集记录 (`collected_record`)
- 采集协议：`cp_fg`
- 来源：`ilcd-handbook-2010`

###### 镀锌钢丝 (`service_tie`)

条件性实际一种热浸镀锌、淬火、拉拔的钢质包扎丝，不是钢板或泛包装集合。原生Product/Mass/kg；官方英文Steel strip, thread及中文镀锌钢丝虽列入绞线分类，原生正文没有必须为绞绳的要求。仅限明确吻合的镀锌拉拔丝形态及路线；未定牌号、镀层量、耐腐蚀适合性和供方须实际规格。实物绑丝及锌/钢组成在组分账中独立于Q。 仅计首次放行后真实新增替换丝，不再采购完好的原绑丝。

- 选定流：镀锌钢丝 `6bebb982-c6c5-4250-88da-6607f8899574`
- 流属性/单位：Mass / kg
- 数量规则：呈现已按所定基准计算的归属数量；此处不再归一化。
- 数值来源模式：前景记录 (`foreground_record`)
- 适用范围：场址特定 (`site_specific`)
- 归一化基准：每 1 kg 参考流
- 基准类型：过程输出 (`process_output`)
- 证据类型：采集记录 (`collected_record`)
- 采集协议：`cp_fg`
- 来源：`boa-plastic-baling`; `greenview-ldpe-scrap`; `rema-plastics-2026`

###### 纸质标签 (`service_tag`)

条件性一种实际无涂层纸标牌；识别附着方式，另购墨/紧固件各列真实供应，或注明已含于供货制品。保留完整实物组分账。放行后替换只计实际增量。 原生Product/Mass/kg未定纸牌号、胶/印刷、尺寸、供货路线或地域。真实交换为一种已核实无涂层纸标牌；保留的旧分类是来源记录，不是另一实物。不假设件到kg换算。

- 选定流：纸质标签 `7b25a54f-baa6-4593-9670-4240a3315eed`
- 流属性/单位：Mass / kg
- 数量规则：呈现已按所定基准计算的归属数量；此处不再归一化。
- 数值来源模式：前景记录 (`foreground_record`)
- 适用范围：场址特定 (`site_specific`)
- 归一化基准：每 1 kg 参考流
- 基准类型：过程输出 (`process_output`)
- 证据类型：采集记录 (`collected_record`)
- 采集协议：`cp_fg`
- 来源：`boa-plastic-baling`; `greenview-ldpe-scrap`; `rema-plastics-2026`

###### 压包未处理LDPE流延膜修边供料 (`fg_receipt`)

已知源批次、原色单一配方LDPE柔性长条边料，来自无印刷无涂层单层平模头冷却辊流延；消费前、独立隔离、未清洗未粉碎未团聚未再造粒。实际添加剂/污染物/水分仍需实测子账；名义单聚合物不证明绝对纯度。不绑定已清洗回收料、微塑料、光学装配或再生聚合物等不兼容UUID。 内部接收/旧库存保留唯一原放行Qc及每个继承交换向量，不是新采购。合并实物账中与released_trim的新批次移交抵消。旧批历史不能除以本期新Q。

确切边料商品UUID仍待决。整份实际边条/压包包含实测滞留组分，不以通用树脂替代或另购其中组分。保留原颗粒至成膜制造及继承负荷向量。

- 选定流：压包未加工LDPE流延膜修边供料
- 流属性/单位：Mass / kg
- 数量规则：呈现已按所定基准计算的归属数量；此处不再归一化。
- 数值来源模式：前景记录 (`foreground_record`)
- 适用范围：场址特定 (`site_specific`)
- 归一化基准：每 1 kg 参考流
- 基准类型：过程输出 (`process_output`)
- 证据类型：采集记录 (`collected_record`)
- 采集协议：`cp_fg`
- 来源：`ilcd-handbook-2010`

##### 废物流

##### 基本流

#### 输出

##### 产品流

###### 压包未处理LDPE流延膜修边供料 (`gross_shipment`)

已知源批次、原色单一配方LDPE柔性长条边料，来自无印刷无涂层单层平模头冷却辊流延；消费前、独立隔离、未清洗未粉碎未团聚未再造粒。实际添加剂/污染物/水分仍需实测子账；名义单聚合物不证明绝对纯度。不绑定已清洗回收料、微塑料、光学装配或再生聚合物等不兼容UUID。 实际外运边料净量V为实物毛移动，再发运返回物时仍是毛移动，不是新Q或生产分母。原生产向量与真实新增仓储/装载/重包服务分开。返回物链接原外运/冲回并接收原向量，仅另计真实新增返工，不从生产重复扣除。

确切边料商品UUID仍待决。整份实际边条/压包包含实测滞留组分，不以通用树脂替代或另购其中组分。保留原颗粒至成膜制造及继承负荷向量。

- 选定流：压包未加工LDPE流延膜修边供料
- 流属性/单位：Mass / kg
- 数量规则：呈现已按所定基准计算的归属数量；此处不再归一化。
- 数值来源模式：前景记录 (`foreground_record`)
- 适用范围：场址特定 (`site_specific`)
- 归一化基准：每 1 kg 参考流
- 基准类型：过程输出 (`process_output`)
- 证据类型：采集记录 (`collected_record`)
- 采集协议：`cp_fg`
- 来源：`ilcd-handbook-2010`

##### 废物流

###### LDPE修边料储存损失 (`fg_loss`)

已知源批次、原色单一配方LDPE柔性长条边料，来自无印刷无涂层单层平模头冷却辊流延；消费前、独立隔离、未清洗未粉碎未团聚未再造粒。实际添加剂/污染物/水分仍需实测子账；名义单聚合物不证明绝对纯度。不绑定已清洗回收料、微塑料、光学装配或再生聚合物等不兼容UUID。 条件性真实受损/损失的批次膜料，保留原负荷及接收方。旧批拒料不能冲回无关新产量。实际服务绑丝/标牌废物仍按完整组分账另列。

- 选定流：LDPE修边料储存损失
- 流属性/单位：Mass / kg
- 数量规则：呈现已按所定基准计算的归属数量；此处不再归一化。
- 数值来源模式：前景记录 (`foreground_record`)
- 适用范围：场址特定 (`site_specific`)
- 归一化基准：每 1 kg 参考流
- 基准类型：过程输出 (`process_output`)
- 证据类型：采集记录 (`collected_record`)
- 采集协议：`cp_fg`
- 来源：`ilcd-handbook-2010`

##### 基本流

每种包装的N包括随来料或单独借入、无偿调拨的首次非购买外部实收，无论供方清单是否覆盖。全部实物库存及进出均须有归属。实际采购、运费及服务负担按真实承担方仅计一次；供方历史缺失明确待查。

## 7. 分配与联产品处理

| rule_id | applies_to | rule | source_ids |
| --- | --- | --- | --- |
| a_context | all multifunctionality | 仅限与声明目标/情境一致、需要分割的归因场景。核实真实废物/副产品及经济/法律状态；回收去向或正负价格本身不能选择约定。不任意选择分配/替代，不给避免树脂或处置信用。 | `ilcd-handbook-2010` |
| a_subdivide | cast source and later preparation | 先拆分真实专属作业和清单，包括膜卷卷绕/卷芯与边料收集/压实。完全细分不能做到时用有依据的虚拟细分。来料树脂/材料历史及真实源损失须归属一次，不能因边料是残余就置零。不能把成膜卷专属服务归边料，也不能擦除共同来源制造。 | `ilcd-handbook-2010` |
| a_physical | each remaining common exchange | 逐个检验剩余共同交换的决定性物理因果关系，使用真实过程/计量证据。聚合物/材料分区依据实测来源组成及实际去向，不能推广成加热器、冷机或间接负荷的通则。完整实物出口/库存门独立于负荷份额。所有伴随出口/受益方向量须回核为分配前整清单且保留真实损失，不遗漏或重复归属来源负荷。 | `ilcd-handbook-2010` |
| a_residual | genuinely inseparable remainder | 仅对确实剩余且不可分割的清单采用有依据的经济分配。按共同源过程门及各真实状态测量同期代表市场价值。后续压包/交付价格须对所有出口一致扣回真实后段搬运、准备、包装、运输费用。保留量、期间、市场、正负零价格、不确定性及敏感性；不固定比例或任意选物理/经济。 | `ilcd-handbook-2010` |
| a_recycling_state | source co-production versus waste recovery | 不能从供料名称推断回收分配。独立识别实际来源共同生产及任何真正联合过程；本供料门本身不证明完整多循环回收系统。若进入废料为负市场价值，先识别真实初处理及首次形成有价值功能的点/状态，再采用ILCD回收专属条款，不能强套同一个简单源门价格分割。非负价格本身也不能免除更广回收声明所需的固有属性/循环信息。路线/状态或必要回收证据未知时，该数量解释不可用，但不能擦除真实制造和准备负荷。 | `ilcd-handbook-2010` |
| a_assets | included reusable manufacture | 已纳入的资产/复用制品制造在各次使用间归属时，保留同资产唯一原制造向量B及整个安装服役分母D，覆盖全部已实现历史与有依据剩余服务。受益使用u和D同单位；全部历史及新增u/D份额总和不得大于一。本期产量、仅剩余容量或裸资产质量不是D。保管权/期间/供方改变不能重启账。D/历史未知时归属结果仍不可用；真实修理/替换/服务增量分别保留。完整实物质量及库存移动不摊销。 | `ilcd-handbook-2010` |

## 8. 前景数据采集、计算与质量规则

### 数据采集协议

| protocol_id | process_id | flow_role | record_type | raw_fields | collection_method | unit | frequency | temporal_coverage | site_scope | aggregation_rule | quality_evidence |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| cp_release | trim_supply | released_trim | release | 批次; 源牌号/配方; 接收规格; 法律移交; 检验; 校准毛/皮/净量; 首放事件; 唯一冲回; 原Qc; 期初期末FG | 校准称重验收净供料，逐项扣真实包装。保留原始首放质量及事件链接；水分和污染物独立检验而非默认零。 | kg | 逐事件/批次及代表性运行状态 | 同批次完整制造及原Qc后续服务期间 | 实际来源制造至供料及原批次服务 | 每 1 kg 参考流 | 原始账; 检验; 校准; 供方/接收证明; 完整历史向量 |
| cp_material_cast | cast_origin | resin; silicone_grease; screen; film; trim_out; purge; spent_screen; cleaning_residue | material_stock | row_id; 批次; 整份供货配方; 物态; 实测组成; 供方; 发领/接收/返回; 期初期末原料/WIP/在用辅料库存; 逐流继承向量; 来源分区; 接收方; 所需密度及温压 | 保管及实验室逐项称实际单物料/制品及实物去向。保留全部失败/启停/待机/清理/返工及完整逐流库存历史。液压油体积以m3采集，质量核对需要时另测同油密度。不原始归一化。 | kg; m3; kg/m3; C; Pa | 逐事件/批次及代表性运行状态 | 同批次完整制造及原Qc后续服务期间 | 实际来源制造至供料及原批次服务 | 每 1 kg 参考流 | 原始账; 检验; 校准; 供方/接收证明; 完整历史向量 |
| cp_material_supply | trim_supply | trim_in; hydraulic; reject_trim; spent_hydraulic | material_stock | row_id; 批次; 整份供货配方; 物态; 实测组成; 供方; 发领/接收/返回; 期初期末原料/WIP/在用辅料库存; 逐流继承向量; 来源分区; 接收方; 所需密度及温压 | 保管及实验室逐项称实际单物料/制品及实物去向。保留全部失败/启停/待机/清理/返工及完整逐流库存历史。液压油体积以m3采集，质量核对需要时另测同油密度。不原始归一化。 | kg; m3; kg/m3; C; Pa | 逐事件/批次及代表性运行状态 | 同批次完整制造及原Qc后续服务期间 | 实际来源制造至供料及原批次服务 | 每 1 kg 参考流 | 原始账; 检验; 校准; 供方/接收证明; 完整历史向量 |
| cp_energy_cast | cast_origin | cast_power | energy_meter | row_id; 电表; 实际供方边界; 电压; 期间; 工序; 积分kWh; 真实功率/时间如适用; 待机/失败/清理; 专属子组 | 可行时独立计量来源制造、冷却制冷和边料准备。采原读数和经核实覆盖，含启停/待机/失败；采集不除吞吐量或Q。 | kWh; kW; h; MJ | 逐事件/批次及代表性运行状态 | 同批次完整制造及原Qc后续服务期间 | 实际来源制造至供料及原批次服务 | 每 1 kg 参考流 | 原始账; 检验; 校准; 供方/接收证明; 完整历史向量 |
| cp_energy_supply | trim_supply | bale_power | energy_meter | row_id; 电表; 实际供方边界; 电压; 期间; 工序; 积分kWh; 真实功率/时间如适用; 待机/失败/清理; 专属子组 | 可行时独立计量来源制造、冷却制冷和边料准备。采原读数和经核实覆盖，含启停/待机/失败；采集不除吞吐量或Q。 | kWh; kW; h; MJ | 逐事件/批次及代表性运行状态 | 同批次完整制造及原Qc后续服务期间 | 实际来源制造至供料及原批次服务 | 每 1 kg 参考流 | 原始账; 检验; 校准; 供方/接收证明; 完整历史向量 |
| cp_water | cast_origin | water; cooling_blowdown; water_vapour | water_state | row_id; 用途; 真实进出质量; 积分体积或真实流率; 温压; 密度; 组分; 水分; 焓; 回路库存; 供方约定; 排液接收方 | 独立测实际补水、冷却/清洁及每个真实返回/损失。用真实回路/热工记录及水检验；不假设蒸汽或反应水。外部Product返回和废液分开且须独立卡。 | kg; m3; m3/h; h; C; Pa; MJ | 逐事件/批次及代表性运行状态 | 同批次完整制造及原Qc后续服务期间 | 实际来源制造至供料及原批次服务 | 每 1 kg 参考流 | 原始账; 检验; 校准; 供方/接收证明; 完整历史向量 |
| cp_pack_cast | cast_origin | core | component_stock | 组分id; 组成; 皮重; 批次; 期初期末空包装; 附着WIP/FG; 复用; 采购P; 首次非采购外部实收N; 外返ER_in/ER_out; 匹配前次外出事件id/日期/数量; 尚未返还量; 毛发运组分质量; 废物; 原制造向量; 资产历史; 全服役D; 匹配使用u; 全部历史份额 | 独立称每种组分，完整保留空/附着/复用库存及全部对外穿越，按pack_balance区分P、N及ER_in/ER_out。每次返入匹配先前外出事件与尚未返还量，非采购实收和返回均保留原供方/制造历史。内部重附着/复用抵消。纳入跨使用制造归属时保留同资产完整质量/购入/退役及原向量和全部受益方；未知历史继续待解。 | kg; actual matched service unit | 逐事件/批次及代表性运行状态 | 同批次完整制造及原Qc后续服务期间 | 实际来源制造至供料及原批次服务 | 每 1 kg 参考流 | 原始账; 检验; 校准; 供方/接收证明; 完整历史向量 |
| cp_pack_supply | trim_supply | tie; tag; wire_waste; tag_waste | component_stock | 组分id; 组成; 皮重; 批次; 期初期末空包装; 附着WIP/FG; 复用; 采购P; 首次非采购外部实收N; 外返ER_in/ER_out; 匹配前次外出事件id/日期/数量; 尚未返还量; 毛发运组分质量; 废物; 原制造向量; 资产历史; 全服役D; 匹配使用u; 全部历史份额 | 独立称每种组分，完整保留空/附着/复用库存及全部对外穿越，按pack_balance区分P、N及ER_in/ER_out。每次返入匹配先前外出事件与尚未返还量，非采购实收和返回均保留原供方/制造历史。内部重附着/复用抵消。纳入跨使用制造归属时保留同资产完整质量/购入/退役及原向量和全部受益方；未知历史继续待解。 | kg; actual matched service unit | 逐事件/批次及代表性运行状态 | 同批次完整制造及原Qc后续服务期间 | 实际来源制造至供料及原批次服务 | 每 1 kg 参考流 | 原始账; 检验; 校准; 供方/接收证明; 完整历史向量 |
| cp_species_cast | cast_origin | oxygen; cast_dust; formaldehyde; acetaldehyde | speciated_survey | row_id; 物种/CAS; 粒径; 介质; 工序/状态; 排口/逸散; 浓度; 积分体积或真实流率/时间; 温压; 干湿基; 组成; 捕集; 空白; 回收率; 检出限; 不确定性 | 合格实验室调查实际树脂、热处理、维护和打包出口及代表性启停/待机/失败后才判断缺席。逐个增列所有实际物种和捕集残渣出口并保留未捕集路径。积分体积不是流率；COD/VOC不是具体化学品。 | kg; kg/m3; m3; m3/h; h | 逐事件/批次及代表性运行状态 | 同批次完整制造及原Qc后续服务期间 | 实际来源制造至供料及原批次服务 | 每 1 kg 参考流 | 原始账; 检验; 校准; 供方/接收证明; 完整历史向量 |
| cp_species_supply | trim_supply | bale_dust | speciated_survey | row_id; 物种/CAS; 粒径; 介质; 工序/状态; 排口/逸散; 浓度; 积分体积或真实流率/时间; 温压; 干湿基; 组成; 捕集; 空白; 回收率; 检出限; 不确定性 | 合格实验室调查实际树脂、热处理、维护和打包出口及代表性启停/待机/失败后才判断缺席。逐个增列所有实际物种和捕集残渣出口并保留未捕集路径。积分体积不是流率；COD/VOC不是具体化学品。 | kg; kg/m3; m3; m3/h; h | 逐事件/批次及代表性运行状态 | 同批次完整制造及原Qc后续服务期间 | 实际来源制造至供料及原批次服务 | 每 1 kg 参考流 | 原始账; 检验; 校准; 供方/接收证明; 完整历史向量 |
| cp_fg | fg_service | fg_receipt; gross_shipment; fg_loss; service_power; service_tie; service_tag | cohort_service | 原批次; Qc; 完整制造向量; 期初期末FG; 毛V; 返回批/原发运/冲回; 真实返工; 服务日期/截点; 积分电; 新绑丝/标牌; 组分库存; P/N/ER_in/ER_out; 先前外出事件及尚未返还量链接; H; 因果分配证据; 资产历史/D/u/历史份额 | 保管人将所有服务及实物移动链接原放行批次，包含旧FG及期末库存。原制造历史与真实新增增量分开；旧批不用本期新Q。服务及实物采未归一化数，包装/复用资产历史同cp_pack完整保留，包括首次非采购外部实收及每笔ER_in的先前外出链接。 | kg; kWh; MJ; actual service unit | 逐事件/批次及代表性运行状态 | 同批次完整制造及原Qc后续服务期间 | 实际来源制造至供料及原批次服务 | 每 1 kg 参考流 | 原始账; 检验; 校准; 供方/接收证明; 完整历史向量 |

aggregation_rule只声明最终呈现基准并引用report_once同一次结果；上述方法采未除raw，不执行任何除法。

### 计算规则

| rule_id | Applies to | Formula or rule | Inputs | Output | source_ids |
| --- | --- | --- | --- | --- | --- |
| raw_convert | all inventory rows | 先换真实原始单位及独立证实的状态。E_MJ=3.6×E_kWh；V_m3=0.001×V_litre；质量=实测V×独立同物密度。只对真正速率积分。物种质量=同基准sum(c×积分V)或integral(c×流率×dt)，不能两者叠加。 | raw readings; compatible units; T/P; independently measured density; speciation | converted raw ledger |  |
| attributed_vector | all inventory rows | 逐源批次交换i保留期初WIP完整继承向量，加本期真实增量，扣有依据留在期末WIP的向量及独立专属其他受益方作业。依次执行a_subdivide、逐交换a_physical、仅剩余a_residual。历史移交一次。A_i为行单位的未除归属分子，不是单一影响分数或任意份额。已放行期末FG留在完成生产中而不扣除。 | cp_material_cast; cp_material_supply; cp_release; cp_energy_cast; cp_energy_supply; cp_water; cp_species_cast; cp_species_supply; cp_pack_cast; cp_pack_supply; cp_fg | A_i | `ilcd-handbook-2010` |
| physical_gates | raw manufacture; supply; FG; combined | 独立闭合整质量、相关C/H/O及实际污染/金属元素，基于实测组成。来源期初原料/WIP/在用辅料及包装库存+真实外来材料+真实返工入=对应期末库存+真实合格膜净量+随膜外出的卷芯/包装+边料移交+废物/物种+实际外部Product返回。供料期初WIP/在用辅料及空/附着/复用包装库存+边料接收+真实外来材料/返入=排除新放行FG的对应期末库存+新净Q+该新FG附着包装+真实拒料/损失出口及对外返出。新FG附着包装在此仅列一次且从对应期末库存项排除；组分账和合并库存仍保留其全部实物。同批期末FG已属Q，不能再加为生产输出。FG期初膜净量+新Q接收+链接外返+真实返工接收=期末膜净量+毛外运V+损失+转返工。加每种完整包装/服务材料子账使全FG实物闭合。合并门抵消全部内部边料/Q/返工/附着包装移交。实物门独立于A_i和负荷份额。 | cp_material_cast; cp_material_supply; cp_release; cp_water; cp_species_cast; cp_species_supply; cp_pack_cast; cp_pack_supply; cp_fg | independent raw physical gates | `lyb-film-extrusion`; `ilcd-handbook-2010` |
| pack_balance | each packaging component | 卷芯、绑丝、标牌及每个实际新增组分独立执行：期初空+期初附着WIP/FG+期初复用+真实采购P+首次非采购外部实收N+外返接收ER_in=期末空+期末附着WIP/FG+期末复用+随实物毛发运外出+对外返出ER_out+废物。P、N、ER_in为互斥实收类别；首次借入、客供或免费供给组分记N，不能假作采购或返回。每次穿越只记一次，包括毛发运与ER_out不得重复。每笔ER_in必须链接同组分先前有证据的对外外出，必要时包含期前外出。每次返入量不得超过本次返入前尚未匹配返还的外出量；累计返还不得超过所匹配的原外出量。N及返回均保留原制造/供方历史；缺采购价格不等于零负荷或新增供方计费。内部复用/重附着抵消，不新增采购、净产品Q或自动联产品。整组分与来源分区不叠加且唯一供方。 | cp_pack_cast; cp_pack_supply; cp_fg | complete component ledgers | `ilcd-handbook-2010` |
| fg_cohort | fg_service | 原Qc、完整制造向量及实物毛V独立于真实新增服务向量A_service。真实服务先专属归属，再按同一层级处理真正共同服务交换。H可作服务因果证据但不代替Qc作最终生产归一分母。旧FG/返回保留原历史及链接发运冲回；只加真实返工。本期新Q不吸收旧批。服务补充明确截点且不再造历史制造。 | cp_fg; cp_pack_cast; cp_pack_supply; original Qc; original production vector | original-cohort service increment | `ilcd-handbook-2010` |
| asset_share | included asset manufacture attribution | 同一原制造向量B仅在持久账核实f=匹配使用u/有依据全安装服役D且历史份额+全部新份额<=1后归属f×B。D/历史未知则最终制造归属不可用。原实物质量及库存穿越保留整量；实际修理/替换有独立真实增量及身份。此归属在唯一report_once之前执行。 | cp_pack_cast; cp_pack_supply; cp_fg; B; u; D; all prior shares | conserved manufacture attribution | `ilcd-handbook-2010` |
| report_once | all non-reference exchanges | x_i=A_i/Q；A_i为声明行单位的完整未除归属分子；Q为目标原批首次质量放行的供料净千克。原始换算和真实分配后只除一次；卡片及聚合引用同一次结果。纯服务结果以原批Qc代Q且新增A_service与继承制造分开；H、毛V及本期无关Q都不是该分母。Q=0保留全部真实负荷且不出单位结果。 | A_i; Q; cp_release; cp_fg | x_i | `ilcd-handbook-2010` |

### 数据质量要求

| requirement_id | Applies to | Requirement | Evidence |
| --- | --- | --- | --- |
| dq_raw | all exchanges | 真实场址/批次/状态记录、完整启停/待机/失败/清洁覆盖、校准单位、匹配期间和不确定性；不编工厂或牌号数值。 | raw records; calibrated meters; full operations |
| dq_identity | all selected identities | 复核完整原生名称/同义词/注释、CAS、牌号、路线、形态、地域、介质、类型及全部属性和精确引用链。普通供方/牌号或辅助UUID不足保留具体要求，不自动成为核心失败。真实核心矛盾继续待解。 | full native records; exact support chain; supplier specification |
| dq_species | all real outlets | 数值数据包须完整物种/水/组成调查。条件性醛及粉尘仅为示例，不是封闭清单或零值许可。COD/VOC不代替化学质量；捕集废物与排放物种不重叠。 | lab methods; blanks; recovery; limits; actual receiver records |
| dq_history | stocks and services | 跨期保留每流WIP/FG继承向量、原Qc、链接返回/冲回及完整组分/资产历史。分别报告制造与服务完整性；后续服务补充不再重复修订实物产量。 | cohort histories; gate reconciliation; complete component ledgers |

## 9. 校验规则

| rule_id | Applies to | Rule | source_ids |
| --- | --- | --- | --- |
| v_scope | reference | 核实真实单一LDPE配方、流延源制造及未处理柔性边条冷压包状态、实际验收/法律移交和唯一首放。不得推广整个39270或借商业使用后A级证明。 | `lyb-film-extrusion`; `boa-plastic-baling`; `greenview-ldpe-scrap`; `rema-plastics-2026` |
| v_native | each exchange | UUID须完整兼容原生身份及精确属性/单位链。待决边条/参考商品不得借用通用聚乙烯原材料身份，须独立核实已成膜废料状态、配方、接收功能及真实供方；宽泛名称或分类本身不足。不能借<=5毫米碎屑、已清洗废混合物、光学装配或再生PE。所有已采用限制进入可消费行上下文并核对真实供方。 | `lyb-film-extrusion`; `boa-plastic-baling`; `greenview-ldpe-scrap`; `ilcd-handbook-2010` |
| v_balances | all gates | 独立核查整质量、相关元素/物种/水、真实来源分区及继承WIP、完整FG和每包装组分门。内部移交抵消。放行期末FG已含于Q；毛V保持完整实物而不乘分配份额。一个残差不能识别两个未知物种或编反应水。 | `lyb-film-extrusion`; `ilcd-handbook-2010` |
| v_normalization | all records | 核查唯一A_i/Q前的原始单位/速率换算及真实归属。原始采集不除。Q0保留真实负荷且无单位结果。旧批服务用原Qc，不用H/本期Q/发运，也不再叠加历史制造。 | `ilcd-handbook-2010` |
| v_evidence | applicability and completeness | 来源范围及真实前景证据须支持路线、排除及数量声明。工业制造证据本身不支持分配。未知原生核心、实际排放或物理换算必须披露而非宣称通过；有限工程结果不等于科学、翻译、映射或发布审批。 | `lyb-film-extrusion`; `boa-plastic-baling`; `greenview-ldpe-scrap`; `ilcd-handbook-2010` |

## 10. 发布数据集画像

| 字段 | 值 |
| --- | --- |
| dataset_role | secondary_dataset; background_dataset |
| downstream_use | 兼容接收状态的后续物理回收投入；以实际组成和负荷移交 |
| allowed_use | 核心身份、实际数值、供方及方法经核实后的指定来源LDPE修边供料 |
| excluded_use | 整叶覆盖；新膜/再生粒料替代；未经证实零历史；自动信用；方法或翻译审批 |
| required_metadata | 已知LDPE牌号及完整供货配方; 实际添加剂和污染物检验; 单层非泡沫非增强无支撑无涂层无印刷薄膜来源; 电驱平模头冷却辊流延路线; 消费前切边来源及源批次; 未清洗未粉碎未团聚未再造粒的柔性条带状态; 无自由流动液体及实测滞留水分; 原色隔离及实际接收方洁净限值; 确切冷压包及绑丝规格; 法律移交状态及接收认可; 来源制造分配及逐流继承向量; 唯一首次放行及冲回链接; 地理和期间; 实际供电电压及供应边界; 冷却回路及实际水状态; 原料/WIP/FG期初期末库存; 每种包装及复用历史; 实物毛外运量和独立原批次服务 |
| required_quality_disclosure | 确切参考商品身份待决及待独立复核；未解辅助/废物身份；真实数值和物种覆盖；原始来源适用性/反例；分配敏感性；WIP/FG及服务截点 |
| update_trigger | 聚合物/配方、来源路线、粒子形态、清洗/粉碎/造粒、污染/含水、接收/法律状态、能源/供方、Q门或分配证据改变 |

## 11. 数据源

| Source id | Type | Reference | Used for |
| --- | --- | --- | --- |
| lyb-film-extrusion | handbook | LyondellBasell. A Guide to Polyolefin Film Extrusion. Printed identifier 6047/1004; PDF metadata 2015. https://www.lyondellbasell.com/globalassets/lyb/our-solutions/products/documents/polymers-technical-literature/A_Guide_to_Polyolefin_Film_Extrusion.pdf | 印刷页9–13及20–30：粒料搬运；流延/吹膜及多层反例；平模头和冷却辊成膜；切边收集；启停及清洁。不提供默认数量或回收分配。 |
| greenview-ldpe-scrap | literature | Greenview Waste Management. Sell Scrap LDPE Film and Polythene. Publisher HTML, accessed 2026-11-21. https://www.greenview-wm.co.uk/materials/sell-ldpe-scrap | 生产废料及准备章节：挤出/转换洁净边料与启动料块分开；牌类隔离及一致性；遮盖储存和实际买方/移交。其他牌类的比例不采用。 |
| boa-plastic-baling | literature | BOA Recycling. Efficient Processing of Plastic Waste. Publisher HTML, accessed 2026-11-21. https://www.boarecycling.com/en/solutions/plastic-waste/ | 生产薄膜废料和修边料；卧式压实及外送处理方；配置取决于真实物料。整卷切割及PET穿孔是相邻排除路线。 |
| rema-plastics-2026 | standard | ReMA. ISRI Specifications, January 2026. Plastic Scrap P-2025, printed pp. 39-40 and 45-46. https://www.isrispecs.org/wp-content/uploads/2026/01/2026-January-ReMA_ISRI_Specifications.pdf | 压包与致密粒/片料定义；干燥状态；绑扎完整性及书面合同差异。A/B级明确属于商业使用后薄膜，不能证明本消费前物料；不转用密度和污染比例。 |
| ilcd-handbook-2010 | official_guidance | European Commission JRC. ILCD Handbook: General guide for Life Cycle Assessment—Detailed guidance. First edition March 2010. Sections 7.9.2–7.9.3, printed pp. 255–272. https://eplca.jrc.ec.europa.eu/uploads/ILCD-Handbook-General-guide-for-LCA-DETAILED-GUIDANCE-12March2010-ISBN-fin-v1.0-EN.pdf | 需分割的归因场景：独立/虚拟细分；逐交换的决定性物理因果；剩余部分在共同过程门及真实状态的经济价值。不是任意分配/替代选择。 |
| unsd-cpc3 | official_guidance | UNSD. CPC Version 3.0 explanatory notes, 30 June 2025, PDF p.202; 23 October 2026 explanation table CPC3!A1901:D1901. https://unstats.un.org/unsd/econstats/classifications/cpc | 39270分类及后续HS3915关联；不修改冻结分母。 |
| wco-hs39-2022 | official_guidance | WCO. HS 2022 Chapter 39, notes 6–7, 3915.10. https://www.wcoomd.org/-/media/wco/public/global/pdf/topics/nomenclature/instruments-and-tools/hs-nomenclature-2022/2022/0739_2022e.pdf | 初级形状排除及乙烯聚合物废料归类；不证明批次验收或默认质量限值。 |
| 3g-scrap-interface | literature | 3G Plastics. Products/services and FAQ, accessed 2026-11-21. https://www.3gplastics.com/ | 实际回收商区分购入工业边料/压包膜与客户持有物权的委托再加工及其粒料；不证明所选流延批次。 |
| rpi-scrap-interface | literature | Recovering Polymers Inc. Plastics We Buy, accessed 2026-11-21. https://recovering-polymers.com/plastics-we-buy-and-sell.php | 修边/卷边采购及样本特定验收；同时列LDPE/尼龙和复合膜，PE标签不证明单层LDPE；不转用通用比例或用量。 |
