---
pcr_id: pcr.food-products-beverages-and-tobacco-textiles-apparel-and-leather-products.dairy-products-and-egg-products.cream-fresh
language: zh-CN
status: candidate
sync_with: pcr.en-US.md
---

# 新鲜奶油

## 1. 范围与适用性

本 PCR 适用于由乳经物理分离获得的液态新鲜奶油，后续可按需要进行脂肪标准化、巴氏杀菌或经验证的等效热处理、可选均质、冷却和灌装。它用于编制在已声明冷藏条件下离开乳品加工设施的散装或包装新鲜奶油前景数据包。

所覆盖产品为可倾倒的脂肪-脱脂乳乳状液，并声明乳种、乳脂含量、热处理和包装状态。不包括未经分离而销售的高脂生乳；发酵、培养、酸化、加糖、调味、打发、冷冻、浓缩、干燥、灭菌或 UHT 奶油；奶油奶酪；黄油和无水乳脂；以及复原或重组奶油。这些产品需要单独的产品边界或经说明的更广研究范围。

本 PCR 规定乳品加工前景边界。奶牛养殖和生乳生产、场外能源和材料生产、包装制造、设施大门之后的配送、零售、使用和生命末期，在研究纳入时由相连的上游或下游数据集表示，不在以下前景过程中重复建模。

## 2. 产品类别识别

| 字段 | 值 |
| --- | --- |
| canonical_pcr_id | pcr.food-products-beverages-and-tobacco-textiles-apparel-and-leather-products.dairy-products-and-egg-products.cream-fresh |
| classification_refs | CPC 3.0: 22120, Cream, fresh |
| covered_products | 从乳中物理分离、经巴氏杀菌或等效热处理、可进行脂肪标准化和均质、在乳品设施大门处为包装或散装状态的可倾倒新鲜奶油 |
| excluded_products | 高脂生乳；发酵、培养、酸化、加糖、调味、打发、冷冻、浓缩、干燥、灭菌或 UHT 奶油；奶油奶酪；黄油；无水乳脂；复原或重组奶油 |
| representative_product | 从乳中物理分离、在乳品厂灌装的冷藏巴氏杀菌新鲜奶油 |
| production_route | 冷藏生乳接收；离心分离和脂肪标准化；奶油巴氏杀菌；可选均质；冷却；灌装；冷藏；就地清洗和废水外送 |
| market_state | 在已声明冷藏条件下、乳品加工设施大门处的散装或包装液态成品 |

## 3. 参考流

| 字段 | 值 |
| --- | --- |
| What | 通过乳的物理分离获得、供直接食用或进一步食品加工的新鲜液态奶油 |
| How much | 1 kg 净重新鲜奶油 |
| How well | 符合已声明的乳种、乳脂含量、物理分离路线、热处理验证、包装状态和适用食品安全规格 |
| How long or cycle | 在乳品设施大门处表示的一个生产批次；已声明的保质期和冷链条件属于元数据，不构成额外产品数量 |
| reference_flow_link | `fresh_cream_at_plant` |

| 字段 | 值 |
| --- | --- |
| 参考数量 | 1 kg |
| 参考产品流 | Cream, fresh `e58b11a6-5d86-40a3-bed6-e365a95d0981` |
| 参考流属性 | Mass `93a60a56-a3c8-11da-a746-0800200b9a66` |
| 参考单位组 | Units of mass `93a60a57-a4c8-11da-a746-0800200c9a66` |
| 参考单位 | kg |
| 必需限定信息 | 乳种；以质量百分数表示的乳脂含量；物理分离路线；热处理类型和经验证的时间-温度条件；均质状态；散装或包装形式；产品净质量；设施位置；生产时期；产品出厂温度或冷藏条件 |

构建前景数据包时，`必需限定信息` 中列出的信息必须在数据集元数据、过程说明、参考流备注、产品说明或等效数据包字段中声明。缺失必需限定信息的数据包视为参考流定义不完整。

## 4. 计量与单位规则

| rule_id | 适用对象 | 必需流属性 | 必需单位 | 规则 |
| --- | --- | --- | --- | --- |
| `reference_mass` | 参考新鲜奶油 | Mass `93a60a56-a3c8-11da-a746-0800200b9a66` | kg | 报告产品净质量。仅可使用批次或产品特定的实测密度将体积记录换算为质量，并保留密度、温度、取样方法和换算记录。 |
| `milkfat_mass_fraction` | 生乳、分离奶油、脱脂乳共产品和参考奶油 | 乳脂质量分数 | 质量 % | 对每个代表批次或汇总期进行测量或从经核验的成分记录获取；不得用标签类别代替数值质量分数。 |
| `dry_matter_mass_fraction` | 参考奶油及用于分配的每种乳品共产品 | 干物质质量分数 | 质量 % | 干物质分配应使用产品特定的实测或经核验配方数据。默认值仅可在例外且已披露的回退情形使用，并且不得据此声称符合现行 PEF。 |
| `energy_preservation` | 电力和热能 | 能量 | kWh 和 MJ | 分别保留电力和热能。在单位换算时明确换算系数，在连接相应背景能源数据集之前不得合并热和电。 |
| `water_volume` | 工艺和清洗用水；废水 | 体积 | m3 或 L | 按来源和排放路线保留实测用水和废水体积。采用 1 m3 = 1,000 L；没有实测或书面水平衡时，不得由产品质量推断废水质量。 |

## 5. 系统边界

### 边界概化

| 字段 | 值 |
| --- | --- |
| declared_starting_condition | 在乳品加工设施大门处验收的冷藏生乳，已记录质量、乳种、乳脂和干物质或总固形物信息、接收时间、温度以及供应商或上游数据集身份 |
| starting_condition_role | 前景初始产品投入；上游乳品养殖和生乳生产位于前景边界之外 |
| product_classification_scope | 从乳中物理分离并作为冷藏液态产品交付的新鲜奶油；不包括第 1 节列出的产品形式 |
| recursive_input_rule | 如果同类别新鲜奶油作为返工料或转移中间体进入，应将其作为独立产品投入，记录数量、成分、来源和上游数据集；不得在本 PCR 边界内递归重建其既往生产 |
| upstream_dataset_requirement | 当研究范围纳入相关活动时，为生乳、转移乳品中间体、电力、热能载体、供水、清洗剂、制冷剂、包装材料、运输和场外处理连接具有地域和时间代表性的上游数据集 |
| disclosure | 声明设施位置、生产时期、乳种、产品乳脂和干物质、热处理和均质状态、包装状态、冷链出厂条件、纳入的过程模块、分配方法和因子、排除项、数据缺口以及每一处暂定估算的使用 |

| rule_id | 适用对象 | 规则 | source_ids |
| --- | --- | --- | --- |
| `boundary_required_operations` | 乳品加工前景 | 纳入生乳接收和分离、奶油标准化、热处理、冷却、灌装、场内冷藏、清洗、产品损失、废水外送和适用的直接制冷剂排放。仅在有设施证据证明未发生时，某项操作才可报告为零。 | `dairy-pefcr-2025`; `epa-dairy-effluent-guidelines` |
| `boundary_upstream_separation` | 生乳和其他进厂产品 | 在已声明的设施大门投入处停止前景递归并要求连接上游数据集；摇篮到大门或更广研究不得遗漏其上游负荷。 | `dairy-pefcr-2025` |
| `boundary_heat_treatment` | 新鲜奶油热处理 | 纳入实际且经验证的时间-温度处理及相关加热和冷却。奶油巴氏杀菌采用至少 75 摄氏度、15 秒，或与产品组成和适用法律相适应的经验证等效条件；保留验证记录。 | `codex-cxc-57-2004`; `eu-reg-853-2004` |
| `boundary_cold_chain` | 中间奶油和成品奶油 | 纳入场内制冷直至已声明的设施大门出厂，并记录产品温度或等效冷藏条件。下游冷藏配送位于本前景边界之外，除非明确加入。 | `codex-cxc-57-2004` |
| `boundary_no_silent_cutoff` | 前景活动数据 | 采集强制要求的材料、能源、水、化学品、制冷剂、共产品、废水和直接排放字段。任何遗漏项必须证明不重要并予以披露；数据缺口不等于零流。 | `dairy-pefcr-2025` |

## 6. 过程清单结构

### 过程图

| process_id | 过程名称 | 纳入状态 | 纳入条件 | 建模角色 | 定量参考 |
| --- | --- | --- | --- | --- | --- |
| `milk_receiving_and_separation` | 生乳接收、分离和脂肪标准化 | required | 始终 | 生产奶油和脱脂乳共产品的前景分离过程 | 每 kg 转入热处理的实测分离奶油 |
| `pasteurization_and_cooling` | 奶油巴氏杀菌、可选均质和冷却 | required | 始终；仅在实际执行时纳入均质 | 前景微生物杀灭处理和冷藏产品制备 | 每 kg 转入灌装的实测巴氏杀菌奶油 |
| `filling_and_cold_storage` | 灌装、包装和场内冷藏 | required | 始终；只有在有记录的散装发运时包装投入才为零 | 前景成品制备 | 每 1 kg 设施大门处新鲜奶油净重 |
| `cleaning_and_wastewater` | 就地清洗、卫生处理和废水外送 | required | 始终 | 分配给所表示奶油生产线的共享前景支持过程 | 分配后每 1 kg 设施大门处新鲜奶油净重 |

### 过程：生乳接收、分离和脂肪标准化（`milk_receiving_and_separation`）

#### 输入

##### 产品流

###### 验收生乳（`raw_milk_input`）

生乳跨越设施大门，为分离到奶油和共产品中的乳脂及非脂乳固体提供来源。

- 选定流：Raw milk
- 流属性/单位：Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / Units of mass `93a60a57-a4c8-11da-a746-0800200c9a66` / kg
- 数量规则：归属于所表示生产时期的实测验收生乳质量
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每 1 kg 设施大门处新鲜奶油净重
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_milk_and_composition`
- 来源：`dairy-pefcr-2025`
- 数量范围：暂定生乳投入筛选范围
  - 范围角色：QA 校验（`qa_guardrail`）
  - 下限：1
  - 上限：20
  - 单位：kg 生乳
  - 基准：每 1 kg 设施大门处新鲜奶油净重；待经评审工厂证据替换的宽泛编制筛选值
  - 基准类型：参考流（`reference_flow`）
  - 证据类型：推理估算（`reasoned_estimate`）

###### 分离机和输送电力（`separation_electricity`）

接收泵、储罐搅拌、分离、标准化和输送所用电力与热能分开记录。

- 选定流：Electricity, supplied to dairy processing
- 流属性/单位：Energy / kWh
- 数量规则：实测电力，或由设备功率和运行时间计算的份额
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每 kg 转入热处理的实测分离奶油
- 基准类型：过程输出（`process_output`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_energy_records`
- 来源：`dairy-pefcr-2025`
- 数量范围：暂定分离用电筛选范围
  - 范围角色：QA 校验（`qa_guardrail`）
  - 下限：0.001
  - 上限：1
  - 单位：kWh
  - 基准：每 kg 分离奶油；待经评审计量数据替换的宽泛编制筛选值
  - 基准类型：过程输出（`process_output`）
  - 证据类型：推理估算（`reasoned_estimate`）

##### 废物流

##### 基本流

#### 输出

##### 产品流

###### 转入热处理的分离奶油（`separated_cream_intermediate`）

中间奶油输出在热处理前由校准的储罐和成分记录测量或计算。

- 选定流：Cream, separated intermediate
- 流属性/单位：Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- 数量规则：实测转移质量，并与乳脂和总质量平衡核对
- 数值来源模式：计算值（`calculated_value`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每 1 kg 设施大门处新鲜奶油净重
- 基准类型：参考流（`reference_flow`）
- 证据类型：由采集计算（`calculated_from_collection`）
- 采集协议：`cp_product_coproduct_and_loss`
- 来源：`mass-balance-identity`
- 数量范围：暂定中间体到成品质量筛选范围
  - 范围角色：QA 校验（`qa_guardrail`）
  - 下限：1
  - 上限：1.2
  - 单位：kg 分离奶油
  - 基准：每 1 kg 设施大门处新鲜奶油净重；包括下游产品损失
  - 基准类型：参考流（`reference_flow`）
  - 证据类型：推理估算（`reasoned_estimate`）

###### 脱脂乳共产品（`skimmed_milk_coproduct`）

离开分离过程的脱脂乳是共产品，不应作为负的生乳投入或未报告的替代产品。

- 选定流：Skimmed milk, at separator
- 流属性/单位：Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- 数量规则：实测共产品质量及实测干物质或总固形物
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每 1 kg 设施大门处新鲜奶油净重
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_product_coproduct_and_loss`
- 来源：`dairy-pefcr-2025`
- 数量范围：暂定共产品质量筛选范围
  - 范围角色：QA 校验（`qa_guardrail`）
  - 下限：0
  - 上限：20
  - 单位：kg 脱脂乳
  - 基准：每 1 kg 设施大门处新鲜奶油净重；待产品特定乳脂平衡替换的宽泛编制筛选值
  - 基准类型：参考流（`reference_flow`）
  - 证据类型：推理估算（`reasoned_estimate`）

##### 废物流

###### 分离残渣和乳品损失（`separation_product_loss`）

按去向记录分离机污泥、不合格乳品、溢漏以及未回收的启动或换产产品。

- 选定流：Dairy processing residue or product loss
- 流属性/单位：Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- 数量规则：送往回收、饲料、废水处理或处置的实测或质量平衡计算损失
- 数值来源模式：计算值（`calculated_value`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每 kg 实测分离奶油
- 基准类型：过程输出（`process_output`）
- 证据类型：由采集计算（`calculated_from_collection`）
- 采集协议：`cp_product_coproduct_and_loss`
- 来源：`epa-dairy-effluent-guidelines`; `mass-balance-identity`
- 数量范围：暂定分离损失筛选范围
  - 范围角色：QA 校验（`qa_guardrail`）
  - 下限：0
  - 上限：0.1
  - 单位：kg 乳品物料
  - 基准：每 kg 分离奶油；待经评审工厂平衡替换的宽泛编制筛选值
  - 基准类型：过程输出（`process_output`）
  - 证据类型：推理估算（`reasoned_estimate`）

##### 基本流

### 过程：奶油巴氏杀菌、可选均质和冷却（`pasteurization_and_cooling`）

#### 输入

##### 产品流

###### 分离奶油投入（`cream_to_pasteurizer`）

从上一前景过程转入的分离奶油按批次或生产时期核对。

- 选定流：Cream, separated intermediate
- 流属性/单位：Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- 数量规则：来自 `separated_cream_intermediate` 的转移质量
- 数值来源模式：计算值（`calculated_value`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每 kg 实测巴氏杀菌奶油输出
- 基准类型：过程输出（`process_output`）
- 证据类型：由采集计算（`calculated_from_collection`）
- 采集协议：`cp_product_coproduct_and_loss`
- 来源：`mass-balance-identity`
- 数量范围：暂定巴氏杀菌机投入筛选范围
  - 范围角色：QA 校验（`qa_guardrail`）
  - 下限：1
  - 上限：1.1
  - 单位：kg 分离奶油
  - 基准：每 kg 巴氏杀菌奶油输出
  - 基准类型：过程输出（`process_output`）
  - 证据类型：推理估算（`reasoned_estimate`）

###### 巴氏杀菌和热水服务用热能（`pasteurization_heat`）

在换算为 MJ 前，按能源载体记录用于奶油热处理和可归属热水服务的燃料或购入热力。

- 选定流：Thermal energy, supplied to dairy processing
- 流属性/单位：Energy / MJ
- 数量规则：实测燃料或热量乘以有记录的低位热值，并归属到所表示过程
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每 kg 实测巴氏杀菌奶油输出
- 基准类型：过程输出（`process_output`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_energy_records`
- 来源：`dairy-pefcr-2025`; `codex-cxc-57-2004`
- 数量范围：暂定巴氏杀菌热耗筛选范围
  - 范围角色：QA 校验（`qa_guardrail`）
  - 下限：0.01
  - 上限：5
  - 单位：MJ
  - 基准：每 kg 巴氏杀菌奶油输出；待经评审热量计量替换的宽泛编制筛选值
  - 基准类型：过程输出（`process_output`）
  - 证据类型：推理估算（`reasoned_estimate`）

###### 巴氏杀菌机、均质机和冷却用电（`thermal_process_electricity`）

热交换泵送、可选均质、制冷和输送用电按设备或分配期记录。

- 选定流：Electricity, supplied to dairy processing
- 流属性/单位：Energy / kWh
- 数量规则：实测电力，或由设备功率乘运行时间计算的用电
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每 kg 实测巴氏杀菌奶油输出
- 基准类型：过程输出（`process_output`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_energy_records`
- 来源：`dairy-pefcr-2025`
- 数量范围：暂定热处理过程用电筛选范围
  - 范围角色：QA 校验（`qa_guardrail`）
  - 下限：0.001
  - 上限：1
  - 单位：kWh
  - 基准：每 kg 巴氏杀菌奶油输出；待经评审计量替换的宽泛编制筛选值
  - 基准类型：过程输出（`process_output`）
  - 证据类型：推理估算（`reasoned_estimate`）

##### 废物流

##### 基本流

#### 输出

##### 产品流

###### 巴氏杀菌并冷却的奶油（`pasteurized_cream_output`）

仅当批次热处理记录和产品规格满足已声明控制标准时，奶油输出才被接收。

- 选定流：Cream, pasteurized and cooled
- 流属性/单位：Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- 数量规则：转入灌装的实测合格质量
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每 kg 实测巴氏杀菌奶油输出
- 基准类型：过程输出（`process_output`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_heat_treatment_and_product_release`
- 来源：`codex-cxc-57-2004`; `eu-reg-853-2004`
- 数量范围：巴氏杀菌机输出参考检查
  - 范围角色：QA 校验（`qa_guardrail`）
  - 下限：1
  - 上限：1
  - 单位：kg 巴氏杀菌奶油
  - 基准：每 kg 实测巴氏杀菌奶油输出
  - 基准类型：过程输出（`process_output`）
  - 证据类型：方法公式（`method_formula`）
  - 来源：`mass-balance-identity`

##### 废物流

###### 巴氏杀菌启动、停机和不合格损失（`pasteurization_product_loss`）

按去向记录热处理启动、停机、换产或放行失败产生的拒收或未回收奶油。

- 选定流：Dairy processing residue or product loss
- 流属性/单位：Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- 数量规则：实测拒收质量或经核对奶油平衡的差值
- 数值来源模式：计算值（`calculated_value`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每 kg 实测巴氏杀菌奶油输出
- 基准类型：过程输出（`process_output`）
- 证据类型：由采集计算（`calculated_from_collection`）
- 采集协议：`cp_product_coproduct_and_loss`
- 来源：`epa-dairy-effluent-guidelines`; `mass-balance-identity`
- 数量范围：暂定巴氏杀菌损失筛选范围
  - 范围角色：QA 校验（`qa_guardrail`）
  - 下限：0
  - 上限：0.1
  - 单位：kg 乳品物料
  - 基准：每 kg 巴氏杀菌奶油输出；待经评审工厂平衡替换的宽泛编制筛选值
  - 基准类型：过程输出（`process_output`）
  - 证据类型：推理估算（`reasoned_estimate`）

##### 基本流

###### 可归属冷却设备释放的制冷剂（`cooling_refrigerant_emission`）

根据服务于所表示生产线或储存区域设备的盘存核对，记录实际制冷剂类型和计算泄漏量。

- 选定流：Refrigerant, emitted to air
- 流属性/单位：Mass / kg
- 数量规则：期初盘存加补充量减期末盘存和有记录的回收量，并分配给所表示奶油生产线
- 数值来源模式：计算值（`calculated_value`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每 kg 实测巴氏杀菌奶油输出
- 基准类型：过程输出（`process_output`）
- 证据类型：由采集计算（`calculated_from_collection`）
- 采集协议：`cp_refrigerant_inventory`
- 来源：`dairy-pefcr-2025`
- 数量范围：暂定制冷剂泄漏筛选范围
  - 范围角色：QA 校验（`qa_guardrail`）
  - 下限：0
  - 上限：0.02
  - 单位：kg 制冷剂
  - 基准：每 kg 巴氏杀菌奶油输出；待设备特定盘存替换的刻意宽泛编制筛选值
  - 基准类型：过程输出（`process_output`）
  - 证据类型：推理估算（`reasoned_estimate`）

### 过程：灌装、包装和场内冷藏（`filling_and_cold_storage`）

#### 输入

##### 产品流

###### 转入灌装的巴氏杀菌奶油（`cream_to_filling`）

合格巴氏杀菌奶油进入灌装系统，并与灌装产品净量和灌装损失核对。

- 选定流：Cream, pasteurized and cooled
- 流属性/单位：Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- 数量规则：来自 `pasteurized_cream_output` 的实测转移质量
- 数值来源模式：计算值（`calculated_value`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每 1 kg 设施大门处新鲜奶油净重
- 基准类型：参考流（`reference_flow`）
- 证据类型：由采集计算（`calculated_from_collection`）
- 采集协议：`cp_product_coproduct_and_loss`
- 来源：`mass-balance-identity`
- 数量范围：暂定灌装投入筛选范围
  - 范围角色：QA 校验（`qa_guardrail`）
  - 下限：1
  - 上限：1.1
  - 单位：kg 巴氏杀菌奶油
  - 基准：每 1 kg 设施大门处新鲜奶油净重
  - 基准类型：参考流（`reference_flow`）
  - 证据类型：推理估算（`reasoned_estimate`）

###### 一级、二级和三级包装（`packaging_materials`）

按材料、部件、已知再生含量和净质量记录包装。散装发运的一级包装记录为零，同时披露散装容器安排。

- 选定流：Packaging materials, by material
- 流属性/单位：Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- 数量规则：归属于合格灌装产品的物料清单质量
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：产品特定（`product_specific`）
- 归一化基准：每 1 kg 设施大门处新鲜奶油净重
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_packaging_and_finished_product`
- 来源：`dairy-pefcr-2025`
- 数量范围：暂定包装质量筛选范围
  - 范围角色：QA 校验（`qa_guardrail`）
  - 下限：0
  - 上限：0.3
  - 单位：kg 包装
  - 基准：每 1 kg 设施大门处新鲜奶油净重；仅有记录的散装发运允许为零
  - 基准类型：参考流（`reference_flow`）
  - 证据类型：推理估算（`reasoned_estimate`）

###### 灌装和冷藏用电（`filling_storage_electricity`）

记录从灌装、包装、冷库运行和本地仓储直至设施大门出厂的电力。

- 选定流：Electricity, supplied to dairy processing
- 流属性/单位：Energy / kWh
- 数量规则：实测用电，或有记录的生产线和冷库电力分配
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每 1 kg 设施大门处新鲜奶油净重
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_energy_records`
- 来源：`dairy-pefcr-2025`; `codex-cxc-57-2004`
- 数量范围：暂定灌装和储存用电筛选范围
  - 范围角色：QA 校验（`qa_guardrail`）
  - 下限：0.001
  - 上限：1
  - 单位：kWh
  - 基准：每 1 kg 设施大门处新鲜奶油净重；待经评审计量和储存时长替换的宽泛编制筛选值
  - 基准类型：参考流（`reference_flow`）
  - 证据类型：推理估算（`reasoned_estimate`）

##### 废物流

##### 基本流

#### 输出

##### 产品流

###### 乳品设施大门处新鲜奶油（`fresh_cream_at_plant`）

这是在净质量、成分、热处理、包装状态和冷藏出厂条件验收后的参考产品。

- 选定流：Cream, fresh `e58b11a6-5d86-40a3-bed6-e365a95d0981`
- 流属性/单位：Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / Units of mass `93a60a57-a4c8-11da-a746-0800200c9a66` / kg
- 数量规则：固定参考输出 1 kg 新鲜奶油净重
- 数值来源模式：固定值（`fixed_value`）
- 适用范围：产品特定（`product_specific`）
- 归一化基准：参考流
- 基准类型：参考流（`reference_flow`）
- 证据类型：身份引用（`identity_reference`）
- 采集协议：
- 来源：`codex-cxs-288-1976`
- 数量范围：参考流身份检查
  - 范围角色：允许范围（`allowed_range`）
  - 下限：1
  - 上限：1
  - 单位：kg 新鲜奶油净重
  - 基准：每个已声明参考流
  - 基准类型：参考流（`reference_flow`）
  - 证据类型：方法公式（`method_formula`）
  - 来源：`mass-balance-identity`

##### 废物流

###### 灌装损失和拒收包装（`filling_and_packaging_waste`）

将乳品损失和拒收包装作为独立废物材料记录，并保留其回收、处理或处置路线。

- 选定流：Filling and packaging waste, by material
- 流属性/单位：Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- 数量规则：按乳品和包装材料类别实测拒收质量
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每 1 kg 设施大门处新鲜奶油净重
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_packaging_and_finished_product`
- 来源：`epa-dairy-effluent-guidelines`
- 数量范围：暂定灌装和包装废物筛选范围
  - 范围角色：QA 校验（`qa_guardrail`）
  - 下限：0
  - 上限：0.1
  - 单位：kg 废物
  - 基准：每 1 kg 设施大门处新鲜奶油净重；分别报告乳品和包装部分
  - 基准类型：参考流（`reference_flow`）
  - 证据类型：推理估算（`reasoned_estimate`）

##### 基本流

### 过程：就地清洗、卫生处理和废水外送（`cleaning_and_wastewater`）

#### 输入

##### 产品流

###### 工艺和清洗用水（`cleaning_water`）

按来源和预定用途分别记录饮用水、回收水和循环水；回收水需要有记录的危害评估。

- 选定流：Water supplied to dairy processing, by source
- 流属性/单位：Volume / L or m3
- 数量规则：归属于所表示生产线的实测补充水和最终冲洗水
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：分配后每 1 kg 设施大门处新鲜奶油净重
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_cleaning_water_chemicals_and_wastewater`
- 来源：`codex-cxc-57-2004`; `dairy-pefcr-2025`
- 数量范围：暂定清洗用水筛选范围
  - 范围角色：QA 校验（`qa_guardrail`）
  - 下限：0.1
  - 上限：20
  - 单位：L 水
  - 基准：每 1 kg 设施大门处新鲜奶油净重；待场址水平衡替换的宽泛编制筛选值
  - 基准类型：参考流（`reference_flow`）
  - 证据类型：推理估算（`reasoned_estimate`）

###### 清洗和卫生处理剂（`cleaning_agents`）

按化学品身份、浓度、交付质量和所表示生产线分配记录清洗剂。

- 选定流：Cleaning agent, by chemical
- 流属性/单位：Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- 数量规则：按生产时期核对采购、投加或批次记录质量
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：分配后每 1 kg 设施大门处新鲜奶油净重
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_cleaning_water_chemicals_and_wastewater`
- 来源：`codex-cxc-57-2004`; `dairy-pefcr-2025`; `epa-dairy-effluent-guidelines`
- 数量范围：暂定清洗剂筛选范围
  - 范围角色：QA 校验（`qa_guardrail`）
  - 下限：0.0001
  - 上限：0.2
  - 单位：kg 清洗剂
  - 基准：每 1 kg 设施大门处新鲜奶油净重；待投加记录替换的宽泛编制筛选值
  - 基准类型：参考流（`reference_flow`）
  - 证据类型：推理估算（`reasoned_estimate`）

##### 废物流

##### 基本流

#### 输出

##### 产品流

##### 废物流

###### 送往处理的乳品加工废水（`dairy_wastewater`）

废水包括清洗冲洗水和含产品排水；记录体积、实测 COD、排放路线和处理去向，不得用产品损失抵扣用水量。

- 选定流：Wastewater from dairy processing
- 流属性/单位：Volume / L or m3; COD / kg when available
- 数量规则：归属于所表示生产线或已分配工厂剩余量的实测废水体积和 COD 负荷
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：分配后每 1 kg 设施大门处新鲜奶油净重
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_cleaning_water_chemicals_and_wastewater`
- 来源：`dairy-pefcr-2025`; `epa-dairy-effluent-guidelines`
- 数量范围：暂定废水体积筛选范围
  - 范围角色：QA 校验（`qa_guardrail`）
  - 下限：0.05
  - 上限：20
  - 单位：L 废水
  - 基准：每 1 kg 设施大门处新鲜奶油净重；待场址排放记录替换的宽泛编制筛选值
  - 基准类型：参考流（`reference_flow`）
  - 证据类型：推理估算（`reasoned_estimate`）

##### 基本流

## 7. 分配与共产品处理

| rule_id | 适用对象 | 规则 | source_ids |
| --- | --- | --- | --- |
| `allocation_subdivide_first` | 实测过程投入、废物和直接排放 | 在存在生产线或设备特定记录时，尽可能直接分配到特定过程阶段和产品流。不得在共产品之间分配可直接归属于单一产品的包装或配料。 | `dairy-pefcr-2025` |
| `allocation_dry_matter_joint_process` | 奶油和脱脂乳共产品的生乳及不可分联合分离负荷 | 当细分无法解析联合乳品过程时，每种产品的分配因子按“产品质量 × 产品干物质分数 / 所有共产品的产品质量 × 干物质分数之和”计算。使用实测产品特定干物质，并保留质量、干物质、时期和因子计算。 | `dairy-pefcr-2025` |
| `allocation_partial_metering` | 有部分直接分配过程数据的设施总量 | 先分配明细数据，从同一设施时期总量中减去已分配数量，仅将剩余未分配的能源、水、清洗剂、化学品和废水按共产品干物质输出分配。 | `dairy-pefcr-2025` |
| `allocation_no_avoided_product_default` | 脱脂乳和其他乳品共产品 | 将共产品报告为正输出。除非单独声明的研究方法要求并给出完整敏感性结果，否则不得应用替代产品规避法。 | `dairy-pefcr-2025` |
| `allocation_mass_balance_disclosure` | 所有分配结果 | 联合过程分配因子必须在有记录的舍入容差内合计为 1，分配数量必须与未分配总量核对。任何默认干物质值均应作为数据局限披露。 | `dairy-pefcr-2025`; `mass-balance-identity` |

## 8. 前景数据采集、计算与质量规则

### 数据采集协议

| protocol_id | process_id | flow_role | record_type | raw_fields | collection_method | unit | frequency | temporal_coverage | site_scope | aggregation_rule | quality_evidence |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| `cp_milk_and_composition` | `milk_receiving_and_separation` | 生乳和乳品成分 | 称重单、储罐流量计、实验室结果、供应商收货单 | receipt_id; supplier; milk_species; gross_mass; tare_mass; accepted_mass; receipt_temperature; milkfat_mass_fraction; dry_matter_fraction; sample_id; test_method; timestamp | 校准地磅或流量计，加代表性成分取样 | kg; 摄氏度; 质量 % | 每次接收或每罐批次 | 数据集时期所表示的全部接收 | 所表示生产线的全部供应商和接收点 | 验收质量求和；成分质量加权；拒收单独保留 | 校准证书；监管链；实验室 QA；供应商核对 |
| `cp_product_coproduct_and_loss` | `milk_receiving_and_separation`; `pasteurization_and_cooling`; `filling_and_cold_storage` | 奶油、脱脂乳和乳品损失 | 校准仪表、储罐液位、批次记录、废物票据 | batch_id; flow_role; opening_mass; inflow_mass; outflow_mass; closing_mass; milkfat_fraction; dry_matter_fraction; destination; timestamp | 批次或时期质量和乳固体核对 | kg; 质量 % | 每批并按月核对 | 完整的所表示生产时期 | 所有相关储罐、分离机、巴氏杀菌机、灌装机和损失去向 | 按角色求和；归一化前计算质量和固形物不平衡 | 仪表校准；签字批次记录；去向票据；核对报告 |
| `cp_energy_records` | `milk_receiving_and_separation`; `pasteurization_and_cooling`; `filling_and_cold_storage`; `cleaning_and_wastewater` | 电力和热能 | 分表、公用事业账单、燃料计、设备运行时间 | meter_id; carrier; opening_reading; closing_reading; unit; net_calorific_value; equipment_power; runtime; production_line; storage_duration; period | 优先生产线或设备仪表；否则使用有记录的同一时期分配 | kWh; MJ; 燃料单位 | 连续或逐批，按月核对 | 与所表示输出相同的时期 | 服务于生产线的接收、分离机、巴氏杀菌机、均质机、冷机、灌装机、冷库和 CIP | 读数差；燃料换算为 MJ；先分配直接仪表，仅分配剩余量 | 仪表校准；账单核对；换算因子来源；无重叠计量层级 |
| `cp_heat_treatment_and_product_release` | `pasteurization_and_cooling` | 热处理、冷却和合格奶油 | 连续记录仪、批次图表、分流日志、产品放行记录 | batch_id; product_fat; inlet_temperature; legal_or_validated_target; holding_temperature; holding_time; flow_diversion_events; phosphatase_or_equivalent_result; outlet_temperature; release_status | HACCP 下经验证的时间-温度记录仪和放行评审 | 摄氏度; 秒或分钟; 通过/失败 | 每批或连续生产运行 | 所表示的全部参考产品 | 每台巴氏杀菌机和产品路线 | 仅接收已放行质量；隔离分流和拒收输出 | 校准；验证研究；签字放行；偏差和纠正措施记录 |
| `cp_packaging_and_finished_product` | `filling_and_cold_storage` | 包装、成品和灌装拒收 | 物料清单、包装领退记录、检重秤、仓库放行 | sku; package_component; material; issued_mass; returned_mass; reject_mass; filled_units; net_mass; bulk_flag; exit_temperature; release_time | 按 SKU 核对发出包装和合格产品净重 | kg; 个; 摄氏度 | 每批或包装活动 | 完整的所表示生产时期 | 范围内所有灌装线和本地仓库放行 | 净材料使用量和合格产品质量；乳品与包装废物分开 | 供应商规格；检重秤核验；库存核对；放行记录 |
| `cp_cleaning_water_chemicals_and_wastewater` | `cleaning_and_wastewater` | 水、清洗剂和废水 | 水表、CIP 配方、投加日志、排水仪表和实验室数据 | water_source; meter_reading; reuse_volume; use_category; chemical_name; concentration; dose_mass; rinse_volume; wastewater_volume; COD_concentration; discharge_route; period | 计量平衡加配方和排水取样 | L 或 m3; kg; kg COD/m3 | 可用时每个 CIP 循环；按月核对 | 与所表示输出相同的时期 | 服务于生产线的过程线和共享 CIP 或废水系统 | 先直接分配；按第 7 节分配设施剩余量；COD 负荷按体积 × 浓度计算 | 仪表校准；化学品库存核对；实验室 QA；排放账单或许可记录 |
| `cp_refrigerant_inventory` | `pasteurization_and_cooling`; `filling_and_cold_storage` | 直接制冷剂排放 | 设备台账、维护日志、采购和回收记录 | equipment_id; refrigerant_type; opening_charge; additions; recovered_mass; closing_charge; service_date; served_zone; period | 按设备进行制冷剂质量盘存核对 | kg 制冷剂 | 每次维护事件和年度结算 | 与所表示输出重叠的时期；披露不匹配 | 服务于过程和储存区域的冷却设备 | 计算泄漏；先分配直接设备，按有记录的冷却服务分配共享剩余量 | 技师记录；采购/回收证据；充注核验；未修正不得出现负泄漏 |

### 计算规则

| rule_id | Applies to | Formula or rule | Inputs | Output | source_ids |
| --- | --- | --- | --- | --- | --- |
| `calc_reference_normalization` | 所有前景行 | `归一化数量 = 同期可归属数量 / 合格新鲜奶油净质量`；相除前将分母换算为 kg | 可归属流数量；合格净输出质量 | 每 1 kg 新鲜奶油的数量 | `mass-balance-identity` |
| `calc_mass_and_solids_balance` | 分离、巴氏杀菌和灌装 | 对每个限定过程和时期，按期初库存 + 投入 = 输出 + 期末库存 + 实测损失核对总质量；存在成分数据时对乳脂和干物质重复计算 | 储罐库存；投入/输出质量；乳脂；干物质；已记录损失 | 带解释的质量、乳脂和干物质不平衡 | `mass-balance-identity`; `dairy-pefcr-2025` |
| `calc_dry_matter_allocation` | 联合乳品加工负荷 | 对所有共产品，`AF_i = (Q_i x DM_i) / sum(Q_j x DM_j)`；仅按 `AF_i` 分配联合或剩余负荷 | 共产品质量 `Q`；产品特定干物质分数 `DM`；联合负荷 | 产品分配因子和已分配数量 | `dairy-pefcr-2025` |
| `calc_wastewater_cod_load` | 送往处理的废水 | `COD 负荷 = 废水体积 x COD 浓度`，体积和浓度单位必须兼容 | 实测废水体积；取样 COD 浓度 | 时期 kg COD 及归一化 kg COD/kg 奶油 | `dairy-pefcr-2025` |
| `calc_refrigerant_leakage` | 冷却设备 | `泄漏量 = 期初充注量 + 补充量 - 回收量 - 期末充注量`；分配前调查负值或不合理值 | 制冷剂盘存和维护记录 | 按类型的 kg 制冷剂释放量 | `mass-balance-identity` |

### 数据质量要求

| requirement_id | Applies to | Requirement | Evidence |
| --- | --- | --- | --- |
| `dq_identity_and_composition` | 参考产品和乳品流 | 声明乳种、乳脂、干物质、热处理、均质、包装状态和参考流 UUID；成分必须覆盖所表示产品和共产品。 | 产品规格；实验室结果；Tiangong 身份；批次放行 |
| `dq_temporal_alignment` | 所有前景数据 | 输出、投入、共产品、损失、公用工程、废水和分配使用同一生产时期。披露任何替代或外推时期。 | 仪表时期；生产台账；核对工作簿 |
| `dq_meter_hierarchy` | 能源、水和材料数据 | 优先产品线或设备数据；防止分表与父表重复计算；仅对未分配剩余量记录分配。 | 仪表树；账单核对；分配记录 |
| `dq_mass_balance` | 乳品物料 | 量化总质量，并在可用时量化乳脂和干物质不平衡。接受数据集前调查差异；不得用分配掩盖不平衡。 | 签字平衡和纠正措施记录 |
| `dq_heat_treatment` | 巴氏杀菌奶油 | 保留经验证的时间-温度标准和运行特定证据。记录分流、验证失败、返工和拒收质量。 | 记录仪图表；验证；校准；放行和偏差日志 |
| `dq_water_and_wastewater` | 用水和废水 | 区分饮用水、回收水和循环水；保留废水去向、体积和 COD 测量基准。 | 水平衡；危害评估；排水实验室报告；排放记录 |
| `dq_estimate_disclosure` | 暂定范围和替代数据 | 每个 `reasoned_estimate` 仅为筛选辅助。用于出版关键用途前，应由前景或经评审来源证据替换，或在方法学评审中披露并明确接受。 | 数据缺口登记；评审决定；替换证据 |

## 9. 校验规则

| rule_id | 适用对象 | 规则 | source_ids |
| --- | --- | --- | --- |
| `validate_reference_identity` | 参考流 | 要求恰好 1 kg Cream, fresh `e58b11a6-5d86-40a3-bed6-e365a95d0981`，使用第 3 节声明的 Mass 属性和 Units of mass 单位组 UUID。 |  |
| `validate_required_qualifiers` | 前景数据包 | 第 3 节任一必需限定信息缺失或产品属于排除形式时，完整性校验失败。 | `codex-cxs-288-1976` |
| `validate_pasteurization_record` | 每个所表示生产运行 | 要求有效的时间-温度记录和放行证据。奶油巴氏杀菌低于已声明且经验证的最低条件、分流无解释，或缺少适用的磷酸酶/等效验证均为错误。 | `codex-cxc-57-2004`; `eu-reg-853-2004` |
| `validate_process_coverage` | 前景清单 | 要求过程图中的全部四个过程，包括冷藏、清洗、废水、损失和适用的制冷剂排放；零值需要设施证据。 | `dairy-pefcr-2025`; `epa-dairy-effluent-guidelines` |
| `validate_mass_balance` | 乳品物料流 | 要求总质量核对，并在有数据时报告乳脂/干物质核对。不明负损失、缺失共产品或未披露不平衡均为错误。 | `mass-balance-identity` |
| `validate_allocation` | 联合或共享负荷 | 要求先直接分配、实测输出质量和干物质、因子在舍入容差内合计为 1，并将分配数量与联合总量核对。 | `dairy-pefcr-2025`; `mass-balance-identity` |
| `validate_activity_data` | 能源、水、化学品、包装、制冷剂、共产品、废水和排放 | 要求同一时期的前景值或明确数据缺口。缺失记录不得静默转换为零。 | `dairy-pefcr-2025` |
| `validate_estimate_status` | 每个数量范围 | `reasoned_estimate` 只能作为可替换筛选范围。未经评审接受，不得用于证明法律合规、允许生产范围或出版关键绩效。 |  |

## 10. 发布数据集画像

| 字段 | 值 |
| --- | --- |
| dataset_role | 乳品设施大门处物理分离新鲜奶油的前景乳品加工数据包 |
| downstream_use | 经评审、发布并连接所需上游数据集后作为 `secondary_dataset`；`background_dataset` |
| allowed_use | 针对已声明的新鲜奶油产品、路线、设施地域、生产时期、包装状态和边界进行产品碳足迹或 LCA 建模；在分配和数据质量一致时进行情景比较 |
| excluded_use | 生、发酵、酸化、加糖、打发、冷冻、浓缩、干燥、灭菌、UHT、复原或重组奶油；食品安全法律认证；现行 PEF 合规声明；没有兼容经评审方法的跨产品比较性断言 |
| required_metadata | PCR id 和版本；参考流 UUID；设施和地域；生产时期；乳种；乳脂和干物质；热处理和验证；均质；包装形式；净质量；冷链出厂条件；过程覆盖；分配公式和因子；上游数据集；数据源；估算标志 |
| required_quality_disclosure | 仪表覆盖；成分取样；质量/固形物不平衡；热处理证据；分配层级；共产品干物质；水和废水基准；制冷剂盘存；时间/地域代表性；未解决 UUID；全部暂定估算和数据缺口 |
| update_trigger | 乳源或乳种、产品乳脂或配方、分离或热处理路线、均质、包装、制冷剂、能源系统、废水路线、分配方法、设施地域、生产时期、参考 UUID、法律控制标准发生变化，或重要流的证据被替换时 |

## 11. 数据源

| Source id | Type | Reference | Used for |
| --- | --- | --- | --- |
| `codex-cxs-288-1976` | standard | FAO/WHO Codex Alimentarius，CXS 288-1976，Standard for Cream and Prepared Creams，官方 PDF：https://www.fao.org/fao-who-codexalimentarius/sh-proxy/ua/?lnk=1&url=https%3A%2F%2Fworkspace.fao.org%2Fsites%2Fcodex%2FStandards%2FCXS+288-1976%2FCXS_288e.pdf（检索日期 2026-08-10） | 奶油作为通过物理分离获得的脂肪-脱脂乳流体乳状液的身份；范围、产品限定信息、乳脂和热处理披露 |
| `codex-cxc-57-2004` | official_guidance | FAO/WHO Codex Alimentarius，CXC 57-2004，Code of Hygienic Practice for Milk and Milk Products，官方 PDF：https://www.fao.org/fao-who-codexalimentarius/sh-proxy/en/?lnk=1&url=https%253A%252F%252Fworkspace.fao.org%252Fsites%252Fcodex%252FStandards%252FCXC%2B57-2004%252FCXC_057e.pdf（检索日期 2026-08-10） | 经验证过程控制；奶油最低 75 摄氏度、15 秒或等效条件；验证记录；冷链；水回用；清洗和卫生处理 |
| `eu-reg-853-2004` | standard | European Union，Regulation (EC) No 853/2004 合并文本，Annex III Section IX，2026-01-27 版本：https://eur-lex.europa.eu/eli/reg/2004/853/2026-01-27/eng（检索日期 2026-08-10） | 乳和乳制品热处理替代条件、验证和记录要求的法律背景；仍以设施适用法律为准 |
| `dairy-pefcr-2025` | standard | European Dairy Association，Product Environmental Footprint Category Rules for Dairy Products，Final PEFCR，2025 年 2 月：https://eda.euromilk.org/wp-content/uploads/2025/02/PEFCR-DairyProducts_update_final.pdf（检索日期 2026-08-10；文件声明有效期至 2025 年 12 月） | 行业过程投入/输出；强制企业特定活动数据；仪表层级；共产品干物质分配；仅作为技术证据，不构成现行 PEF 合规声明 |
| `epa-dairy-effluent-guidelines` | official_guidance | United States Environmental Protection Agency，Dairy Products Processing Effluent Guidelines，40 CFR Part 405 概览：https://www.epa.gov/eg/dairy-products-processing-effluent-guidelines（检索日期 2026-08-10） | 清洗残留、溢漏、巴氏杀菌启动/换产损失、变质产品、洗涤剂、废水、BOD5、TSS 和 pH 清单覆盖 |
| `mass-balance-identity` | method_factor | 已声明过程边界内的总质量和组分质量守恒 | 质量、乳脂、干物质、制冷剂和分配核对公式；不提供经验绩效范围 |
