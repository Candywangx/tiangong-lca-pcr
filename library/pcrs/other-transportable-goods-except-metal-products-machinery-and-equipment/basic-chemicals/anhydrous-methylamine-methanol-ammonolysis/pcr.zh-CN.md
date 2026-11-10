---
pcr_id: pcr.other-transportable-goods-except-metal-products-machinery-and-equipment.basic-chemicals.anhydrous-methylamine-methanol-ammonolysis
language: zh-CN
status: candidate
content_maturity: authored_methodology
translation_status: reviewed
sync_with: pcr.en-US.md
---

# 甲醇催化氨解制造无水一甲胺

## 1. 范围与适用性

本方法适用于工业无水一甲胺（甲胺，MMA，CAS74-89-5），作为加压液化产品供化学合成使用，经甲醇催化氨解、分离、最终调节、储存和散装装载制造。接收实际液氨并汽化；所选催化剂类别为二氧化硅掺杂氧化铝。BASF证实商业反应及MMA/DMA/TMA循环，Eastman证实实际无水市场形态。本方法规定LCA记录、边界和检查，不是操作指令或假定生产配方。[basf-methylamines; eastman-mma-product]

排除MMA水溶液或有机溶剂溶液、甲胺盐、以二甲胺或三甲胺为参考产品的模型、苯胺、氨基酸、杂环化合物、树脂及下游配方产品。CPC34150排除赖氨酸及其酯和盐、谷氨酸及其盐；杂环化合物属于另行命名的CPC34160边界。甲胺为无环单胺，HS292111亦提供独立分类支持；分类本身不能证明流兼容性。本方法仅覆盖这一较窄的MMA产品及路线子集。[un-cpc3-2025; un-hs-methylamines]

前景接收外部甲醇、液氨及公用工程，纳入气相催化合成、胺水分离、实际循环、回收、调节和装载。所选边界使用外供电力和蒸汽、间接换热、闭路冷却、存在时的水洗非燃烧回收，以及场外废物处理。场内上游甲醇或氨制造、锅炉、燃烧治理、反应性酸洗、催化剂再生、溶剂型其他分离、其他合成路线和容器制造，须另行描述并链接过程；实际负担不得因采用本方法而消失。不规定压力、温度、纯度、收率、催化剂装量、产品比例、热耗或排放因子。[epa-amination-1979; basf-methylamines]

## 2. 产品类别识别

| 字段 | 值 |
| --- | --- |
| canonical_pcr_id | pcr.other-transportable-goods-except-metal-products-machinery-and-equipment.basic-chemicals.anhydrous-methylamine-methanol-ammonolysis |
| classification_refs | CPC 3.0 34150; narrower product and route boundary |
| covered_products | 经客户验收的无水游离碱一甲胺，按商业等级全质量计，作为加压液化气供应 |
| excluded_products | CPC明确排除的赖氨酸及谷氨酸类别；杂环化合物；MMA溶液及盐；以DMA/TMA为参考产品；下游配方及其他路线 |
| representative_product | 用作化学合成中间体的实际工业无水MMA等级 |
| production_route | 甲醇与液氨供应；汽化；硅铝催化氨解；实际胺水精馏及循环；调节和装载 |
| market_state | 声明首次验收门口的无水商业产品净全质量及实际气液温压；所含后续散装装载服务保留在原群组；排除槽车或容器皮重 |

## 3. 参考流

| 字段 | 值 |
| --- | --- |
| What | 声明工厂首次验收门口的无水一甲胺中间体，所含后续工厂供应服务归原群组 |
| How much | 1千克经完整验收的供货产品全质量 |
| How well | 实际无水游离碱等级、客户验收及实测MMA、水、氨、DMA、TMA、甲醇和其他杂质组成；不设通用含量阈值 |
| How long or cycle | 声明有代表性的生产群组及核算期，纳入启停及库存、服务核对 |
| reference_flow_link | finished_mma |

| 字段 | 值 |
| --- | --- |
| 参考数量 | 1 |
| 参考产品流 | 甲胺 `d73cc0da-c78b-4ec2-8924-b391edb05a06` |
| 参考流属性 | 质量 `93a60a56-a3c8-11da-a746-0800200b9a66` |
| 参考单位组 | 质量单位组 `93a60a57-a4c8-11da-a746-0800200c9a66` |
| 参考单位 | kg |
| 必需限定信息 | CAS及实际牌号;游离碱无水状态;完整组成及分析回收率;供货净全质量;实际温压及气液比例;合成及催化剂路线;场址、期间和群组;库存及唯一首次验收;实际供应和处理方及数量基准;循环和共产品去向;分配;剩余服务及不确定性 |

全部限定信息须在数据集元数据或等效字段中声明。较宽的原生产品流包含加压无水物料和溶液选项；本PCR选择前者并保留商业产品全质量。痕量水和杂质纳入供货质量并另行分析。供应商规格指出相关分析物及方法，但不将单一供应商的数值限值强加给所有合格数据集。[eastman-mma-product; eastman-mma-spec]

声明参考门口为完整无水商业等级的实际首次验收门口，事件质量仅锁定一次。合格期末成品达到相同验收门口；声明工厂供应边界内尚未完成的包装、储存或装载服务须明确计提，或后续归至原群组及原Q。验收事件账与实际发运、库存及损失物理账分开。不得在发运、期末库存及验收后去向之外，再把锁定Q加作外部物理产品。验收后物料处理另以过程或状态表达时，保留实际成对转移及损失；内部验收不是第二项外部产出。

## 4. 计量与单位规则

| rule_id | 适用对象 | 必需流属性 | 必需单位 | 规则 |
| --- | --- | --- | --- | --- |
| `mass_reference` | finished_mma | Mass | kg | 采用经校准质量流量或净称量，同一等级、群组及实际状态，排除皮重。全部阶段按 cp_reference 和 cp_stocks 使用相同全产品参考千克归一化。 |
| `whole_and_species` | 物料、废物和物理账 | Mass | kg | 实测整股质量乘同批质量分数得到组分质量。保留水、反离子、稳定剂及未知比例。整制剂与其中组分不能重复建交换。 |
| `gas_basis` | 气体计量及供应方 | Mass | kg | 气体体积换算必须采用实际绝对压力、温度、干湿组成、压缩因子和供方参考定义。不得在缺少状态、基准和独立核实的情况下使用产品密度图。 |
| `heat_basis` | 蒸汽和凝结水 | Mass and useful heat | kg; MJ | 记录蒸汽及凝结水物理质量和状态；按实际供回焓差及一致供方约定确定有效热，不得重复采购蒸汽质量及其热。 |
| `nitrogen_analytics` | cp_waste; cp_air | Mass | kg | 保留分子物种与以氮计分析基准，并识别氨氮、有机氮、TKN和总氮的重叠。TKN可能不能完整回收工业胺；TKN及COD均不能识别整个分子混合物。[epa-tkn-1993] |

## 5. 系统边界

### 边界概化

| 字段 | 值 |
| --- | --- |
| declared_starting_condition | 接收门口的外部甲醇、液氨、催化剂，携带完整兼容上游供应；外购公用工程 |
| starting_condition_role | 前景单元接收门口，以链接背景代表上游供应 |
| product_classification_scope | 仅为声明路线的无水无环一甲胺 |
| recursive_input_rule | 内部胺循环保留为实测两端相等物理链接；外购MMA、场外回收胺或其他产品须有自身供应身份及继承负担，不能零负担递归 |
| upstream_dataset_requirement | 匹配原料制造路线及组成、公用工程状态和数量、催化剂制剂、实际运输及处理。缺少供方支持属于链接不完整 |
| disclosure | 场址、阶段门口、路线及催化剂、期间及群组、物理平衡及库存向量、共产品和循环去向、水热约定、处理链接和分配 |

| rule_id | applies_to | rule | source_ids |
| --- | --- | --- | --- |
| `boundary_stages` | 全部阶段 | 覆盖接收制备、反应、分离循环、调节、储存装载及实际回收。纳入启停和损失，不能把历史温度或收率作为要求。 | epa-amination-1979; basf-methylamines |
| `boundary_links` | 全部供应和转移 | 各阶段链接保留物理全量、组成和库存变化；仅在聚合时抵消成对内部交换，不得抵消继承的供应负担或外部损失。 | epa-amination-1979 |
| `boundary_treatment` | 废物及排放 | 收集物流按全质量和组成链接兼容运输处理；实际未收集的最终环境释放仍为基本交换。声明完整覆盖前须纳入每个额外实际过程和原子交换。 | epa-amination-1979 |

## 6. 过程清单结构

### 过程图

| process_id | 过程名称 | 纳入状态 | 纳入条件 | 建模角色 | 定量参考 |
| --- | --- | --- | --- | --- | --- |
| synthesis | 进料制备及催化合成 | required | 声明甲醇及液氨路线 | 物理转化阶段 | crude_out |
| separation | 胺水分离及回收 | required | 实际分离及循环系统 | 物理分离和联合产品阶段 | mma_cut_out |
| finishing | 调节、验收、储存及装载 | required | 无水产品门口 | 最终产品和服务阶段 | finished_mma |

接收汽化→合成→粗混合物→氨胺水分离→无水MMA馏分→调节验收储存装载。保留流向DMA/TMA产品或循环的实际分支。EPA图2.1及2.2为不同历史流程，不是规定塔数或工厂配方。反应器及塔的分账保留实际物种和热回路；仅 finished_mma 是最终PCR参考产出。[epa-amination-1979; basf-methylamines]

### 过程：进料制备及合成（`synthesis`）

#### 输入

##### 产品流

###### 外购甲醇原料（`methanol_feed`）

记录接收液体全质量及实测水分和杂质；外部净供应与内部回收甲醇分开。匹配实际上游制造路线；化石原料市场平均流不能替代可再生甲醇。

- 选定流：工业甲醇液体
- 流属性/单位：质量 `93a60a56-a3c8-11da-a746-0800200b9a66` / 质量单位组 `93a60a57-a4c8-11da-a746-0800200c9a66` / 千克
- 数量规则：实测应归属交换总量 / 唯一首次验收全产品Q；采用 cp_material、cp_reference 和 cp_stocks。条件性不存在须有 not_applicable 证据；不得假设数量为零。
- 数值来源模式：foreground_record
- 适用范围：site_specific
- 归一化基准：每 1 kg 参考流
- 基准类型：reference_flow
- 证据类型：collected_record
- 采集协议：cp_material
- 来源：epa-amination-1979

###### 外购液氨（`ammonia_feed`）

记录无水液体供应、实际组成、接收温压及汽化负荷。富氨循环混合物是独立内部物流。本流不是氨氮或氨水。

- 选定流：液氨 `4a4c19b6-a44c-4b9a-ae10-f4d15d07c9cd`
- 流属性/单位：质量 `93a60a56-a3c8-11da-a746-0800200b9a66` / 质量单位组 `93a60a57-a4c8-11da-a746-0800200c9a66` / 千克
- 数量规则：实测应归属交换总量 / 唯一首次验收全产品Q；采用 cp_material、cp_reference 和 cp_stocks。条件性不存在须有 not_applicable 证据；不得假设数量为零。
- 数值来源模式：foreground_record
- 适用范围：site_specific
- 归一化基准：每 1 kg 参考流
- 基准类型：reference_flow
- 证据类型：collected_record
- 采集协议：cp_material
- 来源：epa-amination-1979

###### 硅铝催化剂制剂（`catalyst_charge`）

采用实际商业催化剂牌号，纳入载体、添加剂和残留水分；按全寿命装填记录确定应归属数量。纯氧化铝或煤制烯烃废催化剂均不代表外购催化剂全质量。不设装填量或寿命默认值。

- 选定流：二氧化硅掺杂氧化铝甲胺催化剂制剂
- 流属性/单位：质量 `93a60a56-a3c8-11da-a746-0800200b9a66` / 质量单位组 `93a60a57-a4c8-11da-a746-0800200c9a66` / 千克
- 数量规则：实测应归属交换总量 / 唯一首次验收全产品Q；采用 cp_material、cp_reference 和 cp_stocks。条件性不存在须有 not_applicable 证据；不得假设数量为零。
- 数值来源模式：foreground_record
- 适用范围：site_specific
- 归一化基准：每 1 kg 参考流
- 基准类型：reference_flow
- 证据类型：collected_record
- 采集协议：cp_material
- 来源：basf-methylamines

###### 返回的富氨胺类循环液（`recycle_in`）

与 recycle_out 为同一实际物流，记录实际氨、一/二/三甲胺、甲醇和水的比例。保持两端转移质量及组成一致。再次反应的循环胺不是惰性稀释物或零负担新原料。

- 选定流：富氨甲胺类循环混合物
- 流属性/单位：质量 `93a60a56-a3c8-11da-a746-0800200b9a66` / 质量单位组 `93a60a57-a4c8-11da-a746-0800200c9a66` / 千克
- 数量规则：实测应归属交换总量 / 唯一首次验收全产品Q；采用 cp_links、cp_reference 和 cp_stocks。条件性不存在须有 not_applicable 证据；不得假设数量为零。
- 数值来源模式：foreground_record
- 适用范围：site_specific
- 归一化基准：每 1 kg 参考流
- 基准类型：reference_flow
- 证据类型：collected_record
- 采集协议：cp_links
- 来源：basf-methylamines; epa-amination-1979

###### 反应阶段电力（`electricity_reaction`）

分表计量原料输送、汽化辅助、泵及控制设备，声明电压、电网或合同、地区及损耗。

- 选定流：合成阶段供应电能
- 流属性/单位：电能 / 兆焦
- 数量规则：实测应归属交换总量 / 唯一首次验收全产品Q；采用 cp_utility、cp_reference 和 cp_stocks。条件性不存在须有 not_applicable 证据；不得假设数量为零。
- 数值来源模式：foreground_record
- 适用范围：site_specific
- 归一化基准：每 1 kg 参考流
- 基准类型：reference_flow
- 证据类型：collected_record
- 采集协议：cp_utility
- 来源：epa-amination-1979

###### 进料制备蒸汽（`steam_reaction`）

计量供应蒸汽质量、温度、压力、干度及凝结水返回状态；区分间接加热与直接物料投入。内部反应热回收不能再次作为外购蒸汽投入。

- 选定流：外购进料制备蒸汽
- 流属性/单位：质量 `93a60a56-a3c8-11da-a746-0800200b9a66` / 质量单位组 `93a60a57-a4c8-11da-a746-0800200c9a66` / 千克
- 数量规则：实测应归属交换总量 / 唯一首次验收全产品Q；采用 cp_utility、cp_reference 和 cp_stocks。条件性不存在须有 not_applicable 证据；不得假设数量为零。
- 数值来源模式：foreground_record
- 适用范围：site_specific
- 归一化基准：每 1 kg 参考流
- 基准类型：reference_flow
- 证据类型：collected_record
- 采集协议：cp_utility
- 来源：epa-amination-1979

###### 导热流体补充（`thermal_fluid`）

仅适用于实际采用该导热回路时。记录制剂全质量、比例及其他成分；计量补充量和库存变化，循环量不得重复计入。其他导热流体须另建原子交换行。

- 选定流：联苯—二苯醚导热流体制剂
- 流属性/单位：质量 `93a60a56-a3c8-11da-a746-0800200b9a66` / 质量单位组 `93a60a57-a4c8-11da-a746-0800200c9a66` / 千克
- 数量规则：实测应归属交换总量 / 唯一首次验收全产品Q；采用 cp_material、cp_reference 和 cp_stocks。条件性不存在须有 not_applicable 证据；不得假设数量为零。
- 数值来源模式：foreground_record
- 适用范围：site_specific
- 归一化基准：每 1 kg 参考流
- 基准类型：reference_flow
- 证据类型：collected_record
- 采集协议：cp_material
- 来源：epa-amination-1979

##### 废物流

##### 基本流

#### 输出

##### 产品流

###### 粗甲胺反应混合物转出（`crude_out`）

与 crude_in 两端一致，采用物流全质量和实测组成，纳入反应水及不凝气。转移时携带组分账与各交换继承负担账。

- 选定流：粗甲胺类—氨—甲醇—水混合物
- 流属性/单位：质量 `93a60a56-a3c8-11da-a746-0800200b9a66` / 质量单位组 `93a60a57-a4c8-11da-a746-0800200c9a66` / 千克
- 数量规则：实测应归属交换总量 / 唯一首次验收全产品Q；采用 cp_links、cp_reference 和 cp_stocks。条件性不存在须有 not_applicable 证据；不得假设数量为零。
- 数值来源模式：foreground_record
- 适用范围：site_specific
- 归一化基准：每 1 kg 参考流
- 基准类型：reference_flow
- 证据类型：collected_record
- 采集协议：cp_links
- 来源：epa-amination-1979

##### 废物流

###### 废硅铝催化剂（`spent_catalyst`）

称量实际移出湿制剂，记录污染物和去向；以兼容背景纳入更换及场外再生或处理。不得因可回收而设零负担。

- 选定流：废硅铝甲胺催化剂
- 流属性/单位：质量 `93a60a56-a3c8-11da-a746-0800200b9a66` / 质量单位组 `93a60a57-a4c8-11da-a746-0800200c9a66` / 千克
- 数量规则：实测应归属交换总量 / 唯一首次验收全产品Q；采用 cp_waste、cp_reference 和 cp_stocks。条件性不存在须有 not_applicable 证据；不得假设数量为零。
- 数值来源模式：foreground_record
- 适用范围：site_specific
- 归一化基准：每 1 kg 参考流
- 基准类型：reference_flow
- 证据类型：collected_record
- 采集协议：cp_waste
- 来源：basf-methylamines

###### 废导热流体（`spent_thermal_fluid`）

仅在相应实际回路存在时适用；表征全转移量及处理。泄漏到环境的部分须作为实际物种排放，不能归为本收集废物。

- 选定流：废联苯—二苯醚导热流体
- 流属性/单位：质量 `93a60a56-a3c8-11da-a746-0800200b9a66` / 质量单位组 `93a60a57-a4c8-11da-a746-0800200c9a66` / 千克
- 数量规则：实测应归属交换总量 / 唯一首次验收全产品Q；采用 cp_waste、cp_reference 和 cp_stocks。条件性不存在须有 not_applicable 证据；不得假设数量为零。
- 数值来源模式：foreground_record
- 适用范围：site_specific
- 归一化基准：每 1 kg 参考流
- 基准类型：reference_flow
- 证据类型：collected_record
- 采集协议：cp_waste
- 来源：epa-amination-1979

##### 基本流

### 过程：分离及回收（`separation`）

#### 输入

##### 产品流

###### 接收粗反应混合物（`crude_in`）

接收与 crude_out 相同的质量、组成及负担向量；不得把内部链接再次作为外购背景。

- 选定流：粗甲胺类—氨—甲醇—水混合物
- 流属性/单位：质量 `93a60a56-a3c8-11da-a746-0800200b9a66` / 质量单位组 `93a60a57-a4c8-11da-a746-0800200c9a66` / 千克
- 数量规则：实测应归属交换总量 / 唯一首次验收全产品Q；采用 cp_links、cp_reference 和 cp_stocks。条件性不存在须有 not_applicable 证据；不得假设数量为零。
- 数值来源模式：foreground_record
- 适用范围：site_specific
- 归一化基准：每 1 kg 参考流
- 基准类型：reference_flow
- 证据类型：collected_record
- 采集协议：cp_links
- 来源：epa-amination-1979

###### 分离电力（`electricity_separation`）

计量压缩、精馏辅助、真空、泵和非燃烧回收设备，与合成及最终装卸分开。

- 选定流：分离阶段供应电能
- 流属性/单位：电能 / 兆焦
- 数量规则：实测应归属交换总量 / 唯一首次验收全产品Q；采用 cp_utility、cp_reference 和 cp_stocks。条件性不存在须有 not_applicable 证据；不得假设数量为零。
- 数值来源模式：foreground_record
- 适用范围：site_specific
- 归一化基准：每 1 kg 参考流
- 基准类型：reference_flow
- 证据类型：collected_record
- 采集协议：cp_utility
- 来源：epa-amination-1979

###### 精馏蒸汽（`steam_separation`）

分别记录总供应蒸汽与返回凝结水；仅按实际兼容供回状态计算有效热。一次供热不得同时重复计入热量和蒸汽采购。

- 选定流：外购精馏蒸汽
- 流属性/单位：质量 `93a60a56-a3c8-11da-a746-0800200b9a66` / 质量单位组 `93a60a57-a4c8-11da-a746-0800200c9a66` / 千克
- 数量规则：实测应归属交换总量 / 唯一首次验收全产品Q；采用 cp_utility、cp_reference 和 cp_stocks。条件性不存在须有 not_applicable 证据；不得假设数量为零。
- 数值来源模式：foreground_record
- 适用范围：site_specific
- 归一化基准：每 1 kg 参考流
- 基准类型：reference_flow
- 证据类型：collected_record
- 采集协议：cp_utility
- 来源：epa-amination-1979

###### 萃取精馏及洗涤用水（`water_separation`）

仅对应实际去离子水等级；计量新增外部过程、洗涤及水洗尾气用水。反应水和内部返回凝结水不属于新增供水。

- 选定流：水，去离子化，工厂内 `84f17134-bde4-4f48-8d8c-7cabf6ea8c63`
- 流属性/单位：质量 `93a60a56-a3c8-11da-a746-0800200b9a66` / 质量单位组 `93a60a57-a4c8-11da-a746-0800200c9a66` / 千克
- 数量规则：实测应归属交换总量 / 唯一首次验收全产品Q；采用 cp_utility、cp_reference 和 cp_stocks。条件性不存在须有 not_applicable 证据；不得假设数量为零。
- 数值来源模式：foreground_record
- 适用范围：site_specific
- 归一化基准：每 1 kg 参考流
- 基准类型：reference_flow
- 证据类型：collected_record
- 采集协议：cp_utility
- 来源：epa-amination-1979

###### 闭路冷却补水（`cooling_separation`）

计量外部净补水，核对蒸发、排污和库存。内部循环不得重复计耗；披露供水方及冷却边界。

- 选定流：冷却水 `df413bba-3c03-412b-a80a-c6082b6b9b33`
- 流属性/单位：质量 `93a60a56-a3c8-11da-a746-0800200b9a66` / 质量单位组 `93a60a57-a4c8-11da-a746-0800200c9a66` / 千克
- 数量规则：实测应归属交换总量 / 唯一首次验收全产品Q；采用 cp_utility、cp_reference 和 cp_stocks。条件性不存在须有 not_applicable 证据；不得假设数量为零。
- 数值来源模式：foreground_record
- 适用范围：site_specific
- 归一化基准：每 1 kg 参考流
- 基准类型：reference_flow
- 证据类型：collected_record
- 采集协议：cp_utility
- 来源：epa-amination-1979

##### 废物流

##### 基本流

#### 输出

##### 产品流

###### 纯化一甲胺转出（`mma_cut_out`）

与 mma_cut_in 两端一致；记录无水产品馏分全质量、分析、温压和继承交换向量。本中间物不是另一个最终验收参考产出。

- 选定流：甲胺 `d73cc0da-c78b-4ec2-8924-b391edb05a06`
- 流属性/单位：质量 `93a60a56-a3c8-11da-a746-0800200b9a66` / 质量单位组 `93a60a57-a4c8-11da-a746-0800200c9a66` / 千克
- 数量规则：实测应归属交换总量 / 唯一首次验收全产品Q；采用 cp_links、cp_reference 和 cp_stocks。条件性不存在须有 not_applicable 证据；不得假设数量为零。
- 数值来源模式：foreground_record
- 适用范围：site_specific
- 归一化基准：每 1 kg 参考流
- 基准类型：reference_flow
- 证据类型：collected_record
- 采集协议：cp_links
- 来源：eastman-mma-spec; epa-amination-1979

###### 可售二甲胺共产品（`dma_coproduct`）

CAS124-40-3；仅记录扣除循环并核对库存后的净可售外送量。记录商业等级全质量和分析，与水溶液等级及一甲胺分开。全部内部循环时不存在外部共产品。

- 选定流：无水二甲胺
- 流属性/单位：质量 `93a60a56-a3c8-11da-a746-0800200b9a66` / 质量单位组 `93a60a57-a4c8-11da-a746-0800200c9a66` / 千克
- 数量规则：实测应归属交换总量 / 唯一首次验收全产品Q；采用 cp_material、cp_reference 和 cp_stocks。条件性不存在须有 not_applicable 证据；不得假设数量为零。
- 数值来源模式：foreground_record
- 适用范围：site_specific
- 归一化基准：每 1 kg 参考流
- 基准类型：reference_flow
- 证据类型：collected_record
- 采集协议：cp_material
- 来源：basf-methylamines; epa-amination-1979

###### 可售三甲胺共产品（`tma_coproduct`）

CAS75-50-3；实际净产品外送与富氨循环共沸物分开。保留等级全质量、杂质及水分；不得以三乙胺替代。

- 选定流：无水三甲胺
- 流属性/单位：质量 `93a60a56-a3c8-11da-a746-0800200b9a66` / 质量单位组 `93a60a57-a4c8-11da-a746-0800200c9a66` / 千克
- 数量规则：实测应归属交换总量 / 唯一首次验收全产品Q；采用 cp_material、cp_reference 和 cp_stocks。条件性不存在须有 not_applicable 证据；不得假设数量为零。
- 数值来源模式：foreground_record
- 适用范围：site_specific
- 归一化基准：每 1 kg 参考流
- 基准类型：reference_flow
- 证据类型：collected_record
- 采集协议：cp_material
- 来源：basf-methylamines; epa-amination-1979

###### 回收富氨胺类循环液（`recycle_out`）

按实测组成返回 recycle_in，不得假设为纯氨质量。各胺可能继续反应；跨反应器单一物种不必各自守恒，但元素必须守恒。

- 选定流：富氨甲胺类循环混合物
- 流属性/单位：质量 `93a60a56-a3c8-11da-a746-0800200b9a66` / 质量单位组 `93a60a57-a4c8-11da-a746-0800200c9a66` / 千克
- 数量规则：实测应归属交换总量 / 唯一首次验收全产品Q；采用 cp_links、cp_reference 和 cp_stocks。条件性不存在须有 not_applicable 证据；不得假设数量为零。
- 数值来源模式：foreground_record
- 适用范围：site_specific
- 归一化基准：每 1 kg 参考流
- 基准类型：reference_flow
- 证据类型：collected_record
- 采集协议：cp_links
- 来源：basf-methylamines; epa-amination-1979

###### 清洁公用工程凝结水返回（`condensate_return`）

仅适用于跨越声明供应边界的无污染间接加热凝结水；注明状态及供方热量约定。受污染过程凝结液属于废水。

- 选定流：返还公用工程供应方的清洁蒸汽凝结水
- 流属性/单位：质量 `93a60a56-a3c8-11da-a746-0800200b9a66` / 质量单位组 `93a60a57-a4c8-11da-a746-0800200c9a66` / 千克
- 数量规则：实测应归属交换总量 / 唯一首次验收全产品Q；采用 cp_utility、cp_reference 和 cp_stocks。条件性不存在须有 not_applicable 证据；不得假设数量为零。
- 数值来源模式：foreground_record
- 适用范围：site_specific
- 归一化基准：每 1 kg 参考流
- 基准类型：reference_flow
- 证据类型：collected_record
- 采集协议：cp_utility
- 来源：epa-amination-1979

##### 废物流

###### 含胺精馏及洗涤排液（`separation_wastewater`）

记录收集物流全量、水及分别测定的一/二/三甲胺、氨、甲醇和其他成分；COD和以氮计指标仍是分析量。记录接收方、运输和处理；不得用氮质量替代整股废水。

- 选定流：甲胺过程水性废水
- 流属性/单位：质量 `93a60a56-a3c8-11da-a746-0800200b9a66` / 质量单位组 `93a60a57-a4c8-11da-a746-0800200c9a66` / 千克
- 数量规则：实测应归属交换总量 / 唯一首次验收全产品Q；采用 cp_waste、cp_reference 和 cp_stocks。条件性不存在须有 not_applicable 证据；不得假设数量为零。
- 数值来源模式：foreground_record
- 适用范围：site_specific
- 归一化基准：每 1 kg 参考流
- 基准类型：reference_flow
- 证据类型：collected_record
- 采集协议：cp_waste
- 来源：epa-amination-1979

###### 有机精馏残渣（`heavy_bottoms`）

表征一股实际分开的湿残渣、库存调整后转移质量及实际接收处理；未识别氮应披露，不能自动指定为某种胺。

- 选定流：甲胺精馏重残渣
- 流属性/单位：质量 `93a60a56-a3c8-11da-a746-0800200b9a66` / 质量单位组 `93a60a57-a4c8-11da-a746-0800200c9a66` / 千克
- 数量规则：实测应归属交换总量 / 唯一首次验收全产品Q；采用 cp_waste、cp_reference 和 cp_stocks。条件性不存在须有 not_applicable 证据；不得假设数量为零。
- 数值来源模式：foreground_record
- 适用范围：site_specific
- 归一化基准：每 1 kg 参考流
- 基准类型：reference_flow
- 证据类型：collected_record
- 采集协议：cp_waste
- 来源：epa-amination-1979


###### 冷却循环排污（`cooling_blowdown`）

记录一股实际冷却水排污，处理药剂及污染物作为组分测量；整股湿质量链接实际场外处理。与过程精馏废水及清洁凝结水分开。

- 选定流：冷却水排污废水
- 流属性/单位：质量 / 千克
- 数量规则：实测应归属整股质量 / 唯一验收全产品Q；采用 cp_waste、cp_reference 和 cp_stocks。
- 数值来源模式：foreground_record
- 适用范围：site_specific
- 归一化基准：每 1 kg 参考流
- 基准类型：reference_flow
- 证据类型：collected_record
- 采集协议：cp_waste
- 来源：epa-amination-1979

###### 收集并送场外处理的排放气（`purge_wastegas`）

记录送往指定场外接收方的捕集气混合物全量、组成、质量和接收处理。最终未捕集室外排放属基本交换；捕集气不得再重复作为环境排放。

- 选定流：收集的甲胺过程排放气混合物
- 流属性/单位：质量 `93a60a56-a3c8-11da-a746-0800200b9a66` / 质量单位组 `93a60a57-a4c8-11da-a746-0800200c9a66` / 千克
- 数量规则：实测应归属交换总量 / 唯一首次验收全产品Q；采用 cp_waste、cp_reference 和 cp_stocks。条件性不存在须有 not_applicable 证据；不得假设数量为零。
- 数值来源模式：foreground_record
- 适用范围：site_specific
- 归一化基准：每 1 kg 参考流
- 基准类型：reference_flow
- 证据类型：collected_record
- 采集协议：cp_waste
- 来源：epa-amination-1979

##### 基本流


###### 向室外空气蒸发的水（`water_air`）

按水质量记录实际冷却循环及其他水性蒸发损失；区分蒸发、产品保留水、收集凝结水、废水和捕集液滴。条件性不存在须有水平衡证据。

- 选定流：水蒸气向室外空气排放，未指定
- 流属性/单位：质量 / 千克
- 数量规则：实测应归属蒸发水质量 / 唯一验收全产品Q；采用 cp_utility、cp_reference 和 cp_stocks。
- 数值来源模式：foreground_record
- 适用范围：site_specific
- 归一化基准：每 1 kg 参考流
- 基准类型：reference_flow
- 证据类型：collected_record
- 采集协议：cp_utility
- 来源：epa-amination-1979

###### 甲胺向室外空气排放（`mma_air`）

CAS74-89-5；计量合成及分离最终控制出口和无组织点的物种质量。捕集量与大气排放量分开；不设历史排放因子默认值。仅有实际路线覆盖证据才可标记不存在。

- 选定流：甲胺向室外空气排放，未指定
- 流属性/单位：质量 `93a60a56-a3c8-11da-a746-0800200b9a66` / 质量单位组 `93a60a57-a4c8-11da-a746-0800200c9a66` / 千克
- 数量规则：实测应归属交换总量 / 唯一首次验收全产品Q；采用 cp_air、cp_reference 和 cp_stocks。条件性不存在须有 not_applicable 证据；不得假设数量为零。
- 数值来源模式：foreground_record
- 适用范围：site_specific
- 归一化基准：每 1 kg 参考流
- 基准类型：reference_flow
- 证据类型：collected_record
- 采集协议：cp_air
- 来源：epa-amination-1979

###### 二甲胺向室外空气排放（`dma_air`）

CAS124-40-3；计量合成及分离最终控制出口和无组织点的物种质量。捕集量与大气排放量分开；不设历史排放因子默认值。仅有实际路线覆盖证据才可标记不存在。

- 选定流：二甲胺向室外空气排放，未指定
- 流属性/单位：质量 `93a60a56-a3c8-11da-a746-0800200b9a66` / 质量单位组 `93a60a57-a4c8-11da-a746-0800200c9a66` / 千克
- 数量规则：实测应归属交换总量 / 唯一首次验收全产品Q；采用 cp_air、cp_reference 和 cp_stocks。条件性不存在须有 not_applicable 证据；不得假设数量为零。
- 数值来源模式：foreground_record
- 适用范围：site_specific
- 归一化基准：每 1 kg 参考流
- 基准类型：reference_flow
- 证据类型：collected_record
- 采集协议：cp_air
- 来源：epa-amination-1979

###### 三甲胺向室外空气排放（`tma_air`）

CAS75-50-3；计量合成及分离最终控制出口和无组织点的物种质量。捕集量与大气排放量分开；不设历史排放因子默认值。仅有实际路线覆盖证据才可标记不存在。

- 选定流：三甲胺向室外空气排放，未指定
- 流属性/单位：质量 `93a60a56-a3c8-11da-a746-0800200b9a66` / 质量单位组 `93a60a57-a4c8-11da-a746-0800200c9a66` / 千克
- 数量规则：实测应归属交换总量 / 唯一首次验收全产品Q；采用 cp_air、cp_reference 和 cp_stocks。条件性不存在须有 not_applicable 证据；不得假设数量为零。
- 数值来源模式：foreground_record
- 适用范围：site_specific
- 归一化基准：每 1 kg 参考流
- 基准类型：reference_flow
- 证据类型：collected_record
- 采集协议：cp_air
- 来源：epa-amination-1979

###### 氨向室外空气排放（`ammonia_air`）

CAS7664-41-7；计量合成及分离最终控制出口和无组织点的物种质量。捕集量与大气排放量分开；不设历史排放因子默认值。仅有实际路线覆盖证据才可标记不存在。

- 选定流：氨向室外空气排放，未指定
- 流属性/单位：质量 `93a60a56-a3c8-11da-a746-0800200b9a66` / 质量单位组 `93a60a57-a4c8-11da-a746-0800200c9a66` / 千克
- 数量规则：实测应归属交换总量 / 唯一首次验收全产品Q；采用 cp_air、cp_reference 和 cp_stocks。条件性不存在须有 not_applicable 证据；不得假设数量为零。
- 数值来源模式：foreground_record
- 适用范围：site_specific
- 归一化基准：每 1 kg 参考流
- 基准类型：reference_flow
- 证据类型：collected_record
- 采集协议：cp_air
- 来源：epa-amination-1979

###### 甲醇向室外空气排放（`methanol_air`）

CAS67-56-1；计量合成及分离最终控制出口和无组织点的物种质量。捕集量与大气排放量分开；不设历史排放因子默认值。仅有实际路线覆盖证据才可标记不存在。

- 选定流：甲醇向室外空气排放，未指定
- 流属性/单位：质量 `93a60a56-a3c8-11da-a746-0800200b9a66` / 质量单位组 `93a60a57-a4c8-11da-a746-0800200c9a66` / 千克
- 数量规则：实测应归属交换总量 / 唯一首次验收全产品Q；采用 cp_air、cp_reference 和 cp_stocks。条件性不存在须有 not_applicable 证据；不得假设数量为零。
- 数值来源模式：foreground_record
- 适用范围：site_specific
- 归一化基准：每 1 kg 参考流
- 基准类型：reference_flow
- 证据类型：collected_record
- 采集协议：cp_air
- 来源：epa-amination-1979

### 过程：最终调节及装载（`finishing`）

#### 输入

##### 产品流

###### 接收纯化一甲胺（`mma_cut_in`）

与 mma_cut_out 一致；保留质量、分析、气液比例、实际温压和已有负担。返工不合格品循环不能产生新验收。

- 选定流：甲胺 `d73cc0da-c78b-4ec2-8924-b391edb05a06`
- 流属性/单位：质量 `93a60a56-a3c8-11da-a746-0800200b9a66` / 质量单位组 `93a60a57-a4c8-11da-a746-0800200c9a66` / 千克
- 数量规则：实测应归属交换总量 / 唯一首次验收全产品Q；采用 cp_links、cp_reference 和 cp_stocks。条件性不存在须有 not_applicable 证据；不得假设数量为零。
- 数值来源模式：foreground_record
- 适用范围：site_specific
- 归一化基准：每 1 kg 参考流
- 基准类型：reference_flow
- 证据类型：collected_record
- 采集协议：cp_links
- 来源：eastman-mma-product; eastman-mma-spec

###### 最终调节及装载电力（`electricity_finish`）

计量实际压缩或制冷、储存和装载负荷；存在制冷剂泄漏时另行定量。复用容器不属于产品净质量。

- 选定流：甲胺调节与装载供应电能
- 流属性/单位：电能 / 兆焦
- 数量规则：实测应归属交换总量 / 唯一首次验收全产品Q；采用 cp_utility、cp_reference 和 cp_stocks。条件性不存在须有 not_applicable 证据；不得假设数量为零。
- 数值来源模式：foreground_record
- 适用范围：site_specific
- 归一化基准：每 1 kg 参考流
- 基准类型：reference_flow
- 证据类型：collected_record
- 采集协议：cp_utility
- 来源：eastman-mma-product

###### 氮气保护补充（`nitrogen_blanketing`）

仅在实际使用时适用；记录供应气体质量、纯度、库存及吹扫去向。本流为分子氮，不是氨或肥料氮。有证据的无氮封闭系统可标记 not_applicable。

- 选定流：氮气 `4f19ca0f-7b3b-11dd-ad8b-0800200c9a66`
- 流属性/单位：质量 `93a60a56-a3c8-11da-a746-0800200b9a66` / 质量单位组 `93a60a57-a4c8-11da-a746-0800200c9a66` / 千克
- 数量规则：实测应归属交换总量 / 唯一首次验收全产品Q；采用 cp_material、cp_reference 和 cp_stocks。条件性不存在须有 not_applicable 证据；不得假设数量为零。
- 数值来源模式：foreground_record
- 适用范围：site_specific
- 归一化基准：每 1 kg 参考流
- 基准类型：reference_flow
- 证据类型：collected_record
- 采集协议：cp_material
- 来源：eastman-mma-product

###### 压缩机润滑油补充（`compressor_oil`）

仅在采用润滑设备时适用；记录完整牌号、油种、添加剂、装填移出及寿命归属，不得以泛化石油质量或每期循环装填量替代。

- 选定流：压缩机润滑油
- 流属性/单位：质量 `93a60a56-a3c8-11da-a746-0800200b9a66` / 质量单位组 `93a60a57-a4c8-11da-a746-0800200c9a66` / 千克
- 数量规则：实测应归属交换总量 / 唯一首次验收全产品Q；采用 cp_material、cp_reference 和 cp_stocks。条件性不存在须有 not_applicable 证据；不得假设数量为零。
- 数值来源模式：foreground_record
- 适用范围：site_specific
- 归一化基准：每 1 kg 参考流
- 基准类型：reference_flow
- 证据类型：collected_record
- 采集协议：cp_material
- 来源：eastman-mma-product

##### 废物流

##### 基本流

#### 输出

##### 产品流

###### 验收无水一甲胺（`finished_mma`）

声明参考产出为实际首次验收门口1千克完整无水商业等级，排除槽车或容器皮重。期末验收成品达到相同门口。所含后续包装、储存、装载服务及损失保留在该原事件群组及原Q。物理账记录实际验收后转移两端、最终发运、库存及损失；不得把验收事件再加作外部物料产出。

- 选定流：甲胺 `d73cc0da-c78b-4ec2-8924-b391edb05a06`
- 流属性/单位：质量 `93a60a56-a3c8-11da-a746-0800200b9a66` / 质量单位组 `93a60a57-a4c8-11da-a746-0800200c9a66` / 千克
- 数量规则：1 千克。
- 数值来源模式：foreground_record
- 适用范围：site_specific
- 归一化基准：每 1 kg 参考流
- 基准类型：reference_flow
- 证据类型：collected_record
- 采集协议：cp_reference
- 来源：eastman-mma-product; eastman-mma-spec

##### 废物流

###### 装载及清洗废水（`loading_wastewater`）

单独保留装载或清洗收集物流及其实际组成、水分、质量和场外接收方；除非在同一计量门口前实际合并，不得仅按名称与分离废水合并。

- 选定流：受甲胺污染的装载废水
- 流属性/单位：质量 `93a60a56-a3c8-11da-a746-0800200b9a66` / 质量单位组 `93a60a57-a4c8-11da-a746-0800200c9a66` / 千克
- 数量规则：实测应归属交换总量 / 唯一首次验收全产品Q；采用 cp_waste、cp_reference 和 cp_stocks。条件性不存在须有 not_applicable 证据；不得假设数量为零。
- 数值来源模式：foreground_record
- 适用范围：site_specific
- 归一化基准：每 1 kg 参考流
- 基准类型：reference_flow
- 证据类型：collected_record
- 采集协议：cp_waste
- 来源：eastman-mma-product

###### 废压缩机油（`spent_oil`）

记录实际移出油及污染物、库存变化和接收方，保留处理负担链接。

- 选定流：废压缩机润滑油
- 流属性/单位：质量 `93a60a56-a3c8-11da-a746-0800200b9a66` / 质量单位组 `93a60a57-a4c8-11da-a746-0800200c9a66` / 千克
- 数量规则：实测应归属交换总量 / 唯一首次验收全产品Q；采用 cp_waste、cp_reference 和 cp_stocks。条件性不存在须有 not_applicable 证据；不得假设数量为零。
- 数值来源模式：foreground_record
- 适用范围：site_specific
- 归一化基准：每 1 kg 参考流
- 基准类型：reference_flow
- 证据类型：collected_record
- 采集协议：cp_waste
- 来源：eastman-mma-product

##### 基本流

###### 甲胺装卸向室外空气排放（`loading_mma_air`）

CAS74-89-5；依据经验证证据计量或建模储存和装载物种特定残余损失；区分返回库存的捕集蒸气与最终环境排放。不得把氮分析质量当成甲胺质量。

- 选定流：甲胺向室外空气排放，未指定
- 流属性/单位：质量 `93a60a56-a3c8-11da-a746-0800200b9a66` / 质量单位组 `93a60a57-a4c8-11da-a746-0800200c9a66` / 千克
- 数量规则：实测应归属交换总量 / 唯一首次验收全产品Q；采用 cp_air、cp_reference 和 cp_stocks。条件性不存在须有 not_applicable 证据；不得假设数量为零。
- 数值来源模式：foreground_record
- 适用范围：site_specific
- 归一化基准：每 1 kg 参考流
- 基准类型：reference_flow
- 证据类型：collected_record
- 采集协议：cp_air
- 来源：eastman-mma-product; epa-tkn-1993

###### 氮气向室外空气排放（`nitrogen_air`）

仅记录跨越环境边界的实际分子氮保护排气；核对供应量与留存、捕集量，不代表肥料氮排放。

- 选定流：分子氮向室外空气排放，未指定
- 流属性/单位：质量 `93a60a56-a3c8-11da-a746-0800200b9a66` / 质量单位组 `93a60a57-a4c8-11da-a746-0800200c9a66` / 千克
- 数量规则：实测应归属交换总量 / 唯一首次验收全产品Q；采用 cp_air、cp_reference 和 cp_stocks。条件性不存在须有 not_applicable 证据；不得假设数量为零。
- 数值来源模式：foreground_record
- 适用范围：site_specific
- 归一化基准：每 1 kg 参考流
- 基准类型：reference_flow
- 证据类型：collected_record
- 采集协议：cp_air
- 来源：eastman-mma-product

## 7. 分配与共产品处理

| rule_id | applies_to | rule | source_ids |
| --- | --- | --- | --- |
| `allocation_hierarchy` | 联合合成及分离 | 首先评估实际可归属设备及服务的有据细分，或声明研究方法下有支持的系统扩展。仍需分配时，评价有依据的物理关系；经济分配仅作为披露的后备方法，采用实际同期间数量和价格并作敏感性分析。不强制等额、质量、氮或销售额默认份额。 | ef-allocation-2021 |
| `allocation_physical` | 全部阶段账 | 保留完整未分配质量、实际组分变化及碳氮水平衡，与环境归属矩阵分开。循环胺可以反应变成其他胺；不得要求所有分子物种分别守恒，也不得按环境分配份额缩放实际原料、废物、排放或共产品物理质量。 | epa-amination-1979; basf-methylamines; ef-allocation-2021 |
| `allocation_recycles` | 胺循环及废物 | 内部循环既不是外售共产品，也不是避免原生产品信用。区分实际DMA/TMA产品外送、返回反应、不合格品返工、捕集蒸气和废物转移。处理及可能回收信用遵循一个有记录且兼容的模型，避免双计。 | epa-amination-1979; ef-allocation-2021 |
| `allocation_cohorts` | 原料、在制品及成品库存 | 为原料、在制品和成品逐交换保留继承负担向量；当期活动归属实际导致活动的群组。期末负担结转；期初成品不重复承担新生产份额，也不产生第二个参考分母。 逐库存份额和逐交换区分物理供方数量、继承清单系数、链接供方LCI及新增前景服务。所选投入供方已嵌入历史上游LCI时，不得再次增加与之重叠的继承向量。对每项实际需求核对溯源、清单覆盖及状态门口，采用明确不重叠的表达；同一供应或服务不双计，也不得为强行闭合而抹去未知负担。 | ef-allocation-2021 |

## 8. 前景数据采集、计算与质量规则

声明研究窗口覆盖有代表性的完整运行期，纳入启停、维护、不合格品处理、异常事件和期初期末库存。采集前描述实际所选路线及额外设施；条件性卡片不是强制配方。每种额外实际化学品、制冷剂、燃料、废物及物种排放分别建交换。制冷可以为间接方式或不存在；实际存在时须逐项增加制冷剂补充、泄漏和供方。支持设备、复用压力容器和运输遵循披露的资本及供应边界；采购钢瓶包装供应不属于所选散装门口画像，除非明确建模。来源缺失从不代表数量为零。

### 数据采集协议

| protocol_id | process_id | flow_role | record_type | raw_fields | collection_method | unit | frequency | temporal_coverage | site_scope | aggregation_rule | quality_evidence |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| `cp_reference` | finishing | 最终验收产品 | 唯一验收和质量记录 | 群组及批次标识；首次验收时间；实际等级和状态；净质量；分析；发运事件；新期末成品；期初成品；退货复检；剩余服务；唯一事件净全质量及锁定原Q；份额关联的验收后事件、时间及去向；D_new/F_new_close/L_new净桥；临时返工退回及抵消关联 | 经校准净秤或质量流量记录与对应样品及放行证明匹配。每份质量绑定一个首次验收；分别识别新生产、旧成品发运、拒收、退货和复检。 聚合控制：每 1 kg 参考流；Q为唯一新首次验收的净全质量，不是全部发运量 锁定实际首次验收事件Q，按原验收基准核对互不重叠的D、FG、L净去向；仅L为零时使用二项桥。声明参考门口为完整无水商业等级的实际首次验收门口，事件质量仅锁定一次。合格期末成品达到相同验收门口；声明工厂供应边界内尚未完成的包装、储存或装载服务须明确计提，或后续归至原群组及原Q。验收事件账与实际发运、库存及损失物理账分开。不得在发运、期末库存及验收后去向之外，再把锁定Q加作外部物理产品。验收后物料处理另以过程或状态表达时，保留实际成对转移及损失；内部验收不是第二项外部产出。 | kg; 质量分数 | 每批、每次发运及期初期末 | 完整声明运行期 | 同一等级、路线、场址及验收门口 | 每 1 kg 参考流 | 校准、皮重、实验室回收率、验收登记及物料库存核对 |
| `cp_material` | synthesis; separation; finishing | 每种外部物料和可售共产品 | 接收、领用及组成 | 行和阶段；牌号全质量；期初期末原料在制品成品；CAS；全部组分；实际供方；催化剂批次、完整制剂及寿命；净产品外送 | 库存调整后经校准接收及领用记录和批次分析；区分新增供应、内部回流及DMA/TMA净外送。记录实际催化剂和油品寿命及活动归属，不用假定系数。 聚合控制：每 1 kg 参考流；归一化前保留绝对物理量及应归属交换向量 | kg; 质量分数 | 每次接收领用、分析及生产周期；期初期末 | 完整期间及继承库存历史 | 实际场址、设备及群组 | 每 1 kg 参考流 | 发票、校准、分析、供应商声明、寿命记录和库存核对 |
| `cp_links` | synthesis; separation; finishing | 粗混合物、纯化MMA及循环链接 | 阶段质量和组分转移记录 | 配对行标识；区间；全质量；水、胺、甲醇及氨比例；气体；温压；库存；继承负担 | 两端同步校准计量或称量，并对同股物流代表取样；聚合前调查差异、滞留和实际泄漏，保留内部化学转化及循环去向。 聚合控制：每 1 kg 参考流；配对两端物理质量、组成及负担一致；仅在聚合时抵消链接 | kg; 质量分数 | 每次转移及对齐计量区间 | 完整期间及期初期末在制品 | 同一实际物流及匹配阶段门口 | 每 1 kg 参考流 | 仪表校准、物流取样、时滞库存核对及签认链接登记 |
| `cp_utility` | synthesis; separation; finishing | 每种公用工程及返回 | 阶段计量及供方记录 | 行和阶段；千瓦时或兆焦；蒸汽及凝结水质量；温压干度焓；补水循环蒸发排污；冷却边界；供方；后续服务群组 | 时间对齐阶段计量及发票，识别净进口电力蒸汽水、内部热、清洁凝结水返回及冷却物理损失。记录实际电网电压及参考数量；后续储存装载使用原群组标识。 聚合控制：每 1 kg 参考流；每项实际服务只采购一次，供回状态一致，内部循环单列 | kg; MJ; kWh; 状态单位 | 计量区间、服务事件及期初期末 | 完整期间及链接的后续服务区间 | 实际供回和设备边界 | 每 1 kg 参考流 | 校准计量、发票、状态测量、核实换算和服务登记 |
| `cp_waste` | synthesis; separation; finishing | 每股分开废物转移 | 称量、分析及接收方记录 | 行和阶段；湿全质量；水及CAS组分；气体组成；氮和COD方法及重叠；检出回收率；库存；接收方；运输处理 | 分流校准称量计量和基质特定代表分析；验证接收和处理数量，区分整股废物及所含分析物种。清洁返回与污染废水分开。 聚合控制：每 1 kg 参考流；物种分析前保留转移全质量，不双计环境排放 | kg; 质量分数；分析浓度及基准 | 每次转移、代表混合样及期初期末 | 完整期间，含启停清洗 | 指定物理物流及实际接收门口 | 每 1 kg 参考流 | 转移单、实验室回收及空白、检出限、接收供方认可和库存核对 |
| `cp_air` | synthesis; separation; finishing | 每项最终室外空气释放 | 经验证物种测试及流量活动记录 | 阶段源；物种及CAS；最终介质；浓度；流量；干湿标准状态；时间；捕集效率证据；捕集去向；泄漏；检出限 | 对实际最终出口及无组织源作代表性物种测试，纳入异常事件。验证浓度流量状态时间兼容及胺回收率。环境释放、捕集转移及内部蒸气返回分别记录。 聚合控制：每 1 kg 参考流；覆盖源和时段内实际物种质量只累计一次 | kg; 浓度；气体体积每时间 | 测试及连续或活动记录；全部排放工况 | 完整声明运行期 | 实际排口、无组织点及控制系统 | 每 1 kg 参考流 | 源测试、校准、采样回收、空白、不确定性、实测控制和源登记 |
| `cp_stocks` | synthesis; separation; finishing | 原料在制品成品群组及交换继承 | 链接库存及负担向量账 | 每份库存；期初期末全质量和组成；首次验收群组；原始Q；每项继承交换；当期新增；销售废物退货；后续储存装载服务；供方已嵌入历史LCI与继承向量重叠图；实际供应服务需求标识 | 按物料份额及每项交换核对期初库存、新活动、物理转移和期末库存。保留前期系数及溯源。未知继承负担仍未知，不得设零或摊给无关新生产。 聚合控制：每 1 kg 参考流；结转各群组负担，后续服务使用原正值Q；Q为零或未知时保留原始量 逐库存份额和逐交换区分物理供方数量、继承清单系数、链接供方LCI及新增前景服务。所选投入供方已嵌入历史上游LCI时，不得再次增加与之重叠的继承向量。对每项实际需求核对溯源、清单覆盖及状态门口，采用明确不重叠的表达；同一供应或服务不双计，也不得为强行闭合而抹去未知负担。 | kg; 各交换自身单位 | 期初期末、每次群组转移及后续服务事件 | 当期及链接的前后期群组 | 相同实际库存、验收门口及环境分配 | 每 1 kg 参考流 | 签认库存核对、不可重复验收标识、前期负担向量及不确定性登记 |

### 计算规则

| rule_id | Applies to | Formula or rule | Inputs | Output | source_ids |
| --- | --- | --- | --- | --- | --- |
| `calc_acceptance` | finished_mma | Q为新群组实际唯一标识首次验收事件的有限正值净全产品质量，并在声明验收门口锁定。按同一物料份额的原验收基准，用互不重叠的净状态桥核对Q = D_new + F_new_close + L_new：新群组净发运、新群组期末验收成品，以及未计入发运或成品且有独立证据的验收后损失、处置或后续状态去向。仅L_new为零时才可使用发运加成品二项桥。期初成品、已验收退回、复检、再交付及内部毛转移不得产生第二次事件或扩大Q。按份额标识追踪临时返工或退回至最终净状态；临时L项与其后发运或成品不得同时保留。期末成品须满足相同验收等级及声明门口，剩余边界内装载服务须计提或后续增加至原群组。事件Q为零或未知时保留原始量且不可归一化；L_new不得作为平衡补差。 | cp_reference; cp_stocks | 唯一验收全产品Q | eastman-mma-product; eastman-mma-spec |
| `calc_normalize` | all inventory rows | 对交换j和产品群组k，归一化数量 = 归属于群组k的交换j / 群组k原始验收全产品Q。先归属当期活动及继承库存再相除，同时保留绝对物理总量与分配向量。不得使用全部发运、库存净变化、纯MMA含量、含氮量或共产品质量作分母。 首次验收事件Q锁定后，不按验收后损失后的剩余产出重算。未分配物理交换分子与环境归属矩阵分开；不得按分配份额除算或缩减物理共产品。 | cp_reference; cp_stocks; linked row protocol | 每 1 kg 参考流清单 | ef-allocation-2021 |
| `calc_stock_vectors` | all inventory rows | 逐交换j，期初原料在制品继承负担加新增应归属活动，等于转移给新群组、期末保留原料在制品、其他群组及披露残余去向的负担。成品交换向量独立核对：期初成品加新增验收成品等于发运、期末成品及实测损失去向。保留分配、符号和继承系数。 逐库存份额和逐交换区分物理供方数量、继承清单系数、链接供方LCI及新增前景服务。所选投入供方已嵌入历史上游LCI时，不得再次增加与之重叠的继承向量。对每项实际需求核对溯源、清单覆盖及状态门口，采用明确不重叠的表达；同一供应或服务不双计，也不得为强行闭合而抹去未知负担。 | cp_stocks; cp_material; cp_links | 逐交换结转及核对 | ef-allocation-2021 |
| `calc_later_services` | electricity_finish; loading_mma_air; all later services | 后续储存、装载、复检及退货处理属于原验收群组新增交换活动。除以该群组原始Q，修订或计提其服务清单，不产生新产品产出，也不把旧库存摊给当期新生产。原始Q或继承向量未知时，仅报告服务原始总量及未解决归一化。 | cp_stocks; cp_utility; cp_air; cp_reference | 原群组服务归属 | ef-allocation-2021 |
| `calc_components` | 物理物流账 | 组分质量 = 实测整股质量乘同股实测组分质量分数；核对水及量化未知项。完整供货MMA及痕量组分是一个商业交换，组分分析不创造额外采购产品或排放。以氮计换算必须核实物种及分子式，不能假定胺身份。 | cp_material; cp_links; cp_reference; cp_waste | 整股及组分账 | eastman-mma-spec; epa-tkn-1993 |
| `calc_balance` | 全部物理阶段 | 在原料、反应水、实际胺转化、可售产品、全部废物排放和库存变化间核对实测总质量及碳氮氢氧元素。MMA、DMA、TMA、甲醇和氨的物种变化遵循实际化学；仅守恒元素必须闭合，不要求所有反应物种分别闭合。组成未知时不能宣称闭合。不得以理论配方或收率强代实测投入。 | cp_material; cp_links; cp_waste; cp_air; cp_stocks | 物理元素及质量检查 | epa-amination-1979; basf-methylamines; epa-tkn-1993 |
| `calc_release` | 全部基本流行 | 物种千克 = 兼容实测浓度（毫克每立方米）乘气体流量（立方米每小时）乘小时数的累计值，再乘0.000001；采用实际兼容状态及经验证回收率。这是换算，不是排放默认值。纠正重叠源及时段，捕集物不纳入已排放质量。 | cp_air; cp_reference; cp_stocks | 原始物种质量及应归属归一化排放 | |

### 数据质量要求

| requirement_id | Applies to | Requirement | Evidence |
| --- | --- | --- | --- |
| `dq_identity` | 全部行 | 核实原生全名、类型、物理状态组成、路线备注、参考属性及供方数量。普通UUID和供方未解决时仍为缺口，不得以邻近物种、泛化用途代理、基本流产品或整制剂的纯组分替代。 | 直读身份及实际供应处理记录 |
| `dq_cohorts` | 参考和库存 | 唯一首次验收事件锁定原Q；核对互斥净发运、期末成品及验收后L去向，完整原料在制品成品逐交换继承、两端一致链接及原群组后续服务。供方已嵌入历史与继承向量不重叠。保留零或未知分母记录及未知负担。 | cp_reference; cp_links; cp_stocks |
| `dq_analysis` | 物料、废物及空气 | 实际分析方法状态及基质回收；整制剂与所含组分分开；以氮计和COD指标重叠；检出限及未识别比例。 | eastman-mma-spec; epa-tkn-1993 |
| `dq_completeness` | 完成数据集 | 分别记录实测、有据 not_applicable 和未解决状态。宣称完整前增加每项额外实际交换；披露缺少供方链接、维护资本边界、运输、时空不匹配及不确定性。 | cp_material; cp_utility; cp_waste; cp_air; cp_stocks |

## 9. 校验规则

| rule_id | applies_to | rule | source_ids |
| --- | --- | --- | --- |
| `validate_reference` | finished_mma | 一个明确最终产品输出链接，1千克无水商业MMA全质量、正确原生产品身份、完整限定、实际路线及正值唯一验收Q。基本流甲胺、水溶MMA、纯氮质量及重复首次验收均不通过。 | eastman-mma-product; eastman-mma-spec; un-hs-methylamines |
| `validate_physical` | 全部阶段 | 独立于分配核对链接两端、库存变化、整股及物种元素账。反应胺可互相转化；未解释组成或平衡残差不得用分配系数隐藏。 | epa-amination-1979; basf-methylamines |
| `validate_stocks` | 原料在制品成品及后续服务 | 核实每项继承交换向量、事件锁定原Q及互斥D_new/F_new_close/L_new净状态桥，纳入实际同期间验收后损失。后续服务使用原Q。期初成品、退回、返工毛吞吐及复检均不扩大Q。Q为零或未知时不归一化；溯源缺失不能变成零负担。核对供方已嵌入历史LCI与继承向量，排除同一实际需求双计。 | ef-allocation-2021 |
| `validate_quantities` | 全部行 | 双语使用相同全产品参考基准及有序规则协议；保留供方压力状态数量；不重复热蒸汽或整制剂组分交换，不以氮分析替代物种。 | eastman-mma-spec; epa-tkn-1993 |
| `validate_coverage` | 完成数据集 | 完整披露实际阶段、公用工程、运输、处理、释放及资本边界；补全每个缺失实际原子交换，否则标记不完整。EPA历史图及制造商催化剂主张不建立场址清单、通用配方、科学批准或方法学接受。 | epa-amination-1979; basf-methylamines; ef-allocation-2021 |

## 10. 发布数据集画像

| 字段 | 值 |
| --- | --- |
| dataset_role | secondary_dataset; background_dataset |
| downstream_use | 经独立接受且完整的场址、等级及群组数据集，用于兼容无水MMA中间体供应 |
| allowed_use | 相同实际产品形态及声明甲醇氨路线、供方数量和边界；保留不确定性及群组固定信息 |
| excluded_use | 整个CPC34150；MMA溶液及盐；DMA/TMA参考；杂环化合物；假定配方或排放因子；从单一供应商外推全行业 |
| required_metadata | 产品CAS牌号完整分析状态、首次验收及原始Q、场址期间路线催化剂、全部库存向量、供方数量、循环共产品、物理平衡、分配及剩余服务 |
| required_quality_disclosure | 实际覆盖，实测、不适用及未解决交换，分析回收，平衡，库存继承，供方兼容，来源独立性和不确定性 |
| update_trigger | 产品形态路线催化剂变化、供应处理变化、验收分析修订、新交换、库存服务纠正或相反原始证据 |

## 11. 数据源

| Source id | Type | Reference | Used for |
| --- | --- | --- | --- |
| un-cpc3-2025 | official_guidance | 联合国统计司CPC3.0结构，2025年6月30日，34150及34160；https://unstats.un.org/unsd/classifications/Econ/Download/In%20Text/CPC_Ver_3.0_Structure_30Jun2025.csv | 仅为官方类别边界及排除项，不能证明产品流或路线 |
| un-hs-methylamines | official_guidance | 联合国统计司HS2012，292111无环单胺；https://unstats.un.org/unsd/classifications/Econ/Detail/EN/32/292111 | 独立无环胺功能分类，无清单默认值 |
| eastman-mma-product | literature | Eastman产品71104079，无水一甲胺MMA欧盟产品说明，2026年11月8日快照；https://www.eastman.com/en/products/product-detail/71104079/monomethylamine-anhydrous-mma-eu | 实际无水液化市场形态及工业中间体，与溶液选项区分，不代表通用性能或配方 |
| eastman-mma-spec | standard | Eastman销售规格T51007，2017年6月27日生效，第1页，71104079；https://www.eastman.com/supplemental/salespecs/71104079.pdf | 实际无水等级、痕量组分及GC和卡尔费休测量示例，不泛化数值限值 |
| basf-methylamines | literature | BASF精细化学品页面，烷基胺章节，2026年11月8日快照；https://chemical-catalysts-and-adsorbents.basf.com/global/en/hydrogenation-catalysts/industries-we-serve/fine-chemicals | 商业甲醇氨路线、二氧化硅掺杂氧化铝催化剂、三种胺及循环，排除工况性能装量默认值 |
| epa-amination-1979 | official_guidance | EPA IMPQCE01/79-05《Toxic Pollutant Identification:Amination Processes》，1979年1月，2.1.1至2.1.3节，印刷2-1至2-6页即PDF57至62页，图2.1及2.2；https://nepis.epa.gov/Exe/ZyPDF.cgi/9100C2XP.PDF?Dockey=9100C2XP.PDF | 历史原始过程、循环、分离和废物拓扑；不采纳案例及数值配方收率废水负荷 |
| epa-tkn-1993 | method_factor | EPA方法351.2，修订2.0，1993年8月，第1.1、2.2至2.3、12.3节；https://www.epa.gov/sites/default/files/2015-08/documents/method_351-2_1993.pdf | 氮分析基准及工业胺回收不完整限制，不提供物种质量或废水默认值 |
| ef-allocation-2021 | official_guidance | 欧盟委员会建议2021/2279，附件I第4.5节，PDF63至64页；https://environment.ec.europa.eu/system/files/2021-12/Annexes%201%20to%202.pdf | 仅为多功能性处理层级；前景群组库存规则为明确采集约定，不代表来源特定分配份额或PEF符合性 |
