---
pcr_id: pcr.food-products-beverages-and-tobacco-textiles-apparel-and-leather-products.textile-articles-other-than-apparel.rubber-thread-and-cord-textile-covered-textile-yarn-and-strip-impregnated-or-covered-wi-6aa4e1b5
language: zh-CN
status: candidate
sync_with: pcr.en-US.md
---

# 纺织材料包覆的橡胶线和绳；用橡胶或塑料浸渍或包覆的纺织纱线和扁条

## 1. 范围与适用性

本 PCR 适用于 CPC 27992 产品的工厂门生产：一类是用纺织纱线机械包覆橡胶线或绳，另一类是用橡胶或塑料配方浸渍或包覆纺织纱线或扁条。前景边界始于接收已声明的基材、包覆纱线或涂层配方、过程公用工程和包装，止于生产工厂门的已包装合格产品。

方法涵盖路线特定的包覆、卷绕、浸渍或涂层、适用时的干燥或固化、检验、不合格品处理和包装。橡胶、纺织纤维和纱线、聚合物配方、电力、燃料、水和包装的上游生产由链接的产品系统数据集表示。使用者必须选择实际生产申报产品的路线；除非研究对象明确为有生产量权重记录的产品组合，否则不得把两条路线合成为虚构平均值。

## 2. 产品类别识别

| 字段 | 值 |
| --- | --- |
| canonical_pcr_id | `pcr.food-products-beverages-and-tobacco-textiles-apparel-and-leather-products.textile-articles-other-than-apparel.rubber-thread-and-cord-textile-covered-textile-yarn-and-strip-impregnated-or-covered-wi-6aa4e1b5` |
| classification_refs | CPC 3.0 `27992` |
| covered_products | 纺织材料包覆的橡胶线和绳；用已声明橡胶或塑料配方浸渍或包覆的纺织纱线和纺织扁条。 |
| excluded_products | 裸橡胶线或绳；未处理纺织纱线或扁条；涂胶纺织物；轮胎帘子布；金属化纱线；成品弹性织物、服装及其他下游制品；未声明基材或涂层身份的产品。 |
| representative_product | 已包装、可销售且属于 CPC 27992 的线、绳、纱线或扁条，并声明其路线、基材、包覆或涂层组成及物理规格。 |
| production_route | `textile_covering_and_packing` 用于以纺织纱线机械包覆橡胶线或绳；`impregnation_coating_and_packing` 用于以橡胶或塑料浸渍或包覆纺织纱线或扁条。 |
| market_state | 生产工厂门的已包装合格产品，并声明水分状态和包装状态。 |

## 3. 参考流

| 字段 | 值 |
| --- | --- |
| What | 符合已声明规格的已包装合格产品：纺织材料包覆的橡胶线或绳，或用橡胶或塑料浸渍或包覆的纺织纱线或扁条。 |
| How much | 1 kg 产品净质量，不含包装。 |
| How well | 符合已声明的路线、基材、包覆或涂层配方、尺寸或线密度、包覆结构或干涂层上浆量、水分状态和适用测试规格。 |
| How long or cycle | 一个工厂门生产批次；不表示使用阶段服务。 |
| reference_flow_link | 一个精确的 CPC 27992 产品输出，归一化为 1 kg 产品净质量。 |

| 字段 | 值 |
| --- | --- |
| Reference amount | 1 kg 可销售产品净质量 |
| Reference product flow | Rubber thread and cord, textile covered, textile yarn and strip, impregnated or covered with rubber or plastics `45e76d26-21e8-40f1-af58-1cc181d6832f` |
| Reference flow property | Mass `93a60a56-a3c8-11da-a746-0800200b9a66` |
| Reference unit group | Units of mass `93a60a57-a4c8-11da-a746-0800200c9a66` |
| Reference unit | kg |
| Required qualifiers | production route; substrate form and fibre family; rubber or plastic family and formulation identifier; textile-cover construction when applicable; linear density or gauge or dimensions; dry cover or coating mass fraction or pickup; product processing and test history; moisture condition; net and gross mass; packaging specification; production site and geography and time period |

构建前景数据包时，所有必需限定信息必须在数据集元数据、过程说明、参考流注释、产品描述或等效数据包字段中声明。缺少限定信息会导致该数据包的参考流不完整。

## 4. 计量与单位规则

| rule_id | 适用于 | 必需属性 | 必需单位 | 规则 |
| --- | --- | --- | --- | --- |
| `reference_mass` | 参考产品 | Mass `93a60a56-a3c8-11da-a746-0800200b9a66` | kg | 所有前景交换均按已声明水分状态下的 1 kg 可销售产品净质量归一化；参考量不包含包装质量。 |
| `material_mass` | 基材、包覆纱线、配方、包装和固体废物 | Mass | kg | 按原子材料身份记录实测接收量、消耗量、产出量和废弃量；只有在记录水分或固含量后才能换算干基和接收态质量。 |
| `electricity_energy` | 外购电力 | Energy | kWh | 使用校准电表或发票的报告期数量，仅在路线特定计量或有文件证明的因果驱动量基础上分配。 |
| `fuel_energy` | 干燥或固化所用天然气 | Energy | MJ | 记录交付燃料及其低位或高位热值基准；同一数据集不得混用热值基准。 |
| `process_water_volume` | 过程水 | Water volume | m3 | 记录跨越场址过程边界的水，并核对取水、蒸发、产品携带、排放和回收水。 |
| `air_emission_mass` | 排入空气的氨或甲苯 | Mass | kg | 仅报告针对指定物质和接收环境的实测或方法计算排放；配方不相关时必须记录为不适用。 |

## 5. 系统边界

### 边界概化

| 字段 | 值 |
| --- | --- |
| declared_starting_condition | 包覆路线接收裸橡胶线或绳以及包覆纱线；涂层路线接收纺织纱线或扁条以及已声明的橡胶或塑料涂层配方；公用工程和包装分别作为接收的产品输入。 |
| starting_condition_role | 接收的基材和配方定义从门到门的前景起始条件，不得静默替换为原胶乳、聚合物树脂、纤维或单体生产。 |
| product_classification_scope | 仅 CPC 3.0 `27992`。 |
| recursive_input_rule | 如果某一输入本身也是 CPC 27992 产品，则将其作为具有自身申报路线的独立上游产品输入记录，不在本前景过程中再次展开。 |
| upstream_dataset_requirement | 对每项接收的材料、公用工程、燃料、水和包装输入，链接前景边界外在地理和技术上适当的上游数据集。 |
| disclosure | 声明路线、场址、报告期、基材状态、配方标识、涂层固含量或包覆比例、水分基准、包装状态、排除项和任何共用设备分配。 |

| rule_id | 适用于 | 规则 | source_ids |
| --- | --- | --- | --- |
| `boundary_gate_to_gate` | 前景生产 | 包含从接收已声明基材和辅料开始，经路线特定的包覆或涂层、适用时的干燥或固化、检验、卷绕、不合格品处理和包装，直至工厂门产品的全部操作。 | `eu-textiles-bat-2022`; `usitc-rubber-thread-1992` |
| `boundary_upstream_links` | 外购输入 | 从前景过程中排除上游生产，但每项材料、公用工程、燃料、水和包装输入都必须链接数据集。 | `iso-14044-2006`; `eu-pef-2021-2279` |
| `boundary_route_gate` | 路线选择 | 仅包含实际生产申报产品的路线；产品组合平均必须使用有生产量权重的前景记录并明确披露。 | `iso-14044-2006` |
| `boundary_packaging` | 工厂门产品 | 包含生产场址实际消耗的初级和运输包装，同时把包装质量排除在 1 kg 产品净质量参考量之外。 | `eu-pef-2021-2279` |
| `boundary_emissions_waste` | 场址排放和残余物 | 包含路线特定的边角料、废涂层材料、不合格品、废水转移和实测相关大气排放；不得用通用合并残余物或排放替代。 | `eu-textiles-bat-2022` |

## 6. 过程清单结构

### 过程图

| process_id | process_name | inclusion | inclusion_condition | role | quantitative_reference |
| --- | --- | --- | --- | --- | --- |
| `textile_covering_and_packing` | 纺织包覆与包装 | `conditional` | 橡胶线或绳以纺织纱线机械包覆时必需。 | 生产纺织材料包覆橡胶线或绳的前景路线。 | 1 kg 可销售 CPC 27992 产品净输出 |
| `impregnation_coating_and_packing` | 浸渍、涂层、干燥或固化及包装 | `conditional` | 纺织纱线或扁条以橡胶或塑料配方浸渍或包覆时必需。 | 生产橡胶或塑料处理纺织纱线或扁条的前景路线。 | 1 kg 可销售 CPC 27992 产品净输出 |

至少需要一个过程。针对一个实物产品批次的数据集只使用适用过程。

### 过程：纺织包覆与包装（`textile_covering_and_packing`）

#### 输入

##### 产品流

###### 裸硫化橡胶线（`cover_bare_rubber_thread`）

裸橡胶线作为待机械包覆的弹性芯材跨越前景边界。根据生产批次记录其配方、线规、水分状态和供给质量。

- 选定流：Bare vulcanized rubber thread
- 流属性/单位：Mass / kg
- 数量规则：记录批次特定的消耗质量，扣除单独记录的退回或可复用芯材。
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：产品特定（`product_specific`）
- 归一化基准：每 1 kg 纺织材料包覆橡胶线或绳净输出
- 基准类型：过程输出（`process_output`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_covering_materials`
- 来源：`usitc-rubber-thread-1992`

###### 纺织包覆纱线（`cover_textile_yarn`）

缠绕在橡胶芯上的具体纱线作为单一原子材料输入。记录纤维类别、纱线结构、线密度和实际消耗质量。

- 选定流：Textile covering yarn
- 流属性/单位：Mass / kg
- 数量规则：记录生产批次发料质量减去实测可复用退料。
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：产品特定（`product_specific`）
- 归一化基准：每 1 kg 纺织材料包覆橡胶线或绳净输出
- 基准类型：过程输出（`process_output`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_covering_materials`
- 来源：`usitc-rubber-thread-1992`

###### 外购电力（`cover_electricity`）

包覆、卷绕、检验和包装设备所用电力与所有热燃料分别记录。

- 选定流：电力
- 流属性/单位：Energy / kWh
- 数量规则：优先使用路线特定计量；否则使用设备功率和运行时间记录分配经核对的电表总量。
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每 1 kg 纺织材料包覆橡胶线或绳净输出
- 基准类型：过程输出（`process_output`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_covering_energy`
- 来源：`eu-textiles-bat-2022`

###### 瓦楞纸板箱（`cover_corrugated_board`）

包覆线产品实际消耗的瓦楞纸板运输箱作为独立包装输入记录。

- 选定流：Corrugated board box
- 流属性/单位：Mass / kg
- 数量规则：记录纸箱数量乘以核实的单件质量，并按期初和期末库存调整。
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每 1 kg 纺织材料包覆橡胶线或绳净输出
- 基准类型：过程输出（`process_output`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_covering_materials`
- 来源：`eu-pef-2021-2279`

##### 废物流

##### 基本流

#### 输出

##### 产品流

###### 纺织材料包覆橡胶线或绳参考输出（`covered_thread_reference_output`）

这是该路线的可销售产品输出和定量参考。精确天工身份已通过 state100 核验为 Product flow、CPC 27992、Mass 和 kg。

- 选定流：橡胶线和绳，已涂面的纺织品，已用橡胶或塑料浸渍或涂覆的线和纱条 `45e76d26-21e8-40f1-af58-1cc181d6832f`
- 流属性/单位：Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- 数量规则：记录已声明水分状态下的合格产品净质量，并归一化为 1 kg。
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：产品特定（`product_specific`）
- 归一化基准：1 kg 可销售纺织材料包覆橡胶线或绳净输出
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_covering_output_waste`
- 来源：`un-cpc-v3-27992`; `iso-20058-2017`; `iso-2321-2017`

##### 废物流

###### 纺织纱线边角料（`cover_yarn_offcuts`）

离开过程的未污染或受污染包覆纱边角料分别计量，并指定有文件证明的处理去向。

- 选定流：Textile yarn offcuts
- 流属性/单位：Mass / kg
- 数量规则：称量或核对批次特定边角料；扣除未跨越边界并直接返回同一过程的材料。
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每 1 kg 纺织材料包覆橡胶线或绳净输出
- 基准类型：过程输出（`process_output`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_covering_output_waste`
- 来源：`eu-textiles-bat-2022`

###### 纺织材料包覆橡胶线边角料（`cover_product_offcuts`）

复合产品边角料和不合格包覆线与纯包覆纱废物分开记录，因为二者组成和处理选择不同。

- 选定流：Textile-covered rubber thread offcuts
- 流属性/单位：Mass / kg
- 数量规则：按处理去向称量离开前景过程的边角料和不合格品。
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每 1 kg 纺织材料包覆橡胶线或绳净输出
- 基准类型：过程输出（`process_output`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_covering_output_waste`
- 来源：`usitc-rubber-thread-1992`

##### 基本流

### 过程：浸渍、涂层、干燥或固化及包装（`impregnation_coating_and_packing`）

#### 输入

##### 产品流

###### 未涂层纺织纱线（`coat_textile_yarn`）

仅当处理产品为纱线时记录此基材。必须声明纤维类别、纱线结构、线密度、水分状态和供给质量。

- 选定流：Uncoated textile yarn
- 流属性/单位：Mass / kg
- 数量规则：记录批次特定消耗质量并扣除实测可复用退料；纺织扁条作为基材时标为不适用。
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：产品特定（`product_specific`）
- 归一化基准：每 1 kg 处理后纺织纱线或扁条净输出
- 基准类型：过程输出（`process_output`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_coating_materials`
- 来源：`eu-textiles-bat-2022`

###### 未涂层纺织扁条（`coat_textile_strip`）

仅当处理产品为纺织扁条时记录此基材。必须声明纤维类别、结构、宽度、厚度、水分状态和供给质量。

- 选定流：Uncoated textile strip
- 流属性/单位：Mass / kg
- 数量规则：记录批次特定消耗质量并扣除实测可复用退料；纺织纱线作为基材时标为不适用。
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：产品特定（`product_specific`）
- 归一化基准：每 1 kg 处理后纺织纱线或扁条净输出
- 基准类型：过程输出（`process_output`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_coating_materials`
- 来源：`eu-textiles-bat-2022`

###### 天然橡胶胶乳配方（`coat_natural_rubber_latex`）

应用天然橡胶胶乳配方时记录该具体输入。报告配方标识、干固体、水、稳定剂和其他已声明组分，不得把配方作为未说明的化学品集合。

- 选定流：Natural rubber latex compound
- 流属性/单位：Mass / kg
- 数量规则：根据批次和配方记录接收态批次质量及干固体分数；纯塑料产品标为不适用。
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：产品特定（`product_specific`）
- 归一化基准：每 1 kg 橡胶浸渍或包覆纺织品净输出
- 基准类型：过程输出（`process_output`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_coating_materials`
- 来源：`eu-textiles-bat-2022`; `usitc-rubber-thread-1992`

###### 聚氯乙烯涂层配方（`coat_pvc_compound`）

应用 PVC 塑料配方时记录该具体输入。报告树脂牌号、增塑剂和助剂体系、固含量及供给状态；使用其他聚合物时，所生产数据集必须另设对应原子流。

- 选定流：Polyvinyl chloride coating compound
- 流属性/单位：Mass / kg
- 数量规则：根据配方和发料记录接收态批次质量及固体分数；无 PVC 时标为不适用。
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：产品特定（`product_specific`）
- 归一化基准：每 1 kg PVC 包覆纺织品净输出
- 基准类型：过程输出（`process_output`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_coating_materials`
- 来源：`eu-textiles-bat-2022`

###### 过程水（`coat_process_water`）

加入涂层液或用于路线特定清洗的水作为单一场址输入记录，并纳入水量平衡。

- 选定流：过程用水
- 流属性/单位：Water volume / m3
- 数量规则：记录归属于涂层路线的计量或批次体积输入，扣除从未跨越过程边界的内部回收水。
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每 1 kg 处理后纺织纱线或扁条净输出
- 基准类型：过程输出（`process_output`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_coating_utilities`
- 来源：`eu-textiles-bat-2022`

###### 外购电力（`coat_electricity`）

混合、浸渍或涂层、通风、卷绕、检验和包装所用电力与燃料分别计量。

- 选定流：电力
- 流属性/单位：Energy / kWh
- 数量规则：优先使用路线特定计量；否则使用设备功率和运行时间记录分配经核对的电表总量。
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每 1 kg 处理后纺织纱线或扁条净输出
- 基准类型：过程输出（`process_output`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_coating_utilities`
- 来源：`eu-textiles-bat-2022`

###### 干燥或固化用天然气（`coat_natural_gas`）

用于路线特定干燥或固化热设备的天然气在适用时记录，且不得与电力或另一种燃料合并。

- 选定流：天然气
- 流属性/单位：Energy / MJ
- 数量规则：记录涂层路线的交付体积及热值或直接能量计量；未使用时标为不适用。
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每 1 kg 处理后纺织纱线或扁条净输出
- 基准类型：过程输出（`process_output`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_coating_utilities`
- 来源：`eu-textiles-bat-2022`

###### 瓦楞纸板箱（`coat_corrugated_board`）

处理后纱线或扁条产品实际消耗的瓦楞纸板运输箱作为独立包装输入记录。

- 选定流：Corrugated board box
- 流属性/单位：Mass / kg
- 数量规则：记录纸箱数量乘以核实的单件质量，并按期初和期末库存调整。
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每 1 kg 处理后纺织纱线或扁条净输出
- 基准类型：过程输出（`process_output`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_coating_materials`
- 来源：`eu-pef-2021-2279`

##### 废物流

##### 基本流

#### 输出

##### 产品流

###### 橡胶或塑料处理纺织纱线或扁条参考输出（`coated_yarn_strip_reference_output`）

这是该路线的可销售产品输出和定量参考。精确天工身份已通过 state100 核验为 Product flow、CPC 27992、Mass 和 kg。

- 选定流：橡胶线和绳，已涂面的纺织品，已用橡胶或塑料浸渍或涂覆的线和纱条 `45e76d26-21e8-40f1-af58-1cc181d6832f`
- 流属性/单位：Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- 数量规则：记录已声明水分状态下的合格产品净质量，并归一化为 1 kg。
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：产品特定（`product_specific`）
- 归一化基准：1 kg 可销售橡胶或塑料处理纺织纱线或扁条净输出
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_coating_output_waste`
- 来源：`un-cpc-v3-27992`; `eu-textiles-bat-2022`; `iso-2060-1994`

##### 废物流

###### 废天然橡胶涂层液（`spent_natural_rubber_coating_liquor`）

未使用或废弃的天然橡胶涂层液是配方特定废物，与塑料糊和废水分别记录。

- 选定流：Spent natural rubber coating liquor
- 流属性/单位：Mass / kg
- 数量规则：按处理去向称量，或根据核实的容器质量和固含量记录计算；无天然橡胶涂层液时标为不适用。
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每 1 kg 橡胶处理纺织品净输出
- 基准类型：过程输出（`process_output`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_coating_output_waste`
- 来源：`eu-textiles-bat-2022`

###### 废 PVC 涂层糊（`spent_pvc_coating_paste`）

未使用或废弃的 PVC 糊是配方特定废物，与橡胶涂层液和废水分别记录。

- 选定流：Spent PVC coating paste
- 流属性/单位：Mass / kg
- 数量规则：按处理去向称量，或根据核实的容器质量和固含量记录计算；无 PVC 糊时标为不适用。
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每 1 kg PVC 包覆纺织品净输出
- 基准类型：过程输出（`process_output`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_coating_output_waste`
- 来源：`eu-textiles-bat-2022`

###### 不合格橡胶涂层纱线（`offspec_rubber_coated_yarn`）

离开前景过程的不合格橡胶涂层纱线与废液态配方分别记录。

- 选定流：Off-spec rubber-coated yarn
- 流属性/单位：Mass / kg
- 数量规则：按处理去向称量不合格橡胶涂层纱线；纯塑料生产标为不适用。
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每 1 kg 橡胶处理纺织品净输出
- 基准类型：过程输出（`process_output`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_coating_output_waste`
- 来源：`eu-textiles-bat-2022`

###### 不合格塑料包覆纺织扁条（`offspec_plastic_covered_strip`）

离开前景过程的不合格塑料包覆纺织扁条与废涂层糊分别记录。

- 选定流：Off-spec plastic-covered textile strip
- 流属性/单位：Mass / kg
- 数量规则：按处理去向称量不合格塑料包覆扁条；纯橡胶生产或纱线产品标为不适用。
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每 1 kg 塑料包覆纺织扁条净输出
- 基准类型：过程输出（`process_output`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_coating_output_waste`
- 来源：`eu-textiles-bat-2022`

##### 基本流

###### 排入空气的氨（`ammonia_to_air`）

仅当已声明胶乳配方或过程记录证明使用氨，且实测或经批准计算确定向空气排放时记录氨。

- 选定流：氨，排入空气
- 流属性/单位：Mass / kg
- 数量规则：针对指定空气环境使用场址排放测量或有文件证明的物质平衡；无氨时标为不适用。
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每 1 kg 处理后纺织纱线或扁条净输出
- 基准类型：过程输出（`process_output`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_coating_output_waste`
- 来源：`eu-textiles-bat-2022`

###### 排入空气的甲苯（`toluene_to_air`）

仅当已声明涂层配方或溶剂记录证明使用甲苯，且实测或经批准计算确定向空气排放时记录甲苯。

- 选定流：Toluene to air
- 流属性/单位：Mass / kg
- 数量规则：针对指定空气环境使用场址排放测量或有文件证明的溶剂平衡；无甲苯时标为不适用。
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每 1 kg 处理后纺织纱线或扁条净输出
- 基准类型：过程输出（`process_output`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_coating_output_waste`
- 来源：`eu-textiles-bat-2022`

## 7. 分配与联产品处理

| rule_id | 适用于 | 规则 | source_ids |
| --- | --- | --- | --- |
| `allocation_avoid` | 路线特定前景操作 | 优先采用独立计量、批次记录和路线特定过程细分，以避免分配。 | `iso-14044-2006`; `eu-pef-2021-2279` |
| `allocation_shared` | 共用包覆、涂层、干燥、通风、检验或包装设备 | 使用有文件证明的因果驱动量分配实测共用总量，例如设备运行时间、计量能耗、干涂层质量或机器产量；仅在没有更合适物理驱动量时使用质量分配。 | `iso-14044-2006`; `eu-textiles-bat-2022` |
| `allocation_rework` | 内部返工 | 在同一报告边界内再加工的材料不作为新产品输出；其额外公用工程和损失仅计一次，并披露返工率。 | `iso-14044-2006` |
| `allocation_recycling` | 边角料和回收涂层材料 | 一致应用研究声明的回收和废物终止约定；未识别被替代产品、替代比和支持证据时，不得给予避免负荷抵扣。 | `eu-pef-2021-2279` |

## 8. 前景数据采集、计算与质量规则

### 数据采集协议

| protocol_id | process_id | flow_role | record_type | raw_fields | collection_method | unit | frequency | temporal_coverage | site_scope | aggregation_rule | quality_evidence |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| `cp_covering_materials` | `textile_covering_and_packing` | 基材、包覆纱线和瓦楞纸箱输入 | 发料、退料、采购、库存、规格和称量记录 | 材料身份；批次；期初库存；接收；发料；退料；期末库存；单件质量；纤维或配方规格 | 分别核对每个原子材料并保留规格和秤量证据。 | kg | 每批次并按月核对 | 与产品输出相同期间 | 生产场址和路线 | 按材料身份汇总核实消耗量，再除以合格产品净质量。 | 校准秤记录；库存核对；供应商规格；批次追溯 |
| `cp_covering_energy` | `textile_covering_and_packing` | 电力输入 | 电表、发票、设备运行时间和额定功率记录 | 电表起读；电表止读；发票数量；设备 id；功率；运行时间；路线产出 | 优先使用路线分表；否则核对场址总表并应用有文件证明的设备因果驱动量。 | kWh | 连续或每班并按月核对 | 与产品输出相同期间 | 生产场址和路线 | 扣除有记录的非路线负荷，分配共用负荷，再除以合格产品净质量。 | 电表校准；发票；运行日志；分配工作表 |
| `cp_covering_output_waste` | `textile_covering_and_packing` | 产品输出和包覆路线废物 | 成品、秤量、拒收、废物转移和处理记录 | 批次；毛质量；包装质量；净质量；水分；合格质量；不合格质量；废物质量；去向 | 按批次和去向核对合格输出及各废物流。 | kg | 每批次 | 与材料输入相同期间 | 生产场址和路线 | 汇总产品合格净质量，并按去向分别汇总各废物身份。 | 校准秤；质量放行；废物联单；质量平衡工作表 |
| `cp_coating_materials` | `impregnation_coating_and_packing` | 基材、配方和瓦楞纸箱输入 | 配方、批次、发料、退料、库存、采购、规格和称量记录 | 材料身份；配方 id；批次；接收态质量；固体分数；水分；发料；退料；库存；单件质量 | 分别核对每种原子基材和配方，并保留配方与固含量证据。 | kg | 每批或每批次并按月核对 | 与产品输出相同期间 | 生产场址和路线 | 按身份计算核实消耗量，同时保留干基和接收态质量且不得混合基准。 | 校准秤；配方批准；安全或技术数据表；库存核对 |
| `cp_coating_utilities` | `impregnation_coating_and_packing` | 过程水、电力和天然气输入 | 水表、电表、燃料表、发票、批次体积、运行时间和热值记录 | 仪表读数；批次用水；电力；燃料体积；热值；设备 id；运行时间；回收水 | 各公用工程分别计量，并与路线和报告期核对。 | m3; kWh; MJ | 连续或每批并按月核对 | 与产品输出相同期间 | 生产场址和路线 | 使用路线特定仪表总量或有文件证明的因果分配，并单独闭合水量平衡。 | 仪表校准；发票；批次表；热值证明；水量平衡工作表 |
| `cp_coating_output_waste` | `impregnation_coating_and_packing` | 产品输出、配方废物、不合格品和指定大气排放 | 成品、秤量、批次、废物转移、分析、烟道测试、溶剂平衡和配方记录 | 净输出；水分；干基材；干涂层；废物身份；废物质量；去向；物质输入；实测浓度；气体流量；运行时间 | 核对产品和材料损失，保持各废物流独立，仅量化配方和排放方法证明存在的物质。 | kg | 每批或每批次；排放按许可或方法频次 | 与输入和输出相同期间 | 生产场址和路线 | 汇总产品合格净质量；按身份和去向汇总各废物；使用批准的测量或平衡方法计算各指定排放。 | 质量放行；校准秤；废物联单；实验室或烟道报告；配方记录；质量平衡工作表 |

### 计算规则

| rule_id | 适用于 | 公式或规则 | 输入 | 输出 | source_ids |
| --- | --- | --- | --- | --- | --- |
| `calc_reference_normalization` | 所有前景交换 | 归一化交换量等于报告期交换量除以已声明水分状态下的合格产品净质量。 | 交换量；合格产品净质量 | 每 1 kg 产品净质量的交换量 | `iso-14044-2006` |
| `calc_route_mass_balance` | 每条所选路线 | 质量平衡残差等于材料总输入减去产品净输出、分别计量的废物输出和实测材料排放；调查并披露残差，不得强制闭合。 | 干基和接收态材料输入；产品；废物；实测排放；水分和固含量 | 路线质量平衡与残差 | `eu-textiles-bat-2022` |
| `calc_coating_pickup` | 浸渍或涂层路线 | 干涂层上浆量等于处理后产品净干质量减去基材净干质量；具备测量值时，也报告其占处理后产品净干质量的比例。 | 产品干质量；基材干质量 | 干涂层质量和质量分数 | `eu-textiles-bat-2022` |
| `calc_energy_normalization` | 电力和天然气 | 将记录的公用工程数量换算为声明单位，不得合并电力和燃料；燃料能量等于交付量乘以有文件证明的热值。 | 电表；燃料交付；热值；产品质量 | 每 kg 的 kWh 电力和 MJ 燃料 | `eu-textiles-bat-2022` |
| `calc_allocation` | 共用前景总量 | 分配量等于经核对的共用总量乘以所选产品因果驱动量，再除以共享该总量的所有产品同一驱动量之和。 | 共用总量；产品驱动量；驱动量总和 | 分配后的前景数量 | `iso-14044-2006`; `eu-pef-2021-2279` |

### 数据质量要求

| requirement_id | 适用于 | 要求 | 证据 |
| --- | --- | --- | --- |
| `dq_identity` | 参考产品和材料输入 | 声明路线、基材形态和纤维类别、配方标识、包覆结构或涂层上浆量、物理规格及包装状态。 | 产品规格；配方；批次流转单；包装物料清单 |
| `dq_temporal` | 所有前景记录 | 使用一个连贯报告期内能代表正常运行的记录，并披露停产、试验和异常批次。 | 报告期定义；生产日志；异常登记 |
| `dq_completeness` | 所有原子交换 | 核对仪表、库存、产品、各废物流和相关指定排放；不允许合并材料、公用工程、废物或排放占位符。 | 清单检查表；仪表和库存核对；废物和排放登记 |
| `dq_mass_balance` | 每条所选路线 | 调查材料平衡残差，并解释水分、挥发损失、取样、库存或测量影响，不得虚构平衡交换。 | 签署的质量平衡工作表；测量不确定性记录 |
| `dq_chemicals` | 涂层路线 | 维护配方级化学品清单，包含身份、数量、功能、固含量或溶剂含量及批次关联。 | 批准配方；安全和技术数据表；批次发料记录 |
| `dq_tests` | 可销售输出 | 记录适用的物理或机械规格和测试历史，包括相关橡胶线加工历史及相关纱线线密度方法。 | 合格证；视适用情况提供 ISO 20058、ISO 2321 或 ISO 2060 测试记录 |
| `dq_uuid` | 每个实际使用的交换 | 将每个实际使用的原子交换解析到类型、属性和单位兼容的一个精确天工流身份；未解析候选行仍是审查发现，禁止赋予近邻 UUID。 | 混合检索证据；独立 state100 直读证据；审查日志 |

## 9. 验证规则

| rule_id | 适用于 | 规则 | source_ids |
| --- | --- | --- | --- |
| `validate_reference_flow` | 数据集参考 | 要求精确 CPC 27992 Product flow UUID、Mass 属性 UUID、kg 参考单位、1 kg 净质量和全部必需限定信息。 | `un-cpc-v3-27992`; `iso-14044-2006` |
| `validate_route` | 过程选择 | 至少要求一条适用路线；若单一批次数据集在没有生产量加权产品组合定义的情况下混合包覆和涂层交换，则拒绝。 | `iso-14044-2006` |
| `validate_atomic_inventory` | 清单结构 | 每行只允许一个物理或化学上具体的交换；拒绝集合流、选择指令、合并公用工程、合并废物和合并排放。 | `eu-pef-2021-2279` |
| `validate_mass_balance` | 路线材料平衡 | 要求核对输入、产品、废物、水分或固含量及实测排放，并记录残差解释。 | `eu-textiles-bat-2022` |
| `validate_formulation` | 涂层路线 | 要求实际基材和配方、干固体、涂层上浆量或包覆比例，以及每项条件性材料和物质的适用性判断。 | `eu-textiles-bat-2022` |
| `validate_utilities` | 电力、燃料和水 | 要求分开数量、兼容单位、计量或分配证据、燃料热值基准，并在使用过程水时提供水量平衡。 | `eu-textiles-bat-2022` |
| `validate_emissions_waste` | 废物和排放 | 各废物身份和去向必须分别记录；只有在配方相关性和实测或批准计算有文件证明时才能报告氨或甲苯。 | `eu-textiles-bat-2022` |
| `validate_sources_protocols` | 前景证据 | 每个前景记录行必须链接已声明采集协议，每项方法声明必须引用允许的来源。 | `iso-14044-2006`; `eu-pef-2021-2279` |
| `validate_uuid_evidence` | 天工身份 | 拒绝未经核验或语义更宽、更窄或代理的 UUID；每个未解析行均按 row_id 报告，直至混合检索和 state100 直读共同确认精确身份。 | `un-cpc-v3-27992` |

## 10. 发布数据集画像

| 字段 | 值 |
| --- | --- |
| dataset_role | 为已声明 CPC 27992 产品的工厂门生产提供路线特定前景数据包。 |
| downstream_use | 构建和验证带上游产品系统链接的 LCA process 和 lifecycle-model 数据集。 |
| allowed_use | 场址和期间特定产品足迹；参考流限定和边界等价的比较；生产改进研究。 |
| excluded_use | 不得通用于裸橡胶线、未处理纱线、涂胶织物、轮胎帘子布、成品弹性制品，或配方和路线未声明的产品。 |
| required_metadata | PCR id 和版本；CPC 编码；路线；产品和配方限定；场址和地理；报告期；技术；参考水分；净质量和包装质量；分配方法；链接的上游数据集；UUID 证据状态。 |
| required_quality_disclosure | 仪表和秤覆盖；库存核对；配方和固含量证据；路线质量平衡残差；共用设备分配；废物去向；排放方法；测试方法；未解析 UUID 和排除项。 |
| update_trigger | 基材、纤维类别、配方、包覆结构、涂层上浆量、生产路线、热系统、包装、场址、上游供应、分配驱动量、测量方法或代表性报告期发生变化。 |

## 11. 数据源

| Source id | Type | Reference | Used for |
| --- | --- | --- | --- |
| `un-cpc-v3-27992` | `official_guidance` | United Nations Statistics Division, CPC Version 3.0 Explanatory Notes, subclass 27992, 2025. https://unstats.un.org/unsd/classifications/Econ/Download/In%20Text/CPC_Ver_3.0_Exp_Notes_30Jun2025.pdf | 精确产品类别身份及与相邻纺织类别的排除关系。 |
| `eu-textiles-bat-2022` | `official_guidance` | European Commission, Commission Implementing Decision (EU) 2022/2508 establishing BAT conclusions for the textiles industry. https://eur-lex.europa.eu/legal-content/EN/TXT/?uri=CELEX:32022D2508 | 涂层、干燥和固化边界；材料、化学品、水、能源、废物和大气排放前景记录；过程监测和平衡。 |
| `usitc-rubber-thread-1992` | `official_guidance` | United States International Trade Commission, Extruded Rubber Thread from Malaysia, Publication 2559, 1992. https://www.usitc.gov/publications/701_731/pub2559.pdf | 橡胶线加工顺序以及纺织纱线包覆橡胶线的物理作用。 |
| `iso-20058-2017` | `standard` | ISO 20058:2017, General purpose rubber thread — Specification. https://www.iso.org/standard/66920.html | 橡胶线产品规格和适用性限定。 |
| `iso-2321-2017` | `standard` | ISO 2321:2017, Rubber threads — Methods of test. https://www.iso.org/standard/68003.html | 橡胶线测试方法和加工历史披露。 |
| `iso-2060-1994` | `standard` | ISO 2060:1994, Textiles — Yarn from packages — Determination of linear density by the skein method. https://www.iso.org/standard/6837.html | 纱线线密度测量和产品限定。 |
| `iso-14044-2006` | `standard` | ISO 14044:2006, Environmental management — Life cycle assessment — Requirements and guidelines. https://www.iso.org/standard/38498.html | LCA 边界、分配、数据质量、计算和报告方法。 |
| `eu-pef-2021-2279` | `official_guidance` | European Commission Recommendation (EU) 2021/2279 on the use of Environmental Footprint methods. https://eur-lex.europa.eu/eli/reco/2021/2279/oj/eng | 产品环境足迹数据质量、链接数据集、分配、包装、验证和回收披露。 |
