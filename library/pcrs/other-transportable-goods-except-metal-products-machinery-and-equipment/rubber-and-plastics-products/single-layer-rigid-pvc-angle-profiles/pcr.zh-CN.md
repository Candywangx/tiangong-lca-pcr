---
pcr_id: pcr.other-transportable-goods-except-metal-products-machinery-and-equipment.rubber-and-plastics-products.single-layer-rigid-pvc-angle-profiles
language: zh-CN
sync_with: pcr.en-US.md
status: candidate
content_maturity: authored_methodology
---

# 单层硬质 PVC 角型材制造

## 1. 范围与适用性

本有界方法从完整外购颗粒/粒块配混料出发，经单螺杆熔融挤出、水定型/冷却、牵引、定长切断与首次质量放行，制造单层、非发泡、无增强、未增塑 PVC 等边 L 形角型材，壁为实心。型材无涂层、无印字，不含软唇、增强层、封闭管腔或已组装框架。实际图纸、配混牌号、颜色、验收条件和供货状态为必需信息。实心壁并不等于实心矩形棒。[geon-rigid-profile-guide; tp-rigid-pvc-equal-angles]

GEON 提供过程证据，TP Extrusions 独立证明真实硬质 PVC 等边角型材供应。Dachang 提供另一工业终端及厂内粉料配混反例；N.J. Precision 展示不同的硬/软 PVC 共挤路线。这是技术综合，不声称存在共同当代 SKU、工厂、订单或配方。不把来源温度、速率、回料比例、尺寸、密度、阻燃等级或寿命转为默认值。GEON 原件同时含 2019 和 2021 版权说明，并警告实验室/典型结果不能证明工业规模产品适用性。[geon-rigid-profile-guide; tp-rigid-pvc-equal-angles; dachang-rigid-pvc; njpt-pvc-coextrusion]

CPC 原件把型材列在 36310，与塑料管和板材相邻，不提供制造配方。未另列明的建筑用塑料制品和塑料制品属于残余类别，不是吞并已明确半制成型材的依据。本方法仅覆盖狭义角型材子集，不覆盖所有单丝/棒或整个 CPC 36310。[un-cpc3-2025]

## 2. 产品类别识别

| Field | Value |
| --- | --- |
| canonical_pcr_id | pcr.other-transportable-goods-except-metal-products-machinery-and-equipment.rubber-and-plastics-products.single-layer-rigid-pvc-angle-profiles |
| classification_refs | CPC 3.0:36310；狭义型材子集；不代表已接受映射 |
| covered_products | 一款指定的实心壁等边硬质 PVC L 形角型材定长料 |
| excluded_products | 其他聚合物；软质/增塑 PVC；粉末干混料或厂内原树脂配混；双螺杆；共挤/共挤表层/软唇；泡沫；纤维/金属增强；管及配件；板/膜；纺织单丝；浇铸/压模棒材；钻孔/机加工/组装的建筑制品；涂层/印字；仅采购成品型材重新包装。路线实质改变时须另审适用性与原子清单。 |
| representative_product | 一份经认可的无涂层等边直角型材图纸；不赋予通用尺寸或服役等价性 |
| production_route | 完整外购颗粒/粒块 → 实际准备 → 单螺杆电加热熔融挤出 → 水定型/冷却 → 牵引/切断 → 检验/首次放行 → 关联成品/包装/仓储/发运记录 |
| market_state | 冷却调节后的定长角型材，以首次质量放行为门；可拆包装另计；披露已观察的物流期间 |

## 3. 参考流

| Field | Value |
| --- | --- |
| What | 供应一款指定的硬质等边半制成角型材以供后续加工/组装 |
| How much | 新增首次质量放行角型材净 1 千克 |
| How well | 真实认可图纸与完整配混牌号，声明尺寸、状态和质量试验；不赋予通用性能保证 |
| How long or cycle | 同一首次放行批组及已披露真实服务窗口；不赋予使用寿命等价性 |
| reference_flow_link | released_angle |

| Field | Value |
| --- | --- |
| 参考数量 | 1 |
| 参考产品流 | 塑料板、管、型材 `3df20f91-525e-4025-9bba-853e8af68a8e` |
| 参考流属性 | Mass `93a60a56-a3c8-11da-a746-0800200b9a66` |
| 参考单位组 | Units of mass `93a60a57-a4c8-11da-a746-0800200c9a66` |
| 参考单位 | kg |
| 必需限定信息 | 完整硬质 PVC 配混牌号及供方组成; 颗粒/粒块供货与单螺杆路线; 等边 L 截面与实测尺寸; 非发泡无增强单层实心壁; 颜色及无涂层/印字/软唇状态; 真实冷却/干燥/回料设备与历史; 切断长度公差与经认可的验收试验; 调节后净质量与留存水分; 唯一首次放行门 Q 及不合格/重复 ID; 场址期间及在制品/成品库存与逐流继承负荷向量; 包装组成及独立毛发运/退回台账; 原生产品族分类缺陷及未限定牌号/地理/供方; 真实中国低压电力接口及供水方 |

每个限定信息须在数据集元数据、产品描述、参考流备注或等效字段声明。released_angle 完整描述限定原生参考产品族并披露其 CPC 缺陷；消费本参考时须保留该描述。1 千克不等价于相同安装长度或寿命。

## 4. 计量与单位规则

| rule_id | Applies to | Required property | Required unit | Rule |
| --- | --- | --- | --- | --- |
| reference_mass | reference product | Mass `93a60a56-a3c8-11da-a746-0800200b9a66` | kg | Q 为同牌号/图纸/状态批组新增首次质量放行的唯一角型材净千克数；按声明调节/含水状态用校准秤去皮称量。失败批、重验、交付和退回物均不产生 Q。包含本次放行的期末成品已经含有该 Q。 |
| linear_mass | length or item records | Mass and length | kg; m; item | 独立测量同批调节后净质量 m_lot 与长度 L_lot；长度 l 换算为 l*m_lot/L_lot 千克。按件记录须用匹配物件的真实净质量，绝不猜 kg/item 或由标称型材密度推导；保留原始未换算记录。 |
| energy_basis | make_electricity; fg_electricity | Net calorific value `93a60a56-a3c8-11da-a746-0800200c9a66` | MJ | 采用原生能量单位组 93a60a57-a3c8-11da-a746-0800200c9a66 的参考单位 MJ；计量 kWh 乘 3.6 转为 MJ 后再归属，并调用 normalize_once。已积分能量不再乘时间；机器铭牌功率不能独自证明耗量。 |
| state_conversion | all inventory rows | Mass and actual physical state | kg; m3; h | 仅对真实速率积分；已积分液/气体积已是数量。密度须针对该物质及温压/组成独立证明，不把水密度用于制剂、废水或气体，不由原生次级属性推导密度；明确实际/标准气态及湿/干基。 |

## 5. 系统边界

### 边界概化

| Field | Value |
| --- | --- |
| declared_starting_condition | 到厂完整硬质 PVC 颗粒/粒块及逐一识别的公用消耗/耗材；期初在制品与回料携带原负荷 |
| starting_condition_role | 前景收料门；匹配供应过程中保留上游配混制造 |
| product_classification_scope | 未组装半制成等边角型材子集；分类语境独立于原生流 CPC 文本 |
| recursive_input_rule | 外来成品型材须独立识别供方、上游负荷和所省阶段，不能冒充颗粒。内部回料/放行转移保留批次负荷向量，并在合并时抵消。 |
| upstream_dataset_requirement | 匹配完整制剂与供货形态、实际电压/地理、供水处理及每种包装供方；入厂运输连接明确独立模块。通用 UUID 不证明供方适配或从摇篮到门完整性。 |
| disclosure | 制造至首次放行，另带明确日期的已观察成品服务台账；披露未结束服务期间、资本品处理、上下游边界和真实外部冷却/回水约定。使用、安装和寿命终结另计。 |

| rule_id | Applies to | Rule | source_ids |
| --- | --- | --- | --- |
| boundary_route | profile_make | 包括完整收料/准备、配混料确需的实际干燥、熔融加热/剪切/过滤、成型、真实定型/冷却、牵引/切断、检验和首次放行。包括试机、零产出/失败批、启停、空载辅助、清理、试样、回料粉碎及真实返工。选定颗粒/粒块单螺杆分支，不暗中合并干混粉料与双螺杆反例。 | geon-rigid-profile-guide |
| boundary_compound | pvc_compound | 每整份制剂仅采购一次，配混料净千克排除可拆供货包装。内含助剂/分析水仅作组成子账。真实额外色母、润滑剂、清机料、清洗化学品、燃料、制冷剂或水处理药剂须在数据包使用前逐一增加明确供货/出口卡及质量/能量记录，不藏入 zero 或 other。 | geon-rigid-profile-guide; dachang-rigid-pvc |
| boundary_services | fg_service | 包装、仓储、搬运和发运保持独立批次台账，包括老成品和携带历史负荷向量的实物退回。Q 仅内部转移一次，不能把期末成品再加为第二项生产产量。后续发运/重验不产生新产量。尚未观察的未来服务明确为完整性缺口，不捏造为零。 | dachang-rigid-pvc; ilcd-attributional-allocation |
| boundary_cooling | cooling_makeup; cooling_purge; evaporation | 独立保持水系统期初/期末库存、补水、内部循环、废水、夹带液滴、产品水分和蒸发。熔融/冷却不是反应水证据。若外供热/水，须增加真实进流和 Product 回流，附实测质量、温度/焓及供方能量约定，不推定存在蒸汽/锅炉回路。 | geon-rigid-profile-guide |
| boundary_identity | released_angle | 在原生宽泛挤出族内只使用一款声明的角型材物件，完整携带受限描述与实际产品限定信息。不改写原生 CPC 36390 缺陷或把它当作映射接受依据。硬/软共挤、粉料配混和组装/机加工制品不属于所选路线。 | un-cpc3-2025; geon-rigid-profile-guide; njpt-pvc-coextrusion; tp-rigid-pvc-equal-angles |

## 6. 过程清单结构

### 过程图

| process_id | process_name | inclusion | inclusion_condition | role | quantitative_reference |
| --- | --- | --- | --- | --- | --- |
| profile_make | 完整配混料角型材制造与首次放行 | required | 所选颗粒/粒块单螺杆路线，全部真实条件性准备、废物和排放 | 前景制造及在制品/回料继承 | 每 1 kg 参考流 |
| fg_service | 已观察成品仓储、包装、搬运与发运 | required | 按原放行批保持真实服务历史，披露尚未观察后段 | 独立服务与成品守恒台账 | 每 1 kg 参考流 |

所有卡片数量引用 normalize_once，不作第二次除法。A_i 是该行物理单位的原始换算归属后分子，Q 为原唯一首次放行千克数。协议只采集未除数量。制造与成品账为审计显示内部转移；合并物理门时抵消内部 Q/回料。期末成品为库存状态，不是额外输出或新增生产。

### 过程：角型材制造与首次放行 (`profile_make`)

#### 输入

##### 产品流

###### 完整硬质 PVC 配混料 (`pvc_compound`)

一整份外购硬质未增塑 PVC 颗粒/粒块配混制剂。原生 Product 身份是工厂内树脂与助剂配混后的可熔融加工颗粒，未限定聚合物、牌号、CAS 或地理；CPC 34790 仅为其宽泛分类。须由供方记录确认完整硬质 PVC 制剂及颗粒/粒块适用性。内含稳定剂、润滑剂、改性剂、颜料、填料和水分仅作组分子账，不再次采购；本方法不声称厂内树脂/助剂配混。 原生支持链：质量单位组 93a60a57-a4c8-11da-a746-0800200c9a66，参考单位 kg。

- 选定流：可熔融加工塑料配混料 `a97668ce-29f8-434b-afcb-9293ed2f6899`
- 流属性/单位：Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- 数量规则：A_i / Q；按第8节执行唯一一次最终报告操作，使用 cp_material 采集的未除原始分子。
- 数值来源模式：`calculated_value`
- 适用范围：`site_specific`
- 归一化基准：每 1 kg 参考流
- 基准类型：`reference_flow`
- 证据类型：`calculated_from_collection`
- 采集协议：`cp_material`
- 来源：geon-rigid-profile-guide

###### 制造用电 (`make_electricity`)

原生身份为中国 CN、<1 kV 低压、用户侧交流电消费组合，采用电网平均供应；不表示输配服务或电厂发电组合。仅在实际计量交付接口匹配时采用，否则独立核实实际电压、地理与供方。包括加热器、螺杆驱动、风冷料筒、真空定型、水泵/冷却、牵引、切断、除尘、实际干燥、回料粉碎及可归属的启停/空载/清理。若使用压缩空气，计量其制备电耗，不重复采购同一能量。原生参考属性为 Net calorific value/MJ，是技术能量约定，不表示材料质量或电力具有燃烧热值。 原生支持链：能量单位组 93a60a57-a3c8-11da-a746-0800200c9a66，参考单位 MJ。

- 选定流：交流电 `50657322-939c-4829-a87b-47c093bfa6a7`
- 流属性/单位：Net calorific value `93a60a56-a3c8-11da-a746-0800200c9a66` / MJ
- 数量规则：A_i / Q；按第8节执行唯一一次最终报告操作，使用 cp_energy 采集的未除原始分子。
- 数值来源模式：`calculated_value`
- 适用范围：`site_specific`
- 归一化基准：每 1 kg 参考流
- 基准类型：`reference_flow`
- 证据类型：`calculated_from_collection`
- 采集协议：`cp_energy`
- 来源：geon-rigid-profile-guide

###### 冷却与水清理补水 (`cooling_makeup`)

原生身份为处理后的市政/可饮用自来水 Product，工厂内生产混合，水生产供应路线；未限定 CAS、地理或供方，须确认当地水质和上游处理。只计外来新补水与实际水清理，不计内部循环。参考属性为 Mass/kg；次级体积系数 0.001 m3/kg 不是实测密度。分别记录补水、期初/期末循环库存、液态排污、液滴、留存水分和净蒸发；体积转质量须有独立依据。 原生支持链：质量单位组 93a60a57-a4c8-11da-a746-0800200c9a66，参考单位 kg。

- 选定流：自来水 `d1e0e36c-07f0-4a75-bdcb-efb5d9e2ac36`
- 流属性/单位：Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- 数量规则：A_i / Q；按第8节执行唯一一次最终报告操作，使用 cp_water 采集的未除原始分子。
- 数值来源模式：`calculated_value`
- 适用范围：`site_specific`
- 归一化基准：每 1 kg 参考流
- 基准类型：`reference_flow`
- 证据类型：`calculated_from_collection`
- 采集协议：`cp_water`
- 来源：geon-rigid-profile-guide

###### 可更换熔体过滤网 (`filter_screen`)

仅在实际更换时记录一件实体不锈钢过滤网。采集合金、尺寸、质量和服役记录，不假定牌号、寿命或更换率。耐用模具/挤出机资本品与实际耗材更换分别披露。 天工 UUID 未解决；保留此具体单一交换，数据包使用前须按实际供方/材料/去向证据核实。

- 选定流：不锈钢熔体过滤网
- 流属性/单位：Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- 数量规则：A_i / Q；按第8节执行唯一一次最终报告操作，使用 cp_material 采集的未除原始分子。
- 数值来源模式：`calculated_value`
- 适用范围：`site_specific`
- 归一化基准：每 1 kg 参考流
- 基准类型：`reference_flow`
- 证据类型：`calculated_from_collection`
- 采集协议：`cp_material`
- 来源：geon-rigid-profile-guide

###### 随颗粒到货的包装袋 (`inbound_pp_sack`)

仅适用于实证为 PP 编织的供方颗粒包装袋。其物理质量与颗粒净质量分开，并记录供方包装负荷约定。配混料供应过程已含的袋不再作为第二次包装采购/负荷。独立内衬或其他真实袋材须另设卡片与台账。 天工 UUID 未解决；保留此具体单一交换，数据包使用前须按实际供方/材料/去向证据核实。

- 选定流：聚丙烯编织颗粒包装袋
- 流属性/单位：Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- 数量规则：A_i / Q；按第8节执行唯一一次最终报告操作，使用 cp_pack 采集的未除原始分子。
- 数值来源模式：`calculated_value`
- 适用范围：`site_specific`
- 归一化基准：每 1 kg 参考流
- 基准类型：`reference_flow`
- 证据类型：`calculated_from_collection`
- 采集协议：`cp_pack`
- 来源：

#### 输出

##### 产品流

###### 新增首次质量放行的硬质 PVC L 形角型材 (`released_angle`)

原生 Product 记录表示工厂内热塑挤出产品族：basename 列举板/管/型材等可选形态，同义词和备注明确包含挤出型材。本行仅表示一款已声明的实心单层硬质 PVC L 形角型材，绝不表示板/管/型材混合篮子。原生 CPC 36390 与更宽的物理描述不一致；披露此分类缺陷，不据此建立 CPC 36310 映射。记录未限定 CAS、聚合物配方、牌号、尺寸、颜色、地理、供方或性能。实际批次规范须补足这些限定信息；通用 UUID 不提供现成背景供应过程。 原生支持链：质量单位组 93a60a57-a4c8-11da-a746-0800200c9a66，参考单位 kg。

- 选定流：塑料板、管、型材 `3df20f91-525e-4025-9bba-853e8af68a8e`
- 流属性/单位：Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- 数量规则：1 千克
- 数值来源模式：`fixed_value`
- 适用范围：`product_specific`
- 归一化基准：每 1 kg 参考流
- 基准类型：`reference_flow`
- 证据类型：`method_formula`
- 采集协议：`cp_release`
- 来源：geon-rigid-profile-guide; tp-rigid-pvc-equal-angles

##### 废物流

###### 未回用的洁净边角料 (`clean_pvc_offcut`)

本行是离开制造回路的单独分选整份配混料边角料。实际内部回料保留在 cp_stock 并继承负荷，不作为本外部废物或第二次新料采购；试样和不合格长度始终入账。 天工 UUID 未解决；保留此具体单一交换，数据包使用前须按实际供方/材料/去向证据核实。

- 选定流：硬质 PVC 角型材边角料
- 流属性/单位：Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- 数量规则：A_i / Q；按第8节执行唯一一次最终报告操作，使用 cp_material 采集的未除原始分子。
- 数值来源模式：`calculated_value`
- 适用范围：`site_specific`
- 归一化基准：每 1 kg 参考流
- 基准类型：`reference_flow`
- 证据类型：`calculated_from_collection`
- 采集协议：`cp_material`
- 来源：geon-rigid-profile-guide

###### 热降解清机料 (`degraded_pvc`)

热降解启机/换产/清理料与可回用料分别称量，保留实际组成和处理去向，不称作原生树脂或推定能源抵扣。 天工 UUID 未解决；保留此具体单一交换，数据包使用前须按实际供方/材料/去向证据核实。

- 选定流：热降解硬质 PVC 清机料
- 流属性/单位：Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- 数量规则：A_i / Q；按第8节执行唯一一次最终报告操作，使用 cp_material 采集的未除原始分子。
- 数值来源模式：`calculated_value`
- 适用范围：`site_specific`
- 归一化基准：每 1 kg 参考流
- 基准类型：`reference_flow`
- 证据类型：`calculated_from_collection`
- 采集协议：`cp_material`
- 来源：geon-rigid-profile-guide

###### 收集的切断粉尘 (`captured_pvc_dust`)

一种包含实际配混料组分的收集颗粒废物，与逸散到空气的颗粒及废水固体分开；保留捕集质量及去向，同一颗粒不重复计数。 天工 UUID 未解决；保留此具体单一交换，数据包使用前须按实际供方/材料/去向证据核实。

- 选定流：硬质 PVC 配混料切断粉尘
- 流属性/单位：Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- 数量规则：A_i / Q；按第8节执行唯一一次最终报告操作，使用 cp_material 采集的未除原始分子。
- 数值来源模式：`calculated_value`
- 适用范围：`site_specific`
- 归一化基准：每 1 kg 参考流
- 基准类型：`reference_flow`
- 证据类型：`calculated_from_collection`
- 采集协议：`cp_material`
- 来源：geon-rigid-profile-guide

###### 送处理的冷却回路排污 (`cooling_purge`)

一种送往明确处理去向的实际冷却/清理混合水废物，含实测悬浮/溶解物，不是纯水的基本排放。COD/TOC 与悬浮固体指标不冒充特定化学物质质量。独立清洗化学品/废水或直接排放须按真实组成与去向拆开核实。 天工 UUID 未解决；保留此具体单一交换，数据包使用前须按实际供方/材料/去向证据核实。

- 选定流：PVC 型材冷却排污水
- 流属性/单位：Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- 数量规则：A_i / Q；按第8节执行唯一一次最终报告操作，使用 cp_water 采集的未除原始分子。
- 数值来源模式：`calculated_value`
- 适用范围：`site_specific`
- 归一化基准：每 1 kg 参考流
- 基准类型：`reference_flow`
- 证据类型：`calculated_from_collection`
- 采集协议：`cp_water`
- 来源：geon-rigid-profile-guide

###### 废过滤网 (`spent_screen`)

实际换下的过滤网，其附着 PVC 另作组分核算，合金/物件身份与 filter_screen 一致；不由通用钢密度推算质量。 天工 UUID 未解决；保留此具体单一交换，数据包使用前须按实际供方/材料/去向证据核实。

- 选定流：废不锈钢熔体过滤网
- 流属性/单位：Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- 数量规则：A_i / Q；按第8节执行唯一一次最终报告操作，使用 cp_material 采集的未除原始分子。
- 数值来源模式：`calculated_value`
- 适用范围：`site_specific`
- 归一化基准：每 1 kg 参考流
- 基准类型：`reference_flow`
- 证据类型：`calculated_from_collection`
- 采集协议：`cp_material`
- 来源：geon-rigid-profile-guide

###### 废颗粒包装袋 (`spent_pp_sack`)

仅指 inbound_pp_sack 中真实存在的 PP 袋，独立核对包装衡算与残留污染物，不表示混合塑料包装集合。 天工 UUID 未解决；保留此具体单一交换，数据包使用前须按实际供方/材料/去向证据核实。

- 选定流：废聚丙烯编织袋
- 流属性/单位：Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- 数量规则：A_i / Q；按第8节执行唯一一次最终报告操作，使用 cp_pack 采集的未除原始分子。
- 数值来源模式：`calculated_value`
- 适用范围：`site_specific`
- 归一化基准：每 1 kg 参考流
- 基准类型：`reference_flow`
- 证据类型：`calculated_from_collection`
- 采集协议：`cp_pack`
- 来源：

##### 基本流

###### 实际排入空气的氯化氢 (`hcl_air`)

条件性实测 HCl，CAS 7647-01-0，Elementary 排入未细分空气。原生同义词列含溶液、同位素与清洁剂，不将其当作本气体身份或清洗投入。须确认真实气体物种、游离/结合氯、控制捕集与物理出口。降解风险不证明非零因子、全部氯的化学计量转化或反应水。 原生支持链：质量单位组 93a60a57-a4c8-11da-a746-0800200c9a66，参考单位 kg。

- 选定流：氯化氢 `fe0acd60-3ddc-11dd-aab0-0050c2490048`
- 流属性/单位：Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- 数量规则：A_i / Q；按第8节执行唯一一次最终报告操作，使用 cp_species 采集的未除原始分子。
- 数值来源模式：`calculated_value`
- 适用范围：`site_specific`
- 归一化基准：每 1 kg 参考流
- 基准类型：`reference_flow`
- 证据类型：`calculated_from_collection`
- 采集协议：`cp_species`
- 来源：geon-rigid-profile-guide; dachang-rigid-pvc

###### 净排入空气的水蒸气 (`evaporation`)

条件性普通 H2O，CAS 7732-18-5，Elementary 排入未细分空气，不限定城市近地、高烟囱或长期排放。不采用同义词中的同位素/冰/溶液作为选定身份。以独立水量/湿度测量确定真实净蒸发/干燥水，液滴与液态排水分别核算；熔融/冷却不必然生成反应水。 原生支持链：质量单位组 93a60a57-a4c8-11da-a746-0800200c9a66，参考单位 kg。

- 选定流：水蒸气 `fe0acd60-3ddc-11dd-ac04-0050c2490048`
- 流属性/单位：Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- 数量规则：A_i / Q；按第8节执行唯一一次最终报告操作，使用 cp_water 采集的未除原始分子。
- 数值来源模式：`calculated_value`
- 适用范围：`site_specific`
- 归一化基准：每 1 kg 参考流
- 基准类型：`reference_flow`
- 证据类型：`calculated_from_collection`
- 采集协议：`cp_water`
- 来源：geon-rigid-profile-guide

###### 逸散的配混料颗粒 (`escaped_pvc_particle`)

条件性一种实际配混料气溶胶流，记录组成和受纳隔室；需要时分别测量粒径段。不将总 VOC、不透光度或 COD 转成 PVC/PM10 质量。其他真实挥发化学物种在数据包完成前须逐一命名、规定计量基准并核实身份。 天工 UUID 未解决；保留此具体单一交换，数据包使用前须按实际供方/材料/去向证据核实。

- 选定流：排入空气的硬质 PVC 配混料颗粒
- 流属性/单位：Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- 数量规则：A_i / Q；按第8节执行唯一一次最终报告操作，使用 cp_species 采集的未除原始分子。
- 数值来源模式：`calculated_value`
- 适用范围：`site_specific`
- 归一化基准：每 1 kg 参考流
- 基准类型：`reference_flow`
- 证据类型：`calculated_from_collection`
- 采集协议：`cp_species`
- 来源：geon-rigid-profile-guide

### 过程：已观察成品服务 (`fg_service`)

#### 输入

##### 产品流

###### 配对转入成品库的放行品 (`release_to_stock`)

原生 Product 记录表示工厂内热塑挤出产品族：basename 列举板/管/型材等可选形态，同义词和备注明确包含挤出型材。本行仅表示一款已声明的实心单层硬质 PVC L 形角型材，绝不表示板/管/型材混合篮子。原生 CPC 36390 与更宽的物理描述不一致；披露此分类缺陷，不据此建立 CPC 36310 映射。记录未限定 CAS、聚合物配方、牌号、尺寸、颜色、地理、供方或性能。实际批次规范须补足这些限定信息；通用 UUID 不提供现成背景供应过程。 与 released_angle 配对记录实体 Q 转移，保留每批负荷向量；期初成品属于历史放行，不是新增 Q。 原生支持链：质量单位组 93a60a57-a4c8-11da-a746-0800200c9a66，参考单位 kg。

- 选定流：塑料板、管、型材 `3df20f91-525e-4025-9bba-853e8af68a8e`
- 流属性/单位：Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- 数量规则：A_i / Q；按第8节执行唯一一次最终报告操作，使用 cp_fg 采集的未除原始分子。
- 数值来源模式：`calculated_value`
- 适用范围：`site_specific`
- 归一化基准：每 1 kg 参考流
- 基准类型：`reference_flow`
- 证据类型：`calculated_from_collection`
- 采集协议：`cp_fg`
- 来源：

###### 实物退回的角型材 (`customer_return`)

原生 Product 记录表示工厂内热塑挤出产品族：basename 列举板/管/型材等可选形态，同义词和备注明确包含挤出型材。本行仅表示一款已声明的实心单层硬质 PVC L 形角型材，绝不表示板/管/型材混合篮子。原生 CPC 36390 与更宽的物理描述不一致；披露此分类缺陷，不据此建立 CPC 36310 映射。记录未限定 CAS、聚合物配方、牌号、尺寸、颜色、地理、供方或性能。实际批次规范须补足这些限定信息；通用 UUID 不提供现成背景供应过程。 条件性匹配退回物：保留原发运/放行 ID、退回质量和历史负荷冲回，只增加真实新增返工及服务；重验、再次交付和退回均不产生第二次首次放行。 原生支持链：质量单位组 93a60a57-a4c8-11da-a746-0800200c9a66，参考单位 kg。

- 选定流：塑料板、管、型材 `3df20f91-525e-4025-9bba-853e8af68a8e`
- 流属性/单位：Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- 数量规则：A_i / Q；按第8节执行唯一一次最终报告操作，使用 cp_fg 采集的未除原始分子。
- 数值来源模式：`calculated_value`
- 适用范围：`site_specific`
- 归一化基准：每 1 kg 参考流
- 基准类型：`reference_flow`
- 证据类型：`calculated_from_collection`
- 采集协议：`cp_fg`
- 来源：

###### 成品服务用电 (`fg_electricity`)

原生身份为中国 CN、<1 kV 低压、用户侧交流电消费组合，采用电网平均供应；不表示输配服务或电厂发电组合。仅在实际计量交付接口匹配时采用，否则独立核实实际电压、地理与供方。原生参考为 Net calorific value/MJ。本卡仅含已观察成品仓储、电动搬运、包装和装载，以及其真实空载/清理负荷。制造加热器/驱动保留在 make_electricity；每项服务负荷归原放行批，老批历史单独继承。 原生支持链：能量单位组 93a60a57-a3c8-11da-a746-0800200c9a66，参考单位 MJ。

- 选定流：交流电 `50657322-939c-4829-a87b-47c093bfa6a7`
- 流属性/单位：Net calorific value `93a60a56-a3c8-11da-a746-0800200c9a66` / MJ
- 数量规则：A_i / Q；按第8节执行唯一一次最终报告操作，使用 cp_energy_fg 采集的未除原始分子。
- 数值来源模式：`calculated_value`
- 适用范围：`site_specific`
- 归一化基准：每 1 kg 参考流
- 基准类型：`reference_flow`
- 证据类型：`calculated_from_collection`
- 采集协议：`cp_energy_fg`
- 来源：ilcd-attributional-allocation

###### 纸板运输纸箱 (`shipping_carton`)

条件性实际使用的一种单程纸箱，计量整件质量并记录真实纸板/胶黏剂组成。厂商纸箱供应描述不证明瓦楞结构、密度或包装 UUID。保持其独立空箱/附着库存与随毛实物发运台账；可回用箱或木包装须另列真实物件及回收台账。 天工 UUID 未解决；保留此具体单一交换，数据包使用前须按实际供方/材料/去向证据核实。

- 选定流：纸板运输纸箱
- 流属性/单位：Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- 数量规则：A_i / Q；按第8节执行唯一一次最终报告操作，使用 cp_pack_fg 采集的未除原始分子。
- 数值来源模式：`calculated_value`
- 适用范围：`site_specific`
- 归一化基准：每 1 kg 参考流
- 基准类型：`reference_flow`
- 证据类型：`calculated_from_collection`
- 采集协议：`cp_pack_fg`
- 来源：dachang-rigid-pvc

###### LDPE 防护薄膜 (`ldpe_wrap`)

仅用于实证为 PE-LD 的薄膜。原生 Product/Mass 无 CAS、固定路线、厚度、牌号、地理、同义词/备注或供方；仅支持材料/形态，不证明拉伸性能或实际包装规范。分别记录完整附着膜、施用边角料和随发运膜，不替换成 LDPE 树脂颗粒或混合多层膜。 原生支持链：质量单位组 93a60a57-a4c8-11da-a746-0800200c9a66，参考单位 kg。

- 选定流：低密度聚乙烯薄膜（PE-LD） `2cecd3a7-d90e-44b4-aec5-1d9dfb907477`
- 流属性/单位：Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- 数量规则：A_i / Q；按第8节执行唯一一次最终报告操作，使用 cp_pack_fg 采集的未除原始分子。
- 数值来源模式：`calculated_value`
- 适用范围：`site_specific`
- 归一化基准：每 1 kg 参考流
- 基准类型：`reference_flow`
- 证据类型：`calculated_from_collection`
- 采集协议：`cp_pack_fg`
- 来源：

###### 纸质产品标签 (`paper_label`)

条件性一整件外购纸标签，真实油墨/胶黏剂组成计入一次；质量与产品及纸箱分开。若真实使用可剥离衬纸、打包带或独立胶黏剂，须另设原子卡片，不列为未特指包装余项。 原生 Product 为用于贴标的印刷纸标签，工厂内生产混合、GLO；同义词含纸质贴纸/标签纸，备注为空。未限定 CAS、牌号、油墨/胶黏剂配方、尺寸或供方。宽泛纸张/印刷片材分类不指定本成品标签配置。匹配实际外购整件标签，内含油墨/胶黏剂只计一次。 原生支持链：质量单位组 93a60a57-a4c8-11da-a746-0800200c9a66，参考单位 kg。

- 选定流：纸质标签 `6e3bea7a-9e89-4f50-a065-79feaac682db`
- 流属性/单位：Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- 数量规则：A_i / Q；按第8节执行唯一一次最终报告操作，使用 cp_pack_fg 采集的未除原始分子。
- 数值来源模式：`calculated_value`
- 适用范围：`site_specific`
- 归一化基准：每 1 kg 参考流
- 基准类型：`reference_flow`
- 证据类型：`calculated_from_collection`
- 采集协议：`cp_pack_fg`
- 来源：dachang-rigid-pvc

#### 输出

##### 产品流

###### 角型材毛实物发运 (`gross_shipped_angle`)

原生 Product 记录表示工厂内热塑挤出产品族：basename 列举板/管/型材等可选形态，同义词和备注明确包含挤出型材。本行仅表示一款已声明的实心单层硬质 PVC L 形角型材，绝不表示板/管/型材混合篮子。原生 CPC 36390 与更宽的物理描述不一致；披露此分类缺陷，不据此建立 CPC 36310 映射。记录未限定 CAS、聚合物配方、牌号、尺寸、颜色、地理、供方或性能。实际批次规范须补足这些限定信息；通用 UUID 不提供现成背景供应过程。 按原始放行批报告冲减退回前的实物外运产品质量，排除可拆包装。本行是成品库存移动，不是第二个生产参考或新增 Q；期末成品已包含相应放行材料。 原生支持链：质量单位组 93a60a57-a4c8-11da-a746-0800200c9a66，参考单位 kg。

- 选定流：塑料板、管、型材 `3df20f91-525e-4025-9bba-853e8af68a8e`
- 流属性/单位：Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- 数量规则：A_i / Q；按第8节执行唯一一次最终报告操作，使用 cp_fg 采集的未除原始分子。
- 数值来源模式：`calculated_value`
- 适用范围：`site_specific`
- 归一化基准：每 1 kg 参考流
- 基准类型：`reference_flow`
- 证据类型：`calculated_from_collection`
- 采集协议：`cp_fg`
- 来源：

##### 废物流

###### 损坏的成品角型材 (`damaged_angle`)

放行后实际报废的库存/退货，历史制造负荷及新增服务/返工归原放行账，连接真实废物去向，不以新增 Q 或负采购抹掉。 天工 UUID 未解决；保留此具体单一交换，数据包使用前须按实际供方/材料/去向证据核实。

- 选定流：废弃硬质 PVC 角型材
- 流属性/单位：Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- 数量规则：A_i / Q；按第8节执行唯一一次最终报告操作，使用 cp_fg 采集的未除原始分子。
- 数值来源模式：`calculated_value`
- 适用范围：`site_specific`
- 归一化基准：每 1 kg 参考流
- 基准类型：`reference_flow`
- 证据类型：`calculated_from_collection`
- 采集协议：`cp_fg`
- 来源：

###### 废纸箱 (`carton_waste`)

仅为同一物件的真实废纸箱；仍附着于毛实物发运的包装是外运包装，不是现场废物。另核对污染物与退回。 天工 UUID 未解决；保留此具体单一交换，数据包使用前须按实际供方/材料/去向证据核实。

- 选定流：废纸板运输纸箱
- 流属性/单位：Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- 数量规则：A_i / Q；按第8节执行唯一一次最终报告操作，使用 cp_pack_fg 采集的未除原始分子。
- 数值来源模式：`calculated_value`
- 适用范围：`site_specific`
- 归一化基准：每 1 kg 参考流
- 基准类型：`reference_flow`
- 证据类型：`calculated_from_collection`
- 采集协议：`cp_pack_fg`
- 来源：

###### LDPE 包装膜废料 (`film_waste`)

仅为真实 LDPE 包装膜边角料或拆下的破损膜；纳入完整库存衡算并连接真实厂外处理，不把原生 Product UUID 用作此 Waste。 天工 UUID 未解决；保留此具体单一交换，数据包使用前须按实际供方/材料/去向证据核实。

- 选定流：废 LDPE 防护薄膜
- 流属性/单位：Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- 数量规则：A_i / Q；按第8节执行唯一一次最终报告操作，使用 cp_pack_fg 采集的未除原始分子。
- 数值来源模式：`calculated_value`
- 适用范围：`site_specific`
- 归一化基准：每 1 kg 参考流
- 基准类型：`reference_flow`
- 证据类型：`calculated_from_collection`
- 采集协议：`cp_pack_fg`
- 来源：

###### 废纸标签 (`label_waste`)

一种废弃整件纸标签，包含实际留存的胶黏剂/油墨；标签衬纸及其他真实材料为独立物流。 天工 UUID 未解决；保留此具体单一交换，数据包使用前须按实际供方/材料/去向证据核实。

- 选定流：废印刷纸标签
- 流属性/单位：Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- 数量规则：A_i / Q；按第8节执行唯一一次最终报告操作，使用 cp_pack_fg 采集的未除原始分子。
- 数值来源模式：`calculated_value`
- 适用范围：`site_specific`
- 归一化基准：每 1 kg 参考流
- 基准类型：`reference_flow`
- 证据类型：`calculated_from_collection`
- 采集协议：`cp_pack_fg`
- 来源：

## 7. 分配与共产品处理

| rule_id | Applies to | Rule | source_ids |
| --- | --- | --- | --- |
| allocation_context | all inventory rows | 本方法为归因型，限于研究目标/情境确需分配的情况。先确定情境，不任意在分配与替代间切换。独立计量的专属工序及真实/虚拟细分优先，包括专属材料、质量检验、废品和特定服务历史。 | ilcd-attributional-allocation |
| allocation_causality | all inventory rows | 对剩余共同清单逐交换/共同功能识别并说明决定性物理因果，以实测负载/操作记录为据；同一质量份额不自动适用于加热、冷却、材料嵌入、占用仓储和串行搬运。基荷空载与失败批须入账，不能只分配成功运行时间。 | ilcd-attributional-allocation |
| allocation_residual | genuine remaining multifunctional process | 仅真实无法归属的剩余部分可用真实共同功能在同一共同过程实际出口、同一物理/质量状态的同期市场价值。若仅有后续调节/包装/交付价格，须透明调整还原该门价格并作敏感性分析。证据须确立真实共产品身份及真正共同过程；废物出售或内部回料本身均不证明共产品或避免生产。不设固定比例、自动抵扣或负废物负荷。对每项交换，全部专属/因果/剩余及继承归属之和须等于未除原始量。可比共同功能/过程采用一致准则，并说明有理由的差异。 | ilcd-attributional-allocation |
| asset_manufacture_conservation | 既有资本品及可复用制品制造归属 | 在适用的分配决策情境内，对前景生产、包装或已观察服务中已纳入的实际资本设备或可复用制品按用途归属原始制造负荷时，必须按同一资产建立跨全部作物、产品、批次、制造及放行后服务、所有者和观察期的持久台账。D为有证据支持的完整安装服务总量，即全部已实现历史服务加有依据的剩余服务，其单位须与各受益用途实际服务量u一致；D须为有限正值。当期容量、仅剩余容量、资产或制品自身实物质量以及仅当期产品Q均不能直接作为D；若有证据证明因果服务且与u单位相符，完整服务期的质量通量可用作分母。本规则不按下游寿命摊销本PCR制造的参考产品，也不改变其声明的参考门及Q。u/D与此前已分配的制造份额累计不得超过1。观察期、保管方、供方或维修变化不能重置原始制造负荷余额。替换件使用独立身份，仅计真实新增制造向量；实际维修和处理增量另行保留。服务容量证据修订时，应透明追溯调整既有份额并作敏感性分析，不得另起台账。完整实物质量及存量变动独立于负荷份额。D、既有份额或受益范围不明时须复核，不得给出最终制造负荷归属量；不得假定寿命、利用率、零值或任意分摊。 |  |

## 8. 前景数据采集、计算与质量规则

### 数据采集协议

对本路线既有采集协议中按用途归属已纳入生产、包装或已观察服务资产制造负荷的情形（不摊销本PCR制造的参考产品本身），还须保留持久资产身份、实测完整实物质量及购入/安装/退役存量历史、原始制造负荷向量、全部历史及当前受益用途、同单位服务读数、有证据的完整安装服务分母D、剩余服务依据与不确定性、此前已分配份额及剩余原始制造负荷余额。台账跨观察期及保管方/供方变化持续结转。实际维修、替换、回收和处理分别采集；这些记录不能归一化实物流量或构成另一次资产购入。这些是既有适用协议的补充字段与守恒要求，不是新增假定的资本品清单。

aggregation_rule 单元格声明最终报告基准，不要求在采集时除原始测量。每个 collection_method 均保留未除分子并引用第8节同一唯一操作。

| protocol_id | process_id | flow_role | record_type | raw_fields | collection_method | unit | frequency | temporal_coverage | site_scope | aggregation_rule | quality_evidence |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| cp_material | profile_make | pvc_compound; filter_screen; clean_pvc_offcut; degraded_pvc; captured_pvc_dust; spent_screen | weighing_and_supply_record | 批次ID; 供方; 完整制剂; 供货形态; 毛质量; 皮重; 净质量; 分析; 期初原料; 期末原料; 到货; 领用质量; 废物质量; 去向; 滤网合金; 服役记录; 校准ID | 用校准秤称量完整到货/领用及每项独立废物，关联供方规范与组分分析。核对原料库存变化、污染物及实物流失，包括失败/清机/试验材料；保留记录单位。 保留未除原始数量及库存核对，由 cp_stock 构成 A_i；仅 normalize_once 报告每 1 kg 参考流结果。 | kg | 每次到货与领用；每个运行批及废物转移 | 完整批组，包括启停、空载、清理；库存截点匹配 | 一条声明型材线及供方/牌号批组 | 每 1 kg 参考流 | 校准；发票；完整制剂规范；分析；废物票据；滤网更换记录 |
| cp_energy | profile_make | make_electricity | meter_record | 表ID; 电压; 地理; 供方; 区间起点; 区间终点; 起始kWh; 终止kWh; 真实功率速率; 运行状态; 服务批; 共享负载; 因果驱动量; 基荷空载; 分配决策 | 读取每个工序及服务的校准分表差值；仅在无积分表时对独立实测功率速率积分。包括实际干燥和辅助耗能；原始单位换算后按第7节处理共享负载。 保留未除区间能量；kWh 转 MJ 后归属，在 cp_stock/cp_fg 中继承向量；仅 normalize_once 报告每 1 kg 参考流结果。 | kWh; MJ | 每个操作及服务区间 | 连续完整批组及声明成品服务窗口 | 真实 CN <1 kV 用户交付接口；制造/成品表分开 | 每 1 kg 参考流 | 表计校准；账单；负载调查；空载日志；分配敏感性 |
| cp_energy_fg | fg_service | fg_electricity | meter_record | 表ID; 电压; 地理; 供方; 区间起点; 区间终点; 起始kWh; 终止kWh; 真实功率速率; 运行状态; 服务批; 共享负载; 因果驱动量; 基荷空载; 分配决策 | 读取成品仓储/搬运/包装/装载校准分表差值，包括其真实空载和清理区间。制造能耗保留在 cp_energy，每项未除服务分子归原放行批。 保留未除区间能量；kWh 转 MJ 后归属，在 cp_stock/cp_fg 中继承向量；仅 normalize_once 报告每 1 kg 参考流结果。 | kWh; MJ | 每个操作及服务区间 | 声明已观察成品服务窗口及原放行历史 | 真实 CN <1 kV 用户交付接口；制造/成品表分开 | 每 1 kg 参考流 | 表计校准；账单；负载调查；空载日志；分配敏感性 |
| cp_water | profile_make | cooling_makeup; cooling_purge; evaporation | water_balance_record | 表ID; 原单位; 补水; 期初循环水; 期末循环水; 循环量; 液态排污; 夹带液滴; 产品留存水; 实测净蒸发; 温度; 压力; 密度依据; 入口湿度; 出口湿度; 真实流率; 时间区间; 处理去向 | 计量/称量补水、每个真实出口及储水；独立测密度/状态和空气净水分转移；按真实线确认闭式或开式水系统。分别核对游离、留存及相变水，不能以一个残差拟合两个未知。 保留未除原始数量与独立确定的库存/相态项；cp_stock 提供 A_i；仅 normalize_once 报告每 1 kg 参考流结果。 | kg; m3 | 每个区间及排水事件 | 完整批组，包括清理与无产出期间 | 真实挤出/定型/冷却/干燥水回路 | 每 1 kg 参考流 | 表计试验；密度/状态记录；样品；湿度校准；水衡算；处理联单 |
| cp_species | profile_make | hcl_air; escaped_pvc_particle | speciated_emission_record | 样品ID; 物种; CAS; 粒径; 受纳隔室; 控制边界; 浓度; 浓度单位; 实际或标准体积; 积分体积; 真实体积流率; 区间; 温度; 压力; 湿度; 检出限; 捕集质量; 组成 | 在真实出口及控制捕集处测量各气体/颗粒物种，包括启机/降解事件；识别实际基质/隔室及湿干基。浓度乘匹配的体积数量换算，不能将已积分体积再乘时间。未检出仅为有界证据，不是通用零。 保留未除实测物种数量及不确定性；cp_stock 归属 A_i；仅 normalize_once 报告每 1 kg 参考流结果。 | kg; mg/m3; m3 | 代表运行状态及每次异常事件 | 完整批组，明确代表/未代表区间 | 具体挤出/切断排气及逸散边界 | 每 1 kg 参考流 | 实验室方法；原始色谱或化学结果；流量校准；检出限；不确定性 |
| cp_release | profile_make | released_angle | quality_release_record | 放行ID; 母批; 图纸; 配混牌号; 尺寸; 实测长度; 调节后质量; 毛质量; 包装皮重; 水分; 切断长度; 外观验收; 图纸公差; 试验结果; 首次放行标记; 不合格质量; 重验ID | 称量冷却调节后的裸角型材，按认可图纸记录尺寸/外观及合同要求试验；唯一识别首次正向放行。破坏试样、废品与后续重验为独立事件，不增加合格质量。 不作其他除法，仅对唯一首次放行净质量求和得到 Q；仅 normalize_once 表示 1 kg 参考流。 | kg; m; mm | 每批及每次放行决定 | 声明首次放行批组，追溯先前在制品 | 工厂放行门的同牌号/图纸/状态 | 每 1 kg 参考流 | 校准秤；认可图纸；真实放行/试验记录；水分协议；重复ID核查 |
| cp_stock | profile_make | all manufacturing rows and internal regrind | stock_and_burden_vector_record | 批次ID; 物理状态; 期初在制品质量; 期末在制品质量; 期初回料; 期末回料; 内部转移ID; 初始组分分析; 逐交换继承向量; 本期原始向量; 状态换算; 专属归属; 因果归属; 剩余归属; 去向向量; Q | 在匹配截点独立称量库存，逐批跨期追溯每组分/交换负荷。配对回料出入，纳入真实粉碎能耗/损失，原配混料不重复计负荷。把本期及继承负荷归至放行批、在制品、废物与真实共同功能，不抹去。 在换算及第7节归属后保留逐行原生单位的未除 A_i 向量；仅 normalize_once 报告每 1 kg 参考流结果。 | kg; row-native numerator units | 每次转移及期间截点 | 完整继承及当期批组历史 | 同制造线批组及实物库存地点 | 每 1 kg 参考流 | 期初/期末盘点称量；母子批关联；向量守恒；失败/返工日志 |
| cp_fg | fg_service | release_to_stock; customer_return; gross_shipped_angle; damaged_angle | finished_stock_service_record | 原放行ID; 发运ID; 退回ID; 期初成品; 期末成品; 新放行Q; 毛发运质量; 实物退回; 退回负荷向量; 原交付冲回; 损坏; 新增返工向量; 储存时长; 搬运事件; 继承向量; 服务截点 | 核对实物期初成品 + 新 Q + 外部实物退回 = 期末成品 + 毛实物发运 + 真实报废成品。保留原放行/交付历史，退回时先冲回原交付归属再增加真实新服务/返工。老批负荷分别继承，库存或重验不变成新增产量。 保留未除实物移动和各放行批服务 A_i 向量；合并时配对抵消内部 Q；仅 normalize_once 用原始 Q 报告每 1 kg 参考流。 | kg; h; row-native numerator units | 每次移动/退回及截点 | 放行至已观察服务截点；披露未结束区间 | 同真实成品/仓储/发运边界及可追溯放行批 | 每 1 kg 参考流 | 库存核对；发运/退回票据；原交付冲回；时间戳；向量审计 |
| cp_pack | profile_make | inbound_pp_sack; spent_pp_sack | article_specific_packaging_record | 物件ID; 组成; 供方; 整件质量; 期初空包装; 期初在制附着; 期初成品附着; 期初可回用; 外购; 已含供方包装; 外部回收收到; 期末空包装; 期末在制附着; 期末成品附着; 期末可回用; 随毛实物外运附着; 对外退回; 废物; 内部复用; 污染物 | 对每种真实物件分别称量核对：期初空/在制附着/成品附着/可回用 + 外购或供方已含物件到货 + 外部回收收到 = 四状态期末 + 随毛实物外运包装 + 对外退回 + 废物。付费采购与已含/回收物件区分。可回用或额外包装须另设明确卡片。 保持未除物件衡算；内部复用抵消，不增加采购、产品 Q 或自动共产品；仅 normalize_once 报告每 1 kg 参考流可归属 A_i。 | kg; item | 每次到货、施用、移动和截点 | 完整供方到货及成品服务期间 | 每次一种实物类型，不作混合篮子 | 每 1 kg 参考流 | 物件物料表；实测皮重；发票；完整毛发运/退回记录；废物证据 |
| cp_pack_fg | fg_service | shipping_carton; ldpe_wrap; paper_label; carton_waste; film_waste; label_waste | article_specific_packaging_record | 物件ID; 组成; 供方; 整件质量; 期初空包装; 期初在制附着; 期初成品附着; 期初可回用; 外购; 已含供方包装; 外部回收收到; 期末空包装; 期末在制附着; 期末成品附着; 期末可回用; 随毛实物外运附着; 对外退回; 废物; 内部复用; 污染物 | 对每种真实物件分别称量核对：期初空/在制附着/成品附着/可回用 + 外购或供方已含物件到货 + 外部回收收到 = 四状态期末 + 随毛实物外运包装 + 对外退回 + 废物。付费采购与已含/回收物件区分。可回用或额外包装须另设明确卡片。 保持未除物件衡算；内部复用抵消，不增加采购、产品 Q 或自动共产品；仅 normalize_once 报告每 1 kg 参考流可归属 A_i。 | kg; item | 每次到货、施用、移动和截点 | 完整供方到货及成品服务期间 | 每次一种实物类型，不作混合篮子 | 每 1 kg 参考流 | 物件物料表；实测皮重；发票；完整毛发运/退回记录；废物证据 |

### 计算规则

| rule_id | Applies to | Formula or rule | Inputs | Output | source_ids |
| --- | --- | --- | --- | --- | --- |
| raw_convert | all inventory rows | 在归属前换算记录质量/长度/能量与独立实证物理状态；仅对真实速率积分，已积分数量只保留一次时间积分；保留原单位及确切换算依据。 | cp_material; cp_energy; cp_energy_fg; cp_water; cp_species; cp_release | converted_raw_vector |  |
| attribute_vector | all inventory rows | A_i 是归至同一原首次放行批组、保持行原生单位且尚未除的分子：期初继承向量加换算后当期活动，减独立确定的期末在制品/回料继承及真实其他共同功能归属，按第7节分配并保留所有真实失败/返工负荷。成品服务仍归原放行批。不能以一个残差拟合两个未知出口或负荷。 | converted_raw_vector; cp_stock; cp_fg; cp_pack; cp_pack_fg | A_i | ilcd-attributional-allocation |
| first_release_quantity | released_angle | Q = 唯一首次正向放行的调节后角型材净千克数之和；失败/重复/退回/再次交付质量不进入新增生产。撤销放行须按原 ID 与负荷历史核对，不暗中替换分母。 | cp_release; cp_stock | Q |  |
| normalize_once | all inventory rows | Q > 0 时 x_i = A_i / Q；A_i 保留本行物理分子单位，Q 是同批组首次放行千克数。仅最终报告执行一次；卡片及协议聚合均引用同一次操作。released_angle 表示 1 千克。Q = 0 时保留全部原始负荷/库存，不报单位结果；不作除法、不丢失败负荷、不借另一批分母。 | A_i; Q; cp_release | x_i |  |
| gate_conservation | all inventory rows | 独立闭合含期初/期末在制品/回料及实物 Q 的制造质量/组分衡算；按 cp_fg 闭合成品衡算。合并时抵消配对内部 Q 及回料：外部期初库存加真实外来材料/水/包装到货及退回，等于期末库存加对外产品/包装毛发运、对外退回、废物及实测排放。能量不加进物理质量。Q 保持为放行归一化事件，不作额外合并实物出口。C/Cl 与相关助剂元素衡算须独立于物种及物理水/相态证据核对。 | cp_material; cp_water; cp_species; cp_stock; cp_fg; cp_pack; cp_pack_fg; cp_release | gate_balance_residuals |  |
| asset_manufacture_share | 既有资本品及可复用制品制造归属 | 仅在持久台账核实有依据的完整安装服务分母、全部受益用途及既有已分配份额后，对每项已纳入原始资产制造向量B计算f_current = u_current / D。在既有单次参考量归一化前，将f_current * B仅一次归属于实际受益用途。检查prior_shares加全部当前/新增受益用途份额不超过1，并结转剩余原始余额。容量修订须追溯核对历史台账。完整实物资产/包装质量及实际总存量/退回量不得乘f_current。D或历史不明时，最终归属结果保持不可用，但仍保留实际维修、替换及服务负荷。 | asset_id; original_B; u_current; D; historical_beneficiaries; prior_shares; capacity_evidence | 守恒的制造负荷归属向量 |  |

### 数据质量要求

| requirement_id | Applies to | Requirement | Evidence |
| --- | --- | --- | --- |
| dq_identity | 所有行及参考流 | 完整组成/形态/路线/状态和原生 UUID 限制保留于可消费描述与元数据。确认实际中国低压交付并匹配所有供方；空缺辅助 UUID 须核实，不编造集合绑定。 | 供方规范与完整原生身份/支持链证据 |
| dq_complete | 完整批组 | 不例行删去无产出/失败/空载/清理/返工；保持批次库存及每个继承交换向量。披露每项省略/未测工序/物种及未结束成品服务窗口。缺测是数据缺口，不是零。 | 事件日志及库存/向量闭合 |
| dq_measurement | 原始记录与计算 | 保留校准、试验规范、采样代表性、单位、方法不确定性、检出限与完整期间/场址覆盖。数量来自场址特定后续真实记录，不由本方法捏造。来源范围不构成通用 QA 接受限值。 | 原始数据、校准及不确定性预算 |
| dq_sources | 依赖来源的方法 | 采用原始上下文及替代路线；工业加工证据不建立分配方法。不同来源间不声称共同 SKU、配方或工厂。独立科学/翻译审查与机械检查分开。 | 主来源原件及含明确迁移限制的 ILCD 情境 |

## 9. 校验规则

| rule_id | Applies to | Rule | source_ids |
| --- | --- | --- | --- |
| validate_reference | released_angle | 要求同物件/牌号/图纸/状态、全部声明限定信息、唯一 cp_release ID 及显式 reference_flow_link。确认 1 千克调节后净产品排除全部包装，库存、重验、退回或发运不产生第二个 Q。 | tp-rigid-pvc-equal-angles; geon-rigid-profile-guide |
| validate_inventory | all inventory rows | 每项真实交换均有独立物理/化学卡片及方向/类型、原生属性/单位、描述、协议和来源。核对原始身份/形态/路线/CAS/介质/属性约束，不只核对名称或分类。缺失或冲突的辅助身份保持明确，解决前阻断受影响数据包使用。 |  |
| validate_conservation | all inventory rows | 执行 raw_convert、attribute_vector、first_release_quantity、normalize_once 和 gate_conservation。按测量不确定性核对独立质量、C/Cl/其他相关元素、真实水/物种、包装及继承向量衡算。未知保持未解决；调整残差、假定物种或重复归一化均不能证明闭合。 |  |
| validate_allocation | all shared activities | 先核对专属/虚拟细分，再核对逐交换决定性物理因果，最后仅对有理由的剩余用同门同期市场价值。保留所有份额/边界和敏感性，不自动抵扣废料或对所有交换用同一分配键。 | ilcd-attributional-allocation |
| validate_readiness | completed dataset | 数据集宣称完整前须有真实供货/图纸/验收及期间特定观察。Q = 0 不产生单位结果。未观察的成品后续服务不能支持完整发运门声明。方法检查不构成科学/翻译批准、映射接受或发布。 | geon-rigid-profile-guide |
| validate_asset_manufacture_conservation | 既有资本品及可复用制品制造归属 | 对每项已纳入资本品/可复用制品制造归属，检查同一资产连续性、同单位完整安装服务、全部历史及当前受益用途、既有已分配制造份额和累计份额不超过1。拒绝按观察期、批次、供方、所有者或维修重置。真实替换件及维修/处理增量向量分别核对，保留完整实物质量。分母缺失、既有分配无法解释或受益台账不完整时，须明确复核且最终归属量不可用；结构检查不能声称已获实测完整性。 |  |

## 10. 发布数据集画像

| Field | Value |
| --- | --- |
| dataset_role | secondary_dataset; background_dataset |
| downstream_use | 供后续组装、安装或独立建模产品系统使用的指定质量基型材制造投入 |
| allowed_use | 仅用于匹配硬质 PVC 等边角型材路线/状态及声明首次放行门，按原放行批纳入真实已观察服务 |
| excluded_use | 整个 CPC 36310 覆盖；结构/热/防火/寿命等价；替代管/板/纱或完整建筑；自动再生成分/避免负荷抵扣 |
| required_metadata | 第3节全部限定信息、真实供方、完整物料表、特定状态放行及库存/向量历史、关联上游运输与废物处理、分配及资本品边界 |
| required_quality_disclosure | 期间/场址覆盖、实测与缺失数量、空缺辅助身份、通用原生产品族限制、不确定性、分配敏感性及已观察/未结束服务期间 |
| update_trigger | 牌号/形态/图纸/路线/供方变化、冷却或控制改变、增加包装/化学品、新放行证据、后续服务及独立审查 |

## 11. 数据源

| Source id | Type | Reference | Used for |
| --- | --- | --- | --- |
| un-cpc3-2025 | official_guidance | UNSD CPC Version 3.0, Structure and Explanatory Notes, 30 June 2025, pp.177–179. https://unstats.un.org/unsd/classifications/Econ/Download/In%20Text/CPC_Ver_3.0_Exp_Notes_30Jun2025.pdf | 仅支持半制成型材类别及相邻/残余排他，不提供配方或映射接受 |
| geon-rigid-profile-guide | handbook | GEON Rigid Vinyl Profiles Extrusion Guide; 2019 contents, 2021 copyright footer; printed pp.2–5 and 9, full disclaimer. https://www.geon.com/hubfs/Content/BC_Building-and-Construction/PG_Processing-Guide/PG0014BC_GEON-Rigid-Vinyl-Extrusion-Guide.pdf | 支持完整颗粒/粒块配混料、单螺杆路线、实际干燥条件、成型/冷却/牵引/切断、回料/降解/质量问题及粉料/双螺杆反例。不提供操作/用量/性能默认值或分配证据。 |
| tp-rigid-pvc-equal-angles | extension_guidance | TP Extrusions, Plastic Equal Angles, publisher product page, snapshot 2026-10-16. https://www.tpextrusions.com/index.php/products/angles/plastic-pvc-equal-angles/ | 独立真实硬质 PVC 等边角型材产品、图纸/几何/供应身份；不证明共同 GEON SKU、配方、密度或寿命 |
| dachang-rigid-pvc | extension_guidance | Dachang Plastic Hardware Processing Factory, Rigid PVC Profile, publisher page, snapshot 2026-10-16. https://www.dachangplastic.com/pvc-profile/rigid-pvc-profile/ | 独立硬质角型材/后处理/包装语境及相反的厂内粉料配混路线。不采用来源温度、助剂配方、牌号、声明或工厂速率。 |
| njpt-pvc-coextrusion | extension_guidance | N.J. Precision Technologies, Rigid PVC/Flexible PVC, publisher tooling case, snapshot 2026-10-16. https://www.njpt.com/plastic-extrusion/pvc/ | 具有独立熔体进料与软唇/表层的硬/软共挤具体反例；不支持本单层配方或分配 |
| ilcd-attributional-allocation | official_guidance | European Commission JRC, ILCD Handbook, General guide for Life Cycle Assessment—Detailed guidance, First edition March 2010, §§7.9.2–7.9.3, printed pp.255–272. https://eplca.jrc.ec.europa.eu/uploads/ILCD-Handbook-General-guide-for-LCA-DETAILED-GUIDANCE-12March2010-ISBN-fin-v1.0-EN.pdf | 仅支持归因型且确需分配情境：专属/虚拟细分、逐交换决定性物理因果及真实剩余同门市场价值；不支持工业路线、数量或任意替代。 |
