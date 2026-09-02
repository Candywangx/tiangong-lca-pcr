---
pcr_id: pcr.food-products-beverages-and-tobacco-textiles-apparel-and-leather-products.meat-fish-fruits-vegetables-oils-and-fats.beans-frozen
language: zh-CN
status: candidate
content_maturity: authored_methodology
translation_status: aligned
sync_with: pcr.en-US.md
---

# 冷冻豆类

## 1. 范围与适用性

本 PCR 适用于以洁净、完好、多汁的鲜豆荚或未成熟豆种子制造的单一组分冷冻豆类产品。覆盖四季豆、黄荚豆、利马豆及类似豆类：以鲜品接收，进行整理，在产品稳定性需要时焯烫，快速冻结，包装或装入已声明的散装容器，并在冻结状态下保持至加工设施大门。

前景边界从鲜豆进入加工设施开始。鲜豆的上游种植与来料运输由链接的供应商数据集表示。前景包括接收、视情况修整或脱荚、清洗、分选、视情况切分、焯烫、冷却、沥水或脱水、速冻、包装，以及至设施发运为止的冷冻储存。

本 PCR 不包括干豆、罐藏或其他常温货架稳定豆制品、豌豆、混合蔬菜、调味预制菜、豆泥，以及豆类并非参考产品的产品。默认边界不包括已声明设施大门之后的配送、零售储存、烹饪、消费与生命末期。

## 2. 产品类别识别

| 字段 | 值 |
| --- | --- |
| canonical_pcr_id | pcr.food-products-beverages-and-tobacco-textiles-apparel-and-leather-products.meat-fish-fruits-vegetables-oils-and-fats.beans-frozen |
| classification_refs | CPC 3.0 `21311` Beans, frozen（仅作为映射语境） |
| covered_products | 单一组分冷冻四季豆、黄荚豆、利马豆及类似冷冻豆荚或未成熟豆种子 |
| excluded_products | 干豆；罐藏豆；豌豆；混合蔬菜；调味餐食；豆泥；豆类并非参考产品的产品 |
| representative_product | 加工设施大门处的未调味冷冻豆类，已包装或装入已声明的散装容器 |
| production_route | 鲜豆接收与整理；焯烫与冷却；速冻；包装与冷冻储存 |
| market_state | 加工设施大门处的冷冻产品；在已声明允许偏差条件下，热中心温度不高于 -18 °C |

## 3. 参考流

| 字段 | 值 |
| --- | --- |
| What | 在加工设施大门供应的、可进入市场的单一组分冷冻豆类 |
| How much | 1 kg 冷冻豆类净产品，不含包装 |
| How well | 符合已声明的种属或商品类型、食用部位、样式、添加物、质量规范及冷链条件；温度稳定后热中心达到 -18 °C 或更低 |
| How long or cycle | 从鲜豆接收，经已声明的厂内冷冻储存期限，至设施大门发运 |
| reference_flow_link | `reference_frozen_beans` |

| 字段 | 值 |
| --- | --- |
| 参考数量 | 1 kg |
| 参考产品流 | 豆类，冷冻 `d6a6b877-75b8-48c5-b219-857c70de3e3d` |
| 参考流属性 | Mass `93a60a56-a3c8-11da-a746-0800200b9a66` |
| 参考单位组 | Units of mass `93a60a57-a4c8-11da-a746-0800200c9a66` |
| 参考单位 | kg |
| 必需限定信息 | 豆类种属或商品类型；豆荚或豆种子形态；切分样式与尺寸等级；焯烫状态；添加物或调味状态；冻结技术；包装或散装容器形式；净质量基准；设施大门地理位置；生产期；冷冻储存期限；产品温度监测依据 |

构建前景数据包时，所有必需限定信息必须在数据集元数据、过程说明、参考流备注、产品说明或等效字段中声明。缺失任何限定信息都会使参考流定义不完整。

## 4. 计量与单位规则

| 规则编号 | 适用对象 | 必需流属性 | 必需单位 | 规则 |
| --- | --- | --- | --- | --- |
| `reference_net_mass` | 参考冷冻豆类产品 | Mass `93a60a56-a3c8-11da-a746-0800200b9a66` | kg | 报告设施大门处可食冷冻豆类的净质量；参考数量不包括初级、次级及运输包装。 |
| `stage_mass_balance` | 鲜豆、中间品、产品、残余物及废水固形物 | Mass | kg | 按已声明的过程状态测量湿质量，并在统一的湿质量基准上核对各阶段投入、产出、保留水分、去除水分及库存变化。 |
| `water_accounting` | 工艺用水与冷却水 | Mass 或带密度的体积 | kg 或 m3 | 分别记录总取水、循环水、净补水与排放；采用实测温度对应的密度或已披露的换算假设将体积换算为质量。 |
| `energy_accounting` | 电力、蒸汽、热力及燃料 | Energy 或载能体特定属性 | kWh、MJ 或 kg | 分开保留不同能源载体，计量外购电力和热力；燃料质量或体积换算为能量时声明采用低位或高位热值。 |
| `temperature_condition` | 产品热中心与冷冻储存 | Temperature | °C | 记录用于证明已声明冷冻状态的方法、位置、频率、校准状态及温度偏离处置；不得仅凭冷冻设备设定值推断产品温度。 |
| `packaging_separation` | 包装材料 | Mass | kg | 按材料报告包装，并区分施加于参考产品的包装、可重复使用运输物品及包装废物。 |

## 5. 系统边界

### 边界概化

| 字段 | 值 |
| --- | --- |
| declared_starting_condition | 加工设施接收门处验收合格的鲜豆 |
| starting_condition_role | 前景产品投入；其上游种植与来料运输由链接的提供方数据集表示 |
| product_classification_scope | 以 CPC 3.0 `21311` 作为映射语境的单一组分冷冻豆类，但 CPC 不构成规范 PCR 身份 |
| recursive_input_rule | 如同一产品类别的冷冻豆类作为重新包装或进一步加工的投入，则将其记录为已声明起始条件产品投入并链接独立的上游冷冻豆类数据集，不递归复制本前景系统 |
| upstream_dataset_requirement | 为鲜豆、包装材料、电力、热能或燃料、供水、制冷剂生产及任何外部废物或废水处理链接具有地理与技术代表性的数据集 |
| disclosure | 声明豆类种属或商品类型、食用部位、来料状态、整理步骤、焯烫状态、冻结技术、添加物、包装形式、净质量基准、设施位置、生产期、储存期限、产品温度证据及相对默认大门边界的所有偏离 |

| 规则编号 | 适用对象 | 规则 | 来源 |
| --- | --- | --- | --- |
| `sb_foreground_gate` | 默认前景系统 | 纳入鲜豆接收、视情况修整或脱荚、清洗、分选、视情况切分、焯烫与冷却、沥水或脱水、速冻、包装或散装容纳、厂内冷冻储存、产品损失、废水及现场直接排放，直至从设施大门发运。 | `codex-cxs-320-2015`; `usda-frozen-green-wax-beans-1996`; `usda-frozen-lima-beans-2013` |
| `sb_cold_chain_condition` | 冻结与厂内冷链 | 证明速冻过程迅速通过最大冰晶形成温度区间，温度稳定后产品热中心达到 -18 °C 或更低，并在已声明允许偏差条件下将产品保持在 -18 °C 或更低；保留温度监测及偏离记录。 | `codex-cxs-320-2015`; `codex-cxc-8-1976` |
| `sb_upstream_links` | 进入前景的供应品 | 仅当链接的提供方数据集能表示种植、来料运输、包装生产、能源供应、供水及制冷剂生产时，才将这些活动置于前景之外；披露缺失或代理提供方。 | `iso-14044-2006` |
| `sb_waste_and_emissions` | 残余物、废水、包装废物、制冷剂及燃烧 | 记录跨越前景边界的每项物质废物产出与直接基本流排放。链接外部处理数据集，并避免在前景与提供方数据集中重复计入同一处理负荷。 | `iso-14044-2006` |
| `sb_downstream_exclusion` | 设施发运后的活动 | 默认系统不包括下游配送、零售储存、烹饪、消费及生命末期；仅在明确扩展的研究中纳入，并与本前景结果分开报告。 | `iso-14044-2006` |

## 6. 过程清单结构

### 过程图

| process_id | 过程名称 | 纳入状态 | 纳入条件 | 建模角色 | 定量参考 |
| --- | --- | --- | --- | --- | --- |
| `receiving_and_preparation` | 接收与整理 | `required` |  | 前景整理 | kg 验收鲜豆 |
| `blanching_and_cooling` | 焯烫与冷却 | `required` |  | 前景稳定处理 | kg 进入焯烫的整理后豆类 |
| `quick_freezing` | 速冻 | `required` |  | 前景冻结 | kg 进入冻结设备的冷却后焯烫豆类 |
| `packaging_and_frozen_storage` | 包装与冷冻储存 | `required` |  | 前景完成处理与设施大门储存 | kg 发运的合格冷冻豆类净产品 |

### 过程：接收与整理（`receiving_and_preparation`）

#### 输入

##### 产品流

###### 验收鲜豆（`fresh_beans_input`）

记录进入整理工序的验收鲜豆称量质量，包括已声明的种属、豆荚或豆种子形态、成熟度、供应商及接收批次。

- 选定流：与已声明种属和食用形态匹配的鲜豆
- 流属性/单位：Mass / kg
- 数量规则：实测验收鲜豆质量
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：产品特定（`product_specific`）
- 归一化基准：每 1 kg 冷冻豆类净产品
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_receiving_preparation_records`
- 来源：
- 数量范围：暂定鲜豆投入筛查范围
  - 范围角色：QA 校验（`qa_guardrail`）
  - 下限：1.00
  - 上限：1.60
  - 单位：kg
  - 基准：每 1 kg 冷冻豆类净产品
  - 基准类型：参考流（`reference_flow`）
  - 证据类型：推理估算（`reasoned_estimate`）

###### 整理用水（`preparation_water_input`）

记录用于清洗、流送、分选及设备冲洗的净补水，并另行披露循环水量。

- 选定流：过程用水
- 流属性/单位：Mass / kg
- 数量规则：分配给冷冻豆类生产的计量净补水
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每 1 kg 验收鲜豆
- 基准类型：过程输出（`process_output`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_receiving_preparation_records`
- 来源：
- 数量范围：暂定整理用水筛查范围
  - 范围角色：QA 校验（`qa_guardrail`）
  - 下限：0.05
  - 上限：10
  - 单位：kg
  - 基准：每 1 kg 验收鲜豆
  - 基准类型：过程输出（`process_output`）
  - 证据类型：推理估算（`reasoned_estimate`）

###### 整理用电（`preparation_electricity_input`）

记录用于输送、分选、切分、泵送及整理设备的计量电力，或采用可辩护的分表分配值。

- 选定流：与设施地理位置和电压等级匹配的电力供应
- 流属性/单位：Energy / kWh
- 数量规则：分配给接收与整理的计量电力
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每 1 kg 验收鲜豆
- 基准类型：过程输出（`process_output`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_receiving_preparation_records`
- 来源：
- 数量范围：暂定整理用电筛查范围
  - 范围角色：QA 校验（`qa_guardrail`）
  - 下限：0.001
  - 上限：0.20
  - 单位：kWh
  - 基准：每 1 kg 验收鲜豆
  - 基准类型：过程输出（`process_output`）
  - 证据类型：推理估算（`reasoned_estimate`）

#### 输出

##### 产品流

###### 整理后豆类（`prepared_beans_output`）

计算完成视情况修整、脱荚、分选、清洗及切分后、焯烫前的豆类质量。

- 选定流：整理后豆类，中间产品
- 流属性/单位：Mass / kg
- 数量规则：实测整理后豆类质量，或由验收投入扣除分离残余物及损失后进行质量平衡计算
- 数值来源模式：计算值（`calculated_value`）
- 适用范围：产品特定（`product_specific`）
- 归一化基准：每 1 kg 验收鲜豆
- 基准类型：过程输出（`process_output`）
- 证据类型：由采集数据计算（`calculated_from_collection`）
- 采集协议：`cp_receiving_preparation_records`
- 来源：
- 数量范围：暂定整理收率筛查范围
  - 范围角色：QA 校验（`qa_guardrail`）
  - 下限：0.65
  - 上限：1.05
  - 单位：kg
  - 基准：每 1 kg 验收鲜豆
  - 基准类型：过程输出（`process_output`）
  - 证据类型：推理估算（`reasoned_estimate`）

##### 废物流

###### 修整物与不合格豆类（`preparation_residues_output`）

按去向记录豆梗、豆丝、视情况去除的豆荚或豆壳、缺陷豆、外来植物物质及其他分离的整理残余物。

- 选定流：豆类整理残余物
- 流属性/单位：Mass / kg
- 数量规则：按处理或回收去向实测残余物质量
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：产品特定（`product_specific`）
- 归一化基准：每 1 kg 验收鲜豆
- 基准类型：过程输出（`process_output`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_receiving_preparation_records`
- 来源：
- 数量范围：暂定整理残余物筛查范围
  - 范围角色：QA 校验（`qa_guardrail`）
  - 下限：0
  - 上限：0.35
  - 单位：kg
  - 基准：每 1 kg 验收鲜豆
  - 基准类型：过程输出（`process_output`）
  - 证据类型：推理估算（`reasoned_estimate`）

###### 整理废水（`preparation_wastewater_output`）

记录整理工序排出的废水，扣除实测内部循环水量，并识别送往现场处理或外部处理。

- 选定流：食品加工废水
- 流属性/单位：Mass / kg
- 数量规则：实测排放量或根据整理工序净水量平衡计算
- 数值来源模式：计算值（`calculated_value`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每 1 kg 验收鲜豆
- 基准类型：过程输出（`process_output`）
- 证据类型：由采集数据计算（`calculated_from_collection`）
- 采集协议：`cp_receiving_preparation_records`
- 来源：
- 数量范围：暂定整理废水筛查范围
  - 范围角色：QA 校验（`qa_guardrail`）
  - 下限：0
  - 上限：10
  - 单位：kg
  - 基准：每 1 kg 验收鲜豆
  - 基准类型：过程输出（`process_output`）
  - 证据类型：推理估算（`reasoned_estimate`）

##### 基本流

默认不规定基本流。仅在由场址特定记录测量或计算时记录直接排放，并确保这些排放未已包含在废水或能源提供方数据集中。

### 过程：焯烫与冷却（`blanching_and_cooling`）

#### 输入

##### 产品流

###### 进入焯烫的整理后豆类（`prepared_beans_input`）

记录从整理工序转入焯烫设备的整理后豆类质量。

- 选定流：整理后豆类，中间产品
- 流属性/单位：Mass / kg
- 数量规则：实测转移质量
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：产品特定（`product_specific`）
- 归一化基准：每 1 kg 焯烫冷却后豆类
- 基准类型：过程输出（`process_output`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_blanching_cooling_records`
- 来源：`codex-cxs-320-2015`
- 数量范围：暂定焯烫投入筛查范围
  - 范围角色：QA 校验（`qa_guardrail`）
  - 下限：0.90
  - 上限：1.25
  - 单位：kg
  - 基准：每 1 kg 焯烫冷却后豆类
  - 基准类型：过程输出（`process_output`）
  - 证据类型：推理估算（`reasoned_estimate`）

###### 焯烫热能（`blanching_thermal_energy_input`）

通过仪表记录外购蒸汽或热力；如燃料在现场燃烧，则记录燃料及直接排放，不得重复计入外购热力。

- 选定流：与已声明焯烫技术匹配的蒸汽、热力或燃料
- 流属性/单位：Energy / MJ
- 数量规则：计量热能，或采用已披露热值换算的载能体数量
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：技术特定（`technology_specific`）
- 归一化基准：每 1 kg 焯烫冷却后豆类
- 基准类型：过程输出（`process_output`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_blanching_cooling_records`
- 来源：`codex-cxs-320-2015`
- 数量范围：暂定焯烫能耗筛查范围
  - 范围角色：QA 校验（`qa_guardrail`）
  - 下限：0.05
  - 上限：2.5
  - 单位：MJ
  - 基准：每 1 kg 焯烫冷却后豆类
  - 基准类型：过程输出（`process_output`）
  - 证据类型：推理估算（`reasoned_estimate`）

###### 焯烫与冷却用水（`blanching_cooling_water_input`）

记录焯烫与冷却的净补水，与内部循环水分开。

- 选定流：过程用水
- 流属性/单位：Mass / kg
- 数量规则：分配给焯烫与冷却的计量净补水
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每 1 kg 焯烫冷却后豆类
- 基准类型：过程输出（`process_output`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_blanching_cooling_records`
- 来源：
- 数量范围：暂定焯烫与冷却用水筛查范围
  - 范围角色：QA 校验（`qa_guardrail`）
  - 下限：0.05
  - 上限：15
  - 单位：kg
  - 基准：每 1 kg 焯烫冷却后豆类
  - 基准类型：过程输出（`process_output`）
  - 证据类型：推理估算（`reasoned_estimate`）

#### 输出

##### 产品流

###### 焯烫冷却后豆类（`blanched_cooled_beans_output`）

记录充分焯烫、冷却、沥水或脱水之后、速冻之前的质量。

- 选定流：焯烫冷却后豆类，中间产品
- 流属性/单位：Mass / kg
- 数量规则：冷却和沥水后实测转移质量
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：产品特定（`product_specific`）
- 归一化基准：每 1 kg 进入焯烫的整理后豆类
- 基准类型：过程输出（`process_output`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_blanching_cooling_records`
- 来源：`codex-cxs-320-2015`
- 数量范围：暂定焯烫收率筛查范围
  - 范围角色：QA 校验（`qa_guardrail`）
  - 下限：0.80
  - 上限：1.15
  - 单位：kg
  - 基准：每 1 kg 进入焯烫的整理后豆类
  - 基准类型：过程输出（`process_output`）
  - 证据类型：推理估算（`reasoned_estimate`）

##### 废物流

###### 焯烫与冷却废水（`blanching_cooling_wastewater_output`）

按处理去向记录净废水排放，包括受控溢流及分配给本过程的清洗排水。

- 选定流：食品加工废水
- 流属性/单位：Mass / kg
- 数量规则：内部循环之后的实测排水或水量平衡计算值
- 数值来源模式：计算值（`calculated_value`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每 1 kg 焯烫冷却后豆类
- 基准类型：过程输出（`process_output`）
- 证据类型：由采集数据计算（`calculated_from_collection`）
- 采集协议：`cp_blanching_cooling_records`
- 来源：
- 数量范围：暂定焯烫废水筛查范围
  - 范围角色：QA 校验（`qa_guardrail`）
  - 下限：0
  - 上限：15
  - 单位：kg
  - 基准：每 1 kg 焯烫冷却后豆类
  - 基准类型：过程输出（`process_output`）
  - 证据类型：推理估算（`reasoned_estimate`）

##### 基本流

仅在燃料于本过程边界内燃烧时记录直接燃烧排放；根据实测燃料用量与已声明因子来源计算。

### 过程：速冻（`quick_freezing`）

#### 输入

##### 产品流

###### 进入冻结设备的焯烫豆类（`blanched_beans_input`）

记录进入速冻设备的已冷却、沥水豆类质量。

- 选定流：焯烫冷却后豆类，中间产品
- 流属性/单位：Mass / kg
- 数量规则：实测冻结设备进料质量
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：产品特定（`product_specific`）
- 归一化基准：每 1 kg 离开冻结设备的散装冷冻豆类
- 基准类型：过程输出（`process_output`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_quick_freezing_records`
- 来源：
- 数量范围：暂定冻结进料筛查范围
  - 范围角色：QA 校验（`qa_guardrail`）
  - 下限：0.95
  - 上限：1.15
  - 单位：kg
  - 基准：每 1 kg 离开冻结设备的散装冷冻豆类
  - 基准类型：过程输出（`process_output`）
  - 证据类型：推理估算（`reasoned_estimate`）

###### 冻结用电（`freezing_electricity_input`）

记录冻结设备及可归属本过程的制冷辅助设备用电；防止与冷冻储存用电重叠。

- 选定流：与设施地理位置和电压等级匹配的电力供应
- 流属性/单位：Energy / kWh
- 数量规则：速冻工序的计量或分表分配电力
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：技术特定（`technology_specific`）
- 归一化基准：每 1 kg 离开冻结设备的散装冷冻豆类
- 基准类型：过程输出（`process_output`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_quick_freezing_records`
- 来源：`codex-cxs-320-2015`; `codex-cxc-8-1976`
- 数量范围：暂定冻结用电筛查范围
  - 范围角色：QA 校验（`qa_guardrail`）
  - 下限：0.02
  - 上限：1.0
  - 单位：kWh
  - 基准：每 1 kg 离开冻结设备的散装冷冻豆类
  - 基准类型：过程输出（`process_output`）
  - 证据类型：推理估算（`reasoned_estimate`）

###### 制冷剂补充量（`refrigerant_makeup_input`）

根据系统层级的采购、回收、充注及库存记录，采用明确分配基准计算可归属本过程的制冷剂补充量。

- 选定流：与已安装系统匹配的制冷剂
- 流属性/单位：Mass / kg
- 数量规则：报告期内分配的制冷剂库存损失
- 数值来源模式：计算值（`calculated_value`）
- 适用范围：技术特定（`technology_specific`）
- 归一化基准：每 1 kg 由相连制冷系统处理的冷冻产品
- 基准类型：过程输出（`process_output`）
- 证据类型：由采集数据计算（`calculated_from_collection`）
- 采集协议：`cp_refrigerant_inventory_records`
- 来源：
- 数量范围：暂定制冷剂补充量筛查范围
  - 范围角色：QA 校验（`qa_guardrail`）
  - 下限：0
  - 上限：0.005
  - 单位：kg
  - 基准：每 1 kg 经处理的冷冻产品
  - 基准类型：过程输出（`process_output`）
  - 证据类型：推理估算（`reasoned_estimate`）

#### 输出

##### 产品流

###### 散装冷冻豆类（`bulk_frozen_beans_output`）

记录产品热中心达到已声明冻结条件之后、最终包装或储存分配之前的合格冷冻豆类质量。

- 选定流：散装冷冻豆类，中间产品
- 流属性/单位：Mass / kg
- 数量规则：实测合格冻结设备产出
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：产品特定（`product_specific`）
- 归一化基准：每 1 kg 进入冻结设备的焯烫豆类
- 基准类型：过程输出（`process_output`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_quick_freezing_records`
- 来源：`codex-cxs-320-2015`; `codex-cxc-8-1976`
- 数量范围：暂定冻结收率筛查范围
  - 范围角色：QA 校验（`qa_guardrail`）
  - 下限：0.85
  - 上限：1.05
  - 单位：kg
  - 基准：每 1 kg 进入冻结设备的焯烫豆类
  - 基准类型：过程输出（`process_output`）
  - 证据类型：推理估算（`reasoned_estimate`）

##### 基本流

###### 排放到空气的制冷剂（`refrigerant_to_air_output`）

将未回收制冷剂损失的物质身份及分配质量报告为直接基本流排放；仅在完成充注与回收核对时才报告为零。

- 选定流：与已安装物质匹配的制冷剂空气排放
- 流属性/单位：Mass / kg
- 数量规则：分配给冷冻豆类处理量的未回收制冷剂损失计算值
- 数值来源模式：计算值（`calculated_value`）
- 适用范围：技术特定（`technology_specific`）
- 归一化基准：每 1 kg 由相连制冷系统处理的冷冻产品
- 基准类型：过程输出（`process_output`）
- 证据类型：由采集数据计算（`calculated_from_collection`）
- 采集协议：`cp_refrigerant_inventory_records`
- 来源：
- 数量范围：暂定制冷剂排放筛查范围
  - 范围角色：QA 校验（`qa_guardrail`）
  - 下限：0
  - 上限：0.005
  - 单位：kg
  - 基准：每 1 kg 经处理的冷冻产品
  - 基准类型：过程输出（`process_output`）
  - 证据类型：推理估算（`reasoned_estimate`）

### 过程：包装与冷冻储存（`packaging_and_frozen_storage`）

#### 输入

##### 产品流

###### 进入完成处理的散装冷冻豆类（`bulk_frozen_beans_input`）

记录转入包装及设施大门冷冻储存的散装冷冻豆类质量。

- 选定流：散装冷冻豆类，中间产品
- 流属性/单位：Mass / kg
- 数量规则：实测转移质量
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：产品特定（`product_specific`）
- 归一化基准：每 1 kg 合格冷冻豆类净产品
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_packaging_storage_records`
- 来源：
- 数量范围：暂定完成处理投入筛查范围
  - 范围角色：QA 校验（`qa_guardrail`）
  - 下限：1.00
  - 上限：1.20
  - 单位：kg
  - 基准：每 1 kg 合格冷冻豆类净产品
  - 基准类型：参考流（`reference_flow`）
  - 证据类型：推理估算（`reasoned_estimate`）

###### 包装材料（`packaging_materials_input`）

按材料分别记录初级包装和分配的次级包装；除非报告期内发生损失，否则不计入可重复使用运输物品。

- 选定流：按已声明聚合物、纸、纸板、金属或其他材料区分的包装材料
- 流属性/单位：Mass / kg
- 数量规则：发放给合格产品的采购包装，扣除有文件记录的退回量与库存变化
- 数值来源模式：计算值（`calculated_value`）
- 适用范围：产品特定（`product_specific`）
- 归一化基准：每 1 kg 合格冷冻豆类净产品
- 基准类型：参考流（`reference_flow`）
- 证据类型：由采集数据计算（`calculated_from_collection`）
- 采集协议：`cp_packaging_storage_records`
- 来源：
- 数量范围：暂定包装质量筛查范围
  - 范围角色：QA 校验（`qa_guardrail`）
  - 下限：0.002
  - 上限：0.15
  - 单位：kg
  - 基准：每 1 kg 合格冷冻豆类净产品
  - 基准类型：参考流（`reference_flow`）
  - 证据类型：推理估算（`reasoned_estimate`）

###### 冷冻储存用电（`frozen_storage_electricity_input`）

记录从冻结完成至发运期间分配给厂内冷冻储存的电力，采用已声明储存期限且不包括下游配送。

- 选定流：与设施地理位置和电压等级匹配的电力供应
- 流属性/单位：Energy / kWh
- 数量规则：按占用容量-时间或实测产品处理量及已声明期限分配的计量储存用电
- 数值来源模式：计算值（`calculated_value`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：已声明厂内储存期限内每 1 kg 合格冷冻豆类净产品
- 基准类型：储存期限（`storage_duration`）
- 证据类型：由采集数据计算（`calculated_from_collection`）
- 采集协议：`cp_packaging_storage_records`
- 来源：`codex-cxc-8-1976`
- 数量范围：暂定冷冻储存用电筛查范围
  - 范围角色：QA 校验（`qa_guardrail`）
  - 下限：0.001
  - 上限：0.30
  - 单位：kWh/月
  - 基准：每 1 kg 冷冻产品每月厂内储存
  - 基准类型：储存期限（`storage_duration`）
  - 证据类型：推理估算（`reasoned_estimate`）

#### 输出

##### 产品流

###### 参考冷冻豆类（`reference_frozen_beans`）

这是按产品净质量归一化后、位于加工设施大门的已声明参考产品。

- 选定流：豆类，冷冻 `d6a6b877-75b8-48c5-b219-857c70de3e3d`
- 流属性/单位：Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- 数量规则：固定参考数量 1 kg 冷冻豆类净产品，不含包装
- 数值来源模式：固定值（`fixed_value`）
- 适用范围：通用（`generic`）
- 归一化基准：1 kg 参考冷冻豆类产品
- 基准类型：参考流（`reference_flow`）
- 证据类型：方法公式（`method_formula`）
- 采集协议：
- 来源：`mass-balance-identity`
- 数量范围：精确参考流恒等式
  - 范围角色：允许范围（`allowed_range`）
  - 下限：1
  - 上限：1
  - 单位：kg
  - 基准：参考流
  - 基准类型：参考流（`reference_flow`）
  - 证据类型：方法公式（`method_formula`）
  - 来源：`mass-balance-identity`

##### 废物流

###### 包装废物（`packaging_waste_output`）

按材料及处理去向记录离开前景系统的破损、裁切或未使用包装。

- 选定流：按材料区分的包装废物
- 流属性/单位：Mass / kg
- 数量规则：实测包装废物或材料平衡计算值
- 数值来源模式：计算值（`calculated_value`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每 1 kg 合格冷冻豆类净产品
- 基准类型：参考流（`reference_flow`）
- 证据类型：由采集数据计算（`calculated_from_collection`）
- 采集协议：`cp_packaging_storage_records`
- 来源：
- 数量范围：暂定包装废物筛查范围
  - 范围角色：QA 校验（`qa_guardrail`）
  - 下限：0
  - 上限：0.05
  - 单位：kg
  - 基准：每 1 kg 合格冷冻豆类净产品
  - 基准类型：参考流（`reference_flow`）
  - 证据类型：推理估算（`reasoned_estimate`）

###### 不合格冷冻豆类（`nonconforming_frozen_beans_output`）

按回收、返工、食品用途、饲料用途、厌氧消化、堆肥或处置去向记录不符合规格或受损的冷冻豆类；不得从参考产品中直接抵扣。

- 选定流：不合格冷冻豆类产品
- 流属性/单位：Mass / kg
- 数量规则：按去向实测不合格品质量
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：产品特定（`product_specific`）
- 归一化基准：每 1 kg 合格冷冻豆类净产品
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_packaging_storage_records`
- 来源：
- 数量范围：暂定不合格产品筛查范围
  - 范围角色：QA 校验（`qa_guardrail`）
  - 下限：0
  - 上限：0.20
  - 单位：kg
  - 基准：每 1 kg 合格冷冻豆类净产品
  - 基准类型：参考流（`reference_flow`）
  - 证据类型：推理估算（`reasoned_estimate`）

##### 基本流

冷冻储存的直接制冷剂排放采用同一系统层级制冷剂协议记录在 `refrigerant_to_air_output` 下；在冻结与储存之间仅分配一次，不得重复计算。

## 7. 分配与共产品处理

| 规则编号 | 适用对象 | 规则 | 来源 |
| --- | --- | --- | --- |
| `al_avoid_allocation` | 共用整理、冻结、储存及公用设施 | 优先采用过程细分、直接计量、批次记录或具有物理意义的过程分离，使负荷无需分配即可归属。 | `iso-14044-2006` |
| `al_internal_recycling` | 返工、循环水、回收制冷剂及内部重复使用的中间品 | 将内部循环作为内部交换处理；记录补充投入、排放或损失产出及回收所需能源，不得对同一回收材料重复计入抵扣。 | `mass-balance-identity` |
| `al_joint_products` | 与冷冻豆类共同产生的可销售共产品 | 无法避免分配时，采用反映因果关系且有文件支持的物理关系。不存在可辩护物理关系时，采用代表性连续十二个月价格期的经济分配，并披露价格来源、波动性及物理分配敏感性结果。 | `iso-14044-2006` |
| `al_waste_treatment` | 送往处理或回收的残余物及不合格产品 | 在设施大门记录废物流，并一致应用所选处理或回收约定；披露任何避免产品抵扣，防止与处理提供方数据集重叠。 | `iso-14044-2006` |

## 8. 前景数据采集、计算与质量规则

### 数据采集协议

| protocol_id | process_id | flow_role | record_type | raw_fields | collection_method | unit | frequency | temporal_coverage | site_scope | aggregation_rule | quality_evidence |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| `cp_receiving_preparation_records` | `receiving_and_preparation` | 鲜豆、整理后豆类、用水、电力、残余物及废水 | 接收、生产、仪表及废物记录 | 批次编号；种属/类型；供应商；来料质量；验收质量；整理后质量；取水；循环水；排水；电力；残余物质量；去向；时间戳 | 经校准秤、水表和电表、批次记录及废物转移记录 | kg；m3；kWh | 每批次，并进行月度仪表核对 | 代表性生产期，通常至少连续 12 个月或完整季节性生产期 | 设施内生产已声明产品的所有生产线和班次 | 汇总可归属记录，核对库存变化，按有文件支持的因果驱动因素分配共用仪表，然后归一化至参考净产出 | 校准证书、仪表标识、批次可追溯性、核对结果及签字废物记录 |
| `cp_blanching_cooling_records` | `blanching_and_cooling` | 豆类转移、热能、用水、废水、时间及温度 | 批次、仪表、锅炉或供热及温度记录 | 批次编号；投入/产出质量；焯烫时间；焯烫温度；冷却条件；蒸汽/热力/燃料；补水；循环水；排水；时间戳 | 经校准秤和温度传感器、能源和水表及批次控制导出 | kg；°C；s 或 min；MJ；m3 | 逐批记录质量和温度；连续或班次仪表读数并进行月度核对 | 代表性生产期，通常至少连续 12 个月或完整季节性生产期 | 所有相关焯烫设备、冷却设备、生产线和班次 | 核对批次质量和公用设施仪表；按实测运行时间、处理量或热负荷分配共用公用设施；归一化至阶段产出及参考流 | 传感器和仪表校准、批次完整性、公用设施核对及偏离记录 |
| `cp_quick_freezing_records` | `quick_freezing` | 冻结设备进料、产出、电力及产品温度 | 批次、仪表、冻结设备控制及温度记录 | 批次编号；进料质量；合格产出质量；电力；冻结技术；空气设定值；热中心测量；稳定时间；温度偏离记录 | 经校准秤、分表或可辩护仪表分配，以及经校准产品温度探针或经验证等效方法 | kg；kWh；°C；min | 逐批记录质量与热中心验证；连续或班次电力数据 | 代表性生产期，通常至少连续 12 个月或完整季节性生产期 | 生产已声明产品的每台冻结设备和每个班次 | 核对进料与产出质量；按计量生产线用电或处理量-时间分配冻结设备电力；归一化至合格产出 | 秤和温度探针校准、仪表覆盖、控制系统导出及偏离处置 |
| `cp_refrigerant_inventory_records` | `quick_freezing` | 制冷剂补充与排放 | 制冷系统库存及维护记录 | 制冷剂身份；期初充注量；补充量；回收量；转移量；期末充注量；维护日期；泄漏事件；相连设备；冷冻产品处理量 | 由采购、回收及维护记录支持的年度或生产期质量平衡核对 | kg | 每次维护事件，并进行年度或生产期核对 | 与生产数据相同的报告期 | 服务于冻结及纳入冷冻储存的所有制冷系统 | 未回收损失 = 期初充注量 + 补充量 - 回收量 - 转移量 - 期末充注量；按计量制冷负荷或有文件支持的处理量-时间仅分配一次 | 发票、维护日志、回收记录、充注库存及核对签署 |
| `cp_packaging_storage_records` | `packaging_and_frozen_storage` | 散装冷冻投入、包装、储存用电、成品及废物 | 包装领用、生产、仓储、发运、仪表及废物记录 | 批次编号；产品投入/产出质量；包装材料及质量；包装库存；入库/出库；储存期限；空气与产品温度；电力；废物质量；去向 | 经校准秤、包装库存记录、仓库管理时间戳、经校准温度监测、电表及废物记录 | kg；kWh；°C；day | 每批次或每次发运；连续温度；月度电力核对 | 代表性生产期，通常至少连续 12 个月或完整季节性生产期 | 服务于已声明产品的所有包装线与冷冻库 | 核对产品与包装平衡；按占用容量-时间或实测制冷负荷分配储存用电；归一化至发运净产品 | 秤和传感器校准、库存核对、发运可追溯性、温度日志及偏离处置 |

### 计算规则

| rule_id | Applies to | Formula or rule | Inputs | Output | source_ids |
| --- | --- | --- | --- | --- | --- |
| `cr_reference_normalization` | 所有前景交换 | 归一化数量 = 可归属交换数量 / 发运的合格冷冻豆类净质量，再乘以 1 kg 参考流 | 可归属交换数量；发运的合格净质量 | 每 1 kg 参考冷冻豆类的交换数量 | `mass-balance-identity` |
| `cr_stage_mass_balance` | 每个过程阶段 | 质量平衡残差 = 总质量投入 - 产品产出 - 废物产出 - 实测去除或加入水量 - 库存变化；调查并披露重大残差，不得强制归零 | 经校准质量与水量记录；库存变化 | 阶段收率、损失及残差 | `mass-balance-identity` |
| `cr_shared_utility_allocation` | 共用电力、热力、用水及冷冻储存 | 按以下优先顺序采用最具因果性的实测驱动因素分配共用总量：分表用量、设备运行时间乘以实测负荷、质量处理量-时间、占用容量-时间；披露所选驱动因素 | 共用仪表总量；驱动因素测量；产品产出 | 可归属公用设施数量 | `iso-14044-2006` |
| `cr_refrigerant_loss` | 相连制冷系统 | 未回收制冷剂损失 = 期初充注量 + 补充量 - 回收量 - 转移量 - 期末充注量；在系统服务的产品之间仅分配一次 | 充注库存；采购；回收；转移；处理量或制冷负荷驱动因素 | 每参考流的制冷剂排放 kg | `mass-balance-identity` |
| `cr_storage_duration` | 冷冻储存用电 | 储存分配驱动因素 = 占用产品质量 × 储存期限；除非可直接计量，否则按已声明驱动因素分配共用储存用电 | 仓库入库/出库时间戳；占用质量；电表 | 每参考流及已声明期限的储存用电 kWh | `codex-cxc-8-1976` |

### 数据质量要求

| requirement_id | Applies to | Requirement | Evidence |
| --- | --- | --- | --- |
| `dq_identity_traceability` | 产品与参考流 | 将每个报告批次追溯至种属或商品类型、豆荚或豆种子形态、切分样式、添加物、包装形式、设施、生产期及准确的 Tiangong 参考流 UUID。 | 批次谱系、产品规范、标签及数据集元数据 |
| `dq_measurement_control` | 质量、公用设施、温度及制冷剂 | 使用身份明确且处于校准有效期内的仪器；记录数据缺口的估算方法，禁止以无文件支持的冻结设备设定值替代产品热中心证据。 | 校准证书、仪表覆盖图、缺口日志及热中心记录 |
| `dq_temporal_representativeness` | 前景活动数据 | 对全年运行至少覆盖连续 12 个月，或覆盖已声明完整季节性生产期；披露异常停机、作物季节影响及储存期限分布。 | 有日期的生产、仪表、仓储及发运记录 |
| `dq_completeness` | 前景清单 | 核对鲜豆投入、合格产出、残余物、废水、包装、能源及制冷剂记录；解释每项排除过程及每项重大质量平衡残差。 | 核对工作簿、排除登记及签字复核 |
| `dq_provider_alignment` | 上游及处理数据集 | 在重大时匹配地理、技术、时间、豆类生产路线、电力结构、包装材料、供水、制冷剂及处理路线；披露代理及敏感性。 | 提供方数据集元数据及代理登记 |
| `dq_cold_chain` | 速冻与厂内储存 | 保留连续空气温度监测及周期性产品温度证据或经验证等效证据，并附校准和温度偏离处置记录。 | 温度日志、探针校准、报警历史及纠正措施记录 |

## 9. 校验规则

| 规则编号 | 适用对象 | 规则 | 来源 |
| --- | --- | --- | --- |
| `vr_reference_identity` | 参考流 | 参考产品 UUID 必须为 `d6a6b877-75b8-48c5-b219-857c70de3e3d`，流属性 UUID 必须为 `93a60a56-a3c8-11da-a746-0800200b9a66`，单位组 UUID 必须为 `93a60a57-a4c8-11da-a746-0800200c9a66`，归一化参考数量必须等于 1 kg 冷冻豆类净产品。 |  |
| `vr_scope_qualifiers` | 产品身份 | 种属或商品类型、豆荚或豆种子形态、切分样式、焯烫状态、添加物、冻结技术、包装形式、设施大门、生产期、储存期限或产品温度依据任一缺失时，将数据包判为不完整。 | `codex-cxs-320-2015`; `usda-frozen-green-wax-beans-1996`; `usda-frozen-lima-beans-2013` |
| `vr_process_completeness` | 过程清单 | 要求全部四个已声明前景过程；对每项未发生的规定流，要求明确的零值、不适用或排除证据。 | `codex-cxs-320-2015`; `codex-cxc-8-1976` |
| `vr_temperature_condition` | 速冻与厂内冷链 | 要求提供温度稳定后热中心达到 -18 °C 或更低的证据，并证明冷冻储存在已声明允许偏差条件下保持 -18 °C 或更低；无文件记录的温度偏离应标记为不符合。 | `codex-cxs-320-2015`; `codex-cxc-8-1976` |
| `vr_mass_balance` | 各过程与前景总系统 | 要求各阶段及前景总系统具有投入产出核对；重大残差既未纠正也未解释时，校验失败。 | `mass-balance-identity` |
| `vr_allocation_disclosure` | 共用公用设施与共产品 | 要求分配层级、驱动因素、分配因子、共产品处理、使用价格时的价格期及敏感性结果均存在且内部一致。 | `iso-14044-2006` |
| `vr_no_double_counting` | 公用设施、制冷剂、内部循环及废物处理 | 确保外购热力与现场燃料、制冷剂补充与直接损失、内部循环与补充量、前景处理与提供方处理均不重复计入。 | `mass-balance-identity`; `iso-14044-2006` |
| `vr_data_coverage` | 前景记录 | 数据集作为已复核背景数据使用前，要求声明时间、场址、生产线及班次覆盖，并提供校准证据和缺失记录处置方法。 | `codex-cxc-8-1976` |

## 10. 发布数据集画像

| 字段 | 值 |
| --- | --- |
| dataset_role | 单元过程前景数据集 |
| downstream_use | `secondary_dataset`; 在方法学和数据复核后用作 `background_dataset` |
| allowed_use | 与已声明产品形态、整理路线、冻结技术、设施大门、地理位置、期间、包装及储存期限相匹配的冷冻豆类生产模型 |
| excluded_use | 鲜、干制、罐藏、混合、调味或熟制豆类产品；仅种植数据集；未明确扩展边界的下游冷链或消费者使用模型 |
| required_metadata | 规范 PCR id；Tiangong 参考流 UUID；种属或商品类型；豆荚或豆种子形态；切分样式；焯烫状态；添加物；冻结技术；包装形式；净质量基准；设施；地理位置；生产期；储存期限；温度证据；分配方法；提供方数据集引用 |
| required_quality_disclosure | 前景记录覆盖；仪器校准；质量与水量平衡；电表分配；制冷剂核对；温度偏离；产品损失；代理提供方；推理估算筛查结果；数据质量复核状态 |
| update_trigger | 豆类范围、整理或焯烫路线、冻结设备或制冷剂技术、包装、储存期限、设施地理位置、能源供应、分配、数据覆盖、质量规范或控制性外部标准发生重大变化 |

## 11. 数据源

| Source id | Type | Reference | Used for |
| --- | --- | --- | --- |
| `codex-cxs-320-2015` | standard | FAO 和 WHO，CXS 320-2015，《速冻蔬菜标准》，2022 年修订版，https://workspace.fao.org/sites/codex/Standards/CXS%20320-2015/CXS_320e.pdf（检索日期 2026-08-11） | 产品定义、整理与焯烫过程分解、速冻条件、四季豆与黄荚豆范围和产品形态 |
| `codex-cxc-8-1976` | official_guidance | FAO 和 WHO，CXC 8-1976，《速冻食品加工和处理操作规范》，2008 年修订版，https://workspace.fao.org/sites/codex/Standards/CXC%208-1976/CXC_008e.pdf（检索日期 2026-08-11） | 冷链边界、-18 °C 条件、温度监测、校准、储存及处理规则 |
| `usda-frozen-green-wax-beans-1996` | standard | 美国农业部农业市场服务局，《美国冷冻四季豆和黄荚豆等级标准》，1996-08-19 生效，https://www.ams.usda.gov/sites/default/files/media/Frozen_Green_and_Wax_Bean_Standard%5B1%5D.pdf（检索日期 2026-08-11） | 四季豆与黄荚豆产品定义、整理顺序、样式、质量及批次检验语境 |
| `usda-frozen-lima-beans-2013` | standard | 美国农业部农业市场服务局，《美国冷冻利马豆等级标准》，2013-08-29，https://www.ams.usda.gov/sites/default/files/media/Frozen_Lima_Bean_Standard%5B1%5D.pdf（检索日期 2026-08-11） | 利马豆产品定义、脱荚、清洗、焯烫、沥水、冻结及质量语境 |
| `iso-14044-2006` | standard | ISO 14044:2006，《环境管理—生命周期评价—要求与指南》，2022 年确认，https://www.iso.org/standard/38498.html（检索日期 2026-08-11） | 系统边界一致性、分配层级、提供方链接、报告及敏感性要求 |
| `mass-balance-identity` | method_factor | 在已声明湿质量过程状态及实测库存变化条件下应用质量守恒恒等式 | 参考归一化、过程质量平衡计算、内部循环核算及 QA 核对 |
