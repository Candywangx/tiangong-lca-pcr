---
pcr_id: pcr.food-products-beverages-and-tobacco-textiles-apparel-and-leather-products.meat-fish-fruits-vegetables-oils-and-fats.oil-cake-and-other-solid-residues-of-vegetable-fats-or-oils
language: zh-CN
status: candidate
sync_with: pcr.en-US.md
---

# 植物油脂油饼及其他固体残余物

## 1. 范围与适用性

本 PCR 适用于通过机械压榨、螺旋压榨、液压压榨、溶剂萃取或预压—溶剂联合路线，从油籽或含油果实中分离植物油时直接产生的可销售固体产品。覆盖产品包括压榨饼、油饼、萃取固体残余物，以及产品仍属于该提油残余物类别时的成品粕。前景边界包括含油原料接收与制备、提油、路线特定的溶剂回收或压榨、残余物调理，以及生产工厂内的储存和装运。

本 PCR 不包括未经提油的整粒或仅经研磨的油籽粉/粕；归入可可产品制造的可可压榨饼；动物脂肪固体残余物；植物蜡、脱脂残渣、皂脚、酸化油、废白土及其他精炼残余物；以及按废物管理而非作为可销售共产品的物料。粗油分离后的油脂精炼、饲料配制、工厂大门以外运输以及动物或其他用户使用均在前景边界之外。

具体数据包必须识别含油物种、提取路线、是否脱壳或回添壳、所用溶剂、后处理状态、预期市场用途以及地理和时间范围。声明为饲料级时触发本 PCR 的饲料安全和可追溯要求；本 PCR 本身不构成法定饲料合规认证。

## 2. 产品类别识别

| 字段 | 值 |
| --- | --- |
| canonical_pcr_id | pcr.food-products-beverages-and-tobacco-textiles-apparel-and-leather-products.meat-fish-fruits-vegetables-oils-and-fats.oil-cake-and-other-solid-residues-of-vegetable-fats-or-oils |
| classification_refs | CPC 3.0：21910，精确映射语境 |
| covered_products | 从已声明油籽或含油果实中提取植物油脂产生的可销售压榨饼、油饼、萃取固体残余物和按路线完成后处理的粕 |
| excluded_products | 未提油的油籽粉/粕；可可加工饼；动物脂肪残余物；蜡、脱脂残渣、皂脚、酸化油、废白土及其他油脂精炼残余物；弃置废物 |
| representative_product | 机械提取芥菜籽油饼，作为具体参考流代表；本 PCR 仍适用于已声明的更广产品类别 |
| production_route | 机械压榨、带溶剂回收的溶剂萃取，或预压—溶剂联合提取；并视情况进行脱溶剂/烘烤、干燥、冷却、研磨、分级、制粒、储存和装运 |
| market_state | 生产工厂大门处的散装、研磨、分级或制粒产品；声明水分、残油、含壳情况、处理状态和预期用途 |

## 3. 参考流

| 字段 | 值 |
| --- | --- |
| What | 提取植物油脂后，提供物料或饲料原料功能的可销售油饼或其他固体残余物 |
| How much | 生产工厂大门处 1 kg 销售状态产品 |
| How well | 符合已声明的物种、路线、水分、残油、含壳量、处理、污染控制和市场等级规格 |
| How long or cycle | 工厂大门放行的一个生产批次；不指定服务持续时间 |
| reference_flow_link | 功能单位由恰好 1 kg 已声明销售状态参考产品实现；另行报告干物质结果，不得以其静默替代销售状态质量 |

| 字段 | 值 |
| --- | --- |
| 参考数量 | 1 kg |
| 参考产品流 | Mustard oil press cake `1fb23bcc-f166-4b96-b451-56264a8af86a` |
| 参考流属性 | Mass `93a60a56-a3c8-11da-a746-0800200b9a66` |
| 参考单位组 | Units of mass `93a60a57-a4c8-11da-a746-0800200c9a66` |
| 参考单位 | kg |
| 必需限定信息 | 含油物种及必要时的品种；提取路线；机械/溶剂/联合路线；使用时的溶剂身份；脱壳和回添壳；水分与干物质分数；残油；处理和烘烤状态；物理形态；饲料/食品/工业等级；设施地点；生产期间 |

构建前景数据包时，`必需限定信息` 中列出的信息应在数据集元数据、过程说明、参考流备注、产品说明或等效数据包字段中明确声明。缺失必需限定信息的数据包视为参考流定义不完整。所选 Tiangong 流是芥菜籽机械压榨饼的代表性精确类别身份；若声明产品并非芥菜籽机械压榨饼，必须选择另一个与类别匹配的 Tiangong 产品流。

## 4. 计量与单位规则

| rule_id | 适用对象 | 必需流属性 | 必需单位 | 规则 |
| --- | --- | --- | --- | --- |
| `reference_mass_as_sold` | 参考产品 | Mass `93a60a56-a3c8-11da-a746-0800200b9a66` | kg | 按工厂大门销售状态质量报告参考数量，并记录对应水分检测结果或已声明水分规格。 |
| `dry_matter_conversion` | 参考产品和固体过程流 | Mass `93a60a56-a3c8-11da-a746-0800200b9a66` | kg dry matter 和 kg as sold | 来源记录为干基时，使用实测水分分别计算销售状态量和干物质量，不得视为可互换。 |
| `utility_conversion` | 电力、蒸汽、燃料和水 | 为具体公用工程流选择的相关 Tiangong 属性 | kWh、MJ、kg 或 m3（按记录） | 保留计量单位并记录换算因子；共享仪表按已声明生产批次分配后方可归一化。 |
| `solvent_balance` | 溶剂萃取路线 | Mass `93a60a56-a3c8-11da-a746-0800200b9a66` | kg | 分别记录新购溶剂、返回萃取的回收溶剂、库存变化、产品/废物中溶剂及释放量；净补充量为采购量减库存增加量和对外返还溶剂。 |

## 5. 系统边界

### 边界概化

| 字段 | 值 |
| --- | --- |
| declared_starting_condition | 油籽或含油果实到达提取设施，声明进厂质量、水分、可得时的含油量、来源、批次身份以及任何前序干燥或脱壳 |
| starting_condition_role | 前景提油系统的上游产品投入 |
| product_classification_scope | 提取植物油脂产生的可销售固体残余物；排除相邻非提取粕、精炼残余物、蜡和动物脂肪残余物 |
| recursive_input_rule | 用于掺混或再加工的外购同类油饼或萃取残余物，只作为带独立上游数据集的外部产品投入记录一次；不得在本前景数据包内递归重建其提取历史 |
| upstream_dataset_requirement | 对每种接收含油原料和重要公用工程使用地理、技术和时间代表性上游数据集；披露代理使用及任何排除的种植或预处理阶段 |
| disclosure | 声明设施大门、产品和共产品切分点、路线、溶剂循环、内部回用、已纳入残余物后处理、上游覆盖、基础设施政策、运输覆盖及排除的下游使用 |

| rule_id | 适用对象 | 规则 | source_ids |
| --- | --- | --- | --- |
| `boundary_extraction_chain` | 所有路线 | 纳入接收/输送、制备、提取以及使固体残余物达到工厂大门可销售状态所需的调理；实际发生时包括清理、脱壳、破碎、调质、轧胚、压榨、萃取、脱溶剂/烘烤、干燥、冷却、研磨、分级、制粒、储存和装运。 | `epa-ap42-vegetable-oil-1995` |
| `boundary_route_specific` | 路线选择 | 仅纳入声明路线实际采用的机械和溶剂操作。对于溶剂萃取，纳入溶剂回收、冷凝液处理及实测无组织或有组织释放；不得将回收溶剂同时建模为避免生产和负投入。 | `us-epa-solvent-extraction-neshap`; `epa-ap42-vegetable-oil-1995` |
| `boundary_upstream_and_downstream` | 生命周期覆盖 | 将接收的含油原料和外购公用工程连接至上游数据集。排除粗油精炼、饲料配制、工厂大门以外配送和产品使用，除非研究明确扩展边界并单独报告这些增加阶段。 | `eu-pef-2021-2279` |
| `boundary_waste_and_internal_recycling` | 废物和内部循环 | 废物与释放在跨越前景边界时记录。回收溶剂和内部回流中间固体保留在过程平衡内；发布交换集仅记录净外部投入产出，但保留总循环记录用于 QA。 | `epa-ap42-vegetable-oil-1995`; `mass-balance-identity` |

## 6. 过程清单结构

### 过程图

| process_id | 过程名称 | 纳入状态 | 纳入条件 | 建模角色 | 定量参考 |
| --- | --- | --- | --- | --- | --- |
| `oilseed_preparation` | 含油原料接收与制备 | `required` | 始终纳入报告设施实际实施的制备 | 前景接收、清理、可选干燥/脱壳、粒度减小、调质和轧胚 | kg 已制备含油原料 |
| `mechanical_extraction` | 机械提油 | `conditional` | 螺旋压榨、挤压、液压压榨或预压阶段适用时纳入 | 前景分离压榨油和压榨饼 | kg 压榨排出固体 |
| `solvent_extraction` | 溶剂萃取与回收 | `conditional` | 有机溶剂接触已制备种子或预压饼时纳入 | 前景萃取、油/溶剂分离、溶剂回收及含溶剂固体转移 | kg 含溶剂萃取固体 |
| `residue_finishing` | 残余物调理与工厂放行 | `required` | 始终纳入达到已声明可销售状态所需的后处理 | 前景脱溶剂/烘烤（适用时）、干燥、冷却、研磨/分级/制粒、储存和装运 | 1,000 kg 销售状态参考产品 |

### 过程：含油原料接收与制备（`oilseed_preparation`）

#### 输入

##### 产品流

###### 接收含油原料（`received_oil_material`）

油籽或含油果实携带其上游负荷跨越设施边界。采集批次质量和水分；当用于产率或质量计算时采集含油量和杂质。

- 选定流：类别和来源特定的油籽或含油果实产品流
- 流属性/单位：Mass / kg
- 数量规则：归属于报告生产批次的各批次实测净接收质量
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：产品特定（`product_specific`）
- 归一化基准：每 1,000 kg 销售状态参考产品
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_material_receipts`
- 来源：`epa-ap42-vegetable-oil-1995`

###### 制备用电（`preparation_electricity`）

输送、吸风、破碎、脱壳、研磨、调质辅助和轧胚用电由专用电表计量或通过共享电表分配。

- 选定流：地理和电压特定的电力产品流
- 流属性/单位：Energy / kWh
- 数量规则：生产批次的实测或分配电力
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每 1,000 kg 销售状态参考产品
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_utilities`
- 来源：`epa-ap42-vegetable-oil-1995`

##### 废物流

#### 输出

##### 产品流

###### 已制备含油原料（`prepared_oil_material`）

已制备原料是用于产率和质量平衡控制的内部中间体，并送往已声明提取路线。

- 选定流：场址特定的已制备含油原料中间体
- 流属性/单位：Mass / kg
- 数量规则：实测转移质量，或接收质量减去实测去除物和库存变化
- 数值来源模式：计算值（`calculated_value`）
- 适用范围：产品特定（`product_specific`）
- 归一化基准：每 1,000 kg 销售状态参考产品
- 基准类型：参考流（`reference_flow`）
- 证据类型：根据采集计算（`calculated_from_collection`）
- 采集协议：`cp_mass_outputs`
- 来源：`mass-balance-identity`

##### 废物流

###### 去除杂质和不合格种子（`preparation_rejects`）

按去向和处理路线记录离开前景过程的杂质、损伤种子和不可销售清理拒收物。

- 选定流：按去向区分的生物源或混合制备废物流
- 流属性/单位：Mass / kg
- 数量规则：按处置去向实测的拒收物质量
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每 1,000 kg 销售状态参考产品
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_mass_outputs`
- 来源：`epa-ap42-vegetable-oil-1995`

##### 基本流

###### 制备颗粒物向空气释放（`preparation_particulate_air`）

记录输送、干燥、吸风和粒度减小环节经控制设施后的实测或许可颗粒物释放。

- 选定流：粒径和环境介质特定的颗粒物基本流
- 流属性/单位：Mass / kg
- 数量规则：报告批次的烟道/无组织测量或有文件支持的工程计算
- 数值来源模式：计算值（`calculated_value`）
- 适用范围：技术特定（`technology_specific`）
- 归一化基准：每 1,000 kg 销售状态参考产品
- 基准类型：参考流（`reference_flow`）
- 证据类型：根据采集计算（`calculated_from_collection`）
- 采集协议：`cp_air_emissions`
- 来源：`epa-ap42-vegetable-oil-1995`

### 过程：机械提油（`mechanical_extraction`）

#### 输入

##### 产品流

###### 进入压榨机的已制备原料（`press_feed`）

记录进入压榨机的已制备含油原料，作为路线特定质量平衡投入。

- 选定流：场址特定的已制备含油原料中间体
- 流属性/单位：Mass / kg
- 数量规则：实测压榨进料质量
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：产品特定（`product_specific`）
- 归一化基准：每 1,000 kg 销售状态参考产品
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_mass_outputs`
- 来源：`mass-balance-identity`

###### 压榨用电与热（`pressing_utilities`）

压榨用电及可归属的调质热在来源台账中按公用工程分别记录，仅为展示才汇总。

- 选定流：地理和技术特定的电力、蒸汽或燃料产品流
- 流属性/单位：Energy / kWh 或 MJ
- 数量规则：压榨的实测或分配公用工程消耗
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：技术特定（`technology_specific`）
- 归一化基准：每 1,000 kg 销售状态参考产品
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_utilities`
- 来源：`epa-ap42-vegetable-oil-1995`

##### 废物流

#### 输出

##### 产品流

###### 压榨粗植物油（`expressed_crude_oil`）

粗油是共享提取操作的共产品，在下游精炼之前计量。

- 选定流：油籽特定的粗植物油产品流
- 流属性/单位：Mass / kg
- 数量规则：按有记录的库存变化修正的实测粗油产出
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：产品特定（`product_specific`）
- 归一化基准：每 1,000 kg 销售状态参考产品
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_mass_outputs`
- 来源：`eu-pef-2021-2279`; `mass-balance-identity`

###### 送后处理的压榨饼（`press_cake_intermediate`）

压榨饼在干燥、冷却、研磨、制粒或掺混之前计量。

- 选定流：油籽特定的压榨饼中间体
- 流属性/单位：Mass / kg
- 数量规则：实测压榨饼产出和水分
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：产品特定（`product_specific`）
- 归一化基准：每 1,000 kg 销售状态参考产品
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_mass_outputs`
- 来源：`fao-oilseeds-postharvest`; `mass-balance-identity`

##### 废物流

##### 基本流

### 过程：溶剂萃取与回收（`solvent_extraction`）

#### 输入

##### 产品流

###### 已制备胚片或预压饼（`solvent_extraction_feed`）

采集进入溶剂萃取的物料质量和水分，用于提取及溶剂平衡。

- 选定流：场址特定的已制备胚片或预压饼中间体
- 流属性/单位：Mass / kg
- 数量规则：实测萃取器进料
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：产品特定（`product_specific`）
- 归一化基准：每 1,000 kg 销售状态参考产品
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_mass_outputs`
- 来源：`epa-ap42-vegetable-oil-1995`

###### 净萃取溶剂补充量（`solvent_makeup`）

跨越设施边界的新鲜有机溶剂按扣除对外返还溶剂后的净量报告，并与内部回收循环分开。

- 选定流：已声明的萃取溶剂产品流，适用时通常为 n-hexane
- 流属性/单位：Mass / kg
- 数量规则：采购溶剂减库存增加量和对外返还溶剂，并与产品、废物和释放记录核对
- 数值来源模式：计算值（`calculated_value`）
- 适用范围：技术特定（`technology_specific`）
- 归一化基准：每 1,000 kg 销售状态参考产品
- 基准类型：参考流（`reference_flow`）
- 证据类型：根据采集计算（`calculated_from_collection`）
- 采集协议：`cp_solvent_balance`
- 来源：`us-epa-solvent-extraction-neshap`; `epa-ap42-vegetable-oil-1995`; `mass-balance-identity`

###### 溶剂萃取公用工程（`solvent_extraction_utilities`）

电力、直接或间接蒸汽、燃料、冷却水及其他外购公用工程在归一化之前分别记录。

- 选定流：地理和技术特定的电力、蒸汽、燃料和水产品流
- 流属性/单位：Energy 或 Mass / kWh、MJ、kg 或 m3
- 数量规则：萃取、蒸馏、冷凝、回收和转移的实测或分配公用工程消耗
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：技术特定（`technology_specific`）
- 归一化基准：每 1,000 kg 销售状态参考产品
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_utilities`
- 来源：`epa-ap42-vegetable-oil-1995`

##### 废物流

#### 输出

##### 产品流

###### 溶剂萃取粗油（`solvent_crude_oil`）

脱溶剂粗油是共产品，在储存或下游精炼之前计量。

- 选定流：油籽特定的粗植物油产品流
- 流属性/单位：Mass / kg
- 数量规则：按库存变化修正的实测脱溶剂粗油产出
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：产品特定（`product_specific`）
- 归一化基准：每 1,000 kg 销售状态参考产品
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_mass_outputs`
- 来源：`eu-pef-2021-2279`; `epa-ap42-vegetable-oil-1995`

###### 送后处理的萃取固体（`extracted_solids_intermediate`）

含溶剂或已脱溶剂的萃取固体在已声明的残余物后处理交接点计量，并披露准确状态。

- 选定流：油籽和状态特定的萃取固体中间体
- 流属性/单位：Mass / kg
- 数量规则：实测转移质量、水分和溶剂状态
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：产品特定（`product_specific`）
- 归一化基准：每 1,000 kg 销售状态参考产品
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_mass_outputs`
- 来源：`epa-ap42-vegetable-oil-1995`

##### 废物流

###### 含溶剂冷凝液或处理残余物（`solvent_route_waste`）

离开溶剂循环的冷凝液或处理残余物按质量、溶剂含量和处理去向记录，不得与回收溶剂净额抵销。

- 选定流：按去向区分的含溶剂废物流
- 流属性/单位：Mass / kg
- 数量规则：实测废物质量及分析或计算的溶剂含量
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每 1,000 kg 销售状态参考产品
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_solvent_balance`
- 来源：`epa-ap42-vegetable-oil-1995`

##### 基本流

###### 有机溶剂向空气释放（`solvent_release_air`）

实测或由质量平衡得到的释放量按化学物质特定空气基本流报告；使用 n-hexane 时不得以通用 VOC 流替代。

- 选定流：化学物质特定的有机溶剂空气基本流
- 流属性/单位：Mass / kg
- 数量规则：实测有组织和无组织释放，或溶剂平衡残差，并披露方法层级
- 数值来源模式：计算值（`calculated_value`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每 1,000 kg 销售状态参考产品
- 基准类型：参考流（`reference_flow`）
- 证据类型：根据采集计算（`calculated_from_collection`）
- 采集协议：`cp_air_emissions`
- 来源：`us-epa-solvent-extraction-neshap`; `mass-balance-identity`

### 过程：残余物调理与工厂放行（`residue_finishing`）

#### 输入

##### 产品流

###### 进入后处理的提取残余物（`residue_finishing_feed`）

压榨饼或萃取固体以提取过程声明的状态进入后处理步骤。

- 选定流：油籽和路线特定的提取残余物中间体
- 流属性/单位：Mass / kg
- 数量规则：实测转移质量、水分、残油及适用时的溶剂状态
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：产品特定（`product_specific`）
- 归一化基准：每 1,000 kg 销售状态参考产品
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_mass_outputs`
- 来源：`epa-ap42-vegetable-oil-1995`

###### 后处理公用工程和添加物（`finishing_inputs`）

蒸汽、燃料、电力、冷却水以及有意掺混的壳或其他添加物在来源记录中分别记录，并在具体数据集中采用匹配 Tiangong 流。

- 选定流：地理和技术特定的公用工程或已声明添加物产品流
- 流属性/单位：Energy 或 Mass / kWh、MJ、kg 或 m3
- 数量规则：脱溶剂/烘烤、干燥、冷却、研磨、分级、制粒、储存和装运的实测、称量或分配投入
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每 1,000 kg 销售状态参考产品
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_utilities`
- 来源：`epa-ap42-vegetable-oil-1995`

##### 废物流

#### 输出

##### 产品流

###### 可销售油饼或固体残余物（`reference_oil_cake`）

成品类别产品以已声明水分、残油、处理、物理形态和等级规格离开工厂大门。

- 选定流：代表性芥菜籽机械路线采用 Mustard oil press cake `1fb23bcc-f166-4b96-b451-56264a8af86a`；其他产品采用与类别匹配的 Tiangong 产品流
- 流属性/单位：Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- 数量规则：由地磅、包装或装运记录支持的 1,000 kg 销售状态参考产品
- 数值来源模式：固定值（`fixed_value`）
- 适用范围：产品特定（`product_specific`）
- 归一化基准：每 1,000 kg 销售状态参考产品
- 基准类型：参考流（`reference_flow`）
- 证据类型：方法公式（`method_formula`）
- 来源：`mass-balance-identity`

##### 废物流

###### 不合格残余物和捕集粉尘（`finishing_waste`）

离开过程的不合格固体和捕集颗粒物按回收、返工、出售或处置路线报告；内部返工物料予以跟踪，但不得作为外部产出重复计数。

- 选定流：按去向区分的固体过程废物流
- 流属性/单位：Mass / kg
- 数量规则：扣除有记录内部返工后的实测外部废物质量
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每 1,000 kg 销售状态参考产品
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_mass_outputs`
- 来源：`epa-ap42-vegetable-oil-1995`

##### 基本流

###### 后处理颗粒物向空气释放（`finishing_particulate_air`）

报告干燥、冷却、研磨、分级、储存和装运环节经治理后的颗粒物释放。

- 选定流：粒径和环境介质特定的颗粒物基本流
- 流属性/单位：Mass / kg
- 数量规则：报告批次的实测释放或有文件支持的工程计算
- 数值来源模式：计算值（`calculated_value`）
- 适用范围：技术特定（`technology_specific`）
- 归一化基准：每 1,000 kg 销售状态参考产品
- 基准类型：参考流（`reference_flow`）
- 证据类型：根据采集计算（`calculated_from_collection`）
- 采集协议：`cp_air_emissions`
- 来源：`epa-ap42-vegetable-oil-1995`

## 7. 分配与共产品处理

| rule_id | 适用对象 | 规则 | source_ids |
| --- | --- | --- | --- |
| `allocation_subdivide_first` | 所有前景过程 | 只要已知与某产品或过程的因果联系，就通过细分和单独计量直接归属制备、提取、后处理、储存、废物处理及排放流。 | `eu-pef-2021-2279` |
| `allocation_shared_extraction` | 共享提取产生的粗油、油饼、壳及其他可销售产出 | 细分无法解决共享负荷时，先检验并记录可辩护的物理因果关系。无法建立代表性物理关系时，利用实测可销售质量和可审计价格，按共同分离点同期经济价值分配共享负荷；披露方法并给出合理替代方法的敏感性结果。 | `eu-pef-2021-2279` |
| `allocation_route_consistency` | 内部中间体和溶剂回收 | 不向内部转移或设施内循环的回收溶剂分配负荷。溶剂回收能源和释放先归入溶剂萃取系统，再将共享提取负荷分配给可销售产出。 | `epa-ap42-vegetable-oil-1995`; `eu-pef-2021-2279` |
| `allocation_waste_and_system_expansion` | 废物及避免产品主张 | 除非适用研究规则另有规定，将弃置物料处理负荷保留在系统内。默认不得给予避免产品信用或采用系统扩展；适用方法要求时，报告被替代产品、替代比、证据及不含信用的结果。 | `eu-pef-2021-2279` |

## 8. 前景数据采集、计算与质量规则

### 数据采集协议

| protocol_id | process_id | flow_role | record_type | raw_fields | collection_method | unit | frequency | temporal_coverage | site_scope | aggregation_rule | quality_evidence |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| `cp_material_receipts` | `oilseed_preparation` | 接收含油原料 | 地磅、收货、供应商和实验室记录 | lot_id; species; origin; supplier; gross_mass; tare_mass; moisture; oil_content_if_used; foreign_matter; receipt_time | 校准地磅加代表性实验室样品 | kg; mass fraction | 每个进厂批次 | 与产出相同代表期间 | 供应声明产品的全部含油原料 | 按生产批次或有记录库存核算分配净批次质量 | 校准记录；采样计划；实验室方法；供应商追溯 |
| `cp_utilities` | 所有纳入过程 | 电力、蒸汽、燃料、水和添加物 | 公用工程仪表、发票和分配记录 | meter_id; opening; closing; unit; fuel/addition mass; allocation_driver; process_id; timestamp | 优先专用表；共享表按有记录运行时间、吞吐量或工程驱动分配 | 来源单位及换算的 kWh、MJ、kg 或 m3 | 至少每月及重要批次运行 | 连续代表性 12 个月或已声明生产期 | 所有纳入设备和公用工程 | 专用用量加披露的共享用量分配；排除无关生产 | 仪表校准；发票；分配工作表；换算因子 |
| `cp_mass_outputs` | 所有纳入过程 | 中间体、产品、共产品、拒收物和库存 | 称量、库存、发运和实验室记录 | lot_id; flow_role; gross_mass; tare_mass; moisture; residual_oil_if_relevant; opening_stock; closing_stock; destination | 校准秤、地磅、罐计量或经验证质量平衡 | kg; mass fraction | 每批或每次转移，按月核对 | 与物料和公用工程记录相同期间 | 所有纳入产出和内部转移点 | 汇总外部产出，并核对内部转移和库存变化且不重复计数 | 校准记录；库存核对；实验室方法；发运记录 |
| `cp_solvent_balance` | `solvent_extraction` | 溶剂补充、回收、库存、产品、废物和释放 | 采购、罐存、回收、排放和分析记录 | solvent_identity; purchased_mass; returned_mass; opening_stock; closing_stock; recovered_internal_mass; product_or_waste_solvent; measured_release | 采购和库存记录加回收计量及分析检测 | kg | 每次溶剂接收并至少每月平衡 | 完整报告期间 | 完整溶剂循环和排放点 | 计算净外部补充并闭合溶剂平衡；内部总回收量另行保留 | 采购发票；罐体校准；分析方法；平衡核对 |
| `cp_air_emissions` | 所有纳入过程 | 颗粒物和有机溶剂释放 | 烟道检测、监测、泄漏调查和工程计算记录 | source_id; pollutant; concentration; gas_flow; operating_time; fugitive_method; control_efficiency; detection_limit | 合规烟道检测、连续/定期监测、泄漏调查或有文件支持的质量平衡/工程方法 | kg 及源测量单位 | 法定或许可频次及每次重要路线变化 | 代表性报告期间 | 所有纳入有组织和无组织源 | 将浓度和活动量换算为污染物质量；已知溶剂不得以通用 VOC 替代 | 检测报告；仪器校准；许可报告；方法说明 |
| `cp_product_quality` | `residue_finishing` | 参考产品质量和等级 | 放行批次实验室、规格和不合格记录 | lot_id; moisture; dry_matter; residual_oil; hull_content; protein_if_claimed; solvent_residue_if_relevant; physical_form; grade; intended_use; nonconformance | 代表性批次采样及经验证实验室或规格方法 | mass fraction 及声明单位 | 每个放行批次或有记录风险计划 | 与参考质量相同产出批次 | 范围内所有参考产品等级 | 保留批次结果；质量加权平均可描述报告期但不得抹去等级差异 | 采样计划；方法标识；实验室能力；分析证书 |
| `cp_prices_and_allocation` | `mechanical_extraction`; `solvent_extraction` | 共产品分配 | 发票、合同、生产和代表性市场记录 | product_id; saleable_mass; price; currency; price_basis; contract_date; separation_point | 共同分离点的审计销售记录或代表性市场记录 | currency/kg as sold 和 dry matter | 每月或每合同期间 | 与物理生产相同期间 | 接收共享负荷的全部可销售共产品 | 在一致水分和价格基准上计算质量与收入份额；记录零价格或不可销售产出 | 发票；合同；货币换算；敏感性工作表 |

### 计算规则

| rule_id | Applies to | Formula or rule | Inputs | Output | source_ids |
| --- | --- | --- | --- | --- | --- |
| `calc_normalize_reference` | 每项外部交换 | 归一化量 = 期间交换量 / 期间销售状态参考产品质量 x 1,000 kg | 核对后的交换量；核对后的参考产品产出 | 每 1,000 kg 销售状态参考产品的数量 | `mass-balance-identity` |
| `calc_dry_matter` | 固体物料和产品 | 干质量 = 销售状态质量 x（1 - 水分质量分数）；保留两种质量和检测基准 | 销售状态质量；实测水分 | kg dry matter 和 dry-matter fraction | `mass-balance-identity` |
| `calc_mass_balance` | 各过程和前景总计 | 不平衡量 = 投入 + 期初库存 - 产出 - 期末库存；必须调查，不得将无解释残差强制归入参考产品 | 实测产品/废物质量；库存；重要时的实测排放 | 有符号不平衡量及占总实测投入百分比 | `mass-balance-identity` |
| `calc_net_solvent_makeup` | 溶剂萃取路线 | 净外部溶剂补充 = 采购 + 外部接收 - 外部返还 - 库存增加；与产品、废物和释放中溶剂核对，内部回收另行记录 | 采购/返还记录；期初/期末库存；产品/废物检测；实测排放 | kg 净补充和溶剂平衡闭合 | `epa-ap42-vegetable-oil-1995`; `mass-balance-identity` |
| `calc_economic_allocation` | 物理分配无可辩护依据时的共享提取负荷 | 产品 i 收入份额 = 可销售质量 i x 代表价格 i / 共同分离点所有共产品“可销售质量 x 价格”之和 | 共产品质量；同期可比价格；水分基准 | 各可销售共产品分配因子 | `eu-pef-2021-2279` |

### 数据质量要求

| requirement_id | Applies to | Requirement | Evidence |
| --- | --- | --- | --- |
| `dq_identity_and_traceability` | 参考产品和含油原料投入 | 保留批次身份、物种、来源、供应商、路线、预期用途、生产日期和正向目的地。饲料级产品必须支持及时撤回/召回及基于风险的检查、采样和分析。 | `codex-cxc-54-2004` |
| `dq_temporal_alignment` | 所有前景记录 | 物料、公用工程、产出、价格、库存和排放记录必须覆盖同一代表期间；较短生产期必须记录代表性和库存核对。 | `eu-pef-2021-2279` |
| `dq_measurement_quality` | 质量、水分、油、溶剂、公用工程和排放 | 识别仪器或方法、校准或能力证据、适用时的检出限、缺失数据处理，以及重要计算的不确定性或敏感性。 | `codex-cxc-54-2004`; `eu-pef-2021-2279` |
| `dq_feed_safety` | 声明用于动物饲料的产品 | 记录安全来源、稳定受保护的储存状态、基于风险的不良物质控制、适用法定规格、清晰处理/使用信息、批次标识及经验证采样/分析。 | `codex-cxc-54-2004` |
| `dq_completeness` | 所有纳入过程 | 以已识别产品、共产品、废物、实测排放和库存变化核对至少 95% 的实测含油原料质量；披露残差，不得虚构平衡流。 | `mass-balance-identity` |

## 9. 校验规则

| rule_id | 适用对象 | 规则 | source_ids |
| --- | --- | --- | --- |
| `validate_identity` | 参考产品 | 缺少含油物种、提取路线、工厂大门状态、水分/干物质基准、残油状态、壳处理、预期用途或物理形态时失败；将代表性芥菜籽流 UUID 用于其他产品时失败。 | `fao-oilseeds-postharvest`; `mass-balance-identity` |
| `validate_route_boundary` | 过程图 | 至少要求一种提取路线；溶剂接触进料时要求 `solvent_extraction`；同时存在机械和溶剂阶段但未声明联合路线及中间交接时拒绝。 | `epa-ap42-vegetable-oil-1995`; `us-epa-solvent-extraction-neshap` |
| `validate_reference_mass` | 参考流 | 已声明参考流必须恰为 1 kg 并有水分结果或规格；归一化清单必须有 1,000 kg 销售状态产出，并独立核验干物质换算。 | `mass-balance-identity` |
| `validate_mass_and_solvent_balance` | 前景清单 | 报告过程及总体质量平衡残差。溶剂路线必须包含溶剂身份、采购、回收、库存变化、产品/废物中溶剂和释放；未解决重要不平衡是错误，不得虚构流。 | `epa-ap42-vegetable-oil-1995`; `mass-balance-identity` |
| `validate_allocation` | 共享负荷 | 要求细分证据或有记录分配层级、完整共产品清单、一致分离点、合计为 1 的可审计因子、价格/物理基准；使用经济分配时要求敏感性结果。 | `eu-pef-2021-2279` |
| `validate_feed_claim` | 饲料级声明 | 接受饲料级声明前，要求批次追溯、安全来源证据、适用不良物质控制、处理/储存信息、采样计划、经验证分析和不合格处置。 | `codex-cxc-54-2004` |
| `validate_completeness` | 发布数据集 | 要求全部必需和触发的条件过程、对齐的时间覆盖、代理数据集披露、明确废物与释放以及数据质量证据；无法取得必需来源记录时标记校验不确定。 | `eu-pef-2021-2279` |

## 10. 发布数据集画像

| 字段 | 值 |
| --- | --- |
| dataset_role | 植物油提取产生油饼或其他可销售固体残余物的前景生产数据集 |
| downstream_use | `secondary_dataset`；完成方法学评审和发布控制后可作为 `background_dataset` |
| allowed_use | 需要工厂大门油饼生产数据的产品碳足迹或 LCA 模型；仅当产品限定信息、边界、分配、地理、技术和期间等价时用于供应商或设施比较 |
| excluded_use | 法定饲料安全认证；营养等价主张；无适用方法的替代信用；在不同油籽、提取路线、等级或水分状态间无记录理由地作为通用代理 |
| required_metadata | PCR id/版本；产品流 UUID；物种；来源；设施/地理；期间；提取路线；溶剂；脱壳/回添壳；水分/干物质；残油；处理；形态；等级/预期用途；边界；上游数据集；分配；技术；数据所有者 |
| required_quality_disclosure | 初级数据份额；测量和采样方法；校准/实验室证据；时间和地理代表性；代理数据；缺失数据处理；质量与溶剂平衡；分配敏感性；不确定性；声明饲料级时的饲料安全证据 |
| update_trigger | 含油物种组合、提取或溶剂技术、溶剂回收、能源来源、残余物后处理、回添壳、产品等级/规格、分配关系/价格、设施边界、法规发生变化，或产率、公用工程、排放、产品质量出现重要变化 |

## 11. 数据源

| Source id | Type | Reference | Used for |
| --- | --- | --- | --- |
| `epa-ap42-vegetable-oil-1995` | `official_guidance` | U.S. EPA, AP-42 Section 9.11.1, Vegetable Oil Processing, November 1995. https://gaftp.epa.gov/ap42/ch09/s1101/final/c9s1101_nov1995.pdf（检索于 2026-08-10） | 油籽输送与制备；溶剂萃取；脱溶剂/烘烤；干燥/冷却；研磨、分级、储存和装运；颗粒物与己烷释放点 |
| `us-epa-solvent-extraction-neshap` | `official_guidance` | U.S. EPA, Solvent Extraction for Vegetable Oil Production: National Emission Standards for Hazardous Air Pollutants. https://www.epa.gov/stationary-sources-air-pollution/solvent-extraction-vegetable-oil-production-national-emission（检索于 2026-08-10） | 溶剂路线定义、溶剂回收和化学物质特定 n-hexane 释放要求 |
| `eu-pef-2021-2279` | `official_guidance` | European Commission Recommendation (EU) 2021/2279 on the use of the Environmental Footprint methods, Annex I, especially Section 4.5. ELI: https://data.europa.eu/eli/reco/2021/2279/oj（检索于 2026-08-10） | 生命周期数据质量、多功能层级、细分、物理关系、经济分配、系统扩展披露和核证 |
| `codex-cxc-54-2004` | `standard` | FAO/WHO Codex Alimentarius, Code of Practice on Good Animal Feeding, CXC 54-2004, amended 2008 and 2024. https://www.fao.org/fao-who-codexalimentarius/codex-texts/codes-of-practice/en/（检索于 2026-08-10） | 安全来源、污染控制、饲料级处理与储存、标签信息、批次追溯、风险采样、经验证分析和记录 |
| `fao-oilseeds-postharvest` | `official_guidance` | FAO Technical Platform on Food Loss and Waste, Oilseeds post-harvest operations. https://www.fao.org/platform-food-loss-waste/resources/publications/grains-and-pulses/3/en（检索于 2026-08-10） | 类别语义：油籽压榨产生油和用作牲畜饲料的富蛋白饼 |
| `mass-balance-identity` | `method_factor` | 前景质量守恒恒等式：实测投入加期初库存等于实测产出加期末库存和量化损失，并显式报告残差。 | 归一化、干物质换算、质量与溶剂核对、固定参考产出和完整性 QA |
