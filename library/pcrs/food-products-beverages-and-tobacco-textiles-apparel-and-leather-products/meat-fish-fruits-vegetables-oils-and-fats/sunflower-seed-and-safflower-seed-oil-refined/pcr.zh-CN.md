---
pcr_id: pcr.food-products-beverages-and-tobacco-textiles-apparel-and-leather-products.meat-fish-fruits-vegetables-oils-and-fats.sunflower-seed-and-safflower-seed-oil-refined
language: zh-CN
status: candidate
sync_with: pcr.en-US.md
---

# 精制葵花籽油和红花籽油

## 1. 范围与适用性

本 PCR 适用于炼油厂工厂大门处、以葵花籽、红花籽或两者已声明混合物为原料的散装精制食用油。前景边界覆盖接收粗油后实际采用的精炼路线，包括脱胶、适用时的化学中和与水洗、脱色与过滤、脱臭、精滤以及散装储存。公用工程、工艺用水、精炼助剂、直接产生的残渣、废水和直接排放在跨越前景边界时均须纳入。

农业种子生产、粗油提取、粗油接收前的进厂运输、零售包装、配送、零售、消费者使用和生命周期末端均不属于本门到门前景边界。上游粗油供应和其他技术圈投入须链接为背景数据集。初榨、冷榨和未精炼油因产品状态与工艺路线不同而排除。产品须识别为葵花籽油、红花籽油或已声明的葵花籽油/红花籽油混合物，并达到其声明食用市场用途所需的状态。

## 2. 产品类别识别

| 字段 | 值 |
| --- | --- |
| canonical_pcr_id | pcr.food-products-beverages-and-tobacco-textiles-apparel-and-leather-products.meat-fish-fruits-vegetables-oils-and-fats.sunflower-seed-and-safflower-seed-oil-refined |
| classification_refs | CPC 3.0:21632（exact） |
| covered_products | 散装精制葵花籽油；散装精制红花籽油；仅由精制葵花籽油和红花籽油构成且比例已声明的混合物 |
| excluded_products | 粗油；初榨或冷榨油；未精炼油；其他植物来源油；含其他油品的调配混合油；零售包装产品；废食用油；生物柴油和其他化学转化衍生物 |
| representative_product | 炼油厂工厂大门处的散装精制食用葵花籽油或红花籽油 |
| production_route | 接收葵花籽/红花籽粗油；脱胶；化学中和与水洗或已声明的物理精炼路线；脱色与过滤；脱臭；冷却或精滤；散装储存 |
| market_state | 零售包装和配送之前，位于炼油厂工厂大门处的散装、精制、食品级成品油 |

## 3. 参考流

| 字段 | 值 |
| --- | --- |
| What | 以葵花籽、红花籽或两者已声明混合物为原料的散装精制食用油 |
| How much | 1 kg 精制油净质量 |
| How well | 符合已声明的适用食品级规范与葵花籽/红花籽身份；不含包装质量 |
| How long or cycle | 炼油厂工厂大门放行的一个生产批次或生产周期；不适用服务期限 |
| reference_flow_link | `refined_sunflower_safflower_oil` |

| 字段 | 值 |
| --- | --- |
| 参考数量 | 1 kg |
| 参考产品流 | Sunflower-seed and safflower-seed oil, refined `1b88e515-861e-4552-b494-67bb3d645aa7` |
| 参考流属性 | Mass `93a60a56-a3c8-11da-a746-0800200b9a66` |
| 参考单位组 | Units of mass `93a60a57-a4c8-11da-a746-0800200c9a66` |
| 参考单位 | kg |
| 必需限定信息 | 植物来源：葵花籽、红花籽或已声明的混合比例；精炼路线：化学、物理或组合路线；声称时的油酸等级；食品级规范与放行准则；生产地域；生产期；散装工厂大门状态；排除包装 |

构建前景数据包时，`必需限定信息` 中列出的信息须在数据集元数据、过程说明、参考流备注、产品说明或等效数据包字段中明确声明。缺失必需限定信息的数据包视为参考流定义不完整。

## 4. 计量与单位规则

| rule_id | 适用对象 | 必需流属性 | 必需单位 | 规则 |
| --- | --- | --- | --- | --- |
| `reference_mass` | 参考产品和所有按质量归一化的清单行 | Mass `93a60a56-a3c8-11da-a746-0800200b9a66` | kg | 参考产品按 1 kg 油净质量报告。参考数量不包括包装、托盘、容器和罐底滞留量。 |
| `wet_dry_basis` | 粗油、精炼助剂、残渣和废水 | Mass `93a60a56-a3c8-11da-a746-0800200b9a66` | kg | 声明各质量按收货态、干基或活性物质计量。没有实测水分或浓度及有记录公式时，不得在不同基准间换算。 |
| `energy_conversion` | 购入电力、燃料和蒸汽 | 已声明的能量或质量属性 | 按适用情况使用 kWh、MJ 或 kg | 原始记录保留计量或发票单位；记录换算因子；没有实测蒸汽条件或明确焓值法时，不得将蒸汽质量视为能量数量。 |
| `blend_accounting` | 葵花籽油/红花籽油混合物 | Mass `93a60a56-a3c8-11da-a746-0800200b9a66` | kg | 分别记录葵花籽和红花籽粗油投入并披露其质量份额；扣除单独计量的非油添加物后，各份额须与粗油总投入核对一致。 |

## 5. 系统边界

### 边界概化

| 字段 | 值 |
| --- | --- |
| declared_starting_condition | 炼油厂大门处接收的葵花籽粗油、红花籽粗油或两者已声明的混合物，并记录质量、植物来源、质量状态、供应商或上游数据集以及接收期 |
| starting_condition_role | 前景精炼原料以及与上游油脂提取和运输的边界交接点 |
| product_classification_scope | 仅限精制葵花籽油和红花籽油；CPC 3.0:21632 是分类语境而非 canonical identity |
| recursive_input_rule | 进入同一类别的任何外购精制葵花籽油/红花籽油均作为技术圈投入记录并链接供应商数据集，不得递归重新应用本前景精炼 PCR |
| upstream_dataset_requirement | 每种粗油原料、公用工程、化学品和其他技术圈投入须链接地域和时间适宜的上游数据集；披露代理数据及任何被排除运输 |
| disclosure | 声明精炼路线、纳入的单元操作、设施地域、生产期、粗油植物来源份额、共产品和残渣、废水处理交接、直接排放覆盖范围及包装排除 |

| rule_id | 适用对象 | 规则 | source_ids |
| --- | --- | --- | --- |
| `boundary_gate_to_gate` | 前景炼油厂 | 纳入从实测粗油接收到散装精制油由工厂储存放行之间的操作，以及归属于该路线的现场公用工程、精炼助剂、残渣、废水和直接排放。 | `ec-jrc-fdm-bref-2019`; `nucci-et-al-2014-sunflower-oil-lca` |
| `boundary_route_disclosure` | 化学、物理或组合精炼 | 仅纳入实际采用的操作并明确披露省略或替代步骤；采用物理精炼时，化学中和与水洗为条件性步骤。 | `nucci-et-al-2014-sunflower-oil-lca` |
| `boundary_upstream_handoff` | 外购粗油和其他技术圈投入 | 上游生产保留在前景炼油厂之外，但须链接上游数据集并披露任何代理、截断或缺失运输。 | `ghg-protocol-product-standard-2011` |
| `boundary_quality_state` | 参考产品 | 输出须以已声明食用市场状态的精制油放行；初榨、冷榨、粗油和零售包装产品不在范围内。 | `codex-cxs-210-1999` |

## 6. 过程清单结构

### 过程图

| process_id | 过程名称 | 纳入状态 | 纳入条件 | 建模角色 | 定量参考 |
| --- | --- | --- | --- | --- | --- |
| `oil_refining` | 葵花籽/红花籽粗油精炼 | required | 始终要求；记录实际采用的化学、物理或组合路线 | 将接收的粗油转化为散装精制食用油的前景过程 | 工厂大门处 1 kg 精制油净质量 |

### 过程：葵花籽/红花籽粗油精炼（`oil_refining`）

#### 输入

##### 产品流

###### 葵花籽/红花籽粗油原料（`crude_oil_feed`）

计量进入精炼路线的各类植物来源粗油。原始记录须能区分葵花籽、红花籽和混合物组分。

- 选定流：Sunflower-seed and safflower-seed oil, crude `e48ecaca-7bfe-427a-a117-7eeeb8253565`
- 流属性/单位：Mass / kg
- 数量规则：投入精炼路线的粗油实测净质量
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：产品特定（`product_specific`）
- 归一化基准：每 1 kg 精制油净输出
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_mass_inputs`
- 数量范围：暂定粗油原料质量平衡筛查范围
  - 范围角色：QA 校验（`qa_guardrail`）
  - 下限：1.0
  - 上限：1.2
  - 单位：kg/kg 精制油
  - 基准：每 1 kg 精制油净输出
  - 基准类型：参考流（`reference_flow`）
  - 证据类型：推理估算（`reasoned_estimate`）

###### 工艺用水（`process_water`）

记录用于脱胶、水洗、清洁、真空系统和其他精炼用途并跨越前景边界的供水；非接触冷却水须可单独识别。

- 选定流：Process water
- 流属性/单位：Mass / kg
- 数量规则：分配至精炼生产周期的计量或核算用水量
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每 1 kg 精制油净输出
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_mass_inputs`
- 来源：`nucci-et-al-2014-sunflower-oil-lca`
- 数量范围：暂定用水筛查范围
  - 范围角色：QA 校验（`qa_guardrail`）
  - 下限：0
  - 上限：0.5
  - 单位：kg/kg 精制油
  - 基准：每 1 kg 精制油净输出；由路线特定证据或前景记录替换
  - 基准类型：参考流（`reference_flow`）
  - 证据类型：推理估算（`reasoned_estimate`）

###### 脱色土和助滤剂（`bleaching_aids`）

记录脱色和精滤中消耗的新吸附剂与助滤剂，并声明材料类型和水分基准。

- 选定流：Bleaching earth and filter aids
- 流属性/单位：Mass / kg
- 数量规则：库存发料或采购质量扣除经核实的退料，并按精制油输出归一化
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：技术特定（`technology_specific`）
- 归一化基准：每 1 kg 精制油净输出
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_mass_inputs`
- 来源：`nucci-et-al-2014-sunflower-oil-lca`
- 数量范围：暂定吸附剂筛查范围
  - 范围角色：QA 校验（`qa_guardrail`）
  - 下限：0
  - 上限：0.05
  - 单位：kg/kg 精制油
  - 基准：每 1 kg 精制油净输出；由路线特定证据或前景记录替换
  - 基准类型：参考流（`reference_flow`）
  - 证据类型：推理估算（`reasoned_estimate`）

###### 中和与脱胶化学品（`refining_chemicals`）

按商业产品质量和活性浓度记录碱液、酸和其他精炼化学品。本行取决于已声明路线和实际化学品用量。

- 选定流：Refining chemicals, route-specific
- 流属性/单位：Mass / kg
- 数量规则：实测或发票记录的化学品产品质量，并记录活性浓度
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：技术特定（`technology_specific`）
- 归一化基准：每 1 kg 精制油净输出
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_mass_inputs`
- 数量范围：暂定精炼化学品筛查范围
  - 范围角色：QA 校验（`qa_guardrail`）
  - 下限：0
  - 上限：0.05
  - 单位：kg 商业产品/kg 精制油
  - 基准：每 1 kg 精制油净输出；由路线特定证据或前景记录替换
  - 基准类型：参考流（`reference_flow`）
  - 证据类型：推理估算（`reasoned_estimate`）

###### 外购蒸汽或热力公用工程（`thermal_energy`）

记录外购蒸汽质量和状态，或记录现场产汽所用且单独计量的燃料与锅炉系统。不得同时计算外购蒸汽及其上游燃料。

- 选定流：Steam or thermal energy, route-specific
- 流属性/单位：按计量方式使用 Mass / kg steam 或 Energy / MJ
- 数量规则：实测外购蒸汽，或依据已核对前景记录计算的有效热能
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每 1 kg 精制油净输出
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_energy_inputs`
- 来源：`nucci-et-al-2014-sunflower-oil-lca`
- 数量范围：暂定外购蒸汽筛查范围
  - 范围角色：QA 校验（`qa_guardrail`）
  - 下限：0
  - 上限：1.0
  - 单位：kg steam/kg 精制油
  - 基准：每 1 kg 精制油净输出；仅在蒸汽质量为记录数量时适用
  - 基准类型：参考流（`reference_flow`）
  - 证据类型：推理估算（`reasoned_estimate`）

###### 外购电力（`electricity_input`）

记录归属于前景边界内精炼、泵送、真空、过滤、冷却和散装储存的计量或发票电力。

- 选定流：Electricity, location-specific supply mix
- 流属性/单位：Energy / kWh
- 数量规则：计量电力，或对完整设施电表平衡进行有记录的分配
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每 1 kg 精制油净输出
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_energy_inputs`
- 来源：`nucci-et-al-2014-sunflower-oil-lca`
- 数量范围：暂定电力筛查范围
  - 范围角色：QA 校验（`qa_guardrail`）
  - 下限：0
  - 上限：1.0
  - 单位：kWh/kg 精制油
  - 基准：每 1 kg 精制油净输出；由场址或技术证据替换
  - 基准类型：参考流（`reference_flow`）
  - 证据类型：推理估算（`reasoned_estimate`）

##### 废物流

本 PCR 不要求废物投入。任何回收油、返工料或外部接收残渣须作为单独产品流或废物流投入记录，并注明来源和处理状态。

##### 基本流

任何直接取用的水或其他资源投入须记录为相应基本流，不得记录为外购工艺用水。

#### 输出

##### 产品流

###### 散装精制葵花籽油/红花籽油（`refined_sunflower_safflower_oil`）

定量参考为由前景炼油厂放行的合格散装精制油净质量。

- 选定流：Sunflower-seed and safflower-seed oil, refined `1b88e515-861e-4552-b494-67bb3d645aa7`
- 流属性/单位：Mass / kg
- 数量规则：固定定量参考 1 kg 精制油净质量
- 数值来源模式：固定值（`fixed_value`）
- 适用范围：不适用（`not_applicable`）
- 归一化基准：1 kg 参考产品
- 基准类型：参考流（`reference_flow`）
- 证据类型：身份引用（`identity_reference`）

###### 可销售皂脚、酸化油或回收油（`refining_coproducts`）

当输出具有已记录去向和经济价值时分别记录；否则将其归类为废物并记录处理交接。

- 选定流：Route-specific saleable refining co-product
- 流属性/单位：Mass / kg
- 数量规则：按共产品类型记录实测发运质量或罐存核对量
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每 1 kg 精制油净输出
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_outputs_and_wastes`
- 数量范围：暂定共产品筛查范围
  - 范围角色：QA 校验（`qa_guardrail`）
  - 下限：0
  - 上限：0.15
  - 单位：kg/kg 精制油
  - 基准：每 1 kg 精制油净输出；由路线特定证据或前景记录替换
  - 基准类型：参考流（`reference_flow`）
  - 证据类型：推理估算（`reasoned_estimate`）

##### 废物流

###### 废脱色土和过滤残渣（`spent_bleaching_residue`）

记录发运湿质量、实测时的残油量、废物分类及处理去向。

- 选定流：Spent bleaching earth and filter residue
- 流属性/单位：Mass / kg
- 数量规则：实测发运质量，并披露水分与残油基准
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每 1 kg 精制油净输出
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_outputs_and_wastes`
- 来源：`nucci-et-al-2014-sunflower-oil-lca`
- 数量范围：暂定废残渣筛查范围
  - 范围角色：QA 校验（`qa_guardrail`）
  - 下限：0
  - 上限：0.1
  - 单位：kg/kg 精制油
  - 基准：每 1 kg 精制油净输出；由路线特定证据或前景记录替换
  - 基准类型：参考流（`reference_flow`）
  - 证据类型：推理估算（`reasoned_estimate`）

###### 炼油废水（`refinery_wastewater`）

记录精炼操作产生、在现场或场外处理前离开过程的废水；回用水和非接触冷却水须可区分。

- 选定流：Refinery wastewater
- 流属性/单位：Mass / kg
- 数量规则：处理交接前的实测排放量或有记录的水平衡
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每 1 kg 精制油净输出
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_outputs_and_wastes`
- 来源：`nucci-et-al-2014-sunflower-oil-lca`
- 数量范围：暂定废水筛查范围
  - 范围角色：QA 校验（`qa_guardrail`）
  - 下限：0
  - 上限：1.0
  - 单位：kg/kg 精制油
  - 基准：每 1 kg 精制油净输出；由路线特定证据或前景记录替换
  - 基准类型：参考流（`reference_flow`）
  - 证据类型：推理估算（`reasoned_estimate`）

##### 基本流

跨越场址边界的直接空气、水体和土壤排放须作为单独基本流报告，不得以通用聚合排放行代替实测污染物。

## 7. 分配与共产品处理

| rule_id | 适用对象 | 规则 | source_ids |
| --- | --- | --- | --- |
| `allocation_avoid` | 共用炼油操作与公用工程 | 可通过单独计量或其他方式分离操作时，应通过细分避免分配。不得将上游粗油生产分配至前景炼油过程。 | `ghg-protocol-product-standard-2011` |
| `allocation_physical_first` | 不可分离的多输出精炼操作 | 无法实际细分时，采用能够反映投入、能源使用、残渣和排放因果关系的有记录物理关系。质量分配不能在其不反映物理关系时自动采用。 | `ghg-protocol-product-standard-2011` |
| `allocation_economic_fallback` | 缺乏可辩护物理关系的可销售共产品 | 只有在记录为何细分、系统扩展和物理分配均不可行后，才可采用经济分配；采用同期工厂大门价值，并披露价格期和敏感性。 | `ghg-protocol-product-standard-2011` |
| `allocation_waste_status` | 皂脚、酸化油、废脱色土、过滤残渣和废水 | 根据已记录去向和经济状态将输出分类为产品或废物。没有经核实的回收功能和接收数据集时，不得向废物输出分配共产品收益。 | `ghg-protocol-product-standard-2011` |

## 8. 前景数据采集、计算与质量规则

### 数据采集协议

| protocol_id | process_id | flow_role | record_type | raw_fields | collection_method | unit | frequency | temporal_coverage | site_scope | aggregation_rule | quality_evidence |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| `cp_mass_inputs` | `oil_refining` | 粗油、工艺用水、脱色助剂和精炼化学品 | 地磅单、罐计量或校准仪表、库存台账、采购记录、实验室浓度记录 | 日期；批次；材料身份；植物来源；毛重和皮重或仪表读数；水分或活性浓度；退料；仪表 id | 将批次记录与库存变动及生产输出核对 | kg；适用时浓度按质量分数 | 每次交付或每批，按月汇总 | 具有代表性的连续 12 个月或已声明完整生产周期 | 供给所报告输出的全部精炼线和储存设施 | 按材料汇总净投入并除以合格精制油净输出；避免重复计算内部转移 | 校准记录；库存核对；供应商规范；实验室结果；异常日志 |
| `cp_energy_inputs` | `oil_refining` | 电力、蒸汽和燃料 | 公用工程仪表、发票、锅炉日志、蒸汽流量与状态记录 | 时间戳；仪表 id；起止读数；燃料数量；适用时蒸汽压力和温度；分配驱动量；停机时间 | 优先直接分表计量；否则核对完整设施平衡并记录分配方法 | kWh；MJ；kg steam；燃料特定单位 | 连续或每班，按月汇总 | 与生产输出相同的期间 | 服务于所报告精炼路线的全部公用工程 | 扣除经核实的非生产用途，使用有记录因子换算，并按精制油净输出归一化 | 仪表校准；发票核对；换算因子来源；分配工作表 |
| `cp_outputs_and_wastes` | `oil_refining` | 精制油、共产品、废残渣和废水 | 经认证生产质量、发运单、罐存核对、废物联单、废水仪表和检测 | 日期；批次；输出身份；净质量；水分；残油；去向；经济状态；废水体积或质量；处理路线 | 核对合格输出、罐存变化、发运和废物记录 | 只有在记录密度与换算时才可使用 kg；m3 | 每批或每次发运，按月汇总 | 与投入相同的期间 | 全部所报告精炼线、储存及废物交接 | 汇总各不同输出；只有实测或合理密度时才换算体积；按参考输出归一化 | 产品放行证书；地磅记录；废物联单；处理接收单；仪表校准；质量平衡审查 |

### 计算规则

| rule_id | Applies to | Formula or rule | Inputs | Output | source_ids |
| --- | --- | --- | --- | --- | --- |
| `calc_normalise_reference` | 每项清单数量 | 归一化数量 = 同期数量 / 同期合格精制油净输出。随后将参考产品设为恰好 1 kg。 | 经核对的期间数量；合格精制油净输出 | 每 kg 精制油数量 |  |
| `calc_active_chemical` | 以溶液或商业产品报告的化学品 | 活性物质数量 = 商业产品质量 × 实测活性质量分数。同时保留商业产品和活性物质数值。 | 产品质量；证书或检测浓度 | 每 kg 精制油的 kg 活性物质和 kg 商业产品 |  |
| `calc_volume_to_mass` | 以体积记录的油、水、蒸汽冷凝液和废水 | 质量 = 实测体积 × 已声明温度下的密度。采用假定密度时，结果须标记为模型值并披露假设。 | 体积；密度；温度 | 每 kg 精制油的 kg 数量 | `codex-cxs-210-1999` |
| `calc_mass_balance` | 炼油过程中的含质量投入与输出 | 质量平衡残差 = 总质量投入 − 产品、共产品、废物、废水和直接质量输出实测总量。须调查并披露残差，不得强制调零。 | 采用一致湿基/干基的所有含质量清单行 | 每 kg 精制油的残差 kg 与残差份额 |  |

### 数据质量要求

| requirement_id | Applies to | Requirement | Evidence |
| --- | --- | --- | --- |
| `dq_identity` | 粗油和精制油 | 保留植物来源、混合份额、精炼路线、声称时的油酸等级、产品规范、批次或生产周期以及选定 Tiangong 流身份。 | 供应商规范；批次记录；产品放行证书；flow UUID 核验 |
| `dq_measurement` | 所有前景数量 | 使用校准仪表、秤、罐存核对、发票或实验室检测；披露换算、分配驱动量、缺失记录和估算。 | 校准证书；仪表和发票核对；计算工作表；异常日志 |
| `dq_temporal` | 前景数据集 | 覆盖具有代表性的连续 12 个月或完整的已声明生产周期，并披露停机、异常批次和季节性。 | 生产日历；维护与停机日志；月度完整性表 |
| `dq_completeness` | 过程清单 | 核算参考输出、粗油原料、主要助剂、水、能源、共产品、废物、废水和直接排放；记录各被排除流并证明其对预定用途不重要。 | 质量和能量平衡；流清单；省略日志；处理接收单 |
| `dq_representativeness` | 前景和链接的上游数据 | 报告技术、地域和时间代表性，并披露所有代理数据集及不匹配。 | 数据集元数据；供应商和设施记录；代理与局限性说明；`ilcd-data-network-compliance-2010` |

## 9. 校验规则

| rule_id | 适用对象 | 规则 | source_ids |
| --- | --- | --- | --- |
| `validate_reference_identity` | 参考流 | 核验准确 flow UUID、Mass property UUID、Units of mass UUID、kg 单位、植物来源限定信息、精炼路线和散装工厂大门状态。 | `codex-cxs-210-1999` |
| `validate_reference_amount` | 定量参考 | 要求恰好 1 kg 精制油净质量，并排除包装或容器质量。 |  |
| `validate_route_coverage` | 过程边界 | 确认所有实际运行的精炼步骤、现场公用工程、材料助剂、残渣、废水交接和直接排放均已纳入，或明确说明排除理由。 | `ec-jrc-fdm-bref-2019`; `nucci-et-al-2014-sunflower-oil-lca` |
| `validate_mass_balance` | 含质量清单 | 按一致湿基/干基和浓度基准重算期间质量平衡；任何无法解释的残差或强制闭合均为需披露并纠正的问题。 |  |
| `validate_no_double_counting` | 公用工程和上游链接 | 拒绝同时计算外购蒸汽与其上游蒸汽数据集所用燃料，或在同一前景过程中同时计算外购粗油和重复的上游提取。 | `ghg-protocol-product-standard-2011` |
| `validate_allocation` | 共产品和废物 | 确认分配层级、输出经济状态、因子期间及敏感性披露；拒绝无记录的质量或经济分配。 | `ghg-protocol-product-standard-2011` |
| `validate_quality_state` | 放行参考产品 | 确认产品已精炼并符合已声明的适用食品级身份与质量规范；拒绝将粗油、初榨、冷榨、不合格或已包装输出作为参考产品。 | `codex-cxs-210-1999` |
| `validate_provisional_ranges` | 推理估算范围 | 每个 `reasoned_estimate` 范围仅用作不符合筛查；不得替代前景数据，并须在出版关键用途前标记为待替换。 |  |

## 10. 发布数据集画像

| 字段 | 值 |
| --- | --- |
| dataset_role | 散装精制葵花籽油和/或红花籽油的前景门到门炼油数据集 |
| downstream_use | 完成方法学与翻译审查并具有完整代表性披露后可用作 `secondary_dataset`；`background_dataset` |
| allowed_use | 需要工厂大门散装精制葵花籽油/红花籽油的归因型产品系统；地域、路线、期间、混合份额和上游链接匹配时的供应商或区域建模 |
| excluded_use | 农业种子生产；粗油提取；初榨或冷榨油；零售包装油；未指定的通用植物油；没有单独方法的后果型替代；食品安全认证 |
| required_metadata | 设施地域；生产期；植物来源及混合份额；精炼路线；声称时的油酸等级；产品规范；工厂大门散装状态；技术；分配方法；上游数据集引用；包装排除 |
| required_quality_disclosure | 仪表和秤覆盖率；时间完整性；质量平衡残差；能源核算方法；废水和直接排放覆盖；共产品/废物分类；代理；排除项；临时推理估算；技术、地域和时间代表性 |
| update_trigger | 植物来源混合比例、精炼路线、油酸等级、规范、设施或公用工程系统、分配基准、废水处理、上游粗油来源、生产期发生变化，或已有足够证据替换临时范围 |

## 11. 数据源

| Source id | Type | Reference | Used for |
| --- | --- | --- | --- |
| `codex-cxs-210-1999` | `standard` | FAO/WHO Codex Alimentarius，*Standard for Named Vegetable Oils*，CXS 210-1999，2024 年修订并于 2026 年勘误后重新发布，https://www.fao.org/fao-who-codexalimentarius/sh-proxy/tr/?lnk=1&url=https%3A%2F%2Fworkspace.fao.org%2Fsites%2Fcodex%2FStandards%2FCXS+210-1999%2FCXS_210e.pdf（检索于 2026-08-10） | 葵花籽油和红花籽油身份；食用状态；精制油质量与计量语境 |
| `ec-jrc-fdm-bref-2019` | `official_guidance` | European Commission Joint Research Centre，*Best Available Techniques Reference Document in the Food, Drink and Milk Industries*，2019 年 12 月采纳，https://bureau-industrial-transformation.jrc.ec.europa.eu/reference/food-drink-and-milk-industries（检索于 2026-08-10） | 植物原料工业食品加工及设施活动范围的官方边界语境 |
| `nucci-et-al-2014-sunflower-oil-lca` | `literature` | Nucci, B.; Puccini, M.; Pelagagge, L.; Vitolo, S.; Nicolella, C.（2014），*Improving the environmental performance of vegetable oil processing through LCA*，Journal of Cleaner Production 64，310–322，https://doi.org/10.1016/j.jclepro.2013.07.049；机构库记录 https://hdl.handle.net/11568/236328（检索于 2026-08-10） | 葵花籽油加工与包装范围；脱色、蒸汽生产、废水处理、水、能源和脱色土热点覆盖 |
| `ghg-protocol-product-standard-2011` | `standard` | WRI/WBCSD，*Product Life Cycle Accounting and Reporting Standard*，2011，https://ghgprotocol.org/sites/default/files/ghgp/standards/Product-Life-Cycle-Accounting-Reporting-Standard-EReader_041613_0.pdf（检索于 2026-08-10） | 边界完整性；避免分配、物理分配与经济分配后备层级 |
| `ilcd-data-network-compliance-2010` | `official_guidance` | European Commission Joint Research Centre，*ILCD Data Network: Compliance rules and entry-level requirements*，Version 1，2010，https://publications.jrc.ec.europa.eu/repository/bitstream/JRC58193/ilcd-data-network_compliance-entry-level_version1_march2010_f_isbn_fin.pdf（检索于 2026-08-10） | 技术、地域和时间代表性；建模与分配披露 |
