---
pcr_id: pcr.other-transportable-goods-except-metal-products-machinery-and-equipment.products-of-wood-cork-straw-and-plaiting-materials.wet-process-untrimmed-wood-softboard
language: zh-CN
status: candidate
content_maturity: authored_methodology
translation_status: reviewed
sync_with: pcr.en-US.md
---

# 干燥调湿交付点的湿法未修边木软质纤维板

## 1. 范围与适用性

本方法覆盖一个明确牌号的无涂层、单层、低密度木软质纤维板：以收货清洁木片为起点，经热水软化、常压纤维分离、水性浆料制备、湿法成形、真空/冷辊脱水、间接干燥及调湿，交付给下游修边与精整工序。产品为干燥调湿后的板材。交付点必须有真实可测的材料状态、接收规格、数量、含水率及继承清单；仅将内部湿板坯改名不能成立该边界。EPA 将板材干燥机与精整分开，USDA 也将纤维素软质板的干燥安排在可选的干后处理之前。[epa-wet-fibreboard-2002; usda-wood-handbook-2021]

仅在自然纤维结合及分别购入的石蜡、天然淀粉、硫酸铝施胶配方有据可查时采用本路线；每种未使用的成分须明确为不适用，不预设配方或用量。外购整配方施胶乳液须先补足自身身份和配方模型。本范围仅使用外购天然气来源热量，经间接换热边界计量净交付量，不含现场燃烧、蒸汽注入及制热设备。其他燃料来源、混合热源和其他供应边界须先建立独立证据支持的路线及原子公用工程身份，方可采用本方法；不包括干法 MDF、热压密实的硬质纤维板/HDF、刨花板、非木纤维板、树脂结合或沥青处理板、覆面/层压板，以及交付后的干板修边、砂光、涂饰、包装和发运。经这些操作售出的产品必须补入真实精整清单并使用相应参考状态。[epa-wet-fibreboard-2002; usda-wood-handbook-2021]

CPC 3.0 将 MDF（31441）、硬质纤维板（31442）和其他纤维板（31449）分列。本湿法木软质板中间产品仅覆盖 31449 的较窄子集；分类名称或宽泛流名不能证明具体牌号、热源、建筑性能或方法学批准。[un-cpc3-2025]

## 2. 产品类别身份

| 字段 | 值 |
| --- | --- |
| canonical_pcr_id | pcr.other-transportable-goods-except-metal-products-machinery-and-equipment.products-of-wood-cork-straw-and-plaiting-materials.wet-process-untrimmed-wood-softboard |
| classification_refs | CPC 3.0 31449 Other fibreboard；narrower |
| covered_products | 湿法成形、低密度、无涂层单层木软质纤维板，在干板修边/精整之前完成干燥和调湿 |
| excluded_products | MDF；硬质纤维板/HDF；刨花板；非木纤维板；湿板坯；树脂结合/沥青处理/覆面板；已修边包装的成品板 |
| representative_product | 以干燥并调湿的未修边板材交给精整接收方的指定木软质板牌号 |
| production_route | 木片收货 → 热水软化/常压纤维分离 → 浆料制备 → 湿法成形/冷脱水 → 间接干燥/调湿 |
| market_state | 干燥调湿交付点的实测制造中间产品；不声称为成品建筑材料或发运产品 |

## 3. 参考流

| 字段 | 值 |
| --- | --- |
| What | 向精整接收方供应干燥调湿后的湿法未修边木软质板 |
| How much | 指定交付点的 1 kg 验收合格板材净质量；分母 Q 为首次验收板材，期末新验收中间品库存仅计一次 |
| How well | 声明牌号、密度/调湿测试、净含水率、厚度和实际面积，并满足精整接收规格；不预设热阻、成品尺寸或强度等级 |
| How long or cycle | 一个制造批次至干燥调湿交付点首次验收；不预设使用寿命或精整收率 |
| reference_flow_link | board |

| 字段 | 值 |
| --- | --- |
| 参考数量 | 1 |
| 参考产品流 | 干燥并调湿板材 `5677877c-d6cd-423a-a0de-1aa6420a3c4e` |
| 参考流属性 | Mass `93a60a56-a3c8-11da-a746-0800200b9a66` |
| 参考单位组 | Units of mass `93a60a57-a4c8-11da-a746-0800200c9a66` |
| 参考单位 | kg |
| 必需限定信息 | 木材树种及来源；低密度软质板牌号和密度测试；纯木纤维原料；单层/无覆面；湿法成形和冷脱水；无硬质板热压密实；确切施胶成分/含量/水合状态；实测净含水率/调湿状态；未修边面积/厚度；真实干燥交付接收方及验收规格；外购天然气热量边界；木片实积/堆积体积规程；批次/库存/交接记录 |

每个具体数据包必须携带限定信息。天工流身份表示进入修边/精整的湿法干燥调湿板材；特定软质板牌号和未修边交付点必须由生产方与接收方证明。质量参考不表示精整已经完成。

## 4. 测量与单位规则

| rule_id | 适用对象 | 必需属性 | 必需单位 | 规则 |
| --- | --- | --- | --- | --- |
| reference_mass | board | Mass `93a60a56-a3c8-11da-a746-0800200b9a66` | kg | cp_reference 在干燥调湿交付点称量首次验收板材净重。Q 包含期末新验收库存且仅计一次；剔除包装、未验收在制品/废品及已验收退回品。所有生产交换使用同一 Q，按每 1 kg 参考流归一化。 |
| geometry | board | Mass; Volume; area | kg; m3; m2 | cp_reference 在与质量 m 相同试样/含水率下测量未修边面积 A、厚度 t 和调湿密度 rho，核对 m = A × t × rho。每参考 kg 面积为 1/(t × rho)。不能使用木片堆积密度或下游修边尺寸。 |
| moisture | wood_chips; board; rejected_sized_board; captured_unsized_fibre; sludge | Mass | kg | cp_material 分别记录湿重、水和干固体：干基 u = 水/干固体；湿基 w = 水/湿总量；u = w/(1-w)，干固体 = 湿总量/(1+u)。木材固体与施胶固体分列，不预设换算含水率。 |
| chip_volume | wood_chips | Volume `93a60a56-a3c8-22da-a746-0800200c9a66` | m3 | cp_material 声明供方实际实积/堆积体积、堆积状态、密度、温度和含水率。仅用匹配实测湿密度将湿重换为体积；供方 m3 不兼容时上游链接仍不完整。 |
| energy | electricity; heat | Energy; net delivered heat | MJ | cp_energy 按 3.6 MJ/kWh 换算电表记录。热量须匹配供回流质量、温度、压力、介质和焓；供方燃料热值或蒸汽总能量不能替代净交付热量。 |
| transport | freight_chips | Mass times distance | t*km | cp_transport 使用实运湿吨数和逐段载货 km；1 t*km = 1000 kg*km。保留载重/返程口径并核对提供方边界，不编造密度、载荷或距离。 |

## 5. 系统边界

### 边界抽象

| 字段 | 值 |
| --- | --- |
| declared_starting_condition | 已交付清洁木片，已知来源、树种、含水率、供方交付点及实积/堆积体积口径 |
| starting_condition_role | foreground_gate_input |
| product_classification_scope | 干燥调湿交付点的湿法低密度木软质纤维板，CPC31449 子集 |
| recursive_input_rule | 内部纤维/白水循环只在物理账中计一次；外部接收的同类板材须有独立已核实身份及继承提供方，不能编造递归生产链 |
| upstream_dataset_requirement | 兼容的林业/残余物产生/削片提供方、电力、施胶、水、外购热量、实际运输及废物处理提供方；身份不能证明其清单向量 |
| disclosure | 实际场址、时段、起始条件、干燥交付点、供方/接收方、公用工程/治理/处理边界、循环、库存移动、损失及排除的精整/使用/寿命终结 |

| rule_id | applies_to | rule | source_ids |
| --- | --- | --- | --- |
| boundary_stages | wet_board | 包含木片收货/储存、热水软化、常压纤维分离/筛选、实际洗涤、配浆、网部铺浆、真空/冷脱水、间接干燥/调湿、交接检验及相关纤维/水回收和排放控制。在综合单元内保留分阶段原始平衡。 | `epa-wet-fibreboard-2002`; `usda-wood-handbook-2021` |
| boundary_handoff | board | 终点为精整接收方对干燥调湿未修边板材的实测验收。其上游制造负荷只计一次。排除后续干板修边/砂光/涂饰/包装/发运；下游模型须承接本板材输入并添加这些实测操作及损失后才能声明成品板。 | `epa-wet-fibreboard-2002`; `usda-wood-handbook-2021` |
| boundary_utilities | wet_board | 仅覆盖外购天然气来源间接热量，不能证明现场燃料或锅炉排放。其他热源/混合来源在独立取证前不在本路线内。实际蒸汽注入、燃烧、额外化学品/制冷剂、外部包装或直接排放须有独立证据支持的原子交换及范围审查。未列出的交换不等于零。 | `epa-wet-fibreboard-2002` |
| boundary_providers | wet_board | 来源削片/预处理、运输、制热及外部处理均保留在各自真实提供方中且不重叠。木片提供方携带的碳吸收只计一次。转交处理的废水为废物流，不能同时将同一水量和污染物重复记作基本排放。 | |

分别追踪阶段状态：木片收货；热水软化/纤维分离；筛后浆料与施胶；冷脱水后湿板坯；干板；交付点验收调湿板；纤维/水回收。每次内部转移的两端保持相等湿量、含水率、组成和继承清单向量，不为每阶段编造产品销售或 Q。EPA/USDA 历史温度、时间、含水率及配方观察不作为现代工厂默认值。[epa-wet-fibreboard-2002; usda-wood-handbook-2021]

## 6. 过程清单结构

### 过程图

| process_id | process_name | inclusion | inclusion_condition | role | quantitative_reference |
| --- | --- | --- | --- | --- | --- |
| wet_board | 综合湿法未修边软质板生产 | required | 明确的纯木纤维、冷脱水路线，仅用外购天然气间接热量，具有真实干燥调湿交付点 | 收货/纤维分离/配浆/成形/干燥/调湿/治理；保留阶段计量和物理状态 | board |

### 过程：综合湿法未修边软质板生产（`wet_board`）

#### 输入

##### 产品流

###### 木片（`wood_chips`）

仅限收货清洁木片。保留来源林地/残余物状态、树种、预处理、供方交付点及实测含水率/体积。宽泛身份不能证明供方分配、实积/堆积口径或绝干质量换算。

- 选定流：木片 `3fa2a6a7-224c-4d99-bd55-a214f0a83161`
- 流属性/单位：Volume `93a60a56-a3c8-22da-a746-0800200c9a66` / m3
- 数量规则：使用 cp_material 和 cp_stock 采集本原子交换的原始总量、单位、阶段和来源。与批次及期初/期末原料、在制品和已验收板材库存对应，按实测因果归属同一首次验收批次后除以 cp_reference 的 Q（每 1 kg 参考流）。已验收退回品不新增 Q；其服务依 allocation_stock 使用匹配的原验收子批质量及继承向量，不能采用本新生产分母。无记录为未知，不能默认为零；仅在有据证明不存在时记 not_applicable。
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每 1 kg 参考流
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_material`
- 来源：`epa-wet-fibreboard-2002`; `usda-wood-handbook-2021`

###### 交流电（`electricity`）

用于纤维分离、泵、真空、干燥风机、调湿和治理的用户侧 1–35 kV 电网平均供电。所选中国身份仅在地域/电压和提供方兼容时适用；其他供电须另核身份。

- 选定流：交流电 `3d76981f-964a-4865-b588-0e067a2a1163`
- 流属性/单位：Net calorific value `93a60a56-a3c8-11da-a746-0800200c9a66` / MJ
- 数量规则：使用 cp_energy 和 cp_stock 采集本原子交换的原始总量、单位、阶段和来源。与批次及期初/期末原料、在制品和已验收板材库存对应，按实测因果归属同一首次验收批次后除以 cp_reference 的 Q（每 1 kg 参考流）。已验收退回品不新增 Q；其服务依 allocation_stock 使用匹配的原验收子批质量及继承向量，不能采用本新生产分母。无记录为未知，不能默认为零；仅在有据证明不存在时记 not_applicable。
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每 1 kg 参考流
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_energy`
- 来源：`epa-wet-fibreboard-2002`; `usda-wood-handbook-2021`

###### 工艺用水（`process_water`）

仅记录外部补充工艺用水，保留供方水质和湿质量。内部回收白水、返回凝结水及稀释循环不能重复作为购入。

- 选定流：工艺用水 `94a04f7e-2d5c-41f0-b182-d54a3b373a02`
- 流属性/单位：Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- 数量规则：使用 cp_material 和 cp_stock 采集本原子交换的原始总量、单位、阶段和来源。与批次及期初/期末原料、在制品和已验收板材库存对应，按实测因果归属同一首次验收批次后除以 cp_reference 的 Q（每 1 kg 参考流）。已验收退回品不新增 Q；其服务依 allocation_stock 使用匹配的原验收子批质量及继承向量，不能采用本新生产分母。无记录为未知，不能默认为零；仅在有据证明不存在时记 not_applicable。
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每 1 kg 参考流
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_material`
- 来源：`epa-wet-fibreboard-2002`; `usda-wood-handbook-2021`

###### 石蜡（`paraffin`）

指定施胶配方中分别购入的纯石油来源石蜡；记录含量及实际保留/损失量。外购整配方蜡乳液在独立建模前不属于本分开配料范围。

- 选定流：石蜡 `17bff97f-179d-49d4-9e97-5128bd6020a6`
- 流属性/单位：Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- 数量规则：使用 cp_material 和 cp_stock 采集本原子交换的原始总量、单位、阶段和来源。与批次及期初/期末原料、在制品和已验收板材库存对应，按实测因果归属同一首次验收批次后除以 cp_reference 的 Q（每 1 kg 参考流）。已验收退回品不新增 Q；其服务依 allocation_stock 使用匹配的原验收子批质量及继承向量，不能采用本新生产分母。无记录为未知，不能默认为零；仅在有据证明不存在时记 not_applicable。
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每 1 kg 参考流
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_material`
- 来源：`epa-wet-fibreboard-2002`; `usda-wood-handbook-2021`

###### 淀粉（`starch`）

仅在实际使用时记录分别购入的未改性天然淀粉，保留植物来源、牌号、含水率和实际留着率。改性淀粉或树脂胶是其他输入，须审查范围。

- 选定流：淀粉 `e5842f16-31b3-4ea4-b16a-f7b06beeb6c3`
- 流属性/单位：Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- 数量规则：使用 cp_material 和 cp_stock 采集本原子交换的原始总量、单位、阶段和来源。与批次及期初/期末原料、在制品和已验收板材库存对应，按实测因果归属同一首次验收批次后除以 cp_reference 的 Q（每 1 kg 参考流）。已验收退回品不新增 Q；其服务依 allocation_stock 使用匹配的原验收子批质量及继承向量，不能采用本新生产分母。无记录为未知，不能默认为零；仅在有据证明不存在时记 not_applicable。
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每 1 kg 参考流
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_material`
- 来源：`epa-wet-fibreboard-2002`; `usda-wood-handbook-2021`

###### 硫酸铝，粉末（`alum`）

仅在实际使用时记录分别购入的硫酸铝粉末沉淀助剂，记录水合状态、含量及另行供应的稀释水。不推定通用配方或固体完全留着。

- 选定流：硫酸铝，粉末 `1c9f77ea-7da1-42a6-a2ec-d2d4580913c7`
- 流属性/单位：Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- 数量规则：使用 cp_material 和 cp_stock 采集本原子交换的原始总量、单位、阶段和来源。与批次及期初/期末原料、在制品和已验收板材库存对应，按实测因果归属同一首次验收批次后除以 cp_reference 的 Q（每 1 kg 参考流）。已验收退回品不新增 Q；其服务依 allocation_stock 使用匹配的原验收子批质量及继承向量，不能采用本新生产分母。无记录为未知，不能默认为零；仅在有据证明不存在时记 not_applicable。
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每 1 kg 参考流
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_material`
- 来源：`epa-wet-fibreboard-2002`; `usda-wood-handbook-2021`

###### 润滑油（`lubricant`）

本路线设备实际消耗的石油润滑油；核对收货、库存和维护记录，确认实际牌号，不从身份记录热值推算清单数量。

- 选定流：润滑油 `66628f20-9d33-4997-bd6c-6357453fa268`
- 流属性/单位：Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- 数量规则：使用 cp_material 和 cp_stock 采集本原子交换的原始总量、单位、阶段和来源。与批次及期初/期末原料、在制品和已验收板材库存对应，按实测因果归属同一首次验收批次后除以 cp_reference 的 Q（每 1 kg 参考流）。已验收退回品不新增 Q；其服务依 allocation_stock 使用匹配的原验收子批质量及继承向量，不能采用本新生产分母。无记录为未知，不能默认为零；仅在有据证明不存在时记 not_applicable。
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每 1 kg 参考流
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_material`
- 来源：`epa-wet-fibreboard-2002`; `usda-wood-handbook-2021`

###### 非铰接货车运输（`freight_chips`）

仅适用于与本运输身份及提供方载荷/空返口径一致的实际非铰接柴油货运重型车，总重 >31.0 t。记录实运湿重及实际逐段距离，木片生产与单购运输边界不得重叠；其他车型/方式须另列原子服务卡。

- 选定流：非铰接货车运输 `fba6a49d-22e7-4ce6-81d1-3aa2bfd41ba4`
- 流属性/单位：Mass times distance `118f2a40-50ec-457c-aa60-9bc6b6af9931` / t*km
- 数量规则：使用 cp_transport 和 cp_stock 采集本原子交换的原始总量、单位、阶段和来源。与批次及期初/期末原料、在制品和已验收板材库存对应，按实测因果归属同一首次验收批次后除以 cp_reference 的 Q（每 1 kg 参考流）。已验收退回品不新增 Q；其服务依 allocation_stock 使用匹配的原验收子批质量及继承向量，不能采用本新生产分母。无记录为未知，不能默认为零；仅在有据证明不存在时记 not_applicable。
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每 1 kg 参考流
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_transport`
- 来源：`epa-wet-fibreboard-2002`; `usda-wood-handbook-2021`

###### 外购天然气工业净热量（`heat`）

供热水软化及间接干燥使用的外购天然气工业净热量。实测供回流焓及提供方边界。燃料体积或蒸汽总能量记录不能替代本净交付热量身份；UUID 尚未确认。

- 选定流：外购天然气工业净热量
- 流属性/单位：Net delivered thermal energy / MJ
- 数量规则：使用 cp_energy 和 cp_stock 采集本原子交换的原始总量、单位、阶段和来源。与批次及期初/期末原料、在制品和已验收板材库存对应，按实测因果归属同一首次验收批次后除以 cp_reference 的 Q（每 1 kg 参考流）。已验收退回品不新增 Q；其服务依 allocation_stock 使用匹配的原验收子批质量及继承向量，不能采用本新生产分母。无记录为未知，不能默认为零；仅在有据证明不存在时记 not_applicable。
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每 1 kg 参考流
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_energy`
- 来源：`epa-wet-fibreboard-2002`; `usda-wood-handbook-2021`

#### 输出

##### 产品流

###### 干燥并调湿板材（`board`）

干燥调湿后首次验收、按指定牌号/规格交给精整接收方的未修边木软质板。在该交付点实测净 Q，保留干固体、施胶、水、几何及继承交换向量。它既不是湿板坯，也不是已修边成品板。

- 选定流：干燥并调湿板材 `5677877c-d6cd-423a-a0de-1aa6420a3c4e`
- 流属性/单位：Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- 数量规则：1 kg
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每 1 kg 参考流
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_reference`
- 来源：`epa-wet-fibreboard-2002`; `usda-wood-handbook-2021`

##### 废物流

###### 已施胶木软质板材废品（`rejected_sized_board`）

一种在干燥交付点验收不合格的已施胶、已干燥调湿木软质板材废品收集流，作为非团聚废木材外送。单独记录其实际施胶组成、调湿含水率、污染物、实测质量和接收方/处理；不含捕获的未施胶纤维粉尘、湿板坯边料及内部回用料。内部回收为独立物理循环；下游干板修边仍不在本范围。

- 选定流：废木材 `2ef9d37a-2fbf-42f6-8ccf-5d6677d5cfd8`
- 流属性/单位：Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- 数量规则：使用 cp_waste 和 cp_stock 采集本原子交换的原始总量、单位、阶段和来源。与批次及期初/期末原料、在制品和已验收板材库存对应，按实测因果归属同一首次验收批次后除以 cp_reference 的 Q（每 1 kg 参考流）。已验收退回品不新增 Q；其服务依 allocation_stock 使用匹配的原验收子批质量及继承向量，不能采用本新生产分母。无记录为未知，不能默认为零；仅在有据证明不存在时记 not_applicable。
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每 1 kg 参考流
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_waste`
- 来源：`epa-wet-fibreboard-2002`; `usda-wood-handbook-2021`

###### 捕获的未施胶木纤维粉尘（`captured_unsized_fibre`）

仅在木片收货除尘器实际存在时，记录其中在接触施胶化学品前收集的一种干态未施胶木纤维粉尘。记录除尘器/阶段、干木质和水分、污染物、质量及实际外部回收/处理状态；不含已施胶板材废品、湿浆/污泥或排入空气的颗粒。返回生产线时保留实测回收循环，不记外送废物流。不存在须有证据；其他除尘器或混合流须有自身原子行。

- 选定流：废木材 `2ef9d37a-2fbf-42f6-8ccf-5d6677d5cfd8`
- 流属性/单位：Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- 数量规则：使用 cp_waste 和 cp_stock 采集本原子交换的原始总量、单位、阶段和来源。与批次及期初/期末原料、在制品和已验收板材库存对应，按实测因果归属同一首次验收批次后除以 cp_reference 的 Q（每 1 kg 参考流）。已验收退回品不新增 Q；其服务依 allocation_stock 使用匹配的原验收子批质量及继承向量，不能采用本新生产分母。无记录为未知，不能默认为零；仅在有据证明不存在时记 not_applicable。
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每 1 kg 参考流
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_waste`
- 来源：`epa-wet-fibreboard-2002`; `usda-wood-handbook-2021`

###### 污泥（`sludge`）

一种外送处理的脱水纤维回收污泥，称湿重并分列干固体和水；核对污染、接收要求及处理边界，通用污泥身份不能证明可处理性。

- 选定流：污泥 `725c8f6e-7975-4155-a250-1f95ef70c508`
- 流属性/单位：Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- 数量规则：使用 cp_waste 和 cp_stock 采集本原子交换的原始总量、单位、阶段和来源。与批次及期初/期末原料、在制品和已验收板材库存对应，按实测因果归属同一首次验收批次后除以 cp_reference 的 Q（每 1 kg 参考流）。已验收退回品不新增 Q；其服务依 allocation_stock 使用匹配的原验收子批质量及继承向量，不能采用本新生产分母。无记录为未知，不能默认为零；仅在有据证明不存在时记 not_applicable。
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每 1 kg 参考流
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_waste`
- 来源：`epa-wet-fibreboard-2002`; `usda-wood-handbook-2021`

###### 废润滑油（`waste_oil`）

单独收集并外送处理的废润滑油，记录产生质量、污染及去向并核对油品库存；不与污泥或纤维废物合并。

- 选定流：废润滑油 `55d93375-7f04-4166-b2a2-88ce929051a5`
- 流属性/单位：Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- 数量规则：使用 cp_waste 和 cp_stock 采集本原子交换的原始总量、单位、阶段和来源。与批次及期初/期末原料、在制品和已验收板材库存对应，按实测因果归属同一首次验收批次后除以 cp_reference 的 Q（每 1 kg 参考流）。已验收退回品不新增 Q；其服务依 allocation_stock 使用匹配的原验收子批质量及继承向量，不能采用本新生产分母。无记录为未知，不能默认为零；仅在有据证明不存在时记 not_applicable。
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每 1 kg 参考流
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_waste`
- 来源：`epa-wet-fibreboard-2002`; `usda-wood-handbook-2021`

###### 未经处理的木纤维板工艺废水（`effluent`）

一种转交外部处理的液态排污水，不含内部循环白水。记录体积、实测密度、干固体、溶解有机物、污染物及处理接收条件。身份尚未确认，不能用处理后水或直接水基本排放替代。

- 选定流：未经处理的木纤维板工艺废水
- 流属性/单位：Mass / kg
- 数量规则：使用 cp_waste 和 cp_stock 采集本原子交换的原始总量、单位、阶段和来源。与批次及期初/期末原料、在制品和已验收板材库存对应，按实测因果归属同一首次验收批次后除以 cp_reference 的 Q（每 1 kg 参考流）。已验收退回品不新增 Q；其服务依 allocation_stock 使用匹配的原验收子批质量及继承向量，不能采用本新生产分母。无记录为未知，不能默认为零；仅在有据证明不存在时记 not_applicable。
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每 1 kg 参考流
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_waste`
- 来源：`epa-wet-fibreboard-2002`; `usda-wood-handbook-2021`

##### 基本流

###### 一氧化碳（生物源）（`co_bio`）

仅独立测量CAS630-08-0并证明木碳来源、真实相态/区室及来源/治理区间时适用。本间接外购热路线不自动假定燃烧器排放； 仅为空气、未指定；已知更细真实室外区室时须另核兼容身份。

- 选定流：一氧化碳（生物源） `8a313a02-e251-11e6-bf01-fe55135034f3`
- 流属性/单位：Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- 数量规则：使用 cp_emissions 和 cp_stock 采集本原子交换的原始总量、单位、阶段和来源。与批次及期初/期末原料、在制品和已验收板材库存对应，按实测因果归属同一首次验收批次后除以 cp_reference 的 Q（每 1 kg 参考流）。已验收退回品不新增 Q；其服务依 allocation_stock 使用匹配的原验收子批质量及继承向量，不能采用本新生产分母。无记录为未知，不能默认为零；仅在有据证明不存在时记 not_applicable。
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每 1 kg 参考流
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_emissions`
- 来源：`epa-wet-fibreboard-2002`; `usda-wood-handbook-2021`

###### 甲酸（`formic_acid`）

仅独立检出CAS64-18-6的来源特定排放，记录气/气溶胶分区及真实空气区室。不由乙酸、总VOC、可凝结颗粒物或COD推断； 仅为空气、未指定，CAS64-18-6；已知更细室外区室时须另核身份。

- 选定流：甲酸 `08a91e70-3ddc-11dd-9424-0050c2490048`
- 流属性/单位：Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- 数量规则：使用 cp_emissions 和 cp_stock 采集本原子交换的原始总量、单位、阶段和来源。与批次及期初/期末原料、在制品和已验收板材库存对应，按实测因果归属同一首次验收批次后除以 cp_reference 的 Q（每 1 kg 参考流）。已验收退回品不新增 Q；其服务依 allocation_stock 使用匹配的原验收子批质量及继承向量，不能采用本新生产分母。无记录为未知，不能默认为零；仅在有据证明不存在时记 not_applicable。
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每 1 kg 参考流
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_emissions`
- 来源：`epa-wet-fibreboard-2002`; `usda-wood-handbook-2021`

###### 颗粒物 (PM2.5)（`pm25`）

排入室外空气的可过滤PM2.5，使用同一排放源和治理条件。捕集粉尘仍属于回收物料或废物。

- 选定流：颗粒物 (PM2.5) `08a91e70-3ddc-11dd-9293-0050c2490048`
- 流属性/单位：Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- 数量规则：使用 cp_emissions 和 cp_stock 采集本原子交换的原始总量、单位、阶段和来源。与批次及期初/期末原料、在制品和已验收板材库存对应，按实测因果归属同一首次验收批次后除以 cp_reference 的 Q（每 1 kg 参考流）。已验收退回品不新增 Q；其服务依 allocation_stock 使用匹配的原验收子批质量及继承向量，不能采用本新生产分母。无记录为未知，不能默认为零；仅在有据证明不存在时记 not_applicable。
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每 1 kg 参考流
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_emissions`
- 来源：`epa-wet-fibreboard-2002`; `usda-wood-handbook-2021`

###### 颗粒物 (PM2.5 - PM10)（`pmcoarse`）

排入室外空气的可过滤PM2.5–PM10；仅在两项监测具有相同源、时间和治理条件时，采用同口径累计PM10减PM2.5。

- 选定流：颗粒物 (PM2.5 - PM10) `08a91e70-3ddc-11dd-9501-0050c2490048`
- 流属性/单位：Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- 数量规则：使用 cp_emissions 和 cp_stock 采集本原子交换的原始总量、单位、阶段和来源。与批次及期初/期末原料、在制品和已验收板材库存对应，按实测因果归属同一首次验收批次后除以 cp_reference 的 Q（每 1 kg 参考流）。已验收退回品不新增 Q；其服务依 allocation_stock 使用匹配的原验收子批质量及继承向量，不能采用本新生产分母。无记录为未知，不能默认为零；仅在有据证明不存在时记 not_applicable。
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每 1 kg 参考流
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_emissions`
- 来源：`epa-wet-fibreboard-2002`; `usda-wood-handbook-2021`

###### 颗粒物（> PM10）（`pmover10`）

排入室外空气的大于PM10的可过滤颗粒物，采用同口径总可过滤PM减PM10。不得将可凝结颗粒物直接划入本粒径段。

- 选定流：颗粒物（> PM10） `fe0acd60-3ddc-11dd-a70a-0050c2490048`
- 流属性/单位：Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- 数量规则：使用 cp_emissions 和 cp_stock 采集本原子交换的原始总量、单位、阶段和来源。与批次及期初/期末原料、在制品和已验收板材库存对应，按实测因果归属同一首次验收批次后除以 cp_reference 的 Q（每 1 kg 参考流）。已验收退回品不新增 Q；其服务依 allocation_stock 使用匹配的原验收子批质量及继承向量，不能采用本新生产分母。无记录为未知，不能默认为零；仅在有据证明不存在时记 not_applicable。
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每 1 kg 参考流
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_emissions`
- 来源：`epa-wet-fibreboard-2002`; `usda-wood-handbook-2021`

###### 甲醛（`formaldehyde`）

磨浆/干燥/调湿中检出的木材来源甲醛排入室外空气；不加树脂不等于零排放。保留检出限。

- 选定流：甲醛 `08a91e70-3ddc-11dd-941b-0050c2490048`
- 流属性/单位：Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- 数量规则：使用 cp_emissions 和 cp_stock 采集本原子交换的原始总量、单位、阶段和来源。与批次及期初/期末原料、在制品和已验收板材库存对应，按实测因果归属同一首次验收批次后除以 cp_reference 的 Q（每 1 kg 参考流）。已验收退回品不新增 Q；其服务依 allocation_stock 使用匹配的原验收子批质量及继承向量，不能采用本新生产分母。无记录为未知，不能默认为零；仅在有据证明不存在时记 not_applicable。
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每 1 kg 参考流
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_emissions`
- 来源：`epa-wet-fibreboard-2002`; `usda-wood-handbook-2021`

###### 甲醇（`methanol`）

实测排入室外空气的甲醇，精确物种，不是甲基苯甲醇或总VOC。不得套用区域锯木厂调查因子。

- 选定流：甲醇 `fe0acd60-3ddc-11dd-a935-0050c2490048`
- 流属性/单位：Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- 数量规则：使用 cp_emissions 和 cp_stock 采集本原子交换的原始总量、单位、阶段和来源。与批次及期初/期末原料、在制品和已验收板材库存对应，按实测因果归属同一首次验收批次后除以 cp_reference 的 Q（每 1 kg 参考流）。已验收退回品不新增 Q；其服务依 allocation_stock 使用匹配的原验收子批质量及继承向量，不能采用本新生产分母。无记录为未知，不能默认为零；仅在有据证明不存在时记 not_applicable。
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每 1 kg 参考流
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_emissions`
- 来源：`epa-wet-fibreboard-2002`; `usda-wood-handbook-2021`

###### 乙酸（`acetic_acid`）

木材加工中实测排入室外空气的乙酸（CAS 64-19-7），不得用吲哚乙酸替代。该身份为空气未特指介质；已知更具体室外子介质时须采用已核实的相容身份。采集乙酸物种质量，不以总VOC碳当量代替。

- 选定流：乙酸 `08a91e70-3ddc-11dd-92c3-0050c2490048`
- 流属性/单位：Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- 数量规则：使用 cp_emissions 和 cp_stock 采集本原子交换的原始总量、单位、阶段和来源。与批次及期初/期末原料、在制品和已验收板材库存对应，按实测因果归属同一首次验收批次后除以 cp_reference 的 Q（每 1 kg 参考流）。已验收退回品不新增 Q；其服务依 allocation_stock 使用匹配的原验收子批质量及继承向量，不能采用本新生产分母。无记录为未知，不能默认为零；仅在有据证明不存在时记 not_applicable。
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每 1 kg 参考流
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_emissions`
- 来源：`epa-wet-fibreboard-2002`; `usda-wood-handbook-2021`

###### 二氧化碳（生物源）（`co2bio`）

声明边界内木材分解或氧化实际释放的生物源二氧化碳，即使某温室气体口径从指标中排除，也须保留于LCI。本外购热路线不假定现场燃烧。

- 选定流：二氧化碳（生物源） `08a91e70-3ddc-11dd-9c15-0050c2490048`
- 流属性/单位：Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- 数量规则：使用 cp_emissions 和 cp_stock 采集本原子交换的原始总量、单位、阶段和来源。与批次及期初/期末原料、在制品和已验收板材库存对应，按实测因果归属同一首次验收批次后除以 cp_reference 的 Q（每 1 kg 参考流）。已验收退回品不新增 Q；其服务依 allocation_stock 使用匹配的原验收子批质量及继承向量，不能采用本新生产分母。无记录为未知，不能默认为零；仅在有据证明不存在时记 not_applicable。
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每 1 kg 参考流
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_emissions`
- 来源：`epa-wet-fibreboard-2002`; `usda-wood-handbook-2021`

###### 甲烷 (生物源)（`ch4bio`）

仅在实测或现场特定降解模型支持时记录生物源甲烷，识别木材/有机碳来源；不得假定厂门外废水处理排放。

- 选定流：甲烷 (生物源) `fe0acd60-3ddc-11dd-a8e8-0050c2490048`
- 流属性/单位：Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- 数量规则：使用 cp_emissions 和 cp_stock 采集本原子交换的原始总量、单位、阶段和来源。与批次及期初/期末原料、在制品和已验收板材库存对应，按实测因果归属同一首次验收批次后除以 cp_reference 的 Q（每 1 kg 参考流）。已验收退回品不新增 Q；其服务依 allocation_stock 使用匹配的原验收子批质量及继承向量，不能采用本新生产分母。无记录为未知，不能默认为零；仅在有据证明不存在时记 not_applicable。
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每 1 kg 参考流
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_emissions`
- 来源：`epa-wet-fibreboard-2002`; `usda-wood-handbook-2021`

###### 水蒸气（`water_vapour`）

湿毡净蒸发到室外空气的水，核对补充水、木片/板材水分、循环白水、冷凝水、废水及污泥水。

- 选定流：水蒸气 `fe0acd60-3ddc-11dd-ac04-0050c2490048`
- 流属性/单位：Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- 数量规则：使用 cp_emissions 和 cp_stock 采集本原子交换的原始总量、单位、阶段和来源。与批次及期初/期末原料、在制品和已验收板材库存对应，按实测因果归属同一首次验收批次后除以 cp_reference 的 Q（每 1 kg 参考流）。已验收退回品不新增 Q；其服务依 allocation_stock 使用匹配的原验收子批质量及继承向量，不能采用本新生产分母。无记录为未知，不能默认为零；仅在有据证明不存在时记 not_applicable。
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每 1 kg 参考流
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_emissions`
- 来源：`epa-wet-fibreboard-2002`; `usda-wood-handbook-2021`

## 7. 分配与联产品处理

| rule_id | applies_to | rule | source_ids |
| --- | --- | --- | --- |
| allocation_direct | wet_board | 原始物理向量 V 与归属负荷 A 分开保留。先细分真实操作，或依据阶段/批次证据将仅属于某一功能的交换虚拟归属。对剩余不可分多功能操作，分别识别各交换的决定性物理因果关系；只有缺少该关系的剩余交换才使用分流点实际状态下各功能有证据的市场价值。缺少因果、兼容价格或研究情景依据时保留未解决；不得通用质量/时间/等分。 | `ilcd-attributional-allocation-2010` |
| allocation_recovery | rejected_sized_board; captured_unsized_fibre; sludge | 内部回用纤维与白水为循环，包含真实回收能耗和损失，不构成联产品抵扣。外送残余物须明确法律/材料状态、接收用途、组成、相关价格和实际处理。共享产生负荷与分流后回收/处理负荷分开；状态或分配未知时保留未解决。本有限层级不建立回收分配或替代收益，后者须有明确兼容研究方法。 | `ilcd-attributional-allocation-2010` |
| allocation_sources | wood_chips | 从兼容上游提供方继承林业/残余物产生和削片负荷且仅计一次。残余物名称不能证明上游零负荷。整供货中的木材、含水和施胶组成分区不能重复作为独立购入。 | `ilcd-attributional-allocation-2010` |
| allocation_stock | board | 对已识别原批次 c，Qc 为其在同一干燥调湿交付点首次验收的原始净 kg，Ec 为继承生产交换向量，xc = Ec/Qc。保留原验收证据及期初/期末库存。退回/复检/再调湿子批保留其在 Qc 内的原验收净质量 q_c 及匹配 xc；实际后续服务交换仅归属该可追踪子批，按 q_c 归一化（整批均受服务时才用 Qc），与新生产分账。绝不以无关新 Q 除旧板服务或重新制造原板。Qc、原验收子批质量或继承向量未知时，即使有新的称量结果也保留未解决。 | `ilcd-attributional-allocation-2010` |

本方法为归因型中间品清单方法。仅在声明研究情景适合分配时，采用 ILCD 第 7.9.2–3 节支持的有限细分及逐交换分配层级；不据此授权替代、回收抵扣或整体 ILCD 合规声明。明确批次/库存和交付要求是附加作者规定。保留各因果关系及剩余市场价值计算的证据、局限和敏感性；分配证据不足时保留未解决。外送残余物不自动获得替代产品抵扣。

## 8. 前景数据采集、计算与质量规则

### 数据采集协议

| protocol_id | process_id | flow_role | record_type | raw_fields | collection_method | unit | frequency | temporal_coverage | site_scope | aggregation_rule | quality_evidence |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| cp_reference | wet_board | board | 验收交接及库存记录 | 牌号；批次；日期；首次验收；湿净重；含水率；面积；厚度；密度；接收规格；库存状态 | 在干燥调湿交付点用校准称量及匹配含水率/几何测试，核对生产方与接收方  Q = 首次验收净 kg，期末新验收板材只计一次；剔除包装、废品、在制品及已验收退回品；作为每 1 kg 参考流分母| kg; m2; m; kg/m3 | 每批次/交接 | 匹配生产及库存时段 | 实际生产线及接收方 | 每 1 kg 参考流 | 秤校准；实验室/试验方法；签认交接；库存核对 |
| cp_material | wet_board | wood_chips; process_water; paraffin; starch; alum; lubricant | 收货、配方及阶段材料平衡 | 供方/牌号；来源；批次；湿重；干固体；水；体积口径；密度；含量/水合状态；阶段；期初/期末库存 | 称收货和领用量、采样含水率/含量、计量外部水，保留实际分开配料及阶段账  用 cp_stock 核对净消耗及阶段/批次归属；同批次总量除以 cp_reference 的 Q，按每 1 kg 参考流归一化；内部循环不重复输入| kg; m3 | 交货/批次及计量时段 | 与 Q 相同批次时段 | 实际纳入生产线 | 每 1 kg 参考流 | 供方规格；校准；含水率重复样；配方和留着记录 |
| cp_energy | wet_board | electricity; heat | 公用工程计量及焓记录 | 起止读数；时间；阶段；电压/地域；介质组成；供回流质量/温度/压力；焓；提供方边界 | 使用同步生产线/阶段仪表，核对发票边界和净热量，扣除单独计量的不纳入精整  保留阶段总量及 cp_stock 归属；kWh × 3.6，计算供回差净热；同批次 MJ 除以 Q，按每 1 kg 参考流归一化| MJ; kWh | 与批次匹配的计量时段 | 与 Q 相同批次时段 | 纳入阶段及实际公用工程供方 | 每 1 kg 参考流 | 校准；焓方法；仪表覆盖；公用工程背景兼容性 |
| cp_transport | wet_board | freight_chips | 供方运单及车辆记录 | 湿吨数；起终点；载货 km；车辆/燃料；载重/返程口径；提供方纳入阶段 | 核对真实运单和路线段，比对木片与货运提供方边界  按兼容提供方及批次合计湿 t × 载货 km，再除以 Q，按每 1 kg 参考流归一化；不使用通用空返系数| t; km; t*km | 每次进货运输 | 与 Q 相同批次时段 | 实际木片供应链 | 每 1 kg 参考流 | 运单；路线证据；车辆身份；边界核对 |
| cp_waste | wet_board | rejected_sized_board; captured_unsized_fibre; effluent; sludge; waste_oil | 废物外送及处理记录 | 来源阶段；湿重；干固体；水；废水密度/体积；污染物浓度；法律状态；接收方；处理；库存 | 各原子物流分别称量，采样污泥/废水并记录处理接收，区分内部回用料  用 cp_stock、水/固体/污染物账核对各流；废水体积 × 实测匹配密度得 kg；同批次总量除以 Q，按每 1 kg 参考流归一化| kg; m3; mg/l | 每车及代表性采样时段 | 与 Q 相同批次时段 | 纳入生产线/治理及实际接收方 | 每 1 kg 参考流 | 秤/流量校准；采样方法；转移凭证；接收许可 |
| cp_emissions | wet_board | 各基本排放流卡 | 来源特定排气/逸散实测及水平衡 | 物种/CAS；相态；环境介质；时间；来源；治理；浓度；干/湿气基准；参考温压；流量；运行小时；检出限；水分进出 | 匹配物种浓度和体积流量实测，按实际运行积分，独立核对蒸发水  相同基准下合计 C × 气体体积 × 10^-6 kg/mg，实测逸散只加一次；用 cp_stock 归属批次后除以 Q，按每 1 kg 参考流归一化；保留低于检出限界限，不编造零| kg; mg/m3; m3/h; h | 每种来源/治理状态的代表时段 | 与 Q 相同批次时段 | 纳入的木片/纤维分离/成形/干燥/调湿/治理来源 | 每 1 kg 参考流 | 试验方法；原始时间序列；相态/介质匹配；校准；不确定性；治理 |
| cp_stock | wet_board | 所有交换及继承向量 | 原料/在制品/已验收板材账 | 期初/期末数量和交换向量；收货；转移；首次验收；退回；废品；损失；批次；阶段；时间戳 | 按实际批次追踪收货、纤维分离、浆料、板坯、干板和调湿状态，核对内部转移两端  各守恒组分满足期初 + 外部进入 = 流出 + 期末 + 实测损失；保留继承向量，仅归入可证明的当批贡献再除以 Q，按每 1 kg 参考流归一化；Q=0 不相除| 各行原生单位；kg 干固体；kg 水 | 每批次及期末结账 | 与 Q 相同且链接旧批次的时段 | 实际纳入仓储/生产线及交付点 | 每 1 kg 参考流 | 不可改写批次历史；盘点；生产方/接收方核对；差异说明 |

### 计算规则

| rule_id | 适用对象 | 公式或规则 | 输入 | 输出 | source_ids |
| --- | --- | --- | --- | --- | --- |
| calc_reference | 所有清单行 | 仅对新生产，在 cp_stock 归属后 x_i = E_i,cohort / Q；E_i,cohort 不含旧板继承生产负荷及旧板服务。必须 Q > 0；板材行为 Q/Q = 1。Q=0、闲置或清理时段保留原始负荷及有据后续归属，不除零也不丢弃。 | 原始交换；因果批次链接；Q | 各行原生单位/每 1 kg 参考流 | |
| calc_stock | 各守恒组分及继承交换 | 期初库存 + 实际进入 = 实际流出 + 期末库存 + 实测损失。原料/在制品/已验收库存及其交换向量分开。回用/退回板材保留原 Qc、Ec 及验收子批 q_c，服务账使用 q_c 而非无关新 Q。原分母/向量缺失时保留未解决。内部转移在综合边界内抵消。 | 阶段/批次/库存记录；V 和 A 向量 | 可审计组分及负荷核对 | |
| calc_solids_water | 木片；浆料；湿板坯；干/调湿板；废物 | 湿总量 = 水 + 木干固体 + 实际施胶干固体。逐阶段追踪各来源组成留着/损失及水；内部白水在外部账抵消。进水 + 期初水 = 板材水 + 废水/污泥/废品水 + 净蒸发 + 期末水 + 其他实测流出。 | 实测质量；含水率；配方；水/凝结水记录 | 阶段平衡及净蒸发 | `usda-wood-handbook-2021` |
| calc_heat | heat | 对匹配实际边界/时段合计 H = sum(m_supply × h_supply - m_return × h_return)，使用实测介质组成及一致参考态。最终背景链接前须解决身份/属性/提供方。 | 质量流量；介质；温度；压力；焓参考 | 净交付 MJ，再按每 1 kg 参考流归一化 | |
| calc_emissions | 基本排放 | 物种质量 = 匹配浓度 × 匹配气体体积并明确单位换算；累计颗粒粒级仅在来源/时段/基准一致时相减。PM2.5、PM2.5–PM10 和 >PM10 不重叠。总 VOC 以碳计、COD、可过滤与可凝结颗粒是不同测量，不能互作物种。 | 来源特定浓度；气体流量/时间；检出限；治理 | 各排放物种 kg/每 1 kg 参考流 | `epa-wet-fibreboard-2002` |
| calc_carbon | 木材及含碳施胶料 | 按来源核对实测输入碳与板材/废物/库存碳及排放碳。不编造通用木材含碳率、吸收、降解气体收率或施胶 100% 留着。已核实上游吸收仅继承一次，生物源排放分列保留。 | 实际组成及来源比例；阶段库存；实测物种 | 来源特定碳账及明确未解决残差 | |
| calc_downstream | 精整接收方 | 按验收 kg 继承完整干燥交付板材清单。成品输出须有实际接收板材量、精整输入/排放和损失，不预设 1:1 收率。几何组成分区不是额外购入。 | 交付量/向量；实际下游记录 | 兼容中间品提供方链接；无精整不能得成品结果 | |

### 数据质量要求

| requirement_id | 适用对象 | 要求 | 证据 |
| --- | --- | --- | --- |
| dq_scope | 参考流及各交换 | 同一指定牌号、纯木纤维湿法冷脱水路线、干燥交付点、场址和一致时段；保留真实阶段状态与来源/提供方边界。额外路线组分须明确扩展。 | 生产方/接收方规格；路线观察；工艺图 |
| dq_identity | UUID 行及未解决行 | 流完整名称、类型、定量参考/属性/单位、地域、路线及排放介质须符合实际交换。声称完整背景链接研究前须解决热量/废水及额外必要交换。 | 直接记录及支持链；供方/接收方兼容性；明确缺口 |
| dq_measurement | 材料、公用工程及排放 | 保留原始实测值、校准、采样覆盖、不确定性及检出界限。无记录为未知。独立对照水、干固体、施胶及碳账，调查残差而非编造闭合系数。 | cp_reference 至 cp_stock 证据及不确定性记录 |
| dq_sources | 文献及数量 | EPA 2002 和 USDA 2021 支持定性路线/状态区分；历史数字不是通用消耗、含水率、配方、排放因子或性能默认值。本方法未建立兼容多源经验数量范围。 | 来源/页码适用性评估及真实前景记录 |
| dq_functions | 产品声称 | 没有测试配置、尺寸、含水率、性能及情景匹配时，不按 kg 比较热工/声学/建筑服务。未修边中间品不能证明成品标准。 | 实际试验报告及下游精整规格 |

## 9. 校验规则

| rule_id | applies_to | rule | source_ids |
| --- | --- | --- | --- |
| validate_scope | board | 确认实际湿法木软质板及干燥调湿接收交付点。拒绝用 MDF、硬质板、湿板坯、刨花板、覆面/树脂板或已修边成品替代。检查全部参考限定及生产方/接收方数量和状态一致。 | `un-cpc3-2025`; `epa-wet-fibreboard-2002`; `usda-wood-handbook-2021` |
| validate_basis | 所有行 | 各归一化交换须由同一正 Q 及批次支持。检查首次验收、期初/期末原料/在制品/已验收库存、退回及继承向量；核对干固体、施胶、水和碳。缺少因果拆分或残差未知时，结论不充分。 | |
| validate_flows | 所有行 | 每卡为一种真实原子交换。核对 UUID 完整记录身份/属性/单位及实际背景/提供方范围；热量/废水缺失身份或必要额外交换均保留为明确缺口。有效 UUID 不能证明数量、发生或处理。 | |
| validate_emissions | 排放及废物 | 区分捕获物料、外部处理转移与真实基本排放；保留物种、相态、环境介质、治理和检出界限。避免颗粒/VOC 或废水重复计数，未测量排放不等于零。 | `epa-wet-fibreboard-2002` |
| validate_completion | 研究 | 报告已执行/跳过检查、发现及未解决覆盖。方法或检查结果本身不能证明完整链接研究、成品比较、独立科学批准或发布。 | |

## 10. 发布数据集画像

| 字段 | 值 |
| --- | --- |
| dataset_role | 场址特定湿法未修边木软质板中间品提供方的候选指导；实际研究须披露自身证据/状态 |
| downstream_use | 向匹配修边/精整工序传递验收干燥调湿板材量及继承完整交换向量 |
| allowed_use | 透明厂内清单；只有完整兼容上游/运输/处理链接及明确未解决覆盖时，才用于摇篮至本交付点 |
| excluded_use | 成品板、包装发运或建筑功能声明；默认配方/能耗/排放因子；仅凭分类推断方法或研究批准 |
| required_metadata | 全部参考限定；真实供方/接收方/交付点；场址/时段；牌号；路线/阶段状态；Q；库存/批次链接；原始单位/含水率；提供方边界；身份/属性/单位证据；分配依据 |
| required_quality_disclosure | 校准；采样；不确定性；来源年代/适用性；缺失交换/身份/提供方/数量；未解决平衡；实际执行/跳过检查；研究审查状态 |
| update_trigger | 牌号/配方/原料、公用工程/热源/治理/处理、交付规格、上游提供方、重大库存/收率行为变化或新兼容证据 |

## 11. 数据源

| Source id | Type | Reference | Used for |
| --- | --- | --- | --- |
| un-cpc3-2025 | official_guidance | UNSD，CPC Version 3.0 官方结构，2025-06-30；[官方结构 CSV](https://unstats.un.org/unsd/classifications/Econ/Download/In%20Text/CPC_Ver_3.0_Structure_30Jun2025.csv)，31441、31442、31449 条目 | 仅用于分类区分，不表示方法批准或完整覆盖 |
| epa-wet-fibreboard-2002 | official_guidance | 美国 EPA，AP-42 第 10.6.4 节 Hardboard and Fiberboard Manufacturing，2002-09，印刷页 10.6.4-4–5、图 10.6.4-3 及排放讨论；[官方 PDF](https://www.epa.gov/sites/default/files/2020-10/documents/c10s0604.pdf) | 湿法木纤维路线、添加剂、冷脱水、精整前板材干燥、来源/治理特定排放关注；不采用历史因子或设置为默认值 |
| usda-wood-handbook-2021 | official_guidance | USDA Forest Products Laboratory，Wood Handbook—Wood as an Engineering Material，FPL-GTR-282（2021），第 11 章印刷页 11-15，Cellulosic Fiberboard 与 Finishing Techniques；[官方 PDF](https://www.govinfo.gov/content/pkg/GOVPUB-A13-PURL-gpo158673/pdf/GOVPUB-A13-PURL-gpo158673.pdf) | 低密度湿铺纤维素软质板、自然结合、施胶、冷脱水及后处理前干燥；不提供通用配方或定量默认值 |
| ilcd-attributional-allocation-2010 | official_guidance | 欧盟委员会 JRC，ILCD Handbook: General guide for Life Cycle Assessment—Detailed guidance，2010 年 3 月第一版，第 7.9.2–3 节，印刷页 255–258 及 266–267；[官方 PDF](https://eplca.jrc.ec.europa.eu/uploads/ILCD-Handbook-General-guide-for-LCA-DETAILED-GUIDANCE-12March2010-ISBN-fin-v1.0-EN.pdf) | 归因型情景下细分/虚拟细分、逐交换决定性物理因果及剩余市场价值层级；不声明整体合规、回收抵扣或后果型替代 |
