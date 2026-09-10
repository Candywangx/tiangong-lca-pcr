---
pcr_id: pcr.food-products-beverages-and-tobacco-textiles-apparel-and-leather-products.meat-fish-fruits-vegetables-oils-and-fats.prepared-dishes-and-meals-based-on-fish-molluscs-and-crustaceans
language: zh-CN
status: candidate
sync_with: pcr.en-US.md
---

# 以鱼类、软体动物和甲壳动物为基础的预制菜肴和餐品

## 1. 范围与适用性

本 PCR 适用于工厂生产的复合预制菜肴或餐品，其中鱼类、软体动物、甲壳动物或其明确组合构成特征性海鲜成分。覆盖冷藏、冷冻、常温稳定、即食和复热即食产品，例如鱼派、海鲜饭或意面餐、海鲜咖喱、填馅软体动物及配制鱼类或贝类餐品份。

前景边界从餐品制造设施接收外购原料和包装开始，到工厂门口的净可售包装餐品结束；包括温控储存、海鲜预处理、配方混合、熟制或经验证的保藏处理、分装、包装、冷却或冻结、清洁消毒、前景废物管理，以及生产者运行时的场内废水处理。外购海鲜、其他原料、公用工程、燃料、制冷剂、包装和清洗化学品的上游生产与运输必须链接上游数据集，不在本前景中重复创建。

不包括作为单一海鲜产品销售的鲜、冷藏、冷冻、干制、烟熏、盐渍、罐藏或其他保藏鱼类、软体动物和甲壳动物；鱼粉和其他饲料原料；不以餐品销售的汤、酱汁和调味品；特征成分为肉类或植物而非海鲜的餐品；餐饮或餐馆制作；以及零售、配送、家庭储存、复热、食用和生命周期末端，除非下游研究把它们作为独立披露模块加入。

数据生产者必须声明配方、海鲜物种及捕捞或养殖来源、每项海鲜投入的原料状态、保藏路线、热处理状态、包装系统、净可售质量、预期用途、储存状态与温度制度、货架期依据，以及产品为即食还是需要复热。Codex CXC 52-2003 支持对水产品的产品、配料、包装、预期用途、储存、配送和工艺流程作明确描述（`codex-cxc-52-2003`）。

## 2. 产品类别识别

| 字段 | 值 |
| --- | --- |
| canonical_pcr_id | pcr.food-products-beverages-and-tobacco-textiles-apparel-and-leather-products.meat-fish-fruits-vegetables-oils-and-fats.prepared-dishes-and-meals-based-on-fish-molluscs-and-crustaceans |
| classification_refs | CPC 3.0：21241，以鱼类、软体动物和甲壳动物为基础的预制菜肴和餐品（exact） |
| covered_products | 工厂生产、以鱼类、软体动物、甲壳动物或其明确组合为特征成分，并以冷藏、冷冻、常温稳定、即食或复热即食状态供应的复合菜肴或餐品 |
| excluded_products | 单一成分保藏海鲜；鱼粉和饲料；非餐品汤、酱汁和调味品；非海鲜特征餐品；餐饮和餐馆制作 |
| representative_product | 一份净可售包装海鲜预制餐品，含熟制海鲜、明确的配菜或酱汁及直接包装 |
| production_route | 原辅料接收与温控储存；海鲜预处理；配方混合；熟制或经验证的保藏；分装与包装；冷却、冻结或常温稳定化；清洁消毒与废物或废水管理 |
| market_state | 制造设施门口的包装冷藏、冷冻或常温稳定成品餐 |

## 3. 参考流

| 字段 | 值 |
| --- | --- |
| What | 提供一份以鱼类、软体动物、甲壳动物或其明确组合为特征成分的包装预制菜肴或餐品 |
| How much | 1 kg 净可售餐品，不含一级、二级和三级包装 |
| How well | 符合申报配方、海鲜物种与来源、可食部分规格、保藏路线、包装完整性、储存状态、货架期依据和预期用途说明 |
| How long or cycle | 一个在工厂门口交付的生产批次；货架期作为产品限定信息申报，不折算为时间加权参考量 |
| reference_flow_link | `prepared_fish_meal` |

| 字段 | 值 |
| --- | --- |
| 参考数量 | 1 kg 净可售海鲜预制餐品 |
| 参考产品流 | 以鱼类、软体动物或甲壳动物为基础的预制菜肴或餐品 |
| 参考流属性 | Mass `93a60a56-a3c8-11da-a746-0800200b9a66` |
| 参考单位组 | Units of mass `93a60a57-a4c8-11da-a746-0800200c9a66` |
| 参考单位 | kg |
| 必需限定信息 | 配方标识及版本；海鲜物种及捕捞或养殖来源；海鲜投入状态；海鲜质量分数；其他配料组成；即食或复热即食状态；保藏与热处理路线；冷藏、冷冻或常温稳定状态；申报储存温度；货架期依据；一级包装材料与形式；净质量；生产地域；报告期 |

构建前景数据包时，`必需限定信息` 中的信息必须在数据集元数据、过程说明、参考流备注、产品说明或等效字段中声明；缺失时参考流定义不完整。

## 4. 计量与单位规则

| rule_id | 适用对象 | 必需流属性 | 必需单位 | 规则 |
| --- | --- | --- | --- | --- |
| `reference_net_mass` | 参考产品 | Mass | kg | 所有前景交换归一化至 1 kg 不含任何包装的净可售餐品；由经核验的灌装质量和合格件数确定净质量，不使用名义毛重。 |
| `ingredient_wet_mass` | 海鲜及其他配料 | Mass | kg | 每种配料按进料湿基质量分别记录；配方或产率核算需要时保留水分或固形物含量。 |
| `packaging_component_mass` | 一级、二级和三级包装 | Mass | kg | 各材料组件分别记录；可重复使用运输包装按实测使用次数或有据可查的寿命分摊。 |
| `energy_carrier_separation` | 电力、蒸汽、外购热和燃料 | Energy 或燃料质量/体积 | kWh、MJ、kg 或 m3 | 保留计量或发票中的载能体单位；需要换算时使用有据可查的热值和密度；不得把多个载能体合并为一个交换。 |
| `water_balance` | 配方水、工艺水、清洁水、废水和处理出水 | Mass 或 Volume | kg 或 m3 | 按用途分开记录用水和排水；体积转质量时记录实测密度或水密度约定。 |
| `refrigerant_component_mass` | 制冷剂补充和直接泄漏 | Mass | kg | 氨和每种卤代烃组分分别记录；依据充注、采购、回收和库存变化计算泄漏，不使用通用制冷剂百分比。 |
| `mass_reconciliation` | 每个生产批次 | Mass | kg | 将原料与工艺水投入同净可售产品、共产品、食品损失、海鲜残余、包装废料、废水、污泥和库存变化进行质量核对，并归一化到参考流。 |

## 5. 系统边界

| rule_id | 适用对象 | 规则 | 来源 |
| --- | --- | --- | --- |
| `boundary_foreground_gate` | 前景制造 | 纳入从原辅料和包装接收到工厂门口净可售包装餐品的全部场内活动，包括冷储、配制、热处理、包装、冷却或冻结、清洁消毒、废物管理及存在时的场内废水处理。 | `codex-cxc-52-2003`；`schmidt-rivera-azapagic-2019-ready-meals`；`us-epa-seafood-effluent-guidelines` |
| `boundary_upstream_links` | 外购投入 | 为每种外购海鲜、其他配料、公用工程、燃料、制冷剂、包装组件、清洗化学品和外部废物处理链接上游数据集，不得以未记录的通用截断替代。 | `eu-pef-2021-2279` |
| `boundary_direct_emissions` | 场内排放 | 将所有已知直接空气和水体排放作为独立基本流记录，使用实测值，或由前景活动记录与有据可查的排放因子计算。 | `eu-pef-2021-2279`；`fao-fisheries-technical-paper-355` |
| `boundary_downstream_modules` | 配送、零售、使用和生命周期末端 | 核心工厂门数据集不含下游阶段；加入下游的研究必须把它们作为独立模块，并披露运输、温控、复热、食品损失和包装末端情景。 | `schmidt-rivera-azapagic-2019-ready-meals` |

### 边界概化

| 字段 | 值 |
| --- | --- |
| declared_starting_condition | 外购海鲜和其他配料以有记录的生鲜、冷藏、冷冻、熟制、保藏或其他预处理状态，同包装和辅助材料一起进入餐品制造设施。 |
| starting_condition_role | 复合海鲜菜肴或餐品生产的工厂门前景起点。 |
| product_classification_scope | 以鱼类、软体动物、甲壳动物或其明确组合为特征的预制菜肴和餐品；分类不能替代配方和产品状态限定信息。 |
| recursive_input_rule | 若外购投入本身属于本类别，将其作为一个原子外购产品投入记录并链接供应商数据集；不得在接收过程中递归重建其制造清单。 |
| upstream_dataset_requirement | 海鲜物种与来源、主要配料、电力、燃料、制冷剂、包装组件和外部废物处理应优先使用供应商特定数据集；披露代理数据及其地域、时间和技术代表性。 |
| disclosure | 声明纳入的设施操作、配方、工艺路线、储存状态、包装系统、废水和废物去向、分配选择、上游数据替代，以及研究新增的下游模块。 |

## 6. 过程清单结构

### 过程图

| process_id | 过程名称 | 纳入状态 | 纳入条件 | 建模角色 | 定量参考 |
| --- | --- | --- | --- | --- | --- |
| `receipt_cold_storage` | 原辅料接收与温控储存 | required | 始终纳入；非冷藏的常温稳定投入将制冷行记为不适用 | 前景接收与储存 | kg 验收合格的海鲜原料 |
| `seafood_preparation_formulation` | 海鲜预处理与配方混合 | required | 始终纳入；各海鲜和配料行只在申报配方存在时适用 | 前景预处理与混合 | kg 配制完成的未熟制餐品混合物 |
| `cooking_preservation` | 熟制或经验证的保藏处理 | required | 始终纳入；载能体行只对实际使用的载能体适用 | 前景转化 | kg 熟制或保藏餐品基料 |
| `packaging_cooling` | 分装、包装、冷却或冻结 | required | 始终纳入；气调气体、冻结和制冷剂组分行仅在使用时适用 | 前景成品处理 | kg 净可售包装餐品 |
| `sanitation_wastewater` | 清洁消毒与场内废水管理 | required | 清洁消毒始终纳入；场内处理输出仅在设施排放前自行处理时适用 | 前景支持与处理 | kg 净可售包装餐品 |

### 过程：原辅料接收与温控储存（`receipt_cold_storage`）

#### 输入

##### 产品流

###### 鱼肉原料投入（`raw_fish_ingredient`）

本卡记录该具体原子交换跨越所声明前景过程边界时的数量；数量按下述规则取得。

- 选定流：可食用鱼肉
- 流属性/单位：Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg；单位组 `93a60a57-a4c8-11da-a746-0800200c9a66`
- 数量规则：按鱼种和来源分别记录本批次验收合格的鱼肉质量；身份不同的鱼种在数据集中拆分为独立交换。
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：产品特定（`product_specific`）
- 归一化基准：每 1 kg 净可售餐品
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_material_mass`
- 来源：`codex-cxc-52-2003`

###### 软体动物肉原料投入（`raw_mollusc_ingredient`）

本卡记录该具体原子交换跨越所声明前景过程边界时的数量；数量按下述规则取得。

- 选定流：可食用软体动物肉
- 流属性/单位：Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg；单位组 `93a60a57-a4c8-11da-a746-0800200c9a66`
- 数量规则：按物种记录本批次验收质量；除非整只加工，否则不含贝壳。
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：产品特定（`product_specific`）
- 归一化基准：每 1 kg 净可售餐品
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_material_mass`
- 来源：`codex-cxc-52-2003`

###### 甲壳动物肉原料投入（`raw_crustacean_ingredient`）

本卡记录该具体原子交换跨越所声明前景过程边界时的数量；数量按下述规则取得。

- 选定流：可食用甲壳动物肉
- 流属性/单位：Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg；单位组 `93a60a57-a4c8-11da-a746-0800200c9a66`
- 数量规则：按物种记录本批次验收质量；除非整只加工，否则不含外壳。
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：产品特定（`product_specific`）
- 归一化基准：每 1 kg 净可售餐品
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_material_mass`
- 来源：`codex-cxc-52-2003`

###### 储存用冰（`storage_ice`）

本卡记录该具体原子交换跨越所声明前景过程边界时的数量；数量按下述规则取得。

- 选定流：食品级冰
- 流属性/单位：Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg；单位组 `93a60a57-a4c8-11da-a746-0800200c9a66`
- 数量规则：计量用于海鲜温控且未计入供应商产品质量的冰。
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每 1 kg 验收合格的海鲜原料
- 基准类型：过程输出（`process_output`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_water_chemicals`
- 来源：`codex-cxc-52-2003`

###### 储存电力（`storage_electricity`）

本卡记录该具体原子交换跨越所声明前景过程边界时的数量；数量按下述规则取得。

- 选定流：中压电力
- 流属性/单位：Energy / kWh
- 数量规则：对冷藏库和冷冻库分表计量，并按实测占用时间和储存质量分配到生产批次。
- 数值来源模式：计算值（`calculated_value`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每 1 kg 验收合格的海鲜原料
- 基准类型：储存时长（`storage_duration`）
- 证据类型：基于采集计算（`calculated_from_collection`）
- 采集协议：`cp_energy_meter`
- 来源：`schmidt-rivera-azapagic-2019-ready-meals`

###### 储存系统氨制冷剂补充量（`storage_ammonia_makeup`）

本卡记录该具体原子交换跨越所声明前景过程边界时的数量；数量按下述规则取得。

- 选定流：氨
- 流属性/单位：Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg；单位组 `93a60a57-a4c8-11da-a746-0800200c9a66`
- 数量规则：由年度制冷剂质量平衡计算归属于储存设备的氨补充量。
- 数值来源模式：计算值（`calculated_value`）
- 适用范围：技术特定（`technology_specific`）
- 归一化基准：每 1 kg 验收合格的海鲜原料
- 基准类型：储存时长（`storage_duration`）
- 证据类型：基于采集计算（`calculated_from_collection`）
- 采集协议：`cp_refrigerant_balance`

###### 储存系统 HFC-125 补充量（`storage_hfc125_makeup`）

本卡记录该具体原子交换跨越所声明前景过程边界时的数量；数量按下述规则取得。

- 选定流：五氟乙烷
- 流属性/单位：Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg；单位组 `93a60a57-a4c8-11da-a746-0800200c9a66`
- 数量规则：由充注组成和年度质量平衡计算归属于储存设备的 HFC-125 组分补充量。
- 数值来源模式：计算值（`calculated_value`）
- 适用范围：技术特定（`technology_specific`）
- 归一化基准：每 1 kg 验收合格的海鲜原料
- 基准类型：储存时长（`storage_duration`）
- 证据类型：基于采集计算（`calculated_from_collection`）
- 采集协议：`cp_refrigerant_balance`

###### 储存系统 HFC-143a 补充量（`storage_hfc143a_makeup`）

本卡记录该具体原子交换跨越所声明前景过程边界时的数量；数量按下述规则取得。

- 选定流：1,1,1-三氟乙烷
- 流属性/单位：Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg；单位组 `93a60a57-a4c8-11da-a746-0800200c9a66`
- 数量规则：由充注组成和年度质量平衡计算归属于储存设备的 HFC-143a 组分补充量。
- 数值来源模式：计算值（`calculated_value`）
- 适用范围：技术特定（`technology_specific`）
- 归一化基准：每 1 kg 验收合格的海鲜原料
- 基准类型：储存时长（`storage_duration`）
- 证据类型：基于采集计算（`calculated_from_collection`）
- 采集协议：`cp_refrigerant_balance`

###### 储存系统 HFC-134a 补充量（`storage_hfc134a_makeup`）

本卡记录该具体原子交换跨越所声明前景过程边界时的数量；数量按下述规则取得。

- 选定流：1,1,1,2-四氟乙烷
- 流属性/单位：Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg；单位组 `93a60a57-a4c8-11da-a746-0800200c9a66`
- 数量规则：由充注组成和年度质量平衡计算归属于储存设备的 HFC-134a 组分补充量。
- 数值来源模式：计算值（`calculated_value`）
- 适用范围：技术特定（`technology_specific`）
- 归一化基准：每 1 kg 验收合格的海鲜原料
- 基准类型：储存时长（`storage_duration`）
- 证据类型：基于采集计算（`calculated_from_collection`）
- 采集协议：`cp_refrigerant_balance`

##### 废物流


##### 基本流


#### 输出

##### 产品流

###### 验收合格的温控海鲜原料（`accepted_seafood`）

本卡记录该具体原子交换跨越所声明前景过程边界时的数量；数量按下述规则取得。

- 选定流：验收合格的可食用海鲜原料
- 流属性/单位：Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg；单位组 `93a60a57-a4c8-11da-a746-0800200c9a66`
- 数量规则：称量经进料检验并由储存区放行至预处理工序的海鲜。
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：产品特定（`product_specific`）
- 归一化基准：每个收货批次
- 基准类型：过程输出（`process_output`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_output_mass`
- 来源：`codex-cxc-52-2003`

##### 废物流

###### 拒收海鲜（`rejected_seafood`）

本卡记录该具体原子交换跨越所声明前景过程边界时的数量；数量按下述规则取得。

- 选定流：拒收的可食用海鲜
- 流属性/单位：Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg；单位组 `93a60a57-a4c8-11da-a746-0800200c9a66`
- 数量规则：称量收货时拒收或储存期间报废的海鲜，不含包装。
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每个收货批次
- 基准类型：过程输出（`process_output`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_waste_mass`

##### 基本流

###### 氨泄漏至空气（`storage_ammonia_air`）

本卡记录该具体原子交换跨越所声明前景过程边界时的数量；数量按下述规则取得。

- 选定流：氨，排放至空气
- 流属性/单位：Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg；单位组 `93a60a57-a4c8-11da-a746-0800200c9a66`
- 数量规则：由储存系统制冷剂质量平衡计算氨损失。
- 数值来源模式：计算值（`calculated_value`）
- 适用范围：技术特定（`technology_specific`）
- 归一化基准：每 1 kg 验收合格的海鲜原料
- 基准类型：储存时长（`storage_duration`）
- 证据类型：基于采集计算（`calculated_from_collection`）
- 采集协议：`cp_refrigerant_balance`

###### HFC-125 泄漏至空气（`storage_hfc125_air`）

本卡记录该具体原子交换跨越所声明前景过程边界时的数量；数量按下述规则取得。

- 选定流：五氟乙烷，排放至空气
- 流属性/单位：Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg；单位组 `93a60a57-a4c8-11da-a746-0800200c9a66`
- 数量规则：由制冷剂组成和储存系统质量平衡计算 HFC-125 泄漏量。
- 数值来源模式：计算值（`calculated_value`）
- 适用范围：技术特定（`technology_specific`）
- 归一化基准：每 1 kg 验收合格的海鲜原料
- 基准类型：储存时长（`storage_duration`）
- 证据类型：基于采集计算（`calculated_from_collection`）
- 采集协议：`cp_refrigerant_balance`

###### HFC-143a 泄漏至空气（`storage_hfc143a_air`）

本卡记录该具体原子交换跨越所声明前景过程边界时的数量；数量按下述规则取得。

- 选定流：1,1,1-三氟乙烷，排放至空气
- 流属性/单位：Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg；单位组 `93a60a57-a4c8-11da-a746-0800200c9a66`
- 数量规则：由制冷剂组成和储存系统质量平衡计算 HFC-143a 泄漏量。
- 数值来源模式：计算值（`calculated_value`）
- 适用范围：技术特定（`technology_specific`）
- 归一化基准：每 1 kg 验收合格的海鲜原料
- 基准类型：储存时长（`storage_duration`）
- 证据类型：基于采集计算（`calculated_from_collection`）
- 采集协议：`cp_refrigerant_balance`

###### HFC-134a 泄漏至空气（`storage_hfc134a_air`）

本卡记录该具体原子交换跨越所声明前景过程边界时的数量；数量按下述规则取得。

- 选定流：1,1,1,2-四氟乙烷，排放至空气
- 流属性/单位：Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg；单位组 `93a60a57-a4c8-11da-a746-0800200c9a66`
- 数量规则：由制冷剂组成和储存系统质量平衡计算 HFC-134a 泄漏量。
- 数值来源模式：计算值（`calculated_value`）
- 适用范围：技术特定（`technology_specific`）
- 归一化基准：每 1 kg 验收合格的海鲜原料
- 基准类型：储存时长（`storage_duration`）
- 证据类型：基于采集计算（`calculated_from_collection`）
- 采集协议：`cp_refrigerant_balance`

### 过程：海鲜预处理与配方混合（`seafood_preparation_formulation`）

#### 输入

##### 产品流

###### 验收合格海鲜原料投入（`prep_accepted_seafood`）

本卡记录该具体原子交换跨越所声明前景过程边界时的数量；数量按下述规则取得。

- 选定流：验收合格的可食用海鲜原料
- 流属性/单位：Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg；单位组 `93a60a57-a4c8-11da-a746-0800200c9a66`
- 数量规则：按鱼类、软体动物或甲壳动物身份分别记录从 `accepted_seafood` 转入的质量。
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：产品特定（`product_specific`）
- 归一化基准：每 1 kg 配制完成的未熟制餐品混合物
- 基准类型：过程输出（`process_output`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_material_mass`

###### 马铃薯原料（`potato_ingredient`）

本卡记录该具体原子交换跨越所声明前景过程边界时的数量；数量按下述规则取得。

- 选定流：马铃薯
- 流属性/单位：Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg；单位组 `93a60a57-a4c8-11da-a746-0800200c9a66`
- 数量规则：记录加入申报配方的马铃薯进料质量；实际使用其他具体品种时另建原子交换。
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：产品特定（`product_specific`）
- 归一化基准：每 1 kg 配制完成的未熟制餐品混合物
- 基准类型：过程输出（`process_output`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_material_mass`

###### 大米原料（`rice_ingredient`）

本卡记录该具体原子交换跨越所声明前景过程边界时的数量；数量按下述规则取得。

- 选定流：大米
- 流属性/单位：Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg；单位组 `93a60a57-a4c8-11da-a746-0800200c9a66`
- 数量规则：记录加入申报配方的大米进料质量；实际使用其他具体品种时另建原子交换。
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：产品特定（`product_specific`）
- 归一化基准：每 1 kg 配制完成的未熟制餐品混合物
- 基准类型：过程输出（`process_output`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_material_mass`

###### 小麦意大利面原料（`pasta_ingredient`）

本卡记录该具体原子交换跨越所声明前景过程边界时的数量；数量按下述规则取得。

- 选定流：干制小麦意大利面
- 流属性/单位：Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg；单位组 `93a60a57-a4c8-11da-a746-0800200c9a66`
- 数量规则：记录加入申报配方的干制小麦意大利面进料质量；实际使用其他具体品种时另建原子交换。
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：产品特定（`product_specific`）
- 归一化基准：每 1 kg 配制完成的未熟制餐品混合物
- 基准类型：过程输出（`process_output`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_material_mass`

###### 洋葱原料（`onion_ingredient`）

本卡记录该具体原子交换跨越所声明前景过程边界时的数量；数量按下述规则取得。

- 选定流：洋葱
- 流属性/单位：Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg；单位组 `93a60a57-a4c8-11da-a746-0800200c9a66`
- 数量规则：记录加入申报配方的洋葱进料质量；实际使用其他具体品种时另建原子交换。
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：产品特定（`product_specific`）
- 归一化基准：每 1 kg 配制完成的未熟制餐品混合物
- 基准类型：过程输出（`process_output`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_material_mass`

###### 胡萝卜原料（`carrot_ingredient`）

本卡记录该具体原子交换跨越所声明前景过程边界时的数量；数量按下述规则取得。

- 选定流：胡萝卜
- 流属性/单位：Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg；单位组 `93a60a57-a4c8-11da-a746-0800200c9a66`
- 数量规则：记录加入申报配方的胡萝卜进料质量；实际使用其他具体品种时另建原子交换。
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：产品特定（`product_specific`）
- 归一化基准：每 1 kg 配制完成的未熟制餐品混合物
- 基准类型：过程输出（`process_output`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_material_mass`

###### 青豌豆原料（`pea_ingredient`）

本卡记录该具体原子交换跨越所声明前景过程边界时的数量；数量按下述规则取得。

- 选定流：青豌豆
- 流属性/单位：Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg；单位组 `93a60a57-a4c8-11da-a746-0800200c9a66`
- 数量规则：记录加入申报配方的青豌豆进料质量；实际使用其他具体品种时另建原子交换。
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：产品特定（`product_specific`）
- 归一化基准：每 1 kg 配制完成的未熟制餐品混合物
- 基准类型：过程输出（`process_output`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_material_mass`

###### 牛乳原料（`milk_ingredient`）

本卡记录该具体原子交换跨越所声明前景过程边界时的数量；数量按下述规则取得。

- 选定流：牛乳
- 流属性/单位：Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg；单位组 `93a60a57-a4c8-11da-a746-0800200c9a66`
- 数量规则：记录加入申报配方的牛乳进料质量；实际使用其他具体品种时另建原子交换。
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：产品特定（`product_specific`）
- 归一化基准：每 1 kg 配制完成的未熟制餐品混合物
- 基准类型：过程输出（`process_output`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_material_mass`

###### 稀奶油原料（`cream_ingredient`）

本卡记录该具体原子交换跨越所声明前景过程边界时的数量；数量按下述规则取得。

- 选定流：稀奶油
- 流属性/单位：Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg；单位组 `93a60a57-a4c8-11da-a746-0800200c9a66`
- 数量规则：记录加入申报配方的稀奶油进料质量；实际使用其他具体品种时另建原子交换。
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：产品特定（`product_specific`）
- 归一化基准：每 1 kg 配制完成的未熟制餐品混合物
- 基准类型：过程输出（`process_output`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_material_mass`

###### 黄油原料（`butter_ingredient`）

本卡记录该具体原子交换跨越所声明前景过程边界时的数量；数量按下述规则取得。

- 选定流：黄油
- 流属性/单位：Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg；单位组 `93a60a57-a4c8-11da-a746-0800200c9a66`
- 数量规则：记录加入申报配方的黄油进料质量；实际使用其他具体品种时另建原子交换。
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：产品特定（`product_specific`）
- 归一化基准：每 1 kg 配制完成的未熟制餐品混合物
- 基准类型：过程输出（`process_output`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_material_mass`

###### 小麦粉原料（`flour_ingredient`）

本卡记录该具体原子交换跨越所声明前景过程边界时的数量；数量按下述规则取得。

- 选定流：小麦粉
- 流属性/单位：Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg；单位组 `93a60a57-a4c8-11da-a746-0800200c9a66`
- 数量规则：记录加入申报配方的小麦粉进料质量；实际使用其他具体品种时另建原子交换。
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：产品特定（`product_specific`）
- 归一化基准：每 1 kg 配制完成的未熟制餐品混合物
- 基准类型：过程输出（`process_output`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_material_mass`

###### 植物油原料（`vegetable_oil_ingredient`）

本卡记录该具体原子交换跨越所声明前景过程边界时的数量；数量按下述规则取得。

- 选定流：精炼菜籽油
- 流属性/单位：Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg；单位组 `93a60a57-a4c8-11da-a746-0800200c9a66`
- 数量规则：记录加入申报配方的精炼菜籽油进料质量；实际使用其他具体品种时另建原子交换。
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：产品特定（`product_specific`）
- 归一化基准：每 1 kg 配制完成的未熟制餐品混合物
- 基准类型：过程输出（`process_output`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_material_mass`

###### 食盐原料（`salt_ingredient`）

本卡记录该具体原子交换跨越所声明前景过程边界时的数量；数量按下述规则取得。

- 选定流：氯化钠
- 流属性/单位：Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg；单位组 `93a60a57-a4c8-11da-a746-0800200c9a66`
- 数量规则：记录加入申报配方的氯化钠进料质量；实际使用其他具体品种时另建原子交换。
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：产品特定（`product_specific`）
- 归一化基准：每 1 kg 配制完成的未熟制餐品混合物
- 基准类型：过程输出（`process_output`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_material_mass`

###### 配方用水（`recipe_water`）

本卡记录该具体原子交换跨越所声明前景过程边界时的数量；数量按下述规则取得。

- 选定流：饮用水
- 流属性/单位：Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg；单位组 `93a60a57-a4c8-11da-a746-0800200c9a66`
- 数量规则：计量或批次称量并实际进入餐品的水。
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：产品特定（`product_specific`）
- 归一化基准：每 1 kg 配制完成的未熟制餐品混合物
- 基准类型：过程输出（`process_output`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_water_chemicals`

###### 预处理电力（`preparation_electricity`）

本卡记录该具体原子交换跨越所声明前景过程边界时的数量；数量按下述规则取得。

- 选定流：中压电力
- 流属性/单位：Energy / kWh
- 数量规则：分表计量修整、切割、清洗、混合和输送用电。
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每 1 kg 配制完成的未熟制餐品混合物
- 基准类型：过程输出（`process_output`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_energy_meter`

##### 废物流


##### 基本流


#### 输出

##### 产品流

###### 配制完成的未熟制餐品混合物（`formulated_meal_mix`）

本卡记录该具体原子交换跨越所声明前景过程边界时的数量；数量按下述规则取得。

- 选定流：配制完成的未熟制海鲜餐品混合物
- 流属性/单位：Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg；单位组 `93a60a57-a4c8-11da-a746-0800200c9a66`
- 数量规则：称量转入熟制或保藏处理的配制混合物。
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：产品特定（`product_specific`）
- 归一化基准：每个生产批次
- 基准类型：过程输出（`process_output`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_output_mass`

##### 废物流

###### 鱼骨（`fish_bones_waste`）

本卡记录该具体原子交换跨越所声明前景过程边界时的数量；数量按下述规则取得。

- 选定流：鱼骨
- 流属性/单位：Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg；单位组 `93a60a57-a4c8-11da-a746-0800200c9a66`
- 数量规则：称量在预处理时分离并在设施边界判定为废物的鱼骨。
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：产品特定（`product_specific`）
- 归一化基准：每 1 kg 配制完成的未熟制餐品混合物
- 基准类型：过程输出（`process_output`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_waste_mass`

###### 鱼皮（`fish_skin_waste`）

本卡记录该具体原子交换跨越所声明前景过程边界时的数量；数量按下述规则取得。

- 选定流：鱼皮
- 流属性/单位：Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg；单位组 `93a60a57-a4c8-11da-a746-0800200c9a66`
- 数量规则：称量在预处理时分离并在设施边界判定为废物的鱼皮。
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：产品特定（`product_specific`）
- 归一化基准：每 1 kg 配制完成的未熟制餐品混合物
- 基准类型：过程输出（`process_output`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_waste_mass`

###### 鱼内脏（`fish_viscera_waste`）

本卡记录该具体原子交换跨越所声明前景过程边界时的数量；数量按下述规则取得。

- 选定流：鱼内脏
- 流属性/单位：Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg；单位组 `93a60a57-a4c8-11da-a746-0800200c9a66`
- 数量规则：称量在预处理时分离并在设施边界判定为废物的鱼内脏。
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：产品特定（`product_specific`）
- 归一化基准：每 1 kg 配制完成的未熟制餐品混合物
- 基准类型：过程输出（`process_output`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_waste_mass`

###### 软体动物贝壳（`mollusc_shell_waste`）

本卡记录该具体原子交换跨越所声明前景过程边界时的数量；数量按下述规则取得。

- 选定流：软体动物贝壳
- 流属性/单位：Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg；单位组 `93a60a57-a4c8-11da-a746-0800200c9a66`
- 数量规则：称量在预处理时分离并在设施边界判定为废物的软体动物贝壳。
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：产品特定（`product_specific`）
- 归一化基准：每 1 kg 配制完成的未熟制餐品混合物
- 基准类型：过程输出（`process_output`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_waste_mass`

###### 甲壳动物外壳（`crustacean_shell_waste`）

本卡记录该具体原子交换跨越所声明前景过程边界时的数量；数量按下述规则取得。

- 选定流：甲壳动物外壳
- 流属性/单位：Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg；单位组 `93a60a57-a4c8-11da-a746-0800200c9a66`
- 数量规则：称量在预处理时分离并在设施边界判定为废物的甲壳动物外壳。
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：产品特定（`product_specific`）
- 归一化基准：每 1 kg 配制完成的未熟制餐品混合物
- 基准类型：过程输出（`process_output`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_waste_mass`

###### 蔬菜修整废料（`vegetable_trimmings_waste`）

本卡记录该具体原子交换跨越所声明前景过程边界时的数量；数量按下述规则取得。

- 选定流：蔬菜修整废料
- 流属性/单位：Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg；单位组 `93a60a57-a4c8-11da-a746-0800200c9a66`
- 数量规则：称量在预处理时分离并在设施边界判定为废物的蔬菜修整废料。
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：产品特定（`product_specific`）
- 归一化基准：每 1 kg 配制完成的未熟制餐品混合物
- 基准类型：过程输出（`process_output`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_waste_mass`

###### 预处理废水（`preparation_wastewater`）

本卡记录该具体原子交换跨越所声明前景过程边界时的数量；数量按下述规则取得。

- 选定流：海鲜预处理废水
- 流属性/单位：Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg；单位组 `93a60a57-a4c8-11da-a746-0800200c9a66`
- 数量规则：通过计量或水量平衡确定解冻、清洗、修整和设备冲洗后、进入处理前的废水。
- 数值来源模式：计算值（`calculated_value`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每 1 kg 配制完成的未熟制餐品混合物
- 基准类型：过程输出（`process_output`）
- 证据类型：基于采集计算（`calculated_from_collection`）
- 采集协议：`cp_effluent_monitoring`
- 来源：`fao-fisheries-technical-paper-355`；`us-epa-seafood-effluent-guidelines`

##### 基本流


### 过程：熟制或经验证的保藏处理（`cooking_preservation`）

#### 输入

##### 产品流

###### 配制餐品混合物投入（`cooking_meal_mix`）

本卡记录该具体原子交换跨越所声明前景过程边界时的数量；数量按下述规则取得。

- 选定流：配制完成的未熟制海鲜餐品混合物
- 流属性/单位：Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg；单位组 `93a60a57-a4c8-11da-a746-0800200c9a66`
- 数量规则：称量从 `formulated_meal_mix` 转入的质量。
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：产品特定（`product_specific`）
- 归一化基准：每个熟制或保藏批次
- 基准类型：过程输出（`process_output`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_material_mass`

###### 熟制电力（`cooking_electricity`）

本卡记录该具体原子交换跨越所声明前景过程边界时的数量；数量按下述规则取得。

- 选定流：中压电力
- 流属性/单位：Energy / kWh
- 数量规则：分表计量烤箱、夹层锅、油炸设备、杀菌釜、泵、控制系统和通风设备用电。
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：技术特定（`technology_specific`）
- 归一化基准：每 1 kg 熟制或保藏餐品基料
- 基准类型：过程输出（`process_output`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_energy_meter`
- 来源：`schmidt-rivera-azapagic-2019-ready-meals`

###### 外购蒸汽（`purchased_steam`）

本卡记录该具体原子交换跨越所声明前景过程边界时的数量；数量按下述规则取得。

- 选定流：蒸汽
- 流属性/单位：Energy / MJ
- 数量规则：计量供给熟制或杀菌设备的外购蒸汽。
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：技术特定（`technology_specific`）
- 归一化基准：每 1 kg 熟制或保藏餐品基料
- 基准类型：过程输出（`process_output`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_energy_meter`

###### 天然气燃料（`natural_gas_fuel`）

本卡记录该具体原子交换跨越所声明前景过程边界时的数量；数量按下述规则取得。

- 选定流：天然气
- 流属性/单位：Volume / m3
- 数量规则：计量场内用于熟制或产汽燃烧的天然气。
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：技术特定（`technology_specific`）
- 归一化基准：每 1 kg 熟制或保藏餐品基料
- 基准类型：燃料清单（`fuel_inventory`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_fuel_records`

###### 燃料油（`fuel_oil`）

本卡记录该具体原子交换跨越所声明前景过程边界时的数量；数量按下述规则取得。

- 选定流：轻质燃料油
- 流属性/单位：Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg；单位组 `93a60a57-a4c8-11da-a746-0800200c9a66`
- 数量规则：计量场内用于熟制或产汽燃烧的燃料油。
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：技术特定（`technology_specific`）
- 归一化基准：每 1 kg 熟制或保藏餐品基料
- 基准类型：燃料清单（`fuel_inventory`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_fuel_records`
- 来源：`schmidt-rivera-azapagic-2019-ready-meals`

##### 废物流


##### 基本流


#### 输出

##### 产品流

###### 熟制或保藏餐品基料（`cooked_meal_base`）

本卡记录该具体原子交换跨越所声明前景过程边界时的数量；数量按下述规则取得。

- 选定流：熟制或保藏的海鲜餐品基料
- 流属性/单位：Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg；单位组 `93a60a57-a4c8-11da-a746-0800200c9a66`
- 数量规则：完成经验证的处理和产率核算后，称量放行至分装工序的合格基料。
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：产品特定（`product_specific`）
- 归一化基准：每个处理批次
- 基准类型：过程输出（`process_output`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_output_mass`
- 来源：`codex-cxc-52-2003`

##### 废物流

###### 熟制食品损失（`cooking_food_loss`）

本卡记录该具体原子交换跨越所声明前景过程边界时的数量；数量按下述规则取得。

- 选定流：不合格熟制海鲜餐品
- 流属性/单位：Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg；单位组 `93a60a57-a4c8-11da-a746-0800200c9a66`
- 数量规则：称量处理后拒收或转移过程中损失的熟制物料。
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每 1 kg 熟制或保藏餐品基料
- 基准类型：过程输出（`process_output`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_waste_mass`

##### 基本流

###### 化石二氧化碳排放至空气（`combustion_co2_air`）

本卡记录该具体原子交换跨越所声明前景过程边界时的数量；数量按下述规则取得。

- 选定流：二氧化碳（化石），排放至空气
- 流属性/单位：Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg；单位组 `93a60a57-a4c8-11da-a746-0800200c9a66`
- 数量规则：按各燃料数量和有据可查的碳含量计算，或直接测量。
- 数值来源模式：计算值（`calculated_value`）
- 适用范围：技术特定（`technology_specific`）
- 归一化基准：每 1 kg 熟制或保藏餐品基料
- 基准类型：燃料清单（`fuel_inventory`）
- 证据类型：基于采集计算（`calculated_from_collection`）
- 采集协议：`cp_stack_emissions`

###### 甲烷排放至空气（`combustion_ch4_air`）

本卡记录该具体原子交换跨越所声明前景过程边界时的数量；数量按下述规则取得。

- 选定流：甲烷（化石），排放至空气
- 流属性/单位：Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg；单位组 `93a60a57-a4c8-11da-a746-0800200c9a66`
- 数量规则：直接测量或按燃料和设备特定因子计算。
- 数值来源模式：计算值（`calculated_value`）
- 适用范围：技术特定（`technology_specific`）
- 归一化基准：每 1 kg 熟制或保藏餐品基料
- 基准类型：燃料清单（`fuel_inventory`）
- 证据类型：基于采集计算（`calculated_from_collection`）
- 采集协议：`cp_stack_emissions`

###### 氧化亚氮排放至空气（`combustion_n2o_air`）

本卡记录该具体原子交换跨越所声明前景过程边界时的数量；数量按下述规则取得。

- 选定流：氧化亚氮，排放至空气
- 流属性/单位：Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg；单位组 `93a60a57-a4c8-11da-a746-0800200c9a66`
- 数量规则：直接测量或按燃料和设备特定因子计算。
- 数值来源模式：计算值（`calculated_value`）
- 适用范围：技术特定（`technology_specific`）
- 归一化基准：每 1 kg 熟制或保藏餐品基料
- 基准类型：燃料清单（`fuel_inventory`）
- 证据类型：基于采集计算（`calculated_from_collection`）
- 采集协议：`cp_stack_emissions`

###### 氮氧化物排放至空气（`combustion_nox_air`）

本卡记录该具体原子交换跨越所声明前景过程边界时的数量；数量按下述规则取得。

- 选定流：氮氧化物，排放至空气
- 流属性/单位：Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg；单位组 `93a60a57-a4c8-11da-a746-0800200c9a66`
- 数量规则：直接测量，或以所选流的一致计量口径按燃料和锅炉特定因子计算。
- 数值来源模式：计算值（`calculated_value`）
- 适用范围：技术特定（`technology_specific`）
- 归一化基准：每 1 kg 熟制或保藏餐品基料
- 基准类型：燃料清单（`fuel_inventory`）
- 证据类型：基于采集计算（`calculated_from_collection`）
- 采集协议：`cp_stack_emissions`

###### 二氧化硫排放至空气（`combustion_so2_air`）

本卡记录该具体原子交换跨越所声明前景过程边界时的数量；数量按下述规则取得。

- 选定流：二氧化硫，排放至空气
- 流属性/单位：Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg；单位组 `93a60a57-a4c8-11da-a746-0800200c9a66`
- 数量规则：直接测量，或由燃料硫含量和控制效率计算。
- 数值来源模式：计算值（`calculated_value`）
- 适用范围：技术特定（`technology_specific`）
- 归一化基准：每 1 kg 熟制或保藏餐品基料
- 基准类型：燃料清单（`fuel_inventory`）
- 证据类型：基于采集计算（`calculated_from_collection`）
- 采集协议：`cp_stack_emissions`

###### 一氧化碳排放至空气（`combustion_co_air`）

本卡记录该具体原子交换跨越所声明前景过程边界时的数量；数量按下述规则取得。

- 选定流：一氧化碳，排放至空气
- 流属性/单位：Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg；单位组 `93a60a57-a4c8-11da-a746-0800200c9a66`
- 数量规则：直接测量或按燃料和锅炉特定因子计算。
- 数值来源模式：计算值（`calculated_value`）
- 适用范围：技术特定（`technology_specific`）
- 归一化基准：每 1 kg 熟制或保藏餐品基料
- 基准类型：燃料清单（`fuel_inventory`）
- 证据类型：基于采集计算（`calculated_from_collection`）
- 采集协议：`cp_stack_emissions`

###### 细颗粒物排放至空气（`combustion_pm25_air`）

本卡记录该具体原子交换跨越所声明前景过程边界时的数量；数量按下述规则取得。

- 选定流：粒径小于 2.5 微米的颗粒物，排放至空气
- 流属性/单位：Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg；单位组 `93a60a57-a4c8-11da-a746-0800200c9a66`
- 数量规则：直接测量或按燃料和控制技术特定因子计算。
- 数值来源模式：计算值（`calculated_value`）
- 适用范围：技术特定（`technology_specific`）
- 归一化基准：每 1 kg 熟制或保藏餐品基料
- 基准类型：燃料清单（`fuel_inventory`）
- 证据类型：基于采集计算（`calculated_from_collection`）
- 采集协议：`cp_stack_emissions`

### 过程：分装、包装、冷却或冻结（`packaging_cooling`）

#### 输入

##### 产品流

###### 熟制餐品基料投入（`packaging_meal_base`）

本卡记录该具体原子交换跨越所声明前景过程边界时的数量；数量按下述规则取得。

- 选定流：熟制或保藏的海鲜餐品基料
- 流属性/单位：Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg；单位组 `93a60a57-a4c8-11da-a746-0800200c9a66`
- 数量规则：称量从 `cooked_meal_base` 转入的质量。
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：产品特定（`product_specific`）
- 归一化基准：每个包装批次
- 基准类型：过程输出（`process_output`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_material_mass`

###### PET 托盒（`pet_tray`）

本卡记录该具体原子交换跨越所声明前景过程边界时的数量；数量按下述规则取得。

- 选定流：聚对苯二甲酸乙二醇酯托盒
- 流属性/单位：Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg；单位组 `93a60a57-a4c8-11da-a746-0800200c9a66`
- 数量规则：按物料清单记录 PET 托盒消耗质量，包括生产废料。
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：产品特定（`product_specific`）
- 归一化基准：每 1 kg 净可售餐品
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_packaging_bom`
- 来源：`schmidt-rivera-azapagic-2019-ready-meals`；`kontominas-et-al-2021-seafood-packaging`

###### 聚乙烯封口膜（`pe_sealing_film`）

本卡记录该具体原子交换跨越所声明前景过程边界时的数量；数量按下述规则取得。

- 选定流：聚乙烯薄膜
- 流属性/单位：Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg；单位组 `93a60a57-a4c8-11da-a746-0800200c9a66`
- 数量规则：按物料清单记录封口膜消耗质量，包括裁边。
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：产品特定（`product_specific`）
- 归一化基准：每 1 kg 净可售餐品
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_packaging_bom`
- 来源：`schmidt-rivera-azapagic-2019-ready-meals`；`kontominas-et-al-2021-seafood-packaging`

###### 纸板套筒（`paperboard_sleeve`）

本卡记录该具体原子交换跨越所声明前景过程边界时的数量；数量按下述规则取得。

- 选定流：纸板套筒
- 流属性/单位：Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg；单位组 `93a60a57-a4c8-11da-a746-0800200c9a66`
- 数量规则：按物料清单记录纸板套筒消耗质量。
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：产品特定（`product_specific`）
- 归一化基准：每 1 kg 净可售餐品
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_packaging_bom`

###### 瓦楞运输箱（`corrugated_carton`）

本卡记录该具体原子交换跨越所声明前景过程边界时的数量；数量按下述规则取得。

- 选定流：瓦楞纤维板箱
- 流属性/单位：Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg；单位组 `93a60a57-a4c8-11da-a746-0800200c9a66`
- 数量规则：记录运输箱质量并按箱内净可售餐品质量分配。
- 数值来源模式：计算值（`calculated_value`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每 1 kg 净可售餐品
- 基准类型：参考流（`reference_flow`）
- 证据类型：基于采集计算（`calculated_from_collection`）
- 采集协议：`cp_packaging_bom`
- 来源：`schmidt-rivera-azapagic-2019-ready-meals`

###### 纸标签（`paper_label`）

本卡记录该具体原子交换跨越所声明前景过程边界时的数量；数量按下述规则取得。

- 选定流：印刷纸标签
- 流属性/单位：Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg；单位组 `93a60a57-a4c8-11da-a746-0800200c9a66`
- 数量规则：按物料清单记录标签消耗质量。
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：产品特定（`product_specific`）
- 归一化基准：每 1 kg 净可售餐品
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_packaging_bom`

###### 气调包装用二氧化碳（`map_carbon_dioxide`）

本卡记录该具体原子交换跨越所声明前景过程边界时的数量；数量按下述规则取得。

- 选定流：食品级二氧化碳
- 流属性/单位：Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg；单位组 `93a60a57-a4c8-11da-a746-0800200c9a66`
- 数量规则：计量供给气调包装的食品级二氧化碳。
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：技术特定（`technology_specific`）
- 归一化基准：每 1 kg 净可售餐品
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_packaging_bom`
- 来源：`kontominas-et-al-2021-seafood-packaging`

###### 气调包装用氮气（`map_nitrogen`）

本卡记录该具体原子交换跨越所声明前景过程边界时的数量；数量按下述规则取得。

- 选定流：食品级气态氮
- 流属性/单位：Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg；单位组 `93a60a57-a4c8-11da-a746-0800200c9a66`
- 数量规则：计量供给气调包装的食品级氮气。
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：技术特定（`technology_specific`）
- 归一化基准：每 1 kg 净可售餐品
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_packaging_bom`
- 来源：`kontominas-et-al-2021-seafood-packaging`

###### 气调包装用氧气（`map_oxygen`）

本卡记录该具体原子交换跨越所声明前景过程边界时的数量；数量按下述规则取得。

- 选定流：食品级气态氧
- 流属性/单位：Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg；单位组 `93a60a57-a4c8-11da-a746-0800200c9a66`
- 数量规则：申报气体配方使用氧气时，计量供给包装的食品级氧气。
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：技术特定（`technology_specific`）
- 归一化基准：每 1 kg 净可售餐品
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_packaging_bom`
- 来源：`kontominas-et-al-2021-seafood-packaging`

###### 包装与冷却电力（`packaging_electricity`）

本卡记录该具体原子交换跨越所声明前景过程边界时的数量；数量按下述规则取得。

- 选定流：中压电力
- 流属性/单位：Energy / kWh
- 数量规则：分表计量灌装、封口、金属检测、冷却、冻结、输送和成品冷藏用电。
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每 1 kg 净可售餐品
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_energy_meter`
- 来源：`schmidt-rivera-azapagic-2019-ready-meals`

###### 成品系统氨制冷剂补充量（`packaging_ammonia_makeup`）

本卡记录该具体原子交换跨越所声明前景过程边界时的数量；数量按下述规则取得。

- 选定流：氨
- 流属性/单位：Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg；单位组 `93a60a57-a4c8-11da-a746-0800200c9a66`
- 数量规则：由年度制冷剂质量平衡计算归属于冷却、冻结和成品储存设备的氨补充量。
- 数值来源模式：计算值（`calculated_value`）
- 适用范围：技术特定（`technology_specific`）
- 归一化基准：每 1 kg 净可售餐品
- 基准类型：储存时长（`storage_duration`）
- 证据类型：基于采集计算（`calculated_from_collection`）
- 采集协议：`cp_refrigerant_balance`

###### 成品系统 HFC-125 补充量（`packaging_hfc125_makeup`）

本卡记录该具体原子交换跨越所声明前景过程边界时的数量；数量按下述规则取得。

- 选定流：五氟乙烷
- 流属性/单位：Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg；单位组 `93a60a57-a4c8-11da-a746-0800200c9a66`
- 数量规则：由年度制冷剂质量平衡计算归属于冷却、冻结和成品储存设备的五氟乙烷补充量。
- 数值来源模式：计算值（`calculated_value`）
- 适用范围：技术特定（`technology_specific`）
- 归一化基准：每 1 kg 净可售餐品
- 基准类型：储存时长（`storage_duration`）
- 证据类型：基于采集计算（`calculated_from_collection`）
- 采集协议：`cp_refrigerant_balance`

###### 成品系统 HFC-143a 补充量（`packaging_hfc143a_makeup`）

本卡记录该具体原子交换跨越所声明前景过程边界时的数量；数量按下述规则取得。

- 选定流：1,1,1-三氟乙烷
- 流属性/单位：Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg；单位组 `93a60a57-a4c8-11da-a746-0800200c9a66`
- 数量规则：由年度制冷剂质量平衡计算归属于冷却、冻结和成品储存设备的1,1,1-三氟乙烷补充量。
- 数值来源模式：计算值（`calculated_value`）
- 适用范围：技术特定（`technology_specific`）
- 归一化基准：每 1 kg 净可售餐品
- 基准类型：储存时长（`storage_duration`）
- 证据类型：基于采集计算（`calculated_from_collection`）
- 采集协议：`cp_refrigerant_balance`

###### 成品系统 HFC-134a 补充量（`packaging_hfc134a_makeup`）

本卡记录该具体原子交换跨越所声明前景过程边界时的数量；数量按下述规则取得。

- 选定流：1,1,1,2-四氟乙烷
- 流属性/单位：Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg；单位组 `93a60a57-a4c8-11da-a746-0800200c9a66`
- 数量规则：由年度制冷剂质量平衡计算归属于冷却、冻结和成品储存设备的1,1,1,2-四氟乙烷补充量。
- 数值来源模式：计算值（`calculated_value`）
- 适用范围：技术特定（`technology_specific`）
- 归一化基准：每 1 kg 净可售餐品
- 基准类型：储存时长（`storage_duration`）
- 证据类型：基于采集计算（`calculated_from_collection`）
- 采集协议：`cp_refrigerant_balance`

##### 废物流


##### 基本流


#### 输出

##### 产品流

###### 净可售包装海鲜预制餐品（`prepared_fish_meal`）

本卡记录该具体原子交换跨越所声明前景过程边界时的数量；数量按下述规则取得。

- 选定流：以鱼类、软体动物或甲壳动物为基础的预制菜肴或餐品
- 流属性/单位：Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg；单位组 `93a60a57-a4c8-11da-a746-0800200c9a66`
- 数量规则：固定为 1 kg 净可售餐品，不含包装，并以合格包装件数和净灌装质量核验。
- 数值来源模式：固定值（`fixed_value`）
- 适用范围：产品特定（`product_specific`）
- 归一化基准：每 1 kg 净可售餐品
- 基准类型：参考流（`reference_flow`）
- 证据类型：方法公式（`method_formula`）
- 来源：`eu-pef-2021-2279`

##### 废物流

###### 包装膜废料（`packaging_film_scrap`）

本卡记录该具体原子交换跨越所声明前景过程边界时的数量；数量按下述规则取得。

- 选定流：聚乙烯薄膜废料
- 流属性/单位：Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg；单位组 `93a60a57-a4c8-11da-a746-0800200c9a66`
- 数量规则：称量被判定为废物的封口膜裁边和不合格薄膜。
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每 1 kg 净可售餐品
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_waste_mass`

###### 不合格包装餐品（`rejected_packaged_meal`）

本卡记录该具体原子交换跨越所声明前景过程边界时的数量；数量按下述规则取得。

- 选定流：不合格包装海鲜预制餐品
- 流属性/单位：Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg；单位组 `93a60a57-a4c8-11da-a746-0800200c9a66`
- 数量规则：记录包装和冷却阶段拒收密封单元内的净食品质量；回收的包装组件另行逐项记录。
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每 1 kg 净可售餐品
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_waste_mass`

##### 基本流

###### 成品系统氨泄漏至空气（`packaging_ammonia_air`）

本卡记录该具体原子交换跨越所声明前景过程边界时的数量；数量按下述规则取得。

- 选定流：氨，排放至空气
- 流属性/单位：Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg；单位组 `93a60a57-a4c8-11da-a746-0800200c9a66`
- 数量规则：由冷却、冻结和成品储存系统的制冷剂组成及质量平衡计算该组分泄漏量。
- 数值来源模式：计算值（`calculated_value`）
- 适用范围：技术特定（`technology_specific`）
- 归一化基准：每 1 kg 净可售餐品
- 基准类型：储存时长（`storage_duration`）
- 证据类型：基于采集计算（`calculated_from_collection`）
- 采集协议：`cp_refrigerant_balance`

###### 成品系统 HFC-125 泄漏至空气（`packaging_hfc125_air`）

本卡记录该具体原子交换跨越所声明前景过程边界时的数量；数量按下述规则取得。

- 选定流：五氟乙烷，排放至空气
- 流属性/单位：Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg；单位组 `93a60a57-a4c8-11da-a746-0800200c9a66`
- 数量规则：由冷却、冻结和成品储存系统的制冷剂组成及质量平衡计算该组分泄漏量。
- 数值来源模式：计算值（`calculated_value`）
- 适用范围：技术特定（`technology_specific`）
- 归一化基准：每 1 kg 净可售餐品
- 基准类型：储存时长（`storage_duration`）
- 证据类型：基于采集计算（`calculated_from_collection`）
- 采集协议：`cp_refrigerant_balance`

###### 成品系统 HFC-143a 泄漏至空气（`packaging_hfc143a_air`）

本卡记录该具体原子交换跨越所声明前景过程边界时的数量；数量按下述规则取得。

- 选定流：1,1,1-三氟乙烷，排放至空气
- 流属性/单位：Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg；单位组 `93a60a57-a4c8-11da-a746-0800200c9a66`
- 数量规则：由冷却、冻结和成品储存系统的制冷剂组成及质量平衡计算该组分泄漏量。
- 数值来源模式：计算值（`calculated_value`）
- 适用范围：技术特定（`technology_specific`）
- 归一化基准：每 1 kg 净可售餐品
- 基准类型：储存时长（`storage_duration`）
- 证据类型：基于采集计算（`calculated_from_collection`）
- 采集协议：`cp_refrigerant_balance`

###### 成品系统 HFC-134a 泄漏至空气（`packaging_hfc134a_air`）

本卡记录该具体原子交换跨越所声明前景过程边界时的数量；数量按下述规则取得。

- 选定流：1,1,1,2-四氟乙烷，排放至空气
- 流属性/单位：Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg；单位组 `93a60a57-a4c8-11da-a746-0800200c9a66`
- 数量规则：由冷却、冻结和成品储存系统的制冷剂组成及质量平衡计算该组分泄漏量。
- 数值来源模式：计算值（`calculated_value`）
- 适用范围：技术特定（`technology_specific`）
- 归一化基准：每 1 kg 净可售餐品
- 基准类型：储存时长（`storage_duration`）
- 证据类型：基于采集计算（`calculated_from_collection`）
- 采集协议：`cp_refrigerant_balance`

### 过程：清洁消毒与场内废水管理（`sanitation_wastewater`）

#### 输入

##### 产品流

###### 清洁消毒用水（`sanitation_water`）

本卡记录该具体原子交换跨越所声明前景过程边界时的数量；数量按下述规则取得。

- 选定流：饮用水
- 流属性/单位：Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg；单位组 `93a60a57-a4c8-11da-a746-0800200c9a66`
- 数量规则：计量预冲洗、清洗、消毒和终冲洗用水。
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每 1 kg 净可售餐品
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_water_chemicals`
- 来源：`codex-cxc-52-2003`；`fao-fisheries-technical-paper-355`

###### 碱性清洗剂（`sodium_hydroxide_cleaner`）

本卡记录该具体原子交换跨越所声明前景过程边界时的数量；数量按下述规则取得。

- 选定流：氢氧化钠
- 流属性/单位：Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg；单位组 `93a60a57-a4c8-11da-a746-0800200c9a66`
- 数量规则：根据清洗溶液消耗质量和活性含量计算氢氧化钠活性物质量。
- 数值来源模式：计算值（`calculated_value`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每 1 kg 净可售餐品
- 基准类型：参考流（`reference_flow`）
- 证据类型：基于采集计算（`calculated_from_collection`）
- 采集协议：`cp_water_chemicals`

###### 含氯消毒剂（`sodium_hypochlorite_disinfectant`）

本卡记录该具体原子交换跨越所声明前景过程边界时的数量；数量按下述规则取得。

- 选定流：次氯酸钠
- 流属性/单位：Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg；单位组 `93a60a57-a4c8-11da-a746-0800200c9a66`
- 数量规则：根据消毒溶液消耗质量和活性含量计算次氯酸钠活性物质量。
- 数值来源模式：计算值（`calculated_value`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每 1 kg 净可售餐品
- 基准类型：参考流（`reference_flow`）
- 证据类型：基于采集计算（`calculated_from_collection`）
- 采集协议：`cp_water_chemicals`

###### 废水处理电力（`wastewater_electricity`）

本卡记录该具体原子交换跨越所声明前景过程边界时的数量；数量按下述规则取得。

- 选定流：中压电力
- 流属性/单位：Energy / kWh
- 数量规则：分表计量格栅、泵送、气浮、曝气和污泥处理用电。
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每 1 kg 净可售餐品
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_energy_meter`
- 来源：`fao-fisheries-technical-paper-355`

###### 进入处理的预处理废水（`treatment_preparation_wastewater`）

本卡记录该具体原子交换跨越所声明前景过程边界时的数量；数量按下述规则取得。

- 选定流：海鲜预处理废水
- 流属性/单位：Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg；单位组 `93a60a57-a4c8-11da-a746-0800200c9a66`
- 数量规则：记录从 `preparation_wastewater` 转入的废水质量。
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每 1 kg 净可售餐品
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_effluent_monitoring`

##### 废物流


##### 基本流


#### 输出

##### 产品流


##### 废物流

###### 综合工艺废水（`combined_process_wastewater`）

本卡记录该具体原子交换跨越所声明前景过程边界时的数量；数量按下述规则取得。

- 选定流：食品加工废水
- 流属性/单位：Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg；单位组 `93a60a57-a4c8-11da-a746-0800200c9a66`
- 数量规则：场内不设处理时，计量转移至外部处理的废水。
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每 1 kg 净可售餐品
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_effluent_monitoring`
- 来源：`fao-fisheries-technical-paper-355`；`us-epa-seafood-effluent-guidelines`

###### 废水处理污泥（`wastewater_sludge`）

本卡记录该具体原子交换跨越所声明前景过程边界时的数量；数量按下述规则取得。

- 选定流：生物废水处理污泥
- 流属性/单位：Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg；单位组 `93a60a57-a4c8-11da-a746-0800200c9a66`
- 数量规则：称量离开场内处理系统的湿污泥，并保留干固体含量。
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每 1 kg 净可售餐品
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_effluent_monitoring`
- 来源：`fao-fisheries-technical-paper-355`

###### 分离油脂（`separated_oil_grease`）

本卡记录该具体原子交换跨越所声明前景过程边界时的数量；数量按下述规则取得。

- 选定流：分离的食品油脂
- 流属性/单位：Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg；单位组 `93a60a57-a4c8-11da-a746-0800200c9a66`
- 数量规则：称量隔油或气浮去除并送处理的油脂。
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每 1 kg 净可售餐品
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_effluent_monitoring`
- 来源：`fao-fisheries-technical-paper-355`

##### 基本流

###### 生化需氧量排放至水体（`effluent_bod_water`）

本卡记录该具体原子交换跨越所声明前景过程边界时的数量；数量按下述规则取得。

- 选定流：生化需氧量，排放至水体
- 流属性/单位：Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg；单位组 `93a60a57-a4c8-11da-a746-0800200c9a66`
- 数量规则：用同一报告期配对的最终出水体积乘以 BOD 浓度计算。
- 数值来源模式：计算值（`calculated_value`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每 1 kg 净可售餐品
- 基准类型：参考流（`reference_flow`）
- 证据类型：基于采集计算（`calculated_from_collection`）
- 采集协议：`cp_effluent_monitoring`
- 来源：`fao-fisheries-technical-paper-355`；`us-epa-seafood-effluent-guidelines`

###### 化学需氧量排放至水体（`effluent_cod_water`）

本卡记录该具体原子交换跨越所声明前景过程边界时的数量；数量按下述规则取得。

- 选定流：化学需氧量，排放至水体
- 流属性/单位：Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg；单位组 `93a60a57-a4c8-11da-a746-0800200c9a66`
- 数量规则：用同一报告期配对的最终出水体积乘以 COD 浓度计算。
- 数值来源模式：计算值（`calculated_value`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每 1 kg 净可售餐品
- 基准类型：参考流（`reference_flow`）
- 证据类型：基于采集计算（`calculated_from_collection`）
- 采集协议：`cp_effluent_monitoring`
- 来源：`fao-fisheries-technical-paper-355`

###### 总氮排放至水体（`effluent_nitrogen_water`）

本卡记录该具体原子交换跨越所声明前景过程边界时的数量；数量按下述规则取得。

- 选定流：总氮，排放至水体
- 流属性/单位：Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg；单位组 `93a60a57-a4c8-11da-a746-0800200c9a66`
- 数量规则：用同一报告期配对的最终出水体积乘以总氮浓度计算。
- 数值来源模式：计算值（`calculated_value`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每 1 kg 净可售餐品
- 基准类型：参考流（`reference_flow`）
- 证据类型：基于采集计算（`calculated_from_collection`）
- 采集协议：`cp_effluent_monitoring`
- 来源：`fao-fisheries-technical-paper-355`

###### 总磷排放至水体（`effluent_phosphorus_water`）

本卡记录该具体原子交换跨越所声明前景过程边界时的数量；数量按下述规则取得。

- 选定流：总磷，排放至水体
- 流属性/单位：Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg；单位组 `93a60a57-a4c8-11da-a746-0800200c9a66`
- 数量规则：用同一报告期配对的最终出水体积乘以总磷浓度计算。
- 数值来源模式：计算值（`calculated_value`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每 1 kg 净可售餐品
- 基准类型：参考流（`reference_flow`）
- 证据类型：基于采集计算（`calculated_from_collection`）
- 采集协议：`cp_effluent_monitoring`
- 来源：`fao-fisheries-technical-paper-355`

###### 悬浮固体排放至水体（`effluent_tss_water`）

本卡记录该具体原子交换跨越所声明前景过程边界时的数量；数量按下述规则取得。

- 选定流：悬浮固体，排放至水体
- 流属性/单位：Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg；单位组 `93a60a57-a4c8-11da-a746-0800200c9a66`
- 数量规则：用同一报告期配对的最终出水体积乘以总悬浮固体浓度计算。
- 数值来源模式：计算值（`calculated_value`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每 1 kg 净可售餐品
- 基准类型：参考流（`reference_flow`）
- 证据类型：基于采集计算（`calculated_from_collection`）
- 采集协议：`cp_effluent_monitoring`
- 来源：`fao-fisheries-technical-paper-355`；`us-epa-seafood-effluent-guidelines`

###### 油脂排放至水体（`effluent_oil_grease_water`）

本卡记录该具体原子交换跨越所声明前景过程边界时的数量；数量按下述规则取得。

- 选定流：油脂，排放至水体
- 流属性/单位：Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg；单位组 `93a60a57-a4c8-11da-a746-0800200c9a66`
- 数量规则：用同一报告期配对的最终出水体积乘以油脂浓度计算。
- 数值来源模式：计算值（`calculated_value`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每 1 kg 净可售餐品
- 基准类型：参考流（`reference_flow`）
- 证据类型：基于采集计算（`calculated_from_collection`）
- 采集协议：`cp_effluent_monitoring`
- 来源：`fao-fisheries-technical-paper-355`

## 7. 分配与共产品处理

| rule_id | 适用对象 | 规则 | 来源 |
| --- | --- | --- | --- |
| `allocation_subdivide_first` | 共享制造与支持过程 | 只要可行，优先以分表计量或过程细分避免对储存、预处理、熟制、包装、清洁消毒和废水处理进行分配。 | `eu-pef-2021-2279` |
| `allocation_physical_driver` | 剩余共享公用工程 | 无法细分时，使用有据可查的因果物理驱动量，例如设备时间与负荷、储存体积-时间、处理废水体积与污染负荷或包装线吞吐量；只有质量体现物理关系时才使用质量分配。 | `eu-pef-2021-2279`；`schmidt-rivera-azapagic-2019-ready-meals` |
| `allocation_seafood_outputs` | 海鲜残余和回收材料 | 根据实际法律和经济状态把每项输出判定为共产品或废物。共产品优先细分或系统扩展，其次使用有据可查的物理关系；仅在不存在可辩护物理关系时使用经济分配。除非单独报告系统扩展情景，不得在工厂门结果中把废物去向计作避免生产信用。 | `eu-pef-2021-2279` |
| `allocation_recipe_batches` | 多产品批次 | 依据实测配方质量、实际产率、设备占用和返工转移分配共享批次投入；披露规则，且不得把不合格产品当作净可售输出承担分配。 | `eu-pef-2021-2279` |

## 8. 前景数据采集、计算与质量规则

### 数据采集协议

| protocol_id | process_id | flow_role | record_type | raw_fields | collection_method | unit | frequency | temporal_coverage | site_scope | aggregation_rule | quality_evidence |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| `cp_material_mass` | `receipt_cold_storage`；`seafood_preparation_formulation`；`cooking_preservation`；`packaging_cooling` | 海鲜和配方物料投入 | 收货记录、批次单、秤记录、配方系统 | 物料身份；供应商；物种；来源；投入状态；批次；毛重；皮重；验收质量；配方版本 | 校准秤和受控批次记录 | kg | 每次收货和每批 | 代表性连续 12 个月，或完整的较短生产季 | 生产申报产品的全部设施 | 按原子物料和批次汇总验收质量，并归一化至过程输出和参考流 | 秤校准、供应商批次追溯、配方版本、验收记录 |
| `cp_output_mass` | 全部生产过程 | 中间品与最终产品 | 批次产率和包装记录 | 批次；输出身份；合格质量；返工；库存变化；包装件数；净灌装质量 | 校准秤及包装件数核对 | kg | 每批 | 与投入记录相同 | 全部纳入生产线和场址 | 汇总合格输出并核对过程间转移 | 校准、放行记录、质量平衡签核 |
| `cp_energy_meter` | 全部生产过程 | 电力、蒸汽和外购热 | 分表、总表、发票、设备日志 | 载能体；表号；期初期末读数；批次时间；负荷；产量 | 优先直接分表，否则用有据可查的物理驱动量分配 | kWh 或 MJ | 连续或每批；每月发票核对 | 代表性连续 12 个月 | 全部纳入生产线和支持系统 | 有依据时扣除基荷，按因果驱动量分配并归一化 | 仪表校准或核验、发票核对、分配工作表 |
| `cp_fuel_records` | `cooking_preservation` | 各种场内燃料 | 燃料表、罐存、交付发票、锅炉日志 | 燃料身份；数量；密度；低位热值；硫和碳含量；设备；运行时间 | 仪表或库存平衡并与交付核对 | m3 或 kg | 每批或每日；每月核对 | 代表性连续 12 个月 | 全部纳入燃烧设备 | 各燃料分别汇总并归一化 | 仪表核查、发票、库存核对、燃料规格 |
| `cp_water_chemicals` | `receipt_cold_storage`；`seafood_preparation_formulation`；`sanitation_wastewater` | 冰、水、清洗剂和消毒剂 | 水表、加药记录、采购与库存 | 物料身份；溶液浓度；活性含量；仪表或库存期初期末；批次 | 专用仪表或质量/库存平衡；按溶液质量和检验值计算活性物 | kg 或 m3 | 每批或每班；每月核对 | 代表性连续 12 个月 | 全部纳入预处理和清洁区 | 按原子物料及用途分别汇总并归一化 | 仪表校准、化学品证书、加药系统核验、库存核对 |
| `cp_packaging_bom` | `packaging_cooling` | 包装组件和气调气体 | 批准物料清单、领退料、废料、气体计量 | 材料与层；单件质量；领用；退料；裁边；不合格包装；气体身份与用量 | 组件称量加领退料平衡；气体表或钢瓶平衡 | kg | 每个包装批次 | 代表性连续 12 个月 | 全部包装形式和生产线 | 各组件分别计算消耗、扣除退料、包含废料并归一化至净餐品质量 | 包装规格、秤核验、库存核对、批准版面和气体配方 |
| `cp_refrigerant_balance` | `receipt_cold_storage`；`packaging_cooling` | 制冷剂补充与直接排放 | 设备台账、维修、采购、回收和库存 | 设备；商品名；组分；充注；补充；回收；处置；期初期末库存 | 各设备系统和各化学组分年度质量平衡 | kg | 每次维修，年度核对 | 代表性连续 12 个月 | 全部纳入冷库、冷水机和冻结设备 | 损失=期初库存+采购+补充-回收-转移-期末库存；按设备服务和储存物理驱动量分配 | 技师记录、钢瓶称量、制冷剂规格、平衡闭合 |
| `cp_waste_mass` | 全部生产过程 | 各固体或液体废物 | 废物秤、容器、转移联单、销毁与回收记录 | 废物身份；来源过程；法律状态；湿重；适用时干固体；去向；日期 | 专用称量或经核验的容器计数与平均质量 | kg | 每批或每次清运 | 代表性连续 12 个月 | 全部生产线和废物区 | 按原子废物和去向分别汇总并归一化 | 秤校准、转移联单、去向合同、分类记录 |
| `cp_effluent_monitoring` | `seafood_preparation_formulation`；`sanitation_wastewater` | 废水、污泥和直接水体排放 | 流量计、混合样、实验室报告、污泥记录 | 废水来源；体积或质量；采样期；BOD；COD；总氮；总磷；TSS；油脂；污泥湿重与干固体 | 可行时流量比例混合采样和认可实验室分析 | m3、kg 或 mg/L | 连续流量；按许可或代表性频次采样 | 与生产相同报告期 | 全部纳入排水口和处理单元 | 配对同期间浓度与流量，计算污染物质量并归一化 | 仪表校准、样品交接、实验室认可、采样计划、许可报告 |
| `cp_stack_emissions` | `cooking_preservation` | 直接燃烧排放 | 连续或周期烟气监测、燃料记录、设备因子 | 污染物；浓度；烟气流量；运行时间；燃料量；因子来源；控制效率 | 优先直接测量，否则由原子燃料记录和有据可查的因子计算 | kg | 连续或许可测试；每报告期计算 | 与燃料清单相同 | 每台纳入燃烧设备 | 各污染物分别计算并归一化至处理后餐品输出 | 校准与测试报告或因子文献、燃料规格、计算表 |

### 计算规则

| rule_id | 适用对象 | 公式或规则 | 输入 | 输出 | source_ids |
| --- | --- | --- | --- | --- | --- |
| `calc_reference_normalization` | 每项前景交换 | 归一化交换量=报告期交换量/报告期净可售餐品质量 | 原子交换量；合格净餐品质量 | 每 1 kg 参考流的数量 | `eu-pef-2021-2279` |
| `calc_recipe_yield` | 预处理、熟制和包装 | 产率=合格输出质量/配方物料投入总质量；蒸发、残余、废水转移、返工和未解释差额分别报告 | 原子配料质量；合格输出；废物与废水；库存变化 | 工序产率和质量平衡闭合 | `codex-cxc-52-2003` |
| `calc_active_chemical` | 清洗化学品 | 活性物质量=溶液质量×供应商检验的活性质量分数 | 溶液质量；活性分数 | kg 氢氧化钠或次氯酸钠 | `codex-cxc-52-2003` |
| `calc_refrigerant_components` | 制冷系统 | 依据有记录的制冷剂组成把系统损失分解至每种化学组分，不得只报告商品混合物名称 | 系统质量损失；组分质量分数；设备服务 | 各制冷剂组分排放 kg | `eu-pef-2021-2279` |
| `calc_effluent_load` | 直接排放 | 污染物质量=配对的处理出水体积×污染物浓度，单位保持一致 | 流量及 BOD、COD、总氮、总磷、TSS 或油脂浓度 | 各污染物排放至水体的 kg | `fao-fisheries-technical-paper-355`；`us-epa-seafood-effluent-guidelines` |
| `calc_shared_utility` | 共享支持系统 | 分配量=实测共享量×产品特定因果驱动量/全部产品驱动量之和；仅在体现因果关系时使用质量 | 共享仪表；设备时间/负荷、储存体积-时间、废水负荷或吞吐量 | 归属于产品的公用工程量 | `eu-pef-2021-2279` |

### 数据质量要求

| requirement_id | 适用对象 | 要求 | 证据 |
| --- | --- | --- | --- |
| `dq_product_identity` | 参考产品和配料 | 保存每个产品的配方版本、海鲜物种、来源、投入状态、供应商批次、保藏路线、包装形式、储存状态、预期用途和净质量。 | 批次、供应商规格、产品规格、批准标签 |
| `dq_temporal_alignment` | 全部前景记录 | 使用共同代表期，通常为连续 12 个月；较短生产季必须覆盖全部运行状态并披露季节性、启停和异常事件。 | 仪表与批次日期、生产日历、方差复核 |
| `dq_mass_balance` | 每个过程及整体前景 | 核对全部物料投入、输出、废物、废水、蒸发估计、返工和库存变化；调查并披露未解释差额。 | 签核的过程与设施质量平衡 |
| `dq_atomicity` | 清单 | 每种配料、包装组件、载能体、燃料、制冷剂组分、化学品、废物和直接排放均保持独立交换。 | 原子行审计与源记录交叉表 |
| `dq_measurement` | 仪表、秤和分析 | 保存校准或核验状态、检出限、采样方法、实验室质量证据和换算因子。 | 校准证书、实验室报告、采样与计算记录 |
| `dq_representativeness` | 上游与前景数据集 | 评价技术、地域和时间代表性及精度；披露全部代理和替代。 | 数据质量评价与代理台账 |
| `dq_completeness` | 已知投入与输出 | 核算全部已知投入和输出，包括直接空气和水体排放；有依据的排除必须说明流、依据和预期重要性。 | 完整性清单、过程走查、环境许可交叉核对 |

## 9. 校验规则

| rule_id | 适用对象 | 规则 | 来源 |
| --- | --- | --- | --- |
| `validate_scope` | 产品身份 | 确认产品是以鱼类、软体动物、甲壳动物或其明确组合为特征的复合预制菜肴或餐品，且不是被排除的单一海鲜产品。 | `codex-cxc-52-2003` |
| `validate_reference_mass` | 参考流 | 确认参考量恰为 1 kg 不含包装的净可售餐品，且包装件数与灌装质量记录能够核对。 | `eu-pef-2021-2279` |
| `validate_qualifiers` | 参考流元数据 | 配方、海鲜物种与来源、海鲜投入状态、海鲜比例、保藏路线、预期用途、储存状态、包装系统、净质量、生产地域或报告期缺失时，判定完整性失败。 | `codex-cxc-52-2003` |
| `validate_process_coverage` | 前景边界 | 确认过程图中每个适用过程均有记录，且申报路线中省略或不适用的步骤有依据。 | `codex-cxc-52-2003` |
| `validate_atomic_inventory` | 全部交换 | 拒绝合并的配料、公用工程、包装、制冷剂、废物或排放行；每个选定流必须代表一个原子交换。 | `eu-pef-2021-2279` |
| `validate_recipe_and_yield` | 物料平衡 | 确认配方领料、配料投入、中间转移、净可售输出、返工、海鲜残余、食品损失、废水和库存变化在场址规定且有记录的容差内闭合。 | `codex-cxc-52-2003` |
| `validate_refrigerants` | 制冷系统 | 确认设备台账覆盖全部纳入冷库、冷水机和冻结设备，且补充和泄漏已分解至单个化学组分。 | `eu-pef-2021-2279` |
| `validate_emissions` | 直接排放 | 确认每项已知直接空气和水体排放均单独实测或计算，且浓度、流量、燃料和运行期记录时间一致。 | `eu-pef-2021-2279`；`fao-fisheries-technical-paper-355` |
| `validate_allocation` | 共享过程与共产品 | 确认首先尝试细分；分配驱动量具有因果性且有记录；海鲜输出已判定共产品或废物；经济分配显著影响结果时披露敏感性。 | `eu-pef-2021-2279` |
| `validate_data_quality` | 发布前景数据集 | 确认时间、技术与地域代表性、测量质量、代理披露及已知投入输出完整性已有记录。 | `eu-pef-2021-2279` |

## 10. 发布数据集画像

| 字段 | 值 |
| --- | --- |
| dataset_role | 申报海鲜预制菜肴或餐品的工厂门前景生产数据集 |
| downstream_use | `secondary_dataset`；`background_dataset` |
| allowed_use | 配方、海鲜物种与来源、保藏路线、储存状态、包装形式、地域、技术、分配和报告期相容时，可用于产品特定过程数据集和生命周期模型 |
| excluded_use | 不同餐品功能或食用品质之间的比较声明；替代未配制海鲜产品；不链接上游配料和包装；未明确加入下游模块却用作从摇篮到坟墓结果 |
| required_metadata | canonical PCR id；配方标识与版本；海鲜物种、来源和投入状态；海鲜质量分数；完整配料表；工艺路线；保藏和热处理；即食或复热即食状态；储存状态和温度；货架期依据；净质量；包装组件和气调配方；设施地域；技术；报告期；分配；废物与废水去向 |
| required_quality_disclosure | 采集覆盖；校准和实验室证据；物料与能源平衡；制冷剂平衡；直接排放方法；时间、地域和技术代表性；代理台账；分配驱动量；完整性排除；未解决的 Tiangong 身份和 range 证据 |
| update_trigger | 配方或海鲜物种变化；供应来源变化；保藏或熟制技术变化；包装重新设计；制冷剂替换；能源系统变化；废水处理或排放变化；分配变化；设施或地域变化；或前景数据超过申报代表期 |

## 11. 数据源

| Source id | 类型 | 参考文献 | 用途 |
| --- | --- | --- | --- |
| `codex-cxc-52-2003` | official_guidance | FAO 和 WHO，*Code of Practice for Fish and Fishery Products*，第二版，CXC 52-2003，ISBN 978-92-5-107018-5，https://www.fao.org/4/i2382e/i2382e.pdf | 产品描述、预期用途、工艺流程、海鲜预处理、熟制、包装、温控、清洁消毒、废物管理和追溯 |
| `schmidt-rivera-azapagic-2019-ready-meals` | literature | Schmidt Rivera, X. C. 和 Azapagic, A. (2019)，*Life cycle environmental impacts of ready-made meals considering different cuisines and recipes*，Science of the Total Environment 660，1168-1181，https://doi.org/10.1016/j.scitotenv.2019.01.069 | 预制餐品功能单位先例、配方敏感清单、制造、包装、冷藏、配送与废物阶段、公用工程采集和共享能源分配先例 |
| `kontominas-et-al-2021-seafood-packaging` | literature | Kontominas, M. G. 等 (2021)，*Recent Developments in Seafood Packaging Technologies*，Foods 10(5)，940，https://doi.org/10.3390/foods10050940 | 海鲜易腐性、包装功能与技术、包装材料性能、气调气体身份及温控依赖 |
| `fao-fisheries-technical-paper-355` | official_guidance | González, J. F. (1996)，*Wastewater treatment in the fishery industry*，FAO Fisheries Technical Paper 355，ISBN 92-5-103788-4，https://www.fao.org/4/v9922e/v9922e00.htm | 海鲜废水来源、固体/BOD/COD/油脂/氮磷表征、一级与生物处理及污泥管理 |
| `us-epa-seafood-effluent-guidelines` | official_guidance | 美国环境保护署，*Seafood Processing Effluent Guidelines*，40 CFR Part 408，https://www.epa.gov/eg/seafood-processing-effluent-guidelines | 官方确认海鲜接收、清洗、分割、熟制、冻结和包装会产生工艺废水，需按污染物分别处理和核算 |
| `eu-pef-2021-2279` | official_guidance | 欧盟委员会，Commission Recommendation (EU) 2021/2279，Official Journal L 471，2021-12-30，ELI http://data.europa.eu/eli/reco/2021/2279/oj | 功能单位与参考流、系统边界、企业特定投入输出/废物/直接排放数据、数据质量、代理披露和多功能过程层级 |
