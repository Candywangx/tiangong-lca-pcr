---
pcr_id: pcr.food-products-beverages-and-tobacco-textiles-apparel-and-leather-products.meat-fish-fruits-vegetables-oils-and-fats.pineapples-otherwise-prepared-or-preserved
language: zh-CN
status: candidate
content_maturity: authored_methodology
translation_status: aligned
sync_with: pcr.en-US.md
---

# 其他制作或保藏的菠萝

## 1. 范围与适用性

本 PCR 适用于 CPC 3.0 子类 21491 所涵盖的制作或保藏菠萝产品的前景生产。范围包括以菠萝为原料，经配方处理并采用一种已声明的主要保藏路线制成的包装或散装产品，包括冷冻、无菌或热灌装、化学或渗透保藏以及密封容器热处理产品。菠萝罐头只是这一更广产品类别中的一种路线，并不代表整个类别。

前景边界始于菠萝、配方成分、初级包装及其他外购投入进入加工设施，止于净重保藏菠萝完成包装或以其他方式具备离开生产设施的条件。菠萝种植、外购成分和包装的生产、外部公用工程、分销、零售、消费者使用及生命末期均不在前景边界内；研究纳入这些阶段时，应连接相应的上游或下游数据集。鲜菠萝、以菠萝汁作为声明产品的产品以及划入其他分类叶节点的产品不属于本 PCR。

## 2. 产品类别识别

| 字段 | 值 |
| --- | --- |
| canonical_pcr_id | pcr.food-products-beverages-and-tobacco-textiles-apparel-and-leather-products.meat-fish-fruits-vegetables-oils-and-fats.pineapples-otherwise-prepared-or-preserved |
| classification_refs | CPC 3.0：21491，Pineapples, otherwise prepared or preserved（`unsd-cpc-3-21491`） |
| covered_products | 采用一种主要保藏路线制成的菠萝块、片、丁、碎料、果肉或其他已声明物理形态；产品可带或不带已声明的装填介质，并可采用零售或散装形式。 |
| excluded_products | 鲜菠萝；以菠萝汁作为参考产品的产品；由数据编制者划入 CPC 3.0 子类 21491 之外的产品；不以菠萝产品名义销售的混合水果产品。 |
| representative_product | 经所选保藏路线处理后具备离开生产设施条件的净重菠萝产品；包含已声明的装填介质，但不包含包装。 |
| production_route | 菠萝接收与预处理；配方与装填；恰好一种已声明的主要保藏路线（`sealed_container_thermal`、`freezing` 或 `other_validated_preservation`）；最终包装与发运准备。 |
| market_state | 采用零售或散装包装的常温稳定、冷冻或其他保藏状态，并声明温度状态、物理形态、装填介质和初级包装。 |

## 3. 参考流

| 字段 | 值 |
| --- | --- |
| What | 具备离开生产设施条件的其他制作或保藏的净重菠萝产品。 |
| How much | 1 kg 净重产品；不含所有包装，但包含随产品销售的任何装填介质。 |
| How well | 符合已声明的物理形态、配方、装填介质、保藏路线和销售温度状态，并披露路线特定的规格或符合性状态。 |
| How long or cycle | 生产设施门口的一个已完成生产批次；不设定服务期限。 |
| reference_flow_link | 功能单位由下表唯一的 Tiangong 产品流和参考数量实现。 |

| 字段 | 值 |
| --- | --- |
| 参考数量 | 1 kg 净重产品 |
| 参考产品流 | Pineapples, otherwise prepared or preserved `5787a516-5769-4072-a5fc-2ef53e8ba7e4` |
| 参考流属性 | Mass `93a60a56-a3c8-11da-a746-0800200b9a66` |
| 参考单位组 | Units of mass `93a60a57-a4c8-11da-a746-0800200c9a66` |
| 参考单位 | kg |
| 必需限定信息 | 主要保藏路线；物理形态；对物料具有实质影响时的菠萝品种或已声明原料规格；装填介质或配方；净含量基准；适用时的沥干菠萝质量或固形物含量；初级包装形式；常温、冷藏或冷冻销售状态；设施地理位置；生产期间 |

构建前景数据包时，每项必需限定信息都必须记录在数据集元数据、过程说明、参考流备注、产品说明或等效数据包字段中。含液体装填介质的产品仍按总净重产品归一化；其沥干菠萝质量或固形物含量是额外的必需限定信息，而不是另一参考数量。

## 4. 计量与单位规则

| rule_id | 适用对象 | 必需流属性 | 必需单位 | 规则 |
| --- | --- | --- | --- | --- |
| `reference_net_mass` | 参考产品 | Mass `93a60a56-a3c8-11da-a746-0800200b9a66` | kg | 在所选保藏路线完成后计量净重产品质量，排除初级、次级和三级包装，并包含作为产品一部分销售的装填介质。 |
| `drained_mass_disclosure` | 使用液体装填介质的产品 | Mass `93a60a56-a3c8-11da-a746-0800200b9a66` | kg | 采用已声明的试验或工厂方法记录同一批次的总净含量和沥干菠萝质量；不得用沥干质量替代 1 kg 参考数量。 |
| `lot_mass_balance` | 各前景过程 | Mass `93a60a56-a3c8-11da-a746-0800200b9a66` | kg | 投入、产品、共产品、废物、废水及有记录的库存变化应采用一致的湿重基准；除非披露干物质换算及其测得含水率数据。 |
| `energy_carrier_separation` | 保藏与包装能源 | 按载能体分别记录的能量 | kWh 或 MJ | 分别保留计量电力与外购燃料、蒸汽、热或冷量记录；记录每个换算因子，不得将其合并为无依据的单一能源总量。 |

## 5. 系统边界

### 边界概化

| 字段 | 值 |
| --- | --- |
| declared_starting_condition | 菠萝、配方成分、包装和公用工程投入到达生产设施门口，并声明物理状态、供应商地理位置和进料质量基准。 |
| starting_condition_role | 前景预处理的起始条件；上游生产负荷由供应商特定或适当的次级数据集表示。 |
| product_classification_scope | CPC 3.0 子类 21491；数据集声明所表示的具体产品和主要保藏路线。 |
| recursive_input_rule | 已购入且属于同一产品类别的投入作为可见技术领域投入记录，并在供应商门口连接上游数据集；其生产不在本前景系统内重复。 |
| upstream_dataset_requirement | 研究纳入相应阶段时，为接收的菠萝、成分、包装材料、载能体、供水及外部处理的废物连接上游数据集。 |
| disclosure | 声明设施地理位置、生产期间、产品形态、配方或装填介质、保藏路线、温度状态、包装形式、共产品处理、废物去向及任何边界扩展。 |

### 规范性规则

| rule_id | 适用对象 | 规则 | source_ids |
| --- | --- | --- | --- |
| `boundary_foreground_operations` | 前景系统边界 | 纳入菠萝接收与预处理、配方与装填、所选保藏处理、最终包装、直接使用的公用工程、现场直接排放以及这些操作产生的废物。 | `eu-pef-2021-2279` |
| `boundary_upstream_links` | 外购投入与外部服务 | 保持外购菠萝、成分、包装、公用工程和外部废物处理可见，并连接适当的上游数据集，不得在前景过程中重新构建其生产。 | `eu-pef-2021-2279` |
| `boundary_route_exclusivity` | 保藏处理 | 主要路线必须且只能声明一个：`sealed_container_thermal`、`freezing` 或 `other_validated_preservation`。仅记录该路线特定的流；辅助冷却或加热不构成第二条主要路线。 | `unsd-cpc-3-21491` |
| `boundary_canned_route` | 密封容器菠萝罐头 | 仅当声明产品属于 Codex CXS 319-2015 的水果罐头适用范围时，采用该标准的产品描述和适用菠萝附件符合性记录；不得将罐藏路线应用于整个 PCR 类别。 | `codex-cxs-319-2015` |
| `boundary_downstream_exclusion` | 默认设施门口数据集 | 排除分销、零售、消费者储存或制备以及包装或产品生命末期；除非声明的研究边界通过独立过程和数据集明确纳入这些环节。 | `eu-pef-2021-2279` |

## 6. 过程清单结构

### 过程图

| process_id | 过程名称 | 纳入状态 | 纳入条件 | 建模角色 | 定量参考 |
| --- | --- | --- | --- | --- | --- |
| `pineapple_receiving_preparation` | 菠萝接收与预处理 | required | 始终纳入。 | 前景水果接收、分选、适用时清洗、去皮、去芯、切分、打浆以及不可用物料分离。 | kg 预处理菠萝中间物 |
| `formulation_filling` | 配方与装填 | required | 始终纳入；无添加介质产品对可选配方投入记录为零。 | 前景配方制备、成分投配以及装入初级包装或散装处理单元。 | kg 保藏前已装填产品 |
| `preservation_treatment` | 保藏处理 | required | 必须声明且只能声明一种主要保藏路线；仅适用该路线特定的投入和排放。 | 前景热处理、冷冻或其他经验证的保藏处理。 | kg 保藏产品 |
| `final_packing_dispatch` | 最终包装与发运准备 | required | 始终纳入；不存在次级或三级包装时，相应投入为零。 | 前景检验、打码、次级或三级包装以及转移至设施门口。 | 1 kg 净重保藏菠萝产出 |

### 过程：菠萝接收与预处理（`pineapple_receiving_preparation`）

#### 输入

##### 产品流

###### 接收的菠萝果实（`pineapple_fruit_input`）

按批次记录预处理前跨越设施门口的接收与拒收菠萝质量。

- 选定流：Pineapple fruit
- 流属性/单位：Mass / kg
- 数量规则：测得的进厂菠萝质量，按净重保藏菠萝产出归一化。
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：设施门口每 1 kg 净重保藏菠萝产出
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_receiving_preparation`
- 数量范围：暂定进厂果实筛查估计，仅在代表性批次记录或经评审的定量证据可用前使用，并在该触发条件满足时替换
  - 范围角色：默认估计（`default_estimate`）
  - 下限：0.2
  - 上限：10
  - 单位：kg/kg 净重保藏菠萝产出
  - 基准：覆盖含装填介质产品和不同预处理损失的候选阶段宽泛筛查
  - 基准类型：参考流（`reference_flow`）
  - 证据类型：推理估算（`reasoned_estimate`）

###### 预处理供水（`preparation_water_input`）

记录用于清洗、槽送、去皮、切分和设备接触预处理操作的计量或核算用水。

- 选定流：Process water
- 流属性/单位：Mass / kg
- 数量规则：测得的预处理供水量，排除可证明归属于其他过程的用水。
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：设施门口每 1 kg 净重保藏菠萝产出
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_receiving_preparation`
- 数量范围：暂定预处理用水筛查估计，仅在代表性水表或批次核算记录可用前使用，并在该触发条件满足时替换
  - 范围角色：默认估计（`default_estimate`）
  - 下限：0
  - 上限：50
  - 单位：kg/kg 净重保藏菠萝产出
  - 基准：允许干式预处理与高用水处理的候选阶段宽泛筛查
  - 基准类型：参考流（`reference_flow`）
  - 证据类型：推理估算（`reasoned_estimate`）

##### 废物流

##### 基本流

#### 输出

##### 产品流

###### 预处理菠萝中间物（`prepared_pineapple_output`）

记录转移至配方过程的菠萝中间物实测质量，并声明其物理形态和湿重基准。

- 选定流：Prepared pineapple intermediate
- 流属性/单位：Mass / kg
- 数量规则：预处理后测得的转移质量。
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：产品特定（`product_specific`）
- 归一化基准：设施门口每 1 kg 净重保藏菠萝产出
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_receiving_preparation`

##### 废物流

###### 分离的果皮、果冠、果芯和拒收菠萝物料（`preparation_residue_output`）

按去向记录每种分离物料流，并识别其作为共产品、回收投入、动物饲料投入或废物离开；除非前景数据集记录其产品地位，否则该流仍列于废物流组。

- 选定流：Pineapple preparation residues
- 流属性/单位：Mass / kg
- 数量规则：按物料流和去向计量的湿重。
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：设施门口每 1 kg 净重保藏菠萝产出
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_receiving_preparation`
- 数量范围：暂定预处理残余物筛查估计，仅在代表性称量残余物记录或经评审的定量证据可用前使用，并在该触发条件满足时替换
  - 范围角色：默认估计（`default_estimate`）
  - 下限：0
  - 上限：10
  - 单位：kg/kg 净重保藏菠萝产出
  - 基准：覆盖菠萝形态和预处理强度的候选阶段宽泛筛查
  - 基准类型：参考流（`reference_flow`）
  - 证据类型：推理估算（`reasoned_estimate`）

###### 预处理废水（`preparation_wastewater_output`）

记录任何单独建模的现场处理之前离开预处理过程的废水，并扣除可证明保留在产品或其他已记录输出中的水。

- 选定流：Preparation wastewater
- 流属性/单位：Mass / kg
- 数量规则：预处理过程的计量排放量或有记录的水平衡结果。
- 数值来源模式：计算值（`calculated_value`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：设施门口每 1 kg 净重保藏菠萝产出
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集数据计算（`calculated_from_collection`）
- 采集协议：`cp_receiving_preparation`
- 数量范围：暂定预处理废水筛查估计，仅在代表性排放记录或完整水平衡记录可用前使用，并在该触发条件满足时替换
  - 范围角色：默认估计（`default_estimate`）
  - 下限：0
  - 上限：50
  - 单位：kg/kg 净重保藏菠萝产出
  - 基准：受已声明用水投入和转移约束的候选阶段宽泛筛查
  - 基准类型：参考流（`reference_flow`）
  - 证据类型：推理估算（`reasoned_estimate`）

##### 基本流

### 过程：配方与装填（`formulation_filling`）

#### 输入

##### 产品流

###### 供配方使用的预处理菠萝（`prepared_pineapple_input`）

记录转移的预处理菠萝质量，并与上一过程输出核对。

- 选定流：Prepared pineapple intermediate
- 流属性/单位：Mass / kg
- 数量规则：配方过程接收的实测转移质量。
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：产品特定（`product_specific`）
- 归一化基准：设施门口每 1 kg 净重保藏菠萝产出
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_formulation_filling`

###### 装填介质与配方成分（`formulation_ingredients_input`）

按外购物料分别记录水、果汁、糖浆组分、糖、盐、酸、允许使用的添加剂或其他配方投入；声明产品不含添加介质或成分时记录为零。

- 选定流：Declared formulation ingredients
- 流属性/单位：Mass / kg
- 数量规则：按成分称量的领料、批次配方核算或供应商发票质量。
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：产品特定（`product_specific`）
- 归一化基准：设施门口每 1 kg 净重保藏菠萝产出
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_formulation_filling`
- 数量范围：暂定配方投入筛查估计，仅在产品含添加介质或成分时有条件使用，并在已批准配方和称量领料记录可用时替换
  - 范围角色：默认估计（`default_estimate`）
  - 下限：0
  - 上限：5
  - 单位：kg/kg 净重保藏菠萝产出
  - 基准：覆盖无添加介质与配方产品的候选阶段宽泛筛查
  - 基准类型：参考流（`reference_flow`）
  - 证据类型：推理估算（`reasoned_estimate`）

###### 供装填使用的初级包装（`primary_packaging_input`）

按材料和质量记录每个初级包装组成件；散装产品应按已声明包装模型记录可重复使用或一次性处理单元。

- 选定流：Primary packaging materials
- 流属性/单位：Mass / kg
- 数量规则：购入或领用包装数量乘以经核实的组成件质量，并与包装单元核对。
- 数值来源模式：计算值（`calculated_value`）
- 适用范围：产品特定（`product_specific`）
- 归一化基准：设施门口每 1 kg 净重保藏菠萝产出
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集数据计算（`calculated_from_collection`）
- 采集协议：`cp_formulation_filling`
- 数量范围：暂定初级包装筛查估计，仅在经核实的包装物料清单和生产数量可用前使用，并在该触发条件满足时替换
  - 范围角色：默认估计（`default_estimate`）
  - 下限：0
  - 上限：5
  - 单位：kg/kg 净重保藏菠萝产出
  - 基准：覆盖散装和零售包装形式的候选阶段宽泛筛查
  - 基准类型：参考流（`reference_flow`）
  - 证据类型：推理估算（`reasoned_estimate`）

##### 废物流

##### 基本流

#### 输出

##### 产品流

###### 保藏前已装填产品（`filled_product_output`）

记录转移至已声明保藏处理的质量，包含菠萝和任何装填介质，但不含包装质量。

- 选定流：Filled pineapple product before preservation
- 流属性/单位：Mass / kg
- 数量规则：转移至保藏过程的实测或质量平衡计算净含量。
- 数值来源模式：计算值（`calculated_value`）
- 适用范围：产品特定（`product_specific`）
- 归一化基准：设施门口每 1 kg 净重保藏菠萝产出
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集数据计算（`calculated_from_collection`）
- 采集协议：`cp_formulation_filling`

##### 废物流

###### 配方与装填损失（`formulation_filling_waste_output`）

按物料和去向分别记录溢洒、不合格产品以及被拒收的初级包装。

- 选定流：Formulation and filling waste
- 流属性/单位：Mass / kg
- 数量规则：称量废物或批次质量平衡结果，不对不同去向的物料进行净额处理。
- 数值来源模式：计算值（`calculated_value`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：设施门口每 1 kg 净重保藏菠萝产出
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集数据计算（`calculated_from_collection`）
- 采集协议：`cp_formulation_filling`
- 数量范围：暂定配方与装填损失筛查估计，仅在代表性称量损失或闭合批次平衡记录可用前使用，并在该触发条件满足时替换
  - 范围角色：默认估计（`default_estimate`）
  - 下限：0
  - 上限：5
  - 单位：kg/kg 净重保藏菠萝产出
  - 基准：覆盖产品和包装形式的候选阶段宽泛筛查
  - 基准类型：参考流（`reference_flow`）
  - 证据类型：推理估算（`reasoned_estimate`）

##### 基本流

### 过程：保藏处理（`preservation_treatment`）

#### 输入

##### 产品流

###### 供保藏处理的已装填产品（`filled_product_input`）

记录从配方与装填过程的转移，不重复计入菠萝或配方成分。

- 选定流：Filled pineapple product before preservation
- 流属性/单位：Mass / kg
- 数量规则：进入所选保藏路线的实测或核算转移质量。
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：产品特定（`product_specific`）
- 归一化基准：设施门口每 1 kg 净重保藏菠萝产出
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_preservation_treatment`

###### 保藏过程供电（`preservation_electricity_input`）

记录所选路线的计量电力，包括路线设备以及可归属的冷却、泵送和控制用电。

- 选定流：Electricity, grid or declared supply mix
- 流属性/单位：Energy / kWh
- 数量规则：路线计量电力，或从共享电表进行有记录的分配。
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：技术特定（`technology_specific`）
- 归一化基准：设施门口每 1 kg 净重保藏菠萝产出
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_preservation_treatment`
- 数量范围：暂定保藏用电筛查估计，仅在代表性路线特定电表记录或经评审的定量证据可用前使用，并在该触发条件满足时替换
  - 范围角色：默认估计（`default_estimate`）
  - 下限：0
  - 上限：10
  - 单位：kWh/kg 净重保藏菠萝产出
  - 基准：覆盖三类主要路线的候选阶段宽泛筛查
  - 基准类型：参考流（`reference_flow`）
  - 证据类型：推理估算（`reasoned_estimate`）

###### 保藏过程热能载体投入（`preservation_thermal_energy_input`）

当 `sealed_container_thermal` 或其他已声明用热路线使用外购燃料、蒸汽或热时，应分别记录；无热需求的路线记录为零并标记不适用。

- 选定流：Declared fuel, steam, or purchased heat by carrier
- 流属性/单位：Energy / MJ
- 数量规则：按载能体计量或发票核算的能源量，并使用有记录的换算因子。
- 数值来源模式：计算值（`calculated_value`）
- 适用范围：技术特定（`technology_specific`）
- 归一化基准：设施门口每 1 kg 净重保藏菠萝产出
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集数据计算（`calculated_from_collection`）
- 采集协议：`cp_preservation_treatment`
- 数量范围：暂定热能筛查估计，仅对用热路线有条件使用，并在代表性载能体特定电表或发票记录可用时替换
  - 范围角色：默认估计（`default_estimate`）
  - 下限：0
  - 上限：50
  - 单位：MJ/kg 净重保藏菠萝产出
  - 基准：覆盖热路线和非热路线的候选阶段宽泛筛查
  - 基准类型：参考流（`reference_flow`）
  - 证据类型：推理估算（`reasoned_estimate`）

###### 路线设备制冷剂补充（`preservation_refrigerant_input`）

仅在机械制冷设备位于前景边界内时记录制冷剂补充；其他路线记录为零并将该行标记为不适用。

- 选定流：Declared refrigerant
- 流属性/单位：Mass / kg
- 数量规则：生产期间加入路线设备的制冷剂库存核算量。
- 数值来源模式：计算值（`calculated_value`）
- 适用范围：技术特定（`technology_specific`）
- 归一化基准：设施门口每 1 kg 净重保藏菠萝产出
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集数据计算（`calculated_from_collection`）
- 采集协议：`cp_preservation_treatment`
- 数量范围：暂定制冷剂补充筛查估计，仅对边界内制冷有条件使用，并在设备库存和维修记录覆盖已声明生产期间时替换
  - 范围角色：默认估计（`default_estimate`）
  - 下限：0
  - 上限：1
  - 单位：kg/kg 净重保藏菠萝产出
  - 基准：不替代制冷剂维修记录的候选阶段宽泛筛查
  - 基准类型：参考流（`reference_flow`）
  - 证据类型：推理估算（`reasoned_estimate`）

##### 废物流

##### 基本流

#### 输出

##### 产品流

###### 保藏菠萝产品（`preserved_product_output`）

记录从所选路线转移的净重产品，并同时记录路线标识、待检或放行状态以及温度状态。

- 选定流：Preserved pineapple product
- 流属性/单位：Mass / kg
- 数量规则：所选保藏处理后的实测放行产品质量。
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：产品特定（`product_specific`）
- 归一化基准：设施门口每 1 kg 净重保藏菠萝产出
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_preservation_treatment`

##### 废物流

##### 基本流

###### 保藏过程直接排放（`preservation_direct_emissions_output`）

记录跨越环境边界的物质特定现场燃烧排放和制冷剂泄漏；不得在此计入外购电力或热的上游发电或供热排放。

- 选定流：Substance-specific direct emission to air
- 流属性/单位：Mass / kg，按物质分别记录
- 数量规则：按物质分别报告测得排放、质量平衡结果或将有记录因子应用于采集的燃料或制冷剂记录所得结果。
- 数值来源模式：计算值（`calculated_value`）
- 适用范围：技术特定（`technology_specific`）
- 归一化基准：设施门口每 1 kg 净重保藏菠萝产出
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集数据计算（`calculated_from_collection`）
- 采集协议：`cp_preservation_treatment`
- 数量范围：暂定直接排放筛查估计，仅在存在现场排放源时有条件使用，并在源特定测量或将经评审因子应用于完整活动记录后替换
  - 范围角色：默认估计（`default_estimate`）
  - 下限：0
  - 上限：20
  - 单位：kg 物质/kg 净重保藏菠萝产出
  - 基准：按每种排放物质分别应用的候选阶段宽泛筛查
  - 基准类型：参考流（`reference_flow`）
  - 证据类型：推理估算（`reasoned_estimate`）

### 过程：最终包装与发运准备（`final_packing_dispatch`）

#### 输入

##### 产品流

###### 供最终包装的保藏产品（`preserved_product_input`）

记录从所选保藏路线转移的已放行保藏产品。

- 选定流：Preserved pineapple product
- 流属性/单位：Mass / kg
- 数量规则：进入最终包装的实测转移质量。
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：产品特定（`product_specific`）
- 归一化基准：设施门口每 1 kg 净重保藏菠萝产出
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_final_packing`

###### 次级和三级包装投入（`secondary_packaging_input`）

按材料分别记录纸箱、薄膜、托盘、标签及其他非初级包装；不存在的组成件记录为零。

- 选定流：Secondary and tertiary packaging materials
- 流属性/单位：Mass / kg
- 数量规则：领用组成件数量乘以经核实的单件质量，并与发运单元核对。
- 数值来源模式：计算值（`calculated_value`）
- 适用范围：产品特定（`product_specific`）
- 归一化基准：设施门口每 1 kg 净重保藏菠萝产出
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集数据计算（`calculated_from_collection`）
- 采集协议：`cp_final_packing`
- 数量范围：暂定次级和三级包装筛查估计，仅在经核实的包装物料清单和发运单元数量可用前使用，并在该触发条件满足时替换
  - 范围角色：默认估计（`default_estimate`）
  - 下限：0
  - 上限：5
  - 单位：kg/kg 净重保藏菠萝产出
  - 基准：覆盖散装和零售发运形式的候选阶段宽泛筛查
  - 基准类型：参考流（`reference_flow`）
  - 证据类型：推理估算（`reasoned_estimate`）

###### 最终包装供电（`packing_electricity_input`）

记录打码、输送、装箱、码垛以及可归属于本过程最终状态保持的用电。

- 选定流：Electricity, grid or declared supply mix
- 流属性/单位：Energy / kWh
- 数量规则：包装过程计量电力，或从共享电表进行有记录的分配。
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：技术特定（`technology_specific`）
- 归一化基准：设施门口每 1 kg 净重保藏菠萝产出
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_final_packing`
- 数量范围：暂定最终包装用电筛查估计，仅在代表性过程电表记录或经评审的定量证据可用前使用，并在该触发条件满足时替换
  - 范围角色：默认估计（`default_estimate`）
  - 下限：0
  - 上限：5
  - 单位：kWh/kg 净重保藏菠萝产出
  - 基准：覆盖人工和自动包装的候选阶段宽泛筛查
  - 基准类型：参考流（`reference_flow`）
  - 证据类型：推理估算（`reasoned_estimate`）

##### 废物流

##### 基本流

#### 输出

##### 产品流

###### 其他制作或保藏的净重菠萝（`reference_product_output`）

在核对净含量和包装记录后，本输出实现唯一参考流对象。

- 选定流：Pineapples, otherwise prepared or preserved `5787a516-5769-4072-a5fc-2ef53e8ba7e4`
- 流属性/单位：Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- 数量规则：固定为 1 kg 净重产品；不含包装，但包含随产品销售的任何装填介质。
- 数值来源模式：固定值（`fixed_value`）
- 适用范围：不适用（`not_applicable`）
- 归一化基准：设施门口每 1 kg 净重保藏菠萝产出
- 基准类型：参考流（`reference_flow`）
- 证据类型：身份引用（`identity_reference`）

##### 废物流

###### 最终包装废物（`packing_waste_output`）

按材料和去向分别记录被拒收包装以及不合格已包装产品。

- 选定流：Final packing waste
- 流属性/单位：Mass / kg
- 数量规则：称量废物或组成件数量核算，不对不同去向进行净额处理。
- 数值来源模式：计算值（`calculated_value`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：设施门口每 1 kg 净重保藏菠萝产出
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集数据计算（`calculated_from_collection`）
- 采集协议：`cp_final_packing`
- 数量范围：暂定最终包装废物筛查估计，仅在代表性称量废物或闭合组成件平衡记录可用前使用，并在该触发条件满足时替换
  - 范围角色：默认估计（`default_estimate`）
  - 下限：0
  - 上限：5
  - 单位：kg/kg 净重保藏菠萝产出
  - 基准：覆盖包装形式和拒收率的候选阶段宽泛筛查
  - 基准类型：参考流（`reference_flow`）
  - 证据类型：推理估算（`reasoned_estimate`）

##### 基本流

## 7. 分配与共产品处理

| rule_id | 适用对象 | 规则 | source_ids |
| --- | --- | --- | --- |
| `allocation_subdivide_first` | 可分离的产品、路线和批次 | 优先采用过程细分或直接计量，使不同产品形态、装填介质、保藏路线和包装形式保留各自的投入与产出。 | `eu-pef-2021-2279` |
| `allocation_physical_then_economic` | 无法避免的联合生产 | 无法细分时，仅在物理关系反映联合产出之间因果关系的情况下采用物理关系；否则采用基于已声明代表期间的经济关系，并披露数量、价格和敏感性。 | `eu-pef-2021-2279` |
| `allocation_recovered_material` | 菠萝残余物或其他回收产出 | 保持回收产出及其去向可见。除非接收模型明确界定并记录后果型处理，否则不得计入替代或避免生产信用。 | `eu-pef-2021-2279` |
| `allocation_waste_treatment` | 废物与废水 | 将收集、现场处理和外部处理负荷归属于产生该流的过程，除非有记录的接收系统规则要求其他处理；不得对无关废物去向进行净额处理。 | `eu-pef-2021-2279` |

## 8. 前景数据采集、计算与质量规则

### 数据采集协议

| protocol_id | process_id | flow_role | record_type | raw_fields | collection_method | unit | frequency | temporal_coverage | site_scope | aggregation_rule | quality_evidence |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| `cp_receiving_preparation` | `pineapple_receiving_preparation` | 进厂菠萝、预处理水、预处理中间物、残余物和废水 | 批次单、秤量记录、水表、排放记录 | lot_id; input_mass_kg; prepared_mass_kg; water_mass_kg; residue_mass_kg_by_destination; wastewater_mass_kg; opening_stock_kg; closing_stock_kg | 按批次记录秤量读数，并对同一生产期间记录水表读数或有记录的水平衡。 | kg | 质量按每批；水按每个抄表区间 | 覆盖正常菠萝和产品组合的已声明代表性生产期间 | 设施内纳入的每条预处理线 | 按产品和路线汇总可兼容记录，调整有记录的库存变化，再除以合格净产出质量。 | 经校准秤或核验记录；水表记录；批次核对；去向记录 |
| `cp_formulation_filling` | `formulation_filling` | 预处理菠萝、配方成分、包装、已装填产品和损失 | 已批准配方、批次单、物料领用、包装物料清单、秤量和拒收记录 | batch_id; prepared_input_kg; ingredient_kg_by_material; package_count_by_component; component_mass_kg; filled_net_mass_kg; loss_mass_kg_by_destination | 将已批准配方和实际物料领用与测得的装填净含量及拒收物料核对。 | kg | 每批 | 与产出数据相同的已声明代表性生产期间 | 纳入的每条配方与装填线 | 按产品配方和包装形式汇总；以经核实单件质量计算组成件质量；按合格净产出归一化。 | 已批准配方；秤量记录；经核实包装规格；闭合批次平衡 |
| `cp_preservation_treatment` | `preservation_treatment` | 已装填投入、电力、热载体、制冷剂、保藏产出和直接排放 | 路线日志、公用工程仪表、发票、制冷剂维修记录、放行记录、排放测量或因子记录 | route_id; batch_id; filled_input_kg; preserved_output_kg; electricity_kwh; fuel_or_heat_quantity_by_carrier; conversion_factor; refrigerant_added_kg; direct_emission_kg_by_substance | 每批恰好记录一种主要路线；优先采用路线仪表，并记录共享仪表分配；将制冷剂和直接排放与活动记录核对。 | kg; kWh; MJ | 每批以及每个适用仪表、发票或维修区间 | 与产出数据相同的已声明代表性生产期间 | 纳入的每条保藏线及其可归属公用工程设备 | 仅汇总具有相同主要路线和产品限定信息的批次；采用有记录因子换算载能体；按放行净重产品归一化。 | 路线日志；经校准仪表或发票；换算因子引用；维修记录；产品放行记录 |
| `cp_final_packing` | `final_packing_dispatch` | 保藏投入、非初级包装、包装用电、最终产出和包装废物 | 转移记录、包装物料清单、组成件领用、电表、发运和拒收记录 | batch_id; preserved_input_kg; package_count_by_component; component_mass_kg; electricity_kwh; dispatched_net_mass_kg; packing_waste_kg_by_material_and_destination | 核对保藏产品、包装领用、计量或分配电力、合格发运单元及拒收物料。 | kg; kWh | 每个包装批次和抄表区间 | 与产出数据相同的已声明代表性生产期间 | 设施内纳入的每条包装线 | 按产品和包装形式汇总，应用有记录的库存变化，并除以合格净产出质量。 | 经核实物料清单；转移和发运记录；电表记录；闭合组成件平衡 |

### 计算规则

| rule_id | 适用对象 | 公式或规则 | 输入 | 输出 | source_ids |
| --- | --- | --- | --- | --- | --- |
| `calc_reference_normalization` | 所有清单行 | 归一化行数量 = 分配给已声明产品与路线的期间数量 / 离开最终包装的合格净重产品质量；保留该行原始单位。 | 已分配期间数量；合格净重产品质量 | 每 1 kg 净重保藏菠萝产出的数量 |  |
| `calc_process_mass_balance` | 各前景过程 | 质量平衡差 = 质量投入 + 期初库存 - 产品质量 - 共产品质量 - 废物质量 - 废水质量 - 期末库存；调查并披露实质性未解释差异，不得强制将平衡差调为零。 | 按流记录的湿重；库存变化 | 过程质量平衡差和完整性检查 |  |
| `calc_packaging_mass` | 包装投入 | 包装质量 = 领用组成件数量 × 经核实的单件质量，并对有记录的退回或未使用组成件进行调整。 | 组成件数量；组成件质量；退回量 | 按材料记录的 kg 包装 |  |
| `calc_energy_conversion` | 燃料、蒸汽、热或冷量记录 | 采用有记录的载能体特定因子，将采集的载能体数量换算为报告能量单位，同时保留原始数量、单位和因子引用。 | 载能体数量；原始单位；换算因子 | 按载能体记录的 MJ 或 kWh | `eu-pef-2021-2279` |
| `calc_wastewater` | 预处理废水 | 废水质量 = 测得排放量；无排放表时，以记录的水和液体投入减去有记录的产品保留、蒸发、其他产出和库存变化，并将结果标记为计算值。 | 排放记录或水平衡字段 | kg 废水 |  |

### 数据质量要求

| requirement_id | 适用对象 | 要求 | 证据 |
| --- | --- | --- | --- |
| `dq_identity_and_route` | 每个数据包 | 匹配 Tiangong 参考流 UUID，声明所有必需限定信息、恰好一种主要保藏路线以及所表示的产品与包装范围。 | 数据集元数据；路线日志；产品规格 |
| `dq_temporal_representativeness` | 前景活动数据 | 使用内部一致且能代表正常运行及实质性产品或季节变化的生产期间；披露停产、试验、异常损失和有理由的排除。 | 带日期的批次、仪表、发票、库存和发运记录；代表性声明（`eu-pef-2021-2279`） |
| `dq_mass_and_energy_completeness` | 各前景过程 | 核对产品、共产品、废物、废水、库存变化及分别报告的载能体；披露每项未解释的实质性差额和共享仪表分配。 | 过程平衡；仪表核对；分配工作表 |
| `dq_source_quality` | 连接的上游和因子数据 | 记录每个实质性上游数据集或因子的来源、地理、技术、时间段以及替代或代理理由。 | 数据源登记和质量评价（`eu-pef-2021-2279`） |
| `dq_reasoned_estimate_replacement` | 每个 `reasoned_estimate` 范围 | 该范围仅作为暂定候选阶段筛查先验；完整代表性前景记录或经评审且有来源支持的定量证据可用时必须替换，不得将其作为已测数值。 | 标识替换状态并保留来源或采集记录的评审日志 |
| `dq_canned_conformity` | 属于水果罐头标准范围的 `sealed_container_thermal` 产品 | 保留已声明菠萝罐头产品适用的产品描述、形态、装填介质、装填量或沥干含量试验记录及符合性证据。 | 路线特定规格和试验记录（`codex-cxs-319-2015`） |

## 9. 校验规则

| rule_id | 适用对象 | 规则 | source_ids |
| --- | --- | --- | --- |
| `validate_reference_identity` | 参考流 | 要求 Tiangong 流 `5787a516-5769-4072-a5fc-2ef53e8ba7e4`、Mass 属性 `93a60a56-a3c8-11da-a746-0800200b9a66`、Units of mass 单位组 `93a60a57-a4c8-11da-a746-0800200c9a66` 上恰好 1 kg 净重产品；排除包装，并包含随产品销售的装填介质。 |  |
| `validate_required_qualifiers` | 数据集元数据 | 缺失任何必需限定信息时判为不符合，包括主要路线、物理形态、配方或装填介质、净含量基准、适用的沥干质量或固形物含量、包装形式、温度状态、地理位置和生产期间。 | `unsd-cpc-3-21491` |
| `validate_route_exclusivity` | 保藏过程 | 要求恰好一个主要路线 token，并拒绝同时声明多个主要路线；核对有条件的热能、制冷、排放和符合性行是否匹配已声明路线。 | `unsd-cpc-3-21491` |
| `validate_process_completeness` | 前景清单 | 要求包含全部四个 process_id、每个适用流的采集或计算数量、条件流的明确零值或不适用处理、路线分开的能源、废物去向以及已披露的质量平衡差。 | `eu-pef-2021-2279` |
| `validate_allocation` | 多产出过程 | 要求提供细分证据或已声明分配关系、采集的分配基准数据、采用经济分配时的敏感性，以及不含无依据信用的回收物料明确处理方式。 | `eu-pef-2021-2279` |
| `validate_canned_route_scope` | 菠萝罐头路线 | 当且仅当产品属于水果罐头标准范围时，要求适用的 CXS 319-2015 菠萝附件产品和符合性证据；不得将罐头要求推断至冷冻或其他保藏产品。 | `codex-cxs-319-2015` |
| `validate_estimate_status` | 暂定范围 | 拒绝将任何 `reasoned_estimate` 表示为实测或有来源支持的数据；在替换前，要求持续披露其条件适用性、暂定状态和替换触发条件。 |  |

## 10. 发布数据集画像

| 字段 | 值 |
| --- | --- |
| dataset_role | 适合受控发布为 `secondary_dataset`，并在评审后作为 `background_dataset` 的前景生产数据集。 |
| downstream_use | 构建其他制作或保藏菠萝产品的 process 和 lifecyclemodel 投影。 |
| allowed_use | 对已声明产品、路线、配方、包装形式、地理位置和生产期间进行设施门口建模；仅在限定信息兼容且主要路线相同时汇总。 |
| excluded_use | 鲜菠萝；以菠萝汁作为声明产品；未声明保藏路线；消费者阶段主张；或以菠萝罐头要求替代更广产品类别。 |
| required_metadata | 参考流 UUID 与数量；产品形态；配方或装填介质；净重及适用的沥干质量基准；主要保藏路线；销售温度状态；包装形式；设施地理位置；生产期间；分配方法；上游数据集选择；废物去向。 |
| required_quality_disclosure | 前景记录覆盖度；仪表和质量平衡质量；未解释平衡差；共享仪表分配；来源数据质量；代理选择；路线特定符合性证据；每个保留的推理估计及替换状态。 |
| update_trigger | 产品分类、配方或装填介质、主要保藏路线、包装形式、设施技术、能源供应、废物处理、分配基准或参考流身份发生变化；完整代表性记录或经评审定量证据可用时，触发替换相应推理估计。 |

## 11. 数据源

| 来源编号 | 类型 | 引用 | 用途 |
| --- | --- | --- | --- |
| `unsd-cpc-3-21491` | official_guidance | 联合国统计司，《产品总分类》第 3.0 版，子类 21491，“Pineapples, otherwise prepared or preserved”。 | 分类语境、产品类别识别以及声明所表示保藏产品路线的要求。 |
| `codex-cxs-319-2015` | standard | Codex Alimentarius，CXS 319-2015，《某些水果罐头标准》，含菠萝附件；对菠萝罐头取代 CXS 42-1981。 | 仅用于罐藏或适用的密封容器热处理路线的产品描述与符合性证据。 |
| `eu-pef-2021-2279` | official_guidance | Commission Recommendation (EU) 2021/2279，关于使用环境足迹方法衡量和传播生命周期环境绩效。 | 系统边界连接、分配层级、数据质量披露、能源换算可追溯性和发布数据集画像。 |
