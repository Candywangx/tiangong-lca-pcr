---
pcr_id: pcr.food-products-beverages-and-tobacco-textiles-apparel-and-leather-products.beverages.coconut-milk
language: zh-CN
status: candidate
sync_with: pcr.en-US.md
---

# 椰奶

## 1. 范围与适用性

本 PCR 适用于作为非动物来源饮料的液态椰奶之门到门生产。产品是由粉碎的椰子胚乳（椰肉）、椰子提取液或等效且已声明的椰子基料与饮用水制成的稀乳状乳化液，可溶性和悬浮性椰子固形物分散于液体中。只有在成品仍可明确识别为椰奶时，才可包含已声明的甜味剂、稳定剂、香料、微量营养素或其他少量配料。

前景边界从工厂接收成熟整椰、分离椰肉或外购椰子提取液/基料时所声明的状态开始，到可离开生产场址的净含量包装椰奶结束。边界纳入适用时的原料预处理与提取，以及配料、均质、热处理或其他经验证的保藏步骤、灌装、包装、清洗、产品损失和场内废水或残余物处理。

烹调用椰奶和椰浆、椰子水、发酵椰子产品、椰子油、椰子粉以及椰子成分并非产品主体的混合饮料不在本 PCR 范围内。椰子种植、外购配料与包装的场外生产、配送、零售冷藏、消费者使用和终端处置不属于前景边界；在生命周期研究纳入这些阶段时，应连接相应上游或下游数据集。

## 2. 产品类别识别

| 字段 | 值 |
| --- | --- |
| canonical_pcr_id | pcr.food-products-beverages-and-tobacco-textiles-apparel-and-leather-products.beverages.coconut-milk |
| classification_refs | CPC 3.0: 24421 Coconut milk（`exact`） |
| covered_products | 以椰子胚乳提取物和水为基础的液态即饮椰奶；产品主体仍为椰奶的原味或配方型产品 |
| excluded_products | 烹调用椰奶和椰浆；椰子水；发酵椰子饮料；椰子油；椰子粉；非以椰奶为主体的复合饮料 |
| representative_product | 生产场址门口的包装液态椰奶饮料 |
| production_route | 接收已声明的椰子原料；适用时进行预处理和水相提取；过滤；配料；均质；经验证的保藏处理；灌装与包装 |
| market_state | 包装液体，按声明为常温货架稳定或冷藏状态，可从生产场址配送 |

## 3. 参考流

| 字段 | 值 |
| --- | --- |
| What | 在生产场址门口供应的食品级液态椰奶饮料 |
| How much | 1 kg 净椰奶，不含包装 |
| How well | 符合已声明的配方、椰子固形物或脂肪规格、保藏处理、包装完整性和市场状态要求 |
| How long or cycle | 一个生产批次直至工厂门口放行；声明的保质期和储存状态是限定信息，而非使用期服务 |
| reference_flow_link | `coconut_milk_at_plant_gate` |

| 字段 | 值 |
| --- | --- |
| 参考数量 | 1 kg 净产品 |
| 参考产品流 | 椰奶 `683e1059-d269-4198-a67d-f306a86bcf8d` |
| 参考流属性 | Mass `93a60a56-a3c8-11da-a746-0800200b9a66` |
| 参考单位组 | Units of mass `93a60a57-a4c8-11da-a746-0800200c9a66` |
| 参考单位 | kg |
| 必需限定信息 | 接收椰子原料的形态；椰子产地和供应商范围；椰子固形物或脂肪规格；加水量和配料组成；保藏处理；常温货架稳定或冷藏状态；包装类型和包装质量；生产地域；数据期间 |

构建前景数据包时，`必需限定信息` 中列出的信息必须在数据集元数据、过程说明、参考流备注、产品说明或等效数据包字段中明确声明。缺失必需限定信息的数据包视为参考流定义不完整。

## 4. 计量与单位规则

| rule_id | 适用对象 | 必需流属性 | 必需单位 | 规则 |
| --- | --- | --- | --- | --- |
| `reference_net_mass` | 参考椰奶 | Mass `93a60a56-a3c8-11da-a746-0800200b9a66` | kg | 将全部前景数量归一化至 1 kg 已放行的净椰奶；参考质量不含一级、二级和三级包装。 |
| `coconut_material_mass` | 椰果、椰肉、椰子提取液和基料投入 | Mass `93a60a56-a3c8-11da-a746-0800200b9a66` | kg | 按声明的接收状态及水分或固形物基准记录每种椰子投入；不得在没有明确换算的情况下合并整果、椰肉与浓缩基料质量。 |
| `water_mass` | 掺入产品或用于加工的水 | Mass `93a60a56-a3c8-11da-a746-0800200b9a66` | kg | 配方水应与清洗、提取、设备清洁、冷却及公用工程水分开报告；体积表读数换算为质量时应记录密度换算。 |
| `energy_carrier_separation` | 电力、燃料、蒸汽、冷量和压缩空气 | 载能体特定能量属性 | kWh 或 MJ | 保留计量的载能体和单位并一致换算；在连接载能体特定上游数据集之前，不得合并电力和热能。 |
| `packaging_mass_separation` | 包装材料 | Mass `93a60a56-a3c8-11da-a746-0800200b9a66` | kg | 按材料和组件记录每 1 kg 净产品的包装质量；包装不计入参考产品质量。 |

## 5. 系统边界

### 边界概化

| 字段 | 值 |
| --- | --- |
| declared_starting_condition | 在生产场址接收成熟整椰、分离椰肉或外购椰子提取液/基料，并声明所选状态及上游覆盖范围 |
| starting_condition_role | 椰子原料进入前景的起点；据此决定去衣、去壳、椰肉预处理和提取属于前景还是上游 |
| product_classification_scope | 与经审查语义范围相符的液态椰奶饮料；分类代码仅是映射背景，不能替代产品描述 |
| recursive_input_rule | 同一产品类别的外购椰奶只作为一次上游产品投入记录，不得假定其在同一前景边界内再次生产而递归展开 |
| upstream_dataset_requirement | 所有外购椰子原料、配料、载能体、包装材料、运输服务和场外处理服务都必须连接地域、技术和时间具有代表性的上游数据集 |
| disclosure | 声明椰子原料起始状态、已纳入的预处理步骤、配方、保藏路线、包装系统、共产品、废物去向、数据期间、场址范围和全部前景排除项 |

| rule_id | 适用对象 | 规则 | 来源 |
| --- | --- | --- | --- |
| `boundary_foreground_steps` | manufacturing_site_foreground | 纳入从已声明的椰子原料接收状态到已放行包装产品之间的全部场址受控操作，包括归属于产品的公用工程、清洗、产品损失、废水和残余物处理。 | `fao-coconut-postharvest-1999`; `ghg-protocol-product-standard-2011` |
| `boundary_starting_state` | coconut_material_entry | 声明场址接收整椰、椰肉、提取液还是其他椰子基料；已在上游完成的过程应由关联数据集表示，不得遗漏。 | `fao-coconut-postharvest-1999`; `ghg-protocol-product-standard-2011` |
| `boundary_food_contact_water` | water_contacting_food | 掺入产品及接触食品的操作应使用饮用水；非饮用公用工程水应单独计量，且不得表示为产品接触水。 | `codex-cxc-1-1969` |
| `boundary_gate_to_gate_exclusions` | downstream_stages | 前景结果不纳入出厂配送、零售、消费者使用和包装终端处置，并应声明完整生命周期模型必须显式补充这些阶段。 | `ghg-protocol-product-standard-2011` |

## 6. 过程清单结构

### 过程图

| process_id | 过程名称 | 纳入状态 | 纳入条件 | 建模角色 | 定量参考 |
| --- | --- | --- | --- | --- | --- |
| `material_preparation_extraction` | 椰子预处理、水相提取与过滤 | `conditional` | 场内处理整椰或椰肉时必须纳入；接收外购提取液/基料时，应披露并连接等效上游过程 | 由声明的椰子原料生产经过滤的椰子提取液 | 每 1 kg 净椰奶 |
| `formulation_homogenization` | 配料与均质 | `required` | 始终纳入 | 将椰子提取液/基料、饮用水和已声明配料制成均匀散装椰奶 | 每 1 kg 净椰奶 |
| `preservation_filling_packaging` | 保藏处理、灌装、冷却与包装 | `required` | 始终纳入；必须声明实际热处理、无菌或经验证的替代路线 | 生产达到声明市场状态并已放行的包装椰奶 | 工厂门口 1 kg 净椰奶 |
| `sanitation_wastewater` | 清洗、卫生及场内废水处理 | `required` | 归属操作始终纳入；共享系统应使用已披露的分配基准 | 捕获归属于前景生产线的清洗资源、废水、污泥和直接排放 | 每 1 kg 净椰奶 |

### 过程：椰子预处理、水相提取与过滤（`material_preparation_extraction`）

#### 输入

##### 产品流

###### 用于提取的进厂椰子原料（`coconut_material_input`）

按跨越场址边界的状态记录成熟整椰、分离椰肉或其他已声明椰子原料。没有实测得率以及水分或固形物数据时，不得用整果质量替代椰肉或提取液质量。

- 选定流：椰子原料，已声明接收状态
- 流属性/单位：Mass / kg
- 数量规则：按接收状态计量的合格质量，扣除单独记录的拒收量
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：产品特定（`product_specific`）
- 归一化基准：每 1 kg 净椰奶
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_coconut_receipts`
- 来源：
- 数量范围：暂定椰子投入筛选估算
  - 范围角色：默认估计（`default_estimate`）
  - 下限：0.1
  - 上限：3.0
  - 单位：kg/kg 净椰奶
  - 基准：取决于接收状态的宽泛估计，待经审查的前景得率数据替换
  - 基准类型：参考流（`reference_flow`）
  - 证据类型：推理估算（`reasoned_estimate`）

###### 饮用级提取与清洗水（`extraction_washing_water`）

记录用于清洗椰子原料和辅助提取的饮用水，并与配方水和设备清洁水分开。

- 选定流：饮用级工艺水
- 流属性/单位：Mass / kg
- 数量规则：计量或按批记录的预处理与提取供水量
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每 1 kg 净椰奶
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_water_records`
- 来源：`codex-cxc-1-1969`
- 数量范围：暂定提取与清洗用水筛选估算
  - 范围角色：QA 校验（`qa_guardrail`）
  - 下限：0
  - 上限：10
  - 单位：kg/kg 净椰奶
  - 基准：覆盖不同椰子接收状态和提取技术的宽泛估计
  - 基准类型：参考流（`reference_flow`）
  - 证据类型：推理估算（`reasoned_estimate`）

###### 预处理和提取用电（`extraction_electricity`）

记录切割、磨碎、粉碎、压榨、泵送和过滤的计量或分配电力。

- 选定流：电力，已声明电网或供应组合
- 流属性/单位：Energy / kWh
- 数量规则：计量电量，或由设备功率和运行时间计算的份额
- 数值来源模式：计算值（`calculated_value`）
- 适用范围：技术特定（`technology_specific`）
- 归一化基准：每 1 kg 净椰奶
- 基准类型：参考流（`reference_flow`）
- 证据类型：由采集数据计算（`calculated_from_collection`）
- 采集协议：`cp_energy_records`
- 来源：
- 数量范围：暂定提取用电筛选估算
  - 范围角色：QA 校验（`qa_guardrail`）
  - 下限：0.001
  - 上限：2
  - 单位：kWh/kg 净椰奶
  - 基准：生产线特定计量前的宽泛首轮估计
  - 基准类型：参考流（`reference_flow`）
  - 证据类型：推理估算（`reasoned_estimate`）

##### 废物流

##### 基本流

#### 输出

##### 产品流

###### 转入配料的过滤椰子提取液（`filtered_coconut_extract`）

记录转入配料工序的过滤椰子提取液质量，并在受控时记录其固形物或脂肪含量。

- 选定流：过滤椰子提取液
- 流属性/单位：Mass / kg
- 数量规则：按批计量的转移质量
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：产品特定（`product_specific`）
- 归一化基准：每 1 kg 净椰奶
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_process_yields`
- 来源：`fao-coconut-postharvest-1999`

##### 废物流

###### 作为残余物离场的椰衣、椰壳、削皮和压榨饼（`coconut_solid_residues`）

按物理状态和去向分别记录每种残余物；已出售或内部利用的共产品不得标为废物。

- 选定流：椰子加工残余物，去向特定
- 流属性/单位：Mass / kg
- 数量规则：按类型和去向计量的残余物质量
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每 1 kg 净椰奶
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_residue_records`
- 来源：
- 数量范围：暂定固体残余物筛选估算
  - 范围角色：QA 校验（`qa_guardrail`）
  - 下限：0
  - 上限：3
  - 单位：kg/kg 净椰奶
  - 基准：取决于接收状态的宽泛估计，待实测残余物得率替换
  - 基准类型：参考流（`reference_flow`）
  - 证据类型：推理估算（`reasoned_estimate`）

###### 预处理和提取废水（`extraction_wastewater`）

记录排入场内或场外处理的废水；除非有测量，不得扣除蒸发水或掺入产品的水。

- 选定流：椰子预处理与提取废水
- 流属性/单位：Mass / kg
- 数量规则：按去向计量排放，或以水量平衡计算
- 数值来源模式：计算值（`calculated_value`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每 1 kg 净椰奶
- 基准类型：参考流（`reference_flow`）
- 证据类型：由采集数据计算（`calculated_from_collection`）
- 采集协议：`cp_wastewater_records`
- 来源：
- 数量范围：暂定提取废水筛选估算
  - 范围角色：QA 校验（`qa_guardrail`）
  - 下限：0
  - 上限：10
  - 单位：kg/kg 净椰奶
  - 基准：宽泛首轮水量平衡估计
  - 基准类型：参考流（`reference_flow`）
  - 证据类型：推理估算（`reasoned_estimate`）

##### 基本流

### 过程：配料与均质（`formulation_homogenization`）

#### 输入

##### 产品流

###### 椰子提取液或外购椰子基料（`coconut_base_to_formulation`）

按质量和已声明固形物或脂肪含量记录前景过滤提取液或外购椰子基料。

- 选定流：椰子提取液或椰子基料，已声明组成
- 流属性/单位：Mass / kg
- 数量规则：投入配料批次的质量
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：产品特定（`product_specific`）
- 归一化基准：每 1 kg 净椰奶
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_formulation_batches`
- 来源：

###### 饮用级配方水（`formulation_water`）

掺入产品的水应与其他用水分别记录。

- 选定流：掺入产品的饮用水
- 流属性/单位：Mass / kg
- 数量规则：计量或按批称量的配方水
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：产品特定（`product_specific`）
- 归一化基准：每 1 kg 净椰奶
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_formulation_batches`
- 来源：`codex-cxc-1-1969`
- 数量范围：暂定配方水筛选估算
  - 范围角色：QA 校验（`qa_guardrail`）
  - 下限：0
  - 上限：0.95
  - 单位：kg/kg 净椰奶
  - 基准：宽泛产品配方估计，不构成组成要求
  - 基准类型：参考流（`reference_flow`）
  - 证据类型：推理估算（`reasoned_estimate`）

###### 已声明少量配料（`minor_ingredients`）

分别记录甜味剂、稳定剂、乳化剂、香料、微量营养素和其他配料；不得聚合具有不同上游数据集的配料。

- 选定流：配料，配方特定
- 流属性/单位：Mass / kg
- 数量规则：每种配料的批次领料或称量记录
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：产品特定（`product_specific`）
- 归一化基准：每 1 kg 净椰奶
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_formulation_batches`
- 来源：

###### 混合与均质用电（`formulation_electricity`）

记录混合、泵送、均质和中间储存的用电。

- 选定流：电力，已声明电网或供应组合
- 流属性/单位：Energy / kWh
- 数量规则：计量电量，或由设备功率和运行时间计算的份额
- 数值来源模式：计算值（`calculated_value`）
- 适用范围：技术特定（`technology_specific`）
- 归一化基准：每 1 kg 净椰奶
- 基准类型：参考流（`reference_flow`）
- 证据类型：由采集数据计算（`calculated_from_collection`）
- 采集协议：`cp_energy_records`
- 来源：
- 数量范围：暂定配料用电筛选估算
  - 范围角色：QA 校验（`qa_guardrail`）
  - 下限：0.001
  - 上限：1
  - 单位：kWh/kg 净椰奶
  - 基准：生产线特定计量前的宽泛首轮估计
  - 基准类型：参考流（`reference_flow`）
  - 证据类型：推理估算（`reasoned_estimate`）

##### 废物流

##### 基本流

#### 输出

##### 产品流

###### 配方散装椰奶（`bulk_coconut_milk`）

记录批次质量及用于放行散装产品进入保藏和灌装工序的规格结果。

- 选定流：配方散装椰奶
- 流属性/单位：Mass / kg
- 数量规则：计量的散装转移质量
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：产品特定（`product_specific`）
- 归一化基准：每 1 kg 净椰奶
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_process_yields`
- 来源：

##### 废物流

###### 配料损失和不合格散装产品（`formulation_product_loss`）

按去向记录溢洒、滞留、取样损失和不合格散装产品。

- 选定流：椰奶产品损失
- 流属性/单位：Mass / kg
- 数量规则：按去向计量或由质量平衡计算的损失
- 数值来源模式：计算值（`calculated_value`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每 1 kg 净椰奶
- 基准类型：参考流（`reference_flow`）
- 证据类型：由采集数据计算（`calculated_from_collection`）
- 采集协议：`cp_process_yields`
- 来源：
- 数量范围：暂定配料损失筛选估算
  - 范围角色：QA 校验（`qa_guardrail`）
  - 下限：0
  - 上限：0.5
  - 单位：kg/kg 净椰奶
  - 基准：获得批次质量平衡证据前的宽泛首轮估计
  - 基准类型：参考流（`reference_flow`）
  - 证据类型：推理估算（`reasoned_estimate`）

##### 基本流

### 过程：保藏处理、灌装、冷却与包装（`preservation_filling_packaging`）

#### 输入

##### 产品流

###### 送入保藏和灌装的散装椰奶（`bulk_milk_to_filling`）

记录进入已声明热处理、无菌或经验证替代保藏路线的散装产品质量。

- 选定流：配方散装椰奶
- 流属性/单位：Mass / kg
- 数量规则：计量的转移质量
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：产品特定（`product_specific`）
- 归一化基准：每 1 kg 净椰奶
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_process_yields`
- 来源：

###### 保藏用外购工艺蒸汽（`preservation_steam`）

记录跨越过程边界的蒸汽。下述已核验天工流仅对应 11.0 MPaG 蒸汽；只有供汽等级匹配时才可采用，否则须把实际压力和温度解析为另一条独立流。

- 选定流：蒸汽 `293f9fd9-5182-4d35-8aa5-ce73d4f322b7`
- 流属性/单位：Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- 数量规则：蒸汽流量计读数或经凝结水修正的质量平衡
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：技术特定（`technology_specific`）
- 归一化基准：每 1 kg 净椰奶
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_energy_records`
- 来源：

###### 保藏用外购热水（`preservation_hot_water`）

把跨越过程边界的热水记录为外供产品。声明入口和回水温度，并在发布前解析温度匹配的天工流；不得与蒸汽或燃料合并。

- 选定流：按已声明入口和回水温度供应的热水
- 流属性/单位：Mass / kg
- 数量规则：计量供应质量，不重复计入返回闭式循环的水
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：技术特定（`technology_specific`）
- 归一化基准：每 1 kg 净椰奶
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_energy_records`
- 来源：

###### 现场保藏供热用天然气（`preservation_natural_gas`）

记录现场热处理或热水制备用管道天然气。只有燃料和设备记录证明未使用天然气时才可填零。

- 选定流：气态天然气 `4f19ca0e-7b3b-11dd-ad8b-0800200c9a66`
- 流属性/单位：Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- 数量规则：计量燃料质量，或按实测密度和已声明低位热值把计量体积换算为质量
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：技术特定（`technology_specific`）
- 归一化基准：每 1 kg 净椰奶
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_energy_records`
- 来源：

###### 现场保藏供热用柴油（`preservation_diesel`）

仅在实际锅炉、加热器或备用热源燃用柴油时记录，并与其他燃料分开。

- 选定流：柴油 `9d258d75-6792-4f1c-9856-81602ed8f816`
- 流属性/单位：Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- 数量规则：计量罐区领用量并与期初、期末库存核对
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：技术特定（`technology_specific`）
- 归一化基准：每 1 kg 净椰奶
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_energy_records`
- 来源：

###### 现场保藏供热用液化石油气（`preservation_lpg`）

仅在液化石油气确为保藏或热水燃料时记录。钢瓶或储罐用量须与天然气和柴油分开。

- 选定流：液化石油气 `d54ae71a-1245-4e3f-b694-dbf2b22bbf7d`
- 流属性/单位：Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- 数量规则：计量钢瓶或储罐领用量并与库存变化核对
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：技术特定（`technology_specific`）
- 归一化基准：每 1 kg 净椰奶
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_energy_records`
- 来源：

###### 保藏、灌装和冷却用电（`filling_electricity`）

记录场址控制的泵、热处理设备、灌装机、输送机、喷码、冷却和冷藏暂存用电。

- 选定流：交流电 `50657322-939c-4829-a87b-47c093bfa6a7`
- 流属性/单位：Net calorific value `93a60a56-a3c8-11da-a746-0800200c9a66` / kWh
- 数量规则：分表计量电量，或按设备功率和运行时间进行工程分配
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：技术特定（`technology_specific`）
- 归一化基准：每 1 kg 净椰奶
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_energy_records`
- 来源：

###### 一级和二级包装（`packaging_materials`）

按材料和组件分别记录容器、盖、封口、标签、纸箱、薄膜、托盘及其他包装。

- 选定流：包装材料，组件特定
- 流属性/单位：Mass / kg
- 数量规则：外购或领用包装质量减去有记录的未使用退料量，再按已放行产品归一化
- 数值来源模式：计算值（`calculated_value`）
- 适用范围：产品特定（`product_specific`）
- 归一化基准：每 1 kg 净椰奶
- 基准类型：参考流（`reference_flow`）
- 证据类型：由采集数据计算（`calculated_from_collection`）
- 采集协议：`cp_packaging_records`
- 来源：`codex-cxc-1-1969`
- 数量范围：暂定包装质量筛选估算
  - 范围角色：QA 校验（`qa_guardrail`）
  - 下限：0.005
  - 上限：0.5
  - 单位：kg/kg 净椰奶
  - 基准：覆盖多种消费和大包装形式的宽泛估计
  - 基准类型：参考流（`reference_flow`）
  - 证据类型：推理估算（`reasoned_estimate`）

##### 废物流

##### 基本流

#### 输出

##### 产品流

###### 已放行包装椰奶（`coconut_milk_at_plant_gate`）

这是在完成已声明保藏、灌装、完整性检查以及放行所需冷却或常温调节后的参考产品。

- 选定流：椰奶 `683e1059-d269-4198-a67d-f306a86bcf8d`
- 流属性/单位：Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- 数量规则：1 kg 净已放行产品的固定参考输出
- 数值来源模式：固定值（`fixed_value`）
- 适用范围：产品特定（`product_specific`）
- 归一化基准：生产场址门口 1 kg 净椰奶
- 基准类型：参考流（`reference_flow`）
- 证据类型：身份引用（`identity_reference`）
- 来源：

##### 废物流

###### 不合格产品和包装废物（`filling_rejects`）

按材料和去向分别记录不合格产品、开停机损失、破损容器和不合格包装。

- 选定流：灌装与包装拒收物，去向特定
- 流属性/单位：Mass / kg
- 数量规则：计量拒收质量，或以经核实的单件质量换算数量
- 数值来源模式：计算值（`calculated_value`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每 1 kg 净椰奶
- 基准类型：参考流（`reference_flow`）
- 证据类型：由采集数据计算（`calculated_from_collection`）
- 采集协议：`cp_packaging_records`
- 来源：
- 数量范围：暂定灌装拒收筛选估算
  - 范围角色：QA 校验（`qa_guardrail`）
  - 下限：0
  - 上限：0.5
  - 单位：kg/kg 净椰奶
  - 基准：获得拒收日志和经核实包装质量前的宽泛首轮估计
  - 基准类型：参考流（`reference_flow`）
  - 证据类型：推理估算（`reasoned_estimate`）

##### 基本流

###### 前景冷却系统制冷剂泄漏（`refrigerant_leakage`）

仅在制冷或冷藏由场址控制且泄漏可归属于产品线时纳入。

- 选定流：制冷剂排放，物质特定
- 流属性/单位：Mass / kg
- 数量规则：由制冷剂采购、维修、回收和设备存量记录计算泄漏量
- 数值来源模式：计算值（`calculated_value`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每 1 kg 净椰奶
- 基准类型：参考流（`reference_flow`）
- 证据类型：由采集数据计算（`calculated_from_collection`）
- 采集协议：`cp_refrigerant_records`
- 来源：

### 过程：清洗、卫生及场内废水处理（`sanitation_wastewater`）

#### 输入

##### 产品流

###### 清洗与卫生用水（`cleaning_water`）

记录原位清洗循环、设备清洗和可归属卫生操作使用的饮用级或其他适宜质量的水。

- 选定流：清洗用水，已声明水质
- 流属性/单位：Mass / kg
- 数量规则：计量或按循环计算的可归属用水量
- 数值来源模式：计算值（`calculated_value`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每 1 kg 净椰奶
- 基准类型：参考流（`reference_flow`）
- 证据类型：由采集数据计算（`calculated_from_collection`）
- 采集协议：`cp_cleaning_records`
- 来源：`codex-cxc-1-1969`
- 数量范围：暂定清洗用水筛选估算
  - 范围角色：QA 校验（`qa_guardrail`）
  - 下限：0
  - 上限：20
  - 单位：kg/kg 净椰奶
  - 基准：覆盖批式和连续卫生系统的宽泛首轮估计
  - 基准类型：参考流（`reference_flow`）
  - 证据类型：推理估算（`reasoned_estimate`）

###### 清洗与消毒化学品（`cleaning_chemicals`）

按产品质量以及重要时的有效成分浓度，分别记录每种洗涤剂、碱、酸、消毒剂和其他处理化学品。

- 选定流：清洗或消毒化学品，产品特定
- 流属性/单位：Mass / kg
- 数量规则：采购、领用或加药记录按已放行产品归一化
- 数值来源模式：计算值（`calculated_value`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每 1 kg 净椰奶
- 基准类型：参考流（`reference_flow`）
- 证据类型：由采集数据计算（`calculated_from_collection`）
- 采集协议：`cp_cleaning_records`
- 来源：

###### 清洗与废水系统用电（`sanitation_electricity`）

记录泵、未计入热能的加热器、曝气和其他场址控制处理设备的电力。

- 选定流：电力，已声明电网或供应组合
- 流属性/单位：Energy / kWh
- 数量规则：计量用电，或由运行记录分配的设备电量
- 数值来源模式：计算值（`calculated_value`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每 1 kg 净椰奶
- 基准类型：参考流（`reference_flow`）
- 证据类型：由采集数据计算（`calculated_from_collection`）
- 采集协议：`cp_energy_records`
- 来源：
- 数量范围：暂定卫生用电筛选估算
  - 范围角色：QA 校验（`qa_guardrail`）
  - 下限：0
  - 上限：2
  - 单位：kWh/kg 净椰奶
  - 基准：公用工程分表计量前的宽泛首轮估计
  - 基准类型：参考流（`reference_flow`）
  - 证据类型：推理估算（`reasoned_estimate`）

##### 废物流

##### 基本流

#### 输出

##### 产品流

##### 废物流

###### 送往处理的废水（`total_wastewater_to_treatment`）

按去向记录废水以及处理数据集需要的实测特征。

- 选定流：送往处理的废水，去向特定
- 流属性/单位：Mass / kg
- 数量规则：计量排放或场址水量平衡计算，并避免重复计算过程废水行
- 数值来源模式：计算值（`calculated_value`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每 1 kg 净椰奶
- 基准类型：参考流（`reference_flow`）
- 证据类型：由采集数据计算（`calculated_from_collection`）
- 采集协议：`cp_wastewater_records`
- 来源：
- 数量范围：暂定总废水筛选估算
  - 范围角色：QA 校验（`qa_guardrail`）
  - 下限：0
  - 上限：25
  - 单位：kg/kg 净椰奶
  - 基准：宽泛首轮场址水量平衡估计
  - 基准类型：参考流（`reference_flow`）
  - 证据类型：推理估算（`reasoned_estimate`）

###### 废水处理污泥与筛渣（`treatment_residues`）

纳入场内废水处理时，应按含水率基准和去向记录干质量或湿质量。

- 选定流：废水处理残余物，去向特定
- 流属性/单位：Mass / kg
- 数量规则：计量的移除质量，并声明含水率基准
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每 1 kg 净椰奶
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_wastewater_records`
- 来源：
- 数量范围：暂定处理残余物筛选估算
  - 范围角色：QA 校验（`qa_guardrail`）
  - 下限：0
  - 上限：1
  - 单位：kg/kg 净椰奶
  - 基准：获得场址处理记录前的宽泛湿质量估计
  - 基准类型：参考流（`reference_flow`）
  - 证据类型：推理估算（`reasoned_estimate`）

##### 基本流

###### 直接排放的处理后出水（`treated_effluent_discharge`）

处理后出水直接排入环境时，应将水和受管制污染物负荷报告为基本流；同一质量不得重复记录为送往处理的废物流。

- 选定流：处理后出水和实测污染物排放，物质特定
- 流属性/单位：Mass / kg
- 数量规则：实测排放体积或质量与实验室浓度换算为污染物负荷
- 数值来源模式：计算值（`calculated_value`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每 1 kg 净椰奶
- 基准类型：参考流（`reference_flow`）
- 证据类型：由采集数据计算（`calculated_from_collection`）
- 采集协议：`cp_wastewater_records`
- 来源：

## 7. 分配与共产品处理

| rule_id | 适用对象 | 规则 | 来源 |
| --- | --- | --- | --- |
| `allocation_avoid` | separable_processes_and_products | 尽可能通过细分预处理、提取、配料、灌装、公用工程和处理操作，并使用直接计量的批次、仪表、运行时间或质量平衡记录来避免分配。 | `ghg-protocol-product-standard-2011` |
| `allocation_physical` | unavoidable_shared_burdens | 无法细分时，按因果物理关系分配共享负荷。对于椰子提取液和固体共产品，应优先考虑干物质或其他与组成相关的基准，而不是直接采用可能受加水影响的湿质量。 | `ghg-protocol-product-standard-2011` |
| `allocation_other_relationship` | no_defensible_physical_relationship | 不存在可辩护的物理关系时，采用经济或其他有记录的关系，声明数据期间及价格或参数，并与合理的物理基准开展敏感性比较。 | `ghg-protocol-product-standard-2011` |
| `allocation_waste_and_co_product_status` | coconut_residues_and_recovered_outputs | 按实际去向将每种残余物归类为废物、内部回收物或共产品。除非记录了明确的系统扩展模型和被替代产品，否则门到门清单不得计入避免负荷信用。 | `ghg-protocol-product-standard-2011` |

## 8. 前景数据采集、计算与质量规则

### 数据采集协议

| protocol_id | process_id | flow_role | record_type | raw_fields | collection_method | unit | frequency | temporal_coverage | site_scope | aggregation_rule | quality_evidence |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| `cp_coconut_receipts` | `material_preparation_extraction` | 椰子原料与拒收物 | 接收与称量记录 | 日期；供应商；产地；接收状态；合格质量；拒收质量；可得时的水分或固形物结果 | 校准秤和接收检验 | kg；质量分数 | 每批原料 | 具有代表性的连续 12 个月或有依据的生产周期 | 供应给建模生产线的全部批次 | 分别汇总合格量和拒收量，再按已放行产品归一化 | 秤校准；供应商规格；检验记录；取样方法 |
| `cp_water_records` | `material_preparation_extraction`; `formulation_homogenization` | 清洗、提取和配方水 | 仪表与批次记录 | 仪表起止读数；批次体积或质量；用途；密度假设；饮用水证据 | 专用仪表或经核实的批次容器 | kg 或 m3 | 每批或每日 | 与产品输出相同期间 | 全部相关用水点 | 在归一化前分开产品掺入水、工艺水、清洁水、冷却水和公用工程水 | 仪表校准；饮用水检测；与场址水量平衡核对 |
| `cp_formulation_batches` | `formulation_homogenization` | 椰子基料、水和配料 | 配方、领料和称量记录 | 批次号；配料号；供应商批号；投入质量；退料质量；固形物或脂肪规格 | 校准秤和受控配方系统 | kg；质量分数 | 每个批次 | 与产品输出相同期间 | 全部已声明配方 | 各配料净投入质量除以已放行产品 | 秤校准；批准配方；批号追溯；实验室规格 |
| `cp_process_yields` | 全部生产过程 | 中间转移、产品输出和损失 | 批次质量平衡记录 | 投入质量；转移质量；已放行净产品；滞留；取样；溢洒；拒收；返工；库存变化 | 校准储罐或秤及批次核对 | kg | 每个批次 | 与产品输出相同期间 | 全部前景生产步骤 | 核对投入、输出、库存变化、损失和残余物，避免重复计算 | 校准；批次放行记录；有记录的核对容差 |
| `cp_energy_records` | 全部生产过程 | 电力与热能 | 公用工程仪表、燃料发票和设备运行记录 | 载能体；仪表起止读数；采购量；设备功率；运行时间；产量；回收能量 | 优先分表计量；否则采用有记录的工程计算 | kWh；MJ；载能体单位 | 每批、每班或每月 | 具有代表性的 12 个月或有依据的生产周期 | 全部前景设备和共享公用工程 | 优先直接仪表；共享量按因果运行时间、吞吐量或实测需求分配 | 仪表校准；发票核对；设备规格；分配依据 |
| `cp_packaging_records` | `preservation_filling_packaging` | 包装投入和拒收物 | 物料清单、领用、数量和拒收记录 | 组件号；材料；单件质量；领用数量；退回数量；拒收数量；已放行单元 | 经核实单件质量和库存核对 | kg；件 | 每批或每个生产订单 | 与产品输出相同期间 | 全部一级和二级包装组件 | 各组件净领用质量除以已放行产品 | 供应商规格；单件质量核查；库存核对 |
| `cp_residue_records` | `material_preparation_extraction` | 椰子残余物和去向 | 地磅、容器、销售和处置记录 | 残余物类型；湿质量；含水率基准；去向；相关时的收入或内部用途 | 校准秤和去向文件 | kg | 每次运输或每批 | 与产品输出相同期间 | 全部前景残余物 | 按残余物状态和去向分别汇总 | 秤校准；转移单；水分取样；去向证据 |
| `cp_cleaning_records` | `sanitation_wastewater` | 清洗水与化学品 | 原位清洗和卫生日志 | 循环号；设备；水量；化学品；浓度；加药量；起止时间；共享生产线基准 | 自动循环日志或结合仪表与加药核查的操作记录 | kg；L；质量分数 | 每个清洗循环 | 与产品输出相同期间 | 全部可归属生产和共享卫生循环 | 专用循环直接归属；共享循环按有记录的设备表面积、运行时间或吞吐量分配 | 仪表与加药校准；卫生放行记录；批准程序 |
| `cp_wastewater_records` | `sanitation_wastewater` | 废水、污泥和直接出水 | 排放仪表、实验室报告和处理日志 | 流量；去向；取样时间；污染物浓度；污泥质量；含水率；处理化学品和能量引用 | 校准流量计、代表性取样和实验室分析 | kg；m3；mg/L；kg 污染物 | 连续或每次排放；实验室频率依许可或控制计划 | 与产品输出相同期间 | 全部可归属排放点和场内处理 | 污染物负荷为流量乘浓度；避免过程行与总排放重复 | 仪表校准；样品交接；实验室方法；许可报告；质量平衡核对 |
| `cp_refrigerant_records` | `preservation_filling_packaging` | 制冷剂泄漏 | 采购、充注、回收、维修和设备存量记录 | 制冷剂身份；期初充注量；添加量；回收量；期末充注量；设备范围 | 结合维修记录的年度质量平衡 | kg | 每次维修及年度核对 | 具有代表性的 12 个月 | 服务于产品的全部场址受控设备 | 按有记录的设备服务份额将可归属泄漏量除以已放行产品 | 维修证明；钢瓶记录；设备清单；核对记录 |

### 计算规则

| rule_id | Applies to | Formula or rule | Inputs | Output | source_ids |
| --- | --- | --- | --- | --- | --- |
| `calc_reference_normalization` | 全部前景清单行 | 归一化数量 = 同期可归属数量 / 已放行净椰奶质量 | 可归属数量；已放行净产品质量 | 每 1 kg 净椰奶的数量 | `ghg-protocol-product-standard-2011` |
| `calc_batch_mass_balance` | 每个生产批次 | 期初库存 + 实测投入 = 实测转移 + 已放行产品 + 残余物 + 废水携带产品固形物 + 其他损失 + 期末库存；报告未核对差额 | 批次质量；库存变化；使用时的固形物数据 | 已核对批次得率和未解释质量差 |  |
| `calc_metered_water_mass` | 按体积计量的水 | 水质量 = 实测体积乘以有记录的密度；仅在温度和水质允许时采用 1 kg/L 近似 | 水体积；密度假设 | kg 水 | `codex-cxc-1-1969` |
| `calc_energy_from_runtime` | 未分表设备 | 能量 = 经核实额定需求 × 带负荷运行时间 × 有记录负荷系数；不得将铭牌功率本身作为实测消耗 | 设备需求；运行时间；负荷系数 | 按载能体计的 kWh 或 MJ |  |
| `calc_packaging_mass` | 包装组件 | 组件质量 = 净领用件数 × 经核实单件质量；散装材料采用净领用质量 | 领用数量；退回数量；拒收数量；单件质量 | 按组件计的 kg 包装 |  |
| `calc_pollutant_load` | 处理后出水直接排放 | 污染物负荷 = 代表性排放体积 × 匹配浓度，并披露单位换算和未检出值处理 | 排放体积；浓度；取样覆盖 | 每参考流的 kg 污染物 |  |
| `calc_shared_allocation` | 无法避免的共享过程 | 对全部共享投入和输出一致采用所选因果物理因子；不存在可辩护物理因子时，采用并披露所选替代关系及敏感性 | 共享负荷；产品和共产品驱动数据 | 已分配前景数量 | `ghg-protocol-product-standard-2011` |

### 数据质量要求

| requirement_id | Applies to | Requirement | Evidence |
| --- | --- | --- | --- |
| `dq_identity_and_traceability` | 椰子原料、配料和产品 | 保留供应商或内部批号、接收状态、配方、批次关联和产品放行关联。 | 接收记录；配方；批号谱系；放行记录 |
| `dq_technological_representativeness` | 全部重要过程 | 数据必须代表实际使用的提取、均质、保藏、灌装、冷却、清洗和处理技术。 | 设备清单；过程图；仪表覆盖；技术描述；`ghg-protocol-product-standard-2011` |
| `dq_geographical_representativeness` | 前景与关联上游数据集 | 声明生产地域，并为电力、水、椰子原料、运输和处理选择与供应地域相符的上游数据集。 | 场址地址；供应商产地；数据集元数据；`ghg-protocol-product-standard-2011` |
| `dq_temporal_representativeness` | 活动数据与因子 | 可行时采用连续 12 个月；较短生产周期必须覆盖代表性运行状态并说明依据。记录因子年份并更新时间不匹配数据。 | 带日期记录；生产日历；因子元数据；`ghg-protocol-product-standard-2011` |
| `dq_completeness` | 过程和流覆盖 | 纳入全部必需前景过程，并核对椰子原料、水、产品、包装、残余物、废水、能量和损失。量化或说明每项排除。 | 过程图；质量与水量平衡；公用工程核对；排除项清单；`ghg-protocol-product-standard-2011` |
| `dq_reliability` | 测量与计算 | 保留足以复现每个报告数量的校准、实验室方法、取样、发票核对、计算输入、分配逻辑和审核证据。 | 校准证书；实验室报告；发票；计算工作簿；审核签署；`codex-cxc-1-1969`; `ghg-protocol-product-standard-2011` |

## 9. 校验规则

| rule_id | 适用对象 | 规则 | 来源 |
| --- | --- | --- | --- |
| `validate_reference_identity` | reference_product | 参考输出必须使用 Coconut milk UUID `683e1059-d269-4198-a67d-f306a86bcf8d`、Mass UUID `93a60a56-a3c8-11da-a746-0800200b9a66`、单位组 UUID `93a60a57-a4c8-11da-a746-0800200c9a66`，并以不含包装的 1 kg 净产品为参考。 |  |
| `validate_scope_identity` | product_category | 产品描述必须识别为供饮用的稀椰子胚乳乳化液，且不得表示烹调用椰奶或椰浆、椰子水、发酵产品或非以椰子为主体的混合饮料。 | `un-cpc-v3-explanatory-notes-2025` |
| `validate_starting_condition` | foreground_boundary | 数据集必须声明整椰、椰肉、提取液还是其他椰子基料进入前景边界，并为之前的全部操作连接上游数据集。 | `fao-coconut-postharvest-1999`; `ghg-protocol-product-standard-2011` |
| `validate_qualifiers` | reference_flow_metadata | 第 3 节全部必需限定信息都必须存在，并与配方、工艺路线、包装和市场状态一致。 |  |
| `validate_process_and_mass_balance` | foreground_inventory | 必需过程、中间转移、已放行产品、残余物、废水和损失必须在场址规定容差内核对；未解释差额必须披露并调查。 | `ghg-protocol-product-standard-2011` |
| `validate_water_and_hygiene_records` | food_contact_and_preservation | 应保留所代表生产期间的产品接触水水质、保藏时温或经验证替代参数、包装放行和加工记录。 | `codex-cxc-1-1969` |
| `validate_allocation` | shared_processes_and_co_products | 分配必须遵循第 7 节层级，对相似流采用一致因子，并在使用替代关系时披露共产品状态、因子数据和敏感性。 | `ghg-protocol-product-standard-2011` |
| `validate_provisional_ranges` | reasoned_estimate_ranges | 临时范围仅用于筛选；范围外数值需要审查，范围内数值仍需前景证据。发布审查必须替换或明确接受每个重要推理估算。 |  |
| `validate_data_quality` | published_foreground_dataset | 数据包必须报告重要过程的技术、地域、时间、完整性和可靠性证据，并确定重要缺口的改进措施。 | `ghg-protocol-product-standard-2011` |

## 10. 发布数据集画像

| 字段 | 值 |
| --- | --- |
| dataset_role | 生产场址门口包装椰奶的场址特定前景生产数据集 |
| downstream_use | `secondary_dataset`；方法学和数据质量审核后可作为 `background_dataset` |
| allowed_use | 椰奶范围、接收状态、配方、保藏路线、包装、地域和期间与本数据集相容的产品足迹与生命周期模型 |
| excluded_use | 未经代表性审查，不得直接表示烹调用椰奶或椰浆、椰子水、种植、零售、消费者使用或其他场址和配方 |
| required_metadata | 规范 PCR id；产品流 UUID；椰子接收状态和产地；配方及固形物或脂肪规格；保藏路线；包装组件；地域；数据期间；场址覆盖；分配方法；上游数据集引用 |
| required_quality_disclosure | 仪表和秤覆盖；质量与水量平衡；取样和实验室方法；时间覆盖；排除项；分配因子；共产品和废物去向；临时估算；技术、地域、时间、完整性和可靠性评价 |
| update_trigger | 椰子接收状态、配方、保藏或灌装技术、包装系统、能源供应、共产品用途、废水路线、分配方法、场址范围发生变化，或得率、能耗、用水、损失或数据质量证据发生重要变化 |

## 11. 数据源

| Source id | Type | Reference | Used for |
| --- | --- | --- | --- |
| `un-cpc-v3-explanatory-notes-2025` | `official_guidance` | 联合国统计司，*Central Product Classification (CPC) Version 3.0 Explanatory Notes*，2025-06-30，https://unstats.un.org/unsd/classifications/Econ/Download/In%20Text/CPC_Ver_3.0_Exp_Notes_30Jun2025.pdf（检索日期：2026-08-11） | CPC 24421 的分类背景及经审查的纳入/排除边界 |
| `fao-coconut-postharvest-1999` | `handbook` | P. G. Punchihewa、R. N. Arancon，*Coconut: Post-harvest Operations*，亚洲及太平洋椰子共同体；AGSI/FAO 编辑，最后审阅于 1999-10-14，https://www.fao.org/fileadmin/user_upload/inpho/docs/Post_Harvest_Compendium_-_Coconut.pdf（检索日期：2026-08-11） | 椰子接收状态声明，以及筛选、去衣、椰肉预处理、磨碎、水相提取、压榨和过滤的过程分解 |
| `codex-cxc-1-1969` | `standard` | Codex Alimentarius，*General Principles of Food Hygiene*，CXC 1-1969，https://www.fao.org/input/download/standards/23/CXP_001e.pdf（检索日期：2026-08-11） | 饮用水、原料验收、时温控制、包装保护、卫生、文件和记录保留 |
| `ghg-protocol-product-standard-2011` | `standard` | World Resources Institute 与 World Business Council for Sustainable Development，*Product Life Cycle Accounting and Reporting Standard*，2011，https://ghgprotocol.org/sites/default/files/standards/Product-Life-Cycle-Accounting-Reporting-Standard_041613.pdf（检索日期：2026-08-11） | 过程图和清单边界、前景主数据、分配层级、不确定性披露，以及技术、地域、时间、完整性和可靠性数据质量指标 |
