---
pcr_id: pcr.food-products-beverages-and-tobacco-textiles-apparel-and-leather-products.beverages.non-alcoholic-wine
language: zh-CN
status: candidate
sync_with: pcr.en-US.md
---

# 无酒精葡萄酒

## 1. 范围与适用性

本 PCR 适用于工厂门前景数据生产：产品完全由已经充分形成葡萄酒特征的葡萄酒或特种葡萄酒制得，随后经脱醇使实际酒精度低于 0.5% vol。本 PCR 覆盖基酒接收与合格判定、脱醇、处理后调配与稳定、放行检验，以及在声明产品形态包含包装时的包装环节。

酒精度等于或高于 0.5% vol 的部分脱醇葡萄酒、未先成为葡萄酒的葡萄汁或葡萄醪饮料、非葡萄发酵饮料、葡萄酒基混合饮料、加香葡萄酒产品和葡萄酒醋均不在本范围内。若研究范围需要，上游葡萄种植和基酒生产，以及下游分销、零售、使用和生命末期应通过关联数据集表示，不得无说明地并入本前景数据包。

## 2. 产品类别识别

| 字段 | 值 |
| --- | --- |
| canonical_pcr_id | pcr.food-products-beverages-and-tobacco-textiles-apparel-and-leather-products.beverages.non-alcoholic-wine |
| classification_refs | CPC 3.0：24491，Non-alcoholic wine，精确映射语境 |
| covered_products | 完全由已完成的葡萄酒或特种葡萄酒经允许的脱醇处理获得、实际酒精度低于 0.5% vol 的静态或起泡可销售饮料 |
| excluded_products | 酒精度等于或高于 0.5% vol 的部分脱醇葡萄酒；未先形成葡萄酒特征而直接由葡萄汁或葡萄醪制得的饮料；非葡萄发酵饮料；加香葡萄酒产品；葡萄酒醋 |
| representative_product | 无酒精葡萄酒成品，生产混合，工厂 |
| production_route | 合格基酒接收；部分真空蒸发、膜技术、蒸馏或其声明的允许组合；调配与稳定；放行；可选包装 |
| market_state | 制造工厂的可销售液体饮料，明确声明是否包含包装 |

## 3. 参考流

| 字段 | 值 |
| --- | --- |
| What | 满足所声明产品规范与适用司法辖区要求的可销售无酒精葡萄酒饮料 |
| How much | 1 kg 饮料净质量 |
| How well | 由葡萄酒或特种葡萄酒采用声明的允许脱醇技术制得，实际酒精度低于 0.5% vol，且不存在脱醇造成的感官缺陷 |
| How long or cycle | 工厂门处一个已放行生产批次；无服务持续时间 |
| reference_flow_link | 功能单位由下述唯一参考产品流实现 |

| 字段 | 值 |
| --- | --- |
| 参考数量 | 1 kg 饮料净质量 |
| 参考产品流 | 无酒精葡萄酒 `014d2659-f8e8-4a23-adfa-97cbda224bab` |
| 参考流属性 | Mass `93a60a56-a3c8-11da-a746-0800200b9a66` |
| 参考单位组 | Units of mass `93a60a57-a4c8-11da-a746-0800200c9a66` |
| 参考单位 | kg |
| 必需限定信息 | 基酒类别与来源；静态或起泡状态；脱醇技术或组合；进料与成品实际酒精度；相关时的残糖或甜度等级；包装纳入范围与形式；生产地域；参考期 |

构建前景数据包时，`必需限定信息` 中列出的信息应在数据集元数据、过程说明、参考流备注、产品说明或等效数据包字段中明确声明。缺失必需限定信息的数据包视为参考流定义不完整。

## 4. 计量与单位规则

| rule_id | 适用对象 | 必需流属性 | 必需单位 | 规则 |
| --- | --- | --- | --- | --- |
| `reference_mass` | 参考产品 | Mass `93a60a56-a3c8-11da-a746-0800200b9a66` | kg | 以 1 kg 饮料净质量作为定量参考。包装质量作为独立清单投入，绝不计入 1 kg 饮料质量。 |
| `batch_normalisation` | 所有前景交换 | 与解析后流相适应的质量、能量、体积、数量或其他属性 | kg 参考产品分母 | 将每批次或生产期合计量按扣除不合格品和拒收品后的已放行饮料净质量归一化。保留原始计量单位和转换因子。 |
| `alcoholic_strength` | 进料基酒与已放行产品 | 实际酒精度 | % vol | 同时记录进料基酒和已放行产品的实验室或受控在线检测结果，包括检测方法、取样时间、适用时的温度修正和司法辖区判定阈值。 |
| `volume_to_mass` | 以体积报告的液体记录 | Mass | kg | 仅使用相同物料状态和温度下实测或产品特定的密度将体积转换为质量；保留密度、温度和来源记录。不得假定水的密度。 |

## 5. 系统边界

### 边界概化

| 字段 | 值 |
| --- | --- |
| declared_starting_condition | 基酒或特种葡萄酒已经充分形成适用的葡萄酒特征，不存在使其不宜脱醇的感官缺陷，并在前景设施接收时具有实测质量或体积、需要时的密度及实际酒精度 |
| starting_condition_role | 无酒精葡萄酒前景生产数据包的上游产品投入 |
| product_classification_scope | 上述规范产品语义范围；CPC 3.0 代码 24491 仅为映射语境，不定义过程边界 |
| recursive_input_rule | 作为返工投入的外购或转移无酒精葡萄酒作为独立投入记录，并关联自身上游数据集，不与参考产出净额相抵；同批内部回流在过程说明中披露，但不重复计算为边界交换 |
| upstream_dataset_requirement | 基酒投入必须关联覆盖葡萄种植和酿造直至所声明合格葡萄酒条件的上游数据集；若研究不含这些阶段，则必须明确记录截断 |
| disclosure | 声明基酒类别与来源、脱醇技术或组合、进料与成品酒精度、回收香气处理、脱除乙醇去向、后处理、包装范围、分配决定、排除阶段以及所有关联上下游数据集 |

| rule_id | 适用对象 | 规则 | source_ids |
| --- | --- | --- | --- |
| `sb_wine_precondition` | 产品识别与起始条件 | 只有在投入已经成为葡萄酒或特种葡萄酒并充分形成适用特征后方可脱醇；直接处理葡萄汁或葡萄醪不满足本 PCR。 | `oiv-eco-432-2012`; `eu-reg-2021-2117`; `eu-commission-2024-694` |
| `sb_required_operations` | 前景边界 | 纳入合格基酒接收、所声明脱醇操作、相关电力、热力或燃料、工艺与清洗用水、分离介质或服务投入、回收与废弃输出流、调配与稳定、放行检验，以及跨越前景边界的废物处理或转移。 | `oiv-oeno-394a-2012`; `eu-reg-2021-2117`; `oiv-cst-431-2011` |
| `sb_permitted_techniques` | 脱醇 | 识别部分真空蒸发、膜技术、蒸馏或实际采用的允许组合。不得使用未声明技术的笼统“脱除酒精”过程。 | `oiv-oeno-394a-2012`; `eu-reg-2021-2117` |
| `sb_packaging_scope` | 后处理与放行 | 当参考产品声明为包装产品时，纳入初级、次级和三级包装及包装损耗；否则排除包装，并声明参考产品为工厂散装产品。 | `oiv-cst-431-2011` |
| `sb_downstream_linkage` | 生命周期模型关联 | 分销、零售冷藏、消费者使用和生命末期不在本前景数据包内，除非明确纳入所声明研究；纳入时作为独立下游数据集连接。 | `oiv-cst-431-2011` |

## 6. 过程清单结构

### 过程图

| process_id | 过程名称 | 纳入状态 | 纳入条件 | 建模角色 | 定量参考 |
| --- | --- | --- | --- | --- | --- |
| `base_wine_acceptance` | 基酒接收与合格判定 | required | 始终 | 前景接收、识别与合格判定 | 转入脱醇的合格基酒质量 |
| `dealcoholisation` | 脱醇 | required | 始终 | 前景乙醇分离与中间产品生产 | 转入后处理的脱醇中间产品 |
| `finishing_and_release` | 调配、稳定与放行 | required | 始终 | 前景最终配制、质量放行和参考产品生产 | 1 kg 已放行无酒精葡萄酒 |

### 过程：基酒接收与合格判定（`base_wine_acceptance`）

#### 输入

##### 产品流

###### 作为主要原料投入接收的基酒（`base_wine_input`）

记录进入前景设施且已经充分形成葡萄酒特征的每个基酒批次。保留供应商或内部上游数据集关联、质量或体积及密度记录、酒精度、葡萄酒类别、来源和合格判定结果。

- 选定流：按声明类别解析的基酒或特种葡萄酒
- 流属性/单位：Mass / kg
- 数量规则：可归属于已放行批次的实测合格质量
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：产品特定（`product_specific`）
- 归一化基准：每 1 kg 已放行无酒精葡萄酒
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_base_wine_lots`
- 来源：`oiv-eco-432-2012`; `eu-commission-2024-694`
- 数量范围：暂定基酒投入筛选估算
  - 范围角色：默认估计（`default_estimate`）
  - 下限：0.8
  - 上限：2.0
  - 单位：kg/kg 已放行无酒精葡萄酒
  - 基准：获得场址得率和脱除流证据前的宽泛首轮估算
  - 基准类型：参考流（`reference_flow`）
  - 证据类型：推理估算（`reasoned_estimate`）

##### 废物流

##### 基本流

#### 输出

##### 产品流

##### 废物流

###### 拒收进料葡萄酒（`rejected_base_wine`）

记录接收后被拒收并跨越前景边界退回、处理或处置的进料葡萄酒。不得从合格基酒投入中将其抵减。

- 选定流：拒收葡萄酒，待解析为去向特定废物流
- 流属性/单位：Mass / kg
- 数量规则：按去向实测的拒收质量
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每 1 kg 已放行无酒精葡萄酒
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_waste_and_coproducts`
- 数量范围：暂定拒收进料筛选估算
  - 范围角色：QA 校验（`qa_guardrail`）
  - 下限：0
  - 上限：0.5
  - 单位：kg/kg 已放行无酒精葡萄酒
  - 基准：获得经审查的设施记录前的宽泛筛选区间
  - 基准类型：参考流（`reference_flow`）
  - 证据类型：推理估算（`reasoned_estimate`）

##### 基本流

### 过程：脱醇（`dealcoholisation`）

#### 输入

##### 产品流

###### 转入脱醇的合格基酒（`accepted_wine_feed`）

记录送入所声明分离设备的合格基酒质量。内部罐间转移应核对，但不得重复计为边界投入。

- 选定流：合格基酒或特种葡萄酒
- 流属性/单位：Mass / kg
- 数量规则：生产批次实测进料质量
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：产品特定（`product_specific`）
- 归一化基准：每 1 kg 已放行无酒精葡萄酒
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_dealcoholisation_feed`
- 来源：`oiv-oeno-394a-2012`; `eu-reg-2021-2117`
- 数量范围：暂定分离进料筛选估算
  - 范围角色：默认估计（`default_estimate`）
  - 下限：0.8
  - 上限：2.0
  - 单位：kg/kg 已放行无酒精葡萄酒
  - 基准：获得场址质量平衡前的宽泛首轮估算
  - 基准类型：参考流（`reference_flow`）
  - 证据类型：推理估算（`reasoned_estimate`）

###### 分离与香气回收用电（`dealcoholisation_electricity`）

记录泵、真空系统、膜、蒸馏设备、制冷、控制和香气回收中可归属于该批次的计量电力。

- 选定流：按场址供电组合解析的电力
- 流属性/单位：Energy / kWh
- 数量规则：计量或透明分配的耗电量
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：技术特定（`technology_specific`）
- 归一化基准：每 1 kg 已放行无酒精葡萄酒
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_utilities`
- 来源：`oiv-cst-431-2011`
- 数量范围：暂定电力筛选估算
  - 范围角色：默认估计（`default_estimate`）
  - 下限：0
  - 上限：10
  - 单位：kWh/kg 已放行无酒精葡萄酒
  - 基准：覆盖不同分离配置的刻意宽泛估算
  - 基准类型：参考流（`reference_flow`）
  - 证据类型：推理估算（`reasoned_estimate`）

###### 脱醇所需热能或燃料（`dealcoholisation_thermal_energy`）

按解析后流分别记录外购热力或蒸汽及直接燃料。保留能量属性和实测数量，不得将不同能源载体合并为无说明总量。

- 选定流：按载体分别解析的热能、蒸汽或燃料
- 流属性/单位：Energy / MJ
- 数量规则：可归属于该批次的计量能量或燃料折算能量
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：技术特定（`technology_specific`）
- 归一化基准：每 1 kg 已放行无酒精葡萄酒
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_utilities`
- 来源：`oiv-cst-431-2011`
- 数量范围：暂定热能筛选估算
  - 范围角色：默认估计（`default_estimate`）
  - 下限：0
  - 上限：30
  - 单位：MJ/kg 已放行无酒精葡萄酒
  - 基准：覆盖膜法、真空和蒸馏配置的刻意宽泛估算
  - 基准类型：参考流（`reference_flow`）
  - 证据类型：推理估算（`reasoned_estimate`）

###### 脱醇工艺与清洗用水（`dealcoholisation_water`）

在计量允许时分别记录工艺用水和原位清洗用水。排除已含在合格葡萄酒中的水。

- 选定流：按场址供水解析的工艺水
- 流属性/单位：Mass / kg
- 数量规则：可归属于生产与清洗的实测供水量
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每 1 kg 已放行无酒精葡萄酒
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_water`
- 数量范围：暂定用水筛选估算
  - 范围角色：QA 校验（`qa_guardrail`）
  - 下限：0
  - 上限：50
  - 单位：kg/kg 已放行无酒精葡萄酒
  - 基准：获得技术和场址特定记录前的宽泛筛选区间
  - 基准类型：参考流（`reference_flow`）
  - 证据类型：推理估算（`reasoned_estimate`）

##### 废物流

##### 基本流

#### 输出

##### 产品流

###### 脱醇葡萄酒中间产品（`dealcoholised_intermediate`）

记录转入后处理的中间产品净量及其实际酒精度、质量、罐号和回收香气复配状态。

- 选定流：脱醇葡萄酒中间产品
- 流属性/单位：Mass / kg
- 数量规则：实测转移质量
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：产品特定（`product_specific`）
- 归一化基准：每 1 kg 已放行无酒精葡萄酒
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_output_streams`
- 来源：`oiv-oeno-394a-2012`; `eu-reg-2021-2117`

###### 送往有益用途的回收富乙醇馏分（`recovered_ethanol_fraction`）

只有在所有权、规格、去向和有益用途均有记录时，才将回收富乙醇馏分作为产品输出记录；否则使用下方废物流行。

- 选定流：富乙醇回收馏分，待解析为成分特定产品流
- 流属性/单位：Mass / kg
- 数量规则：实测外运质量及实测乙醇浓度
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：产品特定（`product_specific`）
- 归一化基准：每 1 kg 已放行无酒精葡萄酒
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_waste_and_coproducts`
- 数量范围：暂定回收馏分筛选估算
  - 范围角色：QA 校验（`qa_guardrail`）
  - 下限：0
  - 上限：0.3
  - 单位：kg/kg 已放行无酒精葡萄酒
  - 基准：宽泛质量平衡筛选区间，不作为分配默认值
  - 基准类型：参考流（`reference_flow`）
  - 证据类型：推理估算（`reasoned_estimate`）

##### 废物流

###### 送往处理的含乙醇分离残液（`ethanol_containing_waste`）

当含乙醇馏分被丢弃或送往废物处理时，使用本行而不是产品行，并记录成分和去向。

- 选定流：含乙醇液体废物，待解析为处理路径特定废物流
- 流属性/单位：Mass / kg
- 数量规则：按处理去向实测的转移质量
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每 1 kg 已放行无酒精葡萄酒
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_waste_and_coproducts`
- 数量范围：暂定含乙醇废物筛选估算
  - 范围角色：QA 校验（`qa_guardrail`）
  - 下限：0
  - 上限：0.3
  - 单位：kg/kg 已放行无酒精葡萄酒
  - 基准：宽泛质量平衡筛选区间；与同一物料的回收产品核算互斥
  - 基准类型：参考流（`reference_flow`）
  - 证据类型：推理估算（`reasoned_estimate`）

###### 脱醇与清洗废水（`dealcoholisation_wastewater`）

按去向记录离开前景过程的废水，保留直接排放或处理路径及相关成分指标来源记录。

- 选定流：废水，待解析为处理路径特定废物流
- 流属性/单位：Mass / kg
- 数量规则：实测废水质量，或用实测密度转换实测体积
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每 1 kg 已放行无酒精葡萄酒
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_water`
- 数量范围：暂定废水筛选估算
  - 范围角色：QA 校验（`qa_guardrail`）
  - 下限：0
  - 上限：50
  - 单位：kg/kg 已放行无酒精葡萄酒
  - 基准：获得场址水平衡和清洗记录前的宽泛筛选区间
  - 基准类型：参考流（`reference_flow`）
  - 证据类型：推理估算（`reasoned_estimate`）

##### 基本流

### 过程：调配、稳定与放行（`finishing_and_release`）

#### 输入

##### 产品流

###### 转入后处理的脱醇中间产品（`finishing_intermediate_input`）

记录从脱醇过程接收的质量，并与相应中间产品输出核对，不得形成第二个系统边界投入。

- 选定流：脱醇葡萄酒中间产品
- 流属性/单位：Mass / kg
- 数量规则：实测内部转移质量
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：产品特定（`product_specific`）
- 归一化基准：每 1 kg 已放行无酒精葡萄酒
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_output_streams`

###### 调配与稳定材料投入（`finishing_material_inputs`）

对跨越过程边界的每项加水、回收香气、二氧化碳、稳定剂、过滤介质或其他允许后处理材料分别建立解析后的交换，不得报告无法追溯的汇总量。

- 选定流：分别解析的每项后处理材料
- 流属性/单位：Mass / kg
- 数量规则：每项材料的实测或批次配方数量
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：产品特定（`product_specific`）
- 归一化基准：每 1 kg 已放行无酒精葡萄酒
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_finishing_materials`
- 数量范围：暂定后处理材料总量筛选估算
  - 范围角色：QA 校验（`qa_guardrail`）
  - 下限：0
  - 上限：0.5
  - 单位：kg/kg 已放行无酒精葡萄酒
  - 基准：宽泛汇总筛选区间；数据集交换仍应按具体材料记录
  - 基准类型：参考流（`reference_flow`）
  - 证据类型：推理估算（`reasoned_estimate`）

###### 后处理与冷稳定用电（`finishing_electricity`）

记录制冷、过滤、泵送、碳酸化、罐体混合、控制和放行操作用电。

- 选定流：按场址供电组合解析的电力
- 流属性/单位：Energy / kWh
- 数量规则：计量或透明分配的耗电量
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每 1 kg 已放行无酒精葡萄酒
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_utilities`
- 来源：`oiv-cst-431-2011`
- 数量范围：暂定后处理用电筛选估算
  - 范围角色：默认估计（`default_estimate`）
  - 下限：0
  - 上限：5
  - 单位：kWh/kg 已放行无酒精葡萄酒
  - 基准：获得场址计量前的宽泛首轮估算
  - 基准类型：参考流（`reference_flow`）
  - 证据类型：推理估算（`reasoned_estimate`）

###### 后处理与清洗用水（`finishing_water`）

在可能时分别记录产品接触用水和清洗用水，排除中间产品中已有的水。

- 选定流：按场址供水解析的工艺水
- 流属性/单位：Mass / kg
- 数量规则：可归属于后处理与清洗的实测供水量
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每 1 kg 已放行无酒精葡萄酒
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_water`
- 数量范围：暂定后处理用水筛选估算
  - 范围角色：QA 校验（`qa_guardrail`）
  - 下限：0
  - 上限：30
  - 单位：kg/kg 已放行无酒精葡萄酒
  - 基准：获得场址水平衡前的宽泛筛选区间
  - 基准类型：参考流（`reference_flow`）
  - 证据类型：推理估算（`reasoned_estimate`）

###### 声明包装产品时的包装材料（`packaging_materials`）

包装在范围内时，分别建立初级容器、封口、标签、次级包装、托盘或三级包装以及可重复使用包装损耗的交换。只有明确声明散装产品时方可省略本行。

- 选定流：分别解析的每项包装材料与组件
- 流属性/单位：Mass / kg
- 数量规则：组件数量乘以实测单件质量，并计入记录的损耗
- 数值来源模式：计算值（`calculated_value`）
- 适用范围：产品特定（`product_specific`）
- 归一化基准：每 1 kg 已放行无酒精葡萄酒
- 基准类型：参考流（`reference_flow`）
- 证据类型：由采集数据计算（`calculated_from_collection`）
- 采集协议：`cp_packaging`
- 数量范围：暂定包装质量筛选估算
  - 范围角色：QA 校验（`qa_guardrail`）
  - 下限：0
  - 上限：2
  - 单位：kg 包装/kg 已放行无酒精葡萄酒
  - 基准：涵盖散装和重型容器形式的宽泛筛选区间
  - 基准类型：参考流（`reference_flow`）
  - 证据类型：推理估算（`reasoned_estimate`）

##### 废物流

##### 基本流

#### 输出

##### 产品流

###### 已放行无酒精葡萄酒参考产品（`released_non_alcoholic_wine`）

只记录通过产品识别、酒精度、感官和放行检查的可销售饮料净量。包装质量不计入本产品流数量。

- 选定流：无酒精葡萄酒 `014d2659-f8e8-4a23-adfa-97cbda224bab`
- 流属性/单位：Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- 数量规则：由实测放行质量归一化后固定为 1 kg 参考产品
- 数值来源模式：计算值（`calculated_value`）
- 适用范围：产品特定（`product_specific`）
- 归一化基准：1 kg 已放行无酒精葡萄酒
- 基准类型：参考流（`reference_flow`）
- 证据类型：由采集数据计算（`calculated_from_collection`）
- 采集协议：`cp_final_release`
- 来源：`oiv-eco-432-2012`; `eu-commission-2024-694`
- 数量范围：参考归一化恒等式
  - 范围角色：允许范围（`allowed_range`）
  - 下限：1
  - 上限：1
  - 单位：kg/kg 参考产品
  - 基准：归一化参考产品恒等式
  - 基准类型：参考流（`reference_flow`）
  - 证据类型：由采集数据计算（`calculated_from_collection`）

##### 废物流

###### 不合格或拒收成品饮料（`off_spec_finished_wine`）

按实际再利用、返工、处理或处置去向记录未通过放行或包装检查的产品。返回同一批次的返工不得重复计算。

- 选定流：不合格无酒精葡萄酒，待解析为去向特定废物流
- 流属性/单位：Mass / kg
- 数量规则：按去向实测的拒收质量
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每 1 kg 已放行无酒精葡萄酒
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_waste_and_coproducts`
- 数量范围：暂定成品拒收筛选估算
  - 范围角色：QA 校验（`qa_guardrail`）
  - 下限：0
  - 上限：0.5
  - 单位：kg/kg 已放行无酒精葡萄酒
  - 基准：获得经审查的设施记录前的宽泛筛选区间
  - 基准类型：参考流（`reference_flow`）
  - 证据类型：推理估算（`reasoned_estimate`）

###### 后处理与清洗废水（`finishing_wastewater`）

按去向记录离开后处理和清洗的废水，并保留相关成分与处理信息。

- 选定流：废水，待解析为处理路径特定废物流
- 流属性/单位：Mass / kg
- 数量规则：实测废水质量，或用实测密度转换实测体积
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每 1 kg 已放行无酒精葡萄酒
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_water`
- 数量范围：暂定后处理废水筛选估算
  - 范围角色：QA 校验（`qa_guardrail`）
  - 下限：0
  - 上限：30
  - 单位：kg/kg 已放行无酒精葡萄酒
  - 基准：获得场址水平衡与清洗记录前的宽泛筛选区间
  - 基准类型：参考流（`reference_flow`）
  - 证据类型：推理估算（`reasoned_estimate`）

###### 包装边角料与破损组件（`packaging_waste`）

包装在范围内时，按材料与去向记录包装边角料和破损组件，并扣除经核实的同过程再利用。

- 选定流：包装废物，待解析为材料和去向特定废物流
- 流属性/单位：Mass / kg
- 数量规则：按材料实测的包装废料质量
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每 1 kg 已放行无酒精葡萄酒
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_packaging`
- 数量范围：暂定包装废物筛选估算
  - 范围角色：QA 校验（`qa_guardrail`）
  - 下限：0
  - 上限：0.2
  - 单位：kg/kg 已放行无酒精葡萄酒
  - 基准：获得包装线记录前的宽泛筛选区间
  - 基准类型：参考流（`reference_flow`）
  - 证据类型：推理估算（`reasoned_estimate`）

##### 基本流

## 7. 分配与共产品处理

| rule_id | 适用对象 | 规则 | source_ids |
| --- | --- | --- | --- |
| `alloc_avoid` | 所有共享与多产出操作 | 首先通过过程细分、独立计量或在研究目标合理时扩展模型以纳入被替代功能来避免分配。记录所选方法，同一负担不得混用多种方法。 | `iso-14044-2006` |
| `alloc_internal_transfers` | 内部中间产品转移与同批返工 | 不在连续内部阶段之间分配负担。将实测投入和产出向后传递；不得把内部转移或同批回流计作新的系统边界投入。 | `iso-14044-2006` |
| `alloc_ethanol_fraction` | 回收富乙醇馏分或其他外运共产品 | 若过程细分或系统扩展不可行而仍需分配，应使用经证明支配资源或能量使用的物理关系；只有在该关系合理时才采用质量。若不存在可辩护的物理关系，使用代表期经济关系。报告数量、属性、价格、时期和敏感性。 | `iso-14044-2006` |
| `alloc_waste` | 含乙醇废物、废水、拒收葡萄酒、不合格产品与包装废物 | 在具备明确功能的次级产品有记录地离开废物系统之前，废物处理负担由前景产品承担。不得仅因废物流含有可回收乙醇或材料而给予共产品抵扣。 | `iso-14044-2006` |

## 8. 前景数据采集、计算与质量规则

### 数据采集协议

| protocol_id | process_id | flow_role | record_type | raw_fields | collection_method | unit | frequency | temporal_coverage | site_scope | aggregation_rule | quality_evidence |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| `cp_base_wine_lots` | `base_wine_acceptance` | 进料基酒与拒收 | 批次接收和实验室记录 | lot_id; supplier_or_internal_source; upstream_dataset_ref; wine_category; origin; mass; volume; density; temperature; actual_alcohol_pct_vol; organoleptic_acceptance; accepted_or_rejected; destination | 校准地磅、罐计量、密度记录、实验室或受控在线检测以及签署的接收记录 | kg; L; kg/L; % vol | 每批 | 代表期内全部批次 | 每个前景设施 | 按批次汇总合格和拒收质量，并保留来源特定关联 | 校准状态；检测方法；样品编号；接收记录；供应商或内部追溯 |
| `cp_dealcoholisation_feed` | `dealcoholisation` | 合格葡萄酒进料 | 批次与罐转移记录 | batch_id; source_tank; destination_equipment; technique; start_time; end_time; mass; volume; density; actual_alcohol_pct_vol | 校准罐质量或体积计量，配套密度与批次关联 | kg; L; kg/L; % vol | 每批 | 代表期内全部批次 | 每条脱醇线 | 按已放行批次关联汇总实测进料；排除回流重复计算 | 仪表校准；罐体核对；批次谱系 |
| `cp_utilities` | `dealcoholisation`; `finishing_and_release` | 电力、热力、蒸汽和燃料 | 仪表、账单与设备分配记录 | meter_id; carrier; opening_reading; closing_reading; unit; batch_or_time_period; equipment_runtime; allocation_driver | 优先使用专用仪表；否则从共享仪表或账单进行有记录的分配 | kWh; MJ; 载体特定物理单位 | 每批或最短可得账单间隔 | 覆盖生产与清洗的代表运行期 | 每个设施和生产线 | 扣除非生产用途；按有记录驱动因子分配共享用量；按放行质量归一化 | 仪表等级；账单核对；分配计算；缺失数据标记 |
| `cp_water` | `dealcoholisation`; `finishing_and_release` | 工艺用水、清洗用水和废水 | 仪表与清洗日志 | meter_id; operation; supplied_volume_or_mass; wastewater_volume_or_mass; density_if_used; treatment_route; cleaning_cycle | 专用水表和废水表，或经核对的罐车与储罐记录 | kg; m3 | 每批或每次清洗循环 | 包含清洗的代表运行期 | 每个设施和排放路径 | 尽可能分开产品接触水、清洗水和废水；核对供水、产品加水、蒸发和排放 | 仪表校准；清洗日志；排放记录；水平衡核对 |
| `cp_output_streams` | `dealcoholisation`; `finishing_and_release` | 中间产品与内部转移 | 罐转移和实验室记录 | batch_id; stream_id; mass; volume; density; actual_alcohol_pct_vol; ethanol_concentration; aroma_recovery_status; source_tank; destination_tank | 校准罐或秤计量及实验室分析 | kg; L; kg/L; % vol | 每次转移 | 代表期内全部生产批次 | 每条生产线和每个罐 | 核对关联输出与输入记录；内部转移不计作边界交换 | 罐体核对；样品编号；实验室方法；批次谱系 |
| `cp_finishing_materials` | `finishing_and_release` | 调配与稳定材料 | 批次配方和领料记录 | batch_id; material_id; resolved_flow_ref; lot_id; issued_mass_or_volume; returned_mass; density; purpose | 受控配方加仓库领退料记录 | kg; L | 每批 | 代表期内全部生产批次 | 每个设施 | 按材料计算净领用量；按放行质量归一化 | 经批准配方；批次追溯；秤校准；材料规格 |
| `cp_packaging` | `finishing_and_release` | 包装材料与废料 | 物料清单、组件质量和生产线记录 | format_id; component_id; resolved_flow_ref; count_used; count_rejected; unit_mass; returned_count; reusable_cycles; scrap_mass; destination | 经核实物料清单、组件计数、组件质量抽样和废料称重 | count; kg | 每次包装运行 | 代表包装期 | 每条包装线和声明形式 | 数量乘以核实单件质量并加实测损耗；区分材料和去向 | 物料清单版本；秤校准；数量核对；重复使用记录 |
| `cp_waste_and_coproducts` | `base_wine_acceptance`; `dealcoholisation`; `finishing_and_release` | 拒收葡萄酒、回收馏分、废物与不合格产品 | 转移、称重单、分析与去向记录 | stream_id; batch_id; mass; volume; density; composition; ethanol_concentration; product_or_waste_status; destination; ownership_transfer; revenue_if_allocation_used | 校准秤、罐记录、实验室分析和签署的转移文件 | kg; L; % mass 或 % vol; currency | 每次转移 | 代表期内全部生产与废物转移 | 每个设施和去向 | 按流状态和去向汇总；防止同一质量同时归为产品和废物 | 称重单；实验室方法；去向证据；合同或发票 |
| `cp_final_release` | `finishing_and_release` | 已放行参考产品 | 批次放行和净质量记录 | batch_id; product_id; net_released_mass; actual_alcohol_pct_vol; residual_sugar_or_sweetness; still_or_sparkling; sensory_result; package_scope; release_time; disposition | 校准罐或灌装线质量平衡、实验室检测、感官放行和质量授权 | kg; % vol | 每个已放行批次 | 代表期内全部已放行批次 | 每个设施和产品形式 | 仅汇总合格的已放行饮料净质量；排除包装质量、拒收品和未放行库存 | 签署的放行；实验室方法；校准；产品规格；批次追溯 |

### 计算规则

| rule_id | Applies to | Formula or rule | Inputs | Output | source_ids |
| --- | --- | --- | --- | --- | --- |
| `calc_reference_normalisation` | 所有前景交换 | 归一化交换量 = 可归属交换数量 / 实测已放行饮料净质量。除法前将分母转换为 kg，并保留原始数量和转换过程。 | 交换数量；已放行饮料净质量；需要时的密度或单位转换 | 每 1 kg 参考产品的交换量 |  |
| `calc_shared_utility` | 共享电力、热力、燃料、用水与清洗服务 | 优先专用计量。共享时，扣除独立计量的非产品负荷，并按设备运行时间、处理量或实测负荷等有记录因果驱动因子分配剩余量；质量分配不是自动默认值。 | 共享总量；排除负荷；各产品批次因果驱动因子 | 可归属公用工程数量 | `iso-14044-2006` |
| `calc_packaging_mass` | 包装投入 | 包装质量 = 各组件净使用数量乘以经核实单件质量之和，再加单独实测的未计数废料；各材料分别报告。 | 组件数量；退回数量；单件质量；废料质量 | 每 kg 参考产品的包装材料 kg |  |
| `calc_material_balance` | 基酒、添加物、中间产品、放行产品、回收馏分、废物与废水 | 在批次层面核对实测投入与产出质量。已知时报告实测蒸发或排气物料，并在综合测量不确定度内披露无法解释的不平衡；不得通过改变参考产出来强制平衡。 | 实测投入；产出；库存变化；蒸发或排气损失；测量不确定度 | 有记录的质量平衡核对 |  |
| `calc_allocation` | 外运共产品与共享操作 | 仅应用一次所选分配层级，使用采集的物理或经济驱动因子；当分配对结果有实质影响时记录敏感性。 | 细分负担；外运数量与属性；使用时的代表期价格 | 已分配前景交换和披露的分配因子 | `iso-14044-2006` |

### 数据质量要求

| requirement_id | Applies to | Requirement | Evidence |
| --- | --- | --- | --- |
| `dq_identity` | 产品与基酒批次 | 为每个纳入批次保留产品识别、葡萄酒类别、来源、上游数据集关联、静态或起泡状态和脱醇技术。 | 批次谱系、供应商或内部记录、产品规格 |
| `dq_measurement` | 质量、体积、密度、酒精度、公用工程与废物 | 使用适合所测数量的校准或受控测量系统。保留方法、校准状态、取样点、时间和所有转换因子。 | 校准证书、实验室方法、仪表记录、转换工作表 |
| `dq_representativeness` | 前景时期 | 使用覆盖数据集所代表技术、产品形式、清洗循环、启停以及季节或生产期条件的时期；解释排除项和缺失数据替代。 | 生产计划、批次清单、覆盖评估、缺失数据日志 |
| `dq_completeness` | 过程清单 | 核算合格与拒收葡萄酒、所有材料添加、电力、热力或燃料、用水、放行产品、回收与废弃乙醇馏分、废水、范围内包装、不合格产品以及直接计量的排放或损失。 | 过程图、物料与水平衡、公用工程核对、废物台账 |
| `dq_allocation` | 共享服务与共产品 | 保留未分配总量、分配层级决定、驱动数据、计算和重现每项分配所需的敏感性。 | 分配工作表与来源记录 |
| `dq_product_release` | 最终参考产品 | 保留实际酒精度、样品与方法、放行决定、感官符合性、适用时的最低耐久日期判定和包装范围声明。 | 实验室证书、签署的放行、感官记录、标签或规格审查 |
| `dq_provisional_ranges` | 所有推理估算 | 所有 `reasoned_estimate` 范围仅作为暂定编制与 QA 指导。发布前用经审查前景证据或来源支持证据替换，或记录审查者的明确接受。 | 范围证据审查记录 |

## 9. 校验规则

| rule_id | 适用对象 | 规则 | source_ids |
| --- | --- | --- | --- |
| `val_identity` | 前景数据包 | 若产品并非由已经充分形成适用特征的葡萄酒或特种葡萄酒制得，或数据集代表直接发酵果汁、部分脱醇葡萄酒或其他排除饮料，则产品识别校验失败。 | `oiv-eco-432-2012`; `eu-reg-2021-2117`; `eu-commission-2024-694` |
| `val_reference` | 参考流 | 要求恰有一个 1 kg 饮料净质量参考产出，使用产品流 UUID `014d2659-f8e8-4a23-adfa-97cbda224bab`、Mass UUID `93a60a56-a3c8-11da-a746-0800200b9a66`、单位组 UUID `93a60a57-a4c8-11da-a746-0800200c9a66` 及单位 kg。包装质量不得计入参考数量。 |  |
| `val_alcoholic_strength` | 已放行产品 | 本规范范围要求记录实际酒精度低于 0.5% vol，并提供检测方法和放行证据。必须声明司法辖区特定阈值，且该阈值可以增加要求，但不得将本 PCR 扩展至部分脱醇葡萄酒。 | `oiv-eco-432-2012`; `eu-commission-2024-694` |
| `val_technique` | 脱醇过程 | 要求声明允许的技术或组合，并提供脱醇未造成感官缺陷的证据。若在脱除酒精的同时提高相应葡萄醪糖含量，则标记为不符合。 | `oiv-oeno-394a-2012`; `eu-reg-2021-2117` |
| `val_mass_balance` | 每个生产批次 | 要求投入、产出、库存变化和废物记录相互关联，并在综合测量不确定度内完成有记录核对。报告无法解释的不平衡；不得虚构平衡交换。 |  |
| `val_stream_classification` | 脱除乙醇与其他次级流 | 同一流的同一质量不得同时报告为回收产品和废物。要求记录成分、去向、所有权转移和分配处理。 | `iso-14044-2006` |
| `val_allocation` | 共享与多产出过程 | 要求先考虑避免分配或过程细分。仍需分配时，要求可重现所选物理或经济关系、时期、因子计算和敏感性。 | `iso-14044-2006` |
| `val_packaging` | 声明包装产品 | 包装在范围内时，要求材料特定包装投入和包装废物；声明散装时，要求不存在包装交换且明确散装条件。 |  |
| `val_provisional_ranges` | 候选定量指导 | 将超出暂定范围的数值报告供审查，但不得将 `reasoned_estimate` 作为法律或发布关键符合性限值。 |  |

## 10. 发布数据集画像

| 字段 | 值 |
| --- | --- |
| dataset_role | 工厂无酒精葡萄酒成品的前景生产数据集 |
| downstream_use | secondary_dataset; background_dataset |
| allowed_use | 明确关联适当上游基酒生产和所声明下游阶段的产品足迹与生命周期模型；仅在范围、产品状态、包装、地域、技术、参考期和分配等价时用于比较 |
| excluded_use | 直接代表部分脱醇葡萄酒、葡萄汁饮料、非葡萄发酵饮料，或在未关联上下游数据集时代表完整从摇篮到坟墓产品系统 |
| required_metadata | 规范 PCR id；参考流 UUID 和质量属性；生产地域与时期；基酒类别与来源；静态或起泡状态；脱醇技术；进料与成品酒精度；包装范围与形式；分配方法；关联数据集 |
| required_quality_disclosure | 测量与校准覆盖；实验室与感官方法；时间与设施覆盖；质量、用水和公用工程核对；缺失数据；使用的暂定范围；共产品与废物去向；分配敏感性 |
| update_trigger | 产品定义或法律阈值变化；脱醇技术或能源系统变化；基酒来源、配方、包装、得率、共产品去向、分配、设施覆盖或参考期的实质变化；用经审查证据替换暂定范围 |

## 11. 数据源

| Source id | Type | Reference | Used for |
| --- | --- | --- | --- |
| `oiv-eco-432-2012` | official_guidance | OIV Resolution OIV-ECO 432-2012, “Beverage obtained by dealcoholisation of wine”, https://www.oiv.int/de/node/3304（检索于 2026-08-11） | 规范产品定义、仅以葡萄酒为投入、低于 0.5% vol 的范围 |
| `oiv-oeno-394a-2012` | official_guidance | OIV Resolution OIV-OENO 394A-2012, “Dealcoholisation of wines”, https://www.oiv.int/node/3274（检索于 2026-08-11） | 过程分解、允许的分离技术、感官与操作限制 |
| `eu-reg-2021-2117` | standard | Regulation (EU) 2021/2117, ELI https://eur-lex.europa.eu/eli/reg/2021/2117/oj（检索于 2026-08-11） | 葡萄酒先充分形成特征的要求、允许技术、过程与标签边界 |
| `eu-commission-2024-694` | official_guidance | European Commission Notice C/2024/694, “Questions and answers on the implementation of EU rules on the de-alcoholisation of wines”, ELI https://data.europa.eu/eli/C/2024/694/oj（检索于 2026-08-11） | 与部分脱醇葡萄酒的区分、酒精度与放行披露、最低耐久日期责任 |
| `oiv-cst-431-2011` | official_guidance | OIV Resolution OIV-CST 431-2011, “General principles of the OIV greenhouse gas accounting protocol for the vine and wine sector”, https://www.oiv.int/node/3309（检索于 2026-08-11） | 能源和直接/间接活动覆盖、边界与关联阶段披露 |
| `iso-14044-2006` | standard | ISO 14044:2006, Environmental management — Life cycle assessment — Requirements and guidelines, Clause 4.3.4 | 分配层级、过程细分、物理及其他分配关系 |
