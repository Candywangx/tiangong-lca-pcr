---
pcr_id: pcr.food-products-beverages-and-tobacco-textiles-apparel-and-leather-products.meat-fish-fruits-vegetables-oils-and-fats.sheep-fat-unrendered
language: zh-CN
status: candidate
sync_with: pcr.en-US.md
---

# 绵羊脂肪，未熬制

## 1. 范围与适用性

本 PCR 涵盖绵羊屠宰和/或分割后回收、未经熬制或精炼即交付的实际脂肪组织或脂肪原料。所代表物料可为未冷却、冷却或冷冻状态，但具体前景数据包必须识别解剖组织来源、屠宰或分割路线、食用适用性或其他已声明去向、物理状态、温度条件、包装形式及发运交接点。除非实际去除并单独记录，固有水分、结缔组织和附着瘦肉均计入交付产品的实测质量。

默认前景在所声明的未熬制绵羊脂肪批次装车或以其他方式于发运交接点转移给下一运营方时结束。若联合屠宰/分割回收发生在所代表设施内，则纳入该环节；同时纳入脂肪分离与修整、条件性清洗、冷却或冷冻、储存、包装及场内搬运。若屠宰或分割不在前景内，经核实的上游绵羊、胴体或分割肉数据集必须承载这些负荷及相关共产品分配。

默认排除熬制、脂肪熔化、提取、精炼、分提、氢化、酯交换、配方加工，以及转化为牛羊脂或其他已熬制脂肪。CPC 21521-21529 的已熬制脂肪不得与本类别互换。引用 CXS 211-1999 仅用于证明涉及绵羊的具名食用牛羊脂通过熬制获得；不得将其中任何组成或质量数值迁移至未熬制绵羊脂肪。

本 PCR 不规定绵羊脂肪特定的默认产率、能耗强度、用水量、包装比例、冷藏时长、损失因子或分配份额，必须使用前景记录。唯一一个暂定推理估算质量投入范围仅用作宽泛 QA 筛查，不得作为默认产率。

## 2. 产品类别识别

| 字段 | 值 |
| --- | --- |
| canonical_pcr_id | pcr.food-products-beverages-and-tobacco-textiles-apparel-and-leather-products.meat-fish-fruits-vegetables-oils-and-fats.sheep-fat-unrendered |
| classification_refs | CPC 3.0：21514，Sheep fat, unrendered（精确分类引用） |
| covered_products | 屠宰和/或分割后分离、未经熬制即发运的绵羊实际脂肪组织或脂肪原料；在明确声明时包括未冷却、冷却或冷冻状态 |
| excluded_products | 已熬制或熔化的绵羊脂肪；CPC 21521-21529 下的牛羊脂及其他已熬制脂肪；精炼、分提、氢化、酯交换、配方加工或提取脂肪；牛、水牛、山羊、猪、家禽、鱼或其他物种脂肪；未进行绵羊单独质量隔离的混合物种脂肪；骨、骨髓或蹄足来源油脂；皮张与羊毛 |
| representative_product | 经必要修整与状态调节后、物理隔离的一批未熬制绵羊脂肪组织 |
| production_route | 绵羊屠宰/修整或分割期间回收；分离与修整；条件性清洗；条件性冷却/冷冻与储存；条件性包装；发运交接；不熬制或精炼 |
| market_state | 散装或包装的实际组织/原脂；按声明处于未冷却、冷却或冷冻状态；明确声明食用适用性或其他去向 |

## 3. 参考流

| 字段 | 值 |
| --- | --- |
| What | 在声明的发运交接点提供屠宰和/或分割后回收、未经熬制或精炼的实际绵羊脂肪组织或脂肪原料 |
| How much | 交付状态下所代表未熬制绵羊脂肪净质量 1 kg，不含可重复使用运输器具和单独声明的包装皮重 |
| How well | 保持绵羊单一物种身份和实际组织状态；声明屠宰/分割路线、解剖组织来源、去向、未熬制状态、温度状态、包装和交接；排除已熬制脂肪及其他物种 |
| How long or cycle | 交接点的一个发运批次；声明截至交接的储存时长和冷链历史；不隐含使用期限 |
| reference_flow_link | rf_sheep_fat_unrendered |

| 字段 | 值 |
| --- | --- |
| 参考数量 | 1 kg |
| 参考产品流 | Sheep fat, unrendered `508545ee-d8e4-4705-a676-7ae2062635ae` |
| 参考流属性 | Mass `93a60a56-a3c8-11da-a746-0800200b9a66` |
| 参考单位组 | Units of mass `93a60a57-a4c8-11da-a746-0800200c9a66` |
| 参考单位 | kg |
| 必需限定信息 | 绵羊单一物种身份；实际解剖组织来源或来源分割部位；屠宰场回收或分割路线；食用适用性或其他去向；未熬制/未精炼确认；已声明的物理温度状态（未冷却与冷却与冷冻三者择一）；受控时的产品温度规范及实测交接温度；固有组织/水分计量约定；包装形式和皮重处理；设施与地理位置；生产期间与批次；发运交接点；交接前后运输责任归属 |

构建前景数据包时，`必需限定信息` 中列出的信息必须在数据集元数据、过程说明、参考流备注、产品说明或等效数据包字段中明确声明。缺失必需限定信息的数据包视为参考流定义不完整。

## 4. 计量与单位规则

| rule_id | 适用对象 | 必需流属性 | 必需单位 | 规则 |
| --- | --- | --- | --- | --- |
| `reference_net_mass` | 发运交接点的参考产品 | Mass `93a60a56-a3c8-11da-a746-0800200b9a66` | kg | 采用经校准秤具或经核实的毛重减皮重记录确定产品净质量。纳入交付状态下的实际组织、固有水分、结缔组织和附着瘦肉；排除单独声明的包装皮重和可重复使用运输器具。 |
| `lot_state_mass_alignment` | 投入、中间物、共产品、废物和参考产品质量记录 | Mass `93a60a56-a3c8-11da-a746-0800200b9a66` | kg | 使用同一代表批次或有文件记录的分配期间内的质量。记录每个质量是在修整、清洗、冷却/冷冻、排液和包装之前还是之后测得，避免隐匿质量变化。 |
| `temperature_state_declaration` | 未冷却、冷却或冷冻产品及储存记录 | 温度和时间，并按质量归一化至 kg | 场址记录的温度单位及 h 或 day | 记录书面温度规范、温度受控时的实测交接温度、状态调节起止时间、储存时长和温度偏离。本 PCR 不规定通用温度阈值。 |
| `packaging_tare` | 已包装参考产品 | Mass `93a60a56-a3c8-11da-a746-0800200b9a66` | kg | 单独测量或核实包装皮重，不得将其计入 1 kg 参考产品。将实际消耗的包装分配至所代表批次。 |

## 5. 系统边界

### 边界概化

| 字段 | 值 |
| --- | --- |
| declared_starting_condition | 绵羊进入所代表的屠宰/修整联合过程，或有文件记录的绵羊胴体/分割肉进入独立分割设施；必须声明所选路线和接收状态 |
| starting_condition_role | 作为联合屠宰/分割系统的上游产品投入，该系统回收未熬制绵羊脂肪 |
| product_classification_scope | 对应 CPC 3.0 代码 21514 的绵羊单一物种未熬制脂肪组织或原脂；不包括已熬制脂肪及其他动物物种 |
| recursive_input_rule | 购入后进行汇集、再修整、状态调节或重新包装的同类别未熬制绵羊脂肪仍为具有自身上游数据集的技术圈产品投入；不得赋予零负荷或静默并入前景回收 |
| upstream_dataset_requirement | 屠宰路线要求上游绵羊生产与活体运输数据集覆盖至声明的屠宰投入；分割路线要求上游胴体/分割肉数据集包含绵羊生产、运输、屠宰和先前的联合产品分配。避免上游数据集与本前景之间出现缺口或重复计算 |
| disclosure | 声明路线、设施、地理位置、期间、批次、解剖组织来源、食用/其他去向、实际组织约定、状态调节前后状态、冷藏时长、包装、入厂与出厂交接，以及下游运输是在参考流交接之前还是之后开始 |

### 规范性边界规则

| rule_id | 适用对象 | 规则 | source_ids |
| --- | --- | --- | --- |
| `boundary_sheep_unrendered_only` | 产品身份及每个代表批次 | 仅纳入未经熬制或精炼、已隔离的实际绵羊脂肪组织/原脂。排除 CPC 21521-21529 的已熬制牛羊脂或其他产品，并单独建模。 | unsd-cpc-3-0-21514; codex-cxs-211-1999 |
| `boundary_slaughter_cutting_trace` | 屠宰、修整、分割、分离和修整 | 识别脂肪成为单独计量产出的具体操作，并在修整和包装全过程保留宰后去向判定及物种可追溯性。 | codex-cxc-58-2005 |
| `boundary_cold_chain` | 冷却、冷冻、冷藏和温控搬运 | 若这些操作发生在交接前，纳入实际状态调节能耗、制冷剂补充量或实测损失、储存时长和产品损失；保留温度记录与偏离，不导入通用阈值。 | codex-cxc-58-2005; eu-2019-2031-fdm-bat |
| `boundary_packaging_and_handover` | 包装、装载和运输接口 | 纳入声明交接前消耗的包装及场内搬运。默认排除交接后的运输；若声称交付至客户门口，则增加路线特定运输并相应移动参考交接点。 | codex-cxc-58-2005; eu-2021-2279-pef |
| `boundary_recursive_input` | 作为投入的购入未熬制绵羊脂肪 | 将购入物料连接至经核实的上游数据集，本前景仅报告增量的汇集、修整、状态调节、包装和损失。 | eu-2021-2279-pef |
| `boundary_resource_emission_inventory` | FDM BAT 范围相关的所代表食品加工操作 | 为保证清单完整性，采集过程级用水、能源、原料、残余物、废水和直接排放记录。仅在相关时作为数据采集完整性规则应用；不得将法律产能阈值、排放限值或绩效水平导入本 PCR。 | eu-2019-2031-fdm-bat |

## 6. 过程清单结构

### 过程图

| process_id | 过程名称 | 纳入状态 | 纳入条件 | 建模角色 | 定量参考 |
| --- | --- | --- | --- | --- | --- |
| `joint_recovery` | 联合屠宰/修整或分割回收 | required | 代表绵羊脂肪组织首次成为单独识别产出的实际联合操作；若不在前景，则由必需的上游数据集代表 | 建立绵羊单一物种身份、联合产品点、脂肪总回收量和共产品/废物去向 | 同一批次或分配期间的实测绵羊脂肪总产出及所有联合产出 |
| `fat_trimming` | 分离、修整及条件性清洗 | required | 始终代表最终分离/修整；仅在实际发生时纳入清洗 | 在保留组织状态和损失记录的同时生产可销售未熬制绵羊脂肪 | 冷状态调节/包装前的未熬制绵羊脂肪净产出 |
| `cold_conditioning` | 冷却、冷冻与储存 | conditional | 交接前发生主动冷却、冷冻、控温储存或制冷剂使用时纳入 | 建立声明的市场温度状态并记录冷链资源和损失 | 状态调节后的未熬制绵羊脂肪产出及储存时长 |
| `packaging_dispatch` | 包装、场内搬运与发运交接 | required | 可在散装转移时为零包装，但始终记录皮重处理与交接 | 在声明的所有权和运输交接点生产参考流 | 交接点 1 kg 未熬制绵羊脂肪净质量 |
| `rendering_refining` | 熬制、熔化、提取或精炼 | excluded_by_default | 绝不属于本 PCR 默认前景 | 将物料转化为另一已熬制/精炼产品类别 | 不适用 |

### 过程：联合屠宰/修整或分割回收（`joint_recovery`）

#### 输入

##### 产品流

###### 路线特定的绵羊、胴体或分割肉投入（`route_sheep_input`）

记录实际路线特定投入，该投入承载上游绵羊生产、运输及任何更早的屠宰/分割负荷。不得替换为其他反刍动物或混合物种投入。

- 选定流：适合声明路线的绵羊、绵羊胴体或绵羊分割肉；Tiangong UUID 待路线特定身份复核
- 流属性/单位：Mass / kg
- 数量规则：同一批次或联合生产期间的实测接收质量
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：产生所代表绵羊脂肪总产出的实测联合屠宰/分割操作
- 基准类型：过程输出（`process_output`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_joint_mass_and_identity`
- 来源：`codex-cxc-58-2005`

###### 联合回收用水（`joint_process_water`）

仅当屠宰/分割回收位于所代表前景内时，记录该过程的计量或分配用水。

- 选定流：过程用水或饮用水，场址特定候选；Tiangong UUID 待复核
- 流属性/单位：Volume / m3，或采用有文件记录转换的 Mass / kg
- 数量规则：计量用量，或采用有文件记录的因果驱动将分表设施总量分配至本过程
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：实测联合生产期间，并通过分配规则归一化
- 基准类型：过程输出（`process_output`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_water_records`
- 来源：`eu-2019-2031-fdm-bat`

###### 联合回收用能（`joint_process_energy`）

记录范围内联合回收操作的计量电力和燃料；不得使用绵羊、牛或通用屠宰默认值。

- 选定流：场址特定电力和燃料产品；Tiangong UUID 待复核
- 流属性/单位：Energy / kWh 或 MJ，按能源载体分别记录
- 数量规则：计量用量，或采用有文件记录的因果驱动将分表设施总量分配至本过程
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：实测联合生产期间，并通过分配规则归一化
- 基准类型：过程输出（`process_output`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_energy_records`
- 来源：`eu-2019-2031-fdm-bat`

##### 废物流

##### 基本流

#### 输出

##### 产品流

###### 回收后待修整的绵羊脂肪组织（`gross_sheep_fat`）

记录绵羊单一物种脂肪组织在首次单独计量回收点的质量，即最终修整和状态调节之前的质量。

- 选定流：Sheep fat, unrendered `508545ee-d8e4-4705-a676-7ae2062635ae`
- 流属性/单位：Mass / kg
- 数量规则：所代表批次的实测毛回收质量
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：产品特定（`product_specific`）
- 归一化基准：实测联合生产期间
- 基准类型：过程输出（`process_output`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_joint_mass_and_identity`
- 来源：`unsd-cpc-3-0-21514`; `codex-cxc-58-2005`

###### 其他可食用或可利用联合产出（`joint_co_products`）

按身份和去向分别记录所有仍为产品或共产品的非脂肪联合产出，确保联合分配分母完整。

- 选定流：场址特定的绵羊肉、内脏、皮张或其他联合产品候选；Tiangong UUID 待复核
- 流属性/单位：Mass / kg
- 数量规则：同一分配期间内按产品身份实测的产出质量
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：实测联合生产期间
- 基准类型：过程输出（`process_output`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_joint_mass_and_identity`
- 来源：`eu-2021-2279-pef`

##### 废物流

###### 判废或以其他方式弃置的组织（`joint_rejected_tissue`）

仅在被判定为不安全、不适用或以其他方式弃置的组织跨越废物边界时，将其记录为废物。若出售或转移作生产性用途，则按实际去向记录为共产品而非废物。

- 选定流：绵羊组织废物，去向特定候选；Tiangong UUID 待复核
- 流属性/单位：Mass / kg
- 数量规则：按去向称量，或由容器计数换算的判废质量
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：实测联合生产期间
- 基准类型：过程输出（`process_output`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_joint_waste_and_disposition`
- 来源：`codex-cxc-58-2005`

###### 联合过程废水（`joint_wastewater`）

记录范围内联合回收产生的废水，在最具体的可行层级记录分配和实测特征。

- 选定流：废水，场址特定候选；Tiangong UUID 待复核
- 流属性/单位：Volume / m3
- 数量规则：所代表期间的计量排放量或有文件记录的水量平衡
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：实测联合生产期间，并通过分配规则归一化
- 基准类型：过程输出（`process_output`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_water_records`
- 来源：`eu-2019-2031-fdm-bat`

##### 基本流

### 过程：分离、修整及条件性清洗（`fat_trimming`）

#### 输入

##### 产品流

###### 未经最终修整的绵羊脂肪组织投入（`gross_fat_input`）

记录进入最终修整的实际绵羊脂肪组织总投入。以下 QA 范围为作者暂定推理估算，不是默认产率，在缺少实测数据时也不得用作替代值。

- 选定流：Sheep fat, unrendered `508545ee-d8e4-4705-a676-7ae2062635ae`
- 流属性/单位：Mass / kg
- 数量规则：实测绵羊脂肪组织总投入
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：产品特定（`product_specific`）
- 归一化基准：每 1 kg 修整后的未熬制绵羊脂肪净产出
- 基准类型：过程输出（`process_output`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_trimming_mass_balance`
- 来源：`unsd-cpc-3-0-21514`
- 数量范围：暂定脂肪总投入质量平衡筛查区间
  - 范围角色：QA 校验（`qa_guardrail`）
  - 下限：1.00
  - 上限：2.00
  - 单位：kg
  - 基准：每 1 kg 修整后的未熬制绵羊脂肪净产出；下限用于落实质量守恒，特意设置的宽泛上限仅用于标记重大修整/降级以便复核，并不主张典型绵羊脂肪产率
  - 基准类型：过程输出（`process_output`）
  - 证据类型：推理估算（`reasoned_estimate`）

###### 实际使用时的清洗水（`trimming_wash_water`）

仅记录实际跨越修整过程边界的用水；干式修整的用水量为零，并须如此声明。

- 选定流：过程用水或饮用水，场址特定候选；Tiangong UUID 待复核
- 流属性/单位：Volume / m3，或采用有文件记录转换的 Mass / kg
- 数量规则：所代表批次的计量或批记录用水量
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每 kg 修整后的未熬制绵羊脂肪净产出
- 基准类型：过程输出（`process_output`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_trimming_water_records`
- 来源：`codex-cxc-58-2005`; `eu-2019-2031-fdm-bat`

##### 废物流

##### 基本流

#### 输出

##### 产品流

###### 修整后的未熬制绵羊脂肪净产出（`trimmed_unrendered_fat`）

记录冷状态调节和包装前的实际组织产出，并保留解剖来源和食用/其他去向。

- 选定流：Sheep fat, unrendered `508545ee-d8e4-4705-a676-7ae2062635ae`
- 流属性/单位：Mass / kg
- 数量规则：修整及任何已声明排液后的实测净产出
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：产品特定（`product_specific`）
- 归一化基准：所代表修整批次
- 基准类型：过程输出（`process_output`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_trimming_mass_balance`
- 来源：`unsd-cpc-3-0-21514`; `codex-cxc-58-2005`

##### 废物流

###### 修整物、降级组织及清洗损失（`trimming_residuals`）

按质量和实际去向分别记录每种残余物。生产性转移属于共产品而非废物；不得将排水损失隐匿于产率中。

- 选定流：组织残余物或废水，去向特定候选；Tiangong UUID 待复核
- 流属性/单位：Mass / kg 或 Volume / m3，按流分别记录
- 数量规则：所代表批次的实测残余物质量和废水体积
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每 kg 修整后的未熬制绵羊脂肪净产出
- 基准类型：过程输出（`process_output`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_trimming_mass_balance`
- 来源：`codex-cxc-58-2005`; `eu-2019-2031-fdm-bat`

##### 基本流

### 过程：冷却、冷冻与储存（`cold_conditioning`）

#### 输入

##### 产品流

###### 进入冷状态调节的未熬制绵羊脂肪（`cold_stage_fat_input`）

记录实际组织在冷阶段入口的实测质量和温度状态。

- 选定流：Sheep fat, unrendered `508545ee-d8e4-4705-a676-7ae2062635ae`
- 流属性/单位：Mass / kg
- 数量规则：进入状态调节/储存的实测批次质量
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：产品特定（`product_specific`）
- 归一化基准：所代表冷状态调节批次
- 基准类型：过程输出（`process_output`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_cold_chain_records`
- 来源：`codex-cxc-58-2005`

###### 冷阶段电力和燃料（`cold_stage_energy`）

记录冷却、冷冻、控温储存、除霜及范围内冷库辅助设备的实际用能。不得借用另一动物物种或设施的能耗强度。

- 选定流：场址特定电力和燃料产品；Tiangong UUID 待复核
- 流属性/单位：Energy / kWh 或 MJ，按能源载体分别记录
- 数量规则：分表用量，或根据计量设备能耗、运行时间、负载和有文件记录的分配驱动计算的份额
- 数值来源模式：计算值（`calculated_value`）
- 适用范围：技术特定（`technology_specific`）
- 归一化基准：每 kg 状态调节后的未熬制绵羊脂肪产出及声明的储存时长
- 基准类型：储存时长（`storage_duration`）
- 证据类型：由采集数据计算（`calculated_from_collection`）
- 采集协议：`cp_cold_energy_records`
- 来源：`codex-cxc-58-2005`; `eu-2019-2031-fdm-bat`

###### 制冷剂补充量（`cold_stage_refrigerant_makeup`）

当存在可辩护的设施分配方法时，记录范围内设备应归属的制冷剂补充量；否则披露数据缺口。

- 选定流：按实际化学身份记录的制冷剂；Tiangong UUID 待复核
- 流属性/单位：Mass / kg
- 数量规则：按设备、运行期间和有文件记录的因果驱动分配维护记录中的补充质量
- 数值来源模式：计算值（`calculated_value`）
- 适用范围：技术特定（`technology_specific`）
- 归一化基准：所代表期间每 kg 状态调节后的未熬制绵羊脂肪产出
- 基准类型：过程输出（`process_output`）
- 证据类型：由采集数据计算（`calculated_from_collection`）
- 采集协议：`cp_refrigerant_records`

##### 废物流

##### 基本流

#### 输出

##### 产品流

###### 状态调节后的未熬制绵羊脂肪（`conditioned_unrendered_fat`）

记录净质量、声明的冷却/冷冻状态、交接规范、温度受控时的实际实测温度及储存时长。

- 选定流：Sheep fat, unrendered `508545ee-d8e4-4705-a676-7ae2062635ae`
- 流属性/单位：Mass / kg
- 数量规则：状态调节和储存后的实测批次净质量
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：产品特定（`product_specific`）
- 归一化基准：所代表冷状态调节批次
- 基准类型：过程输出（`process_output`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_cold_chain_records`
- 来源：`codex-cxc-58-2005`

##### 废物流

###### 冷阶段产品损失（`cold_stage_product_loss`）

按实际去向记录滴液、判废组织、受损产品及其他实测损失。

- 选定流：绵羊脂肪损失，去向特定候选；Tiangong UUID 待复核
- 流属性/单位：Mass / kg
- 数量规则：由称量损失记录支持的差值；不得使用假定收缩因子
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每 kg 状态调节后的未熬制绵羊脂肪产出
- 基准类型：过程输出（`process_output`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_cold_chain_records`

##### 基本流

###### 排放至空气的制冷剂（`cold_stage_refrigerant_loss`）

当维护和充注记录支持质量平衡时，按实际制冷剂身份记录计算排放；否则将检查报告为不确定，而不是假定为零。

- 选定流：按实际化学身份记录的空气制冷剂排放；Tiangong UUID 待复核
- 流属性/单位：Mass / kg
- 数量规则：依据 `calc_refrigerant_loss` 的制冷剂质量平衡
- 数值来源模式：计算值（`calculated_value`）
- 适用范围：技术特定（`technology_specific`）
- 归一化基准：所代表期间每 kg 状态调节后的未熬制绵羊脂肪产出
- 基准类型：过程输出（`process_output`）
- 证据类型：由采集数据计算（`calculated_from_collection`）
- 采集协议：`cp_refrigerant_records`

### 过程：包装、场内搬运与发运交接（`packaging_dispatch`）

#### 输入

##### 产品流

###### 进入发运准备的未熬制绵羊脂肪（`dispatch_fat_input`）

记录进入包装或散装发运准备时的净质量和状态。

- 选定流：Sheep fat, unrendered `508545ee-d8e4-4705-a676-7ae2062635ae`
- 流属性/单位：Mass / kg
- 数量规则：包装/装载前的实测批次质量
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：产品特定（`product_specific`）
- 归一化基准：发运批次
- 基准类型：过程输出（`process_output`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_dispatch_records`

###### 消耗的包装材料（`dispatch_packaging`）

记录交接前实际消耗的初级、次级和非重复使用运输包装。散装转移时记录零包装，并单独识别可重复使用器具。

- 选定流：按实际材料和形式记录的包装材料；Tiangong UUID 待复核
- 流属性/单位：Mass / kg，或采用经核实单件质量换算的件数
- 数量规则：将采购/领用记录与所代表发运批次核对，并扣除可重复使用器具
- 数值来源模式：计算值（`calculated_value`）
- 适用范围：产品特定（`product_specific`）
- 归一化基准：交接点每 kg 参考产品净质量
- 基准类型：参考流（`reference_flow`）
- 证据类型：由采集数据计算（`calculated_from_collection`）
- 采集协议：`cp_packaging_records`
- 来源：`eu-2021-2279-pef`

###### 场内搬运用能（`dispatch_energy`）

记录交接前范围内包装、内部移动和装载的计量或基于设备记录的用能。

- 选定流：场址特定电力或燃料产品；Tiangong UUID 待复核
- 流属性/单位：Energy / kWh 或 MJ
- 数量规则：计量用量，或根据设备记录和运行时间计算
- 数值来源模式：计算值（`calculated_value`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：交接点每 kg 参考产品净质量
- 基准类型：参考流（`reference_flow`）
- 证据类型：由采集数据计算（`calculated_from_collection`）
- 采集协议：`cp_dispatch_records`
- 来源：`eu-2019-2031-fdm-bat`

##### 废物流

##### 基本流

#### 输出

##### 产品流

###### 交接点的参考未熬制绵羊脂肪（`reference_unrendered_sheep_fat`）

该流为所有范围内操作之后、下一运营方负责的下游运输之前的参考产品。

- 选定流：Sheep fat, unrendered `508545ee-d8e4-4705-a676-7ae2062635ae`
- 流属性/单位：Mass / kg
- 数量规则：声明交接点的 1 kg 产品净质量
- 数值来源模式：固定值（`fixed_value`）
- 适用范围：产品特定（`product_specific`）
- 归一化基准：PCR 参考流
- 基准类型：参考流（`reference_flow`）
- 证据类型：身份引用（`identity_reference`）
- 来源：`unsd-cpc-3-0-21514`

##### 废物流

###### 包装与发运损失（`dispatch_waste`）

按材料和去向分别记录判废产品、受损包装及其他发运阶段废物。

- 选定流：按实际材料记录的产品或包装废物；Tiangong UUID 待复核
- 流属性/单位：Mass / kg
- 数量规则：所代表发运批次的称量质量或经核实计数换算质量
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：交接点每 kg 参考产品净质量
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_dispatch_waste_and_disposition`

##### 基本流

## 7. 分配与共产品处理

| rule_id | 适用对象 | 规则 | source_ids |
| --- | --- | --- | --- |
| `allocation_subdivide_first` | 联合屠宰/修整、分割、公用工程、冷藏和包装 | 首先细分过程，将单独计量的材料、能源、包装、废物和排放流直接归属至造成这些流的过程与产品。记录仪表、设备边界和分配期间。 | eu-2021-2279-pef |
| `allocation_joint_hierarchy` | 剩余的多功能屠宰或分割负荷 | 细分后遵循 PEF 分配层级：可行时通过细分或其他有依据的建模避免分配；不可避免时采用有文件记录且相关的物理因果关系；不存在可辩护物理关系时，采用经济价值等其他有依据关系。本 PCR 不规定绵羊脂肪分配份额。 | eu-2021-2279-pef |
| `allocation_complete_denominator` | 联合产品分配分母 | 纳入同一批次或分配期间的每种可销售或其他生产性联合产出。经济分配时记录实测质量、产品身份、去向、价格及价格期间，并核对分配因子之和为一。 | eu-2021-2279-pef |
| `allocation_waste_and_credits` | 判废组织、废水、包装废物和生产性残余物 | 当持有者弃置或被要求弃置时，将其作为废物。不得仅因残余物可能有价值便给予替代产品抵扣；任何替代或回收抵扣均须有明确记录的下游功能，以及与研究目标一致的方法。 | eu-2021-2279-pef; codex-cxc-58-2005 |
| `allocation_no_cross_species_default` | 所有分配因子 | 不得将牛、水牛、山羊、其他反刍动物或混合物种操作的质量产率、价格比、物理关系或分配份额作为绵羊脂肪默认值。采用所代表绵羊路线记录，否则报告为未解决。 | unsd-cpc-3-0-21514 |

## 8. 前景数据采集、计算与质量规则

### 数据采集协议

| protocol_id | process_id | flow_role | record_type | raw_fields | collection_method | unit | frequency | temporal_coverage | site_scope | aggregation_rule | quality_evidence |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| `cp_joint_mass_and_identity` | `joint_recovery` | 路线投入、未经最终修整的绵羊脂肪和所有联合产品 | 秤单、生产/批次记录、物种与去向记录 | lot_id; species; route; input_identity; input_mass_kg; gross_fat_mass_kg; co_product_id; co_product_mass_kg; anatomical_origin; disposition; scale_id; timestamp | 经校准称量，并关联至批次和物种隔离记录 | kg | 每个批次或生产批 | 覆盖所有代表批次；披露分配期间 | 每个代表屠宰/分割场址 | 在一个一致分配期间内按产品和去向汇总；保留批次级关联 | 校准/核实记录；宰后去向；物种可追溯性；核对报告 |
| `cp_trimming_mass_balance` | `fat_trimming` | 脂肪总投入、净产出、修整物、降级物和排液 | 批记录和秤具记录 | lot_id; gross_input_kg; net_output_kg; trim_kg; downgraded_product_kg; waste_kg; drain_loss_kg; pre_post_state; scale_id | 修整及任何清洗/排液前后经校准称量 | kg | 每批 | 所有代表批次 | 每个修整场址 | 归一化前将投入与净产出及所有残余去向核对 | 秤具核实；签署的批次平衡；去向记录 |
| `cp_water_records` | `joint_recovery` | 联合回收过程用水和废水 | 仪表读数、账单、批记录和废水记录 | meter_id; start_reading; end_reading; unit; batch_or_period; operation; wastewater_volume; measurement_point; allocation_driver | 优先采用过程分表；否则采用有文件记录的水量平衡或因果分配 | m3 或 kg | 每批或至少每运行日，并与生产匹配 | 覆盖包括清洗在内的完整代表期间 | 每个代表联合回收设施；可行时达到过程级 | 扣除经核实的范围外用量，按过程产出或分配因子归一化 | 仪表校准；账单核对；水量平衡闭合；测量点记录 |
| `cp_trimming_water_records` | `fat_trimming` | 实际使用时的修整清洗水 | 仪表读数、批记录和废水记录 | meter_id; start_reading; end_reading; unit; lot_id; operation; wastewater_volume; measurement_point | 优先采用批次或过程分表；否则采用有文件记录的水量平衡 | m3 或 kg | 每个使用水的修整批次 | 所有代表湿式修整批次 | 每个代表修整场址 | 扣除经核实的范围外用量，按修整净产出归一化 | 仪表校准；批次记录；水量平衡闭合；测量点记录 |
| `cp_energy_records` | `joint_recovery` | 联合回收电力和燃料 | 仪表读数、账单、设备日志 | carrier; meter_id; start_reading; end_reading; unit; operating_time; equipment; process; allocation_driver | 过程分表，或与设施总量核对的有文件设备计算 | kWh 或 MJ | 可变负载按批/日；每月核对 | 完整代表联合回收期间 | 每个代表联合回收设施；可行时达到过程/设备级 | 按能源载体与过程汇总；采用直接测量或有文件因果驱动归一化 | 仪表校准；账单核对；设备规范和运行日志 |
| `cp_cold_chain_records` | `cold_conditioning` | 产品质量、温度状态、储存和损失 | 温度记录器、仓库、批次和秤具记录 | lot_id; entry_mass_kg; exit_mass_kg; entry_temperature; exit_temperature; temperature_unit; specification; start_time; end_time; excursion; loss_mass_kg; disposition | 经校准温度监测和称量，并关联库存移动 | kg；温度单位；h 或 day | 每批；适用时连续或按设施规定监测 | 整个状态调节和储存时段 | 每个范围内冷库/冻结设施及代表批次 | 时间加权储存时长；汇总批质量和损失；不采用通用收缩因子 | 记录器校准；报警/偏离日志；库存核对；书面规范 |
| `cp_cold_energy_records` | `cold_conditioning` | 冷阶段电力和燃料 | 仪表读数、账单、设备及运行时间日志 | carrier; meter_id; start_reading; end_reading; unit; equipment_id; operating_time; load_record; storage_zone; allocation_driver | 冷阶段分表，或与相关仪表核对的有文件设备计算 | kWh 或 MJ | 可变负载按批/日；每月核对 | 整个代表状态调节与储存时段 | 每个范围内冷库/冻结设施 | 按能源载体与设备汇总；按状态调节后产出质量归一化并披露储存时长 | 仪表校准；账单核对；设备规范；运行/负载日志 |
| `cp_refrigerant_records` | `cold_conditioning` | 制冷剂补充与排放 | 充注、采购、回收和维护记录 | equipment_id; refrigerant_identity; opening_charge_kg; added_kg; recovered_kg; closing_charge_kg; service_date; operating_period; allocation_driver | 设备级制冷剂质量平衡 | kg | 每次维护事件，并按年度或代表期间核对 | 完整代表运行期间 | 范围内制冷设备 | 按制冷剂身份计算损失，仅采用有文件因果驱动分配 | 经认证维护记录；采购/回收记录；质量平衡核对 |
| `cp_packaging_records` | `packaging_dispatch` | 包装消耗和皮重 | 采购/领用记录、物料清单、单件质量核查 | packaging_id; material; item_count; measured_item_mass_kg; purchased_mass_kg; returned_mass_kg; reusable_flag; lot_id | 将领用包装与批次核对；通过称量核实计数转质量因子 | kg 和 item | 每个包装批次；期间核对 | 完整代表期间 | 每个代表包装线/场址 | 非重复使用包装净消耗量除以参考产品净质量 | 供应商规范；称量核查；库存核对；可重复使用器具台账 |
| `cp_dispatch_records` | `packaging_dispatch` | 参考产品、场内搬运和交接 | 发运秤单、装载记录、设备日志、交付条款 | lot_id; gross_mass_kg; tare_mass_kg; net_mass_kg; product_state; handover_temperature; packaging; loading_energy; handover_location; handover_time; transport_owner | 经校准毛重/皮重称量及签署的转移记录 | kg；温度单位；kWh 或 MJ | 每个发运批次 | 所有代表发运 | 每个代表发运场址 | 汇总产品净质量及范围内搬运资源；归一化至 1 kg 净产品 | 秤具核实；转移文件；温度记录；设备日志 |
| `cp_joint_waste_and_disposition` | `joint_recovery` | 联合回收废物和生产性残余物去向 | 秤单、容器记录、联单、转移和收入记录 | lot_or_period; flow_identity; mass_kg; container_count; count_to_mass_factor; destination; waste_or_product_status; treatment; revenue; currency; price_period | 优先直接称量；否则采用经核实计数换算 | kg；相关时为 currency/kg | 每次清运或转移 | 完整代表联合回收期间 | 每个代表联合回收场址及残余物流 | 按身份、状态和去向分别汇总；不得与产品质量相抵 | 秤具/核查记录；转移联单；发票；法律/运营去向记录 |
| `cp_dispatch_waste_and_disposition` | `packaging_dispatch` | 发运废物和生产性残余物去向 | 秤单、容器记录、联单、转移和收入记录 | lot_or_period; flow_identity; mass_kg; container_count; count_to_mass_factor; destination; waste_or_product_status; treatment; revenue; currency; price_period | 优先直接称量；否则采用经核实计数换算 | kg；相关时为 currency/kg | 每次清运或转移 | 完整代表发运期间 | 每个代表发运场址及残余物流 | 按身份、状态和去向分别汇总；不得与产品质量相抵 | 秤具/核查记录；转移联单；发票；法律/运营去向记录 |

### 计算规则

| rule_id | Applies to | Formula or rule | Inputs | Output | source_ids |
| --- | --- | --- | --- | --- | --- |
| `calc_normalize_reference_mass` | 每个清单数量 | 归一化数量 = 代表期间数量 / 发运参考产品净质量；保留原始单位和转换记录 | 已采集过程数量；发运净质量 | 每 1 kg 未熬制绵羊脂肪净质量的数量 | eu-2021-2279-pef |
| `calc_mass_balance` | `joint_recovery`; `fat_trimming`; `cold_conditioning`; `packaging_dispatch` | 质量平衡闭合率 = 已核算产出质量 / 实测投入质量；分别列示产品、共产品、废物、排液和实测储存损失，并调查未解释差异 | 匹配的投入与产出质量记录 | 过程质量平衡闭合率及未解释差异 | eu-2021-2279-pef; eu-2019-2031-fdm-bat |
| `calc_joint_allocation` | 未细分的联合屠宰/分割负荷 | 分配至未熬制绵羊脂肪的负荷 = 剩余联合负荷 × 有文件记录的分配因子；所有联合产品分配因子之和必须为 1；披露物理或经济驱动及期间 | 剩余联合负荷；完整共产品分母；因果数据或质量与价格 | 已分配联合负荷及审计轨迹 | eu-2021-2279-pef |
| `calc_cold_energy` | `cold_conditioning` | 冷阶段能耗 = 直接计量能耗，或设备功率 × 实测运行时间并以有文件负载数据修正且与相关仪表核对；除以状态调节后产出质量并披露储存时长 | 仪表/设备读数；运行时间；状态调节后产出质量；储存时长 | 按能源载体记录的每 kg 状态调节产品能耗及时长 | eu-2019-2031-fdm-bat |
| `calc_refrigerant_loss` | `cold_conditioning` | 各制冷剂排放 = 期初充注量 + 补充量 - 回收量 - 期末充注量，仅对有文件记录的转移调整；负值或不完整平衡为不确定 | 制冷剂充注、补充、回收和期末记录 | 按身份和代表期间记录的制冷剂排放 kg | eu-2019-2031-fdm-bat |
| `calc_packaging_mass` | `packaging_dispatch` | 非重复使用包装质量 = 领用质量 - 退回未用质量；计数记录采用经核实件数乘经核实单件质量；排除可重复使用器具并单独报告 | 包装领用/退回、件数、单件质量、重复使用标志 | 每 kg 参考产品净质量的包装 kg | eu-2021-2279-pef |

### 数据质量要求

| requirement_id | Applies to | Requirement | Evidence |
| --- | --- | --- | --- |
| `dq_identity_and_scope` | 产品及所有上游/中间组织流 | 证明绵羊单一物种隔离、实际解剖组织/来源分割部位说明、路线、去向和未熬制/未精炼状态。混合或身份不明动物脂肪不合格。 | 批次可追溯性、生产记录、宰后/去向记录、产品规范 |
| `dq_mass_metrology` | 参考质量及所有物料平衡 | 采用经校准或核实的称量；披露毛重/皮重方法、组织/水分约定、测量阶段、未解释平衡差异和计数转质量换算。 | 校准/核实证书、秤单、批次平衡、称量核查 |
| `dq_temporal_representativeness` | 所有前景记录 | 覆盖声明的生产期间及相关季节/运行状态，包括冷却/冷冻储存。说明排除项、停机和异常批次。 | 覆盖表、生产日历、仪表及批记录完整性 |
| `dq_cold_chain` | 冷却或冷冻路线 | 提供书面温度规范、测量点、记录器校准、温度受控时的实际交接温度、储存时长和偏离；不得将通用阈值报告为来源支持值。 | 温度日志、报警记录、校准、仓储记录 |
| `dq_allocation` | 联合屠宰/分割及共享公用工程 | 记录细分尝试、剩余分配关系选择理由、完整分母、质量/价格来源期间、因子核对，并在分配重要时进行敏感性分析。 | 过程图、仪表、产品台账、价格、分配工作表、敏感性结果 |
| `dq_inventory_completeness` | 范围内操作 | 在适当过程或场址层级核算相关用水、能源、原料、包装、废水、残余物、直接排放和损失。声明跳过的检查和数据缺口。 | 资源/排放清单、仪表、发票、废物联单、核对 |
| `dq_reasoned_estimate_replacement` | 暂定脂肪总投入 QA 校验范围 | 仅将每 kg 产出 1.00-2.00 kg 投入视为推理 QA 筛查。获得与所代表路线及组织状态匹配、经评审的绵羊脂肪批次质量平衡和计量不确定度后，替换或停用该范围；不得将其转为默认产率或分配因子。 | 将替换证据关联至 `gross_fat_input_mass_guardrail` 的评审记录 |
| `dq_source_applicability` | 外部标准和指南的使用 | 仅将 CXC 58-2005 用于适用的肉品卫生/过程控制背景；仅以 CXS 211-1999 区分已熬制具名脂肪；仅以 FDM BAT 支持相关清单/监测完整性；不得导入法律阈值、组成值或无关行业绩效值。 | 来源适用性声明和评审签字 |

## 9. 校验规则

| rule_id | 适用对象 | 规则 | source_ids |
| --- | --- | --- | --- |
| `validate_reference_identity` | 参考流和产品元数据 | 若产品流 UUID、Mass 属性 UUID、Units of mass UUID、kg 单位、CPC 引用或绵羊单一物种未熬制身份与本 PCR 不完全匹配，则失败。 | unsd-cpc-3-0-21514 |
| `validate_required_qualifiers` | 前景数据包 | 若缺少路线、解剖组织来源/来源分割部位、去向、未熬制状态、温度状态、组织/水分约定、包装/皮重、设施/期间/批次、交接或运输责任归属，则失败。 | unsd-cpc-3-0-21514; codex-cxc-58-2005 |
| `validate_rendering_excluded` | 过程图和清单 | 若默认前景纳入熬制、熔化、提取、精炼或牛羊脂/已熬制脂肪生产，或使用 CPC 21521-21529 产品作为参考流，则失败。 | unsd-cpc-3-0-21514; codex-cxs-211-1999 |
| `validate_species_and_route` | 投入和产出身份 | 若使用其他物种、混合物种脂肪流或借用其他反刍动物产率/分配参数，且未将其明确排除于参考产品并单独进行情景处理，则失败。 | unsd-cpc-3-0-21514 |
| `validate_mass_and_tare` | 质量平衡和参考数量 | 若参考净质量未经测量或核实、包装皮重计入 1 kg 产品，或物料产出与残余物未核对，则失败；暂定 1.00-2.00 QA 区间仅触发复核，不得自动替代。 | eu-2021-2279-pef |
| `validate_allocation` | 联合屠宰/分割负荷 | 若未考虑直接细分、分配关系无记录、遗漏联合产出、因子之和不为 1，或在无代表性证据时主张默认绵羊脂肪分配份额，则失败。 | eu-2021-2279-pef |
| `validate_cold_chain` | 冷却或冷冻路线 | 若遗漏状态调节/储存能耗和产品损失，则失败；若未披露状态、时长、测量点或偏离，则失败。制冷剂充注记录不足时，将制冷剂排放标为不确定而非假定为零。 | codex-cxc-58-2005; eu-2019-2031-fdm-bat |
| `validate_transport_handover` | 发运和运输 | 若交接点或运输责任归属不明确，则失败。若纳入送达运输，要求记录方式、距离、载荷、路线、适用时的温控能耗，并将参考流置于送达交接点。 | codex-cxc-58-2005; eu-2021-2279-pef |
| `validate_source_limits` | 定量和法律主张 | 若将 CXS 211-1999 组成/质量值用于未熬制脂肪，将 CXC 58-2005 作为 LCA 数量证据，或将 EU 2019/2031 阈值/绩效值推广到其法律和行业范围之外，则失败。 | codex-cxs-211-1999; codex-cxc-58-2005; eu-2019-2031-fdm-bat |

## 10. 发布数据集画像

| 字段 | 值 |
| --- | --- |
| dataset_role | 声明发运交接点的未熬制绵羊脂肪前景生产数据集 |
| downstream_use | 经方法学和数据质量评审后可作为 `secondary_dataset`; `background_dataset` |
| allowed_use | 用于构建与声明的路线、解剖组织状态、去向、温度状态、包装、地理位置、期间、分配方法和交接点相匹配的绵羊单一物种未熬制脂肪 LCA `process` 或 `lifecyclemodel` |
| excluded_use | 已熬制/精炼脂肪或牛羊脂；其他或混合动物物种；替代肉类、活绵羊、皮张、内脏或熬制数据集；将暂定 QA 边界用作默认产率；未经适用评审/核查的公开比较性主张 |
| required_metadata | PCR id 和版本语境；参考 UUID/属性/单位组/单位；CPC 引用；物种；解剖组织/来源分割部位；屠宰/分割路线；去向；实际组织/水分约定；未熬制确认；温度状态/规范及温度受控时的交接温度；储存时长；包装/皮重；设施/地理位置；期间/批次；上游数据集；过程图；交接；运输责任归属；分配方法/因子/分母；数据源 |
| required_quality_disclosure | 前景记录与计算记录；质量平衡闭合；仪表/秤具覆盖与校准；时间/场址覆盖；冷链覆盖与偏离；制冷剂数据完整性；分配敏感性；缺失 UUID；推理估算使用及替换状态；已执行/跳过检查；未解决发现 |
| update_trigger | 经评审的绵羊脂肪特定质量平衡证据；Tiangong 参考身份变化；产品范围或 CPC 分类变化；新的适用类别特定 PCR/PEFCR；屠宰/分割/冷链路线变化；Codex 肉品卫生或具名脂肪文本修订；PEF 方法修订；新的适用 BAT 结论；可替换暂定 QA 校验范围的重要前景证据 |

## 11. 数据源

| 来源 id | 类型 | 引用 | 用途 |
| --- | --- | --- | --- |
| `unsd-cpc-3-0-21514` | official_guidance | 联合国统计司，Central Product Classification (CPC) Version 3.0，代码 21514，“Sheep fat, unrendered”，官方结构 CSV：https://unstats.un.org/unsd/classifications/Econ/Download/In%20Text/CPC_Ver_3.0_Structure_30Jun2025.csv（检索日期 2026-08-11） | 用于产品名称、绵羊单一物种分类范围及与已熬制脂肪类别的区分。限制：分类证据不定义生产过程、组织组成、产率、分配份额或 LCA 数量。 |
| `codex-cxc-58-2005` | standard | Codex Alimentarius，Code of Hygienic Practice for Meat，CXC 58-2005：https://www.fao.org/fao-who-codexalimentarius/sh-proxy/en/?lnk=1&url=https%253A%252F%252Fworkspace.fao.org%252Fsites%252Fcodex%252FStandards%252FCXC%2B58-2005%252FCXC_058e.pdf（检索日期 2026-08-11） | 用于适用的屠宰/修整及宰后过程控制背景；不安全/不适用部位隔离；冷却/冷冻、储存、包装、运输防护及温度监测完整性。限制：不据此推断绵羊脂肪 LCA 数量、产率、分配因子或通用温度阈值。 |
| `codex-cxs-211-1999` | standard | Codex Alimentarius，Standard for Named Animal Fats，CXS 211-1999，2024 年修订：https://www.fao.org/fao-who-codexalimentarius/sh-proxy/pl/?lnk=1&url=https%253A%252F%252Fworkspace.fao.org%252Fsites%252Fcodex%252FStandards%252FCXS%2B211-1999%252FCXS_211e.pdf（检索日期 2026-08-11） | 仅用于命名/排除证据，即涉及绵羊的食用牛羊脂由熬制获得。限制：该标准适用于以供人类食用状态呈现的具名脂肪，主要是已熬制产品；不得将其组成、质量、添加剂和分析数值用于未熬制绵羊脂肪。 |
| `eu-2021-2279-pef` | official_guidance | 欧盟委员会，Recommendation (EU) 2021/2279 on the use of the Environmental Footprint methods，包括附件一 Product Environmental Footprint Method，CELEX 32021H2279：https://eur-lex.europa.eu/eli/reco/2021/2279/oj（检索日期 2026-08-11） | 用于功能单位/参考流框架、系统边界、前景归一化、数据质量、多功能性层级、细分、物理/经济分配记录及核查语境。限制：这是通用方法，不是绵羊脂肪特定 PEFCR，也不是产品特定数值证据。 |
| `eu-2019-2031-fdm-bat` | official_guidance | Commission Implementing Decision (EU) 2019/2031 establishing BAT conclusions for the food, drink and milk industries，CELEX 32019D2031：https://eur-lex.europa.eu/eli/dec_impl/2019/2031/oj（检索日期 2026-08-11） | 当所代表设施处于 FDM 语境范围内或适当采用该语境时，条件性用于水、能源、原料、废水、废气、残余物和过程级监测的清单与监测完整性。限制：范围和适用性仍以该决定为准；不得将法律产能阈值、BAT-AEL、监测频率或行业绩效值推广至本 PCR 或所有屠宰/分割设施。 |
