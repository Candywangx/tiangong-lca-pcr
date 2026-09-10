---
pcr_id: pcr.metal-products-machinery-and-equipment.electrical-machinery-and-apparatus.permanent-ceramic-or-ferrite-magnets
language: zh-CN
status: candidate
sync_with: pcr.en-US.md
---

# 永久陶瓷或铁氧体磁体

## 1. 范围与适用性

本 PCR 适用于在制造工厂门交付的永久陶瓷或硬铁氧体磁体成品。覆盖烧结各向同性或各向异性铁氧体磁体，以及通过注射成型、挤出、压延、压缩成型或等效已声明成型路线制造的聚合物或弹性体粘结铁氧体磁体，不受磁体形状和最终应用限制。

产品的永磁功能必须主要来自硬铁氧体。本 PCR 不包括金属永磁体、稀土磁体、铝镍钴磁体、电磁铁、临时磁体、软磁铁氧体磁芯及粉末、未烧结生坯、作为产品销售的铁氧体粉末，以及磁体并非单独申报产品的电机、扬声器、电源或消费电子组件。若购入磁体坯件只有后续精加工操作，除非坯件具备兼容的上游数据集且明确披露省略的制造阶段，否则该前景系统不完整。

## 2. 产品类别识别

| 字段 | 值 |
| --- | --- |
| canonical_pcr_id | pcr.metal-products-machinery-and-equipment.electrical-machinery-and-apparatus.permanent-ceramic-or-ferrite-magnets |
| classification_refs | CPC 3.0：46932，Permanent ceramic or ferrite magnets（exact） |
| covered_products | 烧结与粘结永久陶瓷或硬铁氧体磁体成品，包括刚性和柔性产品、各种商业形状以及各向同性或各向异性牌号 |
| excluded_products | 金属永磁体和稀土磁体；铝镍钴磁体；电磁铁；临时磁体；软磁铁氧体部件；铁氧体粉末；压制生坯；不可分离的含磁体组件 |
| representative_product | 制造工厂门处完成质量放行的硬铁氧体永磁体成品 |
| production_route | 烧结路线：铁氧体粉末制备、采用已声明取向方法成型、烧结、精加工、充磁、检验和包装；粘结路线：硬铁氧体粉末与粘结剂混配、模塑/挤出/压延/压缩成型、必要的精加工、充磁、检验和包装 |
| market_state | 已制造成品，在工厂交付，已充磁或按照明确客户规范以未充磁状态供应 |

## 3. 参考流

| 字段 | 值 |
| --- | --- |
| What | 永久陶瓷或硬铁氧体磁体成品 |
| How much | 1 kg 净质量合格成品磁体 |
| How well | 符合已声明的铁氧体成分或牌号、磁性能规范、尺寸与公差、充磁状态或极型以及表面状态 |
| How long or cycle | 制造工厂门处一个有代表性的生产批次或生产周期 |
| reference_flow_link | `finishing_magnetization_packaging` 的净合格输出，不含可重复使用运输包装和不合格产品 |

| 字段 | 值 |
| --- | --- |
| 参考数量 | 1 kg |
| 参考产品流 | 永久陶瓷或铁氧体磁铁 `59fbfc86-a725-413c-b3df-d6f7683036d5` |
| 参考流属性 | Mass `93a60a56-a3c8-11da-a746-0800200b9a66` |
| 参考单位组 | Units of mass `93a60a57-a4c8-11da-a746-0800200c9a66` |
| 参考单位 | kg |
| 必需限定信息 | 制造路线（烧结或粘结及成型方法）；铁氧体化学组成和商业牌号；各向同性或各向异性取向；充磁状态、方向和极型；产品几何形状、尺寸和公差；表面涂层或处理；粘结磁体的粘结剂类型和配方份额；自产或外购铁氧体粉末起始条件；制造场址、地理范围和参考期 |

构建前景数据包时，`必需限定信息` 中列出的信息应在数据集元数据、过程说明、参考流备注、产品说明或等效数据包字段中明确声明。缺失必需限定信息的数据包视为参考流定义不完整。

## 4. 计量与单位规则

| rule_id | 适用对象 | 必需流属性 | 必需单位 | 规则 |
| --- | --- | --- | --- | --- |
| `reference_mass` | 参考产品 | Mass `93a60a56-a3c8-11da-a746-0800200b9a66` | kg | 报告 1 kg 合格磁体成品净质量。参考数量不含不合格产品、研磨污泥、边角料及全部包装。 |
| `count_to_mass` | 按件数记录的输出 | Mass `93a60a56-a3c8-11da-a746-0800200b9a66` | kg | 采用批次特定的已核实单件质量或经校准秤实测值将件数换算为质量，并保留件数、抽样或实测质量及计算记录。 |
| `internal_flow_consistency` | 前景过程之间转移的铁氧体粉末和磁体坯件 | Mass `93a60a56-a3c8-11da-a746-0800200b9a66` | kg | 内部转移两端采用一致的干基或收到态口径，并在相关时披露水分或粘结剂基准。内部转移不得重复计为外部投入。 |

## 5. 系统边界

### 边界概化

| 字段 | 值 |
| --- | --- |
| declared_starting_condition | 若场内制备铁氧体粉末，则从接收氧化铁、碳酸钡或碳酸锶、添加剂和公用工程开始；否则从接收经质量确认的硬铁氧体粉末开始。粘结路线还从接收已声明的聚合物或弹性体粘结剂及混配添加剂开始。 |
| starting_condition_role | 前景制造门输入；购入材料须配置兼容的上游生产数据集。 |
| product_classification_scope | 覆盖烧结与粘结路线的永久陶瓷或硬铁氧体磁体成品，不限于单一形状或应用。 |
| recursive_input_rule | 本 PCR 类别内购入的磁体成品是上游产品投入，不是零负担内部中间品。使用兼容的上游数据集，并披露任何返工、再制造或装配角色。 |
| upstream_dataset_requirement | 为外购铁氧体粉末或其氧化铁与碳酸盐前体、粘结剂、添加剂、燃料、电力、水、精加工耗材、涂层和包装提供上游数据集。不得以金属永磁体数据集替代。 |
| disclosure | 声明路线、起始材料状态、粉末来源、粘结产品的粘结剂配方、取向方法、热处理操作、精加工与涂层步骤、充磁状态、场址、地理范围、期间以及所纳入的污染控制操作。 |

| rule_id | 适用对象 | 规则 | source_ids |
| --- | --- | --- | --- |
| `boundary_route_selection` | 前景过程选择 | 纳入完整的已声明烧结或粘结路线直至质量放行和包装。除非记录生产份额和加权方法，否则数据集不得合并路线平均值。 | `cui-et-al-2022-part-i`; `cui-et-al-2022-part-ii` |
| `boundary_sintered_route` | 烧结磁体 | 纳入场内实施的铁氧体粉末制备、成型及任何磁场取向、适用时的干燥、烧结和受控冷却、机械加工或研磨、充磁、检验和包装。 | `cui-et-al-2022-part-i`; `ec-ceramic-bref-2007` |
| `boundary_bonded_route` | 粘结磁体 | 纳入硬铁氧体粉末与粘结剂混配，以及已声明的压延、注射成型、挤出、压缩成型或等效成型操作，并在适用时纳入固化或冷却、精加工、充磁、检验和包装。 | `cui-et-al-2022-part-ii` |
| `boundary_environmental_controls` | 全部纳入过程 | 纳入前景门处能源和水供应、除尘、燃烧与过程排放、废水处理，以及粉末、污泥、边角料、不合格品和包装废物的内部回用或外部处理。 | `ec-ceramic-bref-2007` |

## 6. 过程清单结构

### 过程图

| process_id | 过程名称 | 纳入状态 | 纳入条件 | 建模角色 | 定量参考 |
| --- | --- | --- | --- | --- | --- |
| `ferrite_powder_preparation` | 铁氧体粉末制备 | conditional | 当报告场址内合成、煅烧、研磨或调理硬铁氧体粉末时必须纳入；否则将外购粉末作为上游建模 | 前景前体制备 | 转移至成型的经质量确认铁氧体粉末 kg |
| `sintered_forming_and_firing` | 烧结磁体成型与烧成 | conditional | 每个烧结产品数据集必须纳入 | 前景烧结磁体生产 | 转移至精加工的烧结磁体坯件 kg |
| `bonded_compounding_and_forming` | 粘结磁体混配与成型 | conditional | 每个粘结产品数据集必须纳入 | 前景粘结磁体生产 | 转移至精加工的粘结磁体坯件 kg |
| `finishing_magnetization_packaging` | 精加工、充磁、检验和包装 | required | 始终必须纳入；任何不适用操作须明确记录 | 前景最终产品生产 | 合格磁体成品输出 kg |

`sintered_forming_and_firing` 和 `bonded_compounding_and_forming` 至少有一个必须纳入。若表示两条路线，在实施任何已声明的生产份额聚合之前，必须保持路线清单分开。

### 过程：铁氧体粉末制备（`ferrite_powder_preparation`）

#### 输入

##### 产品流

###### 铁氧体前体材料和添加剂（`powder_precursors`）

记录场内粉末制备所消耗的氧化铁、碳酸钡或碳酸锶，以及各类成分调节、烧结、分散或成型添加剂。

- 选定流：针对每种接收前体由前景选择产品流；不规定通用投入 UUID
- 流属性/单位：Mass / kg
- 数量规则：投入过程的实测材料净发放量减去有记录的退库量
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：产品特定（`product_specific`）
- 归一化基准：每 kg 经质量确认铁氧体粉末输出
- 基准类型：过程输出（`process_output`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_powder_materials`
- 来源：`cui-et-al-2022-part-i`

###### 粉末制备能源载体（`powder_energy`）

记录混合、制粒、煅烧、破碎、研磨、分级、干燥、物料输送和排放控制所使用的计量电力和各类燃料。

- 选定流：前景选择的电力和燃料产品流
- 流属性/单位：Energy / kWh 或 MJ，保留计量单位和换算因子
- 数量规则：实测过程能源，或按 `calc_shared_energy` 分配的设施能源
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每 kg 经质量确认铁氧体粉末输出
- 基准类型：过程输出（`process_output`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_powder_utilities`
- 来源：`ec-ceramic-bref-2007`

###### 粉末制备用水（`powder_water`）

记录湿法研磨、浆料处理、清洗和污染控制操作使用的淡水和回用水，并将取水与内部循环水分开。

- 选定流：前景选择的水产品流
- 流属性/单位：Volume / m3 或 Mass / kg，并记录换算基准
- 数量规则：计量进水量，以及单独计量或计算的循环水量
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每 kg 经质量确认铁氧体粉末输出
- 基准类型：过程输出（`process_output`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_powder_utilities`
- 来源：`ec-ceramic-bref-2007`

##### 废物流

##### 基本流

#### 输出

##### 产品流

###### 经质量确认的硬铁氧体粉末（`prepared_ferrite_powder`）

记录放行用于烧结或粘结成型的铁氧体粉末，包括化学组成、干基口径、颗粒规范和内部转移目的地。

- 选定流：前景定义的硬铁氧体粉末中间品；不是成品参考产品流
- 流属性/单位：Mass / kg
- 数量规则：按已声明水分基准实测放行粉末质量
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：产品特定（`product_specific`）
- 归一化基准：每 kg 经质量确认铁氧体粉末输出
- 基准类型：过程输出（`process_output`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_powder_outputs`
- 来源：`cui-et-al-2022-part-i`

##### 废物流

###### 粉末制备残余物和废水（`powder_residues`）

按处理去向记录收集粉尘、不合格粉末、过滤残余物、废水和污泥，包括内部回用数量。

- 选定流：针对各残余物或废水流由前景选择废物流
- 流属性/单位：Mass / kg；保留浓度和密度基准时废水可用 m3
- 数量规则：按去向记录的实测转移量、处理量或库存变化量
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每 kg 经质量确认铁氧体粉末输出
- 基准类型：过程输出（`process_output`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_powder_outputs`
- 来源：`ec-ceramic-bref-2007`

##### 基本流

###### 煅烧和粉末处理直接排放（`powder_direct_emissions`）

分别记录各实测或许可规定的直接空气或水排放，包括燃烧气体、颗粒物以及存在时与成分有关的污染物。

- 选定流：针对各报告物质和环境介质由前景选择基本流
- 流属性/单位：Mass / kg
- 数量规则：归属于本过程的烟道或排口测量、经验证工程计算或法规报告
- 数值来源模式：计算值（`calculated_value`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每 kg 经质量确认铁氧体粉末输出
- 基准类型：过程输出（`process_output`）
- 证据类型：由采集数据计算（`calculated_from_collection`）
- 采集协议：`cp_powder_outputs`
- 来源：`ec-ceramic-bref-2007`

### 过程：烧结磁体成型与烧成（`sintered_forming_and_firing`）

#### 输入

##### 产品流

###### 硬铁氧体粉末和成型助剂（`sintered_powder_and_aids`）

记录转移或购入的硬铁氧体粉末、水、粘结剂、润滑剂和其他成型助剂，并识别湿压或干压以及磁场取向条件。

- 选定流：针对各粉末和成型投入由前景选择产品流
- 流属性/单位：Mass / kg
- 数量规则：进入烧结路线的实测净投入
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：产品特定（`product_specific`）
- 归一化基准：每 kg 放行至精加工的烧结磁体坯件
- 基准类型：过程输出（`process_output`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_sintered_inputs`
- 来源：`cui-et-al-2022-part-i`

###### 烧结路线电力和燃料（`sintered_energy`）

记录压制、脱水或干燥、烧结、受控冷却、输送及排放控制所需电力和各类燃料。

- 选定流：前景选择的电力和燃料产品流
- 流属性/单位：Energy / kWh 或 MJ，保留计量单位和换算因子
- 数量规则：实测过程能源，或按 `calc_shared_energy` 分配的设施能源
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每 kg 放行至精加工的烧结磁体坯件
- 基准类型：过程输出（`process_output`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_sintered_inputs`
- 来源：`cui-et-al-2022-part-i`; `ec-ceramic-bref-2007`

##### 废物流

##### 基本流

#### 输出

##### 产品流

###### 烧结硬铁氧体磁体坯件（`sintered_blanks`）

记录转移至精加工的质量合格烧结坯件，包括路线、取向和干基口径。

- 选定流：前景定义的烧结硬铁氧体磁体中间品；不是成品参考产品流
- 流属性/单位：Mass / kg
- 数量规则：转移至精加工的实测合格坯件质量
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：产品特定（`product_specific`）
- 归一化基准：每 kg 放行至精加工的烧结磁体坯件
- 基准类型：过程输出（`process_output`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_sintered_outputs`
- 来源：`cui-et-al-2022-part-i`

##### 废物流

###### 烧结路线不合格品、粉尘、污泥和废水（`sintered_losses`）

按内部回用、外部回收、处理或处置去向记录生坯和烧后不合格品、收集粉尘、废过滤件、污泥和废水。

- 选定流：针对各材料和处理路线由前景选择废物流
- 流属性/单位：Mass / kg；保留浓度和密度基准时废水可用 m3
- 数量规则：按去向记录的实测不合格、收集和转移量
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每 kg 放行至精加工的烧结磁体坯件
- 基准类型：过程输出（`process_output`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_sintered_outputs`
- 来源：`ec-ceramic-bref-2007`

##### 基本流

###### 烧结与成型直接排放（`sintered_direct_emissions`）

按物质和环境介质记录直接烟道和无组织排放，包括燃料燃烧排放、颗粒物，以及适用时去除有机成型助剂产生的排放。

- 选定流：针对各报告物质和环境介质由前景选择基本流
- 流属性/单位：Mass / kg
- 数量规则：归属于烧结路线的测量、经验证工程计算或法规记录
- 数值来源模式：计算值（`calculated_value`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每 kg 放行至精加工的烧结磁体坯件
- 基准类型：过程输出（`process_output`）
- 证据类型：由采集数据计算（`calculated_from_collection`）
- 采集协议：`cp_sintered_outputs`
- 来源：`ec-ceramic-bref-2007`

### 过程：粘结磁体混配与成型（`bonded_compounding_and_forming`）

#### 输入

##### 产品流

###### 硬铁氧体粉末、粘结剂和混配添加剂（`bonded_materials`）

记录已声明配方中使用的铁氧体粉末、聚合物或弹性体粘结剂和每种添加剂，并保留配方质量分数和供应商批次身份。

- 选定流：针对各铁氧体粉末、粘结剂和添加剂由前景选择产品流
- 流属性/单位：Mass / kg
- 数量规则：混配和成型净发料实测量减去有记录的退料量
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：产品特定（`product_specific`）
- 归一化基准：每 kg 放行至精加工的粘结磁体坯件
- 基准类型：过程输出（`process_output`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_bonded_inputs`
- 来源：`cui-et-al-2022-part-ii`

###### 粘结路线电力和热能（`bonded_energy`）

记录混配、造粒、模具加热、注射、挤出、压延或压缩、固化或冷却以及污染控制所需电力和热能。

- 选定流：前景选择的电力和能源载体产品流
- 流属性/单位：Energy / kWh 或 MJ，保留计量单位和换算因子
- 数量规则：实测过程能源，或按 `calc_shared_energy` 分配的设施能源
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每 kg 放行至精加工的粘结磁体坯件
- 基准类型：过程输出（`process_output`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_bonded_inputs`
- 来源：`cui-et-al-2022-part-ii`

##### 废物流

##### 基本流

#### 输出

##### 产品流

###### 粘结硬铁氧体磁体坯件（`bonded_blanks`）

记录放行的模塑、挤出、压延或压缩粘结坯件，包括粘结剂配方、取向方法和转移质量。

- 选定流：前景定义的粘结硬铁氧体磁体中间品；不是成品参考产品流
- 流属性/单位：Mass / kg
- 数量规则：转移至精加工的实测合格坯件质量
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：产品特定（`product_specific`）
- 归一化基准：每 kg 放行至精加工的粘结磁体坯件
- 基准类型：过程输出（`process_output`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_bonded_outputs`
- 来源：`cui-et-al-2022-part-ii`

##### 废物流

###### 粘结路线清机料、边料和不合格材料（`bonded_losses`）

按内部回用、外部回收或处置路线记录混配残余物、模塑清机料、修边料、切屑和不合格产品。

- 选定流：针对各材料和处理路线由前景选择废物流
- 流属性/单位：Mass / kg
- 数量规则：扣除有记录内部回用量后的实测收集和转移记录
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每 kg 放行至精加工的粘结磁体坯件
- 基准类型：过程输出（`process_output`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_bonded_outputs`
- 来源：`cui-et-al-2022-part-ii`

##### 基本流

###### 粘结路线直接排放（`bonded_direct_emissions`）

按物质和环境介质记录混配、加热、固化、成型和污染控制操作产生的直接挥发性、颗粒物或其他应报告排放。

- 选定流：针对各报告物质和环境介质由前景选择基本流
- 流属性/单位：Mass / kg
- 数量规则：归属于粘结路线的测量、经验证工程计算或法规记录
- 数值来源模式：计算值（`calculated_value`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每 kg 放行至精加工的粘结磁体坯件
- 基准类型：过程输出（`process_output`）
- 证据类型：由采集数据计算（`calculated_from_collection`）
- 采集协议：`cp_bonded_outputs`
- 来源：`cui-et-al-2022-part-ii`; `ec-ceramic-bref-2007`

### 过程：精加工、充磁、检验和包装（`finishing_magnetization_packaging`）

#### 输入

##### 产品流

###### 路线特定磁体坯件（`magnet_blanks`）

记录从已声明路线转入的烧结或粘结坯件。内部转移质量不得与外购磁体成品合并。

- 选定流：`sintered_blanks` 或 `bonded_blanks`，保留路线身份
- 流属性/单位：Mass / kg
- 数量规则：精加工接收的实测内部转移质量
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：产品特定（`product_specific`）
- 归一化基准：每 kg 合格磁体成品输出
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_finishing_inputs`
- 来源：`cui-et-al-2022-part-i`; `cui-et-al-2022-part-ii`

###### 精加工耗材、涂层材料、水和包装（`finishing_materials`）

记录使用的研磨或切割介质、水、清洗剂、涂层材料、粘合剂以及初级和次级包装。

- 选定流：针对每种消耗材料由前景选择产品流
- 流属性/单位：Mass / kg；保留换算基准时水可用 Volume / m3
- 数量规则：按材料和批次记录的实测净消耗量
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：产品特定（`product_specific`）
- 归一化基准：每 kg 合格磁体成品输出
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_finishing_inputs`
- 来源：`ec-ceramic-bref-2007`

###### 精加工和充磁电力（`finishing_energy`）

记录切割、研磨、清洗、涂覆或固化、充磁、检验、输送和包装使用的电力。

- 选定流：前景选择的电力产品流
- 流属性/单位：Energy / kWh
- 数量规则：实测过程电力，或按 `calc_shared_energy` 分配的设施电力
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每 kg 合格磁体成品输出
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_finishing_inputs`
- 来源：`cui-et-al-2022-part-i`; `ec-ceramic-bref-2007`

##### 废物流

##### 基本流

#### 输出

##### 产品流

###### 合格永久陶瓷或铁氧体磁体成品（`reference_product`）

仅记录经尺寸和磁性能检验后放行的磁体，并保留已声明路线和全部必需限定信息。

- 选定流：永久陶瓷或铁氧体磁铁 `59fbfc86-a725-413c-b3df-d6f7683036d5`
- 流属性/单位：Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- 数量规则：合格产品净实测质量；归一化为 1 kg 参考流
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：产品特定（`product_specific`）
- 归一化基准：1 kg 合格磁体成品输出
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_quality_release`
- 来源：`iec-60404-8-1-2023`

##### 废物流

###### 精加工不合格品、边角料、研磨残余物和废水（`finishing_losses`）

按去向和内部回用状态记录不合格磁体、切屑、收集粉尘、研磨污泥、废磨料、废水、涂层残余物和包装废物。

- 选定流：针对各材料和处理路线由前景选择废物流
- 流属性/单位：Mass / kg；保留浓度和密度基准时废水可用 m3
- 数量规则：扣除有记录内部回用量后的实测收集、转移和处理记录
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每 kg 合格磁体成品输出
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_finishing_outputs`
- 来源：`ec-ceramic-bref-2007`

##### 基本流

###### 精加工和涂层直接排放（`finishing_direct_emissions`）

按物质和环境介质记录存在的精加工和涂层直接颗粒物、挥发性或水体排放。

- 选定流：针对各报告物质和环境介质由前景选择基本流
- 流属性/单位：Mass / kg
- 数量规则：归属于精加工的测量、经验证工程计算或法规记录
- 数值来源模式：计算值（`calculated_value`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每 kg 合格磁体成品输出
- 基准类型：参考流（`reference_flow`）
- 证据类型：由采集数据计算（`calculated_from_collection`）
- 采集协议：`cp_finishing_outputs`
- 来源：`ec-ceramic-bref-2007`

## 7. 分配与共产品处理

| rule_id | 适用对象 | 规则 | source_ids |
| --- | --- | --- | --- |
| `allocation_avoidance` | 多产品设备和共享操作 | 首先通过过程拆分、独立计量、生产周期记录或适用的系统扩展避免分配。记录归属于已声明磁体产品的独立投入与产出。 | `iso-14044-2006`; `eu-pef-2021-2279` |
| `allocation_physical` | 无法拆分的共享负担 | 当设备时间、计量能源、产量或处理质量等可量化物理关系能够代表负担驱动因素时，据此分配。不得自动按产品质量分配全部负担。 | `eu-pef-2021-2279` |
| `allocation_other` | 不存在可辩护物理关系 | 只有在记录其他关系的情况下才可使用，包括仅把经济分配作为最后选择；披露价格、期间、产品、理由，以及相对于合理物理基准的敏感性结果。 | `eu-pef-2021-2279` |
| `recycle_and_rework` | 内部粉末、边料、不合格品和返工 | 仅从外部废物输出中扣除可证明返回同一前景过程的数量。保留回收和再处理造成的能源、水、排放与损失；不得把内部回用记为避免生产原生产品的抵扣。 | `ec-ceramic-bref-2007` |

## 8. 前景数据采集、计算与质量规则

### 数据采集协议

| protocol_id | process_id | flow_role | record_type | raw_fields | collection_method | unit | frequency | temporal_coverage | site_scope | aggregation_rule | quality_evidence |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| `cp_powder_materials` | `ferrite_powder_preparation` | 前体材料和添加剂 | 采购、仓库发料、退料和配方记录 | material id; supplier lot; chemistry; moisture basis; gross issue; return; unit | 将校准秤记录和库存交易与各粉末批次核对 | kg | 每批；每月核对 | 完整报告期 | 范围内所有场内粉末生产线 | 按材料计算净发料质量并除以放行粉末质量 | 校准记录；供应商规范；库存核对 |
| `cp_powder_utilities` | `ferrite_powder_preparation` | 电力、燃料和水 | 仪表、燃料发票和运行日志 | meter id; start/end reading; fuel quantity; water withdrawal; recirculation; operating hours | 优先直接分表计量；否则应用 `calc_shared_energy` | kWh; MJ; m3 | 连续或每批；每月核对 | 完整报告期 | 纳入的粉末制备和控制设施 | 按公用工程求和，扣除经核实外送量，并归一化至放行粉末 | 仪表校准；发票核对；分配记录 |
| `cp_powder_outputs` | `ferrite_powder_preparation` | 粉末输出、残余物、废水和排放 | 称重单、转移记录、废物联单、烟道/排口测试 | powder mass; dry basis; residue mass; destination; wastewater volume; substance; concentration; flow rate | 称量输出，并采用经验证监测或法规计算确定排放 | kg; m3 | 每次转移；按许可要求的监测频率 | 完整报告期 | 纳入的粉末生产线和控制装置 | 按输出、去向、物质和环境介质分别聚合 | 秤校准；交接链；实验室与许可报告 |
| `cp_sintered_inputs` | `sintered_forming_and_firing` | 粉末、助剂、水、电力和燃料 | 批记录、仓库发料、仪表和窑炉日志 | powder lot; additive; water; meter readings; fuel; press route; orientation; kiln cycle | 将批配方和公用工程记录与放行坯件批次核对 | kg; kWh; MJ; m3 | 每批或每个窑炉周期 | 完整报告期 | 全部纳入的烧结生产线 | 按已声明产品牌号和路线聚合后再归一化 | 配方批准；仪表校准；窑炉追溯记录 |
| `cp_sintered_outputs` | `sintered_forming_and_firing` | 坯件、不合格品、废物、废水和排放 | 转移称重、不合格记录、废物联单、监测记录 | blank mass; reject stage; recycle mass; waste destination; wastewater; emitted substance | 称量转移和损失；根据保留的原始测量值计算受监测排放 | kg; m3 | 每批或每次转移；按许可要求的监测频率 | 完整报告期 | 全部纳入的烧结生产线和控制设施 | 按产品、回用、处理路线、物质和环境介质分别聚合 | 秤校准；质量核对；实验室与许可报告 |
| `cp_bonded_inputs` | `bonded_compounding_and_forming` | 铁氧体粉末、粘结剂、添加剂和能源 | 配方、发料、退料、仪表和设备日志 | powder lot; binder type; additive; issued/returned mass; machine energy; cycle or run time | 将批准配方和实测消耗与各产品生产批次核对 | kg; kWh; MJ | 每个混配或成型批次 | 完整报告期 | 全部纳入的粘结磁体生产线 | 按配方和成型路线聚合后再归一化 | 配方批准；供应商规范；仪表和秤校准 |
| `cp_bonded_outputs` | `bonded_compounding_and_forming` | 坯件、清机料、边料、不合格品和排放 | 转移称重、废料记录、回用记录、监测记录 | accepted blank mass; purge; trim; reject; recycle; destination; substance; concentration | 称量全部物料输出，并根据保留测量值计算排放 | kg | 每批或每次转移；按许可要求的监测频率 | 完整报告期 | 全部纳入的粘结磁体生产线和控制设施 | 按输出、回用、废物路线、物质和环境介质分别聚合 | 秤校准；废料核对；实验室或许可报告 |
| `cp_finishing_inputs` | `finishing_magnetization_packaging` | 坯件、耗材、水、电力和包装 | 转移、发料、退料、仪表和工单记录 | blank mass; consumable; coating; water; electricity; packaging; work order | 将生产线投入和公用工程仪表与质量放行批次核对 | kg; kWh; m3 | 每批；每月核对 | 完整报告期 | 全部纳入的精加工、充磁和包装生产线 | 按材料和路线计算净消耗并除以合格输出 | 校准；工单核对；批准物料清单 |
| `cp_finishing_outputs` | `finishing_magnetization_packaging` | 不合格品、残余物、废水和直接排放 | 不合格记录、废物联单、排水和空气监测记录 | reject mass; offcut; sludge; wastewater; destination; substance; concentration; flow rate | 称量转移，并根据经验证测量值计算排放 | kg; m3 | 每次转移；按许可要求的监测频率 | 完整报告期 | 纳入的精加工生产线和控制设施 | 按路线、去向、物质和环境介质聚合 | 秤校准；交接链；实验室与许可报告 |
| `cp_quality_release` | `finishing_magnetization_packaging` | 合格参考产品和规范证据 | 校准秤、批放行、尺寸检验和磁性能测试记录 | lot id; route; net mass; count; grade; dimensions; tolerance; magnetic test; magnetization pattern; coating; acceptance status | 称量合格输出，并关联已放行的检验和磁性能测试记录 | kg | 每个放行批次 | 完整报告期 | 数据集表示的全部产品生产线 | 仅求和合格净质量；保留分路线总量 | 秤校准；检验系统校准；签署的放行记录；测试报告 |

### 计算规则

| rule_id | Applies to | Formula or rule | Inputs | Output | source_ids |
| --- | --- | --- | --- | --- | --- |
| `calc_reference_output` | 参考产品 | 求和质量放行后的合格批次净质量；排除包装和全部不合格或返工质量。以该质量归一化清单。 | accepted lot masses; rejection and rework status | kg accepted finished magnet and normalization denominator | `iec-60404-8-1-2023` |
| `calc_material_consumption` | 材料投入 | 净消耗质量 = 期初库存 + 接收量 - 期末库存 - 有记录的退料或转出量；具备条件时与批次发料记录核对。 | inventory and lot issue records | kg net material consumed by input | `iso-14044-2006` |
| `calc_shared_energy` | 共享公用工程 | 优先直接分表计量。无法直接计量时，共享公用工程量 = 剔除范围外负荷后的计量总量 × 已记录因果驱动份额。 | meter total; out-of-scope loads; equipment time, throughput, or other causal driver | kWh or MJ attributable to the product | `eu-pef-2021-2279` |
| `calc_direct_emission` | 烟道和排口测量 | 排放质量 = 经验证浓度 × 校正后流量 × 运行时间，并保留单位、水分、温度、压力和检出限处理。 | concentration; flow; operating time; correction data | kg substance by compartment | `ec-ceramic-bref-2007` |
| `calc_route_weighting` | 表示一条以上路线的数据集 | 仅在各路线清单分别完成后聚合；加权数量 = sum(route amount multiplied by accepted-output share)。 | route-specific normalized inventories; accepted output by route | production-share-weighted inventory | `iso-14044-2006` |
| `calc_mass_balance` | 每个过程和完整前景系统 | 采用一致水分和粘结剂基准，将材料投入与产品输出、外送废物、实测排放、内部回用和库存变化核对；调查残差而不是强制闭合。 | all material inputs and outputs; inventory changes | documented mass-balance residual and explanation | `iso-14044-2006` |

### 数据质量要求

| requirement_id | Applies to | Requirement | Evidence |
| --- | --- | --- | --- |
| `dq_identity` | 参考产品 | 将每个所表示批次关联到路线、化学组成或牌号、取向、充磁状态或极型、几何形状、公差、涂层，以及相关时的粘结配方。 | signed lot release and product specification |
| `dq_technology` | 过程覆盖 | 证明所选过程和成型方法代表实际烧结或粘结技术；报告生产份额，不得替换为不具代表性的路线。 | process map, work orders, route-separated production totals |
| `dq_time` | 全部前景数据 | 使用连续且有代表性的报告期，通常至少 12 个月；若采用较短生产周期，应说明理由并记录季节性、停机和异常运行。 | meter coverage, production calendar, exception log |
| `dq_geography` | 场址和上游数据 | 记录制造场址和地理范围，并选择与所表示供应情景匹配的上游电力、燃料、水、材料和处理数据集。 | site metadata, supplier origin, dataset-selection record |
| `dq_completeness` | 投入、产出和控制设施 | 核对采购、仪表、生产、不合格、废物、废水和排放记录；记录缺失记录和排除项，不得使用无依据的零值。 | completeness matrix and mass/energy reconciliation |
| `dq_measurement` | 前景记录 | 使用经校准仪表和秤以及经验证实验室或法规方法；保留原始读数、单位、换算、检出限和不确定性。 | calibration certificates, laboratory reports, calculation workbook |
| `dq_allocation` | 共享或多输出过程 | 保留所选分配规则要求的过程拆分证据、驱动数据、分配因子和敏感性结果。 | meter map, driver calculation, allocation and sensitivity record |
| `dq_external_data` | 上游和处理数据集 | 记录数据集名称、版本、地理范围、参考年、技术、提供方以及任何替代或代理理由。 | dataset register and representativeness review |

## 9. 校验规则

| rule_id | 适用对象 | 规则 | source_ids |
| --- | --- | --- | --- |
| `validate_reference_identity` | 参考流 | 要求准确的成品流 UUID、Mass 属性 UUID、Units of mass 单位组 UUID、kg 单位及全部必需限定信息；拒绝以金属磁体、生坯、铁氧体粉末或通用磁体流替代。 | `iec-60404-8-1-2023` |
| `validate_route_completeness` | 过程图 | 要求明确识别烧结、粘结或分开加权的混合路线覆盖；要求相应成型过程以及共同的精加工、充磁、检验和包装过程。 | `cui-et-al-2022-part-i`; `cui-et-al-2022-part-ii` |
| `validate_internal_transfers` | 粉末和坯件流 | 确认内部铁氧体粉末与坯件转移在过程之间平衡，且未重复计为购入外部投入或最终产品。 | `iso-14044-2006` |
| `validate_mass_balance` | 每个过程和完整系统 | 要求按一致水分和粘结剂基准记录物料平衡；标记无法解释的残差以及废物或排放中任何无依据零值。 | `iso-14044-2006` |
| `validate_energy_and_controls` | 热处理与成型操作 | 要求记录电力、使用的每种燃料、适用时的水、污染控制公用工程、收集残余物、废水和直接排放，或提供有证据支持的不适用判断。 | `ec-ceramic-bref-2007` |
| `validate_quality_release` | 合格成品输出 | 要求提供与已声明牌号和充磁状态相适应的批次级尺寸及磁性能测试证据，并从参考质量中排除不合格或未放行产品。 | `iec-60404-8-1-2023` |
| `validate_allocation` | 共享和多输出过程 | 要求分配层级、因果驱动因素、因子、期间、受影响输出及敏感性披露；未解释的仅按质量或经济分配应失败。 | `eu-pef-2021-2279` |
| `validate_data_quality` | 数据包 | 要求技术、地理、时间、完整性、精度和不确定性披露，以及第 8 节列出的证据。 | `eu-pef-2021-2279`; `iso-14044-2006` |

## 10. 发布数据集画像

| 字段 | 值 |
| --- | --- |
| dataset_role | 永久陶瓷或硬铁氧体磁体成品的前景制造数据集 |
| downstream_use | 当产品和路线限定信息匹配时，可发布为 `secondary_dataset`，并作为电机、扬声器、电源、消费电子和其他系统的 `background_dataset` |
| allowed_use | 从摇篮到工厂门或更宽产品系统研究；须按研究目标补充兼容的上游材料与能源数据集，以及下游运输、装配、使用和生命周期结束过程 |
| excluded_use | 替代金属、稀土、铝镍钴、电磁铁、软磁铁氧体、粉末、生坯或含磁体组件数据集；限定信息不匹配时用于形状或牌号特定声明；在未向下游建模时用于使用阶段或生命周期结束声明 |
| required_metadata | PCR id；准确参考流 UUID；路线和成型方法；铁氧体化学组成和牌号；取向；充磁状态和极型；几何形状和公差；涂层；粘结磁体的粘结剂与配方份额；起始材料状态；场址；地理范围；参考期；产量；分配；上游数据集登记表 |
| required_quality_disclosure | 仪表和秤覆盖；校准；批次和供应商覆盖；路线份额；物料与能源核对；废物和排放覆盖；分配和敏感性；技术、地理、时间、完整性、精度、不确定性、排除项、代理和数据缺口 |
| update_trigger | 铁氧体化学组成或牌号、粘结剂配方、成型或取向方法、窑炉或固化技术、燃料或电力供应、精加工或涂层、充磁规范、场址、分配、污染控制、上游数据集或报告期发生重大变化 |

## 11. 数据源

| Source id | Type | Reference | Used for |
| --- | --- | --- | --- |
| `iec-60404-8-1-2023` | standard | IEC 60404-8-1:2023, Magnetic materials - Part 8-1: Specifications for individual materials - Permanent magnet (magnetically hard) materials. https://webstore.iec.ch/en/publication/68440（访问日期：2026-08-09） | 磁体成品磁性能和尺寸公差质量声明 |
| `iso-14044-2006` | standard | ISO 14044:2006, Environmental management - Life cycle assessment - Requirements and guidelines. https://www.iso.org/standard/38498.html（2022 年确认现行；访问日期：2026-08-09） | LCI 范围、清单一致性、分配、物料平衡、数据质量和报告框架 |
| `eu-pef-2021-2279` | official_guidance | Commission Recommendation (EU) 2021/2279 on the use of the Environmental Footprint methods, Annex I. https://eur-lex.europa.eu/eli/reco/2021/2279/oj（访问日期：2026-08-09） | 功能单位、系统边界、分配层级、代表性、数据质量和披露 |
| `ec-ceramic-bref-2007` | official_guidance | European Commission, Reference Document on Best Available Techniques in the Ceramic Manufacturing Industry, August 2007. https://bureau-industrial-transformation.jrc.ec.europa.eu/sites/default/files/2019-11/cer_bref_0807.pdf（访问日期：2026-08-09） | 技术陶瓷过程分解；能源和水投入；粉尘、燃烧排放、废水、残余物、精加工和污染控制覆盖 |
| `cui-et-al-2022-part-i` | literature | Cui, J. et al. (2022), Manufacturing Processes for Permanent Magnets: Part I-Sintering and Casting, JOM 74, 1279-1295. https://doi.org/10.1007/s11837-022-05156-9 | 铁氧体产品范围，以及烧结路线的粉末制备、成型、烧结、机械加工、充磁和检验 |
| `cui-et-al-2022-part-ii` | literature | Cui, J. et al. (2022), Manufacturing Processes for Permanent Magnets: Part II-Bonding and Emerging Methods, JOM 74, 2492-2506. https://doi.org/10.1007/s11837-022-05188-1 | 粘结铁氧体材料，以及压延、注射成型、挤出、压缩粘结、精加工和路线区分 |
