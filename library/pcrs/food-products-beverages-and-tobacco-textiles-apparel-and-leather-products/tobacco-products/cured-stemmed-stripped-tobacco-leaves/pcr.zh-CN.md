---
pcr_id: pcr.food-products-beverages-and-tobacco-textiles-apparel-and-leather-products.tobacco-products.cured-stemmed-stripped-tobacco-leaves
language: zh-CN
status: candidate
content_maturity: authored_methodology
translation_status: aligned
sync_with: pcr.en-US.md
---

# 带梗/去梗的烤烟叶

## 1. 范围与适用性

本 PCR 规定叶烟打叶复烤设施的前景数据生产方法，边界从接收可追溯的已调制未去梗烟叶开始，依次覆盖回潮调湿、异物剔除、机械打叶或去梗、叶片与烟梗分离、筛分、复烤、冷却或水分平衡以及设施门口的包装。参考产品是未制成品状态的已调制去梗烟叶：主梗或中肋已去除，叶片或烟片仍是后续制造的原料。

本 PCR 仅在声明烟草类别和类型、已知时的品种、产地、作物年度、调制方法、来料水分、等级、最终去梗形态、最终水分规格及包装时，覆盖烤烟、火管烤烟和晾晒烟。种植、采收、初次调制及入厂运输属于上游关联系统，除非扩展研究以独立过程明确纳入。以未去梗形态销售的已调制整叶、单独销售的烟梗、切丝或破碎吸用烟草、雪茄、卷烟、无烟烟草、再造或均质烟草、提取物、香精、尼古丁产品及成品消费品不在本 PCR 范围内。

Tiangong 参考身份已通过中英文 `baseName`、Product flow 类型、CPC 25010、Mass、Units of mass 和 kg 精确核验。平台 `treatmentStandardsRoutes` 的值为 `Fresh, unprocessed produce` / `鲜品，未加工`，与已调制产品标题相冲突。该路线值属于未决 Tiangong 元数据问题：不得用来界定本 PCR 的边界、工艺路线或产品状态，并且必须在发布前解决或由正式审查明确接受。

## 2. 产品类别识别

| 字段 | 值 |
| --- | --- |
| canonical_pcr_id | pcr.food-products-beverages-and-tobacco-textiles-apparel-and-leather-products.tobacco-products.cured-stemmed-stripped-tobacco-leaves |
| classification_refs | CPC:3.0:25010（`exact`） |
| covered_products | 已去除主梗或中肋的未制成品已调制烟草叶片或烟片；当条片碎料被有意纳入销售产品规格时也包括该条片碎料。 |
| excluded_products | 青烟叶或鲜烟叶；以未去梗整叶形态销售的已调制烟叶；分离烟梗；粉尘和搬运废物；切丝；加香、膨胀、再造、均质、提取、制成品或可供消费者直接使用的烟草产品。 |
| representative_product | 在打叶复烤设施门口达到已声明类型、产地、作物年度、等级、水分规格、含梗率规格及包装要求，可供储存或后续制造的复烤烟片。 |
| production_route | 已调制未去梗烟叶接收 → 回潮调湿和异物剔除 → 打叶/去梗和风分 → 筛分 → 复烤和冷却/平衡 → 包装和仓储放行。 |
| market_state | 打叶复烤设施门口的未制成品已调制去梗叶烟；不是鲜品，也不是可直接吸用或以其他方式消费的成品。 |

## 3. 参考流

| 字段 | 值 |
| --- | --- |
| What | 用于储存和后续烟草制品制造的已调制去梗叶烟原料。 |
| How much | 1,000 kg 净重带梗/去梗的烤烟叶，不含包装。 |
| How well | 声明烟草类别和类型、已知时的品种、产地、作物年度、调制方法和地点、等级、来料及成品水分基准、含梗率规格、采用时的烟片尺寸规格、包装配置和符合性依据。 |
| How long or cycle | 打叶复烤设施门口一个已放行生产批次；不指定使用期限或醇化期。 |
| reference_flow_link | `rf_cured_stemmed_stripped_tobacco_leaves` |

| 字段 | 值 |
| --- | --- |
| 参考数量 | 1,000 kg 净产品 |
| 参考产品流 | 带梗/去梗的烤烟叶 `57a438c1-b4d5-427a-8240-3aacf6c56025` |
| 参考流属性 | Mass `93a60a56-a3c8-11da-a746-0800200b9a66` |
| 参考单位组 | Units of mass `93a60a57-a4c8-11da-a746-0800200c9a66` |
| 参考单位 | kg |
| 必需限定信息 | 烟草类别和类型；已知时的品种或商品名称；原产国和原产地区；作物年度；调制方法和调制地点；来料烟叶等级和水分基准；最终水分规格和实测结果；最终含梗率规格和实测结果；采用时的烟片尺寸规格；包装配置；净产品质量；生产批次；设施地理位置；时间覆盖；上游调制数据集引用 |

构建前景数据包时，`必需限定信息` 中的每一项都必须在数据集元数据、过程说明、参考流备注、产品描述或等效数据包字段中声明。缺失必需限定信息时参考流不完整。

## 4. 计量与单位规则

| rule_id | 适用对象 | 必需流属性 | 必需单位 | 规则 |
| --- | --- | --- | --- | --- |
| `reference_mass` | 参考产品和归一化清单 | Mass `93a60a56-a3c8-11da-a746-0800200b9a66` | kg | 将每项前景交换归一化到设施门口恰好 1,000 kg 净重合格产品。 |
| `net_product_mass` | 包装后输出 | Mass | kg | 参考数量不包括纸箱、内衬、捆扎带、托盘和其他包装质量；净重与毛重记录须分别保留。 |
| `moisture_basis` | 来料烟叶、中间产品、烟梗、碎料及成品 | Mass 和水分质量分数 | kg；湿基 % 或已声明的其他基准 | 每项质量必须同时记录水分基准和测定方法；没有明确换算时不得比较或平衡不同水分基准的质量。 |
| `stem_content` | 最终去梗产品 | 质量分数 | 质量 % | 采用已声明的抽样和试验方法测定并报告残余主梗或中肋含量；不得仅依据打叶机设定推断符合性。 |
| `electricity_conversion` | 计量电力 | Energy | kWh | 保留计量 kWh；来源记录为 MJ 时按 1 kWh = 3.6 MJ 换算，并保留原始读数和换算。 |
| `fuel_energy` | 燃烧燃料 | Energy | MJ | 分别记录燃料实物量和热值基准；不得把质量或体积直接当作能量。 |

## 5. 系统边界

### 边界概化

| 字段 | 值 |
| --- | --- |
| declared_starting_condition | 打叶复烤设施接收的可追溯已调制未去梗烟叶，并声明烟草类型、产地、作物年度、调制方法和地点、等级、接收质量、水分基准及上游种植—调制数据集引用。 |
| starting_condition_role | 前景门口输入；种植、采收、初次调制和入厂运输是关联上游系统，除非在扩展研究中另行纳入。 |
| product_classification_scope | 由 CPC 3.0 代码 25010 表示并限于已去除主梗或中肋的未制成品叶烟的带梗/去梗的烤烟叶。 |
| recursive_input_rule | 采购或转入的同类别带梗/去梗的烤烟叶只作为具有上游数据集的独立输入记录一次；不得递归重建其打叶复烤清单。 |
| upstream_dataset_requirement | 为已调制未去梗来料关联种植、采收、调制和入厂运输；关联实际使用的外购电力、蒸汽、水、每种燃料、包装组件和场外处理。 |
| disclosure | 声明设施和地理位置、烟草类型、产地和作物年度、调制方法和地点、来料状态、工艺配置、水分目标、烟梗和碎料去向、燃料和排放计算、包装、分配、排除项、数据缺口及未决 Tiangong 路线元数据冲突。 |

| rule_id | 适用对象 | 规则 | source_ids |
| --- | --- | --- | --- |
| `boundary_cured_leaf_start` | 前景起点 | 正常前景边界从接收合格的已调制未去梗烟叶开始；以关联上游数据集表示种植、采收、调制和入厂运输，并声明采用烤制、火制还是晾晒调制。 | `usda-7cfr-leaf-tobacco`; `fao-rwedp-32` |
| `boundary_complete_stemming_redrying` | 覆盖路线 | 实际进行时，应把回潮调湿、异物剔除、打叶或去梗、叶片与烟梗分离、筛分、复烤、水分平衡或冷却及包装作为明确前景作业纳入。 | `wise-reaves-1997`; `usepa-2006-tobacco-processing` |
| `boundary_product_state` | 产品身份 | 参考输出必须保持为去梗形态的未制成品已调制叶烟；排除以未去梗形态销售的烟叶及所有下游切丝、加香、膨胀、再造、提取和消费品制造。 | `unsd-cpc3-25010`; `usda-7cfr-leaf-tobacco` |
| `boundary_actual_inputs` | 公用工程和材料 | 将实际使用的每项水投入、电力、蒸汽、燃料、清洗化学品和包装组件分别记录为一个原子交换；实际项目未在下方表示时须新增具体卡片。 | `eu-2021-2279-environmental-footprint` |
| `boundary_outputs_emissions` | 输出 | 按去向分别记录烟梗、条片碎料、烟尘、拒收物、废水和每种直接排放物质；不得把直接排放隐藏在处理服务输入中，也不得从投入中净扣共产品。 | `usepa-2006-tobacco-processing`; `eu-2021-2279-environmental-footprint` |
| `boundary_tiangong_route_conflict` | Tiangong 元数据 | 不得把 `Fresh, unprocessed produce` / `鲜品，未加工` 用作路线证据，因为该值与已调制产品标题和 CPC 身份冲突；必须披露冲突，并在发布前解决或取得正式审查接受。 | `unsd-cpc3-25010`; `usda-7cfr-leaf-tobacco` |

## 6. 过程清单结构

### 过程图

| process_id | 过程名称 | 纳入状态 | 纳入条件 | 建模角色 | 定量参考 |
| --- | --- | --- | --- | --- | --- |
| `leaf_receiving_conditioning` | 已调制烟叶接收、回潮调湿和检验 | `required` | 每个覆盖批次；公用工程卡仅在实际使用时适用。 | 建立可追溯来料状态、使烟叶松散并增湿以便处理，以及剔除非烟草异物。 | kg 回潮后已调制烟叶 |
| `threshing_separation` | 打叶、去梗、风分和筛分 | `required` | 每个覆盖批次。 | 去除主梗或中肋，并分离叶片、烟梗、条片碎料、粉尘和拒收物。 | kg 分离烟叶片 |
| `redrying_cooling` | 复烤和水分平衡 | `required` | 每个覆盖批次；仅启用实际热源卡。 | 使分离叶片达到已声明最终水分和稳定包装状态。 | kg 复烤合格叶片 |
| `packing_storage_release` | 包装和仓储放行 | `required` | 每个覆盖批次；仅启用实际使用的包装组件。 | 生产已声明净重参考产品并放行储存或发运。 | 1,000 kg 净重参考产品 |

本候选 PCR 不含任何数量范围块。每个数量均来自前景记录或计算；没有把单一设施值、单次调制试验或文献案例转化为经验区间。

### 过程：已调制烟叶接收、回潮调湿和检验（`leaf_receiving_conditioning`）

#### 输入

##### 产品流

###### 接收的已调制未去梗烟叶（`received_cured_unstemmed_leaf`）

来料批次是主梗或中肋尚未去除的已调制叶烟。

- 选定流：已调制未去梗烟叶
- 流属性/单位：Mass / kg
- 数量规则：称量每个接收合格批次，并记录水分、等级、产地、作物年度、调制路线和上游数据集。
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每 1,000 kg 净重参考产品
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_leaf_receipts`
- 来源：`usda-7cfr-leaf-tobacco`; `wise-reaves-1997`

###### 回潮调湿水（`conditioning_water`）

仅记录打叶前为回潮调湿而喷洒或供给烟叶的水。

- 选定流：过程水
- 流属性/单位：Mass / kg
- 数量规则：计量或称量供给每个代表批次的水；当水被烟叶吸收时不得生成默认废水输出。
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每 kg 回潮后已调制烟叶输出
- 基准类型：过程输出（`process_output`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_conditioning_records`
- 来源：`usepa-2006-tobacco-processing`

###### 回潮用外购蒸汽（`conditioning_purchased_steam`）

仅在外购蒸汽跨越过程边界用于回潮调湿时记录。

- 选定流：外购蒸汽
- 流属性/单位：Energy / MJ
- 数量规则：使用蒸汽表，或根据实测冷凝水/蒸汽质量及有记录的热力状态计算能量。
- 数值来源模式：计算值（`calculated_value`）
- 适用范围：技术特定（`technology_specific`）
- 归一化基准：每 kg 回潮后已调制烟叶输出
- 基准类型：过程输出（`process_output`）
- 证据类型：根据采集记录计算（`calculated_from_collection`）
- 采集协议：`cp_conditioning_records`
- 来源：`usepa-2006-tobacco-processing`

###### 接收和回潮用电力（`conditioning_electricity`）

记录卸料、开包、输送、回潮、检验和相关除尘的电力。

- 选定流：设施供电
- 流属性/单位：Energy / kWh
- 数量规则：使用分表电量，或用已记录的分配驱动因素按设备运行时间核对设施电量。
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每 kg 回潮后已调制烟叶输出
- 基准类型：过程输出（`process_output`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_conditioning_records`
- 来源：`wise-reaves-1997`

##### 废物流

##### 基本流

#### 输出

##### 产品流

###### 回潮后已调制烟叶（`conditioned_cured_leaf`）

回潮后烟叶是转入机械打叶或去梗的实测输出。

- 选定流：回潮后已调制烟叶
- 流属性/单位：Mass / kg
- 数量规则：称量转移量或以质量平衡计算，并记录打叶前的即时水分。
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每 kg 回潮后已调制烟叶输出
- 基准类型：过程输出（`process_output`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_conditioning_records`
- 来源：`wise-reaves-1997`

##### 废物流

###### 拒收的已调制烟叶（`receiving_rejected_leaf`）

将等级不符、受损、霉变、过湿或其他不合格烟叶与可售材料分开记录。

- 选定流：废弃拒收已调制烟叶
- 流属性/单位：Mass / kg
- 数量规则：称量每个拒收批次或容器，并记录拒收原因和去向。
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每 kg 接收的已调制未去梗烟叶
- 基准类型：过程输出（`process_output`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_leaf_receipts`
- 来源：`usda-7cfr-leaf-tobacco`

###### 接收时去除的石块（`receiving_stones`）

单独记录从烟叶中去除的石块，不得与其他异物合并。

- 选定流：烟叶接收废石块
- 流属性/单位：Mass / kg
- 数量规则：按批次或报告期称量收集的石块并保留去向记录。
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每 kg 接收的已调制未去梗烟叶
- 基准类型：过程输出（`process_output`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_leaf_receipts`
- 来源：`wise-reaves-1997`; `usda-7cfr-leaf-tobacco`

###### 设备清洗废水（`conditioning_cleaning_wastewater`）

仅在湿式清洗产生排放时记录；被烟叶吸收的回潮雾化水不是废水。

- 选定流：烟叶回潮设备清洗废水
- 流属性/单位：Mass / kg
- 数量规则：计量排放，或根据实测清洗水投入及分别测定的滞留水或蒸发水计算。
- 数值来源模式：计算值（`calculated_value`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每 kg 回潮后已调制烟叶输出
- 基准类型：过程输出（`process_output`）
- 证据类型：根据采集记录计算（`calculated_from_collection`）
- 采集协议：`cp_conditioning_records`
- 来源：`usepa-2006-tobacco-processing`

##### 基本流

### 过程：打叶、去梗、风分和筛分（`threshing_separation`）

#### 输入

##### 产品流

###### 进入打叶的回潮烟叶（`conditioned_leaf_to_threshing`）

记录进入打叶线的回潮烟叶实测转移量。

- 选定流：回潮后已调制烟叶
- 流属性/单位：Mass / kg
- 数量规则：使用转移秤，并校正生产线期初和期末库存。
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每 kg 分离烟叶片输出
- 基准类型：过程输出（`process_output`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_separation_records`
- 来源：`wise-reaves-1997`

###### 打叶和分离用电力（`threshing_electricity`）

记录打叶机、输送机、风分器、筛机、风机和除尘器的电力。

- 选定流：设施供电
- 流属性/单位：Energy / kWh
- 数量规则：使用生产线分表，或按代表批次核对设备负荷和运行小时。
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每 kg 分离烟叶片输出
- 基准类型：过程输出（`process_output`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_separation_records`
- 来源：`wise-reaves-1997`

##### 废物流

##### 基本流

#### 输出

##### 产品流

###### 分离烟叶片（`separated_tobacco_lamina`）

分离叶片是转入复烤的主产品。

- 选定流：已调制烟叶片
- 流属性/单位：Mass / kg
- 数量规则：称量叶片流，并在复烤机进料处测定水分。
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每 kg 分离烟叶片输出
- 基准类型：过程输出（`process_output`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_separation_records`
- 来源：`usda-7cfr-leaf-tobacco`; `wise-reaves-1997`

###### 分离烟梗（`separated_tobacco_stems`）

只有在主梗或中肋被送去有益利用时才作为共产品记录；否则将同一实物流按其去向重新归类为废物。

- 选定流：分离已调制烟梗
- 流属性/单位：Mass / kg
- 数量规则：称量分离烟梗流，并在评估经济分配时记录水分、买方或处理去向及收入。
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每 kg 分离烟叶片输出
- 基准类型：过程输出（`process_output`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_separation_records`
- 来源：`usda-7cfr-leaf-tobacco`; `wise-reaves-1997`

###### 可售烟叶条片碎料（`saleable_strip_scrap`）

只有在筛下小叶片符合已声明可售规格时才作为共产品记录。

- 选定流：已调制烟叶条片碎料
- 流属性/单位：Mass / kg
- 数量规则：将可售条片碎料与粉尘和废物分别称量，并记录水分、规格和去向。
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：产品特定（`product_specific`）
- 归一化基准：每 kg 分离烟叶片输出
- 基准类型：过程输出（`process_output`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_separation_records`
- 来源：`usda-7cfr-leaf-tobacco`; `wise-reaves-1997`

##### 废物流

###### 收集烟尘（`collected_tobacco_dust`）

将袋式除尘器或其他除尘器去除的粉尘与可售条片碎料分开记录。

- 选定流：废弃收集烟尘
- 流属性/单位：Mass / kg
- 数量规则：称量去除的粉尘或核对除尘器容器质量，并记录去向。
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每 kg 分离烟叶片输出
- 基准类型：过程输出（`process_output`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_separation_records`
- 来源：`usepa-2006-tobacco-processing`

##### 基本流

###### 无组织排放细颗粒物（`threshing_pm25_to_air`）

仅在监测或适用因子支持该交换时记录未捕集细颗粒物排放。

- 选定流：粒径小于 2.5 微米的颗粒物，排入空气
- 流属性/单位：Mass / kg
- 数量规则：使用实测浓度和排气流量，或将明确引用且适用于设备和控制装置的因子应用于采集活动数据。
- 数值来源模式：计算值（`calculated_value`）
- 适用范围：技术特定（`technology_specific`）
- 归一化基准：每 kg 分离烟叶片输出
- 基准类型：过程输出（`process_output`）
- 证据类型：根据采集记录计算（`calculated_from_collection`）
- 采集协议：`cp_air_emissions`
- 来源：`usepa-2006-tobacco-processing`

### 过程：复烤和水分平衡（`redrying_cooling`）

#### 输入

##### 产品流

###### 进入复烤的分离叶片（`lamina_to_redrying`）

记录进入复烤机的叶片质量和水分。

- 选定流：已调制烟叶片
- 流属性/单位：Mass / kg
- 数量规则：使用复烤机进料秤和代表性水分抽样。
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每 kg 复烤合格叶片输出
- 基准类型：过程输出（`process_output`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_redrying_records`
- 来源：`wise-reaves-1997`

###### 复烤和冷却用电力（`redrying_electricity`）

记录复烤机、风机、输送机、控制器、冷却和水分平衡的电力。

- 选定流：设施供电
- 流属性/单位：Energy / kWh
- 数量规则：使用生产线分表，或核对设备负荷和运行小时。
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每 kg 复烤合格叶片输出
- 基准类型：过程输出（`process_output`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_redrying_records`
- 来源：`wise-reaves-1997`

###### 复烤用外购蒸汽（`redrying_purchased_steam`）

仅在外购蒸汽提供复烤热量时启用本卡。

- 选定流：外购蒸汽
- 流属性/单位：Energy / MJ
- 数量规则：根据计量蒸汽质量和有记录的入口及冷凝状态计算热量。
- 数值来源模式：计算值（`calculated_value`）
- 适用范围：技术特定（`technology_specific`）
- 归一化基准：每 kg 复烤合格叶片输出
- 基准类型：过程输出（`process_output`）
- 证据类型：根据采集记录计算（`calculated_from_collection`）
- 采集协议：`cp_redrying_records`
- 来源：`wise-reaves-1997`

###### 复烤用天然气（`redrying_natural_gas`）

仅在现场燃烧天然气提供复烤热量时启用本卡。

- 选定流：天然气
- 流属性/单位：Energy / MJ
- 数量规则：计量气体体积或质量，并采用供应商热值和已声明基准计算能量。
- 数值来源模式：计算值（`calculated_value`）
- 适用范围：技术特定（`technology_specific`）
- 归一化基准：每 kg 复烤合格叶片输出
- 基准类型：过程输出（`process_output`）
- 证据类型：根据采集记录计算（`calculated_from_collection`）
- 采集协议：`cp_redrying_records`
- 来源：`zhu-2025-curing-emissions`

###### 复烤用生物质颗粒（`redrying_biomass_pellets`）

仅在现场燃烧生物质颗粒提供复烤热量时启用本卡。

- 选定流：生物质燃料颗粒
- 流属性/单位：Energy / MJ
- 数量规则：称量燃料，并采用批次特定水分和低位热值计算能量。
- 数值来源模式：计算值（`calculated_value`）
- 适用范围：技术特定（`technology_specific`）
- 归一化基准：每 kg 复烤合格叶片输出
- 基准类型：过程输出（`process_output`）
- 证据类型：根据采集记录计算（`calculated_from_collection`）
- 采集协议：`cp_redrying_records`
- 来源：`zhu-2025-curing-emissions`

###### 复烤用煤（`redrying_coal`）

仅在现场燃烧煤提供复烤热量时启用本卡。

- 选定流：煤
- 流属性/单位：Energy / MJ
- 数量规则：称量燃料，并采用批次特定低位热值及水分或灰分基准计算能量。
- 数值来源模式：计算值（`calculated_value`）
- 适用范围：技术特定（`technology_specific`）
- 归一化基准：每 kg 复烤合格叶片输出
- 基准类型：过程输出（`process_output`）
- 证据类型：根据采集记录计算（`calculated_from_collection`）
- 采集协议：`cp_redrying_records`
- 来源：`fao-rwedp-32`; `zhu-2025-curing-emissions`

##### 废物流

##### 基本流

#### 输出

##### 产品流

###### 复烤合格烟叶片（`redried_conforming_lamina`）

记录冷却或平衡后、包装前的复烤叶片。

- 选定流：复烤已调制烟叶片
- 流属性/单位：Mass / kg
- 数量规则：称量输出，并记录最终水分、残余含梗率、烟片尺寸结果和放行状态。
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每 kg 复烤合格叶片输出
- 基准类型：过程输出（`process_output`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_redrying_records`
- 来源：`wise-reaves-1997`; `usda-7cfr-leaf-tobacco`

##### 废物流

##### 基本流

###### 复烤释放的水蒸气（`redrying_water_to_air`）

通过水分校正的物料平衡计算蒸发水；不得将其报告为废水。

- 选定流：水，排入空气
- 流属性/单位：Mass / kg
- 数量规则：根据实测进出口湿质量和水分计算，并校正库存变化及其他加水。
- 数值来源模式：计算值（`calculated_value`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每 kg 复烤合格叶片输出
- 基准类型：过程输出（`process_output`）
- 证据类型：根据采集记录计算（`calculated_from_collection`）
- 采集协议：`cp_redrying_records`
- 来源：`fao-rwedp-32`

###### 复烤燃料化石二氧化碳（`redrying_fossil_co2_to_air`）

按每项燃烧的化石燃料清单分别记录化石二氧化碳。

- 选定流：二氧化碳，化石源，排入空气
- 流属性/单位：Mass / kg
- 数量规则：采用烟道测量，或把燃料特定因子应用于采集燃料量和热值基准。
- 数值来源模式：计算值（`calculated_value`）
- 适用范围：技术特定（`technology_specific`）
- 归一化基准：每 MJ 现场化石燃料投入
- 基准类型：燃料清单（`fuel_inventory`）
- 证据类型：根据采集记录计算（`calculated_from_collection`）
- 采集协议：`cp_air_emissions`
- 来源：`zhu-2025-curing-emissions`

###### 生物质燃料生物源二氧化碳（`redrying_biogenic_co2_to_air`）

现场燃烧生物质燃料时单独记录生物源二氧化碳。

- 选定流：二氧化碳，生物源，排入空气
- 流属性/单位：Mass / kg
- 数量规则：采用烟道测量，或把生物质燃料特定因子应用于采集燃料量。
- 数值来源模式：计算值（`calculated_value`）
- 适用范围：技术特定（`technology_specific`）
- 归一化基准：每 MJ 现场生物质燃料投入
- 基准类型：燃料清单（`fuel_inventory`）
- 证据类型：根据采集记录计算（`calculated_from_collection`）
- 采集协议：`cp_air_emissions`
- 来源：`zhu-2025-curing-emissions`

###### 复烤燃料二氧化硫（`redrying_so2_to_air`）

仅对实际排放二氧化硫的燃料和运行期记录该交换。

- 选定流：二氧化硫，排入空气
- 流属性/单位：Mass / kg
- 数量规则：采用烟道测量，或把燃料含硫量特定因子应用于采集燃料记录。
- 数值来源模式：计算值（`calculated_value`）
- 适用范围：技术特定（`technology_specific`）
- 归一化基准：每 MJ 现场燃料投入
- 基准类型：燃料清单（`fuel_inventory`）
- 证据类型：根据采集记录计算（`calculated_from_collection`）
- 采集协议：`cp_air_emissions`
- 来源：`zhu-2025-curing-emissions`

###### 复烤燃料一氧化氮（`redrying_no_to_air`）

将一氧化氮作为独立基本交换记录。

- 选定流：一氧化氮，排入空气
- 流属性/单位：Mass / kg
- 数量规则：采用实测浓度和排气流量，或把燃料和技术特定因子应用于采集活动数据。
- 数值来源模式：计算值（`calculated_value`）
- 适用范围：技术特定（`technology_specific`）
- 归一化基准：每 MJ 现场燃料投入
- 基准类型：燃料清单（`fuel_inventory`）
- 证据类型：根据采集记录计算（`calculated_from_collection`）
- 采集协议：`cp_air_emissions`
- 来源：`zhu-2025-curing-emissions`

###### 复烤燃料二氧化氮（`redrying_no2_to_air`）

将二氧化氮与一氧化氮分别记录。

- 选定流：二氧化氮，排入空气
- 流属性/单位：Mass / kg
- 数量规则：采用实测浓度和排气流量，或把燃料和技术特定因子应用于采集活动数据。
- 数值来源模式：计算值（`calculated_value`）
- 适用范围：技术特定（`technology_specific`）
- 归一化基准：每 MJ 现场燃料投入
- 基准类型：燃料清单（`fuel_inventory`）
- 证据类型：根据采集记录计算（`calculated_from_collection`）
- 采集协议：`cp_air_emissions`
- 来源：`zhu-2025-curing-emissions`

###### 复烤燃料细颗粒物（`redrying_pm25_to_air`）

将细颗粒物排放与收集的袋式除尘粉尘分别记录。

- 选定流：粒径小于 2.5 微米的颗粒物，排入空气
- 流属性/单位：Mass / kg
- 数量规则：采用实测浓度和排气流量，或把燃料和控制装置特定因子应用于采集活动数据。
- 数值来源模式：计算值（`calculated_value`）
- 适用范围：技术特定（`technology_specific`）
- 归一化基准：每 MJ 现场燃料投入
- 基准类型：燃料清单（`fuel_inventory`）
- 证据类型：根据采集记录计算（`calculated_from_collection`）
- 采集协议：`cp_air_emissions`
- 来源：`zhu-2025-curing-emissions`

### 过程：包装和仓储放行（`packing_storage_release`）

#### 输入

##### 产品流

###### 进入包装的复烤叶片（`redried_lamina_to_packing`）

记录进入包装线的已放行复烤叶片。

- 选定流：复烤已调制烟叶片
- 流属性/单位：Mass / kg
- 数量规则：称量包装线投入，并校正生产线期初和期末库存。
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每 1,000 kg 净重参考产品
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_packing_records`
- 来源：`wise-reaves-1997`

###### 包装用电力（`packing_electricity`）

记录输送、压包、称量、封装、贴标及可归属仓储搬运的电力。

- 选定流：设施供电
- 流属性/单位：Energy / kWh
- 数量规则：使用包装线分表，或核对设备负荷和运行小时。
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每 1,000 kg 净重参考产品
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_packing_records`
- 来源：`wise-reaves-1997`

###### 瓦楞纸板箱（`packing_fibreboard_box`）

仅在瓦楞纸箱属于已声明包装时记录。

- 选定流：瓦楞纸板包装箱
- 流属性/单位：Mass / kg
- 数量规则：使用纸箱数量乘以核实的单件质量，并核对包装库存。
- 数值来源模式：计算值（`calculated_value`）
- 适用范围：产品特定（`product_specific`）
- 归一化基准：每 1,000 kg 净重参考产品
- 基准类型：参考流（`reference_flow`）
- 证据类型：根据采集记录计算（`calculated_from_collection`）
- 采集协议：`cp_packing_records`
- 来源：`wise-reaves-1997`

###### 聚乙烯包装内衬（`packing_polyethylene_liner`）

使用聚乙烯内衬时须单独记录。

- 选定流：聚乙烯包装内衬
- 流属性/单位：Mass / kg
- 数量规则：使用内衬数量乘以核实的单件质量，并核对包装库存。
- 数值来源模式：计算值（`calculated_value`）
- 适用范围：产品特定（`product_specific`）
- 归一化基准：每 1,000 kg 净重参考产品
- 基准类型：参考流（`reference_flow`）
- 证据类型：根据采集记录计算（`calculated_from_collection`）
- 采集协议：`cp_packing_records`
- 来源：`wise-reaves-1997`

###### 钢制包装带（`packing_steel_strap`）

使用钢带固定包装时须单独记录。

- 选定流：钢制包装带
- 流属性/单位：Mass / kg
- 数量规则：称量使用的钢带，或根据实测长度和供应商单位长度质量计算。
- 数值来源模式：计算值（`calculated_value`）
- 适用范围：产品特定（`product_specific`）
- 归一化基准：每 1,000 kg 净重参考产品
- 基准类型：参考流（`reference_flow`）
- 证据类型：根据采集记录计算（`calculated_from_collection`）
- 采集协议：`cp_packing_records`
- 来源：`wise-reaves-1997`

##### 废物流

##### 基本流

#### 输出

##### 产品流

###### 带梗/去梗的烤烟叶（`reference_product_output`）

这是唯一带 UUID 的清单行，必须使用已核验 Tiangong 参考身份。

- 选定流：带梗/去梗的烤烟叶 `57a438c1-b4d5-427a-8240-3aacf6c56025`
- 流属性/单位：Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- 数量规则：固定归一化输出为 1,000 kg 净重合格产品；包装毛重和包装质量须分别测量。
- 数值来源模式：固定值（`fixed_value`）
- 适用范围：产品特定（`product_specific`）
- 归一化基准：1,000 kg 净重带梗/去梗的烤烟叶
- 基准类型：参考流（`reference_flow`）
- 证据类型：身份引用（`identity_reference`）
- 来源：`unsd-cpc3-25010`; `usda-7cfr-leaf-tobacco`

##### 废物流

###### 废瓦楞纸板（`packing_waste_fibreboard`）

分别记录拒用纸箱和纸板边角料。

- 选定流：废瓦楞纸板包装
- 流属性/单位：Mass / kg
- 数量规则：称量纸板废物，并记录回收或处理去向。
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每 1,000 kg 净重参考产品
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_packing_records`
- 来源：

###### 废聚乙烯薄膜（`packing_waste_polyethylene`）

分别记录拒用内衬和聚乙烯边角料。

- 选定流：废聚乙烯包装薄膜
- 流属性/单位：Mass / kg
- 数量规则：称量聚乙烯废物，并记录回收或处理去向。
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每 1,000 kg 净重参考产品
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_packing_records`
- 来源：

###### 废钢制包装带（`packing_waste_steel_strap`）

分别记录拒用或裁剪的钢带。

- 选定流：废钢制包装带
- 流属性/单位：Mass / kg
- 数量规则：称量废钢带，并记录回收或处理去向。
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每 1,000 kg 净重参考产品
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_packing_records`
- 来源：

##### 基本流

## 7. 分配与共产品处理

| rule_id | 适用对象 | 规则 | source_ids |
| --- | --- | --- | --- |
| `allocation_avoid_first` | 每项多输出作业 | 应优先采用过程细分、生产线特定计量或系统扩展，以保留分别实测的叶片、烟梗、条片碎料、粉尘、拒收物和能量回收，再考虑分配。 | `eu-2021-2279-environmental-footprint` |
| `allocation_output_classification` | 烟梗和条片碎料 | 按实际去向划分每个物流：可售或内部使用且有上游替代主张的材料是共产品；丢弃物流是废物。不得仅为改善结果而改变分类。 | `usda-7cfr-leaf-tobacco`; `eu-2021-2279-environmental-footprint` |
| `allocation_residual_physical` | 无法避免的共享负荷 | 当过程细分和系统扩展均不适用时，按一致水分基准上可售输出的实测干质量分配共享回潮、分离和复烤负荷。 | `eu-2021-2279-environmental-footprint` |
| `allocation_economic_sensitivity` | 重要共产品 | 当烟梗或条片碎料与叶片价值差异显著时，使用同期净收入报告经济分配敏感性，并与主要物理分配结果同时披露。 | `eu-2021-2279-environmental-footprint` |
| `allocation_no_invisible_credit` | 废物和回收能量 | 不得从投入中直接扣除废物处理、输出材料、回收热量或回收能量；输出流及任何替代或抵扣必须作为明确建模选择表示。 | `eu-2021-2279-environmental-footprint` |

## 8. 前景数据采集、计算与质量规则

### 数据采集协议

| protocol_id | process_id | flow_role | record_type | raw_fields | collection_method | unit | frequency | temporal_coverage | site_scope | aggregation_rule | quality_evidence |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| `cp_leaf_receipts` | `leaf_receiving_conditioning` | 来料烟叶、拒收物和石块 | 地磅、批次、供应商、等级和检验记录 | lot_id; supplier; origin; crop_year; tobacco_type; cultivar; curing_method; curing_location; upstream_dataset; gross_mass; tare_mass; moisture; grade; reject_mass; reject_reason; stone_mass | 校准秤、书面代表性抽样和目视检验 | kg; 质量 % | 每个接收批次 | 完整代表生产期 | 代表设施接收的所有供应批次 | 汇总净质量和拒收质量；按质量加权水分；保留批次身份和库存变化 | 校准证书；称量票；供应商文件；等级证书；抽样计划；检验记录 |
| `cp_conditioning_records` | `leaf_receiving_conditioning` | 回潮烟叶、水、蒸汽、电力和清洗废水 | 生产线秤、水/蒸汽/电表、设备日志和清洗记录 | lot_id; inlet_mass; inlet_moisture; outlet_mass; outlet_moisture; water_input; steam_mass; steam_state; electricity; cleaning_water; wastewater; opening_stock; closing_stock | 校准转移秤和公用工程计量表；仅在无法直接测量时采用有记录的平衡 | kg; kWh; MJ; 质量 % | 每个批次、班次和公用工程计量期 | 完整代表生产期 | 服务于产品的全部接收和回潮设备 | 校正库存后的物料转移；按代表运行小时核对公用工程；将吸收的雾化水与清洗排放分开 | 校准记录；计量记录；批次日志；蒸汽计算；清洗日志；水平衡工作表 |
| `cp_separation_records` | `threshing_separation` | 叶片、烟梗、条片碎料、粉尘和电力 | 转移秤、生产线日志、除尘器记录、销售和废物记录 | lot_id; input_mass; input_moisture; lamina_mass; lamina_moisture; stem_mass; stem_moisture; strip_scrap_mass; dust_mass; destination; revenue; electricity; opening_stock; closing_stock | 校准秤、生产线分表、除尘容器称量和发运核对 | kg; kWh; 质量 %; 货币 | 每批次或班次 | 完整代表生产期 | 所有打叶、分离、筛分和除尘生产线 | 分配前核对校正库存后的投入和全部实物输出；按去向汇总输出 | 校准记录；生产线日志；实验室结果；除尘器记录；销售票；废物转移联单；库存核对 |
| `cp_redrying_records` | `redrying_cooling` | 叶片、公用工程、燃料、最终水分和蒸发水 | 进出口秤、水分试验、计量表、燃料发票、燃料分析和复烤机日志 | lot_id; inlet_mass; inlet_moisture; outlet_mass; outlet_moisture; electricity; steam_mass; steam_state; fuel_type; fuel_quantity; heating_value; heating_value_basis; operating_hours; opening_stock; closing_stock | 校准秤和计量表；代表性水分抽样；燃料库存核对 | kg; kWh; MJ; 质量 % | 每批次和公用工程/燃料报告期 | 完整代表生产期 | 每台复烤和冷却/平衡设备 | 分别计算每种燃料能量；从水分校正平衡计算蒸发水；不得平均燃料路线 | 校准记录；水分方法；计量记录；发票；燃料分析；运行日志；库存和质量平衡工作表 |
| `cp_air_emissions` | `threshing_separation`; `redrying_cooling` | 物质特定直接空气排放 | 烟道或作业场所监测、排气流量、燃料、许可和因子记录 | emission_point; substance_id; concentration; exhaust_flow; temperature; pressure; duration; fuel_type; fuel_quantity; factor; factor_source; control_device | 优先直接测量；否则把适用于燃料、设备和控制装置的因子应用于采集活动数据 | kg; mg/m3; m3/s; MJ | 每次监测和每个报告期 | 完整代表运行期 | 每个纳入的直接排放点 | 按物质和排放点计算质量；不得合并 NO 与 NO2，也不得合并排放颗粒物和收集粉尘 | 校准和实验室报告；监测计划；许可申报；因子来源；计算工作表；控制装置日志 |
| `cp_packing_records` | `packing_storage_release` | 净产品、包装组件、包装废物和电力 | 包装批次、秤、物料清单、采购、库存和废物记录 | batch_id; product_input; net_product_output; gross_packed_mass; box_count; box_mass; liner_count; liner_mass; strap_length; strap_mass; packaging_waste_mass; electricity; opening_stock; closing_stock | 校准产品秤、单件质量核验和库存核对 | kg; 件数; m; kWh | 每个包装批次 | 完整代表生产期 | 参考产品使用的每条生产线和每种包装 | 分别核对净产品和包装；用已核实单件因子换算件数或长度 | 秤校准；包装规格；供应商记录；发票；批次日志；废物票；库存核对 |

### 计算规则

| rule_id | Applies to | Formula or rule | Inputs | Output | source_ids |
| --- | --- | --- | --- | --- | --- |
| `calc_reference_normalization` | 每项前景交换 | 归一化数量 = 校正库存后的交换数量 / 净重合格参考产品质量 × 1,000 kg | 交换数量；期初库存；期末库存；净重参考产品质量 | 每 1,000 kg 参考产品的数量 | `eu-2021-2279-environmental-footprint` |
| `calc_dry_mass` | 水分基准比较 | 干质量 = 湿质量 ×（1 - 水分质量分数）；保留原湿质量和实测水分 | 湿质量；水分质量分数 | 用于平衡或物理分配的干质量 | `fao-rwedp-32`; `usda-7cfr-leaf-tobacco` |
| `calc_process_mass_balance` | 每个过程和设施总计 | 平衡差 = 投入 + 期初库存 - 输出 - 期末库存；明确报告蒸发水和每项实测排放并调查残差 | 水分一致的投入；输出；库存变化；吸收水；蒸发水 | 平衡差和有记录的差值比例 | `eu-2021-2279-environmental-footprint` |
| `calc_fuel_energy` | 每种现场燃料 | 燃料能量 = 实测燃料数量 × 一致基准上的已声明热值 | 燃料数量；热值；水分或灰分基准；高/低位热值基准 | 每种燃料的 MJ | `zhu-2025-curing-emissions` |
| `calc_direct_emission` | 每种排放物质 | 排放质量 = 实测浓度 × 标准化排气流量 × 运行时间，或采集活动量 × 适用且有记录的因子 | 浓度；排气流量；温度；压力；时间；或活动量和因子 | 一种物质的 kg | `zhu-2025-curing-emissions` |
| `calc_allocation_fraction` | 剩余分配 | 输出 i 的分配比例 = 输出 i 的选定驱动量 / 同期全部共产品驱动量之和 | 按输出的干质量或净收入；共享负荷 | 按输出的分配负荷和分配比例 | `eu-2021-2279-environmental-footprint` |

### 数据质量要求

| requirement_id | Applies to | Requirement | Evidence |
| --- | --- | --- | --- |
| `dq_reference_identity` | 参考产品 | 使用 Tiangong 流 `57a438c1-b4d5-427a-8240-3aacf6c56025`、Mass `93a60a56-a3c8-11da-a746-0800200b9a66`、Units of mass `93a60a57-a4c8-11da-a746-0800200c9a66` 和 kg，不写数据集版本。 | 数据集参考流记录和 UUID 校验 |
| `dq_tiangong_route_conflict` | 参考身份元数据 | 披露 `treatmentStandardsRoutes = Fresh, unprocessed produce / 鲜品，未加工` 与已调制产品标题和 CPC 25010 冲突；不得把该值用作方法证据，并在 Tiangong 复读和审查关闭问题之前维持未决状态。 | Tiangong state-100 直读记录；manifest 未决身份条目；审查决定 |
| `dq_product_qualifiers` | 每个参考批次 | 保留烟草类型、产地、作物年度、调制路线和地点、等级、水分、残余含梗率、适用时的烟片尺寸及包装的可追溯性。 | 供应商记录；等级证书；实验室结果；批次谱系；包装记录 |
| `dq_temporal_coverage` | 前景数据 | 覆盖一个代表性运行年度或完整已声明生产季，并披露停机、作物季缺口、产品变化和外推。 | 有日期边界的生产、计量、燃料、库存、实验室和发运记录；`eu-2021-2279-environmental-footprint` |
| `dq_technology_geography` | 设施代表性 | 描述设施地理位置、生产线能力、回潮方式、打叶和分离配置、复烤机、热源、除尘、水分控制及包装配置。 | 设施画像；过程流程图；设备清单；控制装置记录 |
| `dq_completeness` | 过程清单 | 核对每个过程，并披露缺失投入、未计量共享公用工程、遗漏排放、未知去向和无法解释的平衡差，不得静默赋零。 | 签署的质量、能量、水和排放核对；`eu-2021-2279-environmental-footprint` |
| `dq_zero_ranges` | 定量指导 | 不得从单一设施、单次调制试验或不可比边界推断范围。本 PCR 有 0 个范围；在两个独立且边界可比的原始来源支持经审查区间之前，所有值均须使用采集前景证据。 | 范围审计；来源适用性审查；前景记录 |
| `dq_source_traceability` | 外部证据和因子 | 保留来源标题、稳定 URL 或 DOI、网页来源检索日期、因子版本、适用性和计算工作表。 | 来源登记册和计算档案；`eu-2021-2279-environmental-footprint` |

## 9. 校验规则

| rule_id | 适用对象 | 规则 | source_ids |
| --- | --- | --- | --- |
| `val_reference_identity` | 参考流 | 若未经批准的 PCR 修订，产品 UUID、Mass UUID、单位组 UUID、参考单位、参考数量、英文显示名或中文显示名与已核验参考对象不一致，则符合性失败。 | `unsd-cpc3-25010` |
| `val_tiangong_route_conflict` | 发布就绪性 | 当冲突的 `Fresh, unprocessed produce` / `鲜品，未加工` 路线元数据仍未解决或未获得正式审查接受时，发布就绪性失败；不得把该值当作鲜品边界依据。 | `unsd-cpc3-25010`; `usda-7cfr-leaf-tobacco` |
| `val_required_qualifiers` | 数据集元数据 | 任一必需限定信息缺失，或产品、实验室和过程记录在烟草类型、调制路线、水分、残余含梗率、烟片规格或包装方面不一致时，符合性失败。 | `usda-7cfr-leaf-tobacco` |
| `val_process_coverage` | 过程清单 | 必须纳入全部四个过程，并对每个条件性公用工程、燃料、废水、包装和排放卡作出适用性判断；启用卡必须有数量、基准、协议及去向或环境介质。 | `wise-reaves-1997`; `usepa-2006-tobacco-processing` |
| `val_atomic_flows` | 清单交换 | 某一行合并燃料、公用工程、包装材料、废物或排放物质时符合性失败；每张卡必须代表一个交换，未解决 UUID 必须留空。 | `eu-2021-2279-environmental-footprint` |
| `val_moisture_mass_balance` | 每个过程和设施总计 | 在一致水分基准上计算并报告物料平衡；针对有记录的场址容差调查差值，不得通过改变产品质量或合并烟梗、碎料、粉尘或蒸发来强制闭合。 | `eu-2021-2279-environmental-footprint` |
| `val_allocation` | 多输出过程 | 核验去向分类、避免分配的理由、分配驱动量和期间、在报告舍入精度内合计为 1 的比例，以及共产品价值差异显著时的经济敏感性。 | `eu-2021-2279-environmental-footprint` |
| `val_energy_emissions` | 公用工程、燃料和直接排放 | 核对计量表、发票、库存、热值、运行期、控制装置和物质特定计算；不得合并 NO 与 NO2，也不得合并化石源和生物源二氧化碳。 | `zhu-2025-curing-emissions`; `eu-2021-2279-environmental-footprint` |
| `val_no_inferred_ranges` | 定量元数据 | 核验结构化投影包含 0 个数量范围；拒绝下限等于上限的案例值，或没有两个独立且边界可比原始来源的推断范围。 | `eu-2021-2279-environmental-footprint` |
| `val_source_resolution` | 证据登记 | 核验每个引用的来源 id 都能在数据源中解析，并且每个外部因子或规则都保留适用性说明和计算记录。 | `eu-2021-2279-environmental-footprint` |

## 10. 发布数据集画像

| 字段 | 值 |
| --- | --- |
| dataset_role | 已声明打叶复烤设施门口带梗/去梗的烤烟叶前景生产数据集。 |
| downstream_use | secondary_dataset; background_dataset |
| allowed_use | 当产地、调制路线、技术、产品规格、边界、分配和数据质量相容时，用于未制成品带梗/去梗的烤烟叶产品和过程 LCA。 |
| excluded_use | 青烟叶或鲜烟叶；以未去梗形态销售的烟叶；单独烟梗；没有关联上游数据的烟草种植或调制；制成品、再造、提取、加香、切丝、可供消费者直接使用或吸用的产品；没有方法相容审查的公开比较声明。 |
| required_metadata | PCR id；Tiangong 参考流 UUID；设施地理位置；生产期；烟草类型；产地；作物年度；调制方法和地点；来料等级和水分；工艺配置；热源；最终水分；残余含梗率；采用时的烟片尺寸规格；包装；边界；分配；数据集版本；Tiangong 路线冲突状态。 |
| required_quality_disclosure | 时间、地理和技术代表性；称量和水分试验方法；校准；质量、能量、水和排放核对；上游调制覆盖；缺失的流 UUID；共享公用工程分配；共产品处理；范围缺失；来源和因子版本；不确定性；Tiangong 路线元数据冲突及审查状态。 |
| update_trigger | 产品范围、CPC 或 Tiangong 身份、处理路线元数据、烟草或调制路线、设施地理位置、回潮、打叶/分离、复烤热源、除尘、包装、分配、测量系统或来源证据发生实质变化。 |

## 11. 数据源

| Source id | Type | Reference | Used for |
| --- | --- | --- | --- |
| `unsd-cpc3-25010` | 官方指南（`official_guidance`） | 联合国统计司，CPC 3.0 版解释性说明，子类 25010，2025 年 6 月 30 日更新，https://unstats.un.org/unsd/classifications/Econ/Download/In%20Text/CPC_Ver_3.0_Exp_Notes_30Jun2025.pdf，检索于 2026-08-20 | 精确 CPC 身份及与制成品烟草类别的区分。 |
| `usda-7cfr-leaf-tobacco` | 标准（`standard`） | 美国农业部，7 CFR Part 30《烟草库存与标准》，30.2—30.13 节，https://www.govinfo.gov/content/pkg/CFR-2022-title7-vol2/pdf/CFR-2022-title7-vol2-subtitleB-chapI-subchapA.pdf，检索于 2026-08-20 | 叶烟、去梗形态、碎料、调制及烤制、火制和晾晒调制的定义；产品状态和限定信息规则。 |
| `wise-reaves-1997` | 文献（`literature`） | William B. Wise 与 Dixie Watts Reaves，Tobacco's Important Role in the Economy of Southside Virginia，Virginia Tech Rural Economic Analysis Program Report R030，1997，DOI 10.22004/ag.econ.14847，https://ageconsearch.umn.edu/record/14847，检索于 2026-08-20 | 回潮、检验、打叶、风分、筛分、复烤、质量抽样和包装的原始过程描述。 |
| `usepa-2006-tobacco-processing` | 官方指南（`official_guidance`） | 美国环境保护署，Final Engineering Report: Tobacco Products Processing Detailed Study，2006，EPA-HQ-OW-2004-0032，https://nepis.epa.gov/Exe/ZyPURL.cgi?Dockey=P100N4Y7.TXT，检索于 2026-08-20 | 打叶复烤行业边界、回潮水吸收、有限过程废水、袋式除尘器物料和空气控制披露及公用工程/过程完整性。 |
| `fao-rwedp-32` | 官方指南（`official_guidance`） | 联合国粮食及农业组织，Proceedings of the Regional Expert Consultation on Selection Criteria and Priority Rating for Assistance to Traditional Biomass Energy Using Industries，RWEDP Report No. 32，1997 年 7 月，烟叶调制章节，https://www.fao.org/4/ad594e/ad594e00.pdf，检索于 2026-08-20 | 上游调制路线区分、水分去除背景、调制阶段声明和燃料数据需求；不把案例值用作 PCR 范围。 |
| `zhu-2025-curing-emissions` | 文献（`literature`） | Yinlong Zhu 等，Evaluating main gas emission and energy consumption economy during tobacco leaf curing life cycle based on clean energy，Scientific Reports 15，13835（2025），https://doi.org/10.1038/s41598-025-98956-3，检索于 2026-08-20 | 燃料、烟气浓度、流量、时间以及物质特定 CO2、SO2、NO 和 NO2 计算的全文测量设计；不将试验值泛化为 PCR 范围。 |
| `eu-2021-2279-environmental-footprint` | 官方指南（`official_guidance`） | 欧盟委员会关于环境足迹方法的建议（EU）2021/2279，CELEX 32021H2279，https://eur-lex.europa.eu/legal-content/EN/TXT/?uri=CELEX%3A32021H2279，检索于 2026-08-20 | 公司特定数据、完整性、分配层级与披露、数据质量、稳健性及下游数据集使用。 |
