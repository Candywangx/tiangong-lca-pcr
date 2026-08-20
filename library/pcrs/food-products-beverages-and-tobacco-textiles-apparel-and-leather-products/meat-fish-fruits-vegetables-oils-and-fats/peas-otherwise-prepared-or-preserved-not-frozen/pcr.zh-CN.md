---
pcr_id: pcr.food-products-beverages-and-tobacco-textiles-apparel-and-leather-products.meat-fish-fruits-vegetables-oils-and-fats.peas-otherwise-prepared-or-preserved-not-frozen
language: zh-CN
status: candidate
sync_with: pcr.en-US.md
---

# 其他制作或保藏、非冷冻豌豆

## 1. 范围与适用性

本 PCR 适用于采用热处理、装入气密密封的罐、瓶、托盒、软包装或半刚性包装，并在非冷冻条件下销售的货架稳定型制作或保藏豌豆。范围包括由未成熟青豌豆制成的产品，也包括加工前浸泡的成熟干豌豆；产品须声明液体装填介质或真空包装状态。本规则支持从豌豆、配料和包装进入工厂起，经整理、装填、密封、热加工、冷却和最终包装，直至制造厂门放行的 gate-to-gate 前景数据包。

本 PCR 不包括冷冻豌豆、未经进一步制作或保藏而销售的干豌豆、乳酸发酵豌豆、主要以醋保藏的豌豆、需冷藏的气密包装产品、豌豆汤、豌豆泥、复合餐食以及豌豆并非定义性产品的制品；也不包括配送、零售、消费者制备和终端处置。上游种植、外购配料和包装生产以及厂外公用工程通过关联上游数据集表示，不在前景系统中重复展开。

产品专用的计划热加工程序、采用酸化路线时的酸化程序、容器完整性控制以及适用食品法规符合性，仍由合格加工者和该产品适用的管辖机构负责。本 PCR 不规定通用的杀菌温度或时间。

## 2. 产品类别识别

| 字段 | 值 |
| --- | --- |
| canonical_pcr_id | pcr.food-products-beverages-and-tobacco-textiles-apparel-and-leather-products.meat-fish-fruits-vegetables-oils-and-fats.peas-otherwise-prepared-or-preserved-not-frozen |
| classification_refs | CPC 3.0：21396，其他制作或保藏、非冷冻豌豆（精确映射上下文） |
| covered_products | 货架稳定型罐装或其他气密包装青豌豆；甜青豌豆；由浸泡后的 Pisum sativum L. 成熟干豌豆制成的成熟加工豌豆；真空包装货架稳定型豌豆；等效非冷冻热保藏豌豆形态 |
| excluded_products | 冷冻豌豆；未制作的干豌豆；需冷藏的豌豆；乳酸发酵或醋保藏豌豆；豌豆泥、汤、复合餐食以及豌豆并非定义性产品的制品 |
| representative_product | 装于已声明水性装填介质中、气密密封并经热加工达到商业无菌的货架稳定型整粒豌豆 |
| production_route | 接收和分选；清洗与制备；成熟干豌豆的条件性浸泡；漂烫或等效调理；装填介质制备；装填与必要时排气；气密封口；计划热加工；冷却与干燥；最终包装和放行 |
| market_state | 制造厂门处的非冷冻货架稳定型成品，并声明净含量、沥干质量约定、豌豆成熟类别、装填介质、容器形式及保藏路线 |

## 3. 参考流

| 字段 | 值 |
| --- | --- |
| What | 在制造厂门交付的货架稳定型其他制作或保藏、非冷冻豌豆生产 |
| How much | 1,000 kg 净含量，包括豌豆和已声明的装填介质，不包括初级、次级和三级包装质量 |
| How well | 声明未成熟青豌豆或成熟加工豌豆；声明产品与装填介质配方；气密密封；按合格计划工艺加工至所需商业稳定状态；符合适用产品规范 |
| How long or cycle | 一个具有代表性的生产活动，截止厂门放行；储存、配送、使用和终端处置不在此前景参考期内 |
| reference_flow_link | prepared_preserved_peas_reference_flow |

| 字段 | 值 |
| --- | --- |
| 参考数量 | 厂门处 1,000 kg 净含量 |
| 参考产品流 | 豌豆，其他制作或腌制，非冷冻 `a5415af7-3575-4017-bd27-3b87650d94bd` |
| 参考流属性 | Mass `93a60a56-a3c8-11da-a746-0800200b9a66` |
| 参考单位组 | Units of mass `93a60a57-a4c8-11da-a746-0800200c9a66` |
| 参考单位 | kg |
| 必需限定信息 | 豌豆成熟路线（青豌豆或成熟加工豌豆）；相关时的品种或形态；装填介质及可选配料；酸化或低酸路线；容器材料、形式、尺寸和封口；净含量；沥干质量及试验约定；适用时的真空包装状态；计划工艺授权者和标识符；生产地域和时期 |

构建前景数据包时，`必需限定信息` 中列出的信息应在数据集元数据、过程说明、参考流备注、产品说明或等效数据包字段中明确声明。缺失必需限定信息的数据包视为参考流定义不完整。

## 4. 计量与单位规则

| rule_id | 适用对象 | 必需流属性 | 必需单位 | 规则 |
| --- | --- | --- | --- | --- |
| `reference_mass` | 参考产品 | Mass `93a60a56-a3c8-11da-a746-0800200b9a66` | kg | 将全部清单量归一化到厂门处 1,000 kg 已声明净含量。净含量包括豌豆和装填介质，排除所有包装层。记录作为分母的生产活动产出质量。 |
| `drained_mass_separation` | 豌豆和装填介质 | Mass `93a60a56-a3c8-11da-a746-0800200b9a66` | kg 和 kg/kg 净含量 | 按适用产品规范和抽样约定，分别计量或检测沥干豌豆质量与装填介质质量。核查豌豆含量时不得以净含量替代沥干质量；保留会改变适用最低值的尺寸或等级限定。来源：`codex-cxs-297-2009-2023`。 |
| `packaging_mass_separation` | 初级、次级和三级包装 | Mass `93a60a56-a3c8-11da-a746-0800200b9a66` | kg | 将每种包装材料作为单独产品投入记录并归一化到参考流；包装质量不得计入 1,000 kg 净含量参考数量。 |
| `utility_measurement` | 工艺水、电力、燃料、蒸汽和热 | 适用于公用工程的计量质量、体积或能量属性 | kg 或 m3；kWh；MJ | 保留计量原单位和换算因子，区分外购公用工程与现场生产；共享表计仅可按有记录的物理驱动因素分配。在最适当的过程层级记录水、能源、原料、废水和残余物。来源：`eu-bat-fdm-2019-2031`。 |
| `thermal_process_record` | 装填、密封、杀菌釜加工和冷却 | 适用时的温度、时间、压力、pH、装填质量、顶隙和容器尺寸 | °C；min 或 s；kPa 或 bar；pH；kg；mm | 保留合格计划工艺标识符及其关键因素。初温、加工时间和温度、所需压力、装填量与顶隙、容器配置和冷却均采用实际生产记录；不得从通用 PCR 默认值推断商业无菌。来源：`codex-cxc-23-1979`。 |

## 5. 系统边界

### 边界概化

| 字段 | 值 |
| --- | --- |
| declared_starting_condition | 豌豆以新鲜或先前冷冻的未成熟青豌豆，或清洁、完好、整粒、脱粒的成熟干豌豆状态接收；配料、水、公用工程和包装在加工设施处接收 |
| starting_condition_role | 前景制造入口；豌豆农业路线以及外购配料、公用工程和包装生产属于关联上游系统 |
| product_classification_scope | 目标语义类别表示的制作或保藏、非冷冻豌豆；分类代码仅为映射上下文，不构成 PCR 身份 |
| recursive_input_rule | 当投入已经属于同一制作或保藏豌豆类别时，仅作为外购产品投入记录一次并关联其上游数据集；不得在接收过程中重新展开或重复其制作链 |
| upstream_dataset_requirement | 为豌豆种植或先前制备、外购配料、包装材料、电力、燃料、热、水供应、研究范围内的进厂运输以及厂外废物或废水处理关联地域、技术和时间具有代表性的数据集 |
| disclosure | 披露豌豆成熟路线、初始状态、排除和外包操作、产品及容器配方、计划工艺依据、cut-off、共享资源处理、分配选择、废物去向以及任何由暂定估算填补的数据缺口 |

| rule_id | applies_to | rule | source_ids |
| --- | --- | --- | --- |
| `boundary_required_operations` | 前景制造 | 纳入设施运营控制范围内所有适用的接收、分选、清洗、条件性浸泡、漂烫或调理、装填介质制备、装填、排气、气密封口、计划热加工、冷却、干燥、最终包装、放行、产品损失、清洁、废水和残余物处理。 | `codex-cxs-297-2009-2023`; `codex-cxc-23-1979`; `eu-bat-fdm-2019-2031` |
| `boundary_upstream_links` | 外购投入和公用工程 | 豌豆种植以及配料、包装、电力、燃料、热和水的生产保持在 gate-to-gate 前景过程之外，但必须明确关联上游数据集；替代范围内厂内操作的外包步骤须披露并关联。 | `eu-pef-2021-2279` |
| `boundary_downstream_exclusions` | 厂门后阶段 | 此前景数据集排除厂门放行后的配送、仓储、零售、消费者储存与制备，以及包装或食品终端处置；仅在已声明的下游生命周期模型中纳入。 | `eu-pef-2021-2279` |
| `boundary_inventory_completeness` | 资源与排放流 | 不得仅因共享或未计量而遗漏水、能源、原料、废水、废气或残余物流。须计量、按有记录的物理驱动因素计算，或披露为未解决数据缺口。 | `eu-bat-fdm-2019-2031` |

## 6. 过程清单结构

### 过程图

| process_id | 过程名称 | 纳入状态 | 纳入条件 | 建模角色 | 定量参考 |
| --- | --- | --- | --- | --- | --- |
| `pea_receiving_preparation` | 豌豆接收、分选、清洗与制备 | `required` | 始终纳入；路线特定制备可使用新鲜、先前冷冻或成熟干豌豆。 | 前景原料制备 | kg 接收豌豆和 kg 已制备豌豆 |
| `mature_pea_soaking` | 成熟干豌豆浸泡 | `conditional` | 仅当成熟加工豌豆由经过浸泡的干籽粒制成时纳入。 | 前景路线调理 | kg 投入干豌豆和 kg 排出浸泡豌豆 |
| `blanching_conditioning` | 漂烫或等效豌豆调理 | `required` | 纳入实际调理路线；如不漂烫，记录等效制备并将漂烫公用工程记为零。 | 前景热处理或配方调理 | kg 调理后豌豆 |
| `filling_closure` | 装填介质制备、装填、排气与气密封口 | `required` | 对范围内货架稳定气密包装产品始终纳入。 | 前景配方和初级包装 | kg 密封装填单元 |
| `thermal_processing_cooling` | 计划热加工与冷却 | `required` | 始终纳入用于达到已声明货架稳定状态的合格路线。 | 前景保藏 | kg 冷却后密封单元 |
| `final_packing_release` | 容器干燥、检验、最终包装与放行 | `required` | 始终纳入；仅在可证明不存在时，次级或三级包装投入方可为零。 | 前景成品放行 | 厂门处放行 1,000 kg 净含量 |
| `onsite_wastewater_treatment` | 厂内废水处理 | `conditional` | 废水在设施运营控制下处理时纳入；否则记录进入外部处理产品系统的废水。 | 前景处理 | kg 或 m3 处理废水 |

### 过程：豌豆接收、分选、清洗与制备（`pea_receiving_preparation`）

#### 输入

##### 产品流

###### 接收豌豆（`received_peas`）

记录进入所代表生产活动的合格豌豆质量，区分新鲜或先前冷冻的未成熟青豌豆与成熟干豌豆，并排除来料拒收批次。

- 选定流：Peas received for preparation
- 流属性/单位：Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- 数量规则：按批次称量合格豌豆并汇总归属于生产活动的批次
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：产品特定（`product_specific`）
- 归一化基准：每 kg 参考产品净含量
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_material_batch_records`
- 来源：`codex-cxs-297-2009-2023`
- 数量范围：接收豌豆的暂定路线筛查估算
  - 范围角色：QA 校验（`qa_guardrail`）
  - 下限：0.5
  - 上限：2.0
  - 单位：kg/kg 参考产品净含量
  - 基准：覆盖液体装填青豌豆和浸泡成熟豌豆生产的宽泛跨路线筛查
  - 基准类型：参考流（`reference_flow`）
  - 证据类型：推理估算（`reasoned_estimate`）

###### 制备用水（`preparation_water`）

记录本过程输送、清洗、分级和设备清洁的供水。通过总用量和净补水字段保留循环水信息。

- 选定流：过程用水
- 流属性/单位：Mass / kg
- 数量规则：计量补水量，并单独报告循环用量
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每 kg 参考产品净含量
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_process_water_records`
- 来源：`codex-cxc-23-1979`; `eu-bat-fdm-2019-2031`
- 数量范围：制备用水暂定筛查范围
  - 范围角色：QA 校验（`qa_guardrail`）
  - 下限：0.1
  - 上限：10
  - 单位：kg/kg 参考产品净含量
  - 基准：扣除单独计量回用量之前，供给接收和制备的总水量
  - 基准类型：参考流（`reference_flow`）
  - 证据类型：推理估算（`reasoned_estimate`）

##### 废物流

#### 输出

##### 产品流

###### 已制备豌豆（`prepared_peas`）

根据直接转移称量或有记录的质量平衡，计算转入浸泡或调理的已制备豌豆质量。

- 选定流：Prepared peas, intermediate
- 流属性/单位：Mass / kg
- 数量规则：计量转移质量，或以合格豌豆减去计量制备拒收物和滞留物
- 数值来源模式：计算值（`calculated_value`）
- 适用范围：产品特定（`product_specific`）
- 归一化基准：每 kg 参考产品净含量
- 基准类型：参考流（`reference_flow`）
- 证据类型：由采集数据计算（`calculated_from_collection`）
- 采集协议：`cp_material_batch_records`
- 来源：`codex-cxs-297-2009-2023`

##### 废物流

###### 制备拒收物与豌豆残余物（`preparation_residues`）

按实际去向记录拒收豌豆、豆荚或植物材料、石块、筛下物及其他分离有机残余物；不得以销售或饲料去向物流抵减豌豆投入。

- 选定流：Pea preparation residues
- 流属性/单位：Mass / kg
- 数量规则：按残余物类型和去向计量质量
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每 kg 参考产品净含量
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_residue_wastewater_records`
- 来源：`eu-bat-fdm-2019-2031`
- 数量范围：暂定残余物筛查范围
  - 范围角色：QA 校验（`qa_guardrail`）
  - 下限：0
  - 上限：0.5
  - 单位：kg/kg 接收豌豆
  - 基准：分选和制备损失的宽泛初始筛查
  - 基准类型：过程输出（`process_output`）
  - 证据类型：推理估算（`reasoned_estimate`）

###### 制备废水（`preparation_wastewater`）

记录离开清洗和制备的废水，并分别报告进入回用、厂内处理或厂外处理的水量。

- 选定流：Food-processing wastewater
- 流属性/单位：Mass / kg
- 数量规则：本过程计量排放或水量平衡
- 数值来源模式：计算值（`calculated_value`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每 kg 参考产品净含量
- 基准类型：参考流（`reference_flow`）
- 证据类型：由采集数据计算（`calculated_from_collection`）
- 采集协议：`cp_residue_wastewater_records`
- 来源：`eu-bat-fdm-2019-2031`
- 数量范围：制备废水暂定筛查范围
  - 范围角色：QA 校验（`qa_guardrail`）
  - 下限：0
  - 上限：10
  - 单位：kg/kg 参考产品净含量
  - 基准：场址水量平衡复核前的宽泛初始筛查
  - 基准类型：参考流（`reference_flow`）
  - 证据类型：推理估算（`reasoned_estimate`）

##### 基本流

### 过程：成熟干豌豆浸泡（`mature_pea_soaking`）

#### 输入

##### 产品流

###### 浸泡用已制备成熟干豌豆（`prepared_dry_peas_for_soaking`）

仅对成熟加工豌豆路线，记录从接收过程转入的干制备豌豆质量。

- 选定流：Prepared mature dried peas, intermediate
- 流属性/单位：Mass / kg
- 数量规则：计量投入浸泡的干豌豆质量
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：产品特定（`product_specific`）
- 归一化基准：每 kg 排出浸泡豌豆
- 基准类型：过程输出（`process_output`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_material_batch_records`
- 来源：`codex-cxs-297-2009-2023`

###### 浸泡水（`soaking_water`）

记录浸泡和漂洗加水量，包括补水量和单独识别的回用量。

- 选定流：过程用水
- 流属性/单位：Mass / kg
- 数量规则：计量加入浸泡批次的水量
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：产品特定（`product_specific`）
- 归一化基准：每 kg 排出浸泡豌豆
- 基准类型：过程输出（`process_output`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_process_water_records`
- 来源：`codex-cxs-297-2009-2023`; `eu-bat-fdm-2019-2031`
- 数量范围：浸泡水暂定筛查范围
  - 范围角色：QA 校验（`qa_guardrail`）
  - 下限：0.2
  - 上限：10
  - 单位：kg/kg 排出浸泡豌豆
  - 基准：批式浸泡和漂洗水的宽泛初始筛查
  - 基准类型：过程输出（`process_output`）
  - 证据类型：推理估算（`reasoned_estimate`）

##### 废物流

#### 输出

##### 产品流

###### 浸泡后成熟豌豆（`soaked_mature_peas`）

记录转入调理的沥水质量，并将批次时间和温度保留为路线元数据。

- 选定流：Soaked mature peas, intermediate
- 流属性/单位：Mass / kg
- 数量规则：计量沥水后的转移质量
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：产品特定（`product_specific`）
- 归一化基准：每浸泡批次及每 kg 参考产品净含量
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_material_batch_records`
- 来源：`codex-cxs-297-2009-2023`

##### 废物流

###### 废浸泡水（`spent_soaking_water`）

记录送往回用或废水处理的浸泡液和漂洗液。

- 选定流：Food-processing wastewater
- 流属性/单位：Mass / kg
- 数量规则：计量排放或批次水量平衡
- 数值来源模式：计算值（`calculated_value`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每 kg 排出浸泡豌豆
- 基准类型：过程输出（`process_output`）
- 证据类型：由采集数据计算（`calculated_from_collection`）
- 采集协议：`cp_residue_wastewater_records`
- 来源：`eu-bat-fdm-2019-2031`
- 数量范围：废浸泡水暂定筛查范围
  - 范围角色：QA 校验（`qa_guardrail`）
  - 下限：0
  - 上限：10
  - 单位：kg/kg 排出浸泡豌豆
  - 基准：批次水量平衡复核前的宽泛初始筛查
  - 基准类型：过程输出（`process_output`）
  - 证据类型：推理估算（`reasoned_estimate`）

##### 基本流

### 过程：漂烫或等效豌豆调理（`blanching_conditioning`）

#### 输入

##### 产品流

###### 进入调理的豌豆（`peas_to_conditioning`）

记录进入实际调理路线的已制备青豌豆或浸泡成熟豌豆。

- 选定流：Prepared peas, intermediate
- 流属性/单位：Mass / kg
- 数量规则：计量调理进料质量
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：产品特定（`product_specific`）
- 归一化基准：每 kg 排出调理豌豆
- 基准类型：过程输出（`process_output`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_material_batch_records`
- 来源：`codex-cxc-23-1979`

###### 调理用热（`conditioning_heat`）

记录漂烫或等效调理使用的外购热或燃料衍生热；不采用热调理时，须以路线证据记录为零。

- 选定流：Process heat
- 流属性/单位：Energy / MJ
- 数量规则：计量热量，或按实测燃料/蒸汽量和有记录的换算计算热量
- 数值来源模式：计算值（`calculated_value`）
- 适用范围：技术特定（`technology_specific`）
- 归一化基准：每 kg 排出调理豌豆
- 基准类型：过程输出（`process_output`）
- 证据类型：由采集数据计算（`calculated_from_collection`）
- 采集协议：`cp_energy_utility_records`
- 来源：`codex-cxc-23-1979`; `eu-bat-fdm-2019-2031`
- 数量范围：调理用热暂定筛查范围
  - 范围角色：QA 校验（`qa_guardrail`）
  - 下限：0
  - 上限：3
  - 单位：MJ/kg 调理豌豆
  - 基准：包括已记录零热等效路线的宽泛初始筛查
  - 基准类型：过程输出（`process_output`）
  - 证据类型：推理估算（`reasoned_estimate`）

##### 废物流

#### 输出

##### 产品流

###### 调理后豌豆（`conditioned_peas`）

记录漂烫、冷却或等效调理后转入装填的豌豆质量。

- 选定流：Conditioned peas, intermediate
- 流属性/单位：Mass / kg
- 数量规则：计量转移质量
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：产品特定（`product_specific`）
- 归一化基准：每 kg 参考产品净含量
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_material_batch_records`
- 来源：`codex-cxc-23-1979`

##### 废物流

###### 调理废水（`conditioning_wastewater`）

记录本过程排放的漂烫和冷却水，扣除已计量的内部回用量。

- 选定流：Food-processing wastewater
- 流属性/单位：Mass / kg
- 数量规则：计量排放或过程水量平衡
- 数值来源模式：计算值（`calculated_value`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每 kg 排出调理豌豆
- 基准类型：过程输出（`process_output`）
- 证据类型：由采集数据计算（`calculated_from_collection`）
- 采集协议：`cp_residue_wastewater_records`
- 来源：`eu-bat-fdm-2019-2031`
- 数量范围：调理废水暂定筛查范围
  - 范围角色：QA 校验（`qa_guardrail`）
  - 下限：0
  - 上限：10
  - 单位：kg/kg 调理豌豆
  - 基准：过程水量平衡复核前的宽泛初始筛查
  - 基准类型：过程输出（`process_output`）
  - 证据类型：推理估算（`reasoned_estimate`）

##### 基本流

### 过程：装填介质制备、装填、排气与气密封口（`filling_closure`）

#### 输入

##### 产品流

###### 送入装填的调理豌豆（`conditioned_peas_to_filling`）

记录装入容器的调理豌豆，并将批次关联到沥干质量和装填控制记录。

- 选定流：Conditioned peas, intermediate
- 流属性/单位：Mass / kg
- 数量规则：计量豌豆装填质量
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：产品特定（`product_specific`）
- 归一化基准：每 kg 密封装填单元
- 基准类型：过程输出（`process_output`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_fill_closure_records`
- 来源：`codex-cxs-297-2009-2023`; `codex-cxc-23-1979`; `ecfr-21-cfr-155-170`

###### 装填介质与可选配料（`packing_medium_ingredients`）

按实际配方分别记录水、盐、糖、调味料、油、酸、硬化剂及其他配料；不得创建所代表产品未使用的配料。

- 选定流：Packing-medium ingredients by formulation
- 流属性/单位：Mass / kg
- 数量规则：计量批次领用量减去计量退料量，并与装填产品核对
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：产品特定（`product_specific`）
- 归一化基准：每 kg 参考产品净含量
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_fill_closure_records`
- 来源：`codex-cxs-297-2009-2023`; `ecfr-21-cfr-155-170`
- 数量范围：装填介质和配料总量暂定筛查
  - 范围角色：QA 校验（`qa_guardrail`）
  - 下限：0
  - 上限：0.5
  - 单位：kg/kg 参考产品净含量
  - 基准：液体介质和可选配料总量的宽泛初始筛查
  - 基准类型：参考流（`reference_flow`）
  - 证据类型：推理估算（`reasoned_estimate`）

###### 初级容器和封口（`primary_packaging`）

按材料和质量记录各容器、盖、封口件、密封剂、标签及直接归属的初级包装材料。

- 选定流：Primary packaging materials by material
- 流属性/单位：Mass / kg
- 数量规则：生产活动领用包装减去计量可复用退料，并与合格和拒收容器核对
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：产品特定（`product_specific`）
- 归一化基准：每 kg 参考产品净含量
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_packaging_records`
- 来源：`codex-cxc-23-1979`
- 数量范围：初级包装暂定筛查范围
  - 范围角色：QA 校验（`qa_guardrail`）
  - 下限：0.02
  - 上限：0.5
  - 单位：kg/kg 参考产品净含量
  - 基准：金属、玻璃、托盒或软包装系统的宽泛跨形式筛查
  - 基准类型：参考流（`reference_flow`）
  - 证据类型：推理估算（`reasoned_estimate`）

##### 废物流

#### 输出

##### 产品流

###### 密封装填单元（`sealed_filled_units`）

记录热加工前合格密封单元，并附装填质量、顶隙或袋厚、适用时的真空状态以及封口检验结果。

- 选定流：Sealed filled pea product, intermediate
- 流属性/单位：Mass / kg
- 数量规则：计量转入热加工的净含量
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：产品特定（`product_specific`）
- 归一化基准：每 kg 参考产品净含量
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_fill_closure_records`
- 来源：`codex-cxc-23-1979`

##### 废物流

###### 装填和封口拒收物（`filling_closure_rejects`）

按材料和去向记录洒失产品、装填不合格品、损坏容器、盖和封口拒收物。

- 选定流：Filling and packaging rejects by material
- 流属性/单位：Mass / kg
- 数量规则：按材料和去向计量拒收质量
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每 kg 参考产品净含量
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_residue_wastewater_records`
- 来源：`codex-cxc-23-1979`; `eu-bat-fdm-2019-2031`
- 数量范围：装填拒收物暂定筛查范围
  - 范围角色：QA 校验（`qa_guardrail`）
  - 下限：0
  - 上限：0.2
  - 单位：kg/kg 参考产品净含量
  - 基准：产品和包装拒收物的宽泛初始筛查
  - 基准类型：参考流（`reference_flow`）
  - 证据类型：推理估算（`reasoned_estimate`）

##### 基本流

### 过程：计划热加工与冷却（`thermal_processing_cooling`）

#### 输入

##### 产品流

###### 进入热加工的密封单元（`sealed_units_to_retort`）

记录进入每个计划工艺批次或连续运行的密封单元。

- 选定流：Sealed filled pea product, intermediate
- 流属性/单位：Mass / kg
- 数量规则：计量进入热加工的净含量
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：产品特定（`product_specific`）
- 归一化基准：每热加工批次及每 kg 参考产品净含量
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_thermal_process_records`
- 来源：`codex-cxc-23-1979`

###### 热加工用热（`thermal_processing_heat`）

记录排气、升温、保温及相关损失所需蒸汽、热水、直接燃料或外购热，并区分回收热。

- 选定流：Process heat or fuel by actual route
- 流属性/单位：Energy / MJ
- 数量规则：计量热量，或用实测蒸汽/燃料量及有记录的换算计算有效热
- 数值来源模式：计算值（`calculated_value`）
- 适用范围：技术特定（`technology_specific`）
- 归一化基准：每 kg 冷却后密封单元
- 基准类型：过程输出（`process_output`）
- 证据类型：由采集数据计算（`calculated_from_collection`）
- 采集协议：`cp_energy_utility_records`
- 来源：`codex-cxc-23-1979`; `eu-bat-fdm-2019-2031`
- 数量范围：热加工用热暂定筛查范围
  - 范围角色：QA 校验（`qa_guardrail`）
  - 下限：0.2
  - 上限：6
  - 单位：MJ/kg 冷却后密封单元
  - 基准：跨容器形式和热回收配置的宽泛初始筛查
  - 基准类型：过程输出（`process_output`）
  - 证据类型：推理估算（`reasoned_estimate`）

###### 热加工用电（`thermal_process_electricity`）

记录本过程泵、杀菌釜循环、输送、控制、压缩空气和冷却的归属电力。

- 选定流：Electricity, supplied to the facility
- 流属性/单位：Energy / kWh
- 数量规则：分表计量，或按实测设备负荷和运行时间计算分担量
- 数值来源模式：计算值（`calculated_value`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每 kg 冷却后密封单元
- 基准类型：过程输出（`process_output`）
- 证据类型：由采集数据计算（`calculated_from_collection`）
- 采集协议：`cp_energy_utility_records`
- 来源：`eu-bat-fdm-2019-2031`
- 数量范围：热加工用电暂定筛查范围
  - 范围角色：QA 校验（`qa_guardrail`）
  - 下限：0.01
  - 上限：1
  - 单位：kWh/kg 冷却后密封单元
  - 基准：批式和连续系统的宽泛初始筛查
  - 基准类型：过程输出（`process_output`）
  - 证据类型：推理估算（`reasoned_estimate`）

###### 冷却水（`cooling_water`）

记录冷却水总循环量、净补水、排污和分流的未污染冷却水回用量，避免重复计算。

- 选定流：Cooling water
- 流属性/单位：Mass / kg
- 数量规则：计量补水和排放，并单独报告总循环量
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每 kg 冷却后密封单元
- 基准类型：过程输出（`process_output`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_process_water_records`
- 来源：`codex-cxc-23-1979`; `eu-bat-fdm-2019-2031`
- 数量范围：净冷却水暂定筛查范围
  - 范围角色：QA 校验（`qa_guardrail`）
  - 下限：0.1
  - 上限：20
  - 单位：kg 补水/kg 冷却后密封单元
  - 基准：一次通过和循环系统的宽泛初始筛查
  - 基准类型：过程输出（`process_output`）
  - 证据类型：推理估算（`reasoned_estimate`）

##### 废物流

#### 输出

##### 产品流

###### 冷却后货架稳定豌豆单元（`cooled_preserved_peas`）

记录冷却后合格的热加工单元，并与计划工艺记录和批号关联。

- 选定流：Peas, otherwise prepared or preserved, not frozen, intermediate before final release
- 流属性/单位：Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- 数量规则：计量冷却后合格净含量
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：产品特定（`product_specific`）
- 归一化基准：每 kg 参考产品净含量
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_thermal_process_records`
- 来源：`codex-cxc-23-1979`

##### 废物流

###### 冷却排污与废水（`cooling_wastewater`）

按去向记录冷却系统排污、受污染冷却水及其他排放；分流的清洁循环水不作为废物输出。

- 选定流：Cooling-system wastewater
- 流属性/单位：Mass / kg
- 数量规则：计量排放或冷却系统水量平衡
- 数值来源模式：计算值（`calculated_value`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每 kg 冷却后密封单元
- 基准类型：过程输出（`process_output`）
- 证据类型：由采集数据计算（`calculated_from_collection`）
- 采集协议：`cp_residue_wastewater_records`
- 来源：`codex-cxc-23-1979`; `eu-bat-fdm-2019-2031`
- 数量范围：冷却废水暂定筛查范围
  - 范围角色：QA 校验（`qa_guardrail`）
  - 下限：0
  - 上限：20
  - 单位：kg/kg 冷却后密封单元
  - 基准：冷却水量平衡复核前的宽泛初始筛查
  - 基准类型：过程输出（`process_output`）
  - 证据类型：推理估算（`reasoned_estimate`）

##### 基本流

### 过程：容器干燥、检验、最终包装与放行（`final_packing_release`）

#### 输入

##### 产品流

###### 送往放行的冷却保藏豌豆单元（`cooled_units_to_release`）

记录转入干燥、检验、编码和最终放行的冷却单元。

- 选定流：Cooled shelf-stable pea units, intermediate
- 流属性/单位：Mass / kg
- 数量规则：计量从冷却转入的净含量
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：产品特定（`product_specific`）
- 归一化基准：每 kg 参考产品净含量
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_finished_product_records`
- 来源：`codex-cxc-23-1979`

###### 次级和三级包装（`secondary_tertiary_packaging`）

按材料记录纸箱、薄膜、托盘、栈板、捆扎带和其他运输包装；仅在可证明不存在某包装层，或可复用包装不在所有权边界内且已单独披露时，方可报告为零。

- 选定流：Secondary and tertiary packaging materials by material
- 流属性/单位：Mass / kg
- 数量规则：包装领用量减去计量可复用退料，并与放行单元核对
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：产品特定（`product_specific`）
- 归一化基准：每 kg 参考产品净含量
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_packaging_records`
- 来源：`eu-pef-2021-2279`
- 数量范围：外层包装暂定筛查范围
  - 范围角色：QA 校验（`qa_guardrail`）
  - 下限：0
  - 上限：0.2
  - 单位：kg/kg 参考产品净含量
  - 基准：散装和零售运输形式的宽泛初始筛查
  - 基准类型：参考流（`reference_flow`）
  - 证据类型：推理估算（`reasoned_estimate`）

##### 废物流

#### 输出

##### 产品流

###### 放行参考产品（`reference_product_output`）

记录厂门处放行的合格成品。本行是定量参考，归一化后必须等于 1,000 kg 净含量。

- 选定流：豌豆，其他制作或腌制，非冷冻 `a5415af7-3575-4017-bd27-3b87650d94bd`
- 流属性/单位：Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- 数量规则：基于实测生产活动放行质量的固定归一化参考数量
- 数值来源模式：固定值（`fixed_value`）
- 适用范围：产品特定（`product_specific`）
- 归一化基准：厂门处 1,000 kg 净含量
- 基准类型：参考流（`reference_flow`）
- 证据类型：身份引用（`identity_reference`）
- 来源：

##### 废物流

###### 后处理拒收单元和包装（`release_rejects`）

按去向记录泄漏、损坏、编码不当或其他拒收单元，以及分离包装。

- 选定流：Post-process rejects by material
- 流属性/单位：Mass / kg
- 数量规则：按去向计量拒收净含量和包装质量
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每 kg 参考产品净含量
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_residue_wastewater_records`
- 来源：`codex-cxc-23-1979`
- 数量范围：放行拒收物暂定筛查范围
  - 范围角色：QA 校验（`qa_guardrail`）
  - 下限：0
  - 上限：0.1
  - 单位：kg/kg 参考产品净含量
  - 基准：生产活动放行得率复核前的宽泛初始筛查
  - 基准类型：参考流（`reference_flow`）
  - 证据类型：推理估算（`reasoned_estimate`）

##### 基本流

### 过程：厂内废水处理（`onsite_wastewater_treatment`）

#### 输入

##### 产品流

###### 进入厂内处理的废水（`wastewater_to_onsite_treatment`）

记录在设施运营控制下处理的合流或分流废水，并保留来源过程关联。

- 选定流：Food-processing wastewater
- 流属性/单位：Mass / kg
- 数量规则：入口表计或各来源过程排放的核对汇总
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每 kg 参考产品净含量
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_residue_wastewater_records`
- 来源：`eu-bat-fdm-2019-2031`
- 数量范围：废水总量暂定筛查范围
  - 范围角色：QA 校验（`qa_guardrail`）
  - 下限：0.2
  - 上限：20
  - 单位：kg/kg 参考产品净含量
  - 基准：进入处理的工艺废水总量宽泛初始筛查
  - 基准类型：参考流（`reference_flow`）
  - 证据类型：推理估算（`reasoned_estimate`）

###### 废水处理用电和化学品（`wastewater_treatment_inputs`）

按实际技术记录电力、曝气、化学品及其他处理投入。

- 选定流：Wastewater-treatment utilities and chemicals by type
- 流属性/单位：Energy or Mass / kWh or kg
- 数量规则：实测领用量或由处理记录计算的分担量
- 数值来源模式：计算值（`calculated_value`）
- 适用范围：技术特定（`technology_specific`）
- 归一化基准：每 kg 处理废水
- 基准类型：过程输出（`process_output`）
- 证据类型：由采集数据计算（`calculated_from_collection`）
- 采集协议：`cp_energy_utility_records`
- 来源：`eu-bat-fdm-2019-2031`
- 数量范围：处理投入暂定筛查范围
  - 范围角色：QA 校验（`qa_guardrail`）
  - 下限：0
  - 上限：1
  - 单位：kWh/kg 处理废水
  - 基准：须由技术特定记录替换的宽泛电力当量筛查
  - 基准类型：过程输出（`process_output`）
  - 证据类型：推理估算（`reasoned_estimate`）

##### 废物流

#### 输出

##### 产品流

##### 废物流

###### 处理后出水与处理残余物（`treated_effluent_residues`）

按质量和去向分别记录处理后出水、污泥、筛渣和回收物；实测或计算的直接排放作为基本流报告。

- 选定流：Treated effluent and wastewater-treatment residues by type
- 流属性/单位：Mass / kg
- 数量规则：计量出水和残余物质量并进行水量平衡核对
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每 kg 参考产品净含量
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_residue_wastewater_records`
- 来源：`eu-bat-fdm-2019-2031`
- 数量范围：处理后物流质量平衡暂定筛查
  - 范围角色：QA 校验（`qa_guardrail`）
  - 下限：0
  - 上限：25
  - 单位：kg/kg 参考产品净含量
  - 基准：按去向建模前的湿出水和湿处理残余物合计
  - 基准类型：参考流（`reference_flow`）
  - 证据类型：推理估算（`reasoned_estimate`）

##### 基本流

## 7. 分配与共产品处理

| rule_id | applies_to | rule | source_ids |
| --- | --- | --- | --- |
| `allocation_avoidance` | 多输出和共享前景操作 | 首先通过细分过程记录、表计、批次和废物流避免分配，使可直接归属于豌豆产品的投入和排放归入该产品。仅当研究明确表示新增功能并报告扩展后结果时，方可采用系统扩展。 | `eu-pef-2021-2279` |
| `allocation_physical_driver` | 无法细分的共享公用工程和服务 | 无法实际细分时，按最相关的实测物理关系分配共享水、热、电、清洁、压缩空气和处理服务，例如产品质量、计量能源、运行时间、水负荷或污染物负荷。记录驱动因素、期间、分母和敏感性。 | `eu-pef-2021-2279`; `eu-bat-fdm-2019-2031` |
| `residue_classification` | 豌豆残余物、拒收产品、废水污泥和回收材料 | 按实际去向及法律/经济状态分类每项输出。无产品功能的输出是废物流并承担处理负荷；具有已记录功能的销售或内部使用输出是共产品，不得从投入质量中静默抵扣。 | `eu-pef-2021-2279`; `eu-bat-fdm-2019-2031` |
| `no_default_avoided_burden` | 回收、饲料利用、能源回收和其他回收路线 | 默认不得应用避免负荷抵扣。生命周期研究采用替代法或其他终端方法时，除非扩展功能明确纳入范围，否则应保持在 gate-to-gate 清单之外，并披露被替代产品、因子、质量关系及敏感性。 | `eu-pef-2021-2279` |

## 8. 前景数据采集、计算与质量规则

### 数据采集协议

| protocol_id | process_id | flow_role | record_type | raw_fields | collection_method | unit | frequency | temporal_coverage | site_scope | aggregation_rule | quality_evidence |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| `cp_material_batch_records` | `pea_receiving_preparation` | 豌豆和中间产品质量 | 收货单、校准秤记录、批次单 | lot_id; pea_route; gross_mass; tare_mass; accepted_mass; reject_mass; transfer_mass; timestamp | 将收货和转移秤记录与批次标识符核对 | kg | 每批来料和生产批次 | 代表期内全部生产活动 | 所代表产品使用的所有生产线和收货点 | 按活动汇总合格和转移质量；归一化前保留路线特定合计 | 校准状态；票据与批次单交叉引用；拒收核对 |
| `cp_process_water_records` | `thermal_processing_cooling` | 制备、浸泡、漂烫、清洁和冷却用水 | 流量计、罐液位记录、回用和排污日志 | process_id; meter_id; opening_reading; closing_reading; make_up; recirculation; discharge; timestamp | 计量净取水和排放；无表计时才采用罐体平衡 | kg or m3 | 每生产活动或班次 | 包括清洁在内的代表运行期 | 每个主要用水过程和共享系统 | 分别计算总用量、净补水、回用和排放；按有记录的物理驱动因素分配共享用水 | 表计校准；水量平衡闭合；回用回路图 |
| `cp_energy_utility_records` | `thermal_processing_cooling` | 热、电、蒸汽、燃料和处理公用工程 | 分表、公用工程账单、蒸汽/燃料表、设备运行记录 | utility_type; meter_id; quantity; unit; pressure_or_calorific_value; equipment_id; runtime; process_id; timestamp | 优先直接分表；否则由实测服务量和有记录的换算计算 | kWh; MJ; kg steam; kg or m3 fuel | 每批、每班或账期并分配到生产活动 | 代表运行期 | 服务所代表过程的全部公用工程系统 | 在不丢弃原单位的情况下换算；仅在单独计量时扣除外送或回收能源 | 表计校准；账单核对；换算因子出处；分配敏感性 |
| `cp_fill_closure_records` | `filling_closure` | 配方、装填、顶隙、真空和封口完整性 | 配方领用、灌装机检查、卷封/封口检验、检重记录 | lot_id; recipe_id; ingredient_mass; pea_fill_mass; medium_mass; net_contents; drained_mass; headspace; vacuum_or_air_content; container_id; closure_result | 采集配方和装填控制记录并将各批次关联到封口检验 | kg; mm; kPa or bar as applicable | 每配方批次及计划检验频次 | 所代表全部生产批次 | 服务所代表产品的全部装填和封口线 | 仅汇总合格装填；拒收装填和封口缺陷单独保留 | 校准秤；检验频次；纠正措施记录；可追溯批号 |
| `cp_packaging_records` | `final_packing_release` | 初级、次级和三级包装 | 材料领退记录、包装规范、拒收日志 | material_id; material_type; unit_mass; issued_count; accepted_count; reject_count; return_count; recycled_content_claim | 将领用包装与合格、拒收、退回和库存变动核对 | kg and count | 每生产活动 | 所代表全部包装形式 | 服务所代表产品的全部包装线和材料领用点 | 按材料计算每放行净含量的质量；参考产品质量不含包装 | 供应商规范；单件质量核验；库存核对 |
| `cp_thermal_process_records` | `thermal_processing_cooling` | 计划工艺与冷却 | 杀菌釜曲线或电子记录、计划工艺规范、冷却水记录 | schedule_id; product_code; container_type; container_dimensions; fill_mass; headspace; initial_temperature; process_temperature; process_time; pressure; pH_if_applicable; cooling_method; cooling_endpoint; deviation_id | 保留完整批式/连续运行记录和合格计划关联 | °C; min or s; kPa or bar; pH; kg; mm | 每次热加工运行 | 每个所代表批次 | 服务所代表产品的全部热加工系统和容器形式 | 不得跨不等效计划平均；确认计划符合后方可汇总 | 仪器校准；合格工艺授权；偏差处置；批次追溯 |
| `cp_residue_wastewater_records` | `onsite_wastewater_treatment` | 拒收物、残余物、废水、污泥和去向 | 地磅、料箱、流量计、废物联单、实验室记录 | source_process; stream_id; mass_or_volume; dry_matter_if_relevant; pH; COD_or_TOC_if_available; destination; treatment_route; timestamp | 计量每项主要流并保留去向证据；未计量废水仅可通过闭合水量平衡计算 | kg or m3; supporting concentration units | 按实际每批、每班或每次外运 | 代表运行期 | 全部来源过程、收集点和厂内处理单元 | 保持物流和去向分离；归一化后汇总 | 联单或发票；表计校准；实验室方法；水和质量平衡闭合 |
| `cp_finished_product_records` | `final_packing_release` | 合格放行产品 | 成品台账、放行证明、检重和库存记录 | lot_id; net_contents; drained_mass; accepted_count; rejected_count; release_mass; release_date; qualifier_set | 将放行净含量与合格产量及库存变动核对 | kg | 每批 | 代表期内全部生产活动 | 服务所代表产品的全部最终检验和成品放行点 | 汇总合格放行净含量；将清单归一化到 1,000 kg | 放行授权；秤校准；批次与配方追溯 |

### 计算规则

| rule_id | Applies to | Formula or rule | Inputs | Output | source_ids |
| --- | --- | --- | --- | --- | --- |
| `calc_reference_normalization` | 每个清单行 | 归一化量 = 生产活动归属量 / 放行净含量质量 × 1,000 kg | 采集行数量；生产活动放行净含量质量 | 每 1,000 kg 参考产品净含量的数量 |  |
| `calc_drained_fraction` | 豌豆含量与装填介质 | 沥干比例 = 试验沥干豌豆质量 / 试验净含量；保留适用尺寸、等级、方法及抽样结果 | 沥干豌豆质量；净含量；豌豆路线及尺寸或等级 | kg 沥干豌豆/kg 净含量及批次符合性结果 | `codex-cxs-297-2009-2023` |
| `calc_material_balance` | 每项制备、装填、冷却和放行步骤 | 投入 + 期初在制品 = 产品 + 废物 + 有计量的废水携带固形物 + 期末在制品 + 已记录平衡差 | 实测投入、产出、拒收、残余物、洒失和库存变动质量 | 各过程平衡差和百分比闭合 | `eu-bat-fdm-2019-2031` |
| `calc_utility_conversion` | 蒸汽、燃料、电力和热 | 使用来源特定压力/焓值、热值或单位换算来转换实测服务量；保留原始量和因子 | 表计读数；公用工程规范；换算因子 | 每参考流的 kWh 或 MJ，附因子出处 | `eu-bat-fdm-2019-2031` |
| `calc_shared_resource_allocation` | 共享公用工程和处理 | 归属量 = 共享总量 × 所代表产品的有记录物理驱动因素 / 全部使用者同一驱动因素之和 | 共享表计总量；各产品选择的物理驱动因素；分母总体 | 分配的水、能源、清洁或处理数量及敏感性 | `eu-pef-2021-2279`; `eu-bat-fdm-2019-2031` |

### 数据质量要求

| requirement_id | Applies to | Requirement | Evidence |
| --- | --- | --- | --- |
| `dq_identity_traceability` | 参考产品和全部产品批次 | 每项清单生产活动须关联接收豌豆批次、配方、容器规范、计划工艺记录、合格成品批次和参考产品限定信息。 | 收货单；配方和包装规范；批号；放行记录；计划工艺标识符 |
| `dq_measurement_control` | 质量、水、能源、时间、温度、压力和 pH 记录 | 使用适合测量的校准或核验仪器。保留原始读数、单位、换算因子、缺失数据替代和校准状态。 | 校准证书；表计日志；实验室方法；换算因子记录 |
| `dq_temporal_representativeness` | 前景活动数据 | 覆盖具有代表性的生产期，包括启动、正常运行、清洁和可归属的产品换线。说明季节性豌豆活动、停机及排除的异常事件。 | 生产活动计划；生产台账；运行和清洁日志 |
| `dq_completeness_balance` | 原料、产品、包装、水、能源、残余物和废水 | 在过程或生产活动层级核对材料和水量平衡并调查差异。不得仅因共享表计或无表计而将重要物流静默记为零。 | 材料平衡；水量平衡；未解决缺口登记；与 BAT 一致的资源清单 |
| `dq_thermal_conformity` | 每个放行热加工批次 | 将每批关联到合格计划工艺、关键因素记录、封口控制、冷却记录、偏差和放行处置。通用 PCR 范围不能证明商业无菌。 | 合格计划工艺规范；工艺曲线；封口检验；冷却记录；偏差批准 |
| `dq_source_and_estimate_status` | 全部非前景值 | 将推理估算标记为暂定并与采集值分开，在激活前用来源支持或经审查的前景范围替换。 | 结构化数量证据类型；来源引用；审查记录 |

## 9. 校验规则

| rule_id | applies_to | rule | source_ids |
| --- | --- | --- | --- |
| `validate_reference_identity` | 参考流和元数据 | 产品流 UUID、Mass 属性、质量单位组、1,000 kg 净含量数量或必需产品限定信息缺失/不一致时校验失败。包装质量必须与参考净含量分开。 |  |
| `validate_scope_route` | 产品分类和过程路线 | 确认产品为货架稳定、非冷冻且为定义性豌豆产品。以成熟干豌豆为投入时必须有浸泡过程；不得将需冷藏、冷冻、发酵、醋保藏或复合产品静默视为范围内产品。 | `codex-cxs-297-2009-2023`; `ecfr-21-cfr-155-170` |
| `validate_process_coverage` | 前景过程图 | 每项适用过程都必须有记录值或明确的零/不适用理由，包括清洁、拒收产品、包装、热加工、冷却以及废水或残余物处理。 | `codex-cxc-23-1979`; `eu-bat-fdm-2019-2031` |
| `validate_thermal_process` | 密封产品放行 | 放行批次缺少合格计划工艺标识符、容器与装填规范、关键时间/温度记录、封口控制、冷却方法或已解决的偏差处置时校验失败。不得通过暂定能源范围验证无菌。 | `codex-cxc-23-1979` |
| `validate_mass_and_water_balance` | 每项生产活动和过程 | 标记未解释的质量或水量不平衡，并要求生产者说明采用的调查阈值；本候选 PCR 不施加通用数值容差。 | `eu-bat-fdm-2019-2031` |
| `validate_allocation` | 共享操作和多输出物流 | 可行时要求细分；否则要求有记录的相关物理分配驱动因素和敏感性。拒绝未披露的经济分配、销售残余物抵减或默认避免负荷抵扣。 | `eu-pef-2021-2279` |
| `validate_provisional_ranges` | 推理估算范围 | 所有 `reasoned_estimate` 范围仅作为 QA 提示。超出范围的前景值应标记复核而非被替换；激活前须替换重要暂定范围，或通过方法学审查明确接受。 |  |

## 10. 发布数据集画像

| 字段 | 值 |
| --- | --- |
| dataset_role | 制作或保藏非冷冻豌豆的前景制造数据包，具有厂门参考产品和过程分解清单 |
| downstream_use | 审查后可用于发布 `secondary_dataset` 或 `background_dataset`，并可关联到 cradle-to-gate 或 cradle-to-grave 的 `process` 和 `lifecyclemodel` 研究 |
| allowed_use | 当满足必需限定、计划工艺证据、关联上游数据集、分配和数据质量披露时，用于路线、地域、时间、配方和容器具有代表性的建模 |
| excluded_use | 直接表示冷冻、冷藏、仅干制、发酵、醋保藏、泥状、汤类或复合豌豆产品；仅依据本 PCR 进行食品安全放行；未披露地转用于实质不同的豌豆路线或容器系统 |
| required_metadata | PCR id 和状态；产品流 UUID；CPC 映射上下文；豌豆成熟路线；相关时的品种/形态/尺寸或等级；配方与装填介质；净含量和沥干质量约定；容器与封口；真空或酸化状态；计划工艺标识符；设施地域；技术；参考期；前景采集覆盖；关联上游数据集；分配和 cut-off 决策 |
| required_quality_disclosure | 实测、计算和暂定值；仪器和校准状态；时间和场址覆盖；材料和水量平衡闭合；共享表计分配；数据缺口；推理估算范围；热加工和封口偏差；废物去向；上游数据集代表性 |
| update_trigger | 豌豆路线、配方、产品状态、容器几何或封口、计划热加工、冷却系统、设施技术、分配方法、参考流身份、适用产品规范或重要范围证据发生实质变化 |

## 11. 数据源

| 来源 id | 类型 | 引用 | 用途 |
| --- | --- | --- | --- |
| `codex-cxs-297-2009-2023` | `standard` | Codex Alimentarius，CXS 297-2009，Standard for Certain Canned Vegetables，2009 年通过、修订至 2023 年，官方 PDF：https://workspace.fao.org/sites/codex/Standards/CXS%20297-2009/CXS_297e.pdf（检索日期 2026-08-11） | 产品范围与定义；青豌豆和成熟加工豌豆路线；清洗与制备；装填介质；热保藏；沥干质量和质量控制 |
| `codex-cxc-23-1979` | `official_guidance` | Codex Alimentarius，CXC 23-1979，Code of Hygienic Practice for Low-Acid and Acidified Low-Acid Canned Foods，修订至 1993 年、2011 年编辑勘误，官方 PDF：https://workspace.fao.org/sites/codex/Standards/CXC%2023-1979/CXC_023e.pdf（检索日期 2026-08-11） | 原料制备；漂烫；装填和顶隙；排气；封口控制；合格计划工艺；热加工记录；冷却；冷却水质量；放行和偏差规则 |
| `ecfr-21-cfr-155-170` | `standard` | U.S. Electronic Code of Federal Regulations，21 CFR 155.170，Canned peas，https://www.ecfr.gov/current/title-21/chapter-I/subchapter-B/part-155/subpart-B/section-155.170（检索日期 2026-08-11） | 佐证法规产品身份；可选配料；水性装填介质；密封和热加工 |
| `eu-bat-fdm-2019-2031` | `official_guidance` | European Commission，Commission Implementing Decision (EU) 2019/2031 establishing BAT conclusions for the food, drink and milk industries，ELI：http://data.europa.eu/eli/dec_impl/2019/2031/oj（检索日期 2026-08-11） | 过程流程图；水、能源、原料、废水、废气和残余物清单；过程层级监测；清洁与用水控制；资源效率 |
| `eu-pef-2021-2279` | `official_guidance` | European Commission，Recommendation (EU) 2021/2279 on Environmental Footprint methods，合并 ELI：http://data.europa.eu/eli/reco/2021/2279/2021-12-30（检索日期 2026-08-11） | 系统边界披露；前景数据特定性；多功能层级；物理分配前优先细分或系统扩展；下游生命周期用途 |
