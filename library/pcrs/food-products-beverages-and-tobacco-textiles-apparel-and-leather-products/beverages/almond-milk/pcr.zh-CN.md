---
pcr_id: pcr.food-products-beverages-and-tobacco-textiles-apparel-and-leather-products.beverages.almond-milk
language: zh-CN
status: candidate
sync_with: pcr.en-US.md
---

# 杏仁乳

## 1. 范围与适用性

本 PCR 适用于以杏仁、杏仁提取物、杏仁酱或其他已声明杏仁配料生产，并以杏仁乳、杏仁饮料等名称投放市场的液态即饮植物饮料。杏仁为特征性植物来源时，原味或调味、强化或未强化、冷藏巴氏杀菌或常温热处理产品均在范围内。

前景边界从饮料工厂接收杏仁或已声明杏仁配料、工艺水、配方配料、加工助剂、清洗材料及包装材料开始，包括厂内杏仁预处理、水相提取或复配、适用时的分离、配方调制、均质或其他物理稳定化、热处理、冷却、灌装、包装、原位清洗，以及厂界内杏仁残渣、不合格饮料、包装废料和废水管理。杏仁、其他配料、能源、水、包装以及外部处理服务的上游生产应由关联上游数据集表示，除非属于报告组织的前景活动。

动物乳、豆乳、燕麦乳、米乳、椰乳或其他非杏仁饮料；杏仁不是特征性植物基础的多植物混合饮料；发酵勺食产品；婴幼儿配方食品；饮料粉；供进一步配制的浓缩杏仁基料；杏仁油；作为食品销售的生杏仁或加工杏仁不在范围内。分销、零售、消费者冷藏、饮用及包装生命末期不属于本前景生产边界，可由下游生命周期模型补充。

本 PCR 中“杏仁乳”指 CPC 产品类别和植物基饮料，并非动物乳或 Codex 乳制品。具体数据集仍须遵守适用市场标签规则和已声明配方。产品组成随植物原料、加工路线、营养强化及添加配料而变化，因此下列必需限定信息必须提供。

## 2. 产品类别识别

| 字段 | 值 |
| --- | --- |
| canonical_pcr_id | pcr.food-products-beverages-and-tobacco-textiles-apparel-and-leather-products.beverages.almond-milk |
| classification_refs | CPC 3.0：24422 Almond milk |
| covered_products | 以杏仁为特征性植物来源的即饮杏仁基饮料；原味或调味；强化或未强化；冷藏或常温 |
| excluded_products | 动物乳；非杏仁植物饮料；杏仁并非特征性基础的混合饮料；发酵勺食产品；婴幼儿配方食品；供进一步配制的粉末和浓缩物；杏仁油；生杏仁或加工杏仁 |
| representative_product | 饮料制造厂门处的原味包装杏仁基饮料 |
| production_route | 接收杏仁原料或杏仁配料；预处理及水相提取或复配；可选分离；配方调制；均质或等效稳定化；巴氏杀菌、UHT 或其他经验证热处理；冷却；灌装和包装 |
| market_state | 包装液态成品饮料，按声明为冷藏或常温产品 |

## 3. 参考流

| 字段 | 值 |
| --- | --- |
| What | 提供用于饮用的液态杏仁基成品饮料 |
| How much | 1 kg 净杏仁基饮料 |
| How well | 符合已声明配方、食品安全处理、包装配置和市场状态规范 |
| How long or cycle | 饮料工厂门处一个生产批次的产出；除非纳入储存，否则仅声明保质期而不对其建模 |
| reference_flow_link | `beverage_finishing` 输出的 1 kg 包装杏仁乳 |

| 字段 | 值 |
| --- | --- |
| 参考数量 | 1 kg |
| 参考产品流 | Almond milk `c2d5b4f7-ef33-477e-8b8c-4114e05d3346` |
| 参考流属性 | Mass `93a60a56-a3c8-11da-a746-0800200b9a66` |
| 参考单位组 | Units of mass `93a60a57-a4c8-11da-a746-0800200c9a66` |
| 参考单位 | kg |
| 必需限定信息 | 杏仁输入形态及杏仁含量或干物质基准；完整配方及强化状态；提取或复配路线；分离方法及残渣去向；均质或稳定化路线；热处理路线及经验证时间-温度条件；冷藏或常温市场状态；包装材料及净装量；生产地域及参考期 |

构建前景数据包时，`必需限定信息` 中列出的信息应在数据集元数据、过程说明、参考流备注、产品说明或等效数据包字段中明确声明。缺失必需限定信息的数据包视为参考流定义不完整。

## 4. 计量与单位规则

| rule_id | 适用对象 | 必需流属性 | 必需单位 | 规则 |
| --- | --- | --- | --- | --- |
| `reference_mass` | 参考产品输出 | Mass `93a60a56-a3c8-11da-a746-0800200b9a66` | kg | 报告不含包装质量的饮料净质量；所有前景数量归一化至 1 kg 净包装饮料。 |
| `water_mass_consistency` | 产品内水和工艺水 | Mass | kg | 产品内水应与清洗水、冷却水及其他工艺水分开记录；体积记录应使用实测或有文件依据的密度换算并保留换算基准。 |
| `almond_basis_disclosure` | 杏仁、杏仁酱、杏仁糊、提取物、浓缩物或粉末 | Mass | kg | 记录采购输入形态及湿基或干基；没有文件化干物质或固形物换算时，不得跨形态比较或汇总杏仁输入。 |
| `energy_carrier_separation` | 电力、燃料、蒸汽和外购热 | Energy | kWh 或 MJ | 保留计量能源载体和单位；仅可用文件化因子换算，关联上游数据集前不得合并电力和热能。 |
| `packaging_net_mass` | 一次、二次和三次包装 | Mass | kg | 包装质量与饮料净质量分开报告，并识别包装材料及可重复使用或一次性状态。 |

## 5. 系统边界

### 边界概化

| 字段 | 值 |
| --- | --- |
| declared_starting_condition | 饮料工厂接收的杏仁或已声明杏仁配料，以及全部其他配方、公共工程、清洗和包装输入 |
| starting_condition_role | 前景制造厂门输入条件 |
| product_classification_scope | CPC 3.0 代码 24422 作为分类语境；canonical 范围以本 PCR 的杏仁基饮料定义为准 |
| recursive_input_rule | 从其他生产者采购的杏仁乳或杏仁饮料中间体只作为带供应商数据集的上游产品输入记录一次；不得在本前景过程中递归重建其制造清单。 |
| upstream_dataset_requirement | 为杏仁原料、其他配料、水、能源载体、包装、到厂运输和外部废物或废水处理关联上游数据集；重大输入优先使用供应商特定数据。 |
| disclosure | 声明接收杏仁形态和来源、配方路线、厂内预处理和分离、热处理路线、残渣状态和去向、包装配置、已纳入运输及任何排除或外包过程。 |

| rule_id | Applies to | Rule | source_ids |
| --- | --- | --- | --- |
| `boundary_complete_foreground` | 饮料工厂前景 | 纳入已声明厂界内预处理/配方、稳定化、热处理、灌装、包装、清洗及厂内废物管理的全部物料和能量流。 | `eu-pef-2021`; `iso-14044-2006` |
| `boundary_no_silent_cutoff` | 清单完整性 | 不得仅因未提供默认数量而省略已知流；应采集该流、记录有依据的可忽略流筛选，或披露数据缺口。 | `eu-pef-2021` |
| `boundary_upstream_links` | 采购输入和处理服务 | 使用关联数据集表示被排除的上游生产和厂外处理，并披露数据集地域、技术及参考期。 | `eu-pef-2021`; `iso-14044-2006` |
| `boundary_route_disclosure` | 产品和过程识别 | 声明饮料采用直接杏仁提取还是杏仁配料复配，以及采用巴氏杀菌、UHT 或其他稳定化路线。 | `fda-pbma-guidance-2023`; `redan-2024-almond-beverage-htst` |

## 6. 过程清单结构

### 过程图

| process_id | 过程名称 | 纳入状态 | 纳入条件 | 建模角色 | 定量参考 |
| --- | --- | --- | --- | --- | --- |
| `almond_base_preparation` | 杏仁预处理、提取和配方调制 | required | 始终纳入；各单元操作取决于接收杏仁形态和已声明配方 | 前景原料预处理和饮料配方调制 | 转入后处理的 kg 配制杏仁饮料 |
| `beverage_finishing` | 稳定化、热处理、灌装和包装 | required | 始终纳入；经验证技术和市场状态为路线特定 | 前景后处理及参考产品生产 | 1 kg 净包装杏仁乳 |
| `cleaning_and_wastewater` | 清洗和废水管理 | required | 范围内湿法加工设备始终纳入；外部处理仍为上游服务 | 前景卫生公共工程及废水转移 | kg 净包装杏仁乳 |

### 过程：杏仁预处理、提取和配方调制（`almond_base_preparation`）

本过程包括厂内杏仁检查和预处理、水相提取或使用已声明杏仁配料、可选分离、配方水配料及其他配方成分添加。必须声明实际路线，不得推断。

#### 输入

##### 产品流

###### 供应至饮料过程的杏仁原料（`almond_material_input`）

分别记录整粒或去壳杏仁、杏仁酱或糊、杏仁提取物、浓缩物或粉末等每种接收形态，并保留供应商、来源、含水率或固形物基准及批次身份。

- 选定流：与已声明采购形态相适配的杏仁原料
- 流属性/单位：Mass / kg
- 数量规则：用于合格批次的实测接收消耗质量，并按库存变化和退料校正
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：产品特定（`product_specific`）
- 归一化基准：每 1 kg 净包装杏仁乳
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_almond_and_ingredient_records`
- 来源：`fda-pbma-guidance-2023`
- 数量范围：临时杏仁输入筛选范围
  - 范围角色：QA 校验（`qa_guardrail`）
  - 下限：0.01
  - 上限：0.50
  - 单位：kg/kg 净包装饮料
  - 基准：依路线和配方变化的宽泛筛选范围，不是默认配方
  - 基准类型：参考流（`reference_flow`）
  - 证据类型：推理估算（`reasoned_estimate`）

###### 配方和预处理用水（`formulation_water`）

将进入饮料的水与浸泡、冲洗及其他预处理水分开记录，以便审计产品水平衡。

- 选定流：按适用要求的工艺水或饮用水
- 流属性/单位：Mass / kg
- 数量规则：计量或批记录加水量，并区分进入产品和未进入产品的用水
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每 1 kg 净包装杏仁乳
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_water_and_wastewater_records`
- 数量范围：临时预处理总用水筛选范围
  - 范围角色：QA 校验（`qa_guardrail`）
  - 下限：0.50
  - 上限：10.0
  - 单位：kg/kg 净包装饮料
  - 基准：产品内水及依路线变化的浸泡、冲洗和预处理水
  - 基准类型：参考流（`reference_flow`）
  - 证据类型：推理估算（`reasoned_estimate`）

###### 其他配方成分和加工助剂（`formulation_ingredients`）

按物料身份记录油、甜味剂、盐、稳定剂、乳化剂、风味料、维生素和矿物质预混料及加工助剂；仅当配方和批记录确认未使用时才可为零。

- 选定流：配方特定成分或加工助剂
- 流属性/单位：Mass / kg
- 数量规则：实测批次领用量减有文件记录的退料；仅在上游数据集和功能等同时才可归并
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：产品特定（`product_specific`）
- 归一化基准：每 1 kg 净包装杏仁乳
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_almond_and_ingredient_records`
- 来源：`fda-pbma-guidance-2023`; `redan-2024-almond-beverage-htst`

###### 预处理和配方调制用电（`preparation_electricity`）

使用分表数据或有文件记录的总表分配量，记录预处理、湿磨、泵送、分离、混合和转移用电。

- 选定流：供应至场址的电力
- 流属性/单位：Energy / kWh
- 数量规则：计量电量，或设备核定负荷乘运行时间
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每 1 kg 转入后处理的配制饮料，再归一化至参考输出
- 基准类型：过程输出（`process_output`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_energy_records`
- 数量范围：临时预处理用电筛选范围
  - 范围角色：QA 校验（`qa_guardrail`）
  - 下限：0.001
  - 上限：1.0
  - 单位：kWh/kg 配制饮料
  - 基准：预处理和配方设备的宽泛首轮筛选范围
  - 基准类型：过程输出（`process_output`）
  - 证据类型：推理估算（`reasoned_estimate`）

##### 废物流

#### 输出

##### 产品流

###### 转入后处理的配制杏仁饮料（`formulated_beverage_output`）

依据经校准的容器或流量测量计算转移量，并与批次输入、滞留物、样品、溢损及分离残渣核对。

- 选定流：配制杏仁饮料中间体
- 流属性/单位：Mass / kg
- 数量规则：实测转移质量，或用实测批次密度转换的体积
- 数值来源模式：计算值（`calculated_value`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每生产批次
- 基准类型：过程输出（`process_output`）
- 证据类型：采集计算（`calculated_from_collection`）
- 采集协议：`cp_batch_output_records`

##### 废物流

###### 分离杏仁残渣和预处理剔除物（`almond_residue`）

按实际去向以及是否属于可销售共产品、动物饲料材料、回收材料或废物，分别记录湿残渣、杏仁皮、筛除物和其他杏仁来源物料。

- 选定流：去向特定的杏仁残渣或预处理剔除物
- 流属性/单位：Mass / kg
- 数量规则：实测外运或容器质量，并按库存变化和含水基准调整
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每 1 kg 净包装杏仁乳
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_residue_and_loss_records`
- 数量范围：临时残渣筛选范围
  - 范围角色：QA 校验（`qa_guardrail`）
  - 下限：0
  - 上限：1.0
  - 单位：kg 湿残渣/kg 净包装饮料
  - 基准：依路线变化的湿残渣和剔除物；部分复配路线可以为零
  - 基准类型：参考流（`reference_flow`）
  - 证据类型：推理估算（`reasoned_estimate`）

##### 基本流

### 过程：稳定化、热处理、灌装和包装（`beverage_finishing`）

本过程包括均质或等效稳定化、经验证热处理、冷却、产品暂存、灌装和包装。中试研究支持配方调制、均质和热处理工序的存在，但其配方和运行条件不得作为全类别默认值。

#### 输入

##### 产品流

###### 从预处理接收的配制饮料（`formulated_beverage_input`）

本中间体直接关联 `formulated_beverage_output`，不得重复计算上游杏仁和配料清单。

- 选定流：配制杏仁饮料中间体
- 流属性/单位：Mass / kg
- 数量规则：等于扣除有记录暂存损失后进入后处理的实测转移量
- 数值来源模式：计算值（`calculated_value`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每 1 kg 净包装杏仁乳
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集计算（`calculated_from_collection`）
- 采集协议：`cp_batch_output_records`

###### 稳定化和灌装用电（`finishing_electricity`）

记录均质、泵送、热处理辅机、冷却、压缩空气、灌装及包装设备用电。

- 选定流：供应至场址的电力
- 流属性/单位：Energy / kWh
- 数量规则：计量电量，或按合格产品生产周期分配的有文件记录总表电量
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每 1 kg 净包装杏仁乳
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_energy_records`
- 数量范围：临时后处理用电筛选范围
  - 范围角色：QA 校验（`qa_guardrail`）
  - 下限：0.001
  - 上限：2.0
  - 单位：kWh/kg 净包装饮料
  - 基准：稳定化、冷却、灌装和包装设备的宽泛首轮筛选范围
  - 基准类型：参考流（`reference_flow`）
  - 证据类型：推理估算（`reasoned_estimate`）

###### 热处理用燃料、蒸汽或外购热（`thermal_energy`）

记录用于加热饮料的实际能源载体，以及已声明边界内可归属的热水系统损失。

- 选定流：路线特定燃料、蒸汽或外购热
- 流属性/单位：Energy / MJ
- 数量规则：计量载体用量，或计算有文件记录效率下的有用热
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：技术特定（`technology_specific`）
- 归一化基准：每 1 kg 净包装杏仁乳
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_energy_records`
- 来源：`redan-2024-almond-beverage-htst`
- 数量范围：临时热能筛选范围
  - 范围角色：QA 校验（`qa_guardrail`）
  - 下限：0
  - 上限：10.0
  - 单位：MJ/kg 净包装饮料
  - 基准：依路线变化的宽泛筛选范围；仅当全部热能通过电力表示时才可为零
  - 基准类型：参考流（`reference_flow`）
  - 证据类型：推理估算（`reasoned_estimate`）

###### 包装材料（`packaging_materials`）

按材料和再生含量规范分别记录一次容器、封口、标签、二次组合包装及可归属三次包装。

- 选定流：材料特定包装材料
- 流属性/单位：Mass / kg
- 数量规则：采购或领用包装减退库和库存变化，并与灌装件数和物料清单交叉核对
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：产品特定（`product_specific`）
- 归一化基准：每 1 kg 净包装杏仁乳
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_packaging_records`
- 数量范围：临时包装质量筛选范围
  - 范围角色：QA 校验（`qa_guardrail`）
  - 下限：0.005
  - 上限：0.25
  - 单位：kg 包装/kg 净包装饮料
  - 基准：覆盖轻量和重型包装配置的宽泛筛选范围
  - 基准类型：参考流（`reference_flow`）
  - 证据类型：推理估算（`reasoned_estimate`）

##### 废物流

#### 输出

##### 产品流

###### 包装杏仁乳参考产品（`packaged_almond_milk`）

本行为定量参考。饮料净质量不含包装，并与验收灌装件数核对。

- 选定流：Almond milk `c2d5b4f7-ef33-477e-8b8c-4114e05d3346`
- 流属性/单位：Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- 数量规则：1 kg 净包装杏仁乳
- 数值来源模式：固定值（`fixed_value`）
- 适用范围：不适用（`not_applicable`）
- 归一化基准：PCR 参考流
- 基准类型：参考流（`reference_flow`）
- 证据类型：身份引用（`identity_reference`）

##### 废物流

###### 不合格饮料和灌装损失（`off_spec_beverage`）

按去向记录未验收为产品的饮料，包括同一批次系统内回用、回收产品、动物饲料用途、废水排放或废物处理。

- 选定流：去向特定的不合格杏仁饮料
- 流属性/单位：Mass / kg
- 数量规则：实测报废、溢损、取样或排放质量，扣除有文件记录的过程内返工
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每 1 kg 净包装杏仁乳
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_residue_and_loss_records`
- 数量范围：临时不合格损失筛选范围
  - 范围角色：QA 校验（`qa_guardrail`）
  - 下限：0
  - 上限：0.20
  - 单位：kg/kg 净包装饮料
  - 基准：获得场址证据前的宽泛生产周期筛选范围
  - 基准类型：参考流（`reference_flow`）
  - 证据类型：推理估算（`reasoned_estimate`）

###### 包装废料（`packaging_scrap`）

按材料和去向记录损坏及未使用包装；已退回可用库存的包装不计入。

- 选定流：材料特定包装废物
- 流属性/单位：Mass / kg
- 数量规则：实测废料质量，或报废件数乘经验证组件质量
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每 1 kg 净包装杏仁乳
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_packaging_records`

##### 基本流

### 过程：清洗和废水管理（`cleaning_and_wastewater`）

本过程涵盖湿法加工设备清洗所用水、化学品和能源，以及前景工厂废水转移。外部废水处理作为处理服务关联，除非其在已声明前景内运行。

#### 输入

##### 产品流

###### 清洗和冲洗水（`cleaning_water`）

将原位清洗、人工清洗和冲洗用水与配方水及一次通过冷却水分开记录。

- 选定流：按适用要求的工艺水或饮用水
- 流属性/单位：Mass / kg
- 数量规则：计量清洗水，或经验证清洗周期体积乘已完成周期数
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每 1 kg 净包装杏仁乳
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_water_and_wastewater_records`
- 数量范围：临时清洗用水筛选范围
  - 范围角色：QA 校验（`qa_guardrail`）
  - 下限：0.01
  - 上限：20.0
  - 单位：kg/kg 净包装饮料
  - 基准：批式和连续清洗配置的宽泛首轮范围
  - 基准类型：参考流（`reference_flow`）
  - 证据类型：推理估算（`reasoned_estimate`）

###### 清洗剂（`cleaning_agents`）

按供应形态记录碱、酸、消毒剂及其他清洗剂，并保留关联正确上游数据集所需的浓度数据。

- 选定流：产品特定清洗化学品
- 流属性/单位：Mass / kg
- 数量规则：根据化学品记录和浓度设定得到的领用或加药质量
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每 1 kg 净包装杏仁乳
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_cleaning_records`
- 数量范围：临时清洗剂筛选范围
  - 范围角色：QA 校验（`qa_guardrail`）
  - 下限：0
  - 上限：0.10
  - 单位：kg 供应化学品/kg 净包装饮料
  - 基准：依场址和浓度变化的宽泛筛选范围
  - 基准类型：参考流（`reference_flow`）
  - 证据类型：推理估算（`reasoned_estimate`）

##### 废物流

#### 输出

##### 产品流

##### 废物流

###### 转移至处理的工艺废水（`process_wastewater`）

记录废水质量或体积及接收处理路线。可获得时保留污染物监测数据，包括排放许可或处理模型相关的化学需氧量、固体、pH 和营养物。

- 选定流：处理路线特定废水
- 流属性/单位：Mass / kg
- 数量规则：出水流量计读数或经核对水平衡，不含单独计量的未污染冷却水
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每 1 kg 净包装杏仁乳
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_water_and_wastewater_records`
- 数量范围：临时废水筛选范围
  - 范围角色：QA 校验（`qa_guardrail`）
  - 下限：0.01
  - 上限：25.0
  - 单位：kg/kg 净包装饮料
  - 基准：与未进入产品的水用途核对的宽泛筛选范围
  - 基准类型：参考流（`reference_flow`）
  - 证据类型：推理估算（`reasoned_estimate`）

##### 基本流

## 7. 分配与共产品处理

| rule_id | Applies to | Rule | source_ids |
| --- | --- | --- | --- |
| `allocation_avoid_first` | 共享操作和输出 | 首先通过过程细分、独立计量或扩展数据采集保持物理因果关系，从而避免分配。 | `iso-14044-2006`; `eu-pef-2021` |
| `allocation_physical_then_economic` | 无法避免的多功能性 | 无法细分时采用反映因果关系且有文件依据的物理关系；仅在无法建立合理物理关系时使用经济分配，并披露价格、期间、币种及敏感性。 | `iso-14044-2006`; `eu-pef-2021` |
| `allocation_residue_status` | 杏仁残渣和回收不合格产品 | 分配前先判定输出状态。废物不获得共产品抵扣并承担其处理；可销售共产品仅在数量、去向和市场状态有证据后采用所选分配。 | `eu-pef-2021` |
| `allocation_shared_utilities` | 共享能源、水、清洗和包装线 | 优先采用分表或周期特定用量；否则按有文件依据的设备运行时间、产量或其他因果驱动因素分配并报告该驱动因素。 | `eu-pef-2021` |

## 8. 前景数据采集、计算与质量规则

### 数据采集协议

| protocol_id | process_id | flow_role | record_type | raw_fields | collection_method | unit | frequency | temporal_coverage | site_scope | aggregation_rule | quality_evidence |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| `cp_almond_and_ingredient_records` | `almond_base_preparation` | 杏仁和配方输入 | 采购、接收、库存及批次领料记录 | 物料 id；供应商；来源；批次；输入形态；含水率或固形物基准；期初和期末库存；领用质量；退料质量 | 将批次和物料记录与校准秤核对 | 按供应状态 kg，换算时另报 kg 干物质 | 每批；每月核对 | 可获得时至少连续 12 个代表性月份，否则为已声明生产期 | 全部纳入产线和产品 | 消耗量等于期初加接收减期末、退料和有记录转移；归一化至验收输出 | 秤校准；供应商规范；签署批记录；库存核对 |
| `cp_water_and_wastewater_records` | `almond_base_preparation`; `cleaning_and_wastewater` | 配方水、预处理水、清洗水和废水 | 计量、批次、清洗周期和出水记录 | 表计起止；批次加水；周期体积；产品内水；冷却水；出水体积或质量；密度；污染物测试；去向 | 读取校准表计并与批配方和水平衡核对 | kg 或 m3，并记录密度 | 每批或每班；每月核对 | 与验收产品输出相同的报告期，包含季节及清洗周期变化 | 全部纳入用水点和排放点 | 区分产品内、蒸发、循环及排放水；将净用水和出水归一化至验收输出 | 表计校准；配方记录；清洗日志；实验室结果；公用工程账单核对 |
| `cp_energy_records` | `almond_base_preparation`; `beverage_finishing`; `cleaning_and_wastewater` | 电力和热能 | 分表、燃料、蒸汽、外购热和设备记录 | 表计读数；载体；能量单位；设备负荷；运行时间；产量；共享表分配驱动 | 优先分表；否则按经验证负荷和时间计算，或分配经核对的共享表 | 各载体 kWh 或 MJ | 每生产周期或每班；每月核对 | 与验收产品输出相同的报告期，包含开停机和季节负荷 | 全部前景设备和公共工程 | 按载体求和；扣除无关负荷；按因果驱动分配共享用量；归一化至验收输出 | 表计校准；公用工程账单；设备规范；运行日志；分配工作表 |
| `cp_batch_output_records` | `almond_base_preparation`; `beverage_finishing` | 中间体转移和验收产品 | 容器、流量计、密度、灌装和质量放行记录 | 批次 id；转移体积或质量；密度；灌装件数；净装量；验收件数；样品；返工；暂存和报废量 | 测量转移和验收灌装；以实测批次密度转换体积 | kg | 每批 | 已声明报告期内每个所代表批次 | 全部纳入生产线 | 将配制转移量与验收输出、损失、样品、返工及库存变化核对 | 校准容器或表计；密度测试；灌装检查；放行记录；质量平衡签字 |
| `cp_packaging_records` | `beverage_finishing` | 包装输入和废料 | 物料清单、领用、件数、库存和废料记录 | 组件 id；材料；单件质量；再生含量；领用件数或质量；验收件数；退回件数；废料；去向 | 将组件领用和实测废料与验收灌装件数核对 | kg | 每生产周期；每月核对 | 与验收输出相同的报告期和产品包装配置 | 一次、二次及可归属三次包装 | 按材料计算消耗质量并归一化至饮料净质量；可重复使用资产单独处理 | 经验证组件质量；供应商规范；库存记录；废料单 |
| `cp_residue_and_loss_records` | `almond_base_preparation`; `beverage_finishing` | 杏仁残渣、剔除物、不合格饮料和包装损失 | 秤、外运、返工、废物联单和去向记录 | 物料类型；湿质量；适用时干物质结果；返工；去向；废物或共产品状态；经济分配时的收入 | 称量各物料流，或验证容器质量和收集频次 | kg 湿基，相关时另报 kg 干物质 | 每批或每次外运 | 与生产相同的报告期，并核对外运时点和库存变化 | 全部纳入损失和残渣流 | 扣除内部返工；按去向和状态汇总；归一化至验收输出 | 秤校准；外运单；废物联单；买方记录；干物质测试 |
| `cp_cleaning_records` | `cleaning_and_wastewater` | 清洗剂和清洗周期 | 化学品加药、浓度、周期和库存记录 | 化学品 id；供应浓度；剂量；周期数；产线；期初和期末库存；退回化学品 | 读取加药系统，或将领用化学品与已完成周期核对 | 供应状态 kg，换算时另报 kg 活性物 | 每清洗周期；每月核对 | 可归属已声明生产期的每个清洗周期 | 全部纳入湿法加工和灌装设备 | 按化学品求和；单独记录活性物换算；归一化至验收输出 | 加药器校准；安全数据表；浓度测试；清洗日志；库存核对 |
| `cp_thermal_process_records` | `beverage_finishing` | 食品安全和稳定化路线 | 过程控制和放行记录 | 处理技术；进出口温度；保持时间；压力；均质设定；流量；冷却条件；偏差；处置 | 采集经验证控制系统记录并保留偏差审查 | 按适用为 °C、s、bar、kg/h | 连续或每批 | 已声明报告期内每个所代表批次和偏差 | 每条纳入热处理和稳定化线 | 报告路线及批准运行窗口；不得通过平均掩盖偏差 | 校准；验证研究；电子过程记录；偏差和放行批准 |

### 计算规则

| rule_id | Applies to | Formula or rule | Inputs | Output | source_ids |
| --- | --- | --- | --- | --- | --- |
| `calc_reference_normalization` | 全部前景行 | 归一化数量 = 可归属批次数量 / 验收净包装饮料质量 | 可归属数量；验收件数；经验证净装量或验收质量 | 每 1 kg 净包装杏仁乳的数量 | `iso-14044-2006` |
| `calc_volume_to_mass` | 水、饮料和废水体积记录 | 质量 = 实测体积 × 适用温度下实测或有文件依据的密度 | 体积；密度；温度及换算基准 | kg | `iso-14044-2006` |
| `calc_almond_dry_matter` | 不同杏仁输入形态 | 干物质输入 = 供应状态质量 × 实测固形物比例 | 供应状态质量；水分或固形物结果 | 用于可比性的 kg 干物质，同时保留供应状态质量 |  |
| `calc_mass_balance` | 各批次和报告期 | 输入质量 = 验收产品 + 外运共产品 + 废物和排放 + 库存变化 + 有记录质量平衡残差 | 配料和水输入；中间库存；验收输出；残渣；不合格产品；废水及实测损失 | 经核对质量平衡残差和完整性标记 | `eu-pef-2021` |
| `calc_shared_utility_allocation` | 共享公共工程 | 可归属公共工程 = 经核对共享总量 × 有文件依据的因果驱动占比 | 共享总量；设备时间、产量或周期驱动 | 各载体产品可归属公共工程量 | `eu-pef-2021` |

### 数据质量要求

| requirement_id | Applies to | Requirement | Evidence |
| --- | --- | --- | --- |
| `dq_product_identity` | 参考产品和范围 | 为每个所代表产品族保留配方、标签或产品规范、杏仁输入形态、杏仁含量或固形物基准、强化、处理路线、包装及市场状态。 | 批准产品规范；配方；标签；放行记录 |
| `dq_temporal_coverage` | 前景平均值 | 可获得时使用至少连续 12 个代表性月份；否则披露较短期间、季节性、投产或试验状态及其代表已声明产品的理由。 | 带日期生产、公用工程、采购和废物记录 |
| `dq_meter_and_scale_control` | 实测数量 | 使用经校准或验证的表计和秤；记录换算因子、密度、缺失数据替代及共享表分配驱动。 | 校准证书；表计日志；计算工作簿 |
| `dq_completeness` | 清单边界 | 计入全部配方输入、主要水和能源使用、包装、验收输出、残渣、不合格产品、废水及已知废物去向；量化或披露每个缺口。 | 完整性清单；质量和水平衡；废物联单 |
| `dq_thermal_route` | 稳定化和热处理 | 保留经验证过程路线和实际控制记录；披露偏差及报废或返工产品，不得使用通用巴氏杀菌或 UHT 假设替代。 | 验证研究；电子温度-时间记录；偏差处置 |
| `dq_upstream_representativeness` | 关联数据集 | 记录杏仁、配料、公用工程、包装、运输和处理服务的供应商或数据库来源、地域、技术、参考年及任何代理。 | 数据集元数据及代理理由 |
| `dq_allocation_transparency` | 多功能操作和共产品 | 报告避免分配的尝试、分配基准、因子、适用时价格期间、残渣状态，以及分配重大影响结果时的敏感性结果。 | 分配工作表；买方或去向证据；敏感性结果 |

## 9. 校验规则

| rule_id | Applies to | Rule | source_ids |
| --- | --- | --- | --- |
| `validate_reference_identity` | 参考流 | 产品流 UUID、Mass 流属性 UUID、质量单位组 UUID、kg 单位及 1 kg 净质量必须与参考流定义一致。 |  |
| `validate_required_qualifiers` | 数据集元数据 | 缺少任何必需限定信息，或植物来源、处理路线、包装、市场状态含糊时，完整性校验失败。 | `fda-pbma-guidance-2023`; `codex-stan-206-1999` |
| `validate_process_coverage` | 前景清单 | 确认三个必需过程组均有表示，且省略的路线特定操作明确标为不适用而非静默缺失。 | `redan-2024-almond-beverage-htst`; `eu-pef-2021` |
| `validate_mass_balance` | 批次和期间清单 | 发布数据集前必须有文件化质量平衡残差，并调查重大未解释差异。 | `eu-pef-2021` |
| `validate_water_separation` | 用水清单 | 确认产品内水、预处理水、清洗水、冷却水、循环水和排放水已分开，或任何汇总均有理由且未重复。 |  |
| `validate_energy_carriers` | 能源清单 | 确认电力和各热能载体分开报告，并采用有文件依据的因子换算。 | `eu-pef-2021` |
| `validate_residue_allocation` | 杏仁残渣和不合格输出 | 分配或处理前确认去向及废物/共产品状态；不得采用无依据的替代产品抵扣。 | `iso-14044-2006`; `eu-pef-2021` |
| `validate_reasoned_estimates` | 临时范围 | 每个 `reasoned_estimate` 范围只作为筛选标记；不得用其中点替代采集前景值，也不得未经审查作为发布的允许范围。 |  |
| `validate_data_quality_disclosure` | 发布数据包 | 确认时间、地域、技术、完整性、计量质量、代理、分配及不确定性披露，并识别每项跳过的检查。 | `iso-14044-2006`; `eu-pef-2021` |

## 10. 发布数据集画像

| 字段 | 值 |
| --- | --- |
| dataset_role | 饮料工厂门处包装杏仁乳的前景制造数据集 |
| downstream_use | 经审查和发布后可作为 `secondary_dataset`；`background_dataset` |
| allowed_use | 已声明杏仁配方、制造路线、地域、期间、包装和市场状态具有代表性的产品系统建模；仅在功能单位、边界、分配和数据质量协调一致后进行比较 |
| excluded_use | 营养等效声明；动物乳替代声明；无条件外推至其他植物饮料、粉末、浓缩物、发酵产品或重大不同提取和处理路线 |
| required_metadata | PCR id 和版本；产品及杏仁输入身份；配方或固形物基准；强化；提取或复配路线；分离；均质；热处理路线；冷藏或常温状态；包装；工厂和地域；参考期；验收输出；上游数据集；分配；残渣去向 |
| required_quality_disclosure | 记录覆盖和时间代表性；表计和秤状态；质量和水平衡残差；路线偏差；数据缺口和替代；代理数据集；分配敏感性；指导中仍保留的临时推理估算范围 |
| update_trigger | 配方、杏仁输入形态、工厂或产线、处理技术、包装、残渣去向、分配方法、能源或供水系统、供应商地域或证据发生重大变化；否则至少每三年审查一次 |

## 11. 数据源

| Source id | Type | Reference | Used for |
| --- | --- | --- | --- |
| `eu-pef-2021` | official_guidance | European Commission, Commission Recommendation (EU) 2021/2279, Annex I Product Environmental Footprint Method. https://eur-lex.europa.eu/legal-content/EN/TXT/PDF/?uri=CELEX:32021H2279（检索于 2026-08-11） | 生命周期边界、清单完整性、多功能性、数据质量、报告和验证框架 |
| `iso-14044-2006` | standard | ISO 14044:2006, Environmental management — Life cycle assessment — Requirements and guidelines, confirmed current in 2022. https://www.iso.org/standard/38498.html（检索于 2026-08-11） | 目标与范围、清单、分配、解释、报告和审查原则 |
| `fda-pbma-guidance-2023` | official_guidance | U.S. FDA, Draft Guidance for Industry: Labeling of Plant-Based Milk Alternatives and Voluntary Nutrient Statements, February 2023, FDA-2023-D-0451. https://www.fda.gov/media/165420/download（检索于 2026-08-11；草案、无约束力） | 植物基饮料身份、直接提取和复配路线、组成变化、配料及强化披露 |
| `codex-stan-206-1999` | standard | Codex Alimentarius, General Standard for the Use of Dairy Terms, CODEX STAN 206-1999. https://www.fao.org/input/download/standards/332/CXS_206e.pdf（检索于 2026-08-11） | 区分动物乳或乳制品与植物基饮料类别 |
| `redan-2024-almond-beverage-htst` | literature | Redan et al., Effect of pilot-scale high-temperature short-time processing on the retention of key micronutrients in a fortified almond-based beverage: implications for fortification of plant-based milk alternatives, Frontiers in Nutrition (2024), DOI: 10.3389/fnut.2024.1468828 | 杏仁饮料配方、均质、热处理过程分解、路线披露和过程记录需求；试验条件不是类别默认值 |
