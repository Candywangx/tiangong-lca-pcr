---
pcr_id: pcr.food-products-beverages-and-tobacco-textiles-apparel-and-leather-products.meat-fish-fruits-vegetables-oils-and-fats.sausages-and-similar-products-of-meat-offal-or-blood
language: zh-CN
status: candidate
sync_with: pcr.en-US.md
---

# 香肠及类似肉、内脏或血制品

## 1. 范围与适用性

本候选 PCR 覆盖 CPC 21184 中由肉、一种明确命名的可食器官或血液制成的一个具体香肠或香肠类似形态产品。覆盖形态包括鲜香肠、熟制香肠、腌制香肠、发酵香肠、干香肠、烟熏香肠、肝或另一种已命名器官香肠、血香肠或血布丁；加朗汀、肉酱、pâté 或 rillettes 仅在以肠衣或香肠形态供应时覆盖。精确前景数据包必须锁定一个产品形态、每项动物源组分的动物物种及解剖或血液身份、一个已批准配方、顺序化处理路线、肠衣或精确形状成形方法、最终市场状态和储存条件。`un-cpc-3-2025`、`codex-cxs-192-1995`

完整餐食不在范围内。未以肠衣或香肠形态供应的肉、内脏、血液、加朗汀、肉酱、pâté 和 rillettes 制品不在范围内。动物饲养、屠宰、配料制造、肠衣制造、包装制造和外购能源生产属于上游背景要求。厂门后的配送、零售、消费者制备、使用和寿命终止不在前景边界内。列明的任何物种、配方、处理、包装、废物、污染物或排放均不是类别默认项：实际发生但卡片中没有的范围内交换，必须在校验前新增一张精确原子行。`un-cpc-3-2025`、`eu-pef-2021-2279`、`codex-cxc-58-2005`

## 2. 产品类别识别

| 字段 | 值 |
| --- | --- |
| canonical_pcr_id | `pcr.food-products-beverages-and-tobacco-textiles-apparel-and-leather-products.meat-fish-fruits-vegetables-oils-and-fats.sausages-and-similar-products-of-meat-offal-or-blood` |
| classification_refs | CPC 3.0：21184 — 香肠及类似肉、内脏或血制品（`exact`） |
| covered_products | 由肉、一种已命名可食器官或血液制成的一个具体香肠或香肠类似产品；包括鲜、腌制、发酵、干燥、烟熏、熟制、冷藏、冷冻或货架稳定路线；加朗汀、肉酱、pâté 或 rillettes 仅限肠衣或香肠形态。 |
| excluded_products | 完整餐食；未以肠衣或香肠形态供应的相关肉、内脏、血液、加朗汀、肉酱、pâté 或 rillettes 制品；对物种、器官、血液来源、配方、处理路线或市场状态取平均的数据包。 |
| representative_product | 与一张单一最终产品卡匹配的 1 kg 产品特定净合格香肠或香肠类似制品。 |
| production_route | 从配料接收开始的精确批次顺序，仅包含粉碎、混合、成形、腌制、发酵、干燥、烟熏、热处理、冷却、包装、储存、卫生、场内供热和场内废水处理中实际适用的已命名操作。 |
| market_state | 一个有记录的放行状态，例如鲜制冷藏、冷冻、熟制冷藏、发酵干燥货架稳定或另一项明确范围内状态；不得合并状态。 |

## 3. 参考流

| 字段 | 值 |
| --- | --- |
| What | 在制造工厂厂门处提供一个具体且符合规格的 CPC 21184 香肠或香肠类似食品。 |
| How much | 1 kg 净合格可食产品，不含每种包装材料。 |
| How well | 符合锁定产品规格、配方版本、过程控制放行准则及最终温度或货架稳定条件。 |
| How long or cycle | 一个放行生产批次；披露截至厂门放行的储存时长。 |
| reference_flow_link | 参考数量仅赋予 `packaging_cold_storage_release` 中一个具体最终产品输出行；其他最终产品行均不适用。 |

| 字段 | 值 |
| --- | --- |
| 参考数量 | 1 kg |
| 参考产品流 | Sausages and similar products of meat, offal or blood `d4e41d5c-a905-4fb7-ad9d-8f442be1f833` |
| 参考流属性 | Mass `93a60a56-a3c8-11da-a746-0800200b9a66` |
| 参考单位组 | Units of mass `93a60a57-a4c8-11da-a746-0800200c9a66` |
| 参考单位 | kg |
| 必需限定信息 | 精确产品形态；每项动物源配方组分的动物物种及骨骼肌肉或已命名器官或血液身份；精确质量配方及版本；顺序化处理路线；肠衣物种或肠衣聚合物或精确香肠形状成形方法；适用时的处理时间、温度、湿度、气流及烟熏施用；放行状态及储存温度；精确包装组成；净合格质量；共产品、不合格品、废物、废水和排放去向 |

构建前景数据包时，每项必需限定信息必须在数据集元数据、过程说明、参考流备注、产品说明或等效数据包字段中声明。宽泛的 Tiangong 参考流只提供类别身份，不允许多形态、多物种、多配方或多状态平均。`un-cpc-3-2025`、`eu-pef-2021-2279`、`codex-cxs-192-1995`

## 4. 计量与单位规则

| rule_id | 适用对象 | 必需流属性 | 必需单位 | 规则 | source_ids |
| --- | --- | --- | --- | --- | --- |
| `reference_net_mass` | 参考产品 | Mass `93a60a56-a3c8-11da-a746-0800200b9a66` | kg | 采用厂门处 1 kg 净合格可食产品；从参考质量中排除每一种包装材料。 | `un-cpc-3-2025`、`eu-pef-2021-2279` |
| `single_product_lock` | 全部前景行 | 产品身份 | 一个精确路线 | 采集数量前，锁定一个具体产品形态、动物及组织或血液配方、精确配方、顺序化处理路线和最终市场状态。 | `un-cpc-3-2025`、`eu-pef-2021-2279`、`codex-cxs-192-1995` |
| `recipe_mass_basis` | 配方组分 | Mass | kg | 按实际供应状态记录每种具体组分的实测质量；保留等级、纯度、水分基准和批次，不得用配方默认值替代。 | `eu-pef-2021-2279`、`codex-cxs-192-1995` |
| `water_ice_separation` | 配方水与冰 | Mass | kg | 将饮用级液态水和饮用级冰作为不同交换记录，并防止冰融化后重复计数。 | `eu-pef-2021-2279` |
| `energy_carrier_separation` | 电力与热载体 | Energy or mass | kWh; MJ; kg | 将电力、外购蒸汽、外购热水、场内蒸汽、场内热水、天然气、柴油和 LPG 保持为不同载体。 | `eu-pef-2021-2279`、`jrc-sa-bref-2024` |
| `refrigerant_identity` | 制冷系统 | Mass | kg | 按设备分别核对 R717、R744 和 R290；不得报告通用制冷剂数量。 | `eu-pef-2021-2279`、`jrc-sa-bref-2024` |
| `packaging_exclusion` | 包装 | Mass | kg | 将包装排除在 1 kg 参考数量之外，同时把每种包装材料记录为独立清单交换。 | `eu-pef-2021-2279` |
| `waste_state_consistency` | 产品与废物质量 | Mass | kg | 在同一生产批次内、按已披露的湿基或干基测量产品、不合格品、残留物和材料特定包装废料。 | `eu-pef-2021-2279`、`jrc-sa-bref-2024` |
| `wastewater_load` | 废水污染物 | Mass and volume | kg; m3 | 仅依据污染物特定浓度和匹配的实测废水体积计算每种污染物负荷。 | `eu-pef-2021-2279`、`jrc-sa-bref-2024` |
| `normalization` | 全部数量行 | Reference mass | kg/kg | 仅在路线特定质量核对后，把可归属于批次的记录归一化至 1 kg 净合格输出。 | `eu-pef-2021-2279` |

## 5. 系统边界

### 边界概化

| 字段 | 值 |
| --- | --- |
| declared_starting_condition | 在香肠制造工厂物理接收的食品级肉、每种已命名可食器官、每种已命名血液来源、动物脂肪、肠衣、配方组分、包装材料和外购公用工程。 |
| starting_condition_role | 工厂门前景投入；其上游生产由独立供应商或背景数据集表示。 |
| product_classification_scope | 仅 CPC 21184，并受限于一个具体香肠或香肠类似产品路线；排除完整餐食及肠衣或香肠形态以外的相关产品。 |
| recursive_input_rule | 外购 CPC 21184 中间产品作为一个具有自身物种、解剖物料、配方、处理状态和供应商数据集的精确产品输入记录；不得在接收行内递归重建其上游制造。 |
| upstream_dataset_requirement | 动物生产与屠宰、每种食品配料与添加剂、肠衣、包装材料、外购电力与热量、每种燃料、制冷剂制造、清洗化学品和废水处理化学品均需要上游数据集。 |
| disclosure | 披露精确产品身份、配方版本、批次边界、过程顺序、适用条件操作、共享资源归属、内部返工、最终状态、排除阶段及每个未解析流 UUID。 |

### 边界规则

| rule_id | 适用对象 | 规则 | source_ids |
| --- | --- | --- | --- |
| `boundary_start` | 前景系统 | 从制造工厂接收食品级肉、已命名器官、血液、脂肪、肠衣、配方组分、包装材料和外购公用工程开始。 | `un-cpc-3-2025`、`eu-pef-2021-2279`、`codex-cxc-58-2005` |
| `upstream_requirement` | 动物源与配方投入 | 动物生产、屠宰、配料制造、肠衣制造、包装制造和外购能源生产需要独立上游数据集。 | `eu-pef-2021-2279`、`jrc-sa-bref-2024` |
| `route_lock` | 前景数据包 | 一个数据包必须只表示一个产品形态、一项精确动物源配方、一个已批准配方版本、一个顺序化处理路线和一个最终市场状态。 | `un-cpc-3-2025`、`eu-pef-2021-2279`、`codex-cxs-192-1995` |
| `scope_inclusions` | 产品身份 | 纳入香肠、肝或其他已命名器官香肠、血香肠或血布丁；加朗汀、肉酱、pâté 或 rillettes 仅在以肠衣或香肠形态供应时纳入。 | `un-cpc-3-2025`、`codex-cxs-192-1995` |
| `scope_exclusions` | 产品身份 | 排除完整预制餐食，以及未以肠衣或香肠形态供应的相关肉、内脏、血液、加朗汀、肉酱、pâté 或 rillettes 制品。 | `un-cpc-3-2025` |
| `route_processes` | 处理顺序 | 仅当锁定路线包含相应已命名操作时，纳入腌制、发酵、干燥、烟熏、热处理、冷冻或冷藏。 | `codex-cxs-192-1995`、`codex-cxc-58-2005` |
| `cleaning_boundary` | 卫生 | 纳入可归属于生产批次的产品接触面与区域清洗、每种清洗化学品、所得废水和残留物移除。 | `jrc-sa-bref-2024`、`codex-cxc-58-2005` |
| `wastewater_boundary` | 废水处理 | 场内处理仅在其物理上位于前景边界内时纳入；否则记录跨越工厂边界的每个废水流。 | `jrc-sa-bref-2024`、`eu-pef-2021-2279` |
| `heat_boundary` | 供热 | 热量跨越工厂边界时使用外购热卡；燃料和给水跨越边界时使用场内供热卡；不得对同一热量同时计数。 | `eu-pef-2021-2279`、`jrc-sa-bref-2024` |
| `rework_boundary` | 返工料 | 内部返工料保留在批次质量平衡内且只记录一次；从另一生产批次输入的返工料是单独命名的产品输入。 | `eu-pef-2021-2279` |
| `downstream_exclusion` | 下游阶段 | 厂门后的配送、零售、消费者制备、使用以及包装或食品寿命终止不在前景边界内。 | `eu-pef-2021-2279` |
| `unlisted_atomic_row` | 未列明的合法变体 | 当范围内物种、已命名器官、血液来源、配方组分、肠衣、产品形态、包装材料、废物、污染物或排放未出现在卡片中时，须在数据集校验前新增一张精确原子行。 | `un-cpc-3-2025`、`eu-pef-2021-2279`、`codex-cxs-192-1995` |

## 6. 过程清单结构

### 过程图

| process_id | 过程名称 | 纳入状态 | 纳入条件 | 建模角色 | 定量参考 |
| --- | --- | --- | --- | --- | --- |
| `formulation_material_receiving` | 配方物料接收与冷藏 | `required` | 对进入工厂的食品级动物源物料及其他配方投入始终纳入。 | 前景接收、批次身份、称量和冷藏活动。 | 锁定生产批次中每种入厂物料的质量 |
| `comminution_batching_mixing` | 粉碎、配料与混合 | `required` | 始终纳入；记录锁定产品实际使用的精确配方和设备顺序。 | 前景粒径减小、配方投料和混合物制备。 | 一个产品特定混合批次的质量 |
| `portion_forming` | 定量成形 | `required` | 始终纳入实际使用的精确肠衣灌装或香肠形状成形操作。 | 前景灌装、结扎、封夹、模塑或等效的产品特定成形。 | 处理前一个具体成形产品的质量 |
| `curing` | 腌制 | `conditional` | 仅在锁定处理顺序包含腌制步骤时纳入。 | 在有记录的时间和温度条件下进行盐或腌制剂接触的前景过程。 | 一个具体腌制中间产品的质量 |
| `fermentation` | 发酵 | `conditional` | 仅在锁定处理顺序包含受控发酵时纳入。 | 前景发酵剂添加与受控发酵。 | 一个具体发酵中间产品的质量 |
| `drying` | 干燥 | `conditional` | 仅在锁定处理顺序包含热风、真空或另一项明确命名的干燥技术时纳入。 | 在有记录的时间、温度、湿度和气流条件下进行前景脱水。 | 一个具体干燥中间产品的质量 |
| `smoking` | 烟熏 | `conditional` | 仅在锁定处理顺序包含直接烟熏或烟熏液处理时纳入。 | 针对一个明确产品的前景烟气生成或烟熏液施用。 | 一个具体烟熏中间产品的质量 |
| `thermal_processing` | 热处理与受控冷却 | `conditional` | 仅在锁定处理顺序包含蒸煮、巴氏处理、灭菌或另一项明确命名的热处理时纳入。 | 具有成文过程参数并随后受控冷却的前景热处理。 | 一个具体热处理后中间产品的质量 |
| `packaging_cold_storage_release` | 包装、冷藏与放行 | `required` | 始终纳入实际包装系统、最终储存状态和一个具体合格产品输出。 | 前景初级与次级包装、最终温度控制、检验和厂门放行。 | 1 kg 不含包装的净合格可销售产品 |
| `hygiene_cleaning_sanitation` | 卫生清洗与消毒 | `required` | 始终纳入可归属于锁定生产批次的产品接触面和区域清洗。 | 前景清洗、漂洗、消毒和残留物移除。 | 可归属于锁定产品批次的清洗批次 |
| `onsite_heat_generation` | 场内供热 | `conditional` | 仅在前景工厂内部产生蒸汽或热水时纳入。 | 用于内部供应蒸汽或热水的前景锅炉或加热器运行。 | 可归属于锁定批次的场内蒸汽或热水实测输出 |
| `onsite_wastewater_treatment` | 场内废水处理 | `conditional` | 仅在废水于前景工厂边界内处理时纳入。 | 对两个已命名废水流进行前景物理、化学和生物处理。 | 锁定生产批次的实测处理废水体积 |

### 过程：配方物料接收与冷藏（`formulation_material_receiving`）

前景接收、批次身份、称量和冷藏活动。对进入工厂的食品级动物源物料及其他配方投入始终纳入。

#### 输入

##### 产品流

###### 接收猪骨骼肌肉（`receive_pork_skeletal_meat`）

Pork skeletal meat 在本过程中作为一项原子输入交换记录；其不得代替任何其他物料、载体、废物或排放。

- 选定流：Pork skeletal meat
- 流属性/单位：Mass / kg
- 数量规则：记录该交换针对锁定批次跨越本过程边界的前景实测数量。
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：产品特定（`product_specific`）
- 归一化基准：每 1 kg 厂门处净合格可销售参考产品
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_animal_material_mass`
- 来源：`eu-pef-2021-2279`、`codex-cxc-58-2005`、`codex-cxs-192-1995`
- UUID 状态：未解析；在精确双核核验前保持为空。
- 适用性：仅在 Pork skeletal meat 针对单一锁定产品配方和处理顺序实际跨越过程边界时记录；否则将该原子行标记为不适用。
- 不确定性：保留秤分辨率、校准状态、去皮方法、适用时的水分基准以及批次核对差异。

###### 接收牛骨骼肌肉（`receive_beef_skeletal_meat`）

Beef skeletal meat 在本过程中作为一项原子输入交换记录；其不得代替任何其他物料、载体、废物或排放。

- 选定流：Beef skeletal meat
- 流属性/单位：Mass / kg
- 数量规则：记录该交换针对锁定批次跨越本过程边界的前景实测数量。
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：产品特定（`product_specific`）
- 归一化基准：每 1 kg 厂门处净合格可销售参考产品
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_animal_material_mass`
- 来源：`eu-pef-2021-2279`、`codex-cxc-58-2005`、`codex-cxs-192-1995`
- UUID 状态：未解析；在精确双核核验前保持为空。
- 适用性：仅在 Beef skeletal meat 针对单一锁定产品配方和处理顺序实际跨越过程边界时记录；否则将该原子行标记为不适用。
- 不确定性：保留秤分辨率、校准状态、去皮方法、适用时的水分基准以及批次核对差异。

###### 接收鸡骨骼肌肉（`receive_chicken_skeletal_meat`）

Chicken skeletal meat 在本过程中作为一项原子输入交换记录；其不得代替任何其他物料、载体、废物或排放。

- 选定流：Chicken skeletal meat
- 流属性/单位：Mass / kg
- 数量规则：记录该交换针对锁定批次跨越本过程边界的前景实测数量。
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：产品特定（`product_specific`）
- 归一化基准：每 1 kg 厂门处净合格可销售参考产品
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_animal_material_mass`
- 来源：`eu-pef-2021-2279`、`codex-cxc-58-2005`、`codex-cxs-192-1995`
- UUID 状态：未解析；在精确双核核验前保持为空。
- 适用性：仅在 Chicken skeletal meat 针对单一锁定产品配方和处理顺序实际跨越过程边界时记录；否则将该原子行标记为不适用。
- 不确定性：保留秤分辨率、校准状态、去皮方法、适用时的水分基准以及批次核对差异。

###### 接收火鸡骨骼肌肉（`receive_turkey_skeletal_meat`）

Turkey skeletal meat 在本过程中作为一项原子输入交换记录；其不得代替任何其他物料、载体、废物或排放。

- 选定流：Turkey skeletal meat
- 流属性/单位：Mass / kg
- 数量规则：记录该交换针对锁定批次跨越本过程边界的前景实测数量。
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：产品特定（`product_specific`）
- 归一化基准：每 1 kg 厂门处净合格可销售参考产品
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_animal_material_mass`
- 来源：`eu-pef-2021-2279`、`codex-cxc-58-2005`、`codex-cxs-192-1995`
- UUID 状态：未解析；在精确双核核验前保持为空。
- 适用性：仅在 Turkey skeletal meat 针对单一锁定产品配方和处理顺序实际跨越过程边界时记录；否则将该原子行标记为不适用。
- 不确定性：保留秤分辨率、校准状态、去皮方法、适用时的水分基准以及批次核对差异。

###### 接收绵羊骨骼肌肉（`receive_sheep_skeletal_meat`）

Sheep skeletal meat 在本过程中作为一项原子输入交换记录；其不得代替任何其他物料、载体、废物或排放。

- 选定流：Sheep skeletal meat
- 流属性/单位：Mass / kg
- 数量规则：记录该交换针对锁定批次跨越本过程边界的前景实测数量。
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：产品特定（`product_specific`）
- 归一化基准：每 1 kg 厂门处净合格可销售参考产品
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_animal_material_mass`
- 来源：`eu-pef-2021-2279`、`codex-cxc-58-2005`、`codex-cxs-192-1995`
- UUID 状态：未解析；在精确双核核验前保持为空。
- 适用性：仅在 Sheep skeletal meat 针对单一锁定产品配方和处理顺序实际跨越过程边界时记录；否则将该原子行标记为不适用。
- 不确定性：保留秤分辨率、校准状态、去皮方法、适用时的水分基准以及批次核对差异。

###### 接收山羊骨骼肌肉（`receive_goat_skeletal_meat`）

Goat skeletal meat 在本过程中作为一项原子输入交换记录；其不得代替任何其他物料、载体、废物或排放。

- 选定流：Goat skeletal meat
- 流属性/单位：Mass / kg
- 数量规则：记录该交换针对锁定批次跨越本过程边界的前景实测数量。
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：产品特定（`product_specific`）
- 归一化基准：每 1 kg 厂门处净合格可销售参考产品
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_animal_material_mass`
- 来源：`eu-pef-2021-2279`、`codex-cxc-58-2005`、`codex-cxs-192-1995`
- UUID 状态：未解析；在精确双核核验前保持为空。
- 适用性：仅在 Goat skeletal meat 针对单一锁定产品配方和处理顺序实际跨越过程边界时记录；否则将该原子行标记为不适用。
- 不确定性：保留秤分辨率、校准状态、去皮方法、适用时的水分基准以及批次核对差异。

###### 接收猪肝（`receive_pig_liver`）

Pig liver 在本过程中作为一项原子输入交换记录；其不得代替任何其他物料、载体、废物或排放。

- 选定流：Pig liver
- 流属性/单位：Mass / kg
- 数量规则：记录该交换针对锁定批次跨越本过程边界的前景实测数量。
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：产品特定（`product_specific`）
- 归一化基准：每 1 kg 厂门处净合格可销售参考产品
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_animal_material_mass`
- 来源：`eu-pef-2021-2279`、`codex-cxc-58-2005`、`codex-cxs-192-1995`
- UUID 状态：未解析；在精确双核核验前保持为空。
- 适用性：仅在 Pig liver 针对单一锁定产品配方和处理顺序实际跨越过程边界时记录；否则将该原子行标记为不适用。
- 不确定性：保留秤分辨率、校准状态、去皮方法、适用时的水分基准以及批次核对差异。

###### 接收牛肝（`receive_cattle_liver`）

Cattle liver 在本过程中作为一项原子输入交换记录；其不得代替任何其他物料、载体、废物或排放。

- 选定流：Cattle liver
- 流属性/单位：Mass / kg
- 数量规则：记录该交换针对锁定批次跨越本过程边界的前景实测数量。
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：产品特定（`product_specific`）
- 归一化基准：每 1 kg 厂门处净合格可销售参考产品
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_animal_material_mass`
- 来源：`eu-pef-2021-2279`、`codex-cxc-58-2005`、`codex-cxs-192-1995`
- UUID 状态：未解析；在精确双核核验前保持为空。
- 适用性：仅在 Cattle liver 针对单一锁定产品配方和处理顺序实际跨越过程边界时记录；否则将该原子行标记为不适用。
- 不确定性：保留秤分辨率、校准状态、去皮方法、适用时的水分基准以及批次核对差异。

###### 接收鸡肝（`receive_chicken_liver`）

Chicken liver 在本过程中作为一项原子输入交换记录；其不得代替任何其他物料、载体、废物或排放。

- 选定流：Chicken liver
- 流属性/单位：Mass / kg
- 数量规则：记录该交换针对锁定批次跨越本过程边界的前景实测数量。
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：产品特定（`product_specific`）
- 归一化基准：每 1 kg 厂门处净合格可销售参考产品
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_animal_material_mass`
- 来源：`eu-pef-2021-2279`、`codex-cxc-58-2005`、`codex-cxs-192-1995`
- UUID 状态：未解析；在精确双核核验前保持为空。
- 适用性：仅在 Chicken liver 针对单一锁定产品配方和处理顺序实际跨越过程边界时记录；否则将该原子行标记为不适用。
- 不确定性：保留秤分辨率、校准状态、去皮方法、适用时的水分基准以及批次核对差异。

###### 接收猪心（`receive_pig_heart`）

Pig heart 在本过程中作为一项原子输入交换记录；其不得代替任何其他物料、载体、废物或排放。

- 选定流：Pig heart
- 流属性/单位：Mass / kg
- 数量规则：记录该交换针对锁定批次跨越本过程边界的前景实测数量。
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：产品特定（`product_specific`）
- 归一化基准：每 1 kg 厂门处净合格可销售参考产品
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_animal_material_mass`
- 来源：`eu-pef-2021-2279`、`codex-cxc-58-2005`、`codex-cxs-192-1995`
- UUID 状态：未解析；在精确双核核验前保持为空。
- 适用性：仅在 Pig heart 针对单一锁定产品配方和处理顺序实际跨越过程边界时记录；否则将该原子行标记为不适用。
- 不确定性：保留秤分辨率、校准状态、去皮方法、适用时的水分基准以及批次核对差异。

###### 接收牛心（`receive_cattle_heart`）

Cattle heart 在本过程中作为一项原子输入交换记录；其不得代替任何其他物料、载体、废物或排放。

- 选定流：Cattle heart
- 流属性/单位：Mass / kg
- 数量规则：记录该交换针对锁定批次跨越本过程边界的前景实测数量。
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：产品特定（`product_specific`）
- 归一化基准：每 1 kg 厂门处净合格可销售参考产品
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_animal_material_mass`
- 来源：`eu-pef-2021-2279`、`codex-cxc-58-2005`、`codex-cxs-192-1995`
- UUID 状态：未解析；在精确双核核验前保持为空。
- 适用性：仅在 Cattle heart 针对单一锁定产品配方和处理顺序实际跨越过程边界时记录；否则将该原子行标记为不适用。
- 不确定性：保留秤分辨率、校准状态、去皮方法、适用时的水分基准以及批次核对差异。

###### 接收猪肾（`receive_pig_kidney`）

Pig kidney 在本过程中作为一项原子输入交换记录；其不得代替任何其他物料、载体、废物或排放。

- 选定流：Pig kidney
- 流属性/单位：Mass / kg
- 数量规则：记录该交换针对锁定批次跨越本过程边界的前景实测数量。
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：产品特定（`product_specific`）
- 归一化基准：每 1 kg 厂门处净合格可销售参考产品
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_animal_material_mass`
- 来源：`eu-pef-2021-2279`、`codex-cxc-58-2005`、`codex-cxs-192-1995`
- UUID 状态：未解析；在精确双核核验前保持为空。
- 适用性：仅在 Pig kidney 针对单一锁定产品配方和处理顺序实际跨越过程边界时记录；否则将该原子行标记为不适用。
- 不确定性：保留秤分辨率、校准状态、去皮方法、适用时的水分基准以及批次核对差异。

###### 接收牛肾（`receive_cattle_kidney`）

Cattle kidney 在本过程中作为一项原子输入交换记录；其不得代替任何其他物料、载体、废物或排放。

- 选定流：Cattle kidney
- 流属性/单位：Mass / kg
- 数量规则：记录该交换针对锁定批次跨越本过程边界的前景实测数量。
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：产品特定（`product_specific`）
- 归一化基准：每 1 kg 厂门处净合格可销售参考产品
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_animal_material_mass`
- 来源：`eu-pef-2021-2279`、`codex-cxc-58-2005`、`codex-cxs-192-1995`
- UUID 状态：未解析；在精确双核核验前保持为空。
- 适用性：仅在 Cattle kidney 针对单一锁定产品配方和处理顺序实际跨越过程边界时记录；否则将该原子行标记为不适用。
- 不确定性：保留秤分辨率、校准状态、去皮方法、适用时的水分基准以及批次核对差异。

###### 接收猪血（`receive_pig_blood`）

Pig blood 在本过程中作为一项原子输入交换记录；其不得代替任何其他物料、载体、废物或排放。

- 选定流：Pig blood
- 流属性/单位：Mass / kg
- 数量规则：记录该交换针对锁定批次跨越本过程边界的前景实测数量。
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：产品特定（`product_specific`）
- 归一化基准：每 1 kg 厂门处净合格可销售参考产品
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_animal_material_mass`
- 来源：`eu-pef-2021-2279`、`codex-cxc-58-2005`、`codex-cxs-192-1995`
- UUID 状态：未解析；在精确双核核验前保持为空。
- 适用性：仅在 Pig blood 针对单一锁定产品配方和处理顺序实际跨越过程边界时记录；否则将该原子行标记为不适用。
- 不确定性：保留秤分辨率、校准状态、去皮方法、适用时的水分基准以及批次核对差异。

###### 接收牛血（`receive_cattle_blood`）

Cattle blood 在本过程中作为一项原子输入交换记录；其不得代替任何其他物料、载体、废物或排放。

- 选定流：Cattle blood
- 流属性/单位：Mass / kg
- 数量规则：记录该交换针对锁定批次跨越本过程边界的前景实测数量。
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：产品特定（`product_specific`）
- 归一化基准：每 1 kg 厂门处净合格可销售参考产品
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_animal_material_mass`
- 来源：`eu-pef-2021-2279`、`codex-cxc-58-2005`、`codex-cxs-192-1995`
- UUID 状态：未解析；在精确双核核验前保持为空。
- 适用性：仅在 Cattle blood 针对单一锁定产品配方和处理顺序实际跨越过程边界时记录；否则将该原子行标记为不适用。
- 不确定性：保留秤分辨率、校准状态、去皮方法、适用时的水分基准以及批次核对差异。

###### 接收猪背膘（`receive_pork_backfat`）

Pork backfat 在本过程中作为一项原子输入交换记录；其不得代替任何其他物料、载体、废物或排放。

- 选定流：Pork backfat
- 流属性/单位：Mass / kg
- 数量规则：记录该交换针对锁定批次跨越本过程边界的前景实测数量。
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：产品特定（`product_specific`）
- 归一化基准：每 1 kg 厂门处净合格可销售参考产品
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_animal_material_mass`
- 来源：`eu-pef-2021-2279`、`codex-cxc-58-2005`、`codex-cxs-192-1995`
- UUID 状态：未解析；在精确双核核验前保持为空。
- 适用性：仅在 Pork backfat 针对单一锁定产品配方和处理顺序实际跨越过程边界时记录；否则将该原子行标记为不适用。
- 不确定性：保留秤分辨率、校准状态、去皮方法、适用时的水分基准以及批次核对差异。

###### 接收牛脂肪组织（`receive_cattle_adipose_fat`）

Cattle adipose fat 在本过程中作为一项原子输入交换记录；其不得代替任何其他物料、载体、废物或排放。

- 选定流：Cattle adipose fat
- 流属性/单位：Mass / kg
- 数量规则：记录该交换针对锁定批次跨越本过程边界的前景实测数量。
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：产品特定（`product_specific`）
- 归一化基准：每 1 kg 厂门处净合格可销售参考产品
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_animal_material_mass`
- 来源：`eu-pef-2021-2279`、`codex-cxc-58-2005`、`codex-cxs-192-1995`
- UUID 状态：未解析；在精确双核核验前保持为空。
- 适用性：仅在 Cattle adipose fat 针对单一锁定产品配方和处理顺序实际跨越过程边界时记录；否则将该原子行标记为不适用。
- 不确定性：保留秤分辨率、校准状态、去皮方法、适用时的水分基准以及批次核对差异。

###### 计量冷藏接收用电（`receiving_grid_electricity`）

Grid electricity, medium voltage 在本过程中作为一项原子输入交换记录；其不得代替任何其他物料、载体、废物或排放。

- 选定流：Grid electricity, medium voltage
- 流属性/单位：Energy / kWh
- 数量规则：记录该交换针对锁定批次跨越本过程边界的前景实测数量。
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每 1 kg 厂门处净合格可销售参考产品
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_stage_electricity`
- 来源：`eu-pef-2021-2279`、`jrc-sa-bref-2024`
- UUID 状态：未解析；在精确双核核验前保持为空。
- 适用性：仅在 Grid electricity, medium voltage 针对单一锁定产品配方和处理顺序实际跨越过程边界时记录；否则将该原子行标记为不适用。
- 不确定性：保留仪表分辨率、校准状态、计量覆盖、时间区间以及任何批次归属计算。

###### 记录氨（R717）制冷剂补充（`receiving_r717_makeup`）

Ammonia (R717) refrigerant makeup 在本过程中作为一项原子输入交换记录；其不得代替任何其他物料、载体、废物或排放。

- 选定流：Ammonia (R717) refrigerant makeup
- 流属性/单位：Mass / kg
- 数量规则：记录该交换针对锁定批次跨越本过程边界的前景实测数量。
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：技术特定（`technology_specific`）
- 归一化基准：每 1 kg 厂门处净合格可销售参考产品
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_refrigerant_reconciliation`
- 来源：`eu-pef-2021-2279`、`jrc-sa-bref-2024`
- UUID 状态：未解析；在精确双核核验前保持为空。
- 适用性：仅在 Ammonia (R717) refrigerant makeup 针对单一锁定产品配方和处理顺序实际跨越过程边界时记录；否则将该原子行标记为不适用。
- 不确定性：保留秤分辨率、校准状态、去皮方法、适用时的水分基准以及批次核对差异。

###### 记录二氧化碳（R744）制冷剂补充（`receiving_r744_makeup`）

Carbon dioxide (R744) refrigerant makeup 在本过程中作为一项原子输入交换记录；其不得代替任何其他物料、载体、废物或排放。

- 选定流：Carbon dioxide (R744) refrigerant makeup
- 流属性/单位：Mass / kg
- 数量规则：记录该交换针对锁定批次跨越本过程边界的前景实测数量。
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：技术特定（`technology_specific`）
- 归一化基准：每 1 kg 厂门处净合格可销售参考产品
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_refrigerant_reconciliation`
- 来源：`eu-pef-2021-2279`、`jrc-sa-bref-2024`
- UUID 状态：未解析；在精确双核核验前保持为空。
- 适用性：仅在 Carbon dioxide (R744) refrigerant makeup 针对单一锁定产品配方和处理顺序实际跨越过程边界时记录；否则将该原子行标记为不适用。
- 不确定性：保留秤分辨率、校准状态、去皮方法、适用时的水分基准以及批次核对差异。

###### 记录丙烷（R290）制冷剂补充（`receiving_r290_makeup`）

Propane (R290) refrigerant makeup 在本过程中作为一项原子输入交换记录；其不得代替任何其他物料、载体、废物或排放。

- 选定流：Propane (R290) refrigerant makeup
- 流属性/单位：Mass / kg
- 数量规则：记录该交换针对锁定批次跨越本过程边界的前景实测数量。
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：技术特定（`technology_specific`）
- 归一化基准：每 1 kg 厂门处净合格可销售参考产品
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_refrigerant_reconciliation`
- 来源：`eu-pef-2021-2279`、`jrc-sa-bref-2024`
- UUID 状态：未解析；在精确双核核验前保持为空。
- 适用性：仅在 Propane (R290) refrigerant makeup 针对单一锁定产品配方和处理顺序实际跨越过程边界时记录；否则将该原子行标记为不适用。
- 不确定性：保留秤分辨率、校准状态、去皮方法、适用时的水分基准以及批次核对差异。

##### 废物流

##### 基本流

#### 输出

##### 产品流

##### 废物流

###### 移出猪骨骼肌肉接收不合格物（`receiving_reject_pork_meat`）

Pork skeletal meat receiving reject 在本过程中作为一项原子输出交换记录；其不得代替任何其他物料、载体、废物或排放。

- 选定流：Pork skeletal meat receiving reject
- 流属性/单位：Mass / kg
- 数量规则：记录该交换针对锁定批次跨越本过程边界的前景实测数量。
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每 1 kg 厂门处净合格可销售参考产品
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_material_waste_mass`
- 来源：`eu-pef-2021-2279`、`jrc-sa-bref-2024`
- UUID 状态：未解析；在精确双核核验前保持为空。
- 适用性：仅在 Pork skeletal meat receiving reject 针对单一锁定产品配方和处理顺序实际跨越过程边界时记录；否则将该原子行标记为不适用。
- 不确定性：保留秤分辨率、校准状态、去皮方法、适用时的水分基准以及批次核对差异。

###### 移出牛骨骼肌肉接收不合格物（`receiving_reject_beef_meat`）

Beef skeletal meat receiving reject 在本过程中作为一项原子输出交换记录；其不得代替任何其他物料、载体、废物或排放。

- 选定流：Beef skeletal meat receiving reject
- 流属性/单位：Mass / kg
- 数量规则：记录该交换针对锁定批次跨越本过程边界的前景实测数量。
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每 1 kg 厂门处净合格可销售参考产品
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_material_waste_mass`
- 来源：`eu-pef-2021-2279`、`jrc-sa-bref-2024`
- UUID 状态：未解析；在精确双核核验前保持为空。
- 适用性：仅在 Beef skeletal meat receiving reject 针对单一锁定产品配方和处理顺序实际跨越过程边界时记录；否则将该原子行标记为不适用。
- 不确定性：保留秤分辨率、校准状态、去皮方法、适用时的水分基准以及批次核对差异。

###### 移出鸡骨骼肌肉接收不合格物（`receiving_reject_chicken_meat`）

Chicken skeletal meat receiving reject 在本过程中作为一项原子输出交换记录；其不得代替任何其他物料、载体、废物或排放。

- 选定流：Chicken skeletal meat receiving reject
- 流属性/单位：Mass / kg
- 数量规则：记录该交换针对锁定批次跨越本过程边界的前景实测数量。
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每 1 kg 厂门处净合格可销售参考产品
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_material_waste_mass`
- 来源：`eu-pef-2021-2279`、`jrc-sa-bref-2024`
- UUID 状态：未解析；在精确双核核验前保持为空。
- 适用性：仅在 Chicken skeletal meat receiving reject 针对单一锁定产品配方和处理顺序实际跨越过程边界时记录；否则将该原子行标记为不适用。
- 不确定性：保留秤分辨率、校准状态、去皮方法、适用时的水分基准以及批次核对差异。

###### 移出火鸡骨骼肌肉接收不合格物（`receiving_reject_turkey_meat`）

Turkey skeletal meat receiving reject 在本过程中作为一项原子输出交换记录；其不得代替任何其他物料、载体、废物或排放。

- 选定流：Turkey skeletal meat receiving reject
- 流属性/单位：Mass / kg
- 数量规则：记录该交换针对锁定批次跨越本过程边界的前景实测数量。
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每 1 kg 厂门处净合格可销售参考产品
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_material_waste_mass`
- 来源：`eu-pef-2021-2279`、`jrc-sa-bref-2024`
- UUID 状态：未解析；在精确双核核验前保持为空。
- 适用性：仅在 Turkey skeletal meat receiving reject 针对单一锁定产品配方和处理顺序实际跨越过程边界时记录；否则将该原子行标记为不适用。
- 不确定性：保留秤分辨率、校准状态、去皮方法、适用时的水分基准以及批次核对差异。

###### 移出猪肝接收不合格物（`receiving_reject_pig_liver`）

Pig liver receiving reject 在本过程中作为一项原子输出交换记录；其不得代替任何其他物料、载体、废物或排放。

- 选定流：Pig liver receiving reject
- 流属性/单位：Mass / kg
- 数量规则：记录该交换针对锁定批次跨越本过程边界的前景实测数量。
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每 1 kg 厂门处净合格可销售参考产品
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_material_waste_mass`
- 来源：`eu-pef-2021-2279`、`jrc-sa-bref-2024`
- UUID 状态：未解析；在精确双核核验前保持为空。
- 适用性：仅在 Pig liver receiving reject 针对单一锁定产品配方和处理顺序实际跨越过程边界时记录；否则将该原子行标记为不适用。
- 不确定性：保留秤分辨率、校准状态、去皮方法、适用时的水分基准以及批次核对差异。

###### 移出牛肝接收不合格物（`receiving_reject_cattle_liver`）

Cattle liver receiving reject 在本过程中作为一项原子输出交换记录；其不得代替任何其他物料、载体、废物或排放。

- 选定流：Cattle liver receiving reject
- 流属性/单位：Mass / kg
- 数量规则：记录该交换针对锁定批次跨越本过程边界的前景实测数量。
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每 1 kg 厂门处净合格可销售参考产品
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_material_waste_mass`
- 来源：`eu-pef-2021-2279`、`jrc-sa-bref-2024`
- UUID 状态：未解析；在精确双核核验前保持为空。
- 适用性：仅在 Cattle liver receiving reject 针对单一锁定产品配方和处理顺序实际跨越过程边界时记录；否则将该原子行标记为不适用。
- 不确定性：保留秤分辨率、校准状态、去皮方法、适用时的水分基准以及批次核对差异。

###### 移出猪血接收不合格物（`receiving_reject_pig_blood`）

Pig blood receiving reject 在本过程中作为一项原子输出交换记录；其不得代替任何其他物料、载体、废物或排放。

- 选定流：Pig blood receiving reject
- 流属性/单位：Mass / kg
- 数量规则：记录该交换针对锁定批次跨越本过程边界的前景实测数量。
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每 1 kg 厂门处净合格可销售参考产品
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_material_waste_mass`
- 来源：`eu-pef-2021-2279`、`jrc-sa-bref-2024`
- UUID 状态：未解析；在精确双核核验前保持为空。
- 适用性：仅在 Pig blood receiving reject 针对单一锁定产品配方和处理顺序实际跨越过程边界时记录；否则将该原子行标记为不适用。
- 不确定性：保留秤分辨率、校准状态、去皮方法、适用时的水分基准以及批次核对差异。

###### 移出牛血接收不合格物（`receiving_reject_cattle_blood`）

Cattle blood receiving reject 在本过程中作为一项原子输出交换记录；其不得代替任何其他物料、载体、废物或排放。

- 选定流：Cattle blood receiving reject
- 流属性/单位：Mass / kg
- 数量规则：记录该交换针对锁定批次跨越本过程边界的前景实测数量。
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每 1 kg 厂门处净合格可销售参考产品
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_material_waste_mass`
- 来源：`eu-pef-2021-2279`、`jrc-sa-bref-2024`
- UUID 状态：未解析；在精确双核核验前保持为空。
- 适用性：仅在 Cattle blood receiving reject 针对单一锁定产品配方和处理顺序实际跨越过程边界时记录；否则将该原子行标记为不适用。
- 不确定性：保留秤分辨率、校准状态、去皮方法、适用时的水分基准以及批次核对差异。

###### 移出猪背膘接收不合格物（`receiving_reject_pork_fat`）

Pork backfat receiving reject 在本过程中作为一项原子输出交换记录；其不得代替任何其他物料、载体、废物或排放。

- 选定流：Pork backfat receiving reject
- 流属性/单位：Mass / kg
- 数量规则：记录该交换针对锁定批次跨越本过程边界的前景实测数量。
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每 1 kg 厂门处净合格可销售参考产品
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_material_waste_mass`
- 来源：`eu-pef-2021-2279`、`jrc-sa-bref-2024`
- UUID 状态：未解析；在精确双核核验前保持为空。
- 适用性：仅在 Pork backfat receiving reject 针对单一锁定产品配方和处理顺序实际跨越过程边界时记录；否则将该原子行标记为不适用。
- 不确定性：保留秤分辨率、校准状态、去皮方法、适用时的水分基准以及批次核对差异。

###### 移出牛脂肪组织接收不合格物（`receiving_reject_cattle_fat`）

Cattle adipose fat receiving reject 在本过程中作为一项原子输出交换记录；其不得代替任何其他物料、载体、废物或排放。

- 选定流：Cattle adipose fat receiving reject
- 流属性/单位：Mass / kg
- 数量规则：记录该交换针对锁定批次跨越本过程边界的前景实测数量。
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每 1 kg 厂门处净合格可销售参考产品
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_material_waste_mass`
- 来源：`eu-pef-2021-2279`、`jrc-sa-bref-2024`
- UUID 状态：未解析；在精确双核核验前保持为空。
- 适用性：仅在 Cattle adipose fat receiving reject 针对单一锁定产品配方和处理顺序实际跨越过程边界时记录；否则将该原子行标记为不适用。
- 不确定性：保留秤分辨率、校准状态、去皮方法、适用时的水分基准以及批次核对差异。

###### 移出低密度聚乙烯入厂衬袋废物（`receiving_reject_ldpe_liner`）

Low-density polyethylene inbound liner waste 在本过程中作为一项原子输出交换记录；其不得代替任何其他物料、载体、废物或排放。

- 选定流：Low-density polyethylene inbound liner waste
- 流属性/单位：Mass / kg
- 数量规则：记录该交换针对锁定批次跨越本过程边界的前景实测数量。
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每 1 kg 厂门处净合格可销售参考产品
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_material_waste_mass`
- 来源：`eu-pef-2021-2279`、`jrc-sa-bref-2024`
- UUID 状态：未解析；在精确双核核验前保持为空。
- 适用性：仅在 Low-density polyethylene inbound liner waste 针对单一锁定产品配方和处理顺序实际跨越过程边界时记录；否则将该原子行标记为不适用。
- 不确定性：保留秤分辨率、校准状态、去皮方法、适用时的水分基准以及批次核对差异。

###### 移出瓦楞纤维板入厂纸箱废物（`receiving_reject_fibreboard_carton`）

Corrugated fibreboard inbound carton waste 在本过程中作为一项原子输出交换记录；其不得代替任何其他物料、载体、废物或排放。

- 选定流：Corrugated fibreboard inbound carton waste
- 流属性/单位：Mass / kg
- 数量规则：记录该交换针对锁定批次跨越本过程边界的前景实测数量。
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每 1 kg 厂门处净合格可销售参考产品
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_material_waste_mass`
- 来源：`eu-pef-2021-2279`、`jrc-sa-bref-2024`
- UUID 状态：未解析；在精确双核核验前保持为空。
- 适用性：仅在 Corrugated fibreboard inbound carton waste 针对单一锁定产品配方和处理顺序实际跨越过程边界时记录；否则将该原子行标记为不适用。
- 不确定性：保留秤分辨率、校准状态、去皮方法、适用时的水分基准以及批次核对差异。

###### 移出木质入厂托盘废物（`receiving_reject_wood_pallet`）

Wooden inbound pallet waste 在本过程中作为一项原子输出交换记录；其不得代替任何其他物料、载体、废物或排放。

- 选定流：Wooden inbound pallet waste
- 流属性/单位：Mass / kg
- 数量规则：记录该交换针对锁定批次跨越本过程边界的前景实测数量。
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每 1 kg 厂门处净合格可销售参考产品
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_material_waste_mass`
- 来源：`eu-pef-2021-2279`、`jrc-sa-bref-2024`
- UUID 状态：未解析；在精确双核核验前保持为空。
- 适用性：仅在 Wooden inbound pallet waste 针对单一锁定产品配方和处理顺序实际跨越过程边界时记录；否则将该原子行标记为不适用。
- 不确定性：保留秤分辨率、校准状态、去皮方法、适用时的水分基准以及批次核对差异。

##### 基本流

###### 排放氨（R717）向空气排放（`receiving_r717_release`）

Ammonia (R717) to air 在本过程中作为一项原子输出交换记录；其不得代替任何其他物料、载体、废物或排放。

- 选定流：Ammonia (R717) to air
- 流属性/单位：Mass / kg
- 数量规则：仅依据所链接协议定义的前景记录计算可归属于该批次的数量。
- 数值来源模式：计算值（`calculated_value`）
- 适用范围：技术特定（`technology_specific`）
- 归一化基准：每 1 kg 厂门处净合格可销售参考产品
- 基准类型：参考流（`reference_flow`）
- 证据类型：由采集计算（`calculated_from_collection`）
- 采集协议：`cp_refrigerant_reconciliation`
- 来源：`eu-pef-2021-2279`、`jrc-sa-bref-2024`
- UUID 状态：未解析；在精确双核核验前保持为空。
- 适用性：仅在 Ammonia (R717) to air 针对单一锁定产品配方和处理顺序实际跨越过程边界时记录；否则将该原子行标记为不适用。
- 不确定性：保留采样或质量平衡方法、检出限、时间代表性、换算记录和分析不确定性。

###### 排放二氧化碳（R744）向空气排放（`receiving_r744_release`）

Carbon dioxide (R744) to air 在本过程中作为一项原子输出交换记录；其不得代替任何其他物料、载体、废物或排放。

- 选定流：Carbon dioxide (R744) to air
- 流属性/单位：Mass / kg
- 数量规则：仅依据所链接协议定义的前景记录计算可归属于该批次的数量。
- 数值来源模式：计算值（`calculated_value`）
- 适用范围：技术特定（`technology_specific`）
- 归一化基准：每 1 kg 厂门处净合格可销售参考产品
- 基准类型：参考流（`reference_flow`）
- 证据类型：由采集计算（`calculated_from_collection`）
- 采集协议：`cp_refrigerant_reconciliation`
- 来源：`eu-pef-2021-2279`、`jrc-sa-bref-2024`
- UUID 状态：未解析；在精确双核核验前保持为空。
- 适用性：仅在 Carbon dioxide (R744) to air 针对单一锁定产品配方和处理顺序实际跨越过程边界时记录；否则将该原子行标记为不适用。
- 不确定性：保留采样或质量平衡方法、检出限、时间代表性、换算记录和分析不确定性。

###### 排放丙烷（R290）向空气排放（`receiving_r290_release`）

Propane (R290) to air 在本过程中作为一项原子输出交换记录；其不得代替任何其他物料、载体、废物或排放。

- 选定流：Propane (R290) to air
- 流属性/单位：Mass / kg
- 数量规则：仅依据所链接协议定义的前景记录计算可归属于该批次的数量。
- 数值来源模式：计算值（`calculated_value`）
- 适用范围：技术特定（`technology_specific`）
- 归一化基准：每 1 kg 厂门处净合格可销售参考产品
- 基准类型：参考流（`reference_flow`）
- 证据类型：由采集计算（`calculated_from_collection`）
- 采集协议：`cp_refrigerant_reconciliation`
- 来源：`eu-pef-2021-2279`、`jrc-sa-bref-2024`
- UUID 状态：未解析；在精确双核核验前保持为空。
- 适用性：仅在 Propane (R290) to air 针对单一锁定产品配方和处理顺序实际跨越过程边界时记录；否则将该原子行标记为不适用。
- 不确定性：保留采样或质量平衡方法、检出限、时间代表性、换算记录和分析不确定性。

### 过程：粉碎、配料与混合（`comminution_batching_mixing`）

前景粒径减小、配方投料和混合物制备。始终纳入；记录锁定产品实际使用的精确配方和设备顺序。

#### 输入

##### 产品流

###### 投加饮用级配方水（`mixing_input_potable_water`）

Potable formulation water 在本过程中作为一项原子输入交换记录；其不得代替任何其他物料、载体、废物或排放。

- 选定流：Potable formulation water
- 流属性/单位：Mass / kg
- 数量规则：记录该交换针对锁定批次跨越本过程边界的前景实测数量。
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：产品特定（`product_specific`）
- 归一化基准：每 1 kg 厂门处净合格可销售参考产品
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_recipe_component_mass`
- 来源：`eu-pef-2021-2279`、`codex-cxs-192-1995`
- UUID 状态：未解析；在精确双核核验前保持为空。
- 适用性：仅在 Potable formulation water 针对单一锁定产品配方和处理顺序实际跨越过程边界时记录；否则将该原子行标记为不适用。
- 不确定性：保留秤分辨率、校准状态、去皮方法、适用时的水分基准以及批次核对差异。

###### 投加饮用级冰（`mixing_input_potable_ice`）

Potable ice 在本过程中作为一项原子输入交换记录；其不得代替任何其他物料、载体、废物或排放。

- 选定流：Potable ice
- 流属性/单位：Mass / kg
- 数量规则：记录该交换针对锁定批次跨越本过程边界的前景实测数量。
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：产品特定（`product_specific`）
- 归一化基准：每 1 kg 厂门处净合格可销售参考产品
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_recipe_component_mass`
- 来源：`eu-pef-2021-2279`、`codex-cxs-192-1995`
- UUID 状态：未解析；在精确双核核验前保持为空。
- 适用性：仅在 Potable ice 针对单一锁定产品配方和处理顺序实际跨越过程边界时记录；否则将该原子行标记为不适用。
- 不确定性：保留秤分辨率、校准状态、去皮方法、适用时的水分基准以及批次核对差异。

###### 投加氯化钠（`mixing_input_sodium_chloride`）

Sodium chloride 在本过程中作为一项原子输入交换记录；其不得代替任何其他物料、载体、废物或排放。

- 选定流：Sodium chloride
- 流属性/单位：Mass / kg
- 数量规则：记录该交换针对锁定批次跨越本过程边界的前景实测数量。
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：产品特定（`product_specific`）
- 归一化基准：每 1 kg 厂门处净合格可销售参考产品
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_recipe_component_mass`
- 来源：`eu-pef-2021-2279`、`codex-cxs-192-1995`
- UUID 状态：未解析；在精确双核核验前保持为空。
- 适用性：仅在 Sodium chloride 针对单一锁定产品配方和处理顺序实际跨越过程边界时记录；否则将该原子行标记为不适用。
- 不确定性：保留秤分辨率、校准状态、去皮方法、适用时的水分基准以及批次核对差异。

###### 投加蔗糖（`mixing_input_sucrose`）

Sucrose 在本过程中作为一项原子输入交换记录；其不得代替任何其他物料、载体、废物或排放。

- 选定流：Sucrose
- 流属性/单位：Mass / kg
- 数量规则：记录该交换针对锁定批次跨越本过程边界的前景实测数量。
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：产品特定（`product_specific`）
- 归一化基准：每 1 kg 厂门处净合格可销售参考产品
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_recipe_component_mass`
- 来源：`eu-pef-2021-2279`、`codex-cxs-192-1995`
- UUID 状态：未解析；在精确双核核验前保持为空。
- 适用性：仅在 Sucrose 针对单一锁定产品配方和处理顺序实际跨越过程边界时记录；否则将该原子行标记为不适用。
- 不确定性：保留秤分辨率、校准状态、去皮方法、适用时的水分基准以及批次核对差异。

###### 投加葡萄糖（`mixing_input_dextrose`）

Dextrose 在本过程中作为一项原子输入交换记录；其不得代替任何其他物料、载体、废物或排放。

- 选定流：Dextrose
- 流属性/单位：Mass / kg
- 数量规则：记录该交换针对锁定批次跨越本过程边界的前景实测数量。
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：产品特定（`product_specific`）
- 归一化基准：每 1 kg 厂门处净合格可销售参考产品
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_recipe_component_mass`
- 来源：`eu-pef-2021-2279`、`codex-cxs-192-1995`
- UUID 状态：未解析；在精确双核核验前保持为空。
- 适用性：仅在 Dextrose 针对单一锁定产品配方和处理顺序实际跨越过程边界时记录；否则将该原子行标记为不适用。
- 不确定性：保留秤分辨率、校准状态、去皮方法、适用时的水分基准以及批次核对差异。

###### 投加马铃薯淀粉（`mixing_input_potato_starch`）

Potato starch 在本过程中作为一项原子输入交换记录；其不得代替任何其他物料、载体、废物或排放。

- 选定流：Potato starch
- 流属性/单位：Mass / kg
- 数量规则：记录该交换针对锁定批次跨越本过程边界的前景实测数量。
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：产品特定（`product_specific`）
- 归一化基准：每 1 kg 厂门处净合格可销售参考产品
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_recipe_component_mass`
- 来源：`eu-pef-2021-2279`、`codex-cxs-192-1995`
- UUID 状态：未解析；在精确双核核验前保持为空。
- 适用性：仅在 Potato starch 针对单一锁定产品配方和处理顺序实际跨越过程边界时记录；否则将该原子行标记为不适用。
- 不确定性：保留秤分辨率、校准状态、去皮方法、适用时的水分基准以及批次核对差异。

###### 投加大豆分离蛋白（`mixing_input_soy_protein_isolate`）

Soy protein isolate 在本过程中作为一项原子输入交换记录；其不得代替任何其他物料、载体、废物或排放。

- 选定流：Soy protein isolate
- 流属性/单位：Mass / kg
- 数量规则：记录该交换针对锁定批次跨越本过程边界的前景实测数量。
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：产品特定（`product_specific`）
- 归一化基准：每 1 kg 厂门处净合格可销售参考产品
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_recipe_component_mass`
- 来源：`eu-pef-2021-2279`、`codex-cxs-192-1995`
- UUID 状态：未解析；在精确双核核验前保持为空。
- 适用性：仅在 Soy protein isolate 针对单一锁定产品配方和处理顺序实际跨越过程边界时记录；否则将该原子行标记为不适用。
- 不确定性：保留秤分辨率、校准状态、去皮方法、适用时的水分基准以及批次核对差异。

###### 投加脱脂乳粉（`mixing_input_skim_milk_powder`）

Skim milk powder 在本过程中作为一项原子输入交换记录；其不得代替任何其他物料、载体、废物或排放。

- 选定流：Skim milk powder
- 流属性/单位：Mass / kg
- 数量规则：记录该交换针对锁定批次跨越本过程边界的前景实测数量。
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：产品特定（`product_specific`）
- 归一化基准：每 1 kg 厂门处净合格可销售参考产品
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_recipe_component_mass`
- 来源：`eu-pef-2021-2279`、`codex-cxs-192-1995`
- UUID 状态：未解析；在精确双核核验前保持为空。
- 适用性：仅在 Skim milk powder 针对单一锁定产品配方和处理顺序实际跨越过程边界时记录；否则将该原子行标记为不适用。
- 不确定性：保留秤分辨率、校准状态、去皮方法、适用时的水分基准以及批次核对差异。

###### 投加猪明胶（`mixing_input_porcine_gelatin`）

Porcine gelatin 在本过程中作为一项原子输入交换记录；其不得代替任何其他物料、载体、废物或排放。

- 选定流：Porcine gelatin
- 流属性/单位：Mass / kg
- 数量规则：记录该交换针对锁定批次跨越本过程边界的前景实测数量。
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：产品特定（`product_specific`）
- 归一化基准：每 1 kg 厂门处净合格可销售参考产品
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_recipe_component_mass`
- 来源：`eu-pef-2021-2279`、`codex-cxs-192-1995`
- UUID 状态：未解析；在精确双核核验前保持为空。
- 适用性：仅在 Porcine gelatin 针对单一锁定产品配方和处理顺序实际跨越过程边界时记录；否则将该原子行标记为不适用。
- 不确定性：保留秤分辨率、校准状态、去皮方法、适用时的水分基准以及批次核对差异。

###### 投加黑胡椒粉（`mixing_input_black_pepper`）

Black pepper powder 在本过程中作为一项原子输入交换记录；其不得代替任何其他物料、载体、废物或排放。

- 选定流：Black pepper powder
- 流属性/单位：Mass / kg
- 数量规则：记录该交换针对锁定批次跨越本过程边界的前景实测数量。
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：产品特定（`product_specific`）
- 归一化基准：每 1 kg 厂门处净合格可销售参考产品
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_recipe_component_mass`
- 来源：`eu-pef-2021-2279`、`codex-cxs-192-1995`
- UUID 状态：未解析；在精确双核核验前保持为空。
- 适用性：仅在 Black pepper powder 针对单一锁定产品配方和处理顺序实际跨越过程边界时记录；否则将该原子行标记为不适用。
- 不确定性：保留秤分辨率、校准状态、去皮方法、适用时的水分基准以及批次核对差异。

###### 投加红椒粉（`mixing_input_paprika`）

Paprika powder 在本过程中作为一项原子输入交换记录；其不得代替任何其他物料、载体、废物或排放。

- 选定流：Paprika powder
- 流属性/单位：Mass / kg
- 数量规则：记录该交换针对锁定批次跨越本过程边界的前景实测数量。
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：产品特定（`product_specific`）
- 归一化基准：每 1 kg 厂门处净合格可销售参考产品
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_recipe_component_mass`
- 来源：`eu-pef-2021-2279`、`codex-cxs-192-1995`
- UUID 状态：未解析；在精确双核核验前保持为空。
- 适用性：仅在 Paprika powder 针对单一锁定产品配方和处理顺序实际跨越过程边界时记录；否则将该原子行标记为不适用。
- 不确定性：保留秤分辨率、校准状态、去皮方法、适用时的水分基准以及批次核对差异。

###### 投加大蒜粉（`mixing_input_garlic`）

Garlic powder 在本过程中作为一项原子输入交换记录；其不得代替任何其他物料、载体、废物或排放。

- 选定流：Garlic powder
- 流属性/单位：Mass / kg
- 数量规则：记录该交换针对锁定批次跨越本过程边界的前景实测数量。
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：产品特定（`product_specific`）
- 归一化基准：每 1 kg 厂门处净合格可销售参考产品
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_recipe_component_mass`
- 来源：`eu-pef-2021-2279`、`codex-cxs-192-1995`
- UUID 状态：未解析；在精确双核核验前保持为空。
- 适用性：仅在 Garlic powder 针对单一锁定产品配方和处理顺序实际跨越过程边界时记录；否则将该原子行标记为不适用。
- 不确定性：保留秤分辨率、校准状态、去皮方法、适用时的水分基准以及批次核对差异。

###### 投加肉豆蔻粉（`mixing_input_nutmeg`）

Nutmeg powder 在本过程中作为一项原子输入交换记录；其不得代替任何其他物料、载体、废物或排放。

- 选定流：Nutmeg powder
- 流属性/单位：Mass / kg
- 数量规则：记录该交换针对锁定批次跨越本过程边界的前景实测数量。
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：产品特定（`product_specific`）
- 归一化基准：每 1 kg 厂门处净合格可销售参考产品
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_recipe_component_mass`
- 来源：`eu-pef-2021-2279`、`codex-cxs-192-1995`
- UUID 状态：未解析；在精确双核核验前保持为空。
- 适用性：仅在 Nutmeg powder 针对单一锁定产品配方和处理顺序实际跨越过程边界时记录；否则将该原子行标记为不适用。
- 不确定性：保留秤分辨率、校准状态、去皮方法、适用时的水分基准以及批次核对差异。

###### 投加芫荽籽粉（`mixing_input_coriander`）

Coriander seed powder 在本过程中作为一项原子输入交换记录；其不得代替任何其他物料、载体、废物或排放。

- 选定流：Coriander seed powder
- 流属性/单位：Mass / kg
- 数量规则：记录该交换针对锁定批次跨越本过程边界的前景实测数量。
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：产品特定（`product_specific`）
- 归一化基准：每 1 kg 厂门处净合格可销售参考产品
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_recipe_component_mass`
- 来源：`eu-pef-2021-2279`、`codex-cxs-192-1995`
- UUID 状态：未解析；在精确双核核验前保持为空。
- 适用性：仅在 Coriander seed powder 针对单一锁定产品配方和处理顺序实际跨越过程边界时记录；否则将该原子行标记为不适用。
- 不确定性：保留秤分辨率、校准状态、去皮方法、适用时的水分基准以及批次核对差异。

###### 投加亚硝酸钠（`mixing_input_sodium_nitrite`）

Sodium nitrite 在本过程中作为一项原子输入交换记录；其不得代替任何其他物料、载体、废物或排放。

- 选定流：Sodium nitrite
- 流属性/单位：Mass / kg
- 数量规则：记录该交换针对锁定批次跨越本过程边界的前景实测数量。
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：产品特定（`product_specific`）
- 归一化基准：每 1 kg 厂门处净合格可销售参考产品
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_recipe_component_mass`
- 来源：`eu-pef-2021-2279`、`codex-cxs-192-1995`
- UUID 状态：未解析；在精确双核核验前保持为空。
- 适用性：仅在 Sodium nitrite 针对单一锁定产品配方和处理顺序实际跨越过程边界时记录；否则将该原子行标记为不适用。
- 不确定性：保留秤分辨率、校准状态、去皮方法、适用时的水分基准以及批次核对差异。

###### 投加硝酸钾（`mixing_input_potassium_nitrate`）

Potassium nitrate 在本过程中作为一项原子输入交换记录；其不得代替任何其他物料、载体、废物或排放。

- 选定流：Potassium nitrate
- 流属性/单位：Mass / kg
- 数量规则：记录该交换针对锁定批次跨越本过程边界的前景实测数量。
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：产品特定（`product_specific`）
- 归一化基准：每 1 kg 厂门处净合格可销售参考产品
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_recipe_component_mass`
- 来源：`eu-pef-2021-2279`、`codex-cxs-192-1995`
- UUID 状态：未解析；在精确双核核验前保持为空。
- 适用性：仅在 Potassium nitrate 针对单一锁定产品配方和处理顺序实际跨越过程边界时记录；否则将该原子行标记为不适用。
- 不确定性：保留秤分辨率、校准状态、去皮方法、适用时的水分基准以及批次核对差异。

###### 投加抗坏血酸钠（`mixing_input_sodium_ascorbate`）

Sodium ascorbate 在本过程中作为一项原子输入交换记录；其不得代替任何其他物料、载体、废物或排放。

- 选定流：Sodium ascorbate
- 流属性/单位：Mass / kg
- 数量规则：记录该交换针对锁定批次跨越本过程边界的前景实测数量。
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：产品特定（`product_specific`）
- 归一化基准：每 1 kg 厂门处净合格可销售参考产品
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_recipe_component_mass`
- 来源：`eu-pef-2021-2279`、`codex-cxs-192-1995`
- UUID 状态：未解析；在精确双核核验前保持为空。
- 适用性：仅在 Sodium ascorbate 针对单一锁定产品配方和处理顺序实际跨越过程边界时记录；否则将该原子行标记为不适用。
- 不确定性：保留秤分辨率、校准状态、去皮方法、适用时的水分基准以及批次核对差异。

###### 投加异抗坏血酸钠（`mixing_input_sodium_erythorbate`）

Sodium erythorbate 在本过程中作为一项原子输入交换记录；其不得代替任何其他物料、载体、废物或排放。

- 选定流：Sodium erythorbate
- 流属性/单位：Mass / kg
- 数量规则：记录该交换针对锁定批次跨越本过程边界的前景实测数量。
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：产品特定（`product_specific`）
- 归一化基准：每 1 kg 厂门处净合格可销售参考产品
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_recipe_component_mass`
- 来源：`eu-pef-2021-2279`、`codex-cxs-192-1995`
- UUID 状态：未解析；在精确双核核验前保持为空。
- 适用性：仅在 Sodium erythorbate 针对单一锁定产品配方和处理顺序实际跨越过程边界时记录；否则将该原子行标记为不适用。
- 不确定性：保留秤分辨率、校准状态、去皮方法、适用时的水分基准以及批次核对差异。

###### 投加三聚磷酸钠（`mixing_input_sodium_tripolyphosphate`）

Sodium tripolyphosphate 在本过程中作为一项原子输入交换记录；其不得代替任何其他物料、载体、废物或排放。

- 选定流：Sodium tripolyphosphate
- 流属性/单位：Mass / kg
- 数量规则：记录该交换针对锁定批次跨越本过程边界的前景实测数量。
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：产品特定（`product_specific`）
- 归一化基准：每 1 kg 厂门处净合格可销售参考产品
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_recipe_component_mass`
- 来源：`eu-pef-2021-2279`、`codex-cxs-192-1995`
- UUID 状态：未解析；在精确双核核验前保持为空。
- 适用性：仅在 Sodium tripolyphosphate 针对单一锁定产品配方和处理顺序实际跨越过程边界时记录；否则将该原子行标记为不适用。
- 不确定性：保留秤分辨率、校准状态、去皮方法、适用时的水分基准以及批次核对差异。

###### 投加乳酸钠（`mixing_input_sodium_lactate`）

Sodium lactate 在本过程中作为一项原子输入交换记录；其不得代替任何其他物料、载体、废物或排放。

- 选定流：Sodium lactate
- 流属性/单位：Mass / kg
- 数量规则：记录该交换针对锁定批次跨越本过程边界的前景实测数量。
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：产品特定（`product_specific`）
- 归一化基准：每 1 kg 厂门处净合格可销售参考产品
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_recipe_component_mass`
- 来源：`eu-pef-2021-2279`、`codex-cxs-192-1995`
- UUID 状态：未解析；在精确双核核验前保持为空。
- 适用性：仅在 Sodium lactate 针对单一锁定产品配方和处理顺序实际跨越过程边界时记录；否则将该原子行标记为不适用。
- 不确定性：保留秤分辨率、校准状态、去皮方法、适用时的水分基准以及批次核对差异。

###### 计量粉碎与混合用电（`mixing_grid_electricity`）

Grid electricity, medium voltage 在本过程中作为一项原子输入交换记录；其不得代替任何其他物料、载体、废物或排放。

- 选定流：Grid electricity, medium voltage
- 流属性/单位：Energy / kWh
- 数量规则：记录该交换针对锁定批次跨越本过程边界的前景实测数量。
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每 1 kg 厂门处净合格可销售参考产品
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_stage_electricity`
- 来源：`eu-pef-2021-2279`、`jrc-sa-bref-2024`
- UUID 状态：未解析；在精确双核核验前保持为空。
- 适用性：仅在 Grid electricity, medium voltage 针对单一锁定产品配方和处理顺序实际跨越过程边界时记录；否则将该原子行标记为不适用。
- 不确定性：保留仪表分辨率、校准状态、计量覆盖、时间区间以及任何批次归属计算。

###### 计量压缩空气（`mixing_compressed_air`）

Compressed air 在本过程中作为一项原子输入交换记录；其不得代替任何其他物料、载体、废物或排放。

- 选定流：Compressed air
- 流属性/单位：Volume / m3
- 数量规则：记录该交换针对锁定批次跨越本过程边界的前景实测数量。
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：技术特定（`technology_specific`）
- 归一化基准：每 1 kg 厂门处净合格可销售参考产品
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_process_utility_volume`
- 来源：`eu-pef-2021-2279`、`jrc-sa-bref-2024`
- UUID 状态：未解析；在精确双核核验前保持为空。
- 适用性：仅在 Compressed air 针对单一锁定产品配方和处理顺序实际跨越过程边界时记录；否则将该原子行标记为不适用。
- 不确定性：保留仪表分辨率、校准状态、采样间隔、适用时的密度换算以及时间覆盖。

##### 废物流

##### 基本流

#### 输出

##### 产品流

###### 产出猪鲜香肠馅料（`mixing_output_pork_fresh`）

Pork fresh sausage batter 在本过程中作为一项原子输出交换记录；其不得代替任何其他物料、载体、废物或排放。

- 选定流：Pork fresh sausage batter
- 流属性/单位：Mass / kg
- 数量规则：记录该交换针对锁定批次跨越本过程边界的前景实测数量。
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：产品特定（`product_specific`）
- 归一化基准：每 1 kg 厂门处净合格可销售参考产品
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_intermediate_product_mass`
- 来源：`eu-pef-2021-2279`、`codex-cxs-192-1995`
- UUID 状态：未解析；在精确双核核验前保持为空。
- 适用性：仅在 Pork fresh sausage batter 针对单一锁定产品配方和处理顺序实际跨越过程边界时记录；否则将该原子行标记为不适用。
- 不确定性：保留秤分辨率、校准状态、去皮方法、适用时的水分基准以及批次核对差异。

###### 产出牛肉熟制香肠馅料（`mixing_output_beef_cooked`）

Beef cooked sausage batter 在本过程中作为一项原子输出交换记录；其不得代替任何其他物料、载体、废物或排放。

- 选定流：Beef cooked sausage batter
- 流属性/单位：Mass / kg
- 数量规则：记录该交换针对锁定批次跨越本过程边界的前景实测数量。
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：产品特定（`product_specific`）
- 归一化基准：每 1 kg 厂门处净合格可销售参考产品
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_intermediate_product_mass`
- 来源：`eu-pef-2021-2279`、`codex-cxs-192-1995`
- UUID 状态：未解析；在精确双核核验前保持为空。
- 适用性：仅在 Beef cooked sausage batter 针对单一锁定产品配方和处理顺序实际跨越过程边界时记录；否则将该原子行标记为不适用。
- 不确定性：保留秤分辨率、校准状态、去皮方法、适用时的水分基准以及批次核对差异。

###### 产出猪肉发酵香肠馅料（`mixing_output_pork_fermented`）

Pork fermented sausage batter 在本过程中作为一项原子输出交换记录；其不得代替任何其他物料、载体、废物或排放。

- 选定流：Pork fermented sausage batter
- 流属性/单位：Mass / kg
- 数量规则：记录该交换针对锁定批次跨越本过程边界的前景实测数量。
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：产品特定（`product_specific`）
- 归一化基准：每 1 kg 厂门处净合格可销售参考产品
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_intermediate_product_mass`
- 来源：`eu-pef-2021-2279`、`codex-cxs-192-1995`
- UUID 状态：未解析；在精确双核核验前保持为空。
- 适用性：仅在 Pork fermented sausage batter 针对单一锁定产品配方和处理顺序实际跨越过程边界时记录；否则将该原子行标记为不适用。
- 不确定性：保留秤分辨率、校准状态、去皮方法、适用时的水分基准以及批次核对差异。

###### 产出猪血布丁馅料（`mixing_output_pig_blood`）

Pig blood pudding batter 在本过程中作为一项原子输出交换记录；其不得代替任何其他物料、载体、废物或排放。

- 选定流：Pig blood pudding batter
- 流属性/单位：Mass / kg
- 数量规则：记录该交换针对锁定批次跨越本过程边界的前景实测数量。
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：产品特定（`product_specific`）
- 归一化基准：每 1 kg 厂门处净合格可销售参考产品
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_intermediate_product_mass`
- 来源：`eu-pef-2021-2279`、`codex-cxs-192-1995`
- UUID 状态：未解析；在精确双核核验前保持为空。
- 适用性：仅在 Pig blood pudding batter 针对单一锁定产品配方和处理顺序实际跨越过程边界时记录；否则将该原子行标记为不适用。
- 不确定性：保留秤分辨率、校准状态、去皮方法、适用时的水分基准以及批次核对差异。

###### 产出牛血布丁馅料（`mixing_output_cattle_blood`）

Cattle blood pudding batter 在本过程中作为一项原子输出交换记录；其不得代替任何其他物料、载体、废物或排放。

- 选定流：Cattle blood pudding batter
- 流属性/单位：Mass / kg
- 数量规则：记录该交换针对锁定批次跨越本过程边界的前景实测数量。
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：产品特定（`product_specific`）
- 归一化基准：每 1 kg 厂门处净合格可销售参考产品
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_intermediate_product_mass`
- 来源：`eu-pef-2021-2279`、`codex-cxs-192-1995`
- UUID 状态：未解析；在精确双核核验前保持为空。
- 适用性：仅在 Cattle blood pudding batter 针对单一锁定产品配方和处理顺序实际跨越过程边界时记录；否则将该原子行标记为不适用。
- 不确定性：保留秤分辨率、校准状态、去皮方法、适用时的水分基准以及批次核对差异。

###### 产出猪肝香肠馅料（`mixing_output_pork_liver`）

Pork liver sausage batter 在本过程中作为一项原子输出交换记录；其不得代替任何其他物料、载体、废物或排放。

- 选定流：Pork liver sausage batter
- 流属性/单位：Mass / kg
- 数量规则：记录该交换针对锁定批次跨越本过程边界的前景实测数量。
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：产品特定（`product_specific`）
- 归一化基准：每 1 kg 厂门处净合格可销售参考产品
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_intermediate_product_mass`
- 来源：`eu-pef-2021-2279`、`codex-cxs-192-1995`
- UUID 状态：未解析；在精确双核核验前保持为空。
- 适用性：仅在 Pork liver sausage batter 针对单一锁定产品配方和处理顺序实际跨越过程边界时记录；否则将该原子行标记为不适用。
- 不确定性：保留秤分辨率、校准状态、去皮方法、适用时的水分基准以及批次核对差异。

###### 产出牛心香肠馅料（`mixing_output_beef_heart`）

Beef heart sausage batter 在本过程中作为一项原子输出交换记录；其不得代替任何其他物料、载体、废物或排放。

- 选定流：Beef heart sausage batter
- 流属性/单位：Mass / kg
- 数量规则：记录该交换针对锁定批次跨越本过程边界的前景实测数量。
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：产品特定（`product_specific`）
- 归一化基准：每 1 kg 厂门处净合格可销售参考产品
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_intermediate_product_mass`
- 来源：`eu-pef-2021-2279`、`codex-cxs-192-1995`
- UUID 状态：未解析；在精确双核核验前保持为空。
- 适用性：仅在 Beef heart sausage batter 针对单一锁定产品配方和处理顺序实际跨越过程边界时记录；否则将该原子行标记为不适用。
- 不确定性：保留秤分辨率、校准状态、去皮方法、适用时的水分基准以及批次核对差异。

###### 产出猪肾香肠馅料（`mixing_output_pork_kidney`）

Pork kidney sausage batter 在本过程中作为一项原子输出交换记录；其不得代替任何其他物料、载体、废物或排放。

- 选定流：Pork kidney sausage batter
- 流属性/单位：Mass / kg
- 数量规则：记录该交换针对锁定批次跨越本过程边界的前景实测数量。
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：产品特定（`product_specific`）
- 归一化基准：每 1 kg 厂门处净合格可销售参考产品
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_intermediate_product_mass`
- 来源：`eu-pef-2021-2279`、`codex-cxs-192-1995`
- UUID 状态：未解析；在精确双核核验前保持为空。
- 适用性：仅在 Pork kidney sausage batter 针对单一锁定产品配方和处理顺序实际跨越过程边界时记录；否则将该原子行标记为不适用。
- 不确定性：保留秤分辨率、校准状态、去皮方法、适用时的水分基准以及批次核对差异。

###### 产出鸡肉加朗汀香肠混合料（`mixing_output_chicken_galantine`）

Chicken galantine sausage mixture 在本过程中作为一项原子输出交换记录；其不得代替任何其他物料、载体、废物或排放。

- 选定流：Chicken galantine sausage mixture
- 流属性/单位：Mass / kg
- 数量规则：记录该交换针对锁定批次跨越本过程边界的前景实测数量。
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：产品特定（`product_specific`）
- 归一化基准：每 1 kg 厂门处净合格可销售参考产品
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_intermediate_product_mass`
- 来源：`eu-pef-2021-2279`、`codex-cxs-192-1995`
- UUID 状态：未解析；在精确双核核验前保持为空。
- 适用性：仅在 Chicken galantine sausage mixture 针对单一锁定产品配方和处理顺序实际跨越过程边界时记录；否则将该原子行标记为不适用。
- 不确定性：保留秤分辨率、校准状态、去皮方法、适用时的水分基准以及批次核对差异。

###### 产出牛肉酱香肠混合料（`mixing_output_beef_meat_paste`）

Beef meat paste sausage mixture 在本过程中作为一项原子输出交换记录；其不得代替任何其他物料、载体、废物或排放。

- 选定流：Beef meat paste sausage mixture
- 流属性/单位：Mass / kg
- 数量规则：记录该交换针对锁定批次跨越本过程边界的前景实测数量。
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：产品特定（`product_specific`）
- 归一化基准：每 1 kg 厂门处净合格可销售参考产品
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_intermediate_product_mass`
- 来源：`eu-pef-2021-2279`、`codex-cxs-192-1995`
- UUID 状态：未解析；在精确双核核验前保持为空。
- 适用性：仅在 Beef meat paste sausage mixture 针对单一锁定产品配方和处理顺序实际跨越过程边界时记录；否则将该原子行标记为不适用。
- 不确定性：保留秤分辨率、校准状态、去皮方法、适用时的水分基准以及批次核对差异。

###### 产出猪肉酱香肠混合料（`mixing_output_pork_pate`）

Pork pâté sausage mixture 在本过程中作为一项原子输出交换记录；其不得代替任何其他物料、载体、废物或排放。

- 选定流：Pork pâté sausage mixture
- 流属性/单位：Mass / kg
- 数量规则：记录该交换针对锁定批次跨越本过程边界的前景实测数量。
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：产品特定（`product_specific`）
- 归一化基准：每 1 kg 厂门处净合格可销售参考产品
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_intermediate_product_mass`
- 来源：`eu-pef-2021-2279`、`codex-cxs-192-1995`
- UUID 状态：未解析；在精确双核核验前保持为空。
- 适用性：仅在 Pork pâté sausage mixture 针对单一锁定产品配方和处理顺序实际跨越过程边界时记录；否则将该原子行标记为不适用。
- 不确定性：保留秤分辨率、校准状态、去皮方法、适用时的水分基准以及批次核对差异。

###### 产出猪肉酥酱香肠混合料（`mixing_output_pork_rillettes`）

Pork rillettes sausage mixture 在本过程中作为一项原子输出交换记录；其不得代替任何其他物料、载体、废物或排放。

- 选定流：Pork rillettes sausage mixture
- 流属性/单位：Mass / kg
- 数量规则：记录该交换针对锁定批次跨越本过程边界的前景实测数量。
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：产品特定（`product_specific`）
- 归一化基准：每 1 kg 厂门处净合格可销售参考产品
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_intermediate_product_mass`
- 来源：`eu-pef-2021-2279`、`codex-cxs-192-1995`
- UUID 状态：未解析；在精确双核核验前保持为空。
- 适用性：仅在 Pork rillettes sausage mixture 针对单一锁定产品配方和处理顺序实际跨越过程边界时记录；否则将该原子行标记为不适用。
- 不确定性：保留秤分辨率、校准状态、去皮方法、适用时的水分基准以及批次核对差异。

##### 废物流

###### 移出猪骨骼肌肉粉碎损失（`mixing_loss_pork_skeletal_meat`）

Pork skeletal meat comminution loss 在本过程中作为一项原子输出交换记录；其不得代替任何其他物料、载体、废物或排放。

- 选定流：Pork skeletal meat comminution loss
- 流属性/单位：Mass / kg
- 数量规则：记录该交换针对锁定批次跨越本过程边界的前景实测数量。
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每 1 kg 厂门处净合格可销售参考产品
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_material_waste_mass`
- 来源：`eu-pef-2021-2279`、`jrc-sa-bref-2024`
- UUID 状态：未解析；在精确双核核验前保持为空。
- 适用性：仅在 Pork skeletal meat comminution loss 针对单一锁定产品配方和处理顺序实际跨越过程边界时记录；否则将该原子行标记为不适用。
- 不确定性：保留秤分辨率、校准状态、去皮方法、适用时的水分基准以及批次核对差异。

###### 移出牛骨骼肌肉粉碎损失（`mixing_loss_beef_skeletal_meat`）

Beef skeletal meat comminution loss 在本过程中作为一项原子输出交换记录；其不得代替任何其他物料、载体、废物或排放。

- 选定流：Beef skeletal meat comminution loss
- 流属性/单位：Mass / kg
- 数量规则：记录该交换针对锁定批次跨越本过程边界的前景实测数量。
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每 1 kg 厂门处净合格可销售参考产品
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_material_waste_mass`
- 来源：`eu-pef-2021-2279`、`jrc-sa-bref-2024`
- UUID 状态：未解析；在精确双核核验前保持为空。
- 适用性：仅在 Beef skeletal meat comminution loss 针对单一锁定产品配方和处理顺序实际跨越过程边界时记录；否则将该原子行标记为不适用。
- 不确定性：保留秤分辨率、校准状态、去皮方法、适用时的水分基准以及批次核对差异。

###### 移出鸡骨骼肌肉粉碎损失（`mixing_loss_chicken_skeletal_meat`）

Chicken skeletal meat comminution loss 在本过程中作为一项原子输出交换记录；其不得代替任何其他物料、载体、废物或排放。

- 选定流：Chicken skeletal meat comminution loss
- 流属性/单位：Mass / kg
- 数量规则：记录该交换针对锁定批次跨越本过程边界的前景实测数量。
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每 1 kg 厂门处净合格可销售参考产品
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_material_waste_mass`
- 来源：`eu-pef-2021-2279`、`jrc-sa-bref-2024`
- UUID 状态：未解析；在精确双核核验前保持为空。
- 适用性：仅在 Chicken skeletal meat comminution loss 针对单一锁定产品配方和处理顺序实际跨越过程边界时记录；否则将该原子行标记为不适用。
- 不确定性：保留秤分辨率、校准状态、去皮方法、适用时的水分基准以及批次核对差异。

###### 移出火鸡骨骼肌肉粉碎损失（`mixing_loss_turkey_skeletal_meat`）

Turkey skeletal meat comminution loss 在本过程中作为一项原子输出交换记录；其不得代替任何其他物料、载体、废物或排放。

- 选定流：Turkey skeletal meat comminution loss
- 流属性/单位：Mass / kg
- 数量规则：记录该交换针对锁定批次跨越本过程边界的前景实测数量。
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每 1 kg 厂门处净合格可销售参考产品
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_material_waste_mass`
- 来源：`eu-pef-2021-2279`、`jrc-sa-bref-2024`
- UUID 状态：未解析；在精确双核核验前保持为空。
- 适用性：仅在 Turkey skeletal meat comminution loss 针对单一锁定产品配方和处理顺序实际跨越过程边界时记录；否则将该原子行标记为不适用。
- 不确定性：保留秤分辨率、校准状态、去皮方法、适用时的水分基准以及批次核对差异。

###### 移出绵羊骨骼肌肉粉碎损失（`mixing_loss_sheep_skeletal_meat`）

Sheep skeletal meat comminution loss 在本过程中作为一项原子输出交换记录；其不得代替任何其他物料、载体、废物或排放。

- 选定流：Sheep skeletal meat comminution loss
- 流属性/单位：Mass / kg
- 数量规则：记录该交换针对锁定批次跨越本过程边界的前景实测数量。
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每 1 kg 厂门处净合格可销售参考产品
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_material_waste_mass`
- 来源：`eu-pef-2021-2279`、`jrc-sa-bref-2024`
- UUID 状态：未解析；在精确双核核验前保持为空。
- 适用性：仅在 Sheep skeletal meat comminution loss 针对单一锁定产品配方和处理顺序实际跨越过程边界时记录；否则将该原子行标记为不适用。
- 不确定性：保留秤分辨率、校准状态、去皮方法、适用时的水分基准以及批次核对差异。

###### 移出山羊骨骼肌肉粉碎损失（`mixing_loss_goat_skeletal_meat`）

Goat skeletal meat comminution loss 在本过程中作为一项原子输出交换记录；其不得代替任何其他物料、载体、废物或排放。

- 选定流：Goat skeletal meat comminution loss
- 流属性/单位：Mass / kg
- 数量规则：记录该交换针对锁定批次跨越本过程边界的前景实测数量。
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每 1 kg 厂门处净合格可销售参考产品
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_material_waste_mass`
- 来源：`eu-pef-2021-2279`、`jrc-sa-bref-2024`
- UUID 状态：未解析；在精确双核核验前保持为空。
- 适用性：仅在 Goat skeletal meat comminution loss 针对单一锁定产品配方和处理顺序实际跨越过程边界时记录；否则将该原子行标记为不适用。
- 不确定性：保留秤分辨率、校准状态、去皮方法、适用时的水分基准以及批次核对差异。

###### 移出猪肝粉碎损失（`mixing_loss_pig_liver`）

Pig liver comminution loss 在本过程中作为一项原子输出交换记录；其不得代替任何其他物料、载体、废物或排放。

- 选定流：Pig liver comminution loss
- 流属性/单位：Mass / kg
- 数量规则：记录该交换针对锁定批次跨越本过程边界的前景实测数量。
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每 1 kg 厂门处净合格可销售参考产品
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_material_waste_mass`
- 来源：`eu-pef-2021-2279`、`jrc-sa-bref-2024`
- UUID 状态：未解析；在精确双核核验前保持为空。
- 适用性：仅在 Pig liver comminution loss 针对单一锁定产品配方和处理顺序实际跨越过程边界时记录；否则将该原子行标记为不适用。
- 不确定性：保留秤分辨率、校准状态、去皮方法、适用时的水分基准以及批次核对差异。

###### 移出牛肝粉碎损失（`mixing_loss_cattle_liver`）

Cattle liver comminution loss 在本过程中作为一项原子输出交换记录；其不得代替任何其他物料、载体、废物或排放。

- 选定流：Cattle liver comminution loss
- 流属性/单位：Mass / kg
- 数量规则：记录该交换针对锁定批次跨越本过程边界的前景实测数量。
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每 1 kg 厂门处净合格可销售参考产品
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_material_waste_mass`
- 来源：`eu-pef-2021-2279`、`jrc-sa-bref-2024`
- UUID 状态：未解析；在精确双核核验前保持为空。
- 适用性：仅在 Cattle liver comminution loss 针对单一锁定产品配方和处理顺序实际跨越过程边界时记录；否则将该原子行标记为不适用。
- 不确定性：保留秤分辨率、校准状态、去皮方法、适用时的水分基准以及批次核对差异。

###### 移出鸡肝粉碎损失（`mixing_loss_chicken_liver`）

Chicken liver comminution loss 在本过程中作为一项原子输出交换记录；其不得代替任何其他物料、载体、废物或排放。

- 选定流：Chicken liver comminution loss
- 流属性/单位：Mass / kg
- 数量规则：记录该交换针对锁定批次跨越本过程边界的前景实测数量。
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每 1 kg 厂门处净合格可销售参考产品
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_material_waste_mass`
- 来源：`eu-pef-2021-2279`、`jrc-sa-bref-2024`
- UUID 状态：未解析；在精确双核核验前保持为空。
- 适用性：仅在 Chicken liver comminution loss 针对单一锁定产品配方和处理顺序实际跨越过程边界时记录；否则将该原子行标记为不适用。
- 不确定性：保留秤分辨率、校准状态、去皮方法、适用时的水分基准以及批次核对差异。

###### 移出猪心粉碎损失（`mixing_loss_pig_heart`）

Pig heart comminution loss 在本过程中作为一项原子输出交换记录；其不得代替任何其他物料、载体、废物或排放。

- 选定流：Pig heart comminution loss
- 流属性/单位：Mass / kg
- 数量规则：记录该交换针对锁定批次跨越本过程边界的前景实测数量。
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每 1 kg 厂门处净合格可销售参考产品
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_material_waste_mass`
- 来源：`eu-pef-2021-2279`、`jrc-sa-bref-2024`
- UUID 状态：未解析；在精确双核核验前保持为空。
- 适用性：仅在 Pig heart comminution loss 针对单一锁定产品配方和处理顺序实际跨越过程边界时记录；否则将该原子行标记为不适用。
- 不确定性：保留秤分辨率、校准状态、去皮方法、适用时的水分基准以及批次核对差异。

###### 移出牛心粉碎损失（`mixing_loss_cattle_heart`）

Cattle heart comminution loss 在本过程中作为一项原子输出交换记录；其不得代替任何其他物料、载体、废物或排放。

- 选定流：Cattle heart comminution loss
- 流属性/单位：Mass / kg
- 数量规则：记录该交换针对锁定批次跨越本过程边界的前景实测数量。
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每 1 kg 厂门处净合格可销售参考产品
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_material_waste_mass`
- 来源：`eu-pef-2021-2279`、`jrc-sa-bref-2024`
- UUID 状态：未解析；在精确双核核验前保持为空。
- 适用性：仅在 Cattle heart comminution loss 针对单一锁定产品配方和处理顺序实际跨越过程边界时记录；否则将该原子行标记为不适用。
- 不确定性：保留秤分辨率、校准状态、去皮方法、适用时的水分基准以及批次核对差异。

###### 移出猪肾粉碎损失（`mixing_loss_pig_kidney`）

Pig kidney comminution loss 在本过程中作为一项原子输出交换记录；其不得代替任何其他物料、载体、废物或排放。

- 选定流：Pig kidney comminution loss
- 流属性/单位：Mass / kg
- 数量规则：记录该交换针对锁定批次跨越本过程边界的前景实测数量。
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每 1 kg 厂门处净合格可销售参考产品
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_material_waste_mass`
- 来源：`eu-pef-2021-2279`、`jrc-sa-bref-2024`
- UUID 状态：未解析；在精确双核核验前保持为空。
- 适用性：仅在 Pig kidney comminution loss 针对单一锁定产品配方和处理顺序实际跨越过程边界时记录；否则将该原子行标记为不适用。
- 不确定性：保留秤分辨率、校准状态、去皮方法、适用时的水分基准以及批次核对差异。

###### 移出牛肾粉碎损失（`mixing_loss_cattle_kidney`）

Cattle kidney comminution loss 在本过程中作为一项原子输出交换记录；其不得代替任何其他物料、载体、废物或排放。

- 选定流：Cattle kidney comminution loss
- 流属性/单位：Mass / kg
- 数量规则：记录该交换针对锁定批次跨越本过程边界的前景实测数量。
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每 1 kg 厂门处净合格可销售参考产品
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_material_waste_mass`
- 来源：`eu-pef-2021-2279`、`jrc-sa-bref-2024`
- UUID 状态：未解析；在精确双核核验前保持为空。
- 适用性：仅在 Cattle kidney comminution loss 针对单一锁定产品配方和处理顺序实际跨越过程边界时记录；否则将该原子行标记为不适用。
- 不确定性：保留秤分辨率、校准状态、去皮方法、适用时的水分基准以及批次核对差异。

###### 移出猪血粉碎损失（`mixing_loss_pig_blood`）

Pig blood comminution loss 在本过程中作为一项原子输出交换记录；其不得代替任何其他物料、载体、废物或排放。

- 选定流：Pig blood comminution loss
- 流属性/单位：Mass / kg
- 数量规则：记录该交换针对锁定批次跨越本过程边界的前景实测数量。
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每 1 kg 厂门处净合格可销售参考产品
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_material_waste_mass`
- 来源：`eu-pef-2021-2279`、`jrc-sa-bref-2024`
- UUID 状态：未解析；在精确双核核验前保持为空。
- 适用性：仅在 Pig blood comminution loss 针对单一锁定产品配方和处理顺序实际跨越过程边界时记录；否则将该原子行标记为不适用。
- 不确定性：保留秤分辨率、校准状态、去皮方法、适用时的水分基准以及批次核对差异。

###### 移出牛血粉碎损失（`mixing_loss_cattle_blood`）

Cattle blood comminution loss 在本过程中作为一项原子输出交换记录；其不得代替任何其他物料、载体、废物或排放。

- 选定流：Cattle blood comminution loss
- 流属性/单位：Mass / kg
- 数量规则：记录该交换针对锁定批次跨越本过程边界的前景实测数量。
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每 1 kg 厂门处净合格可销售参考产品
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_material_waste_mass`
- 来源：`eu-pef-2021-2279`、`jrc-sa-bref-2024`
- UUID 状态：未解析；在精确双核核验前保持为空。
- 适用性：仅在 Cattle blood comminution loss 针对单一锁定产品配方和处理顺序实际跨越过程边界时记录；否则将该原子行标记为不适用。
- 不确定性：保留秤分辨率、校准状态、去皮方法、适用时的水分基准以及批次核对差异。

###### 移出猪背膘粉碎损失（`mixing_loss_pork_backfat`）

Pork backfat comminution loss 在本过程中作为一项原子输出交换记录；其不得代替任何其他物料、载体、废物或排放。

- 选定流：Pork backfat comminution loss
- 流属性/单位：Mass / kg
- 数量规则：记录该交换针对锁定批次跨越本过程边界的前景实测数量。
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每 1 kg 厂门处净合格可销售参考产品
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_material_waste_mass`
- 来源：`eu-pef-2021-2279`、`jrc-sa-bref-2024`
- UUID 状态：未解析；在精确双核核验前保持为空。
- 适用性：仅在 Pork backfat comminution loss 针对单一锁定产品配方和处理顺序实际跨越过程边界时记录；否则将该原子行标记为不适用。
- 不确定性：保留秤分辨率、校准状态、去皮方法、适用时的水分基准以及批次核对差异。

###### 移出牛脂肪组织粉碎损失（`mixing_loss_cattle_adipose_fat`）

Cattle adipose fat comminution loss 在本过程中作为一项原子输出交换记录；其不得代替任何其他物料、载体、废物或排放。

- 选定流：Cattle adipose fat comminution loss
- 流属性/单位：Mass / kg
- 数量规则：记录该交换针对锁定批次跨越本过程边界的前景实测数量。
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每 1 kg 厂门处净合格可销售参考产品
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_material_waste_mass`
- 来源：`eu-pef-2021-2279`、`jrc-sa-bref-2024`
- UUID 状态：未解析；在精确双核核验前保持为空。
- 适用性：仅在 Cattle adipose fat comminution loss 针对单一锁定产品配方和处理顺序实际跨越过程边界时记录；否则将该原子行标记为不适用。
- 不确定性：保留秤分辨率、校准状态、去皮方法、适用时的水分基准以及批次核对差异。

###### 移出氯化钠洒落物（`mixing_waste_sodium_chloride`）

Sodium chloride spill 在本过程中作为一项原子输出交换记录；其不得代替任何其他物料、载体、废物或排放。

- 选定流：Sodium chloride spill
- 流属性/单位：Mass / kg
- 数量规则：记录该交换针对锁定批次跨越本过程边界的前景实测数量。
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每 1 kg 厂门处净合格可销售参考产品
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_material_waste_mass`
- 来源：`eu-pef-2021-2279`、`jrc-sa-bref-2024`
- UUID 状态：未解析；在精确双核核验前保持为空。
- 适用性：仅在 Sodium chloride spill 针对单一锁定产品配方和处理顺序实际跨越过程边界时记录；否则将该原子行标记为不适用。
- 不确定性：保留秤分辨率、校准状态、去皮方法、适用时的水分基准以及批次核对差异。

###### 移出马铃薯淀粉洒落物（`mixing_waste_potato_starch`）

Potato starch spill 在本过程中作为一项原子输出交换记录；其不得代替任何其他物料、载体、废物或排放。

- 选定流：Potato starch spill
- 流属性/单位：Mass / kg
- 数量规则：记录该交换针对锁定批次跨越本过程边界的前景实测数量。
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每 1 kg 厂门处净合格可销售参考产品
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_material_waste_mass`
- 来源：`eu-pef-2021-2279`、`jrc-sa-bref-2024`
- UUID 状态：未解析；在精确双核核验前保持为空。
- 适用性：仅在 Potato starch spill 针对单一锁定产品配方和处理顺序实际跨越过程边界时记录；否则将该原子行标记为不适用。
- 不确定性：保留秤分辨率、校准状态、去皮方法、适用时的水分基准以及批次核对差异。

###### 移出黑胡椒粉洒落物（`mixing_waste_black_pepper`）

Black pepper powder spill 在本过程中作为一项原子输出交换记录；其不得代替任何其他物料、载体、废物或排放。

- 选定流：Black pepper powder spill
- 流属性/单位：Mass / kg
- 数量规则：记录该交换针对锁定批次跨越本过程边界的前景实测数量。
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每 1 kg 厂门处净合格可销售参考产品
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_material_waste_mass`
- 来源：`eu-pef-2021-2279`、`jrc-sa-bref-2024`
- UUID 状态：未解析；在精确双核核验前保持为空。
- 适用性：仅在 Black pepper powder spill 针对单一锁定产品配方和处理顺序实际跨越过程边界时记录；否则将该原子行标记为不适用。
- 不确定性：保留秤分辨率、校准状态、去皮方法、适用时的水分基准以及批次核对差异。

###### 移出红椒粉洒落物（`mixing_waste_paprika`）

Paprika powder spill 在本过程中作为一项原子输出交换记录；其不得代替任何其他物料、载体、废物或排放。

- 选定流：Paprika powder spill
- 流属性/单位：Mass / kg
- 数量规则：记录该交换针对锁定批次跨越本过程边界的前景实测数量。
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每 1 kg 厂门处净合格可销售参考产品
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_material_waste_mass`
- 来源：`eu-pef-2021-2279`、`jrc-sa-bref-2024`
- UUID 状态：未解析；在精确双核核验前保持为空。
- 适用性：仅在 Paprika powder spill 针对单一锁定产品配方和处理顺序实际跨越过程边界时记录；否则将该原子行标记为不适用。
- 不确定性：保留秤分辨率、校准状态、去皮方法、适用时的水分基准以及批次核对差异。

###### 移出大蒜粉洒落物（`mixing_waste_garlic`）

Garlic powder spill 在本过程中作为一项原子输出交换记录；其不得代替任何其他物料、载体、废物或排放。

- 选定流：Garlic powder spill
- 流属性/单位：Mass / kg
- 数量规则：记录该交换针对锁定批次跨越本过程边界的前景实测数量。
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每 1 kg 厂门处净合格可销售参考产品
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_material_waste_mass`
- 来源：`eu-pef-2021-2279`、`jrc-sa-bref-2024`
- UUID 状态：未解析；在精确双核核验前保持为空。
- 适用性：仅在 Garlic powder spill 针对单一锁定产品配方和处理顺序实际跨越过程边界时记录；否则将该原子行标记为不适用。
- 不确定性：保留秤分辨率、校准状态、去皮方法、适用时的水分基准以及批次核对差异。

###### 移出混合机冲洗废水（`mixing_waste_washout`）

Mixer washout wastewater 在本过程中作为一项原子输出交换记录；其不得代替任何其他物料、载体、废物或排放。

- 选定流：Mixer washout wastewater
- 流属性/单位：Volume / m3
- 数量规则：记录该交换针对锁定批次跨越本过程边界的前景实测数量。
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每 1 kg 厂门处净合格可销售参考产品
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_wastewater_volume`
- 来源：`eu-pef-2021-2279`、`jrc-sa-bref-2024`
- UUID 状态：未解析；在精确双核核验前保持为空。
- 适用性：仅在 Mixer washout wastewater 针对单一锁定产品配方和处理顺序实际跨越过程边界时记录；否则将该原子行标记为不适用。
- 不确定性：保留仪表分辨率、校准状态、采样间隔、适用时的密度换算以及时间覆盖。

##### 基本流

###### 排放马铃薯淀粉粉尘向空气排放（`mixing_dust_potato_starch`）

Potato starch dust to air 在本过程中作为一项原子输出交换记录；其不得代替任何其他物料、载体、废物或排放。

- 选定流：Potato starch dust to air
- 流属性/单位：Mass / kg
- 数量规则：记录该交换针对锁定批次跨越本过程边界的前景实测数量。
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：技术特定（`technology_specific`）
- 归一化基准：每 1 kg 厂门处净合格可销售参考产品
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_direct_emission_measurement`
- 来源：`eu-pef-2021-2279`、`jrc-sa-bref-2024`
- UUID 状态：未解析；在精确双核核验前保持为空。
- 适用性：仅在 Potato starch dust to air 针对单一锁定产品配方和处理顺序实际跨越过程边界时记录；否则将该原子行标记为不适用。
- 不确定性：保留采样或质量平衡方法、检出限、时间代表性、换算记录和分析不确定性。

###### 排放黑胡椒粉尘向空气排放（`mixing_dust_black_pepper`）

Black pepper dust to air 在本过程中作为一项原子输出交换记录；其不得代替任何其他物料、载体、废物或排放。

- 选定流：Black pepper dust to air
- 流属性/单位：Mass / kg
- 数量规则：记录该交换针对锁定批次跨越本过程边界的前景实测数量。
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：技术特定（`technology_specific`）
- 归一化基准：每 1 kg 厂门处净合格可销售参考产品
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_direct_emission_measurement`
- 来源：`eu-pef-2021-2279`、`jrc-sa-bref-2024`
- UUID 状态：未解析；在精确双核核验前保持为空。
- 适用性：仅在 Black pepper dust to air 针对单一锁定产品配方和处理顺序实际跨越过程边界时记录；否则将该原子行标记为不适用。
- 不确定性：保留采样或质量平衡方法、检出限、时间代表性、换算记录和分析不确定性。

###### 排放红椒粉尘向空气排放（`mixing_dust_paprika`）

Paprika dust to air 在本过程中作为一项原子输出交换记录；其不得代替任何其他物料、载体、废物或排放。

- 选定流：Paprika dust to air
- 流属性/单位：Mass / kg
- 数量规则：记录该交换针对锁定批次跨越本过程边界的前景实测数量。
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：技术特定（`technology_specific`）
- 归一化基准：每 1 kg 厂门处净合格可销售参考产品
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_direct_emission_measurement`
- 来源：`eu-pef-2021-2279`、`jrc-sa-bref-2024`
- UUID 状态：未解析；在精确双核核验前保持为空。
- 适用性：仅在 Paprika dust to air 针对单一锁定产品配方和处理顺序实际跨越过程边界时记录；否则将该原子行标记为不适用。
- 不确定性：保留采样或质量平衡方法、检出限、时间代表性、换算记录和分析不确定性。

### 过程：定量成形（`portion_forming`）

前景灌装、结扎、封夹、模塑或等效的产品特定成形。始终纳入实际使用的精确肠衣灌装或香肠形状成形操作。

#### 输入

##### 产品流

###### 投入猪鲜香肠馅料（`forming_input_pork_fresh`）

Pork fresh sausage batter 在本过程中作为一项原子输入交换记录；其不得代替任何其他物料、载体、废物或排放。

- 选定流：Pork fresh sausage batter
- 流属性/单位：Mass / kg
- 数量规则：记录该交换针对锁定批次跨越本过程边界的前景实测数量。
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：产品特定（`product_specific`）
- 归一化基准：每 1 kg 厂门处净合格可销售参考产品
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_intermediate_product_mass`
- 来源：`eu-pef-2021-2279`、`codex-cxs-192-1995`
- UUID 状态：未解析；在精确双核核验前保持为空。
- 适用性：仅在 Pork fresh sausage batter 针对单一锁定产品配方和处理顺序实际跨越过程边界时记录；否则将该原子行标记为不适用。
- 不确定性：保留秤分辨率、校准状态、去皮方法、适用时的水分基准以及批次核对差异。

###### 投入牛肉熟制香肠馅料（`forming_input_beef_cooked`）

Beef cooked sausage batter 在本过程中作为一项原子输入交换记录；其不得代替任何其他物料、载体、废物或排放。

- 选定流：Beef cooked sausage batter
- 流属性/单位：Mass / kg
- 数量规则：记录该交换针对锁定批次跨越本过程边界的前景实测数量。
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：产品特定（`product_specific`）
- 归一化基准：每 1 kg 厂门处净合格可销售参考产品
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_intermediate_product_mass`
- 来源：`eu-pef-2021-2279`、`codex-cxs-192-1995`
- UUID 状态：未解析；在精确双核核验前保持为空。
- 适用性：仅在 Beef cooked sausage batter 针对单一锁定产品配方和处理顺序实际跨越过程边界时记录；否则将该原子行标记为不适用。
- 不确定性：保留秤分辨率、校准状态、去皮方法、适用时的水分基准以及批次核对差异。

###### 投入猪肉发酵香肠馅料（`forming_input_pork_fermented`）

Pork fermented sausage batter 在本过程中作为一项原子输入交换记录；其不得代替任何其他物料、载体、废物或排放。

- 选定流：Pork fermented sausage batter
- 流属性/单位：Mass / kg
- 数量规则：记录该交换针对锁定批次跨越本过程边界的前景实测数量。
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：产品特定（`product_specific`）
- 归一化基准：每 1 kg 厂门处净合格可销售参考产品
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_intermediate_product_mass`
- 来源：`eu-pef-2021-2279`、`codex-cxs-192-1995`
- UUID 状态：未解析；在精确双核核验前保持为空。
- 适用性：仅在 Pork fermented sausage batter 针对单一锁定产品配方和处理顺序实际跨越过程边界时记录；否则将该原子行标记为不适用。
- 不确定性：保留秤分辨率、校准状态、去皮方法、适用时的水分基准以及批次核对差异。

###### 投入猪血布丁馅料（`forming_input_pig_blood`）

Pig blood pudding batter 在本过程中作为一项原子输入交换记录；其不得代替任何其他物料、载体、废物或排放。

- 选定流：Pig blood pudding batter
- 流属性/单位：Mass / kg
- 数量规则：记录该交换针对锁定批次跨越本过程边界的前景实测数量。
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：产品特定（`product_specific`）
- 归一化基准：每 1 kg 厂门处净合格可销售参考产品
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_intermediate_product_mass`
- 来源：`eu-pef-2021-2279`、`codex-cxs-192-1995`
- UUID 状态：未解析；在精确双核核验前保持为空。
- 适用性：仅在 Pig blood pudding batter 针对单一锁定产品配方和处理顺序实际跨越过程边界时记录；否则将该原子行标记为不适用。
- 不确定性：保留秤分辨率、校准状态、去皮方法、适用时的水分基准以及批次核对差异。

###### 投入牛血布丁馅料（`forming_input_cattle_blood`）

Cattle blood pudding batter 在本过程中作为一项原子输入交换记录；其不得代替任何其他物料、载体、废物或排放。

- 选定流：Cattle blood pudding batter
- 流属性/单位：Mass / kg
- 数量规则：记录该交换针对锁定批次跨越本过程边界的前景实测数量。
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：产品特定（`product_specific`）
- 归一化基准：每 1 kg 厂门处净合格可销售参考产品
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_intermediate_product_mass`
- 来源：`eu-pef-2021-2279`、`codex-cxs-192-1995`
- UUID 状态：未解析；在精确双核核验前保持为空。
- 适用性：仅在 Cattle blood pudding batter 针对单一锁定产品配方和处理顺序实际跨越过程边界时记录；否则将该原子行标记为不适用。
- 不确定性：保留秤分辨率、校准状态、去皮方法、适用时的水分基准以及批次核对差异。

###### 投入猪肝香肠馅料（`forming_input_pork_liver`）

Pork liver sausage batter 在本过程中作为一项原子输入交换记录；其不得代替任何其他物料、载体、废物或排放。

- 选定流：Pork liver sausage batter
- 流属性/单位：Mass / kg
- 数量规则：记录该交换针对锁定批次跨越本过程边界的前景实测数量。
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：产品特定（`product_specific`）
- 归一化基准：每 1 kg 厂门处净合格可销售参考产品
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_intermediate_product_mass`
- 来源：`eu-pef-2021-2279`、`codex-cxs-192-1995`
- UUID 状态：未解析；在精确双核核验前保持为空。
- 适用性：仅在 Pork liver sausage batter 针对单一锁定产品配方和处理顺序实际跨越过程边界时记录；否则将该原子行标记为不适用。
- 不确定性：保留秤分辨率、校准状态、去皮方法、适用时的水分基准以及批次核对差异。

###### 投入牛心香肠馅料（`forming_input_beef_heart`）

Beef heart sausage batter 在本过程中作为一项原子输入交换记录；其不得代替任何其他物料、载体、废物或排放。

- 选定流：Beef heart sausage batter
- 流属性/单位：Mass / kg
- 数量规则：记录该交换针对锁定批次跨越本过程边界的前景实测数量。
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：产品特定（`product_specific`）
- 归一化基准：每 1 kg 厂门处净合格可销售参考产品
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_intermediate_product_mass`
- 来源：`eu-pef-2021-2279`、`codex-cxs-192-1995`
- UUID 状态：未解析；在精确双核核验前保持为空。
- 适用性：仅在 Beef heart sausage batter 针对单一锁定产品配方和处理顺序实际跨越过程边界时记录；否则将该原子行标记为不适用。
- 不确定性：保留秤分辨率、校准状态、去皮方法、适用时的水分基准以及批次核对差异。

###### 投入猪肾香肠馅料（`forming_input_pork_kidney`）

Pork kidney sausage batter 在本过程中作为一项原子输入交换记录；其不得代替任何其他物料、载体、废物或排放。

- 选定流：Pork kidney sausage batter
- 流属性/单位：Mass / kg
- 数量规则：记录该交换针对锁定批次跨越本过程边界的前景实测数量。
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：产品特定（`product_specific`）
- 归一化基准：每 1 kg 厂门处净合格可销售参考产品
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_intermediate_product_mass`
- 来源：`eu-pef-2021-2279`、`codex-cxs-192-1995`
- UUID 状态：未解析；在精确双核核验前保持为空。
- 适用性：仅在 Pork kidney sausage batter 针对单一锁定产品配方和处理顺序实际跨越过程边界时记录；否则将该原子行标记为不适用。
- 不确定性：保留秤分辨率、校准状态、去皮方法、适用时的水分基准以及批次核对差异。

###### 投入鸡肉加朗汀香肠混合料（`forming_input_chicken_galantine`）

Chicken galantine sausage mixture 在本过程中作为一项原子输入交换记录；其不得代替任何其他物料、载体、废物或排放。

- 选定流：Chicken galantine sausage mixture
- 流属性/单位：Mass / kg
- 数量规则：记录该交换针对锁定批次跨越本过程边界的前景实测数量。
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：产品特定（`product_specific`）
- 归一化基准：每 1 kg 厂门处净合格可销售参考产品
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_intermediate_product_mass`
- 来源：`eu-pef-2021-2279`、`codex-cxs-192-1995`
- UUID 状态：未解析；在精确双核核验前保持为空。
- 适用性：仅在 Chicken galantine sausage mixture 针对单一锁定产品配方和处理顺序实际跨越过程边界时记录；否则将该原子行标记为不适用。
- 不确定性：保留秤分辨率、校准状态、去皮方法、适用时的水分基准以及批次核对差异。

###### 投入牛肉酱香肠混合料（`forming_input_beef_meat_paste`）

Beef meat paste sausage mixture 在本过程中作为一项原子输入交换记录；其不得代替任何其他物料、载体、废物或排放。

- 选定流：Beef meat paste sausage mixture
- 流属性/单位：Mass / kg
- 数量规则：记录该交换针对锁定批次跨越本过程边界的前景实测数量。
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：产品特定（`product_specific`）
- 归一化基准：每 1 kg 厂门处净合格可销售参考产品
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_intermediate_product_mass`
- 来源：`eu-pef-2021-2279`、`codex-cxs-192-1995`
- UUID 状态：未解析；在精确双核核验前保持为空。
- 适用性：仅在 Beef meat paste sausage mixture 针对单一锁定产品配方和处理顺序实际跨越过程边界时记录；否则将该原子行标记为不适用。
- 不确定性：保留秤分辨率、校准状态、去皮方法、适用时的水分基准以及批次核对差异。

###### 投入猪肉酱香肠混合料（`forming_input_pork_pate`）

Pork pâté sausage mixture 在本过程中作为一项原子输入交换记录；其不得代替任何其他物料、载体、废物或排放。

- 选定流：Pork pâté sausage mixture
- 流属性/单位：Mass / kg
- 数量规则：记录该交换针对锁定批次跨越本过程边界的前景实测数量。
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：产品特定（`product_specific`）
- 归一化基准：每 1 kg 厂门处净合格可销售参考产品
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_intermediate_product_mass`
- 来源：`eu-pef-2021-2279`、`codex-cxs-192-1995`
- UUID 状态：未解析；在精确双核核验前保持为空。
- 适用性：仅在 Pork pâté sausage mixture 针对单一锁定产品配方和处理顺序实际跨越过程边界时记录；否则将该原子行标记为不适用。
- 不确定性：保留秤分辨率、校准状态、去皮方法、适用时的水分基准以及批次核对差异。

###### 投入猪肉酥酱香肠混合料（`forming_input_pork_rillettes`）

Pork rillettes sausage mixture 在本过程中作为一项原子输入交换记录；其不得代替任何其他物料、载体、废物或排放。

- 选定流：Pork rillettes sausage mixture
- 流属性/单位：Mass / kg
- 数量规则：记录该交换针对锁定批次跨越本过程边界的前景实测数量。
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：产品特定（`product_specific`）
- 归一化基准：每 1 kg 厂门处净合格可销售参考产品
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_intermediate_product_mass`
- 来源：`eu-pef-2021-2279`、`codex-cxs-192-1995`
- UUID 状态：未解析；在精确双核核验前保持为空。
- 适用性：仅在 Pork rillettes sausage mixture 针对单一锁定产品配方和处理顺序实际跨越过程边界时记录；否则将该原子行标记为不适用。
- 不确定性：保留秤分辨率、校准状态、去皮方法、适用时的水分基准以及批次核对差异。

###### 使用天然猪肠衣（`forming_casing_hog`）

Natural hog casing 在本过程中作为一项原子输入交换记录；其不得代替任何其他物料、载体、废物或排放。

- 选定流：Natural hog casing
- 流属性/单位：Mass / kg
- 数量规则：记录该交换针对锁定批次跨越本过程边界的前景实测数量。
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：产品特定（`product_specific`）
- 归一化基准：每 1 kg 厂门处净合格可销售参考产品
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_casing_mass`
- 来源：`eu-pef-2021-2279`、`codex-cxs-192-1995`
- UUID 状态：未解析；在精确双核核验前保持为空。
- 适用性：仅在 Natural hog casing 针对单一锁定产品配方和处理顺序实际跨越过程边界时记录；否则将该原子行标记为不适用。
- 不确定性：保留秤分辨率、校准状态、去皮方法、适用时的水分基准以及批次核对差异。

###### 使用天然羊肠衣（`forming_casing_sheep`）

Natural sheep casing 在本过程中作为一项原子输入交换记录；其不得代替任何其他物料、载体、废物或排放。

- 选定流：Natural sheep casing
- 流属性/单位：Mass / kg
- 数量规则：记录该交换针对锁定批次跨越本过程边界的前景实测数量。
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：产品特定（`product_specific`）
- 归一化基准：每 1 kg 厂门处净合格可销售参考产品
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_casing_mass`
- 来源：`eu-pef-2021-2279`、`codex-cxs-192-1995`
- UUID 状态：未解析；在精确双核核验前保持为空。
- 适用性：仅在 Natural sheep casing 针对单一锁定产品配方和处理顺序实际跨越过程边界时记录；否则将该原子行标记为不适用。
- 不确定性：保留秤分辨率、校准状态、去皮方法、适用时的水分基准以及批次核对差异。

###### 使用天然牛肠衣（`forming_casing_cattle`）

Natural cattle casing 在本过程中作为一项原子输入交换记录；其不得代替任何其他物料、载体、废物或排放。

- 选定流：Natural cattle casing
- 流属性/单位：Mass / kg
- 数量规则：记录该交换针对锁定批次跨越本过程边界的前景实测数量。
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：产品特定（`product_specific`）
- 归一化基准：每 1 kg 厂门处净合格可销售参考产品
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_casing_mass`
- 来源：`eu-pef-2021-2279`、`codex-cxs-192-1995`
- UUID 状态：未解析；在精确双核核验前保持为空。
- 适用性：仅在 Natural cattle casing 针对单一锁定产品配方和处理顺序实际跨越过程边界时记录；否则将该原子行标记为不适用。
- 不确定性：保留秤分辨率、校准状态、去皮方法、适用时的水分基准以及批次核对差异。

###### 使用胶原肠衣（`forming_casing_collagen`）

Collagen casing 在本过程中作为一项原子输入交换记录；其不得代替任何其他物料、载体、废物或排放。

- 选定流：Collagen casing
- 流属性/单位：Mass / kg
- 数量规则：记录该交换针对锁定批次跨越本过程边界的前景实测数量。
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：产品特定（`product_specific`）
- 归一化基准：每 1 kg 厂门处净合格可销售参考产品
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_casing_mass`
- 来源：`eu-pef-2021-2279`、`codex-cxs-192-1995`
- UUID 状态：未解析；在精确双核核验前保持为空。
- 适用性：仅在 Collagen casing 针对单一锁定产品配方和处理顺序实际跨越过程边界时记录；否则将该原子行标记为不适用。
- 不确定性：保留秤分辨率、校准状态、去皮方法、适用时的水分基准以及批次核对差异。

###### 使用纤维素肠衣（`forming_casing_cellulose`）

Cellulose casing 在本过程中作为一项原子输入交换记录；其不得代替任何其他物料、载体、废物或排放。

- 选定流：Cellulose casing
- 流属性/单位：Mass / kg
- 数量规则：记录该交换针对锁定批次跨越本过程边界的前景实测数量。
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：产品特定（`product_specific`）
- 归一化基准：每 1 kg 厂门处净合格可销售参考产品
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_casing_mass`
- 来源：`eu-pef-2021-2279`、`codex-cxs-192-1995`
- UUID 状态：未解析；在精确双核核验前保持为空。
- 适用性：仅在 Cellulose casing 针对单一锁定产品配方和处理顺序实际跨越过程边界时记录；否则将该原子行标记为不适用。
- 不确定性：保留秤分辨率、校准状态、去皮方法、适用时的水分基准以及批次核对差异。

###### 使用聚酰胺合成肠衣（`forming_casing_polyamide`）

Polyamide synthetic casing 在本过程中作为一项原子输入交换记录；其不得代替任何其他物料、载体、废物或排放。

- 选定流：Polyamide synthetic casing
- 流属性/单位：Mass / kg
- 数量规则：记录该交换针对锁定批次跨越本过程边界的前景实测数量。
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：产品特定（`product_specific`）
- 归一化基准：每 1 kg 厂门处净合格可销售参考产品
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_casing_mass`
- 来源：`eu-pef-2021-2279`、`codex-cxs-192-1995`
- UUID 状态：未解析；在精确双核核验前保持为空。
- 适用性：仅在 Polyamide synthetic casing 针对单一锁定产品配方和处理顺序实际跨越过程边界时记录；否则将该原子行标记为不适用。
- 不确定性：保留秤分辨率、校准状态、去皮方法、适用时的水分基准以及批次核对差异。

###### 计量成形用电（`forming_grid_electricity`）

Grid electricity, medium voltage 在本过程中作为一项原子输入交换记录；其不得代替任何其他物料、载体、废物或排放。

- 选定流：Grid electricity, medium voltage
- 流属性/单位：Energy / kWh
- 数量规则：记录该交换针对锁定批次跨越本过程边界的前景实测数量。
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每 1 kg 厂门处净合格可销售参考产品
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_stage_electricity`
- 来源：`eu-pef-2021-2279`、`jrc-sa-bref-2024`
- UUID 状态：未解析；在精确双核核验前保持为空。
- 适用性：仅在 Grid electricity, medium voltage 针对单一锁定产品配方和处理顺序实际跨越过程边界时记录；否则将该原子行标记为不适用。
- 不确定性：保留仪表分辨率、校准状态、计量覆盖、时间区间以及任何批次归属计算。

###### 计量肠衣准备用水（`forming_process_water`）

Potable process water 在本过程中作为一项原子输入交换记录；其不得代替任何其他物料、载体、废物或排放。

- 选定流：Potable process water
- 流属性/单位：Mass / kg
- 数量规则：记录该交换针对锁定批次跨越本过程边界的前景实测数量。
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每 1 kg 厂门处净合格可销售参考产品
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_process_water_mass`
- 来源：`eu-pef-2021-2279`、`codex-cxc-58-2005`、`jrc-sa-bref-2024`
- UUID 状态：未解析；在精确双核核验前保持为空。
- 适用性：仅在 Potable process water 针对单一锁定产品配方和处理顺序实际跨越过程边界时记录；否则将该原子行标记为不适用。
- 不确定性：保留秤分辨率、校准状态、去皮方法、适用时的水分基准以及批次核对差异。

##### 废物流

##### 基本流

#### 输出

##### 产品流

###### 产出生猪肉鲜香肠段（`forming_output_pork_fresh`）

Raw pork fresh sausage links 在本过程中作为一项原子输出交换记录；其不得代替任何其他物料、载体、废物或排放。

- 选定流：Raw pork fresh sausage links
- 流属性/单位：Mass / kg
- 数量规则：记录该交换针对锁定批次跨越本过程边界的前景实测数量。
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：产品特定（`product_specific`）
- 归一化基准：每 1 kg 厂门处净合格可销售参考产品
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_intermediate_product_mass`
- 来源：`eu-pef-2021-2279`、`codex-cxs-192-1995`
- UUID 状态：未解析；在精确双核核验前保持为空。
- 适用性：仅在 Raw pork fresh sausage links 针对单一锁定产品配方和处理顺序实际跨越过程边界时记录；否则将该原子行标记为不适用。
- 不确定性：保留秤分辨率、校准状态、去皮方法、适用时的水分基准以及批次核对差异。

###### 产出生牛肉熟制香肠段（`forming_output_beef_cooked`）

Raw beef cooked-sausage links 在本过程中作为一项原子输出交换记录；其不得代替任何其他物料、载体、废物或排放。

- 选定流：Raw beef cooked-sausage links
- 流属性/单位：Mass / kg
- 数量规则：记录该交换针对锁定批次跨越本过程边界的前景实测数量。
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：产品特定（`product_specific`）
- 归一化基准：每 1 kg 厂门处净合格可销售参考产品
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_intermediate_product_mass`
- 来源：`eu-pef-2021-2279`、`codex-cxs-192-1995`
- UUID 状态：未解析；在精确双核核验前保持为空。
- 适用性：仅在 Raw beef cooked-sausage links 针对单一锁定产品配方和处理顺序实际跨越过程边界时记录；否则将该原子行标记为不适用。
- 不确定性：保留秤分辨率、校准状态、去皮方法、适用时的水分基准以及批次核对差异。

###### 产出生猪肉发酵香肠段（`forming_output_pork_fermented`）

Raw pork fermented-sausage links 在本过程中作为一项原子输出交换记录；其不得代替任何其他物料、载体、废物或排放。

- 选定流：Raw pork fermented-sausage links
- 流属性/单位：Mass / kg
- 数量规则：记录该交换针对锁定批次跨越本过程边界的前景实测数量。
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：产品特定（`product_specific`）
- 归一化基准：每 1 kg 厂门处净合格可销售参考产品
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_intermediate_product_mass`
- 来源：`eu-pef-2021-2279`、`codex-cxs-192-1995`
- UUID 状态：未解析；在精确双核核验前保持为空。
- 适用性：仅在 Raw pork fermented-sausage links 针对单一锁定产品配方和处理顺序实际跨越过程边界时记录；否则将该原子行标记为不适用。
- 不确定性：保留秤分辨率、校准状态、去皮方法、适用时的水分基准以及批次核对差异。

###### 产出灌装猪血布丁（`forming_output_pig_blood`）

Filled pig blood pudding 在本过程中作为一项原子输出交换记录；其不得代替任何其他物料、载体、废物或排放。

- 选定流：Filled pig blood pudding
- 流属性/单位：Mass / kg
- 数量规则：记录该交换针对锁定批次跨越本过程边界的前景实测数量。
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：产品特定（`product_specific`）
- 归一化基准：每 1 kg 厂门处净合格可销售参考产品
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_intermediate_product_mass`
- 来源：`eu-pef-2021-2279`、`codex-cxs-192-1995`
- UUID 状态：未解析；在精确双核核验前保持为空。
- 适用性：仅在 Filled pig blood pudding 针对单一锁定产品配方和处理顺序实际跨越过程边界时记录；否则将该原子行标记为不适用。
- 不确定性：保留秤分辨率、校准状态、去皮方法、适用时的水分基准以及批次核对差异。

###### 产出灌装牛血布丁（`forming_output_cattle_blood`）

Filled cattle blood pudding 在本过程中作为一项原子输出交换记录；其不得代替任何其他物料、载体、废物或排放。

- 选定流：Filled cattle blood pudding
- 流属性/单位：Mass / kg
- 数量规则：记录该交换针对锁定批次跨越本过程边界的前景实测数量。
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：产品特定（`product_specific`）
- 归一化基准：每 1 kg 厂门处净合格可销售参考产品
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_intermediate_product_mass`
- 来源：`eu-pef-2021-2279`、`codex-cxs-192-1995`
- UUID 状态：未解析；在精确双核核验前保持为空。
- 适用性：仅在 Filled cattle blood pudding 针对单一锁定产品配方和处理顺序实际跨越过程边界时记录；否则将该原子行标记为不适用。
- 不确定性：保留秤分辨率、校准状态、去皮方法、适用时的水分基准以及批次核对差异。

###### 产出灌装猪肝香肠（`forming_output_pork_liver`）

Filled pork liver sausage 在本过程中作为一项原子输出交换记录；其不得代替任何其他物料、载体、废物或排放。

- 选定流：Filled pork liver sausage
- 流属性/单位：Mass / kg
- 数量规则：记录该交换针对锁定批次跨越本过程边界的前景实测数量。
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：产品特定（`product_specific`）
- 归一化基准：每 1 kg 厂门处净合格可销售参考产品
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_intermediate_product_mass`
- 来源：`eu-pef-2021-2279`、`codex-cxs-192-1995`
- UUID 状态：未解析；在精确双核核验前保持为空。
- 适用性：仅在 Filled pork liver sausage 针对单一锁定产品配方和处理顺序实际跨越过程边界时记录；否则将该原子行标记为不适用。
- 不确定性：保留秤分辨率、校准状态、去皮方法、适用时的水分基准以及批次核对差异。

###### 产出灌装牛心香肠（`forming_output_beef_heart`）

Filled beef heart sausage 在本过程中作为一项原子输出交换记录；其不得代替任何其他物料、载体、废物或排放。

- 选定流：Filled beef heart sausage
- 流属性/单位：Mass / kg
- 数量规则：记录该交换针对锁定批次跨越本过程边界的前景实测数量。
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：产品特定（`product_specific`）
- 归一化基准：每 1 kg 厂门处净合格可销售参考产品
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_intermediate_product_mass`
- 来源：`eu-pef-2021-2279`、`codex-cxs-192-1995`
- UUID 状态：未解析；在精确双核核验前保持为空。
- 适用性：仅在 Filled beef heart sausage 针对单一锁定产品配方和处理顺序实际跨越过程边界时记录；否则将该原子行标记为不适用。
- 不确定性：保留秤分辨率、校准状态、去皮方法、适用时的水分基准以及批次核对差异。

###### 产出灌装猪肾香肠（`forming_output_pork_kidney`）

Filled pork kidney sausage 在本过程中作为一项原子输出交换记录；其不得代替任何其他物料、载体、废物或排放。

- 选定流：Filled pork kidney sausage
- 流属性/单位：Mass / kg
- 数量规则：记录该交换针对锁定批次跨越本过程边界的前景实测数量。
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：产品特定（`product_specific`）
- 归一化基准：每 1 kg 厂门处净合格可销售参考产品
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_intermediate_product_mass`
- 来源：`eu-pef-2021-2279`、`codex-cxs-192-1995`
- UUID 状态：未解析；在精确双核核验前保持为空。
- 适用性：仅在 Filled pork kidney sausage 针对单一锁定产品配方和处理顺序实际跨越过程边界时记录；否则将该原子行标记为不适用。
- 不确定性：保留秤分辨率、校准状态、去皮方法、适用时的水分基准以及批次核对差异。

###### 产出肠衣内鸡肉加朗汀（`forming_output_chicken_galantine`）

Chicken galantine in casing 在本过程中作为一项原子输出交换记录；其不得代替任何其他物料、载体、废物或排放。

- 选定流：Chicken galantine in casing
- 流属性/单位：Mass / kg
- 数量规则：记录该交换针对锁定批次跨越本过程边界的前景实测数量。
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：产品特定（`product_specific`）
- 归一化基准：每 1 kg 厂门处净合格可销售参考产品
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_intermediate_product_mass`
- 来源：`eu-pef-2021-2279`、`codex-cxs-192-1995`
- UUID 状态：未解析；在精确双核核验前保持为空。
- 适用性：仅在 Chicken galantine in casing 针对单一锁定产品配方和处理顺序实际跨越过程边界时记录；否则将该原子行标记为不适用。
- 不确定性：保留秤分辨率、校准状态、去皮方法、适用时的水分基准以及批次核对差异。

###### 产出肠衣内牛肉酱（`forming_output_beef_meat_paste`）

Beef meat paste in casing 在本过程中作为一项原子输出交换记录；其不得代替任何其他物料、载体、废物或排放。

- 选定流：Beef meat paste in casing
- 流属性/单位：Mass / kg
- 数量规则：记录该交换针对锁定批次跨越本过程边界的前景实测数量。
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：产品特定（`product_specific`）
- 归一化基准：每 1 kg 厂门处净合格可销售参考产品
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_intermediate_product_mass`
- 来源：`eu-pef-2021-2279`、`codex-cxs-192-1995`
- UUID 状态：未解析；在精确双核核验前保持为空。
- 适用性：仅在 Beef meat paste in casing 针对单一锁定产品配方和处理顺序实际跨越过程边界时记录；否则将该原子行标记为不适用。
- 不确定性：保留秤分辨率、校准状态、去皮方法、适用时的水分基准以及批次核对差异。

###### 产出肠衣内猪肉酱（`forming_output_pork_pate`）

Pork pâté in casing 在本过程中作为一项原子输出交换记录；其不得代替任何其他物料、载体、废物或排放。

- 选定流：Pork pâté in casing
- 流属性/单位：Mass / kg
- 数量规则：记录该交换针对锁定批次跨越本过程边界的前景实测数量。
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：产品特定（`product_specific`）
- 归一化基准：每 1 kg 厂门处净合格可销售参考产品
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_intermediate_product_mass`
- 来源：`eu-pef-2021-2279`、`codex-cxs-192-1995`
- UUID 状态：未解析；在精确双核核验前保持为空。
- 适用性：仅在 Pork pâté in casing 针对单一锁定产品配方和处理顺序实际跨越过程边界时记录；否则将该原子行标记为不适用。
- 不确定性：保留秤分辨率、校准状态、去皮方法、适用时的水分基准以及批次核对差异。

###### 产出肠衣内猪肉酥酱（`forming_output_pork_rillettes`）

Pork rillettes in casing 在本过程中作为一项原子输出交换记录；其不得代替任何其他物料、载体、废物或排放。

- 选定流：Pork rillettes in casing
- 流属性/单位：Mass / kg
- 数量规则：记录该交换针对锁定批次跨越本过程边界的前景实测数量。
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：产品特定（`product_specific`）
- 归一化基准：每 1 kg 厂门处净合格可销售参考产品
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_intermediate_product_mass`
- 来源：`eu-pef-2021-2279`、`codex-cxs-192-1995`
- UUID 状态：未解析；在精确双核核验前保持为空。
- 适用性：仅在 Pork rillettes in casing 针对单一锁定产品配方和处理顺序实际跨越过程边界时记录；否则将该原子行标记为不适用。
- 不确定性：保留秤分辨率、校准状态、去皮方法、适用时的水分基准以及批次核对差异。

##### 废物流

###### 移出天然猪肠衣边角废物（`forming_casing_waste_hog`）

Natural hog casing trim waste 在本过程中作为一项原子输出交换记录；其不得代替任何其他物料、载体、废物或排放。

- 选定流：Natural hog casing trim waste
- 流属性/单位：Mass / kg
- 数量规则：记录该交换针对锁定批次跨越本过程边界的前景实测数量。
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每 1 kg 厂门处净合格可销售参考产品
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_material_waste_mass`
- 来源：`eu-pef-2021-2279`、`jrc-sa-bref-2024`
- UUID 状态：未解析；在精确双核核验前保持为空。
- 适用性：仅在 Natural hog casing trim waste 针对单一锁定产品配方和处理顺序实际跨越过程边界时记录；否则将该原子行标记为不适用。
- 不确定性：保留秤分辨率、校准状态、去皮方法、适用时的水分基准以及批次核对差异。

###### 移出天然羊肠衣边角废物（`forming_casing_waste_sheep`）

Natural sheep casing trim waste 在本过程中作为一项原子输出交换记录；其不得代替任何其他物料、载体、废物或排放。

- 选定流：Natural sheep casing trim waste
- 流属性/单位：Mass / kg
- 数量规则：记录该交换针对锁定批次跨越本过程边界的前景实测数量。
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每 1 kg 厂门处净合格可销售参考产品
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_material_waste_mass`
- 来源：`eu-pef-2021-2279`、`jrc-sa-bref-2024`
- UUID 状态：未解析；在精确双核核验前保持为空。
- 适用性：仅在 Natural sheep casing trim waste 针对单一锁定产品配方和处理顺序实际跨越过程边界时记录；否则将该原子行标记为不适用。
- 不确定性：保留秤分辨率、校准状态、去皮方法、适用时的水分基准以及批次核对差异。

###### 移出天然牛肠衣边角废物（`forming_casing_waste_cattle`）

Natural cattle casing trim waste 在本过程中作为一项原子输出交换记录；其不得代替任何其他物料、载体、废物或排放。

- 选定流：Natural cattle casing trim waste
- 流属性/单位：Mass / kg
- 数量规则：记录该交换针对锁定批次跨越本过程边界的前景实测数量。
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每 1 kg 厂门处净合格可销售参考产品
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_material_waste_mass`
- 来源：`eu-pef-2021-2279`、`jrc-sa-bref-2024`
- UUID 状态：未解析；在精确双核核验前保持为空。
- 适用性：仅在 Natural cattle casing trim waste 针对单一锁定产品配方和处理顺序实际跨越过程边界时记录；否则将该原子行标记为不适用。
- 不确定性：保留秤分辨率、校准状态、去皮方法、适用时的水分基准以及批次核对差异。

###### 移出胶原肠衣边角废物（`forming_casing_waste_collagen`）

Collagen casing trim waste 在本过程中作为一项原子输出交换记录；其不得代替任何其他物料、载体、废物或排放。

- 选定流：Collagen casing trim waste
- 流属性/单位：Mass / kg
- 数量规则：记录该交换针对锁定批次跨越本过程边界的前景实测数量。
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每 1 kg 厂门处净合格可销售参考产品
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_material_waste_mass`
- 来源：`eu-pef-2021-2279`、`jrc-sa-bref-2024`
- UUID 状态：未解析；在精确双核核验前保持为空。
- 适用性：仅在 Collagen casing trim waste 针对单一锁定产品配方和处理顺序实际跨越过程边界时记录；否则将该原子行标记为不适用。
- 不确定性：保留秤分辨率、校准状态、去皮方法、适用时的水分基准以及批次核对差异。

###### 移出纤维素肠衣边角废物（`forming_casing_waste_cellulose`）

Cellulose casing trim waste 在本过程中作为一项原子输出交换记录；其不得代替任何其他物料、载体、废物或排放。

- 选定流：Cellulose casing trim waste
- 流属性/单位：Mass / kg
- 数量规则：记录该交换针对锁定批次跨越本过程边界的前景实测数量。
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每 1 kg 厂门处净合格可销售参考产品
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_material_waste_mass`
- 来源：`eu-pef-2021-2279`、`jrc-sa-bref-2024`
- UUID 状态：未解析；在精确双核核验前保持为空。
- 适用性：仅在 Cellulose casing trim waste 针对单一锁定产品配方和处理顺序实际跨越过程边界时记录；否则将该原子行标记为不适用。
- 不确定性：保留秤分辨率、校准状态、去皮方法、适用时的水分基准以及批次核对差异。

###### 移出聚酰胺合成肠衣边角废物（`forming_casing_waste_polyamide`）

Polyamide synthetic casing trim waste 在本过程中作为一项原子输出交换记录；其不得代替任何其他物料、载体、废物或排放。

- 选定流：Polyamide synthetic casing trim waste
- 流属性/单位：Mass / kg
- 数量规则：记录该交换针对锁定批次跨越本过程边界的前景实测数量。
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每 1 kg 厂门处净合格可销售参考产品
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_material_waste_mass`
- 来源：`eu-pef-2021-2279`、`jrc-sa-bref-2024`
- UUID 状态：未解析；在精确双核核验前保持为空。
- 适用性：仅在 Polyamide synthetic casing trim waste 针对单一锁定产品配方和处理顺序实际跨越过程边界时记录；否则将该原子行标记为不适用。
- 不确定性：保留秤分辨率、校准状态、去皮方法、适用时的水分基准以及批次核对差异。

###### 移出生猪肉鲜香肠段成形不合格物（`forming_reject_pork_fresh`）

Raw pork fresh sausage links forming reject 在本过程中作为一项原子输出交换记录；其不得代替任何其他物料、载体、废物或排放。

- 选定流：Raw pork fresh sausage links forming reject
- 流属性/单位：Mass / kg
- 数量规则：记录该交换针对锁定批次跨越本过程边界的前景实测数量。
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：产品特定（`product_specific`）
- 归一化基准：每 1 kg 厂门处净合格可销售参考产品
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_material_waste_mass`
- 来源：`eu-pef-2021-2279`、`jrc-sa-bref-2024`
- UUID 状态：未解析；在精确双核核验前保持为空。
- 适用性：仅在 Raw pork fresh sausage links forming reject 针对单一锁定产品配方和处理顺序实际跨越过程边界时记录；否则将该原子行标记为不适用。
- 不确定性：保留秤分辨率、校准状态、去皮方法、适用时的水分基准以及批次核对差异。

###### 移出生牛肉熟制香肠段成形不合格物（`forming_reject_beef_cooked`）

Raw beef cooked-sausage links forming reject 在本过程中作为一项原子输出交换记录；其不得代替任何其他物料、载体、废物或排放。

- 选定流：Raw beef cooked-sausage links forming reject
- 流属性/单位：Mass / kg
- 数量规则：记录该交换针对锁定批次跨越本过程边界的前景实测数量。
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：产品特定（`product_specific`）
- 归一化基准：每 1 kg 厂门处净合格可销售参考产品
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_material_waste_mass`
- 来源：`eu-pef-2021-2279`、`jrc-sa-bref-2024`
- UUID 状态：未解析；在精确双核核验前保持为空。
- 适用性：仅在 Raw beef cooked-sausage links forming reject 针对单一锁定产品配方和处理顺序实际跨越过程边界时记录；否则将该原子行标记为不适用。
- 不确定性：保留秤分辨率、校准状态、去皮方法、适用时的水分基准以及批次核对差异。

###### 移出生猪肉发酵香肠段成形不合格物（`forming_reject_pork_fermented`）

Raw pork fermented-sausage links forming reject 在本过程中作为一项原子输出交换记录；其不得代替任何其他物料、载体、废物或排放。

- 选定流：Raw pork fermented-sausage links forming reject
- 流属性/单位：Mass / kg
- 数量规则：记录该交换针对锁定批次跨越本过程边界的前景实测数量。
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：产品特定（`product_specific`）
- 归一化基准：每 1 kg 厂门处净合格可销售参考产品
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_material_waste_mass`
- 来源：`eu-pef-2021-2279`、`jrc-sa-bref-2024`
- UUID 状态：未解析；在精确双核核验前保持为空。
- 适用性：仅在 Raw pork fermented-sausage links forming reject 针对单一锁定产品配方和处理顺序实际跨越过程边界时记录；否则将该原子行标记为不适用。
- 不确定性：保留秤分辨率、校准状态、去皮方法、适用时的水分基准以及批次核对差异。

###### 移出灌装猪血布丁成形不合格物（`forming_reject_pig_blood`）

Filled pig blood pudding forming reject 在本过程中作为一项原子输出交换记录；其不得代替任何其他物料、载体、废物或排放。

- 选定流：Filled pig blood pudding forming reject
- 流属性/单位：Mass / kg
- 数量规则：记录该交换针对锁定批次跨越本过程边界的前景实测数量。
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：产品特定（`product_specific`）
- 归一化基准：每 1 kg 厂门处净合格可销售参考产品
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_material_waste_mass`
- 来源：`eu-pef-2021-2279`、`jrc-sa-bref-2024`
- UUID 状态：未解析；在精确双核核验前保持为空。
- 适用性：仅在 Filled pig blood pudding forming reject 针对单一锁定产品配方和处理顺序实际跨越过程边界时记录；否则将该原子行标记为不适用。
- 不确定性：保留秤分辨率、校准状态、去皮方法、适用时的水分基准以及批次核对差异。

###### 移出灌装牛血布丁成形不合格物（`forming_reject_cattle_blood`）

Filled cattle blood pudding forming reject 在本过程中作为一项原子输出交换记录；其不得代替任何其他物料、载体、废物或排放。

- 选定流：Filled cattle blood pudding forming reject
- 流属性/单位：Mass / kg
- 数量规则：记录该交换针对锁定批次跨越本过程边界的前景实测数量。
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：产品特定（`product_specific`）
- 归一化基准：每 1 kg 厂门处净合格可销售参考产品
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_material_waste_mass`
- 来源：`eu-pef-2021-2279`、`jrc-sa-bref-2024`
- UUID 状态：未解析；在精确双核核验前保持为空。
- 适用性：仅在 Filled cattle blood pudding forming reject 针对单一锁定产品配方和处理顺序实际跨越过程边界时记录；否则将该原子行标记为不适用。
- 不确定性：保留秤分辨率、校准状态、去皮方法、适用时的水分基准以及批次核对差异。

###### 移出灌装猪肝香肠成形不合格物（`forming_reject_pork_liver`）

Filled pork liver sausage forming reject 在本过程中作为一项原子输出交换记录；其不得代替任何其他物料、载体、废物或排放。

- 选定流：Filled pork liver sausage forming reject
- 流属性/单位：Mass / kg
- 数量规则：记录该交换针对锁定批次跨越本过程边界的前景实测数量。
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：产品特定（`product_specific`）
- 归一化基准：每 1 kg 厂门处净合格可销售参考产品
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_material_waste_mass`
- 来源：`eu-pef-2021-2279`、`jrc-sa-bref-2024`
- UUID 状态：未解析；在精确双核核验前保持为空。
- 适用性：仅在 Filled pork liver sausage forming reject 针对单一锁定产品配方和处理顺序实际跨越过程边界时记录；否则将该原子行标记为不适用。
- 不确定性：保留秤分辨率、校准状态、去皮方法、适用时的水分基准以及批次核对差异。

###### 移出灌装牛心香肠成形不合格物（`forming_reject_beef_heart`）

Filled beef heart sausage forming reject 在本过程中作为一项原子输出交换记录；其不得代替任何其他物料、载体、废物或排放。

- 选定流：Filled beef heart sausage forming reject
- 流属性/单位：Mass / kg
- 数量规则：记录该交换针对锁定批次跨越本过程边界的前景实测数量。
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：产品特定（`product_specific`）
- 归一化基准：每 1 kg 厂门处净合格可销售参考产品
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_material_waste_mass`
- 来源：`eu-pef-2021-2279`、`jrc-sa-bref-2024`
- UUID 状态：未解析；在精确双核核验前保持为空。
- 适用性：仅在 Filled beef heart sausage forming reject 针对单一锁定产品配方和处理顺序实际跨越过程边界时记录；否则将该原子行标记为不适用。
- 不确定性：保留秤分辨率、校准状态、去皮方法、适用时的水分基准以及批次核对差异。

###### 移出灌装猪肾香肠成形不合格物（`forming_reject_pork_kidney`）

Filled pork kidney sausage forming reject 在本过程中作为一项原子输出交换记录；其不得代替任何其他物料、载体、废物或排放。

- 选定流：Filled pork kidney sausage forming reject
- 流属性/单位：Mass / kg
- 数量规则：记录该交换针对锁定批次跨越本过程边界的前景实测数量。
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：产品特定（`product_specific`）
- 归一化基准：每 1 kg 厂门处净合格可销售参考产品
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_material_waste_mass`
- 来源：`eu-pef-2021-2279`、`jrc-sa-bref-2024`
- UUID 状态：未解析；在精确双核核验前保持为空。
- 适用性：仅在 Filled pork kidney sausage forming reject 针对单一锁定产品配方和处理顺序实际跨越过程边界时记录；否则将该原子行标记为不适用。
- 不确定性：保留秤分辨率、校准状态、去皮方法、适用时的水分基准以及批次核对差异。

###### 移出肠衣内鸡肉加朗汀成形不合格物（`forming_reject_chicken_galantine`）

Chicken galantine in casing forming reject 在本过程中作为一项原子输出交换记录；其不得代替任何其他物料、载体、废物或排放。

- 选定流：Chicken galantine in casing forming reject
- 流属性/单位：Mass / kg
- 数量规则：记录该交换针对锁定批次跨越本过程边界的前景实测数量。
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：产品特定（`product_specific`）
- 归一化基准：每 1 kg 厂门处净合格可销售参考产品
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_material_waste_mass`
- 来源：`eu-pef-2021-2279`、`jrc-sa-bref-2024`
- UUID 状态：未解析；在精确双核核验前保持为空。
- 适用性：仅在 Chicken galantine in casing forming reject 针对单一锁定产品配方和处理顺序实际跨越过程边界时记录；否则将该原子行标记为不适用。
- 不确定性：保留秤分辨率、校准状态、去皮方法、适用时的水分基准以及批次核对差异。

###### 移出肠衣内牛肉酱成形不合格物（`forming_reject_beef_meat_paste`）

Beef meat paste in casing forming reject 在本过程中作为一项原子输出交换记录；其不得代替任何其他物料、载体、废物或排放。

- 选定流：Beef meat paste in casing forming reject
- 流属性/单位：Mass / kg
- 数量规则：记录该交换针对锁定批次跨越本过程边界的前景实测数量。
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：产品特定（`product_specific`）
- 归一化基准：每 1 kg 厂门处净合格可销售参考产品
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_material_waste_mass`
- 来源：`eu-pef-2021-2279`、`jrc-sa-bref-2024`
- UUID 状态：未解析；在精确双核核验前保持为空。
- 适用性：仅在 Beef meat paste in casing forming reject 针对单一锁定产品配方和处理顺序实际跨越过程边界时记录；否则将该原子行标记为不适用。
- 不确定性：保留秤分辨率、校准状态、去皮方法、适用时的水分基准以及批次核对差异。

###### 移出肠衣内猪肉酱成形不合格物（`forming_reject_pork_pate`）

Pork pâté in casing forming reject 在本过程中作为一项原子输出交换记录；其不得代替任何其他物料、载体、废物或排放。

- 选定流：Pork pâté in casing forming reject
- 流属性/单位：Mass / kg
- 数量规则：记录该交换针对锁定批次跨越本过程边界的前景实测数量。
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：产品特定（`product_specific`）
- 归一化基准：每 1 kg 厂门处净合格可销售参考产品
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_material_waste_mass`
- 来源：`eu-pef-2021-2279`、`jrc-sa-bref-2024`
- UUID 状态：未解析；在精确双核核验前保持为空。
- 适用性：仅在 Pork pâté in casing forming reject 针对单一锁定产品配方和处理顺序实际跨越过程边界时记录；否则将该原子行标记为不适用。
- 不确定性：保留秤分辨率、校准状态、去皮方法、适用时的水分基准以及批次核对差异。

###### 移出肠衣内猪肉酥酱成形不合格物（`forming_reject_pork_rillettes`）

Pork rillettes in casing forming reject 在本过程中作为一项原子输出交换记录；其不得代替任何其他物料、载体、废物或排放。

- 选定流：Pork rillettes in casing forming reject
- 流属性/单位：Mass / kg
- 数量规则：记录该交换针对锁定批次跨越本过程边界的前景实测数量。
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：产品特定（`product_specific`）
- 归一化基准：每 1 kg 厂门处净合格可销售参考产品
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_material_waste_mass`
- 来源：`eu-pef-2021-2279`、`jrc-sa-bref-2024`
- UUID 状态：未解析；在精确双核核验前保持为空。
- 适用性：仅在 Pork rillettes in casing forming reject 针对单一锁定产品配方和处理顺序实际跨越过程边界时记录；否则将该原子行标记为不适用。
- 不确定性：保留秤分辨率、校准状态、去皮方法、适用时的水分基准以及批次核对差异。

###### 移出灌装机冲洗废水（`forming_machine_washout`）

Filling-machine washout wastewater 在本过程中作为一项原子输出交换记录；其不得代替任何其他物料、载体、废物或排放。

- 选定流：Filling-machine washout wastewater
- 流属性/单位：Volume / m3
- 数量规则：记录该交换针对锁定批次跨越本过程边界的前景实测数量。
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每 1 kg 厂门处净合格可销售参考产品
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_wastewater_volume`
- 来源：`eu-pef-2021-2279`、`jrc-sa-bref-2024`
- UUID 状态：未解析；在精确双核核验前保持为空。
- 适用性：仅在 Filling-machine washout wastewater 针对单一锁定产品配方和处理顺序实际跨越过程边界时记录；否则将该原子行标记为不适用。
- 不确定性：保留仪表分辨率、校准状态、采样间隔、适用时的密度换算以及时间覆盖。

##### 基本流

### 过程：腌制（`curing`）

在有记录的时间和温度条件下进行盐或腌制剂接触的前景过程。仅在锁定处理顺序包含腌制步骤时纳入。

#### 输入

##### 产品流

###### 投入猪肉发酵香肠（`curing_input_pork_fermented`）

Raw pork fermented-sausage links 在本过程中作为一项原子输入交换记录；其不得代替任何其他物料、载体、废物或排放。

- 选定流：Raw pork fermented-sausage links
- 流属性/单位：Mass / kg
- 数量规则：记录该交换针对锁定批次跨越本过程边界的前景实测数量。
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：产品特定（`product_specific`）
- 归一化基准：每 1 kg 厂门处净合格可销售参考产品
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_intermediate_product_mass`
- 来源：`eu-pef-2021-2279`、`codex-cxs-192-1995`
- UUID 状态：未解析；在精确双核核验前保持为空。
- 适用性：仅在 Raw pork fermented-sausage links 针对单一锁定产品配方和处理顺序实际跨越过程边界时记录；否则将该原子行标记为不适用。
- 不确定性：保留秤分辨率、校准状态、去皮方法、适用时的水分基准以及批次核对差异。

###### 投入牛肉熟制香肠（`curing_input_beef_cooked`）

Raw beef cooked-sausage links 在本过程中作为一项原子输入交换记录；其不得代替任何其他物料、载体、废物或排放。

- 选定流：Raw beef cooked-sausage links
- 流属性/单位：Mass / kg
- 数量规则：记录该交换针对锁定批次跨越本过程边界的前景实测数量。
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：产品特定（`product_specific`）
- 归一化基准：每 1 kg 厂门处净合格可销售参考产品
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_intermediate_product_mass`
- 来源：`eu-pef-2021-2279`、`codex-cxs-192-1995`
- UUID 状态：未解析；在精确双核核验前保持为空。
- 适用性：仅在 Raw beef cooked-sausage links 针对单一锁定产品配方和处理顺序实际跨越过程边界时记录；否则将该原子行标记为不适用。
- 不确定性：保留秤分辨率、校准状态、去皮方法、适用时的水分基准以及批次核对差异。

###### 投入猪肝香肠（`curing_input_pork_liver`）

Filled pork liver sausage 在本过程中作为一项原子输入交换记录；其不得代替任何其他物料、载体、废物或排放。

- 选定流：Filled pork liver sausage
- 流属性/单位：Mass / kg
- 数量规则：记录该交换针对锁定批次跨越本过程边界的前景实测数量。
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：产品特定（`product_specific`）
- 归一化基准：每 1 kg 厂门处净合格可销售参考产品
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_intermediate_product_mass`
- 来源：`eu-pef-2021-2279`、`codex-cxs-192-1995`
- UUID 状态：未解析；在精确双核核验前保持为空。
- 适用性：仅在 Filled pork liver sausage 针对单一锁定产品配方和处理顺序实际跨越过程边界时记录；否则将该原子行标记为不适用。
- 不确定性：保留秤分辨率、校准状态、去皮方法、适用时的水分基准以及批次核对差异。

###### 投入牛心香肠（`curing_input_beef_heart`）

Filled beef heart sausage 在本过程中作为一项原子输入交换记录；其不得代替任何其他物料、载体、废物或排放。

- 选定流：Filled beef heart sausage
- 流属性/单位：Mass / kg
- 数量规则：记录该交换针对锁定批次跨越本过程边界的前景实测数量。
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：产品特定（`product_specific`）
- 归一化基准：每 1 kg 厂门处净合格可销售参考产品
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_intermediate_product_mass`
- 来源：`eu-pef-2021-2279`、`codex-cxs-192-1995`
- UUID 状态：未解析；在精确双核核验前保持为空。
- 适用性：仅在 Filled beef heart sausage 针对单一锁定产品配方和处理顺序实际跨越过程边界时记录；否则将该原子行标记为不适用。
- 不确定性：保留秤分辨率、校准状态、去皮方法、适用时的水分基准以及批次核对差异。

###### 投入猪肾香肠（`curing_input_pork_kidney`）

Filled pork kidney sausage 在本过程中作为一项原子输入交换记录；其不得代替任何其他物料、载体、废物或排放。

- 选定流：Filled pork kidney sausage
- 流属性/单位：Mass / kg
- 数量规则：记录该交换针对锁定批次跨越本过程边界的前景实测数量。
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：产品特定（`product_specific`）
- 归一化基准：每 1 kg 厂门处净合格可销售参考产品
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_intermediate_product_mass`
- 来源：`eu-pef-2021-2279`、`codex-cxs-192-1995`
- UUID 状态：未解析；在精确双核核验前保持为空。
- 适用性：仅在 Filled pork kidney sausage 针对单一锁定产品配方和处理顺序实际跨越过程边界时记录；否则将该原子行标记为不适用。
- 不确定性：保留秤分辨率、校准状态、去皮方法、适用时的水分基准以及批次核对差异。

###### 投加饮用级腌制水（`curing_input_water`）

Potable curing water 在本过程中作为一项原子输入交换记录；其不得代替任何其他物料、载体、废物或排放。

- 选定流：Potable curing water
- 流属性/单位：Mass / kg
- 数量规则：记录该交换针对锁定批次跨越本过程边界的前景实测数量。
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：产品特定（`product_specific`）
- 归一化基准：每 1 kg 厂门处净合格可销售参考产品
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_recipe_component_mass`
- 来源：`eu-pef-2021-2279`、`codex-cxs-192-1995`
- UUID 状态：未解析；在精确双核核验前保持为空。
- 适用性：仅在 Potable curing water 针对单一锁定产品配方和处理顺序实际跨越过程边界时记录；否则将该原子行标记为不适用。
- 不确定性：保留秤分辨率、校准状态、去皮方法、适用时的水分基准以及批次核对差异。

###### 投加氯化钠（`curing_input_salt`）

Sodium chloride 在本过程中作为一项原子输入交换记录；其不得代替任何其他物料、载体、废物或排放。

- 选定流：Sodium chloride
- 流属性/单位：Mass / kg
- 数量规则：记录该交换针对锁定批次跨越本过程边界的前景实测数量。
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：产品特定（`product_specific`）
- 归一化基准：每 1 kg 厂门处净合格可销售参考产品
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_recipe_component_mass`
- 来源：`eu-pef-2021-2279`、`codex-cxs-192-1995`
- UUID 状态：未解析；在精确双核核验前保持为空。
- 适用性：仅在 Sodium chloride 针对单一锁定产品配方和处理顺序实际跨越过程边界时记录；否则将该原子行标记为不适用。
- 不确定性：保留秤分辨率、校准状态、去皮方法、适用时的水分基准以及批次核对差异。

###### 投加亚硝酸钠（`curing_input_nitrite`）

Sodium nitrite 在本过程中作为一项原子输入交换记录；其不得代替任何其他物料、载体、废物或排放。

- 选定流：Sodium nitrite
- 流属性/单位：Mass / kg
- 数量规则：记录该交换针对锁定批次跨越本过程边界的前景实测数量。
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：产品特定（`product_specific`）
- 归一化基准：每 1 kg 厂门处净合格可销售参考产品
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_recipe_component_mass`
- 来源：`eu-pef-2021-2279`、`codex-cxs-192-1995`
- UUID 状态：未解析；在精确双核核验前保持为空。
- 适用性：仅在 Sodium nitrite 针对单一锁定产品配方和处理顺序实际跨越过程边界时记录；否则将该原子行标记为不适用。
- 不确定性：保留秤分辨率、校准状态、去皮方法、适用时的水分基准以及批次核对差异。

###### 投加硝酸钾（`curing_input_nitrate`）

Potassium nitrate 在本过程中作为一项原子输入交换记录；其不得代替任何其他物料、载体、废物或排放。

- 选定流：Potassium nitrate
- 流属性/单位：Mass / kg
- 数量规则：记录该交换针对锁定批次跨越本过程边界的前景实测数量。
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：产品特定（`product_specific`）
- 归一化基准：每 1 kg 厂门处净合格可销售参考产品
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_recipe_component_mass`
- 来源：`eu-pef-2021-2279`、`codex-cxs-192-1995`
- UUID 状态：未解析；在精确双核核验前保持为空。
- 适用性：仅在 Potassium nitrate 针对单一锁定产品配方和处理顺序实际跨越过程边界时记录；否则将该原子行标记为不适用。
- 不确定性：保留秤分辨率、校准状态、去皮方法、适用时的水分基准以及批次核对差异。

###### 计量腌制用电（`curing_grid_electricity`）

Grid electricity, medium voltage 在本过程中作为一项原子输入交换记录；其不得代替任何其他物料、载体、废物或排放。

- 选定流：Grid electricity, medium voltage
- 流属性/单位：Energy / kWh
- 数量规则：记录该交换针对锁定批次跨越本过程边界的前景实测数量。
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每 1 kg 厂门处净合格可销售参考产品
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_stage_electricity`
- 来源：`eu-pef-2021-2279`、`jrc-sa-bref-2024`
- UUID 状态：未解析；在精确双核核验前保持为空。
- 适用性：仅在 Grid electricity, medium voltage 针对单一锁定产品配方和处理顺序实际跨越过程边界时记录；否则将该原子行标记为不适用。
- 不确定性：保留仪表分辨率、校准状态、计量覆盖、时间区间以及任何批次归属计算。

###### 记录氨（R717）制冷剂补充（`curing_r717_makeup`）

Ammonia (R717) refrigerant makeup 在本过程中作为一项原子输入交换记录；其不得代替任何其他物料、载体、废物或排放。

- 选定流：Ammonia (R717) refrigerant makeup
- 流属性/单位：Mass / kg
- 数量规则：记录该交换针对锁定批次跨越本过程边界的前景实测数量。
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：技术特定（`technology_specific`）
- 归一化基准：每 1 kg 厂门处净合格可销售参考产品
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_refrigerant_reconciliation`
- 来源：`eu-pef-2021-2279`、`jrc-sa-bref-2024`
- UUID 状态：未解析；在精确双核核验前保持为空。
- 适用性：仅在 Ammonia (R717) refrigerant makeup 针对单一锁定产品配方和处理顺序实际跨越过程边界时记录；否则将该原子行标记为不适用。
- 不确定性：保留秤分辨率、校准状态、去皮方法、适用时的水分基准以及批次核对差异。

###### 记录二氧化碳（R744）制冷剂补充（`curing_r744_makeup`）

Carbon dioxide (R744) refrigerant makeup 在本过程中作为一项原子输入交换记录；其不得代替任何其他物料、载体、废物或排放。

- 选定流：Carbon dioxide (R744) refrigerant makeup
- 流属性/单位：Mass / kg
- 数量规则：记录该交换针对锁定批次跨越本过程边界的前景实测数量。
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：技术特定（`technology_specific`）
- 归一化基准：每 1 kg 厂门处净合格可销售参考产品
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_refrigerant_reconciliation`
- 来源：`eu-pef-2021-2279`、`jrc-sa-bref-2024`
- UUID 状态：未解析；在精确双核核验前保持为空。
- 适用性：仅在 Carbon dioxide (R744) refrigerant makeup 针对单一锁定产品配方和处理顺序实际跨越过程边界时记录；否则将该原子行标记为不适用。
- 不确定性：保留秤分辨率、校准状态、去皮方法、适用时的水分基准以及批次核对差异。

###### 记录丙烷（R290）制冷剂补充（`curing_r290_makeup`）

Propane (R290) refrigerant makeup 在本过程中作为一项原子输入交换记录；其不得代替任何其他物料、载体、废物或排放。

- 选定流：Propane (R290) refrigerant makeup
- 流属性/单位：Mass / kg
- 数量规则：记录该交换针对锁定批次跨越本过程边界的前景实测数量。
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：技术特定（`technology_specific`）
- 归一化基准：每 1 kg 厂门处净合格可销售参考产品
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_refrigerant_reconciliation`
- 来源：`eu-pef-2021-2279`、`jrc-sa-bref-2024`
- UUID 状态：未解析；在精确双核核验前保持为空。
- 适用性：仅在 Propane (R290) refrigerant makeup 针对单一锁定产品配方和处理顺序实际跨越过程边界时记录；否则将该原子行标记为不适用。
- 不确定性：保留秤分辨率、校准状态、去皮方法、适用时的水分基准以及批次核对差异。

##### 废物流

##### 基本流

#### 输出

##### 产品流

###### 产出腌制猪肉发酵香肠（`curing_output_pork_fermented`）

Cured pork fermented-sausage links 在本过程中作为一项原子输出交换记录；其不得代替任何其他物料、载体、废物或排放。

- 选定流：Cured pork fermented-sausage links
- 流属性/单位：Mass / kg
- 数量规则：记录该交换针对锁定批次跨越本过程边界的前景实测数量。
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：产品特定（`product_specific`）
- 归一化基准：每 1 kg 厂门处净合格可销售参考产品
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_intermediate_product_mass`
- 来源：`eu-pef-2021-2279`、`codex-cxs-192-1995`
- UUID 状态：未解析；在精确双核核验前保持为空。
- 适用性：仅在 Cured pork fermented-sausage links 针对单一锁定产品配方和处理顺序实际跨越过程边界时记录；否则将该原子行标记为不适用。
- 不确定性：保留秤分辨率、校准状态、去皮方法、适用时的水分基准以及批次核对差异。

###### 产出腌制牛肉熟制香肠（`curing_output_beef_cooked`）

Cured beef cooked-sausage links 在本过程中作为一项原子输出交换记录；其不得代替任何其他物料、载体、废物或排放。

- 选定流：Cured beef cooked-sausage links
- 流属性/单位：Mass / kg
- 数量规则：记录该交换针对锁定批次跨越本过程边界的前景实测数量。
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：产品特定（`product_specific`）
- 归一化基准：每 1 kg 厂门处净合格可销售参考产品
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_intermediate_product_mass`
- 来源：`eu-pef-2021-2279`、`codex-cxs-192-1995`
- UUID 状态：未解析；在精确双核核验前保持为空。
- 适用性：仅在 Cured beef cooked-sausage links 针对单一锁定产品配方和处理顺序实际跨越过程边界时记录；否则将该原子行标记为不适用。
- 不确定性：保留秤分辨率、校准状态、去皮方法、适用时的水分基准以及批次核对差异。

###### 产出腌制猪肝香肠（`curing_output_pork_liver`）

Cured pork liver sausage 在本过程中作为一项原子输出交换记录；其不得代替任何其他物料、载体、废物或排放。

- 选定流：Cured pork liver sausage
- 流属性/单位：Mass / kg
- 数量规则：记录该交换针对锁定批次跨越本过程边界的前景实测数量。
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：产品特定（`product_specific`）
- 归一化基准：每 1 kg 厂门处净合格可销售参考产品
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_intermediate_product_mass`
- 来源：`eu-pef-2021-2279`、`codex-cxs-192-1995`
- UUID 状态：未解析；在精确双核核验前保持为空。
- 适用性：仅在 Cured pork liver sausage 针对单一锁定产品配方和处理顺序实际跨越过程边界时记录；否则将该原子行标记为不适用。
- 不确定性：保留秤分辨率、校准状态、去皮方法、适用时的水分基准以及批次核对差异。

###### 产出腌制牛心香肠（`curing_output_beef_heart`）

Cured beef heart sausage 在本过程中作为一项原子输出交换记录；其不得代替任何其他物料、载体、废物或排放。

- 选定流：Cured beef heart sausage
- 流属性/单位：Mass / kg
- 数量规则：记录该交换针对锁定批次跨越本过程边界的前景实测数量。
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：产品特定（`product_specific`）
- 归一化基准：每 1 kg 厂门处净合格可销售参考产品
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_intermediate_product_mass`
- 来源：`eu-pef-2021-2279`、`codex-cxs-192-1995`
- UUID 状态：未解析；在精确双核核验前保持为空。
- 适用性：仅在 Cured beef heart sausage 针对单一锁定产品配方和处理顺序实际跨越过程边界时记录；否则将该原子行标记为不适用。
- 不确定性：保留秤分辨率、校准状态、去皮方法、适用时的水分基准以及批次核对差异。

###### 产出腌制猪肾香肠（`curing_output_pork_kidney`）

Cured pork kidney sausage 在本过程中作为一项原子输出交换记录；其不得代替任何其他物料、载体、废物或排放。

- 选定流：Cured pork kidney sausage
- 流属性/单位：Mass / kg
- 数量规则：记录该交换针对锁定批次跨越本过程边界的前景实测数量。
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：产品特定（`product_specific`）
- 归一化基准：每 1 kg 厂门处净合格可销售参考产品
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_intermediate_product_mass`
- 来源：`eu-pef-2021-2279`、`codex-cxs-192-1995`
- UUID 状态：未解析；在精确双核核验前保持为空。
- 适用性：仅在 Cured pork kidney sausage 针对单一锁定产品配方和处理顺序实际跨越过程边界时记录；否则将该原子行标记为不适用。
- 不确定性：保留秤分辨率、校准状态、去皮方法、适用时的水分基准以及批次核对差异。

##### 废物流

###### 移出腌制猪肉发酵香肠不合格物（`curing_reject_pork_fermented`）

Cured pork fermented-sausage links curing reject 在本过程中作为一项原子输出交换记录；其不得代替任何其他物料、载体、废物或排放。

- 选定流：Cured pork fermented-sausage links curing reject
- 流属性/单位：Mass / kg
- 数量规则：记录该交换针对锁定批次跨越本过程边界的前景实测数量。
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：产品特定（`product_specific`）
- 归一化基准：每 1 kg 厂门处净合格可销售参考产品
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_material_waste_mass`
- 来源：`eu-pef-2021-2279`、`jrc-sa-bref-2024`
- UUID 状态：未解析；在精确双核核验前保持为空。
- 适用性：仅在 Cured pork fermented-sausage links curing reject 针对单一锁定产品配方和处理顺序实际跨越过程边界时记录；否则将该原子行标记为不适用。
- 不确定性：保留秤分辨率、校准状态、去皮方法、适用时的水分基准以及批次核对差异。

###### 移出腌制牛肉熟制香肠不合格物（`curing_reject_beef_cooked`）

Cured beef cooked-sausage links curing reject 在本过程中作为一项原子输出交换记录；其不得代替任何其他物料、载体、废物或排放。

- 选定流：Cured beef cooked-sausage links curing reject
- 流属性/单位：Mass / kg
- 数量规则：记录该交换针对锁定批次跨越本过程边界的前景实测数量。
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：产品特定（`product_specific`）
- 归一化基准：每 1 kg 厂门处净合格可销售参考产品
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_material_waste_mass`
- 来源：`eu-pef-2021-2279`、`jrc-sa-bref-2024`
- UUID 状态：未解析；在精确双核核验前保持为空。
- 适用性：仅在 Cured beef cooked-sausage links curing reject 针对单一锁定产品配方和处理顺序实际跨越过程边界时记录；否则将该原子行标记为不适用。
- 不确定性：保留秤分辨率、校准状态、去皮方法、适用时的水分基准以及批次核对差异。

###### 移出腌制猪肝香肠不合格物（`curing_reject_pork_liver`）

Cured pork liver sausage curing reject 在本过程中作为一项原子输出交换记录；其不得代替任何其他物料、载体、废物或排放。

- 选定流：Cured pork liver sausage curing reject
- 流属性/单位：Mass / kg
- 数量规则：记录该交换针对锁定批次跨越本过程边界的前景实测数量。
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：产品特定（`product_specific`）
- 归一化基准：每 1 kg 厂门处净合格可销售参考产品
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_material_waste_mass`
- 来源：`eu-pef-2021-2279`、`jrc-sa-bref-2024`
- UUID 状态：未解析；在精确双核核验前保持为空。
- 适用性：仅在 Cured pork liver sausage curing reject 针对单一锁定产品配方和处理顺序实际跨越过程边界时记录；否则将该原子行标记为不适用。
- 不确定性：保留秤分辨率、校准状态、去皮方法、适用时的水分基准以及批次核对差异。

###### 移出腌制牛心香肠不合格物（`curing_reject_beef_heart`）

Cured beef heart sausage curing reject 在本过程中作为一项原子输出交换记录；其不得代替任何其他物料、载体、废物或排放。

- 选定流：Cured beef heart sausage curing reject
- 流属性/单位：Mass / kg
- 数量规则：记录该交换针对锁定批次跨越本过程边界的前景实测数量。
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：产品特定（`product_specific`）
- 归一化基准：每 1 kg 厂门处净合格可销售参考产品
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_material_waste_mass`
- 来源：`eu-pef-2021-2279`、`jrc-sa-bref-2024`
- UUID 状态：未解析；在精确双核核验前保持为空。
- 适用性：仅在 Cured beef heart sausage curing reject 针对单一锁定产品配方和处理顺序实际跨越过程边界时记录；否则将该原子行标记为不适用。
- 不确定性：保留秤分辨率、校准状态、去皮方法、适用时的水分基准以及批次核对差异。

###### 移出腌制猪肾香肠不合格物（`curing_reject_pork_kidney`）

Cured pork kidney sausage curing reject 在本过程中作为一项原子输出交换记录；其不得代替任何其他物料、载体、废物或排放。

- 选定流：Cured pork kidney sausage curing reject
- 流属性/单位：Mass / kg
- 数量规则：记录该交换针对锁定批次跨越本过程边界的前景实测数量。
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：产品特定（`product_specific`）
- 归一化基准：每 1 kg 厂门处净合格可销售参考产品
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_material_waste_mass`
- 来源：`eu-pef-2021-2279`、`jrc-sa-bref-2024`
- UUID 状态：未解析；在精确双核核验前保持为空。
- 适用性：仅在 Cured pork kidney sausage curing reject 针对单一锁定产品配方和处理顺序实际跨越过程边界时记录；否则将该原子行标记为不适用。
- 不确定性：保留秤分辨率、校准状态、去皮方法、适用时的水分基准以及批次核对差异。

###### 移出废氯化钠腌制盐水（`curing_spent_brine`）

Spent sodium-chloride curing brine 在本过程中作为一项原子输出交换记录；其不得代替任何其他物料、载体、废物或排放。

- 选定流：Spent sodium-chloride curing brine
- 流属性/单位：Volume / m3
- 数量规则：记录该交换针对锁定批次跨越本过程边界的前景实测数量。
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每 1 kg 厂门处净合格可销售参考产品
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_wastewater_volume`
- 来源：`eu-pef-2021-2279`、`jrc-sa-bref-2024`
- UUID 状态：未解析；在精确双核核验前保持为空。
- 适用性：仅在 Spent sodium-chloride curing brine 针对单一锁定产品配方和处理顺序实际跨越过程边界时记录；否则将该原子行标记为不适用。
- 不确定性：保留仪表分辨率、校准状态、采样间隔、适用时的密度换算以及时间覆盖。

##### 基本流

###### 排放氨（R717）向空气排放（`curing_r717_release`）

Ammonia (R717) to air 在本过程中作为一项原子输出交换记录；其不得代替任何其他物料、载体、废物或排放。

- 选定流：Ammonia (R717) to air
- 流属性/单位：Mass / kg
- 数量规则：仅依据所链接协议定义的前景记录计算可归属于该批次的数量。
- 数值来源模式：计算值（`calculated_value`）
- 适用范围：技术特定（`technology_specific`）
- 归一化基准：每 1 kg 厂门处净合格可销售参考产品
- 基准类型：参考流（`reference_flow`）
- 证据类型：由采集计算（`calculated_from_collection`）
- 采集协议：`cp_refrigerant_reconciliation`
- 来源：`eu-pef-2021-2279`、`jrc-sa-bref-2024`
- UUID 状态：未解析；在精确双核核验前保持为空。
- 适用性：仅在 Ammonia (R717) to air 针对单一锁定产品配方和处理顺序实际跨越过程边界时记录；否则将该原子行标记为不适用。
- 不确定性：保留采样或质量平衡方法、检出限、时间代表性、换算记录和分析不确定性。

###### 排放二氧化碳（R744）向空气排放（`curing_r744_release`）

Carbon dioxide (R744) to air 在本过程中作为一项原子输出交换记录；其不得代替任何其他物料、载体、废物或排放。

- 选定流：Carbon dioxide (R744) to air
- 流属性/单位：Mass / kg
- 数量规则：仅依据所链接协议定义的前景记录计算可归属于该批次的数量。
- 数值来源模式：计算值（`calculated_value`）
- 适用范围：技术特定（`technology_specific`）
- 归一化基准：每 1 kg 厂门处净合格可销售参考产品
- 基准类型：参考流（`reference_flow`）
- 证据类型：由采集计算（`calculated_from_collection`）
- 采集协议：`cp_refrigerant_reconciliation`
- 来源：`eu-pef-2021-2279`、`jrc-sa-bref-2024`
- UUID 状态：未解析；在精确双核核验前保持为空。
- 适用性：仅在 Carbon dioxide (R744) to air 针对单一锁定产品配方和处理顺序实际跨越过程边界时记录；否则将该原子行标记为不适用。
- 不确定性：保留采样或质量平衡方法、检出限、时间代表性、换算记录和分析不确定性。

###### 排放丙烷（R290）向空气排放（`curing_r290_release`）

Propane (R290) to air 在本过程中作为一项原子输出交换记录；其不得代替任何其他物料、载体、废物或排放。

- 选定流：Propane (R290) to air
- 流属性/单位：Mass / kg
- 数量规则：仅依据所链接协议定义的前景记录计算可归属于该批次的数量。
- 数值来源模式：计算值（`calculated_value`）
- 适用范围：技术特定（`technology_specific`）
- 归一化基准：每 1 kg 厂门处净合格可销售参考产品
- 基准类型：参考流（`reference_flow`）
- 证据类型：由采集计算（`calculated_from_collection`）
- 采集协议：`cp_refrigerant_reconciliation`
- 来源：`eu-pef-2021-2279`、`jrc-sa-bref-2024`
- UUID 状态：未解析；在精确双核核验前保持为空。
- 适用性：仅在 Propane (R290) to air 针对单一锁定产品配方和处理顺序实际跨越过程边界时记录；否则将该原子行标记为不适用。
- 不确定性：保留采样或质量平衡方法、检出限、时间代表性、换算记录和分析不确定性。

### 过程：发酵（`fermentation`）

前景发酵剂添加与受控发酵。仅在锁定处理顺序包含受控发酵时纳入。

#### 输入

##### 产品流

###### 使用腌制猪肉发酵香肠段（`fermentation_input_cured_pork`）

Cured pork fermented-sausage links 在本过程中作为一项原子输入交换记录；其不得代替任何其他物料、载体、废物或排放。

- 选定流：Cured pork fermented-sausage links
- 流属性/单位：Mass / kg
- 数量规则：记录该交换针对锁定批次跨越本过程边界的前景实测数量。
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：产品特定（`product_specific`）
- 归一化基准：每 1 kg 厂门处净合格可销售参考产品
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_intermediate_product_mass`
- 来源：`eu-pef-2021-2279`、`codex-cxs-192-1995`
- UUID 状态：未解析；在精确双核核验前保持为空。
- 适用性：仅在 Cured pork fermented-sausage links 针对单一锁定产品配方和处理顺序实际跨越过程边界时记录；否则将该原子行标记为不适用。
- 不确定性：保留秤分辨率、校准状态、去皮方法、适用时的水分基准以及批次核对差异。

###### 使用生猪肉发酵香肠段（`fermentation_input_raw_pork`）

Raw pork fermented-sausage links 在本过程中作为一项原子输入交换记录；其不得代替任何其他物料、载体、废物或排放。

- 选定流：Raw pork fermented-sausage links
- 流属性/单位：Mass / kg
- 数量规则：记录该交换针对锁定批次跨越本过程边界的前景实测数量。
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：产品特定（`product_specific`）
- 归一化基准：每 1 kg 厂门处净合格可销售参考产品
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_intermediate_product_mass`
- 来源：`eu-pef-2021-2279`、`codex-cxs-192-1995`
- UUID 状态：未解析；在精确双核核验前保持为空。
- 适用性：仅在 Raw pork fermented-sausage links 针对单一锁定产品配方和处理顺序实际跨越过程边界时记录；否则将该原子行标记为不适用。
- 不确定性：保留秤分辨率、校准状态、去皮方法、适用时的水分基准以及批次核对差异。

###### 使用植物乳植杆菌发酵剂（`fermentation_input_plantarum`）

Lactiplantibacillus plantarum starter culture 在本过程中作为一项原子输入交换记录；其不得代替任何其他物料、载体、废物或排放。

- 选定流：Lactiplantibacillus plantarum starter culture
- 流属性/单位：Mass / kg
- 数量规则：记录该交换针对锁定批次跨越本过程边界的前景实测数量。
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：产品特定（`product_specific`）
- 归一化基准：每 1 kg 厂门处净合格可销售参考产品
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_recipe_component_mass`
- 来源：`eu-pef-2021-2279`、`codex-cxs-192-1995`
- UUID 状态：未解析；在精确双核核验前保持为空。
- 适用性：仅在 Lactiplantibacillus plantarum starter culture 针对单一锁定产品配方和处理顺序实际跨越过程边界时记录；否则将该原子行标记为不适用。
- 不确定性：保留秤分辨率、校准状态、去皮方法、适用时的水分基准以及批次核对差异。

###### 使用戊糖片球菌发酵剂（`fermentation_input_pediococcus`）

Pediococcus pentosaceus starter culture 在本过程中作为一项原子输入交换记录；其不得代替任何其他物料、载体、废物或排放。

- 选定流：Pediococcus pentosaceus starter culture
- 流属性/单位：Mass / kg
- 数量规则：记录该交换针对锁定批次跨越本过程边界的前景实测数量。
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：产品特定（`product_specific`）
- 归一化基准：每 1 kg 厂门处净合格可销售参考产品
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_recipe_component_mass`
- 来源：`eu-pef-2021-2279`、`codex-cxs-192-1995`
- UUID 状态：未解析；在精确双核核验前保持为空。
- 适用性：仅在 Pediococcus pentosaceus starter culture 针对单一锁定产品配方和处理顺序实际跨越过程边界时记录；否则将该原子行标记为不适用。
- 不确定性：保留秤分辨率、校准状态、去皮方法、适用时的水分基准以及批次核对差异。

###### 使用葡萄糖（`fermentation_input_dextrose`）

Dextrose 在本过程中作为一项原子输入交换记录；其不得代替任何其他物料、载体、废物或排放。

- 选定流：Dextrose
- 流属性/单位：Mass / kg
- 数量规则：记录该交换针对锁定批次跨越本过程边界的前景实测数量。
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：产品特定（`product_specific`）
- 归一化基准：每 1 kg 厂门处净合格可销售参考产品
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_recipe_component_mass`
- 来源：`eu-pef-2021-2279`、`codex-cxs-192-1995`
- UUID 状态：未解析；在精确双核核验前保持为空。
- 适用性：仅在 Dextrose 针对单一锁定产品配方和处理顺序实际跨越过程边界时记录；否则将该原子行标记为不适用。
- 不确定性：保留秤分辨率、校准状态、去皮方法、适用时的水分基准以及批次核对差异。

###### 计量发酵用电（`fermentation_grid_electricity`）

Grid electricity, medium voltage 在本过程中作为一项原子输入交换记录；其不得代替任何其他物料、载体、废物或排放。

- 选定流：Grid electricity, medium voltage
- 流属性/单位：Energy / kWh
- 数量规则：记录该交换针对锁定批次跨越本过程边界的前景实测数量。
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每 1 kg 厂门处净合格可销售参考产品
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_stage_electricity`
- 来源：`eu-pef-2021-2279`、`jrc-sa-bref-2024`
- UUID 状态：未解析；在精确双核核验前保持为空。
- 适用性：仅在 Grid electricity, medium voltage 针对单一锁定产品配方和处理顺序实际跨越过程边界时记录；否则将该原子行标记为不适用。
- 不确定性：保留仪表分辨率、校准状态、计量覆盖、时间区间以及任何批次归属计算。

###### 记录氨（R717）制冷剂补充（`fermentation_r717_makeup`）

Ammonia (R717) refrigerant makeup 在本过程中作为一项原子输入交换记录；其不得代替任何其他物料、载体、废物或排放。

- 选定流：Ammonia (R717) refrigerant makeup
- 流属性/单位：Mass / kg
- 数量规则：记录该交换针对锁定批次跨越本过程边界的前景实测数量。
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：技术特定（`technology_specific`）
- 归一化基准：每 1 kg 厂门处净合格可销售参考产品
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_refrigerant_reconciliation`
- 来源：`eu-pef-2021-2279`、`jrc-sa-bref-2024`
- UUID 状态：未解析；在精确双核核验前保持为空。
- 适用性：仅在 Ammonia (R717) refrigerant makeup 针对单一锁定产品配方和处理顺序实际跨越过程边界时记录；否则将该原子行标记为不适用。
- 不确定性：保留秤分辨率、校准状态、去皮方法、适用时的水分基准以及批次核对差异。

###### 记录二氧化碳（R744）制冷剂补充（`fermentation_r744_makeup`）

Carbon dioxide (R744) refrigerant makeup 在本过程中作为一项原子输入交换记录；其不得代替任何其他物料、载体、废物或排放。

- 选定流：Carbon dioxide (R744) refrigerant makeup
- 流属性/单位：Mass / kg
- 数量规则：记录该交换针对锁定批次跨越本过程边界的前景实测数量。
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：技术特定（`technology_specific`）
- 归一化基准：每 1 kg 厂门处净合格可销售参考产品
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_refrigerant_reconciliation`
- 来源：`eu-pef-2021-2279`、`jrc-sa-bref-2024`
- UUID 状态：未解析；在精确双核核验前保持为空。
- 适用性：仅在 Carbon dioxide (R744) refrigerant makeup 针对单一锁定产品配方和处理顺序实际跨越过程边界时记录；否则将该原子行标记为不适用。
- 不确定性：保留秤分辨率、校准状态、去皮方法、适用时的水分基准以及批次核对差异。

###### 记录丙烷（R290）制冷剂补充（`fermentation_r290_makeup`）

Propane (R290) refrigerant makeup 在本过程中作为一项原子输入交换记录；其不得代替任何其他物料、载体、废物或排放。

- 选定流：Propane (R290) refrigerant makeup
- 流属性/单位：Mass / kg
- 数量规则：记录该交换针对锁定批次跨越本过程边界的前景实测数量。
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：技术特定（`technology_specific`）
- 归一化基准：每 1 kg 厂门处净合格可销售参考产品
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_refrigerant_reconciliation`
- 来源：`eu-pef-2021-2279`、`jrc-sa-bref-2024`
- UUID 状态：未解析；在精确双核核验前保持为空。
- 适用性：仅在 Propane (R290) refrigerant makeup 针对单一锁定产品配方和处理顺序实际跨越过程边界时记录；否则将该原子行标记为不适用。
- 不确定性：保留秤分辨率、校准状态、去皮方法、适用时的水分基准以及批次核对差异。

##### 废物流

##### 基本流

#### 输出

##### 产品流

###### 产出发酵猪肉香肠段（`fermentation_output_pork`）

Fermented pork sausage links 在本过程中作为一项原子输出交换记录；其不得代替任何其他物料、载体、废物或排放。

- 选定流：Fermented pork sausage links
- 流属性/单位：Mass / kg
- 数量规则：记录该交换针对锁定批次跨越本过程边界的前景实测数量。
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：产品特定（`product_specific`）
- 归一化基准：每 1 kg 厂门处净合格可销售参考产品
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_intermediate_product_mass`
- 来源：`eu-pef-2021-2279`、`codex-cxs-192-1995`
- UUID 状态：未解析；在精确双核核验前保持为空。
- 适用性：仅在 Fermented pork sausage links 针对单一锁定产品配方和处理顺序实际跨越过程边界时记录；否则将该原子行标记为不适用。
- 不确定性：保留秤分辨率、校准状态、去皮方法、适用时的水分基准以及批次核对差异。

##### 废物流

###### 移出发酵不合格猪肉香肠（`fermentation_reject_pork`）

Fermentation-rejected pork sausage 在本过程中作为一项原子输出交换记录；其不得代替任何其他物料、载体、废物或排放。

- 选定流：Fermentation-rejected pork sausage
- 流属性/单位：Mass / kg
- 数量规则：记录该交换针对锁定批次跨越本过程边界的前景实测数量。
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：产品特定（`product_specific`）
- 归一化基准：每 1 kg 厂门处净合格可销售参考产品
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_material_waste_mass`
- 来源：`eu-pef-2021-2279`、`jrc-sa-bref-2024`
- UUID 状态：未解析；在精确双核核验前保持为空。
- 适用性：仅在 Fermentation-rejected pork sausage 针对单一锁定产品配方和处理顺序实际跨越过程边界时记录；否则将该原子行标记为不适用。
- 不确定性：保留秤分辨率、校准状态、去皮方法、适用时的水分基准以及批次核对差异。

##### 基本流

###### 排放氨（R717）向空气排放（`fermentation_r717_release`）

Ammonia (R717) to air 在本过程中作为一项原子输出交换记录；其不得代替任何其他物料、载体、废物或排放。

- 选定流：Ammonia (R717) to air
- 流属性/单位：Mass / kg
- 数量规则：仅依据所链接协议定义的前景记录计算可归属于该批次的数量。
- 数值来源模式：计算值（`calculated_value`）
- 适用范围：技术特定（`technology_specific`）
- 归一化基准：每 1 kg 厂门处净合格可销售参考产品
- 基准类型：参考流（`reference_flow`）
- 证据类型：由采集计算（`calculated_from_collection`）
- 采集协议：`cp_refrigerant_reconciliation`
- 来源：`eu-pef-2021-2279`、`jrc-sa-bref-2024`
- UUID 状态：未解析；在精确双核核验前保持为空。
- 适用性：仅在 Ammonia (R717) to air 针对单一锁定产品配方和处理顺序实际跨越过程边界时记录；否则将该原子行标记为不适用。
- 不确定性：保留采样或质量平衡方法、检出限、时间代表性、换算记录和分析不确定性。

###### 排放二氧化碳（R744）向空气排放（`fermentation_r744_release`）

Carbon dioxide (R744) to air 在本过程中作为一项原子输出交换记录；其不得代替任何其他物料、载体、废物或排放。

- 选定流：Carbon dioxide (R744) to air
- 流属性/单位：Mass / kg
- 数量规则：仅依据所链接协议定义的前景记录计算可归属于该批次的数量。
- 数值来源模式：计算值（`calculated_value`）
- 适用范围：技术特定（`technology_specific`）
- 归一化基准：每 1 kg 厂门处净合格可销售参考产品
- 基准类型：参考流（`reference_flow`）
- 证据类型：由采集计算（`calculated_from_collection`）
- 采集协议：`cp_refrigerant_reconciliation`
- 来源：`eu-pef-2021-2279`、`jrc-sa-bref-2024`
- UUID 状态：未解析；在精确双核核验前保持为空。
- 适用性：仅在 Carbon dioxide (R744) to air 针对单一锁定产品配方和处理顺序实际跨越过程边界时记录；否则将该原子行标记为不适用。
- 不确定性：保留采样或质量平衡方法、检出限、时间代表性、换算记录和分析不确定性。

###### 排放丙烷（R290）向空气排放（`fermentation_r290_release`）

Propane (R290) to air 在本过程中作为一项原子输出交换记录；其不得代替任何其他物料、载体、废物或排放。

- 选定流：Propane (R290) to air
- 流属性/单位：Mass / kg
- 数量规则：仅依据所链接协议定义的前景记录计算可归属于该批次的数量。
- 数值来源模式：计算值（`calculated_value`）
- 适用范围：技术特定（`technology_specific`）
- 归一化基准：每 1 kg 厂门处净合格可销售参考产品
- 基准类型：参考流（`reference_flow`）
- 证据类型：由采集计算（`calculated_from_collection`）
- 采集协议：`cp_refrigerant_reconciliation`
- 来源：`eu-pef-2021-2279`、`jrc-sa-bref-2024`
- UUID 状态：未解析；在精确双核核验前保持为空。
- 适用性：仅在 Propane (R290) to air 针对单一锁定产品配方和处理顺序实际跨越过程边界时记录；否则将该原子行标记为不适用。
- 不确定性：保留采样或质量平衡方法、检出限、时间代表性、换算记录和分析不确定性。

### 过程：干燥（`drying`）

在有记录的时间、温度、湿度和气流条件下进行前景脱水。仅在锁定处理顺序包含热风、真空或另一项明确命名的干燥技术时纳入。

#### 输入

##### 产品流

###### 投入发酵猪肉香肠段（`drying_input_pork`）

Fermented pork sausage links 在本过程中作为一项原子输入交换记录；其不得代替任何其他物料、载体、废物或排放。

- 选定流：Fermented pork sausage links
- 流属性/单位：Mass / kg
- 数量规则：记录该交换针对锁定批次跨越本过程边界的前景实测数量。
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：产品特定（`product_specific`）
- 归一化基准：每 1 kg 厂门处净合格可销售参考产品
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_intermediate_product_mass`
- 来源：`eu-pef-2021-2279`、`codex-cxs-192-1995`
- UUID 状态：未解析；在精确双核核验前保持为空。
- 适用性：仅在 Fermented pork sausage links 针对单一锁定产品配方和处理顺序实际跨越过程边界时记录；否则将该原子行标记为不适用。
- 不确定性：保留秤分辨率、校准状态、去皮方法、适用时的水分基准以及批次核对差异。

###### 使用中压电网电力（`drying_electricity`）

Grid electricity, medium voltage 在本过程中作为一项原子输入交换记录；其不得代替任何其他物料、载体、废物或排放。

- 选定流：Grid electricity, medium voltage
- 流属性/单位：Energy / kWh
- 数量规则：记录该交换针对锁定批次跨越本过程边界的前景实测数量。
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每 1 kg 厂门处净合格可销售参考产品
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_stage_electricity`
- 来源：`eu-pef-2021-2279`、`jrc-sa-bref-2024`
- UUID 状态：未解析；在精确双核核验前保持为空。
- 适用性：仅在 Grid electricity, medium voltage 针对单一锁定产品配方和处理顺序实际跨越过程边界时记录；否则将该原子行标记为不适用。
- 不确定性：保留仪表分辨率、校准状态、计量覆盖、时间区间以及任何批次归属计算。

###### 使用外购蒸汽（`drying_purchased_steam`）

Purchased steam 在本过程中作为一项原子输入交换记录；其不得代替任何其他物料、载体、废物或排放。

- 选定流：Purchased steam
- 流属性/单位：Energy / MJ
- 数量规则：记录该交换针对锁定批次跨越本过程边界的前景实测数量。
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每 1 kg 厂门处净合格可销售参考产品
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_purchased_heat`
- 来源：`eu-pef-2021-2279`、`jrc-sa-bref-2024`
- UUID 状态：未解析；在精确双核核验前保持为空。
- 适用性：仅在 Purchased steam 针对单一锁定产品配方和处理顺序实际跨越过程边界时记录；否则将该原子行标记为不适用。
- 不确定性：保留仪表分辨率、校准状态、计量覆盖、时间区间以及任何批次归属计算。

###### 使用外购热水（`drying_purchased_hot_water`）

Purchased hot water 在本过程中作为一项原子输入交换记录；其不得代替任何其他物料、载体、废物或排放。

- 选定流：Purchased hot water
- 流属性/单位：Energy / MJ
- 数量规则：记录该交换针对锁定批次跨越本过程边界的前景实测数量。
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每 1 kg 厂门处净合格可销售参考产品
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_purchased_heat`
- 来源：`eu-pef-2021-2279`、`jrc-sa-bref-2024`
- UUID 状态：未解析；在精确双核核验前保持为空。
- 适用性：仅在 Purchased hot water 针对单一锁定产品配方和处理顺序实际跨越过程边界时记录；否则将该原子行标记为不适用。
- 不确定性：保留仪表分辨率、校准状态、计量覆盖、时间区间以及任何批次归属计算。

###### 使用场内生成蒸汽（`drying_onsite_steam`）

Onsite-generated steam 在本过程中作为一项原子输入交换记录；其不得代替任何其他物料、载体、废物或排放。

- 选定流：Onsite-generated steam
- 流属性/单位：Energy / MJ
- 数量规则：记录该交换针对锁定批次跨越本过程边界的前景实测数量。
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：技术特定（`technology_specific`）
- 归一化基准：每 1 kg 厂门处净合格可销售参考产品
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_internal_heat_output`
- 来源：`eu-pef-2021-2279`、`jrc-sa-bref-2024`
- UUID 状态：未解析；在精确双核核验前保持为空。
- 适用性：仅在 Onsite-generated steam 针对单一锁定产品配方和处理顺序实际跨越过程边界时记录；否则将该原子行标记为不适用。
- 不确定性：保留仪表分辨率、校准状态、计量覆盖、时间区间以及任何批次归属计算。

###### 使用场内生成热水（`drying_onsite_hot_water`）

Onsite-generated hot water 在本过程中作为一项原子输入交换记录；其不得代替任何其他物料、载体、废物或排放。

- 选定流：Onsite-generated hot water
- 流属性/单位：Energy / MJ
- 数量规则：记录该交换针对锁定批次跨越本过程边界的前景实测数量。
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：技术特定（`technology_specific`）
- 归一化基准：每 1 kg 厂门处净合格可销售参考产品
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_internal_heat_output`
- 来源：`eu-pef-2021-2279`、`jrc-sa-bref-2024`
- UUID 状态：未解析；在精确双核核验前保持为空。
- 适用性：仅在 Onsite-generated hot water 针对单一锁定产品配方和处理顺序实际跨越过程边界时记录；否则将该原子行标记为不适用。
- 不确定性：保留仪表分辨率、校准状态、计量覆盖、时间区间以及任何批次归属计算。

###### 使用天然气（`drying_natural_gas`）

Natural gas 在本过程中作为一项原子输入交换记录；其不得代替任何其他物料、载体、废物或排放。

- 选定流：Natural gas
- 流属性/单位：Mass / kg
- 数量规则：记录该交换针对锁定批次跨越本过程边界的前景实测数量。
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：技术特定（`technology_specific`）
- 归一化基准：每 1 kg 厂门处净合格可销售参考产品
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_fuel_inventory`
- 来源：`eu-pef-2021-2279`、`jrc-sa-bref-2024`
- UUID 状态：未解析；在精确双核核验前保持为空。
- 适用性：仅在 Natural gas 针对单一锁定产品配方和处理顺序实际跨越过程边界时记录；否则将该原子行标记为不适用。
- 不确定性：保留秤分辨率、校准状态、去皮方法、适用时的水分基准以及批次核对差异。

###### 使用柴油（`drying_diesel`）

Diesel fuel 在本过程中作为一项原子输入交换记录；其不得代替任何其他物料、载体、废物或排放。

- 选定流：Diesel fuel
- 流属性/单位：Mass / kg
- 数量规则：记录该交换针对锁定批次跨越本过程边界的前景实测数量。
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：技术特定（`technology_specific`）
- 归一化基准：每 1 kg 厂门处净合格可销售参考产品
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_fuel_inventory`
- 来源：`eu-pef-2021-2279`、`jrc-sa-bref-2024`
- UUID 状态：未解析；在精确双核核验前保持为空。
- 适用性：仅在 Diesel fuel 针对单一锁定产品配方和处理顺序实际跨越过程边界时记录；否则将该原子行标记为不适用。
- 不确定性：保留秤分辨率、校准状态、去皮方法、适用时的水分基准以及批次核对差异。

###### 使用液化石油气（`drying_lpg`）

Liquefied petroleum gas 在本过程中作为一项原子输入交换记录；其不得代替任何其他物料、载体、废物或排放。

- 选定流：Liquefied petroleum gas
- 流属性/单位：Mass / kg
- 数量规则：记录该交换针对锁定批次跨越本过程边界的前景实测数量。
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：技术特定（`technology_specific`）
- 归一化基准：每 1 kg 厂门处净合格可销售参考产品
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_fuel_inventory`
- 来源：`eu-pef-2021-2279`、`jrc-sa-bref-2024`
- UUID 状态：未解析；在精确双核核验前保持为空。
- 适用性：仅在 Liquefied petroleum gas 针对单一锁定产品配方和处理顺序实际跨越过程边界时记录；否则将该原子行标记为不适用。
- 不确定性：保留秤分辨率、校准状态、去皮方法、适用时的水分基准以及批次核对差异。

###### 记录氨（R717）制冷剂补充（`drying_r717_makeup`）

Ammonia (R717) refrigerant makeup 在本过程中作为一项原子输入交换记录；其不得代替任何其他物料、载体、废物或排放。

- 选定流：Ammonia (R717) refrigerant makeup
- 流属性/单位：Mass / kg
- 数量规则：记录该交换针对锁定批次跨越本过程边界的前景实测数量。
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：技术特定（`technology_specific`）
- 归一化基准：每 1 kg 厂门处净合格可销售参考产品
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_refrigerant_reconciliation`
- 来源：`eu-pef-2021-2279`、`jrc-sa-bref-2024`
- UUID 状态：未解析；在精确双核核验前保持为空。
- 适用性：仅在 Ammonia (R717) refrigerant makeup 针对单一锁定产品配方和处理顺序实际跨越过程边界时记录；否则将该原子行标记为不适用。
- 不确定性：保留秤分辨率、校准状态、去皮方法、适用时的水分基准以及批次核对差异。

###### 记录二氧化碳（R744）制冷剂补充（`drying_r744_makeup`）

Carbon dioxide (R744) refrigerant makeup 在本过程中作为一项原子输入交换记录；其不得代替任何其他物料、载体、废物或排放。

- 选定流：Carbon dioxide (R744) refrigerant makeup
- 流属性/单位：Mass / kg
- 数量规则：记录该交换针对锁定批次跨越本过程边界的前景实测数量。
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：技术特定（`technology_specific`）
- 归一化基准：每 1 kg 厂门处净合格可销售参考产品
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_refrigerant_reconciliation`
- 来源：`eu-pef-2021-2279`、`jrc-sa-bref-2024`
- UUID 状态：未解析；在精确双核核验前保持为空。
- 适用性：仅在 Carbon dioxide (R744) refrigerant makeup 针对单一锁定产品配方和处理顺序实际跨越过程边界时记录；否则将该原子行标记为不适用。
- 不确定性：保留秤分辨率、校准状态、去皮方法、适用时的水分基准以及批次核对差异。

###### 记录丙烷（R290）制冷剂补充（`drying_r290_makeup`）

Propane (R290) refrigerant makeup 在本过程中作为一项原子输入交换记录；其不得代替任何其他物料、载体、废物或排放。

- 选定流：Propane (R290) refrigerant makeup
- 流属性/单位：Mass / kg
- 数量规则：记录该交换针对锁定批次跨越本过程边界的前景实测数量。
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：技术特定（`technology_specific`）
- 归一化基准：每 1 kg 厂门处净合格可销售参考产品
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_refrigerant_reconciliation`
- 来源：`eu-pef-2021-2279`、`jrc-sa-bref-2024`
- UUID 状态：未解析；在精确双核核验前保持为空。
- 适用性：仅在 Propane (R290) refrigerant makeup 针对单一锁定产品配方和处理顺序实际跨越过程边界时记录；否则将该原子行标记为不适用。
- 不确定性：保留秤分辨率、校准状态、去皮方法、适用时的水分基准以及批次核对差异。

##### 废物流

##### 基本流

#### 输出

##### 产品流

###### 产出发酵干燥猪肉香肠（`drying_output_pork`）

Fermented dried pork sausage 在本过程中作为一项原子输出交换记录；其不得代替任何其他物料、载体、废物或排放。

- 选定流：Fermented dried pork sausage
- 流属性/单位：Mass / kg
- 数量规则：记录该交换针对锁定批次跨越本过程边界的前景实测数量。
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：产品特定（`product_specific`）
- 归一化基准：每 1 kg 厂门处净合格可销售参考产品
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_intermediate_product_mass`
- 来源：`eu-pef-2021-2279`、`codex-cxs-192-1995`
- UUID 状态：未解析；在精确双核核验前保持为空。
- 适用性：仅在 Fermented dried pork sausage 针对单一锁定产品配方和处理顺序实际跨越过程边界时记录；否则将该原子行标记为不适用。
- 不确定性：保留秤分辨率、校准状态、去皮方法、适用时的水分基准以及批次核对差异。

##### 废物流

###### 移出干燥不合格猪肉香肠（`drying_reject_pork`）

Drying-rejected pork sausage 在本过程中作为一项原子输出交换记录；其不得代替任何其他物料、载体、废物或排放。

- 选定流：Drying-rejected pork sausage
- 流属性/单位：Mass / kg
- 数量规则：记录该交换针对锁定批次跨越本过程边界的前景实测数量。
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：产品特定（`product_specific`）
- 归一化基准：每 1 kg 厂门处净合格可销售参考产品
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_material_waste_mass`
- 来源：`eu-pef-2021-2279`、`jrc-sa-bref-2024`
- UUID 状态：未解析；在精确双核核验前保持为空。
- 适用性：仅在 Drying-rejected pork sausage 针对单一锁定产品配方和处理顺序实际跨越过程边界时记录；否则将该原子行标记为不适用。
- 不确定性：保留秤分辨率、校准状态、去皮方法、适用时的水分基准以及批次核对差异。

##### 基本流

###### 排放水蒸气向空气排放（`drying_release_water_vapour`）

Water vapour to air 在本过程中作为一项原子输出交换记录；其不得代替任何其他物料、载体、废物或排放。

- 选定流：Water vapour to air
- 流属性/单位：Mass / kg
- 数量规则：记录该交换针对锁定批次跨越本过程边界的前景实测数量。
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：技术特定（`technology_specific`）
- 归一化基准：每 1 kg 厂门处净合格可销售参考产品
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_direct_emission_measurement`
- 来源：`eu-pef-2021-2279`、`jrc-sa-bref-2024`
- UUID 状态：未解析；在精确双核核验前保持为空。
- 适用性：仅在 Water vapour to air 针对单一锁定产品配方和处理顺序实际跨越过程边界时记录；否则将该原子行标记为不适用。
- 不确定性：保留采样或质量平衡方法、检出限、时间代表性、换算记录和分析不确定性。

###### 排放氨（R717）向空气排放（`drying_release_r717`）

Ammonia (R717) to air 在本过程中作为一项原子输出交换记录；其不得代替任何其他物料、载体、废物或排放。

- 选定流：Ammonia (R717) to air
- 流属性/单位：Mass / kg
- 数量规则：仅依据所链接协议定义的前景记录计算可归属于该批次的数量。
- 数值来源模式：计算值（`calculated_value`）
- 适用范围：技术特定（`technology_specific`）
- 归一化基准：每 1 kg 厂门处净合格可销售参考产品
- 基准类型：参考流（`reference_flow`）
- 证据类型：由采集计算（`calculated_from_collection`）
- 采集协议：`cp_refrigerant_reconciliation`
- 来源：`eu-pef-2021-2279`、`jrc-sa-bref-2024`
- UUID 状态：未解析；在精确双核核验前保持为空。
- 适用性：仅在 Ammonia (R717) to air 针对单一锁定产品配方和处理顺序实际跨越过程边界时记录；否则将该原子行标记为不适用。
- 不确定性：保留采样或质量平衡方法、检出限、时间代表性、换算记录和分析不确定性。

###### 排放二氧化碳（R744）向空气排放（`drying_release_r744`）

Carbon dioxide (R744) to air 在本过程中作为一项原子输出交换记录；其不得代替任何其他物料、载体、废物或排放。

- 选定流：Carbon dioxide (R744) to air
- 流属性/单位：Mass / kg
- 数量规则：仅依据所链接协议定义的前景记录计算可归属于该批次的数量。
- 数值来源模式：计算值（`calculated_value`）
- 适用范围：技术特定（`technology_specific`）
- 归一化基准：每 1 kg 厂门处净合格可销售参考产品
- 基准类型：参考流（`reference_flow`）
- 证据类型：由采集计算（`calculated_from_collection`）
- 采集协议：`cp_refrigerant_reconciliation`
- 来源：`eu-pef-2021-2279`、`jrc-sa-bref-2024`
- UUID 状态：未解析；在精确双核核验前保持为空。
- 适用性：仅在 Carbon dioxide (R744) to air 针对单一锁定产品配方和处理顺序实际跨越过程边界时记录；否则将该原子行标记为不适用。
- 不确定性：保留采样或质量平衡方法、检出限、时间代表性、换算记录和分析不确定性。

###### 排放丙烷（R290）向空气排放（`drying_release_r290`）

Propane (R290) to air 在本过程中作为一项原子输出交换记录；其不得代替任何其他物料、载体、废物或排放。

- 选定流：Propane (R290) to air
- 流属性/单位：Mass / kg
- 数量规则：仅依据所链接协议定义的前景记录计算可归属于该批次的数量。
- 数值来源模式：计算值（`calculated_value`）
- 适用范围：技术特定（`technology_specific`）
- 归一化基准：每 1 kg 厂门处净合格可销售参考产品
- 基准类型：参考流（`reference_flow`）
- 证据类型：由采集计算（`calculated_from_collection`）
- 采集协议：`cp_refrigerant_reconciliation`
- 来源：`eu-pef-2021-2279`、`jrc-sa-bref-2024`
- UUID 状态：未解析；在精确双核核验前保持为空。
- 适用性：仅在 Propane (R290) to air 针对单一锁定产品配方和处理顺序实际跨越过程边界时记录；否则将该原子行标记为不适用。
- 不确定性：保留采样或质量平衡方法、检出限、时间代表性、换算记录和分析不确定性。

###### 排放化石二氧化碳向空气排放（`drying_release_co2`）

Fossil carbon dioxide to air 在本过程中作为一项原子输出交换记录；其不得代替任何其他物料、载体、废物或排放。

- 选定流：Fossil carbon dioxide to air
- 流属性/单位：Mass / kg
- 数量规则：记录该交换针对锁定批次跨越本过程边界的前景实测数量。
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：技术特定（`technology_specific`）
- 归一化基准：每 1 kg 厂门处净合格可销售参考产品
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_direct_emission_measurement`
- 来源：`eu-pef-2021-2279`、`jrc-sa-bref-2024`
- UUID 状态：未解析；在精确双核核验前保持为空。
- 适用性：仅在 Fossil carbon dioxide to air 针对单一锁定产品配方和处理顺序实际跨越过程边界时记录；否则将该原子行标记为不适用。
- 不确定性：保留采样或质量平衡方法、检出限、时间代表性、换算记录和分析不确定性。

###### 排放氮氧化物（NOx）向空气排放（`drying_release_nox`）

Nitrogen oxides (NOx) to air 在本过程中作为一项原子输出交换记录；其不得代替任何其他物料、载体、废物或排放。

- 选定流：Nitrogen oxides (NOx) to air
- 流属性/单位：Mass / kg
- 数量规则：记录该交换针对锁定批次跨越本过程边界的前景实测数量。
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：技术特定（`technology_specific`）
- 归一化基准：每 1 kg 厂门处净合格可销售参考产品
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_direct_emission_measurement`
- 来源：`eu-pef-2021-2279`、`jrc-sa-bref-2024`
- UUID 状态：未解析；在精确双核核验前保持为空。
- 适用性：仅在 Nitrogen oxides (NOx) to air 针对单一锁定产品配方和处理顺序实际跨越过程边界时记录；否则将该原子行标记为不适用。
- 不确定性：保留采样或质量平衡方法、检出限、时间代表性、换算记录和分析不确定性。

###### 排放硫氧化物（SOx）向空气排放（`drying_release_sox`）

Sulfur oxides (SOx) to air 在本过程中作为一项原子输出交换记录；其不得代替任何其他物料、载体、废物或排放。

- 选定流：Sulfur oxides (SOx) to air
- 流属性/单位：Mass / kg
- 数量规则：记录该交换针对锁定批次跨越本过程边界的前景实测数量。
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：技术特定（`technology_specific`）
- 归一化基准：每 1 kg 厂门处净合格可销售参考产品
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_direct_emission_measurement`
- 来源：`eu-pef-2021-2279`、`jrc-sa-bref-2024`
- UUID 状态：未解析；在精确双核核验前保持为空。
- 适用性：仅在 Sulfur oxides (SOx) to air 针对单一锁定产品配方和处理顺序实际跨越过程边界时记录；否则将该原子行标记为不适用。
- 不确定性：保留采样或质量平衡方法、检出限、时间代表性、换算记录和分析不确定性。

###### 排放粒径不大于2.5微米颗粒物向空气排放（`drying_release_pm25`）

Particulate matter, ≤2.5 µm, to air 在本过程中作为一项原子输出交换记录；其不得代替任何其他物料、载体、废物或排放。

- 选定流：Particulate matter, ≤2.5 µm, to air
- 流属性/单位：Mass / kg
- 数量规则：记录该交换针对锁定批次跨越本过程边界的前景实测数量。
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：技术特定（`technology_specific`）
- 归一化基准：每 1 kg 厂门处净合格可销售参考产品
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_direct_emission_measurement`
- 来源：`eu-pef-2021-2279`、`jrc-sa-bref-2024`
- UUID 状态：未解析；在精确双核核验前保持为空。
- 适用性：仅在 Particulate matter, ≤2.5 µm, to air 针对单一锁定产品配方和处理顺序实际跨越过程边界时记录；否则将该原子行标记为不适用。
- 不确定性：保留采样或质量平衡方法、检出限、时间代表性、换算记录和分析不确定性。

###### 排放一氧化碳向空气排放（`drying_release_co`）

Carbon monoxide to air 在本过程中作为一项原子输出交换记录；其不得代替任何其他物料、载体、废物或排放。

- 选定流：Carbon monoxide to air
- 流属性/单位：Mass / kg
- 数量规则：记录该交换针对锁定批次跨越本过程边界的前景实测数量。
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：技术特定（`technology_specific`）
- 归一化基准：每 1 kg 厂门处净合格可销售参考产品
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_direct_emission_measurement`
- 来源：`eu-pef-2021-2279`、`jrc-sa-bref-2024`
- UUID 状态：未解析；在精确双核核验前保持为空。
- 适用性：仅在 Carbon monoxide to air 针对单一锁定产品配方和处理顺序实际跨越过程边界时记录；否则将该原子行标记为不适用。
- 不确定性：保留采样或质量平衡方法、检出限、时间代表性、换算记录和分析不确定性。

### 过程：烟熏（`smoking`）

针对一个明确产品的前景烟气生成或烟熏液施用。仅在锁定处理顺序包含直接烟熏或烟熏液处理时纳入。

#### 输入

##### 产品流

###### 使用腌制猪肉发酵香肠段（`smoking_input_cured_pork`）

Cured pork fermented-sausage links 在本过程中作为一项原子输入交换记录；其不得代替任何其他物料、载体、废物或排放。

- 选定流：Cured pork fermented-sausage links
- 流属性/单位：Mass / kg
- 数量规则：记录该交换针对锁定批次跨越本过程边界的前景实测数量。
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：产品特定（`product_specific`）
- 归一化基准：每 1 kg 厂门处净合格可销售参考产品
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_intermediate_product_mass`
- 来源：`eu-pef-2021-2279`、`codex-cxs-192-1995`
- UUID 状态：未解析；在精确双核核验前保持为空。
- 适用性：仅在 Cured pork fermented-sausage links 针对单一锁定产品配方和处理顺序实际跨越过程边界时记录；否则将该原子行标记为不适用。
- 不确定性：保留秤分辨率、校准状态、去皮方法、适用时的水分基准以及批次核对差异。

###### 使用发酵猪肉香肠段（`smoking_input_fermented_pork`）

Fermented pork sausage links 在本过程中作为一项原子输入交换记录；其不得代替任何其他物料、载体、废物或排放。

- 选定流：Fermented pork sausage links
- 流属性/单位：Mass / kg
- 数量规则：记录该交换针对锁定批次跨越本过程边界的前景实测数量。
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：产品特定（`product_specific`）
- 归一化基准：每 1 kg 厂门处净合格可销售参考产品
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_intermediate_product_mass`
- 来源：`eu-pef-2021-2279`、`codex-cxs-192-1995`
- UUID 状态：未解析；在精确双核核验前保持为空。
- 适用性：仅在 Fermented pork sausage links 针对单一锁定产品配方和处理顺序实际跨越过程边界时记录；否则将该原子行标记为不适用。
- 不确定性：保留秤分辨率、校准状态、去皮方法、适用时的水分基准以及批次核对差异。

###### 使用生牛肉熟制香肠段（`smoking_input_raw_beef`）

Raw beef cooked-sausage links 在本过程中作为一项原子输入交换记录；其不得代替任何其他物料、载体、废物或排放。

- 选定流：Raw beef cooked-sausage links
- 流属性/单位：Mass / kg
- 数量规则：记录该交换针对锁定批次跨越本过程边界的前景实测数量。
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：产品特定（`product_specific`）
- 归一化基准：每 1 kg 厂门处净合格可销售参考产品
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_intermediate_product_mass`
- 来源：`eu-pef-2021-2279`、`codex-cxs-192-1995`
- UUID 状态：未解析；在精确双核核验前保持为空。
- 适用性：仅在 Raw beef cooked-sausage links 针对单一锁定产品配方和处理顺序实际跨越过程边界时记录；否则将该原子行标记为不适用。
- 不确定性：保留秤分辨率、校准状态、去皮方法、适用时的水分基准以及批次核对差异。

###### 使用山毛榉木片（`smoking_input_beech_chips`）

Beech wood chips 在本过程中作为一项原子输入交换记录；其不得代替任何其他物料、载体、废物或排放。

- 选定流：Beech wood chips
- 流属性/单位：Mass / kg
- 数量规则：记录该交换针对锁定批次跨越本过程边界的前景实测数量。
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：产品特定（`product_specific`）
- 归一化基准：每 1 kg 厂门处净合格可销售参考产品
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_recipe_component_mass`
- 来源：`eu-pef-2021-2279`、`codex-cxs-192-1995`
- UUID 状态：未解析；在精确双核核验前保持为空。
- 适用性：仅在 Beech wood chips 针对单一锁定产品配方和处理顺序实际跨越过程边界时记录；否则将该原子行标记为不适用。
- 不确定性：保留秤分辨率、校准状态、去皮方法、适用时的水分基准以及批次核对差异。

###### 使用橡木锯末（`smoking_input_oak_sawdust`）

Oak wood sawdust 在本过程中作为一项原子输入交换记录；其不得代替任何其他物料、载体、废物或排放。

- 选定流：Oak wood sawdust
- 流属性/单位：Mass / kg
- 数量规则：记录该交换针对锁定批次跨越本过程边界的前景实测数量。
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：产品特定（`product_specific`）
- 归一化基准：每 1 kg 厂门处净合格可销售参考产品
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_recipe_component_mass`
- 来源：`eu-pef-2021-2279`、`codex-cxs-192-1995`
- UUID 状态：未解析；在精确双核核验前保持为空。
- 适用性：仅在 Oak wood sawdust 针对单一锁定产品配方和处理顺序实际跨越过程边界时记录；否则将该原子行标记为不适用。
- 不确定性：保留秤分辨率、校准状态、去皮方法、适用时的水分基准以及批次核对差异。

###### 使用山毛榉木烟熏液（`smoking_input_beech_condensate`）

Beech wood smoke condensate 在本过程中作为一项原子输入交换记录；其不得代替任何其他物料、载体、废物或排放。

- 选定流：Beech wood smoke condensate
- 流属性/单位：Mass / kg
- 数量规则：记录该交换针对锁定批次跨越本过程边界的前景实测数量。
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：产品特定（`product_specific`）
- 归一化基准：每 1 kg 厂门处净合格可销售参考产品
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_recipe_component_mass`
- 来源：`eu-pef-2021-2279`、`codex-cxs-192-1995`
- UUID 状态：未解析；在精确双核核验前保持为空。
- 适用性：仅在 Beech wood smoke condensate 针对单一锁定产品配方和处理顺序实际跨越过程边界时记录；否则将该原子行标记为不适用。
- 不确定性：保留秤分辨率、校准状态、去皮方法、适用时的水分基准以及批次核对差异。

###### 使用中压电网电力（`smoking_electricity`）

Grid electricity, medium voltage 在本过程中作为一项原子输入交换记录；其不得代替任何其他物料、载体、废物或排放。

- 选定流：Grid electricity, medium voltage
- 流属性/单位：Energy / kWh
- 数量规则：记录该交换针对锁定批次跨越本过程边界的前景实测数量。
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每 1 kg 厂门处净合格可销售参考产品
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_stage_electricity`
- 来源：`eu-pef-2021-2279`、`jrc-sa-bref-2024`
- UUID 状态：未解析；在精确双核核验前保持为空。
- 适用性：仅在 Grid electricity, medium voltage 针对单一锁定产品配方和处理顺序实际跨越过程边界时记录；否则将该原子行标记为不适用。
- 不确定性：保留仪表分辨率、校准状态、计量覆盖、时间区间以及任何批次归属计算。

###### 使用外购蒸汽（`smoking_purchased_steam`）

Purchased steam 在本过程中作为一项原子输入交换记录；其不得代替任何其他物料、载体、废物或排放。

- 选定流：Purchased steam
- 流属性/单位：Energy / MJ
- 数量规则：记录该交换针对锁定批次跨越本过程边界的前景实测数量。
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每 1 kg 厂门处净合格可销售参考产品
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_purchased_heat`
- 来源：`eu-pef-2021-2279`、`jrc-sa-bref-2024`
- UUID 状态：未解析；在精确双核核验前保持为空。
- 适用性：仅在 Purchased steam 针对单一锁定产品配方和处理顺序实际跨越过程边界时记录；否则将该原子行标记为不适用。
- 不确定性：保留仪表分辨率、校准状态、计量覆盖、时间区间以及任何批次归属计算。

###### 使用场内生成蒸汽（`smoking_onsite_steam`）

Onsite-generated steam 在本过程中作为一项原子输入交换记录；其不得代替任何其他物料、载体、废物或排放。

- 选定流：Onsite-generated steam
- 流属性/单位：Energy / MJ
- 数量规则：记录该交换针对锁定批次跨越本过程边界的前景实测数量。
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每 1 kg 厂门处净合格可销售参考产品
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_internal_heat_output`
- 来源：`eu-pef-2021-2279`、`jrc-sa-bref-2024`
- UUID 状态：未解析；在精确双核核验前保持为空。
- 适用性：仅在 Onsite-generated steam 针对单一锁定产品配方和处理顺序实际跨越过程边界时记录；否则将该原子行标记为不适用。
- 不确定性：保留仪表分辨率、校准状态、计量覆盖、时间区间以及任何批次归属计算。

##### 废物流

##### 基本流

#### 输出

##### 产品流

###### 产出烟熏猪肉香肠段（`smoking_output_pork`）

Smoked pork sausage links 在本过程中作为一项原子输出交换记录；其不得代替任何其他物料、载体、废物或排放。

- 选定流：Smoked pork sausage links
- 流属性/单位：Mass / kg
- 数量规则：记录该交换针对锁定批次跨越本过程边界的前景实测数量。
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：产品特定（`product_specific`）
- 归一化基准：每 1 kg 厂门处净合格可销售参考产品
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_intermediate_product_mass`
- 来源：`eu-pef-2021-2279`、`codex-cxs-192-1995`
- UUID 状态：未解析；在精确双核核验前保持为空。
- 适用性：仅在 Smoked pork sausage links 针对单一锁定产品配方和处理顺序实际跨越过程边界时记录；否则将该原子行标记为不适用。
- 不确定性：保留秤分辨率、校准状态、去皮方法、适用时的水分基准以及批次核对差异。

###### 产出烟熏牛肉香肠段（`smoking_output_beef`）

Smoked beef sausage links 在本过程中作为一项原子输出交换记录；其不得代替任何其他物料、载体、废物或排放。

- 选定流：Smoked beef sausage links
- 流属性/单位：Mass / kg
- 数量规则：记录该交换针对锁定批次跨越本过程边界的前景实测数量。
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：产品特定（`product_specific`）
- 归一化基准：每 1 kg 厂门处净合格可销售参考产品
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_intermediate_product_mass`
- 来源：`eu-pef-2021-2279`、`codex-cxs-192-1995`
- UUID 状态：未解析；在精确双核核验前保持为空。
- 适用性：仅在 Smoked beef sausage links 针对单一锁定产品配方和处理顺序实际跨越过程边界时记录；否则将该原子行标记为不适用。
- 不确定性：保留秤分辨率、校准状态、去皮方法、适用时的水分基准以及批次核对差异。

##### 废物流

###### 移出山毛榉木灰（`smoking_waste_beech_ash`）

Beech wood ash 在本过程中作为一项原子输出交换记录；其不得代替任何其他物料、载体、废物或排放。

- 选定流：Beech wood ash
- 流属性/单位：Mass / kg
- 数量规则：记录该交换针对锁定批次跨越本过程边界的前景实测数量。
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：技术特定（`technology_specific`）
- 归一化基准：每 1 kg 厂门处净合格可销售参考产品
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_material_waste_mass`
- 来源：`eu-pef-2021-2279`、`jrc-sa-bref-2024`
- UUID 状态：未解析；在精确双核核验前保持为空。
- 适用性：仅在 Beech wood ash 针对单一锁定产品配方和处理顺序实际跨越过程边界时记录；否则将该原子行标记为不适用。
- 不确定性：保留秤分辨率、校准状态、去皮方法、适用时的水分基准以及批次核对差异。

###### 移出橡木灰（`smoking_waste_oak_ash`）

Oak wood ash 在本过程中作为一项原子输出交换记录；其不得代替任何其他物料、载体、废物或排放。

- 选定流：Oak wood ash
- 流属性/单位：Mass / kg
- 数量规则：记录该交换针对锁定批次跨越本过程边界的前景实测数量。
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：技术特定（`technology_specific`）
- 归一化基准：每 1 kg 厂门处净合格可销售参考产品
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_material_waste_mass`
- 来源：`eu-pef-2021-2279`、`jrc-sa-bref-2024`
- UUID 状态：未解析；在精确双核核验前保持为空。
- 适用性：仅在 Oak wood ash 针对单一锁定产品配方和处理顺序实际跨越过程边界时记录；否则将该原子行标记为不适用。
- 不确定性：保留秤分辨率、校准状态、去皮方法、适用时的水分基准以及批次核对差异。

###### 移出废烟气过滤器（`smoking_waste_filter`）

Spent smoke filter 在本过程中作为一项原子输出交换记录；其不得代替任何其他物料、载体、废物或排放。

- 选定流：Spent smoke filter
- 流属性/单位：Mass / kg
- 数量规则：记录该交换针对锁定批次跨越本过程边界的前景实测数量。
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：技术特定（`technology_specific`）
- 归一化基准：每 1 kg 厂门处净合格可销售参考产品
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_material_waste_mass`
- 来源：`eu-pef-2021-2279`、`jrc-sa-bref-2024`
- UUID 状态：未解析；在精确双核核验前保持为空。
- 适用性：仅在 Spent smoke filter 针对单一锁定产品配方和处理顺序实际跨越过程边界时记录；否则将该原子行标记为不适用。
- 不确定性：保留秤分辨率、校准状态、去皮方法、适用时的水分基准以及批次核对差异。

##### 基本流

###### 排放粒径不大于2.5微米颗粒物向空气排放（`smoking_release_pm25`）

Particulate matter, ≤2.5 µm, to air 在本过程中作为一项原子输出交换记录；其不得代替任何其他物料、载体、废物或排放。

- 选定流：Particulate matter, ≤2.5 µm, to air
- 流属性/单位：Mass / kg
- 数量规则：记录该交换针对锁定批次跨越本过程边界的前景实测数量。
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：技术特定（`technology_specific`）
- 归一化基准：每 1 kg 厂门处净合格可销售参考产品
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_direct_emission_measurement`
- 来源：`eu-pef-2021-2279`、`jrc-sa-bref-2024`、`codex-cxc-58-2005`
- UUID 状态：未解析；在精确双核核验前保持为空。
- 适用性：仅在 Particulate matter, ≤2.5 µm, to air 针对单一锁定产品配方和处理顺序实际跨越过程边界时记录；否则将该原子行标记为不适用。
- 不确定性：保留采样或质量平衡方法、检出限、时间代表性、换算记录和分析不确定性。

###### 排放非甲烷挥发性有机碳向空气排放（`smoking_release_nmvoc`）

Non-methane volatile organic carbon to air 在本过程中作为一项原子输出交换记录；其不得代替任何其他物料、载体、废物或排放。

- 选定流：Non-methane volatile organic carbon to air
- 流属性/单位：Mass / kg
- 数量规则：记录该交换针对锁定批次跨越本过程边界的前景实测数量。
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：技术特定（`technology_specific`）
- 归一化基准：每 1 kg 厂门处净合格可销售参考产品
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_direct_emission_measurement`
- 来源：`eu-pef-2021-2279`、`jrc-sa-bref-2024`、`codex-cxc-58-2005`
- UUID 状态：未解析；在精确双核核验前保持为空。
- 适用性：仅在 Non-methane volatile organic carbon to air 针对单一锁定产品配方和处理顺序实际跨越过程边界时记录；否则将该原子行标记为不适用。
- 不确定性：保留采样或质量平衡方法、检出限、时间代表性、换算记录和分析不确定性。

###### 排放一氧化碳向空气排放（`smoking_release_co`）

Carbon monoxide to air 在本过程中作为一项原子输出交换记录；其不得代替任何其他物料、载体、废物或排放。

- 选定流：Carbon monoxide to air
- 流属性/单位：Mass / kg
- 数量规则：记录该交换针对锁定批次跨越本过程边界的前景实测数量。
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：技术特定（`technology_specific`）
- 归一化基准：每 1 kg 厂门处净合格可销售参考产品
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_direct_emission_measurement`
- 来源：`eu-pef-2021-2279`、`jrc-sa-bref-2024`、`codex-cxc-58-2005`
- UUID 状态：未解析；在精确双核核验前保持为空。
- 适用性：仅在 Carbon monoxide to air 针对单一锁定产品配方和处理顺序实际跨越过程边界时记录；否则将该原子行标记为不适用。
- 不确定性：保留采样或质量平衡方法、检出限、时间代表性、换算记录和分析不确定性。

###### 排放氮氧化物（NOx）向空气排放（`smoking_release_nox`）

Nitrogen oxides (NOx) to air 在本过程中作为一项原子输出交换记录；其不得代替任何其他物料、载体、废物或排放。

- 选定流：Nitrogen oxides (NOx) to air
- 流属性/单位：Mass / kg
- 数量规则：记录该交换针对锁定批次跨越本过程边界的前景实测数量。
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：技术特定（`technology_specific`）
- 归一化基准：每 1 kg 厂门处净合格可销售参考产品
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_direct_emission_measurement`
- 来源：`eu-pef-2021-2279`、`jrc-sa-bref-2024`、`codex-cxc-58-2005`
- UUID 状态：未解析；在精确双核核验前保持为空。
- 适用性：仅在 Nitrogen oxides (NOx) to air 针对单一锁定产品配方和处理顺序实际跨越过程边界时记录；否则将该原子行标记为不适用。
- 不确定性：保留采样或质量平衡方法、检出限、时间代表性、换算记录和分析不确定性。

### 过程：热处理与受控冷却（`thermal_processing`）

具有成文过程参数并随后受控冷却的前景热处理。仅在锁定处理顺序包含蒸煮、巴氏处理、灭菌或另一项明确命名的热处理时纳入。

#### 输入

##### 产品流

###### 投入生猪肉鲜香肠段（`thermal_input_pork_fresh`）

Raw pork fresh sausage links 在本过程中作为一项原子输入交换记录；其不得代替任何其他物料、载体、废物或排放。

- 选定流：Raw pork fresh sausage links
- 流属性/单位：Mass / kg
- 数量规则：记录该交换针对锁定批次跨越本过程边界的前景实测数量。
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：产品特定（`product_specific`）
- 归一化基准：每 1 kg 厂门处净合格可销售参考产品
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_intermediate_product_mass`
- 来源：`eu-pef-2021-2279`、`codex-cxs-192-1995`、`codex-cxc-58-2005`
- UUID 状态：未解析；在精确双核核验前保持为空。
- 适用性：仅在 Raw pork fresh sausage links 针对单一锁定产品配方和处理顺序实际跨越过程边界时记录；否则将该原子行标记为不适用。
- 不确定性：保留秤分辨率、校准状态、去皮方法、适用时的水分基准以及批次核对差异。

###### 投入生牛肉熟制香肠段（`thermal_input_beef_cooked`）

Raw beef cooked-sausage links 在本过程中作为一项原子输入交换记录；其不得代替任何其他物料、载体、废物或排放。

- 选定流：Raw beef cooked-sausage links
- 流属性/单位：Mass / kg
- 数量规则：记录该交换针对锁定批次跨越本过程边界的前景实测数量。
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：产品特定（`product_specific`）
- 归一化基准：每 1 kg 厂门处净合格可销售参考产品
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_intermediate_product_mass`
- 来源：`eu-pef-2021-2279`、`codex-cxs-192-1995`、`codex-cxc-58-2005`
- UUID 状态：未解析；在精确双核核验前保持为空。
- 适用性：仅在 Raw beef cooked-sausage links 针对单一锁定产品配方和处理顺序实际跨越过程边界时记录；否则将该原子行标记为不适用。
- 不确定性：保留秤分辨率、校准状态、去皮方法、适用时的水分基准以及批次核对差异。

###### 投入灌装猪血布丁（`thermal_input_pig_blood`）

Filled pig blood pudding 在本过程中作为一项原子输入交换记录；其不得代替任何其他物料、载体、废物或排放。

- 选定流：Filled pig blood pudding
- 流属性/单位：Mass / kg
- 数量规则：记录该交换针对锁定批次跨越本过程边界的前景实测数量。
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：产品特定（`product_specific`）
- 归一化基准：每 1 kg 厂门处净合格可销售参考产品
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_intermediate_product_mass`
- 来源：`eu-pef-2021-2279`、`codex-cxs-192-1995`、`codex-cxc-58-2005`
- UUID 状态：未解析；在精确双核核验前保持为空。
- 适用性：仅在 Filled pig blood pudding 针对单一锁定产品配方和处理顺序实际跨越过程边界时记录；否则将该原子行标记为不适用。
- 不确定性：保留秤分辨率、校准状态、去皮方法、适用时的水分基准以及批次核对差异。

###### 投入灌装牛血布丁（`thermal_input_cattle_blood`）

Filled cattle blood pudding 在本过程中作为一项原子输入交换记录；其不得代替任何其他物料、载体、废物或排放。

- 选定流：Filled cattle blood pudding
- 流属性/单位：Mass / kg
- 数量规则：记录该交换针对锁定批次跨越本过程边界的前景实测数量。
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：产品特定（`product_specific`）
- 归一化基准：每 1 kg 厂门处净合格可销售参考产品
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_intermediate_product_mass`
- 来源：`eu-pef-2021-2279`、`codex-cxs-192-1995`、`codex-cxc-58-2005`
- UUID 状态：未解析；在精确双核核验前保持为空。
- 适用性：仅在 Filled cattle blood pudding 针对单一锁定产品配方和处理顺序实际跨越过程边界时记录；否则将该原子行标记为不适用。
- 不确定性：保留秤分辨率、校准状态、去皮方法、适用时的水分基准以及批次核对差异。

###### 投入灌装猪肝香肠（`thermal_input_pork_liver`）

Filled pork liver sausage 在本过程中作为一项原子输入交换记录；其不得代替任何其他物料、载体、废物或排放。

- 选定流：Filled pork liver sausage
- 流属性/单位：Mass / kg
- 数量规则：记录该交换针对锁定批次跨越本过程边界的前景实测数量。
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：产品特定（`product_specific`）
- 归一化基准：每 1 kg 厂门处净合格可销售参考产品
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_intermediate_product_mass`
- 来源：`eu-pef-2021-2279`、`codex-cxs-192-1995`、`codex-cxc-58-2005`
- UUID 状态：未解析；在精确双核核验前保持为空。
- 适用性：仅在 Filled pork liver sausage 针对单一锁定产品配方和处理顺序实际跨越过程边界时记录；否则将该原子行标记为不适用。
- 不确定性：保留秤分辨率、校准状态、去皮方法、适用时的水分基准以及批次核对差异。

###### 投入灌装牛心香肠（`thermal_input_beef_heart`）

Filled beef heart sausage 在本过程中作为一项原子输入交换记录；其不得代替任何其他物料、载体、废物或排放。

- 选定流：Filled beef heart sausage
- 流属性/单位：Mass / kg
- 数量规则：记录该交换针对锁定批次跨越本过程边界的前景实测数量。
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：产品特定（`product_specific`）
- 归一化基准：每 1 kg 厂门处净合格可销售参考产品
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_intermediate_product_mass`
- 来源：`eu-pef-2021-2279`、`codex-cxs-192-1995`、`codex-cxc-58-2005`
- UUID 状态：未解析；在精确双核核验前保持为空。
- 适用性：仅在 Filled beef heart sausage 针对单一锁定产品配方和处理顺序实际跨越过程边界时记录；否则将该原子行标记为不适用。
- 不确定性：保留秤分辨率、校准状态、去皮方法、适用时的水分基准以及批次核对差异。

###### 投入灌装猪肾香肠（`thermal_input_pork_kidney`）

Filled pork kidney sausage 在本过程中作为一项原子输入交换记录；其不得代替任何其他物料、载体、废物或排放。

- 选定流：Filled pork kidney sausage
- 流属性/单位：Mass / kg
- 数量规则：记录该交换针对锁定批次跨越本过程边界的前景实测数量。
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：产品特定（`product_specific`）
- 归一化基准：每 1 kg 厂门处净合格可销售参考产品
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_intermediate_product_mass`
- 来源：`eu-pef-2021-2279`、`codex-cxs-192-1995`、`codex-cxc-58-2005`
- UUID 状态：未解析；在精确双核核验前保持为空。
- 适用性：仅在 Filled pork kidney sausage 针对单一锁定产品配方和处理顺序实际跨越过程边界时记录；否则将该原子行标记为不适用。
- 不确定性：保留秤分辨率、校准状态、去皮方法、适用时的水分基准以及批次核对差异。

###### 投入肠衣内鸡肉加朗汀（`thermal_input_chicken_galantine`）

Chicken galantine in casing 在本过程中作为一项原子输入交换记录；其不得代替任何其他物料、载体、废物或排放。

- 选定流：Chicken galantine in casing
- 流属性/单位：Mass / kg
- 数量规则：记录该交换针对锁定批次跨越本过程边界的前景实测数量。
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：产品特定（`product_specific`）
- 归一化基准：每 1 kg 厂门处净合格可销售参考产品
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_intermediate_product_mass`
- 来源：`eu-pef-2021-2279`、`codex-cxs-192-1995`、`codex-cxc-58-2005`
- UUID 状态：未解析；在精确双核核验前保持为空。
- 适用性：仅在 Chicken galantine in casing 针对单一锁定产品配方和处理顺序实际跨越过程边界时记录；否则将该原子行标记为不适用。
- 不确定性：保留秤分辨率、校准状态、去皮方法、适用时的水分基准以及批次核对差异。

###### 投入肠衣内牛肉酱（`thermal_input_beef_meat_paste`）

Beef meat paste in casing 在本过程中作为一项原子输入交换记录；其不得代替任何其他物料、载体、废物或排放。

- 选定流：Beef meat paste in casing
- 流属性/单位：Mass / kg
- 数量规则：记录该交换针对锁定批次跨越本过程边界的前景实测数量。
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：产品特定（`product_specific`）
- 归一化基准：每 1 kg 厂门处净合格可销售参考产品
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_intermediate_product_mass`
- 来源：`eu-pef-2021-2279`、`codex-cxs-192-1995`、`codex-cxc-58-2005`
- UUID 状态：未解析；在精确双核核验前保持为空。
- 适用性：仅在 Beef meat paste in casing 针对单一锁定产品配方和处理顺序实际跨越过程边界时记录；否则将该原子行标记为不适用。
- 不确定性：保留秤分辨率、校准状态、去皮方法、适用时的水分基准以及批次核对差异。

###### 投入肠衣内猪肉酱（`thermal_input_pork_pate`）

Pork pâté in casing 在本过程中作为一项原子输入交换记录；其不得代替任何其他物料、载体、废物或排放。

- 选定流：Pork pâté in casing
- 流属性/单位：Mass / kg
- 数量规则：记录该交换针对锁定批次跨越本过程边界的前景实测数量。
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：产品特定（`product_specific`）
- 归一化基准：每 1 kg 厂门处净合格可销售参考产品
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_intermediate_product_mass`
- 来源：`eu-pef-2021-2279`、`codex-cxs-192-1995`、`codex-cxc-58-2005`
- UUID 状态：未解析；在精确双核核验前保持为空。
- 适用性：仅在 Pork pâté in casing 针对单一锁定产品配方和处理顺序实际跨越过程边界时记录；否则将该原子行标记为不适用。
- 不确定性：保留秤分辨率、校准状态、去皮方法、适用时的水分基准以及批次核对差异。

###### 投入肠衣内猪肉酥酱（`thermal_input_pork_rillettes`）

Pork rillettes in casing 在本过程中作为一项原子输入交换记录；其不得代替任何其他物料、载体、废物或排放。

- 选定流：Pork rillettes in casing
- 流属性/单位：Mass / kg
- 数量规则：记录该交换针对锁定批次跨越本过程边界的前景实测数量。
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：产品特定（`product_specific`）
- 归一化基准：每 1 kg 厂门处净合格可销售参考产品
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_intermediate_product_mass`
- 来源：`eu-pef-2021-2279`、`codex-cxs-192-1995`、`codex-cxc-58-2005`
- UUID 状态：未解析；在精确双核核验前保持为空。
- 适用性：仅在 Pork rillettes in casing 针对单一锁定产品配方和处理顺序实际跨越过程边界时记录；否则将该原子行标记为不适用。
- 不确定性：保留秤分辨率、校准状态、去皮方法、适用时的水分基准以及批次核对差异。

###### 使用中压电网电力（`thermal_electricity`）

Grid electricity, medium voltage 在本过程中作为一项原子输入交换记录；其不得代替任何其他物料、载体、废物或排放。

- 选定流：Grid electricity, medium voltage
- 流属性/单位：Energy / kWh
- 数量规则：记录该交换针对锁定批次跨越本过程边界的前景实测数量。
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每 1 kg 厂门处净合格可销售参考产品
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_stage_electricity`
- 来源：`eu-pef-2021-2279`、`jrc-sa-bref-2024`、`codex-cxc-58-2005`
- UUID 状态：未解析；在精确双核核验前保持为空。
- 适用性：仅在 Grid electricity, medium voltage 针对单一锁定产品配方和处理顺序实际跨越过程边界时记录；否则将该原子行标记为不适用。
- 不确定性：保留仪表分辨率、校准状态、计量覆盖、时间区间以及任何批次归属计算。

###### 使用外购蒸汽（`thermal_purchased_steam`）

Purchased steam 在本过程中作为一项原子输入交换记录；其不得代替任何其他物料、载体、废物或排放。

- 选定流：Purchased steam
- 流属性/单位：Energy / MJ
- 数量规则：记录该交换针对锁定批次跨越本过程边界的前景实测数量。
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每 1 kg 厂门处净合格可销售参考产品
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_purchased_heat`
- 来源：`eu-pef-2021-2279`、`jrc-sa-bref-2024`、`codex-cxc-58-2005`
- UUID 状态：未解析；在精确双核核验前保持为空。
- 适用性：仅在 Purchased steam 针对单一锁定产品配方和处理顺序实际跨越过程边界时记录；否则将该原子行标记为不适用。
- 不确定性：保留仪表分辨率、校准状态、计量覆盖、时间区间以及任何批次归属计算。

###### 使用外购热水（`thermal_purchased_hot_water`）

Purchased hot water 在本过程中作为一项原子输入交换记录；其不得代替任何其他物料、载体、废物或排放。

- 选定流：Purchased hot water
- 流属性/单位：Energy / MJ
- 数量规则：记录该交换针对锁定批次跨越本过程边界的前景实测数量。
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每 1 kg 厂门处净合格可销售参考产品
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_purchased_heat`
- 来源：`eu-pef-2021-2279`、`jrc-sa-bref-2024`、`codex-cxc-58-2005`
- UUID 状态：未解析；在精确双核核验前保持为空。
- 适用性：仅在 Purchased hot water 针对单一锁定产品配方和处理顺序实际跨越过程边界时记录；否则将该原子行标记为不适用。
- 不确定性：保留仪表分辨率、校准状态、计量覆盖、时间区间以及任何批次归属计算。

###### 使用场内生成蒸汽（`thermal_onsite_steam`）

Onsite-generated steam 在本过程中作为一项原子输入交换记录；其不得代替任何其他物料、载体、废物或排放。

- 选定流：Onsite-generated steam
- 流属性/单位：Energy / MJ
- 数量规则：记录该交换针对锁定批次跨越本过程边界的前景实测数量。
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：技术特定（`technology_specific`）
- 归一化基准：每 1 kg 厂门处净合格可销售参考产品
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_internal_heat_output`
- 来源：`eu-pef-2021-2279`、`jrc-sa-bref-2024`、`codex-cxc-58-2005`
- UUID 状态：未解析；在精确双核核验前保持为空。
- 适用性：仅在 Onsite-generated steam 针对单一锁定产品配方和处理顺序实际跨越过程边界时记录；否则将该原子行标记为不适用。
- 不确定性：保留仪表分辨率、校准状态、计量覆盖、时间区间以及任何批次归属计算。

###### 使用场内生成热水（`thermal_onsite_hot_water`）

Onsite-generated hot water 在本过程中作为一项原子输入交换记录；其不得代替任何其他物料、载体、废物或排放。

- 选定流：Onsite-generated hot water
- 流属性/单位：Energy / MJ
- 数量规则：记录该交换针对锁定批次跨越本过程边界的前景实测数量。
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：技术特定（`technology_specific`）
- 归一化基准：每 1 kg 厂门处净合格可销售参考产品
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_internal_heat_output`
- 来源：`eu-pef-2021-2279`、`jrc-sa-bref-2024`、`codex-cxc-58-2005`
- UUID 状态：未解析；在精确双核核验前保持为空。
- 适用性：仅在 Onsite-generated hot water 针对单一锁定产品配方和处理顺序实际跨越过程边界时记录；否则将该原子行标记为不适用。
- 不确定性：保留仪表分辨率、校准状态、计量覆盖、时间区间以及任何批次归属计算。

###### 使用天然气（`thermal_natural_gas`）

Natural gas 在本过程中作为一项原子输入交换记录；其不得代替任何其他物料、载体、废物或排放。

- 选定流：Natural gas
- 流属性/单位：Mass / kg
- 数量规则：记录该交换针对锁定批次跨越本过程边界的前景实测数量。
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：技术特定（`technology_specific`）
- 归一化基准：每 1 kg 厂门处净合格可销售参考产品
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_fuel_inventory`
- 来源：`eu-pef-2021-2279`、`jrc-sa-bref-2024`、`codex-cxc-58-2005`
- UUID 状态：未解析；在精确双核核验前保持为空。
- 适用性：仅在 Natural gas 针对单一锁定产品配方和处理顺序实际跨越过程边界时记录；否则将该原子行标记为不适用。
- 不确定性：保留秤分辨率、校准状态、去皮方法、适用时的水分基准以及批次核对差异。

###### 使用柴油（`thermal_diesel`）

Diesel fuel 在本过程中作为一项原子输入交换记录；其不得代替任何其他物料、载体、废物或排放。

- 选定流：Diesel fuel
- 流属性/单位：Mass / kg
- 数量规则：记录该交换针对锁定批次跨越本过程边界的前景实测数量。
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：技术特定（`technology_specific`）
- 归一化基准：每 1 kg 厂门处净合格可销售参考产品
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_fuel_inventory`
- 来源：`eu-pef-2021-2279`、`jrc-sa-bref-2024`、`codex-cxc-58-2005`
- UUID 状态：未解析；在精确双核核验前保持为空。
- 适用性：仅在 Diesel fuel 针对单一锁定产品配方和处理顺序实际跨越过程边界时记录；否则将该原子行标记为不适用。
- 不确定性：保留秤分辨率、校准状态、去皮方法、适用时的水分基准以及批次核对差异。

###### 使用液化石油气（`thermal_lpg`）

Liquefied petroleum gas 在本过程中作为一项原子输入交换记录；其不得代替任何其他物料、载体、废物或排放。

- 选定流：Liquefied petroleum gas
- 流属性/单位：Mass / kg
- 数量规则：记录该交换针对锁定批次跨越本过程边界的前景实测数量。
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：技术特定（`technology_specific`）
- 归一化基准：每 1 kg 厂门处净合格可销售参考产品
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_fuel_inventory`
- 来源：`eu-pef-2021-2279`、`jrc-sa-bref-2024`、`codex-cxc-58-2005`
- UUID 状态：未解析；在精确双核核验前保持为空。
- 适用性：仅在 Liquefied petroleum gas 针对单一锁定产品配方和处理顺序实际跨越过程边界时记录；否则将该原子行标记为不适用。
- 不确定性：保留秤分辨率、校准状态、去皮方法、适用时的水分基准以及批次核对差异。

###### 使用饮用级蒸煮水（`thermal_water`）

Potable cooking water 在本过程中作为一项原子输入交换记录；其不得代替任何其他物料、载体、废物或排放。

- 选定流：Potable cooking water
- 流属性/单位：Mass / kg
- 数量规则：记录该交换针对锁定批次跨越本过程边界的前景实测数量。
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每 1 kg 厂门处净合格可销售参考产品
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_process_water_mass`
- 来源：`eu-pef-2021-2279`、`jrc-sa-bref-2024`、`codex-cxc-58-2005`
- UUID 状态：未解析；在精确双核核验前保持为空。
- 适用性：仅在 Potable cooking water 针对单一锁定产品配方和处理顺序实际跨越过程边界时记录；否则将该原子行标记为不适用。
- 不确定性：保留秤分辨率、校准状态、去皮方法、适用时的水分基准以及批次核对差异。

###### 记录氨（R717）制冷剂补充（`thermal_r717_makeup`）

Ammonia (R717) refrigerant makeup 在本过程中作为一项原子输入交换记录；其不得代替任何其他物料、载体、废物或排放。

- 选定流：Ammonia (R717) refrigerant makeup
- 流属性/单位：Mass / kg
- 数量规则：记录该交换针对锁定批次跨越本过程边界的前景实测数量。
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：技术特定（`technology_specific`）
- 归一化基准：每 1 kg 厂门处净合格可销售参考产品
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_refrigerant_reconciliation`
- 来源：`eu-pef-2021-2279`、`jrc-sa-bref-2024`
- UUID 状态：未解析；在精确双核核验前保持为空。
- 适用性：仅在 Ammonia (R717) refrigerant makeup 针对单一锁定产品配方和处理顺序实际跨越过程边界时记录；否则将该原子行标记为不适用。
- 不确定性：保留秤分辨率、校准状态、去皮方法、适用时的水分基准以及批次核对差异。

###### 记录二氧化碳（R744）制冷剂补充（`thermal_r744_makeup`）

Carbon dioxide (R744) refrigerant makeup 在本过程中作为一项原子输入交换记录；其不得代替任何其他物料、载体、废物或排放。

- 选定流：Carbon dioxide (R744) refrigerant makeup
- 流属性/单位：Mass / kg
- 数量规则：记录该交换针对锁定批次跨越本过程边界的前景实测数量。
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：技术特定（`technology_specific`）
- 归一化基准：每 1 kg 厂门处净合格可销售参考产品
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_refrigerant_reconciliation`
- 来源：`eu-pef-2021-2279`、`jrc-sa-bref-2024`
- UUID 状态：未解析；在精确双核核验前保持为空。
- 适用性：仅在 Carbon dioxide (R744) refrigerant makeup 针对单一锁定产品配方和处理顺序实际跨越过程边界时记录；否则将该原子行标记为不适用。
- 不确定性：保留秤分辨率、校准状态、去皮方法、适用时的水分基准以及批次核对差异。

###### 记录丙烷（R290）制冷剂补充（`thermal_r290_makeup`）

Propane (R290) refrigerant makeup 在本过程中作为一项原子输入交换记录；其不得代替任何其他物料、载体、废物或排放。

- 选定流：Propane (R290) refrigerant makeup
- 流属性/单位：Mass / kg
- 数量规则：记录该交换针对锁定批次跨越本过程边界的前景实测数量。
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：技术特定（`technology_specific`）
- 归一化基准：每 1 kg 厂门处净合格可销售参考产品
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_refrigerant_reconciliation`
- 来源：`eu-pef-2021-2279`、`jrc-sa-bref-2024`
- UUID 状态：未解析；在精确双核核验前保持为空。
- 适用性：仅在 Propane (R290) refrigerant makeup 针对单一锁定产品配方和处理顺序实际跨越过程边界时记录；否则将该原子行标记为不适用。
- 不确定性：保留秤分辨率、校准状态、去皮方法、适用时的水分基准以及批次核对差异。

##### 废物流

##### 基本流

#### 输出

##### 产品流

###### 产出熟制猪肉香肠段（`thermal_output_pork_fresh`）

Cooked pork sausage links 在本过程中作为一项原子输出交换记录；其不得代替任何其他物料、载体、废物或排放。

- 选定流：Cooked pork sausage links
- 流属性/单位：Mass / kg
- 数量规则：记录该交换针对锁定批次跨越本过程边界的前景实测数量。
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：产品特定（`product_specific`）
- 归一化基准：每 1 kg 厂门处净合格可销售参考产品
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_intermediate_product_mass`
- 来源：`eu-pef-2021-2279`、`codex-cxs-192-1995`、`codex-cxc-58-2005`
- UUID 状态：未解析；在精确双核核验前保持为空。
- 适用性：仅在 Cooked pork sausage links 针对单一锁定产品配方和处理顺序实际跨越过程边界时记录；否则将该原子行标记为不适用。
- 不确定性：保留秤分辨率、校准状态、去皮方法、适用时的水分基准以及批次核对差异。

###### 产出熟制牛肉香肠段（`thermal_output_beef_cooked`）

Cooked beef sausage links 在本过程中作为一项原子输出交换记录；其不得代替任何其他物料、载体、废物或排放。

- 选定流：Cooked beef sausage links
- 流属性/单位：Mass / kg
- 数量规则：记录该交换针对锁定批次跨越本过程边界的前景实测数量。
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：产品特定（`product_specific`）
- 归一化基准：每 1 kg 厂门处净合格可销售参考产品
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_intermediate_product_mass`
- 来源：`eu-pef-2021-2279`、`codex-cxs-192-1995`、`codex-cxc-58-2005`
- UUID 状态：未解析；在精确双核核验前保持为空。
- 适用性：仅在 Cooked beef sausage links 针对单一锁定产品配方和处理顺序实际跨越过程边界时记录；否则将该原子行标记为不适用。
- 不确定性：保留秤分辨率、校准状态、去皮方法、适用时的水分基准以及批次核对差异。

###### 产出熟制猪血布丁（`thermal_output_pig_blood`）

Cooked pig blood pudding 在本过程中作为一项原子输出交换记录；其不得代替任何其他物料、载体、废物或排放。

- 选定流：Cooked pig blood pudding
- 流属性/单位：Mass / kg
- 数量规则：记录该交换针对锁定批次跨越本过程边界的前景实测数量。
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：产品特定（`product_specific`）
- 归一化基准：每 1 kg 厂门处净合格可销售参考产品
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_intermediate_product_mass`
- 来源：`eu-pef-2021-2279`、`codex-cxs-192-1995`、`codex-cxc-58-2005`
- UUID 状态：未解析；在精确双核核验前保持为空。
- 适用性：仅在 Cooked pig blood pudding 针对单一锁定产品配方和处理顺序实际跨越过程边界时记录；否则将该原子行标记为不适用。
- 不确定性：保留秤分辨率、校准状态、去皮方法、适用时的水分基准以及批次核对差异。

###### 产出熟制牛血布丁（`thermal_output_cattle_blood`）

Cooked cattle blood pudding 在本过程中作为一项原子输出交换记录；其不得代替任何其他物料、载体、废物或排放。

- 选定流：Cooked cattle blood pudding
- 流属性/单位：Mass / kg
- 数量规则：记录该交换针对锁定批次跨越本过程边界的前景实测数量。
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：产品特定（`product_specific`）
- 归一化基准：每 1 kg 厂门处净合格可销售参考产品
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_intermediate_product_mass`
- 来源：`eu-pef-2021-2279`、`codex-cxs-192-1995`、`codex-cxc-58-2005`
- UUID 状态：未解析；在精确双核核验前保持为空。
- 适用性：仅在 Cooked cattle blood pudding 针对单一锁定产品配方和处理顺序实际跨越过程边界时记录；否则将该原子行标记为不适用。
- 不确定性：保留秤分辨率、校准状态、去皮方法、适用时的水分基准以及批次核对差异。

###### 产出熟制猪肝香肠（`thermal_output_pork_liver`）

Cooked pork liver sausage 在本过程中作为一项原子输出交换记录；其不得代替任何其他物料、载体、废物或排放。

- 选定流：Cooked pork liver sausage
- 流属性/单位：Mass / kg
- 数量规则：记录该交换针对锁定批次跨越本过程边界的前景实测数量。
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：产品特定（`product_specific`）
- 归一化基准：每 1 kg 厂门处净合格可销售参考产品
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_intermediate_product_mass`
- 来源：`eu-pef-2021-2279`、`codex-cxs-192-1995`、`codex-cxc-58-2005`
- UUID 状态：未解析；在精确双核核验前保持为空。
- 适用性：仅在 Cooked pork liver sausage 针对单一锁定产品配方和处理顺序实际跨越过程边界时记录；否则将该原子行标记为不适用。
- 不确定性：保留秤分辨率、校准状态、去皮方法、适用时的水分基准以及批次核对差异。

###### 产出熟制牛心香肠（`thermal_output_beef_heart`）

Cooked beef heart sausage 在本过程中作为一项原子输出交换记录；其不得代替任何其他物料、载体、废物或排放。

- 选定流：Cooked beef heart sausage
- 流属性/单位：Mass / kg
- 数量规则：记录该交换针对锁定批次跨越本过程边界的前景实测数量。
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：产品特定（`product_specific`）
- 归一化基准：每 1 kg 厂门处净合格可销售参考产品
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_intermediate_product_mass`
- 来源：`eu-pef-2021-2279`、`codex-cxs-192-1995`、`codex-cxc-58-2005`
- UUID 状态：未解析；在精确双核核验前保持为空。
- 适用性：仅在 Cooked beef heart sausage 针对单一锁定产品配方和处理顺序实际跨越过程边界时记录；否则将该原子行标记为不适用。
- 不确定性：保留秤分辨率、校准状态、去皮方法、适用时的水分基准以及批次核对差异。

###### 产出熟制猪肾香肠（`thermal_output_pork_kidney`）

Cooked pork kidney sausage 在本过程中作为一项原子输出交换记录；其不得代替任何其他物料、载体、废物或排放。

- 选定流：Cooked pork kidney sausage
- 流属性/单位：Mass / kg
- 数量规则：记录该交换针对锁定批次跨越本过程边界的前景实测数量。
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：产品特定（`product_specific`）
- 归一化基准：每 1 kg 厂门处净合格可销售参考产品
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_intermediate_product_mass`
- 来源：`eu-pef-2021-2279`、`codex-cxs-192-1995`、`codex-cxc-58-2005`
- UUID 状态：未解析；在精确双核核验前保持为空。
- 适用性：仅在 Cooked pork kidney sausage 针对单一锁定产品配方和处理顺序实际跨越过程边界时记录；否则将该原子行标记为不适用。
- 不确定性：保留秤分辨率、校准状态、去皮方法、适用时的水分基准以及批次核对差异。

###### 产出熟制肠衣内鸡肉加朗汀（`thermal_output_chicken_galantine`）

Cooked chicken galantine in casing 在本过程中作为一项原子输出交换记录；其不得代替任何其他物料、载体、废物或排放。

- 选定流：Cooked chicken galantine in casing
- 流属性/单位：Mass / kg
- 数量规则：记录该交换针对锁定批次跨越本过程边界的前景实测数量。
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：产品特定（`product_specific`）
- 归一化基准：每 1 kg 厂门处净合格可销售参考产品
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_intermediate_product_mass`
- 来源：`eu-pef-2021-2279`、`codex-cxs-192-1995`、`codex-cxc-58-2005`
- UUID 状态：未解析；在精确双核核验前保持为空。
- 适用性：仅在 Cooked chicken galantine in casing 针对单一锁定产品配方和处理顺序实际跨越过程边界时记录；否则将该原子行标记为不适用。
- 不确定性：保留秤分辨率、校准状态、去皮方法、适用时的水分基准以及批次核对差异。

###### 产出熟制肠衣内牛肉酱（`thermal_output_beef_meat_paste`）

Cooked beef meat paste in casing 在本过程中作为一项原子输出交换记录；其不得代替任何其他物料、载体、废物或排放。

- 选定流：Cooked beef meat paste in casing
- 流属性/单位：Mass / kg
- 数量规则：记录该交换针对锁定批次跨越本过程边界的前景实测数量。
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：产品特定（`product_specific`）
- 归一化基准：每 1 kg 厂门处净合格可销售参考产品
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_intermediate_product_mass`
- 来源：`eu-pef-2021-2279`、`codex-cxs-192-1995`、`codex-cxc-58-2005`
- UUID 状态：未解析；在精确双核核验前保持为空。
- 适用性：仅在 Cooked beef meat paste in casing 针对单一锁定产品配方和处理顺序实际跨越过程边界时记录；否则将该原子行标记为不适用。
- 不确定性：保留秤分辨率、校准状态、去皮方法、适用时的水分基准以及批次核对差异。

###### 产出熟制肠衣内猪肉酱（`thermal_output_pork_pate`）

Cooked pork pâté in casing 在本过程中作为一项原子输出交换记录；其不得代替任何其他物料、载体、废物或排放。

- 选定流：Cooked pork pâté in casing
- 流属性/单位：Mass / kg
- 数量规则：记录该交换针对锁定批次跨越本过程边界的前景实测数量。
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：产品特定（`product_specific`）
- 归一化基准：每 1 kg 厂门处净合格可销售参考产品
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_intermediate_product_mass`
- 来源：`eu-pef-2021-2279`、`codex-cxs-192-1995`、`codex-cxc-58-2005`
- UUID 状态：未解析；在精确双核核验前保持为空。
- 适用性：仅在 Cooked pork pâté in casing 针对单一锁定产品配方和处理顺序实际跨越过程边界时记录；否则将该原子行标记为不适用。
- 不确定性：保留秤分辨率、校准状态、去皮方法、适用时的水分基准以及批次核对差异。

###### 产出熟制肠衣内猪肉酥酱（`thermal_output_pork_rillettes`）

Cooked pork rillettes in casing 在本过程中作为一项原子输出交换记录；其不得代替任何其他物料、载体、废物或排放。

- 选定流：Cooked pork rillettes in casing
- 流属性/单位：Mass / kg
- 数量规则：记录该交换针对锁定批次跨越本过程边界的前景实测数量。
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：产品特定（`product_specific`）
- 归一化基准：每 1 kg 厂门处净合格可销售参考产品
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_intermediate_product_mass`
- 来源：`eu-pef-2021-2279`、`codex-cxs-192-1995`、`codex-cxc-58-2005`
- UUID 状态：未解析；在精确双核核验前保持为空。
- 适用性：仅在 Cooked pork rillettes in casing 针对单一锁定产品配方和处理顺序实际跨越过程边界时记录；否则将该原子行标记为不适用。
- 不确定性：保留秤分辨率、校准状态、去皮方法、适用时的水分基准以及批次核对差异。

##### 废物流

###### 移出熟制猪肉香肠段热处理不合格物（`thermal_reject_pork_fresh`）

Cooked pork sausage links thermal reject 在本过程中作为一项原子输出交换记录；其不得代替任何其他物料、载体、废物或排放。

- 选定流：Cooked pork sausage links thermal reject
- 流属性/单位：Mass / kg
- 数量规则：记录该交换针对锁定批次跨越本过程边界的前景实测数量。
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：产品特定（`product_specific`）
- 归一化基准：每 1 kg 厂门处净合格可销售参考产品
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_material_waste_mass`
- 来源：`eu-pef-2021-2279`、`jrc-sa-bref-2024`
- UUID 状态：未解析；在精确双核核验前保持为空。
- 适用性：仅在 Cooked pork sausage links thermal reject 针对单一锁定产品配方和处理顺序实际跨越过程边界时记录；否则将该原子行标记为不适用。
- 不确定性：保留秤分辨率、校准状态、去皮方法、适用时的水分基准以及批次核对差异。

###### 移出熟制牛肉香肠段热处理不合格物（`thermal_reject_beef_cooked`）

Cooked beef sausage links thermal reject 在本过程中作为一项原子输出交换记录；其不得代替任何其他物料、载体、废物或排放。

- 选定流：Cooked beef sausage links thermal reject
- 流属性/单位：Mass / kg
- 数量规则：记录该交换针对锁定批次跨越本过程边界的前景实测数量。
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：产品特定（`product_specific`）
- 归一化基准：每 1 kg 厂门处净合格可销售参考产品
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_material_waste_mass`
- 来源：`eu-pef-2021-2279`、`jrc-sa-bref-2024`
- UUID 状态：未解析；在精确双核核验前保持为空。
- 适用性：仅在 Cooked beef sausage links thermal reject 针对单一锁定产品配方和处理顺序实际跨越过程边界时记录；否则将该原子行标记为不适用。
- 不确定性：保留秤分辨率、校准状态、去皮方法、适用时的水分基准以及批次核对差异。

###### 移出熟制猪血布丁热处理不合格物（`thermal_reject_pig_blood`）

Cooked pig blood pudding thermal reject 在本过程中作为一项原子输出交换记录；其不得代替任何其他物料、载体、废物或排放。

- 选定流：Cooked pig blood pudding thermal reject
- 流属性/单位：Mass / kg
- 数量规则：记录该交换针对锁定批次跨越本过程边界的前景实测数量。
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：产品特定（`product_specific`）
- 归一化基准：每 1 kg 厂门处净合格可销售参考产品
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_material_waste_mass`
- 来源：`eu-pef-2021-2279`、`jrc-sa-bref-2024`
- UUID 状态：未解析；在精确双核核验前保持为空。
- 适用性：仅在 Cooked pig blood pudding thermal reject 针对单一锁定产品配方和处理顺序实际跨越过程边界时记录；否则将该原子行标记为不适用。
- 不确定性：保留秤分辨率、校准状态、去皮方法、适用时的水分基准以及批次核对差异。

###### 移出熟制牛血布丁热处理不合格物（`thermal_reject_cattle_blood`）

Cooked cattle blood pudding thermal reject 在本过程中作为一项原子输出交换记录；其不得代替任何其他物料、载体、废物或排放。

- 选定流：Cooked cattle blood pudding thermal reject
- 流属性/单位：Mass / kg
- 数量规则：记录该交换针对锁定批次跨越本过程边界的前景实测数量。
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：产品特定（`product_specific`）
- 归一化基准：每 1 kg 厂门处净合格可销售参考产品
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_material_waste_mass`
- 来源：`eu-pef-2021-2279`、`jrc-sa-bref-2024`
- UUID 状态：未解析；在精确双核核验前保持为空。
- 适用性：仅在 Cooked cattle blood pudding thermal reject 针对单一锁定产品配方和处理顺序实际跨越过程边界时记录；否则将该原子行标记为不适用。
- 不确定性：保留秤分辨率、校准状态、去皮方法、适用时的水分基准以及批次核对差异。

###### 移出熟制猪肝香肠热处理不合格物（`thermal_reject_pork_liver`）

Cooked pork liver sausage thermal reject 在本过程中作为一项原子输出交换记录；其不得代替任何其他物料、载体、废物或排放。

- 选定流：Cooked pork liver sausage thermal reject
- 流属性/单位：Mass / kg
- 数量规则：记录该交换针对锁定批次跨越本过程边界的前景实测数量。
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：产品特定（`product_specific`）
- 归一化基准：每 1 kg 厂门处净合格可销售参考产品
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_material_waste_mass`
- 来源：`eu-pef-2021-2279`、`jrc-sa-bref-2024`
- UUID 状态：未解析；在精确双核核验前保持为空。
- 适用性：仅在 Cooked pork liver sausage thermal reject 针对单一锁定产品配方和处理顺序实际跨越过程边界时记录；否则将该原子行标记为不适用。
- 不确定性：保留秤分辨率、校准状态、去皮方法、适用时的水分基准以及批次核对差异。

###### 移出熟制牛心香肠热处理不合格物（`thermal_reject_beef_heart`）

Cooked beef heart sausage thermal reject 在本过程中作为一项原子输出交换记录；其不得代替任何其他物料、载体、废物或排放。

- 选定流：Cooked beef heart sausage thermal reject
- 流属性/单位：Mass / kg
- 数量规则：记录该交换针对锁定批次跨越本过程边界的前景实测数量。
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：产品特定（`product_specific`）
- 归一化基准：每 1 kg 厂门处净合格可销售参考产品
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_material_waste_mass`
- 来源：`eu-pef-2021-2279`、`jrc-sa-bref-2024`
- UUID 状态：未解析；在精确双核核验前保持为空。
- 适用性：仅在 Cooked beef heart sausage thermal reject 针对单一锁定产品配方和处理顺序实际跨越过程边界时记录；否则将该原子行标记为不适用。
- 不确定性：保留秤分辨率、校准状态、去皮方法、适用时的水分基准以及批次核对差异。

###### 移出熟制猪肾香肠热处理不合格物（`thermal_reject_pork_kidney`）

Cooked pork kidney sausage thermal reject 在本过程中作为一项原子输出交换记录；其不得代替任何其他物料、载体、废物或排放。

- 选定流：Cooked pork kidney sausage thermal reject
- 流属性/单位：Mass / kg
- 数量规则：记录该交换针对锁定批次跨越本过程边界的前景实测数量。
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：产品特定（`product_specific`）
- 归一化基准：每 1 kg 厂门处净合格可销售参考产品
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_material_waste_mass`
- 来源：`eu-pef-2021-2279`、`jrc-sa-bref-2024`
- UUID 状态：未解析；在精确双核核验前保持为空。
- 适用性：仅在 Cooked pork kidney sausage thermal reject 针对单一锁定产品配方和处理顺序实际跨越过程边界时记录；否则将该原子行标记为不适用。
- 不确定性：保留秤分辨率、校准状态、去皮方法、适用时的水分基准以及批次核对差异。

###### 移出熟制肠衣内鸡肉加朗汀热处理不合格物（`thermal_reject_chicken_galantine`）

Cooked chicken galantine in casing thermal reject 在本过程中作为一项原子输出交换记录；其不得代替任何其他物料、载体、废物或排放。

- 选定流：Cooked chicken galantine in casing thermal reject
- 流属性/单位：Mass / kg
- 数量规则：记录该交换针对锁定批次跨越本过程边界的前景实测数量。
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：产品特定（`product_specific`）
- 归一化基准：每 1 kg 厂门处净合格可销售参考产品
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_material_waste_mass`
- 来源：`eu-pef-2021-2279`、`jrc-sa-bref-2024`
- UUID 状态：未解析；在精确双核核验前保持为空。
- 适用性：仅在 Cooked chicken galantine in casing thermal reject 针对单一锁定产品配方和处理顺序实际跨越过程边界时记录；否则将该原子行标记为不适用。
- 不确定性：保留秤分辨率、校准状态、去皮方法、适用时的水分基准以及批次核对差异。

###### 移出熟制肠衣内牛肉酱热处理不合格物（`thermal_reject_beef_meat_paste`）

Cooked beef meat paste in casing thermal reject 在本过程中作为一项原子输出交换记录；其不得代替任何其他物料、载体、废物或排放。

- 选定流：Cooked beef meat paste in casing thermal reject
- 流属性/单位：Mass / kg
- 数量规则：记录该交换针对锁定批次跨越本过程边界的前景实测数量。
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：产品特定（`product_specific`）
- 归一化基准：每 1 kg 厂门处净合格可销售参考产品
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_material_waste_mass`
- 来源：`eu-pef-2021-2279`、`jrc-sa-bref-2024`
- UUID 状态：未解析；在精确双核核验前保持为空。
- 适用性：仅在 Cooked beef meat paste in casing thermal reject 针对单一锁定产品配方和处理顺序实际跨越过程边界时记录；否则将该原子行标记为不适用。
- 不确定性：保留秤分辨率、校准状态、去皮方法、适用时的水分基准以及批次核对差异。

###### 移出熟制肠衣内猪肉酱热处理不合格物（`thermal_reject_pork_pate`）

Cooked pork pâté in casing thermal reject 在本过程中作为一项原子输出交换记录；其不得代替任何其他物料、载体、废物或排放。

- 选定流：Cooked pork pâté in casing thermal reject
- 流属性/单位：Mass / kg
- 数量规则：记录该交换针对锁定批次跨越本过程边界的前景实测数量。
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：产品特定（`product_specific`）
- 归一化基准：每 1 kg 厂门处净合格可销售参考产品
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_material_waste_mass`
- 来源：`eu-pef-2021-2279`、`jrc-sa-bref-2024`
- UUID 状态：未解析；在精确双核核验前保持为空。
- 适用性：仅在 Cooked pork pâté in casing thermal reject 针对单一锁定产品配方和处理顺序实际跨越过程边界时记录；否则将该原子行标记为不适用。
- 不确定性：保留秤分辨率、校准状态、去皮方法、适用时的水分基准以及批次核对差异。

###### 移出熟制肠衣内猪肉酥酱热处理不合格物（`thermal_reject_pork_rillettes`）

Cooked pork rillettes in casing thermal reject 在本过程中作为一项原子输出交换记录；其不得代替任何其他物料、载体、废物或排放。

- 选定流：Cooked pork rillettes in casing thermal reject
- 流属性/单位：Mass / kg
- 数量规则：记录该交换针对锁定批次跨越本过程边界的前景实测数量。
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：产品特定（`product_specific`）
- 归一化基准：每 1 kg 厂门处净合格可销售参考产品
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_material_waste_mass`
- 来源：`eu-pef-2021-2279`、`jrc-sa-bref-2024`
- UUID 状态：未解析；在精确双核核验前保持为空。
- 适用性：仅在 Cooked pork rillettes in casing thermal reject 针对单一锁定产品配方和处理顺序实际跨越过程边界时记录；否则将该原子行标记为不适用。
- 不确定性：保留秤分辨率、校准状态、去皮方法、适用时的水分基准以及批次核对差异。

###### 移出肉制品蒸煮冷凝废水（`thermal_cooking_condensate`）

Meat-cooking condensate wastewater 在本过程中作为一项原子输出交换记录；其不得代替任何其他物料、载体、废物或排放。

- 选定流：Meat-cooking condensate wastewater
- 流属性/单位：Volume / m3
- 数量规则：记录该交换针对锁定批次跨越本过程边界的前景实测数量。
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每 1 kg 厂门处净合格可销售参考产品
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_wastewater_volume`
- 来源：`eu-pef-2021-2279`、`jrc-sa-bref-2024`
- UUID 状态：未解析；在精确双核核验前保持为空。
- 适用性：仅在 Meat-cooking condensate wastewater 针对单一锁定产品配方和处理顺序实际跨越过程边界时记录；否则将该原子行标记为不适用。
- 不确定性：保留仪表分辨率、校准状态、采样间隔、适用时的密度换算以及时间覆盖。

##### 基本流

###### 排放氨（R717）向空气排放（`thermal_release_r717`）

Ammonia (R717) to air 在本过程中作为一项原子输出交换记录；其不得代替任何其他物料、载体、废物或排放。

- 选定流：Ammonia (R717) to air
- 流属性/单位：Mass / kg
- 数量规则：仅依据所链接协议定义的前景记录计算可归属于该批次的数量。
- 数值来源模式：计算值（`calculated_value`）
- 适用范围：技术特定（`technology_specific`）
- 归一化基准：每 1 kg 厂门处净合格可销售参考产品
- 基准类型：参考流（`reference_flow`）
- 证据类型：由采集计算（`calculated_from_collection`）
- 采集协议：`cp_refrigerant_reconciliation`
- 来源：`eu-pef-2021-2279`、`jrc-sa-bref-2024`、`codex-cxc-58-2005`
- UUID 状态：未解析；在精确双核核验前保持为空。
- 适用性：仅在 Ammonia (R717) to air 针对单一锁定产品配方和处理顺序实际跨越过程边界时记录；否则将该原子行标记为不适用。
- 不确定性：保留采样或质量平衡方法、检出限、时间代表性、换算记录和分析不确定性。

###### 排放二氧化碳（R744）向空气排放（`thermal_release_r744`）

Carbon dioxide (R744) to air 在本过程中作为一项原子输出交换记录；其不得代替任何其他物料、载体、废物或排放。

- 选定流：Carbon dioxide (R744) to air
- 流属性/单位：Mass / kg
- 数量规则：仅依据所链接协议定义的前景记录计算可归属于该批次的数量。
- 数值来源模式：计算值（`calculated_value`）
- 适用范围：技术特定（`technology_specific`）
- 归一化基准：每 1 kg 厂门处净合格可销售参考产品
- 基准类型：参考流（`reference_flow`）
- 证据类型：由采集计算（`calculated_from_collection`）
- 采集协议：`cp_refrigerant_reconciliation`
- 来源：`eu-pef-2021-2279`、`jrc-sa-bref-2024`、`codex-cxc-58-2005`
- UUID 状态：未解析；在精确双核核验前保持为空。
- 适用性：仅在 Carbon dioxide (R744) to air 针对单一锁定产品配方和处理顺序实际跨越过程边界时记录；否则将该原子行标记为不适用。
- 不确定性：保留采样或质量平衡方法、检出限、时间代表性、换算记录和分析不确定性。

###### 排放丙烷（R290）向空气排放（`thermal_release_r290`）

Propane (R290) to air 在本过程中作为一项原子输出交换记录；其不得代替任何其他物料、载体、废物或排放。

- 选定流：Propane (R290) to air
- 流属性/单位：Mass / kg
- 数量规则：仅依据所链接协议定义的前景记录计算可归属于该批次的数量。
- 数值来源模式：计算值（`calculated_value`）
- 适用范围：技术特定（`technology_specific`）
- 归一化基准：每 1 kg 厂门处净合格可销售参考产品
- 基准类型：参考流（`reference_flow`）
- 证据类型：由采集计算（`calculated_from_collection`）
- 采集协议：`cp_refrigerant_reconciliation`
- 来源：`eu-pef-2021-2279`、`jrc-sa-bref-2024`、`codex-cxc-58-2005`
- UUID 状态：未解析；在精确双核核验前保持为空。
- 适用性：仅在 Propane (R290) to air 针对单一锁定产品配方和处理顺序实际跨越过程边界时记录；否则将该原子行标记为不适用。
- 不确定性：保留采样或质量平衡方法、检出限、时间代表性、换算记录和分析不确定性。

###### 排放化石二氧化碳向空气排放（`thermal_release_co2`）

Fossil carbon dioxide to air 在本过程中作为一项原子输出交换记录；其不得代替任何其他物料、载体、废物或排放。

- 选定流：Fossil carbon dioxide to air
- 流属性/单位：Mass / kg
- 数量规则：记录该交换针对锁定批次跨越本过程边界的前景实测数量。
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：技术特定（`technology_specific`）
- 归一化基准：每 1 kg 厂门处净合格可销售参考产品
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_direct_emission_measurement`
- 来源：`eu-pef-2021-2279`、`jrc-sa-bref-2024`、`codex-cxc-58-2005`
- UUID 状态：未解析；在精确双核核验前保持为空。
- 适用性：仅在 Fossil carbon dioxide to air 针对单一锁定产品配方和处理顺序实际跨越过程边界时记录；否则将该原子行标记为不适用。
- 不确定性：保留采样或质量平衡方法、检出限、时间代表性、换算记录和分析不确定性。

###### 排放氮氧化物（NOx）向空气排放（`thermal_release_nox`）

Nitrogen oxides (NOx) to air 在本过程中作为一项原子输出交换记录；其不得代替任何其他物料、载体、废物或排放。

- 选定流：Nitrogen oxides (NOx) to air
- 流属性/单位：Mass / kg
- 数量规则：记录该交换针对锁定批次跨越本过程边界的前景实测数量。
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：技术特定（`technology_specific`）
- 归一化基准：每 1 kg 厂门处净合格可销售参考产品
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_direct_emission_measurement`
- 来源：`eu-pef-2021-2279`、`jrc-sa-bref-2024`、`codex-cxc-58-2005`
- UUID 状态：未解析；在精确双核核验前保持为空。
- 适用性：仅在 Nitrogen oxides (NOx) to air 针对单一锁定产品配方和处理顺序实际跨越过程边界时记录；否则将该原子行标记为不适用。
- 不确定性：保留采样或质量平衡方法、检出限、时间代表性、换算记录和分析不确定性。

###### 排放硫氧化物（SOx）向空气排放（`thermal_release_sox`）

Sulfur oxides (SOx) to air 在本过程中作为一项原子输出交换记录；其不得代替任何其他物料、载体、废物或排放。

- 选定流：Sulfur oxides (SOx) to air
- 流属性/单位：Mass / kg
- 数量规则：记录该交换针对锁定批次跨越本过程边界的前景实测数量。
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：技术特定（`technology_specific`）
- 归一化基准：每 1 kg 厂门处净合格可销售参考产品
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_direct_emission_measurement`
- 来源：`eu-pef-2021-2279`、`jrc-sa-bref-2024`、`codex-cxc-58-2005`
- UUID 状态：未解析；在精确双核核验前保持为空。
- 适用性：仅在 Sulfur oxides (SOx) to air 针对单一锁定产品配方和处理顺序实际跨越过程边界时记录；否则将该原子行标记为不适用。
- 不确定性：保留采样或质量平衡方法、检出限、时间代表性、换算记录和分析不确定性。

###### 排放粒径不大于2.5微米颗粒物向空气排放（`thermal_release_pm25`）

Particulate matter, ≤2.5 µm, to air 在本过程中作为一项原子输出交换记录；其不得代替任何其他物料、载体、废物或排放。

- 选定流：Particulate matter, ≤2.5 µm, to air
- 流属性/单位：Mass / kg
- 数量规则：记录该交换针对锁定批次跨越本过程边界的前景实测数量。
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：技术特定（`technology_specific`）
- 归一化基准：每 1 kg 厂门处净合格可销售参考产品
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_direct_emission_measurement`
- 来源：`eu-pef-2021-2279`、`jrc-sa-bref-2024`、`codex-cxc-58-2005`
- UUID 状态：未解析；在精确双核核验前保持为空。
- 适用性：仅在 Particulate matter, ≤2.5 µm, to air 针对单一锁定产品配方和处理顺序实际跨越过程边界时记录；否则将该原子行标记为不适用。
- 不确定性：保留采样或质量平衡方法、检出限、时间代表性、换算记录和分析不确定性。

###### 排放一氧化碳向空气排放（`thermal_release_co`）

Carbon monoxide to air 在本过程中作为一项原子输出交换记录；其不得代替任何其他物料、载体、废物或排放。

- 选定流：Carbon monoxide to air
- 流属性/单位：Mass / kg
- 数量规则：记录该交换针对锁定批次跨越本过程边界的前景实测数量。
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：技术特定（`technology_specific`）
- 归一化基准：每 1 kg 厂门处净合格可销售参考产品
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_direct_emission_measurement`
- 来源：`eu-pef-2021-2279`、`jrc-sa-bref-2024`、`codex-cxc-58-2005`
- UUID 状态：未解析；在精确双核核验前保持为空。
- 适用性：仅在 Carbon monoxide to air 针对单一锁定产品配方和处理顺序实际跨越过程边界时记录；否则将该原子行标记为不适用。
- 不确定性：保留采样或质量平衡方法、检出限、时间代表性、换算记录和分析不确定性。

### 过程：包装、冷藏与放行（`packaging_cold_storage_release`）

前景初级与次级包装、最终温度控制、检验和厂门放行。始终纳入实际包装系统、最终储存状态和一个具体合格产品输出。

#### 输入

##### 产品流

###### 将生猪肉鲜香肠段送入包装（`packaging_input_raw_pork`）

Raw pork fresh sausage links 在本过程中作为一项原子输入交换记录；其不得代替任何其他物料、载体、废物或排放。

- 选定流：Raw pork fresh sausage links
- 流属性/单位：Mass / kg
- 数量规则：记录该交换针对锁定批次跨越本过程边界的前景实测数量。
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：产品特定（`product_specific`）
- 归一化基准：每 1 kg 厂门处净合格可销售参考产品
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_intermediate_product_mass`
- 来源：`eu-pef-2021-2279`、`codex-cxs-192-1995`、`codex-cxc-58-2005`
- UUID 状态：未解析；在精确双核核验前保持为空。
- 适用性：仅在 Raw pork fresh sausage links 针对单一锁定产品配方和处理顺序实际跨越过程边界时记录；否则将该原子行标记为不适用。
- 不确定性：保留秤分辨率、校准状态、去皮方法、适用时的水分基准以及批次核对差异。

###### 将熟制猪肉香肠段送入包装（`packaging_input_cooked_pork`）

Cooked pork sausage links 在本过程中作为一项原子输入交换记录；其不得代替任何其他物料、载体、废物或排放。

- 选定流：Cooked pork sausage links
- 流属性/单位：Mass / kg
- 数量规则：记录该交换针对锁定批次跨越本过程边界的前景实测数量。
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：产品特定（`product_specific`）
- 归一化基准：每 1 kg 厂门处净合格可销售参考产品
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_intermediate_product_mass`
- 来源：`eu-pef-2021-2279`、`codex-cxs-192-1995`、`codex-cxc-58-2005`
- UUID 状态：未解析；在精确双核核验前保持为空。
- 适用性：仅在 Cooked pork sausage links 针对单一锁定产品配方和处理顺序实际跨越过程边界时记录；否则将该原子行标记为不适用。
- 不确定性：保留秤分辨率、校准状态、去皮方法、适用时的水分基准以及批次核对差异。

###### 将熟制牛肉香肠段送入包装（`packaging_input_cooked_beef`）

Cooked beef sausage links 在本过程中作为一项原子输入交换记录；其不得代替任何其他物料、载体、废物或排放。

- 选定流：Cooked beef sausage links
- 流属性/单位：Mass / kg
- 数量规则：记录该交换针对锁定批次跨越本过程边界的前景实测数量。
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：产品特定（`product_specific`）
- 归一化基准：每 1 kg 厂门处净合格可销售参考产品
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_intermediate_product_mass`
- 来源：`eu-pef-2021-2279`、`codex-cxs-192-1995`、`codex-cxc-58-2005`
- UUID 状态：未解析；在精确双核核验前保持为空。
- 适用性：仅在 Cooked beef sausage links 针对单一锁定产品配方和处理顺序实际跨越过程边界时记录；否则将该原子行标记为不适用。
- 不确定性：保留秤分辨率、校准状态、去皮方法、适用时的水分基准以及批次核对差异。

###### 将发酵干燥猪肉香肠送入包装（`packaging_input_dried_pork`）

Fermented dried pork sausage 在本过程中作为一项原子输入交换记录；其不得代替任何其他物料、载体、废物或排放。

- 选定流：Fermented dried pork sausage
- 流属性/单位：Mass / kg
- 数量规则：记录该交换针对锁定批次跨越本过程边界的前景实测数量。
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：产品特定（`product_specific`）
- 归一化基准：每 1 kg 厂门处净合格可销售参考产品
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_intermediate_product_mass`
- 来源：`eu-pef-2021-2279`、`codex-cxs-192-1995`、`codex-cxc-58-2005`
- UUID 状态：未解析；在精确双核核验前保持为空。
- 适用性：仅在 Fermented dried pork sausage 针对单一锁定产品配方和处理顺序实际跨越过程边界时记录；否则将该原子行标记为不适用。
- 不确定性：保留秤分辨率、校准状态、去皮方法、适用时的水分基准以及批次核对差异。

###### 将烟熏猪肉香肠段送入包装（`packaging_input_smoked_pork`）

Smoked pork sausage links 在本过程中作为一项原子输入交换记录；其不得代替任何其他物料、载体、废物或排放。

- 选定流：Smoked pork sausage links
- 流属性/单位：Mass / kg
- 数量规则：记录该交换针对锁定批次跨越本过程边界的前景实测数量。
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：产品特定（`product_specific`）
- 归一化基准：每 1 kg 厂门处净合格可销售参考产品
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_intermediate_product_mass`
- 来源：`eu-pef-2021-2279`、`codex-cxs-192-1995`、`codex-cxc-58-2005`
- UUID 状态：未解析；在精确双核核验前保持为空。
- 适用性：仅在 Smoked pork sausage links 针对单一锁定产品配方和处理顺序实际跨越过程边界时记录；否则将该原子行标记为不适用。
- 不确定性：保留秤分辨率、校准状态、去皮方法、适用时的水分基准以及批次核对差异。

###### 将烟熏牛肉香肠段送入包装（`packaging_input_smoked_beef`）

Smoked beef sausage links 在本过程中作为一项原子输入交换记录；其不得代替任何其他物料、载体、废物或排放。

- 选定流：Smoked beef sausage links
- 流属性/单位：Mass / kg
- 数量规则：记录该交换针对锁定批次跨越本过程边界的前景实测数量。
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：产品特定（`product_specific`）
- 归一化基准：每 1 kg 厂门处净合格可销售参考产品
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_intermediate_product_mass`
- 来源：`eu-pef-2021-2279`、`codex-cxs-192-1995`、`codex-cxc-58-2005`
- UUID 状态：未解析；在精确双核核验前保持为空。
- 适用性：仅在 Smoked beef sausage links 针对单一锁定产品配方和处理顺序实际跨越过程边界时记录；否则将该原子行标记为不适用。
- 不确定性：保留秤分辨率、校准状态、去皮方法、适用时的水分基准以及批次核对差异。

###### 将熟制猪血布丁送入包装（`packaging_input_pig_blood`）

Cooked pig blood pudding 在本过程中作为一项原子输入交换记录；其不得代替任何其他物料、载体、废物或排放。

- 选定流：Cooked pig blood pudding
- 流属性/单位：Mass / kg
- 数量规则：记录该交换针对锁定批次跨越本过程边界的前景实测数量。
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：产品特定（`product_specific`）
- 归一化基准：每 1 kg 厂门处净合格可销售参考产品
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_intermediate_product_mass`
- 来源：`eu-pef-2021-2279`、`codex-cxs-192-1995`、`codex-cxc-58-2005`
- UUID 状态：未解析；在精确双核核验前保持为空。
- 适用性：仅在 Cooked pig blood pudding 针对单一锁定产品配方和处理顺序实际跨越过程边界时记录；否则将该原子行标记为不适用。
- 不确定性：保留秤分辨率、校准状态、去皮方法、适用时的水分基准以及批次核对差异。

###### 将熟制牛血布丁送入包装（`packaging_input_cattle_blood`）

Cooked cattle blood pudding 在本过程中作为一项原子输入交换记录；其不得代替任何其他物料、载体、废物或排放。

- 选定流：Cooked cattle blood pudding
- 流属性/单位：Mass / kg
- 数量规则：记录该交换针对锁定批次跨越本过程边界的前景实测数量。
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：产品特定（`product_specific`）
- 归一化基准：每 1 kg 厂门处净合格可销售参考产品
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_intermediate_product_mass`
- 来源：`eu-pef-2021-2279`、`codex-cxs-192-1995`、`codex-cxc-58-2005`
- UUID 状态：未解析；在精确双核核验前保持为空。
- 适用性：仅在 Cooked cattle blood pudding 针对单一锁定产品配方和处理顺序实际跨越过程边界时记录；否则将该原子行标记为不适用。
- 不确定性：保留秤分辨率、校准状态、去皮方法、适用时的水分基准以及批次核对差异。

###### 将熟制猪肝香肠送入包装（`packaging_input_pork_liver`）

Cooked pork liver sausage 在本过程中作为一项原子输入交换记录；其不得代替任何其他物料、载体、废物或排放。

- 选定流：Cooked pork liver sausage
- 流属性/单位：Mass / kg
- 数量规则：记录该交换针对锁定批次跨越本过程边界的前景实测数量。
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：产品特定（`product_specific`）
- 归一化基准：每 1 kg 厂门处净合格可销售参考产品
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_intermediate_product_mass`
- 来源：`eu-pef-2021-2279`、`codex-cxs-192-1995`、`codex-cxc-58-2005`
- UUID 状态：未解析；在精确双核核验前保持为空。
- 适用性：仅在 Cooked pork liver sausage 针对单一锁定产品配方和处理顺序实际跨越过程边界时记录；否则将该原子行标记为不适用。
- 不确定性：保留秤分辨率、校准状态、去皮方法、适用时的水分基准以及批次核对差异。

###### 将熟制牛心香肠送入包装（`packaging_input_beef_heart`）

Cooked beef heart sausage 在本过程中作为一项原子输入交换记录；其不得代替任何其他物料、载体、废物或排放。

- 选定流：Cooked beef heart sausage
- 流属性/单位：Mass / kg
- 数量规则：记录该交换针对锁定批次跨越本过程边界的前景实测数量。
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：产品特定（`product_specific`）
- 归一化基准：每 1 kg 厂门处净合格可销售参考产品
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_intermediate_product_mass`
- 来源：`eu-pef-2021-2279`、`codex-cxs-192-1995`、`codex-cxc-58-2005`
- UUID 状态：未解析；在精确双核核验前保持为空。
- 适用性：仅在 Cooked beef heart sausage 针对单一锁定产品配方和处理顺序实际跨越过程边界时记录；否则将该原子行标记为不适用。
- 不确定性：保留秤分辨率、校准状态、去皮方法、适用时的水分基准以及批次核对差异。

###### 将熟制猪肾香肠送入包装（`packaging_input_pork_kidney`）

Cooked pork kidney sausage 在本过程中作为一项原子输入交换记录；其不得代替任何其他物料、载体、废物或排放。

- 选定流：Cooked pork kidney sausage
- 流属性/单位：Mass / kg
- 数量规则：记录该交换针对锁定批次跨越本过程边界的前景实测数量。
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：产品特定（`product_specific`）
- 归一化基准：每 1 kg 厂门处净合格可销售参考产品
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_intermediate_product_mass`
- 来源：`eu-pef-2021-2279`、`codex-cxs-192-1995`、`codex-cxc-58-2005`
- UUID 状态：未解析；在精确双核核验前保持为空。
- 适用性：仅在 Cooked pork kidney sausage 针对单一锁定产品配方和处理顺序实际跨越过程边界时记录；否则将该原子行标记为不适用。
- 不确定性：保留秤分辨率、校准状态、去皮方法、适用时的水分基准以及批次核对差异。

###### 将熟制肠衣内鸡肉加朗汀送入包装（`packaging_input_chicken_galantine`）

Cooked chicken galantine in casing 在本过程中作为一项原子输入交换记录；其不得代替任何其他物料、载体、废物或排放。

- 选定流：Cooked chicken galantine in casing
- 流属性/单位：Mass / kg
- 数量规则：记录该交换针对锁定批次跨越本过程边界的前景实测数量。
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：产品特定（`product_specific`）
- 归一化基准：每 1 kg 厂门处净合格可销售参考产品
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_intermediate_product_mass`
- 来源：`eu-pef-2021-2279`、`codex-cxs-192-1995`、`codex-cxc-58-2005`
- UUID 状态：未解析；在精确双核核验前保持为空。
- 适用性：仅在 Cooked chicken galantine in casing 针对单一锁定产品配方和处理顺序实际跨越过程边界时记录；否则将该原子行标记为不适用。
- 不确定性：保留秤分辨率、校准状态、去皮方法、适用时的水分基准以及批次核对差异。

###### 将熟制肠衣内牛肉酱送入包装（`packaging_input_beef_meat_paste`）

Cooked beef meat paste in casing 在本过程中作为一项原子输入交换记录；其不得代替任何其他物料、载体、废物或排放。

- 选定流：Cooked beef meat paste in casing
- 流属性/单位：Mass / kg
- 数量规则：记录该交换针对锁定批次跨越本过程边界的前景实测数量。
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：产品特定（`product_specific`）
- 归一化基准：每 1 kg 厂门处净合格可销售参考产品
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_intermediate_product_mass`
- 来源：`eu-pef-2021-2279`、`codex-cxs-192-1995`、`codex-cxc-58-2005`
- UUID 状态：未解析；在精确双核核验前保持为空。
- 适用性：仅在 Cooked beef meat paste in casing 针对单一锁定产品配方和处理顺序实际跨越过程边界时记录；否则将该原子行标记为不适用。
- 不确定性：保留秤分辨率、校准状态、去皮方法、适用时的水分基准以及批次核对差异。

###### 将熟制肠衣内猪肉酱送入包装（`packaging_input_pork_pate`）

Cooked pork pâté in casing 在本过程中作为一项原子输入交换记录；其不得代替任何其他物料、载体、废物或排放。

- 选定流：Cooked pork pâté in casing
- 流属性/单位：Mass / kg
- 数量规则：记录该交换针对锁定批次跨越本过程边界的前景实测数量。
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：产品特定（`product_specific`）
- 归一化基准：每 1 kg 厂门处净合格可销售参考产品
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_intermediate_product_mass`
- 来源：`eu-pef-2021-2279`、`codex-cxs-192-1995`、`codex-cxc-58-2005`
- UUID 状态：未解析；在精确双核核验前保持为空。
- 适用性：仅在 Cooked pork pâté in casing 针对单一锁定产品配方和处理顺序实际跨越过程边界时记录；否则将该原子行标记为不适用。
- 不确定性：保留秤分辨率、校准状态、去皮方法、适用时的水分基准以及批次核对差异。

###### 将熟制肠衣内猪肉酥酱送入包装（`packaging_input_pork_rillettes`）

Cooked pork rillettes in casing 在本过程中作为一项原子输入交换记录；其不得代替任何其他物料、载体、废物或排放。

- 选定流：Cooked pork rillettes in casing
- 流属性/单位：Mass / kg
- 数量规则：记录该交换针对锁定批次跨越本过程边界的前景实测数量。
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：产品特定（`product_specific`）
- 归一化基准：每 1 kg 厂门处净合格可销售参考产品
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_intermediate_product_mass`
- 来源：`eu-pef-2021-2279`、`codex-cxs-192-1995`、`codex-cxc-58-2005`
- UUID 状态：未解析；在精确双核核验前保持为空。
- 适用性：仅在 Cooked pork rillettes in casing 针对单一锁定产品配方和处理顺序实际跨越过程边界时记录；否则将该原子行标记为不适用。
- 不确定性：保留秤分辨率、校准状态、去皮方法、适用时的水分基准以及批次核对差异。

###### 使用低密度聚乙烯薄膜（`packaging_material_ldpe_film`）

Low-density polyethylene film 在本过程中作为一项原子输入交换记录；其不得代替任何其他物料、载体、废物或排放。

- 选定流：Low-density polyethylene film
- 流属性/单位：Mass / kg
- 数量规则：记录该交换针对锁定批次跨越本过程边界的前景实测数量。
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：产品特定（`product_specific`）
- 归一化基准：每 1 kg 厂门处净合格可销售参考产品
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_packaging_material_mass`
- 来源：`eu-pef-2021-2279`
- UUID 状态：未解析；在精确双核核验前保持为空。
- 适用性：仅在 Low-density polyethylene film 针对单一锁定产品配方和处理顺序实际跨越过程边界时记录；否则将该原子行标记为不适用。
- 不确定性：保留秤分辨率、校准状态、去皮方法、适用时的水分基准以及批次核对差异。

###### 使用聚酰胺薄膜（`packaging_material_polyamide_film`）

Polyamide film 在本过程中作为一项原子输入交换记录；其不得代替任何其他物料、载体、废物或排放。

- 选定流：Polyamide film
- 流属性/单位：Mass / kg
- 数量规则：记录该交换针对锁定批次跨越本过程边界的前景实测数量。
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：产品特定（`product_specific`）
- 归一化基准：每 1 kg 厂门处净合格可销售参考产品
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_packaging_material_mass`
- 来源：`eu-pef-2021-2279`
- UUID 状态：未解析；在精确双核核验前保持为空。
- 适用性：仅在 Polyamide film 针对单一锁定产品配方和处理顺序实际跨越过程边界时记录；否则将该原子行标记为不适用。
- 不确定性：保留秤分辨率、校准状态、去皮方法、适用时的水分基准以及批次核对差异。

###### 使用聚丙烯托盘（`packaging_material_pp_tray`）

Polypropylene tray 在本过程中作为一项原子输入交换记录；其不得代替任何其他物料、载体、废物或排放。

- 选定流：Polypropylene tray
- 流属性/单位：Mass / kg
- 数量规则：记录该交换针对锁定批次跨越本过程边界的前景实测数量。
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：产品特定（`product_specific`）
- 归一化基准：每 1 kg 厂门处净合格可销售参考产品
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_packaging_material_mass`
- 来源：`eu-pef-2021-2279`
- UUID 状态：未解析；在精确双核核验前保持为空。
- 适用性：仅在 Polypropylene tray 针对单一锁定产品配方和处理顺序实际跨越过程边界时记录；否则将该原子行标记为不适用。
- 不确定性：保留秤分辨率、校准状态、去皮方法、适用时的水分基准以及批次核对差异。

###### 使用聚对苯二甲酸乙二醇酯托盘（`packaging_material_pet_tray`）

Polyethylene terephthalate tray 在本过程中作为一项原子输入交换记录；其不得代替任何其他物料、载体、废物或排放。

- 选定流：Polyethylene terephthalate tray
- 流属性/单位：Mass / kg
- 数量规则：记录该交换针对锁定批次跨越本过程边界的前景实测数量。
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：产品特定（`product_specific`）
- 归一化基准：每 1 kg 厂门处净合格可销售参考产品
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_packaging_material_mass`
- 来源：`eu-pef-2021-2279`
- UUID 状态：未解析；在精确双核核验前保持为空。
- 适用性：仅在 Polyethylene terephthalate tray 针对单一锁定产品配方和处理顺序实际跨越过程边界时记录；否则将该原子行标记为不适用。
- 不确定性：保留秤分辨率、校准状态、去皮方法、适用时的水分基准以及批次核对差异。

###### 使用瓦楞纤维板纸箱（`packaging_material_fibreboard`）

Corrugated fibreboard carton 在本过程中作为一项原子输入交换记录；其不得代替任何其他物料、载体、废物或排放。

- 选定流：Corrugated fibreboard carton
- 流属性/单位：Mass / kg
- 数量规则：记录该交换针对锁定批次跨越本过程边界的前景实测数量。
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：产品特定（`product_specific`）
- 归一化基准：每 1 kg 厂门处净合格可销售参考产品
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_packaging_material_mass`
- 来源：`eu-pef-2021-2279`
- UUID 状态：未解析；在精确双核核验前保持为空。
- 适用性：仅在 Corrugated fibreboard carton 针对单一锁定产品配方和处理顺序实际跨越过程边界时记录；否则将该原子行标记为不适用。
- 不确定性：保留秤分辨率、校准状态、去皮方法、适用时的水分基准以及批次核对差异。

###### 使用镀锡钢罐（`packaging_material_tinplate`）

Tinplate steel can 在本过程中作为一项原子输入交换记录；其不得代替任何其他物料、载体、废物或排放。

- 选定流：Tinplate steel can
- 流属性/单位：Mass / kg
- 数量规则：记录该交换针对锁定批次跨越本过程边界的前景实测数量。
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：产品特定（`product_specific`）
- 归一化基准：每 1 kg 厂门处净合格可销售参考产品
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_packaging_material_mass`
- 来源：`eu-pef-2021-2279`
- UUID 状态：未解析；在精确双核核验前保持为空。
- 适用性：仅在 Tinplate steel can 针对单一锁定产品配方和处理顺序实际跨越过程边界时记录；否则将该原子行标记为不适用。
- 不确定性：保留秤分辨率、校准状态、去皮方法、适用时的水分基准以及批次核对差异。

###### 使用铝箔袋（`packaging_material_aluminium_pouch`）

Aluminium foil pouch 在本过程中作为一项原子输入交换记录；其不得代替任何其他物料、载体、废物或排放。

- 选定流：Aluminium foil pouch
- 流属性/单位：Mass / kg
- 数量规则：记录该交换针对锁定批次跨越本过程边界的前景实测数量。
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：产品特定（`product_specific`）
- 归一化基准：每 1 kg 厂门处净合格可销售参考产品
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_packaging_material_mass`
- 来源：`eu-pef-2021-2279`
- UUID 状态：未解析；在精确双核核验前保持为空。
- 适用性：仅在 Aluminium foil pouch 针对单一锁定产品配方和处理顺序实际跨越过程边界时记录；否则将该原子行标记为不适用。
- 不确定性：保留秤分辨率、校准状态、去皮方法、适用时的水分基准以及批次核对差异。

###### 使用纸标签（`packaging_material_paper_label`）

Paper label 在本过程中作为一项原子输入交换记录；其不得代替任何其他物料、载体、废物或排放。

- 选定流：Paper label
- 流属性/单位：Mass / kg
- 数量规则：记录该交换针对锁定批次跨越本过程边界的前景实测数量。
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：产品特定（`product_specific`）
- 归一化基准：每 1 kg 厂门处净合格可销售参考产品
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_packaging_material_mass`
- 来源：`eu-pef-2021-2279`
- UUID 状态：未解析；在精确双核核验前保持为空。
- 适用性：仅在 Paper label 针对单一锁定产品配方和处理顺序实际跨越过程边界时记录；否则将该原子行标记为不适用。
- 不确定性：保留秤分辨率、校准状态、去皮方法、适用时的水分基准以及批次核对差异。

###### 使用木托盘（`packaging_material_wood_pallet`）

Wooden pallet 在本过程中作为一项原子输入交换记录；其不得代替任何其他物料、载体、废物或排放。

- 选定流：Wooden pallet
- 流属性/单位：Mass / kg
- 数量规则：记录该交换针对锁定批次跨越本过程边界的前景实测数量。
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：产品特定（`product_specific`）
- 归一化基准：每 1 kg 厂门处净合格可销售参考产品
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_packaging_material_mass`
- 来源：`eu-pef-2021-2279`
- UUID 状态：未解析；在精确双核核验前保持为空。
- 适用性：仅在 Wooden pallet 针对单一锁定产品配方和处理顺序实际跨越过程边界时记录；否则将该原子行标记为不适用。
- 不确定性：保留秤分辨率、校准状态、去皮方法、适用时的水分基准以及批次核对差异。

###### 计量包装用电（`packaging_packaging_electricity`）

Grid electricity, medium voltage 在本过程中作为一项原子输入交换记录；其不得代替任何其他物料、载体、废物或排放。

- 选定流：Grid electricity, medium voltage
- 流属性/单位：Energy / kWh
- 数量规则：记录该交换针对锁定批次跨越本过程边界的前景实测数量。
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每 1 kg 厂门处净合格可销售参考产品
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_stage_electricity`
- 来源：`eu-pef-2021-2279`、`jrc-sa-bref-2024`
- UUID 状态：未解析；在精确双核核验前保持为空。
- 适用性：仅在 Grid electricity, medium voltage 针对单一锁定产品配方和处理顺序实际跨越过程边界时记录；否则将该原子行标记为不适用。
- 不确定性：保留仪表分辨率、校准状态、计量覆盖、时间区间以及任何批次归属计算。

###### 计量最终冷藏用电（`packaging_cold_store_electricity`）

Grid electricity, medium voltage 在本过程中作为一项原子输入交换记录；其不得代替任何其他物料、载体、废物或排放。

- 选定流：Grid electricity, medium voltage
- 流属性/单位：Energy / kWh
- 数量规则：记录该交换针对锁定批次跨越本过程边界的前景实测数量。
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每 1 kg 厂门处净合格可销售参考产品
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_stage_electricity`
- 来源：`eu-pef-2021-2279`、`jrc-sa-bref-2024`
- UUID 状态：未解析；在精确双核核验前保持为空。
- 适用性：仅在 Grid electricity, medium voltage 针对单一锁定产品配方和处理顺序实际跨越过程边界时记录；否则将该原子行标记为不适用。
- 不确定性：保留仪表分辨率、校准状态、计量覆盖、时间区间以及任何批次归属计算。

###### 记录氨（R717）制冷剂补充（`packaging_r717`）

Ammonia (R717) refrigerant makeup 在本过程中作为一项原子输入交换记录；其不得代替任何其他物料、载体、废物或排放。

- 选定流：Ammonia (R717) refrigerant makeup
- 流属性/单位：Mass / kg
- 数量规则：记录该交换针对锁定批次跨越本过程边界的前景实测数量。
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：技术特定（`technology_specific`）
- 归一化基准：每 1 kg 厂门处净合格可销售参考产品
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_refrigerant_reconciliation`
- 来源：`eu-pef-2021-2279`、`jrc-sa-bref-2024`
- UUID 状态：未解析；在精确双核核验前保持为空。
- 适用性：仅在 Ammonia (R717) refrigerant makeup 针对单一锁定产品配方和处理顺序实际跨越过程边界时记录；否则将该原子行标记为不适用。
- 不确定性：保留秤分辨率、校准状态、去皮方法、适用时的水分基准以及批次核对差异。

###### 记录二氧化碳（R744）制冷剂补充（`packaging_r744`）

Carbon dioxide (R744) refrigerant makeup 在本过程中作为一项原子输入交换记录；其不得代替任何其他物料、载体、废物或排放。

- 选定流：Carbon dioxide (R744) refrigerant makeup
- 流属性/单位：Mass / kg
- 数量规则：记录该交换针对锁定批次跨越本过程边界的前景实测数量。
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：技术特定（`technology_specific`）
- 归一化基准：每 1 kg 厂门处净合格可销售参考产品
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_refrigerant_reconciliation`
- 来源：`eu-pef-2021-2279`、`jrc-sa-bref-2024`
- UUID 状态：未解析；在精确双核核验前保持为空。
- 适用性：仅在 Carbon dioxide (R744) refrigerant makeup 针对单一锁定产品配方和处理顺序实际跨越过程边界时记录；否则将该原子行标记为不适用。
- 不确定性：保留秤分辨率、校准状态、去皮方法、适用时的水分基准以及批次核对差异。

###### 记录丙烷（R290）制冷剂补充（`packaging_r290`）

Propane (R290) refrigerant makeup 在本过程中作为一项原子输入交换记录；其不得代替任何其他物料、载体、废物或排放。

- 选定流：Propane (R290) refrigerant makeup
- 流属性/单位：Mass / kg
- 数量规则：记录该交换针对锁定批次跨越本过程边界的前景实测数量。
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：技术特定（`technology_specific`）
- 归一化基准：每 1 kg 厂门处净合格可销售参考产品
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_refrigerant_reconciliation`
- 来源：`eu-pef-2021-2279`、`jrc-sa-bref-2024`
- UUID 状态：未解析；在精确双核核验前保持为空。
- 适用性：仅在 Propane (R290) refrigerant makeup 针对单一锁定产品配方和处理顺序实际跨越过程边界时记录；否则将该原子行标记为不适用。
- 不确定性：保留秤分辨率、校准状态、去皮方法、适用时的水分基准以及批次核对差异。

##### 废物流

##### 基本流

#### 输出

##### 产品流

###### 放行冷藏猪肉鲜香肠（`final_product_pork_fresh_chilled`）

Pork fresh sausage, chilled 在本过程中作为一项原子输出交换记录；其不得代替任何其他物料、载体、废物或排放。

- 选定流：Pork fresh sausage, chilled
- 流属性/单位：Mass / kg
- 数量规则：记录该交换针对锁定批次跨越本过程边界的前景实测数量。
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：产品特定（`product_specific`）
- 归一化基准：每 1 kg 厂门处净合格可销售参考产品
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_final_product_mass`
- 来源：`un-cpc-3-2025`、`eu-pef-2021-2279`、`codex-cxs-192-1995`
- UUID 状态：未解析；在精确双核核验前保持为空。
- 适用性：这是一个具体的 CPC 21184 输出路线。仅当锁定的产品形态、已命名动物源配方、处理顺序和最终市场状态与 Pork fresh sausage, chilled 完全一致时使用；否则使用另一张具体原子输出行。
- 不确定性：保留秤分辨率、校准状态、去皮方法、适用时的水分基准以及批次核对差异。

###### 放行冷冻猪肉鲜香肠（`final_product_pork_fresh_frozen`）

Pork fresh sausage, frozen 在本过程中作为一项原子输出交换记录；其不得代替任何其他物料、载体、废物或排放。

- 选定流：Pork fresh sausage, frozen
- 流属性/单位：Mass / kg
- 数量规则：记录该交换针对锁定批次跨越本过程边界的前景实测数量。
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：产品特定（`product_specific`）
- 归一化基准：每 1 kg 厂门处净合格可销售参考产品
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_final_product_mass`
- 来源：`un-cpc-3-2025`、`eu-pef-2021-2279`、`codex-cxs-192-1995`
- UUID 状态：未解析；在精确双核核验前保持为空。
- 适用性：这是一个具体的 CPC 21184 输出路线。仅当锁定的产品形态、已命名动物源配方、处理顺序和最终市场状态与 Pork fresh sausage, frozen 完全一致时使用；否则使用另一张具体原子输出行。
- 不确定性：保留秤分辨率、校准状态、去皮方法、适用时的水分基准以及批次核对差异。

###### 放行冷藏熟制猪肉香肠（`final_product_pork_cooked_chilled`）

Pork cooked sausage, chilled 在本过程中作为一项原子输出交换记录；其不得代替任何其他物料、载体、废物或排放。

- 选定流：Pork cooked sausage, chilled
- 流属性/单位：Mass / kg
- 数量规则：记录该交换针对锁定批次跨越本过程边界的前景实测数量。
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：产品特定（`product_specific`）
- 归一化基准：每 1 kg 厂门处净合格可销售参考产品
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_final_product_mass`
- 来源：`un-cpc-3-2025`、`eu-pef-2021-2279`、`codex-cxs-192-1995`
- UUID 状态：未解析；在精确双核核验前保持为空。
- 适用性：这是一个具体的 CPC 21184 输出路线。仅当锁定的产品形态、已命名动物源配方、处理顺序和最终市场状态与 Pork cooked sausage, chilled 完全一致时使用；否则使用另一张具体原子输出行。
- 不确定性：保留秤分辨率、校准状态、去皮方法、适用时的水分基准以及批次核对差异。

###### 放行冷冻熟制猪肉香肠（`final_product_pork_cooked_frozen`）

Pork cooked sausage, frozen 在本过程中作为一项原子输出交换记录；其不得代替任何其他物料、载体、废物或排放。

- 选定流：Pork cooked sausage, frozen
- 流属性/单位：Mass / kg
- 数量规则：记录该交换针对锁定批次跨越本过程边界的前景实测数量。
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：产品特定（`product_specific`）
- 归一化基准：每 1 kg 厂门处净合格可销售参考产品
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_final_product_mass`
- 来源：`un-cpc-3-2025`、`eu-pef-2021-2279`、`codex-cxs-192-1995`
- UUID 状态：未解析；在精确双核核验前保持为空。
- 适用性：这是一个具体的 CPC 21184 输出路线。仅当锁定的产品形态、已命名动物源配方、处理顺序和最终市场状态与 Pork cooked sausage, frozen 完全一致时使用；否则使用另一张具体原子输出行。
- 不确定性：保留秤分辨率、校准状态、去皮方法、适用时的水分基准以及批次核对差异。

###### 放行冷藏熟制牛肉香肠（`final_product_beef_cooked_chilled`）

Beef cooked sausage, chilled 在本过程中作为一项原子输出交换记录；其不得代替任何其他物料、载体、废物或排放。

- 选定流：Beef cooked sausage, chilled
- 流属性/单位：Mass / kg
- 数量规则：记录该交换针对锁定批次跨越本过程边界的前景实测数量。
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：产品特定（`product_specific`）
- 归一化基准：每 1 kg 厂门处净合格可销售参考产品
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_final_product_mass`
- 来源：`un-cpc-3-2025`、`eu-pef-2021-2279`、`codex-cxs-192-1995`
- UUID 状态：未解析；在精确双核核验前保持为空。
- 适用性：这是一个具体的 CPC 21184 输出路线。仅当锁定的产品形态、已命名动物源配方、处理顺序和最终市场状态与 Beef cooked sausage, chilled 完全一致时使用；否则使用另一张具体原子输出行。
- 不确定性：保留秤分辨率、校准状态、去皮方法、适用时的水分基准以及批次核对差异。

###### 放行冷冻熟制牛肉香肠（`final_product_beef_cooked_frozen`）

Beef cooked sausage, frozen 在本过程中作为一项原子输出交换记录；其不得代替任何其他物料、载体、废物或排放。

- 选定流：Beef cooked sausage, frozen
- 流属性/单位：Mass / kg
- 数量规则：记录该交换针对锁定批次跨越本过程边界的前景实测数量。
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：产品特定（`product_specific`）
- 归一化基准：每 1 kg 厂门处净合格可销售参考产品
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_final_product_mass`
- 来源：`un-cpc-3-2025`、`eu-pef-2021-2279`、`codex-cxs-192-1995`
- UUID 状态：未解析；在精确双核核验前保持为空。
- 适用性：这是一个具体的 CPC 21184 输出路线。仅当锁定的产品形态、已命名动物源配方、处理顺序和最终市场状态与 Beef cooked sausage, frozen 完全一致时使用；否则使用另一张具体原子输出行。
- 不确定性：保留秤分辨率、校准状态、去皮方法、适用时的水分基准以及批次核对差异。

###### 放行货架稳定型猪肉发酵干香肠（`final_product_pork_fermented_dry`）

Pork fermented dried sausage, shelf-stable 在本过程中作为一项原子输出交换记录；其不得代替任何其他物料、载体、废物或排放。

- 选定流：Pork fermented dried sausage, shelf-stable
- 流属性/单位：Mass / kg
- 数量规则：记录该交换针对锁定批次跨越本过程边界的前景实测数量。
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：产品特定（`product_specific`）
- 归一化基准：每 1 kg 厂门处净合格可销售参考产品
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_final_product_mass`
- 来源：`un-cpc-3-2025`、`eu-pef-2021-2279`、`codex-cxs-192-1995`
- UUID 状态：未解析；在精确双核核验前保持为空。
- 适用性：这是一个具体的 CPC 21184 输出路线。仅当锁定的产品形态、已命名动物源配方、处理顺序和最终市场状态与 Pork fermented dried sausage, shelf-stable 完全一致时使用；否则使用另一张具体原子输出行。
- 不确定性：保留秤分辨率、校准状态、去皮方法、适用时的水分基准以及批次核对差异。

###### 放行冷藏烟熏猪肉香肠（`final_product_pork_smoked_chilled`）

Pork smoked sausage, chilled 在本过程中作为一项原子输出交换记录；其不得代替任何其他物料、载体、废物或排放。

- 选定流：Pork smoked sausage, chilled
- 流属性/单位：Mass / kg
- 数量规则：记录该交换针对锁定批次跨越本过程边界的前景实测数量。
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：产品特定（`product_specific`）
- 归一化基准：每 1 kg 厂门处净合格可销售参考产品
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_final_product_mass`
- 来源：`un-cpc-3-2025`、`eu-pef-2021-2279`、`codex-cxs-192-1995`
- UUID 状态：未解析；在精确双核核验前保持为空。
- 适用性：这是一个具体的 CPC 21184 输出路线。仅当锁定的产品形态、已命名动物源配方、处理顺序和最终市场状态与 Pork smoked sausage, chilled 完全一致时使用；否则使用另一张具体原子输出行。
- 不确定性：保留秤分辨率、校准状态、去皮方法、适用时的水分基准以及批次核对差异。

###### 放行冷藏烟熏牛肉香肠（`final_product_beef_smoked_chilled`）

Beef smoked sausage, chilled 在本过程中作为一项原子输出交换记录；其不得代替任何其他物料、载体、废物或排放。

- 选定流：Beef smoked sausage, chilled
- 流属性/单位：Mass / kg
- 数量规则：记录该交换针对锁定批次跨越本过程边界的前景实测数量。
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：产品特定（`product_specific`）
- 归一化基准：每 1 kg 厂门处净合格可销售参考产品
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_final_product_mass`
- 来源：`un-cpc-3-2025`、`eu-pef-2021-2279`、`codex-cxs-192-1995`
- UUID 状态：未解析；在精确双核核验前保持为空。
- 适用性：这是一个具体的 CPC 21184 输出路线。仅当锁定的产品形态、已命名动物源配方、处理顺序和最终市场状态与 Beef smoked sausage, chilled 完全一致时使用；否则使用另一张具体原子输出行。
- 不确定性：保留秤分辨率、校准状态、去皮方法、适用时的水分基准以及批次核对差异。

###### 放行冷藏猪血布丁（`final_product_pig_blood_chilled`）

Pig blood pudding, chilled 在本过程中作为一项原子输出交换记录；其不得代替任何其他物料、载体、废物或排放。

- 选定流：Pig blood pudding, chilled
- 流属性/单位：Mass / kg
- 数量规则：记录该交换针对锁定批次跨越本过程边界的前景实测数量。
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：产品特定（`product_specific`）
- 归一化基准：每 1 kg 厂门处净合格可销售参考产品
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_final_product_mass`
- 来源：`un-cpc-3-2025`、`eu-pef-2021-2279`、`codex-cxs-192-1995`
- UUID 状态：未解析；在精确双核核验前保持为空。
- 适用性：这是一个具体的 CPC 21184 输出路线。仅当锁定的产品形态、已命名动物源配方、处理顺序和最终市场状态与 Pig blood pudding, chilled 完全一致时使用；否则使用另一张具体原子输出行。
- 不确定性：保留秤分辨率、校准状态、去皮方法、适用时的水分基准以及批次核对差异。

###### 放行冷冻猪血布丁（`final_product_pig_blood_frozen`）

Pig blood pudding, frozen 在本过程中作为一项原子输出交换记录；其不得代替任何其他物料、载体、废物或排放。

- 选定流：Pig blood pudding, frozen
- 流属性/单位：Mass / kg
- 数量规则：记录该交换针对锁定批次跨越本过程边界的前景实测数量。
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：产品特定（`product_specific`）
- 归一化基准：每 1 kg 厂门处净合格可销售参考产品
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_final_product_mass`
- 来源：`un-cpc-3-2025`、`eu-pef-2021-2279`、`codex-cxs-192-1995`
- UUID 状态：未解析；在精确双核核验前保持为空。
- 适用性：这是一个具体的 CPC 21184 输出路线。仅当锁定的产品形态、已命名动物源配方、处理顺序和最终市场状态与 Pig blood pudding, frozen 完全一致时使用；否则使用另一张具体原子输出行。
- 不确定性：保留秤分辨率、校准状态、去皮方法、适用时的水分基准以及批次核对差异。

###### 放行冷藏牛血布丁（`final_product_cattle_blood_chilled`）

Cattle blood pudding, chilled 在本过程中作为一项原子输出交换记录；其不得代替任何其他物料、载体、废物或排放。

- 选定流：Cattle blood pudding, chilled
- 流属性/单位：Mass / kg
- 数量规则：记录该交换针对锁定批次跨越本过程边界的前景实测数量。
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：产品特定（`product_specific`）
- 归一化基准：每 1 kg 厂门处净合格可销售参考产品
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_final_product_mass`
- 来源：`un-cpc-3-2025`、`eu-pef-2021-2279`、`codex-cxs-192-1995`
- UUID 状态：未解析；在精确双核核验前保持为空。
- 适用性：这是一个具体的 CPC 21184 输出路线。仅当锁定的产品形态、已命名动物源配方、处理顺序和最终市场状态与 Cattle blood pudding, chilled 完全一致时使用；否则使用另一张具体原子输出行。
- 不确定性：保留秤分辨率、校准状态、去皮方法、适用时的水分基准以及批次核对差异。

###### 放行冷藏猪肝香肠（`final_product_pork_liver_chilled`）

Pork liver sausage, chilled 在本过程中作为一项原子输出交换记录；其不得代替任何其他物料、载体、废物或排放。

- 选定流：Pork liver sausage, chilled
- 流属性/单位：Mass / kg
- 数量规则：记录该交换针对锁定批次跨越本过程边界的前景实测数量。
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：产品特定（`product_specific`）
- 归一化基准：每 1 kg 厂门处净合格可销售参考产品
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_final_product_mass`
- 来源：`un-cpc-3-2025`、`eu-pef-2021-2279`、`codex-cxs-192-1995`
- UUID 状态：未解析；在精确双核核验前保持为空。
- 适用性：这是一个具体的 CPC 21184 输出路线。仅当锁定的产品形态、已命名动物源配方、处理顺序和最终市场状态与 Pork liver sausage, chilled 完全一致时使用；否则使用另一张具体原子输出行。
- 不确定性：保留秤分辨率、校准状态、去皮方法、适用时的水分基准以及批次核对差异。

###### 放行冷冻猪肝香肠（`final_product_pork_liver_frozen`）

Pork liver sausage, frozen 在本过程中作为一项原子输出交换记录；其不得代替任何其他物料、载体、废物或排放。

- 选定流：Pork liver sausage, frozen
- 流属性/单位：Mass / kg
- 数量规则：记录该交换针对锁定批次跨越本过程边界的前景实测数量。
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：产品特定（`product_specific`）
- 归一化基准：每 1 kg 厂门处净合格可销售参考产品
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_final_product_mass`
- 来源：`un-cpc-3-2025`、`eu-pef-2021-2279`、`codex-cxs-192-1995`
- UUID 状态：未解析；在精确双核核验前保持为空。
- 适用性：这是一个具体的 CPC 21184 输出路线。仅当锁定的产品形态、已命名动物源配方、处理顺序和最终市场状态与 Pork liver sausage, frozen 完全一致时使用；否则使用另一张具体原子输出行。
- 不确定性：保留秤分辨率、校准状态、去皮方法、适用时的水分基准以及批次核对差异。

###### 放行冷藏牛心香肠（`final_product_beef_heart_chilled`）

Beef heart sausage, chilled 在本过程中作为一项原子输出交换记录；其不得代替任何其他物料、载体、废物或排放。

- 选定流：Beef heart sausage, chilled
- 流属性/单位：Mass / kg
- 数量规则：记录该交换针对锁定批次跨越本过程边界的前景实测数量。
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：产品特定（`product_specific`）
- 归一化基准：每 1 kg 厂门处净合格可销售参考产品
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_final_product_mass`
- 来源：`un-cpc-3-2025`、`eu-pef-2021-2279`、`codex-cxs-192-1995`
- UUID 状态：未解析；在精确双核核验前保持为空。
- 适用性：这是一个具体的 CPC 21184 输出路线。仅当锁定的产品形态、已命名动物源配方、处理顺序和最终市场状态与 Beef heart sausage, chilled 完全一致时使用；否则使用另一张具体原子输出行。
- 不确定性：保留秤分辨率、校准状态、去皮方法、适用时的水分基准以及批次核对差异。

###### 放行冷藏猪肾香肠（`final_product_pork_kidney_chilled`）

Pork kidney sausage, chilled 在本过程中作为一项原子输出交换记录；其不得代替任何其他物料、载体、废物或排放。

- 选定流：Pork kidney sausage, chilled
- 流属性/单位：Mass / kg
- 数量规则：记录该交换针对锁定批次跨越本过程边界的前景实测数量。
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：产品特定（`product_specific`）
- 归一化基准：每 1 kg 厂门处净合格可销售参考产品
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_final_product_mass`
- 来源：`un-cpc-3-2025`、`eu-pef-2021-2279`、`codex-cxs-192-1995`
- UUID 状态：未解析；在精确双核核验前保持为空。
- 适用性：这是一个具体的 CPC 21184 输出路线。仅当锁定的产品形态、已命名动物源配方、处理顺序和最终市场状态与 Pork kidney sausage, chilled 完全一致时使用；否则使用另一张具体原子输出行。
- 不确定性：保留秤分辨率、校准状态、去皮方法、适用时的水分基准以及批次核对差异。

###### 放行冷藏肠衣内鸡肉加朗汀（`final_product_chicken_galantine_chilled`）

Chicken galantine in casing, chilled 在本过程中作为一项原子输出交换记录；其不得代替任何其他物料、载体、废物或排放。

- 选定流：Chicken galantine in casing, chilled
- 流属性/单位：Mass / kg
- 数量规则：记录该交换针对锁定批次跨越本过程边界的前景实测数量。
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：产品特定（`product_specific`）
- 归一化基准：每 1 kg 厂门处净合格可销售参考产品
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_final_product_mass`
- 来源：`un-cpc-3-2025`、`eu-pef-2021-2279`、`codex-cxs-192-1995`
- UUID 状态：未解析；在精确双核核验前保持为空。
- 适用性：这是一个具体的 CPC 21184 输出路线。仅当锁定的产品形态、已命名动物源配方、处理顺序和最终市场状态与 Chicken galantine in casing, chilled 完全一致时使用；否则使用另一张具体原子输出行。
- 不确定性：保留秤分辨率、校准状态、去皮方法、适用时的水分基准以及批次核对差异。

###### 放行冷藏肠衣内牛肉酱（`final_product_beef_meat_paste_chilled`）

Beef meat paste in casing, chilled 在本过程中作为一项原子输出交换记录；其不得代替任何其他物料、载体、废物或排放。

- 选定流：Beef meat paste in casing, chilled
- 流属性/单位：Mass / kg
- 数量规则：记录该交换针对锁定批次跨越本过程边界的前景实测数量。
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：产品特定（`product_specific`）
- 归一化基准：每 1 kg 厂门处净合格可销售参考产品
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_final_product_mass`
- 来源：`un-cpc-3-2025`、`eu-pef-2021-2279`、`codex-cxs-192-1995`
- UUID 状态：未解析；在精确双核核验前保持为空。
- 适用性：这是一个具体的 CPC 21184 输出路线。仅当锁定的产品形态、已命名动物源配方、处理顺序和最终市场状态与 Beef meat paste in casing, chilled 完全一致时使用；否则使用另一张具体原子输出行。
- 不确定性：保留秤分辨率、校准状态、去皮方法、适用时的水分基准以及批次核对差异。

###### 放行冷藏肠衣内猪肉酱（`final_product_pork_pate_chilled`）

Pork pâté in casing, chilled 在本过程中作为一项原子输出交换记录；其不得代替任何其他物料、载体、废物或排放。

- 选定流：Pork pâté in casing, chilled
- 流属性/单位：Mass / kg
- 数量规则：记录该交换针对锁定批次跨越本过程边界的前景实测数量。
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：产品特定（`product_specific`）
- 归一化基准：每 1 kg 厂门处净合格可销售参考产品
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_final_product_mass`
- 来源：`un-cpc-3-2025`、`eu-pef-2021-2279`、`codex-cxs-192-1995`
- UUID 状态：未解析；在精确双核核验前保持为空。
- 适用性：这是一个具体的 CPC 21184 输出路线。仅当锁定的产品形态、已命名动物源配方、处理顺序和最终市场状态与 Pork pâté in casing, chilled 完全一致时使用；否则使用另一张具体原子输出行。
- 不确定性：保留秤分辨率、校准状态、去皮方法、适用时的水分基准以及批次核对差异。

###### 放行冷藏肠衣内猪肉酥酱（`final_product_pork_rillettes_chilled`）

Pork rillettes in casing, chilled 在本过程中作为一项原子输出交换记录；其不得代替任何其他物料、载体、废物或排放。

- 选定流：Pork rillettes in casing, chilled
- 流属性/单位：Mass / kg
- 数量规则：记录该交换针对锁定批次跨越本过程边界的前景实测数量。
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：产品特定（`product_specific`）
- 归一化基准：每 1 kg 厂门处净合格可销售参考产品
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_final_product_mass`
- 来源：`un-cpc-3-2025`、`eu-pef-2021-2279`、`codex-cxs-192-1995`
- UUID 状态：未解析；在精确双核核验前保持为空。
- 适用性：这是一个具体的 CPC 21184 输出路线。仅当锁定的产品形态、已命名动物源配方、处理顺序和最终市场状态与 Pork rillettes in casing, chilled 完全一致时使用；否则使用另一张具体原子输出行。
- 不确定性：保留秤分辨率、校准状态、去皮方法、适用时的水分基准以及批次核对差异。

##### 废物流

###### 移出冷藏猪肉鲜香肠放行不合格物（`final_reject_pork_fresh_chilled`）

Pork fresh sausage, chilled release reject 在本过程中作为一项原子输出交换记录；其不得代替任何其他物料、载体、废物或排放。

- 选定流：Pork fresh sausage, chilled release reject
- 流属性/单位：Mass / kg
- 数量规则：记录该交换针对锁定批次跨越本过程边界的前景实测数量。
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：产品特定（`product_specific`）
- 归一化基准：每 1 kg 厂门处净合格可销售参考产品
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_material_waste_mass`
- 来源：`eu-pef-2021-2279`、`jrc-sa-bref-2024`
- UUID 状态：未解析；在精确双核核验前保持为空。
- 适用性：仅在 Pork fresh sausage, chilled release reject 针对单一锁定产品配方和处理顺序实际跨越过程边界时记录；否则将该原子行标记为不适用。
- 不确定性：保留秤分辨率、校准状态、去皮方法、适用时的水分基准以及批次核对差异。

###### 移出冷冻猪肉鲜香肠放行不合格物（`final_reject_pork_fresh_frozen`）

Pork fresh sausage, frozen release reject 在本过程中作为一项原子输出交换记录；其不得代替任何其他物料、载体、废物或排放。

- 选定流：Pork fresh sausage, frozen release reject
- 流属性/单位：Mass / kg
- 数量规则：记录该交换针对锁定批次跨越本过程边界的前景实测数量。
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：产品特定（`product_specific`）
- 归一化基准：每 1 kg 厂门处净合格可销售参考产品
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_material_waste_mass`
- 来源：`eu-pef-2021-2279`、`jrc-sa-bref-2024`
- UUID 状态：未解析；在精确双核核验前保持为空。
- 适用性：仅在 Pork fresh sausage, frozen release reject 针对单一锁定产品配方和处理顺序实际跨越过程边界时记录；否则将该原子行标记为不适用。
- 不确定性：保留秤分辨率、校准状态、去皮方法、适用时的水分基准以及批次核对差异。

###### 移出冷藏熟制猪肉香肠放行不合格物（`final_reject_pork_cooked_chilled`）

Pork cooked sausage, chilled release reject 在本过程中作为一项原子输出交换记录；其不得代替任何其他物料、载体、废物或排放。

- 选定流：Pork cooked sausage, chilled release reject
- 流属性/单位：Mass / kg
- 数量规则：记录该交换针对锁定批次跨越本过程边界的前景实测数量。
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：产品特定（`product_specific`）
- 归一化基准：每 1 kg 厂门处净合格可销售参考产品
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_material_waste_mass`
- 来源：`eu-pef-2021-2279`、`jrc-sa-bref-2024`
- UUID 状态：未解析；在精确双核核验前保持为空。
- 适用性：仅在 Pork cooked sausage, chilled release reject 针对单一锁定产品配方和处理顺序实际跨越过程边界时记录；否则将该原子行标记为不适用。
- 不确定性：保留秤分辨率、校准状态、去皮方法、适用时的水分基准以及批次核对差异。

###### 移出冷冻熟制猪肉香肠放行不合格物（`final_reject_pork_cooked_frozen`）

Pork cooked sausage, frozen release reject 在本过程中作为一项原子输出交换记录；其不得代替任何其他物料、载体、废物或排放。

- 选定流：Pork cooked sausage, frozen release reject
- 流属性/单位：Mass / kg
- 数量规则：记录该交换针对锁定批次跨越本过程边界的前景实测数量。
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：产品特定（`product_specific`）
- 归一化基准：每 1 kg 厂门处净合格可销售参考产品
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_material_waste_mass`
- 来源：`eu-pef-2021-2279`、`jrc-sa-bref-2024`
- UUID 状态：未解析；在精确双核核验前保持为空。
- 适用性：仅在 Pork cooked sausage, frozen release reject 针对单一锁定产品配方和处理顺序实际跨越过程边界时记录；否则将该原子行标记为不适用。
- 不确定性：保留秤分辨率、校准状态、去皮方法、适用时的水分基准以及批次核对差异。

###### 移出冷藏熟制牛肉香肠放行不合格物（`final_reject_beef_cooked_chilled`）

Beef cooked sausage, chilled release reject 在本过程中作为一项原子输出交换记录；其不得代替任何其他物料、载体、废物或排放。

- 选定流：Beef cooked sausage, chilled release reject
- 流属性/单位：Mass / kg
- 数量规则：记录该交换针对锁定批次跨越本过程边界的前景实测数量。
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：产品特定（`product_specific`）
- 归一化基准：每 1 kg 厂门处净合格可销售参考产品
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_material_waste_mass`
- 来源：`eu-pef-2021-2279`、`jrc-sa-bref-2024`
- UUID 状态：未解析；在精确双核核验前保持为空。
- 适用性：仅在 Beef cooked sausage, chilled release reject 针对单一锁定产品配方和处理顺序实际跨越过程边界时记录；否则将该原子行标记为不适用。
- 不确定性：保留秤分辨率、校准状态、去皮方法、适用时的水分基准以及批次核对差异。

###### 移出冷冻熟制牛肉香肠放行不合格物（`final_reject_beef_cooked_frozen`）

Beef cooked sausage, frozen release reject 在本过程中作为一项原子输出交换记录；其不得代替任何其他物料、载体、废物或排放。

- 选定流：Beef cooked sausage, frozen release reject
- 流属性/单位：Mass / kg
- 数量规则：记录该交换针对锁定批次跨越本过程边界的前景实测数量。
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：产品特定（`product_specific`）
- 归一化基准：每 1 kg 厂门处净合格可销售参考产品
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_material_waste_mass`
- 来源：`eu-pef-2021-2279`、`jrc-sa-bref-2024`
- UUID 状态：未解析；在精确双核核验前保持为空。
- 适用性：仅在 Beef cooked sausage, frozen release reject 针对单一锁定产品配方和处理顺序实际跨越过程边界时记录；否则将该原子行标记为不适用。
- 不确定性：保留秤分辨率、校准状态、去皮方法、适用时的水分基准以及批次核对差异。

###### 移出货架稳定型猪肉发酵干香肠放行不合格物（`final_reject_pork_fermented_dry`）

Pork fermented dried sausage, shelf-stable release reject 在本过程中作为一项原子输出交换记录；其不得代替任何其他物料、载体、废物或排放。

- 选定流：Pork fermented dried sausage, shelf-stable release reject
- 流属性/单位：Mass / kg
- 数量规则：记录该交换针对锁定批次跨越本过程边界的前景实测数量。
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：产品特定（`product_specific`）
- 归一化基准：每 1 kg 厂门处净合格可销售参考产品
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_material_waste_mass`
- 来源：`eu-pef-2021-2279`、`jrc-sa-bref-2024`
- UUID 状态：未解析；在精确双核核验前保持为空。
- 适用性：仅在 Pork fermented dried sausage, shelf-stable release reject 针对单一锁定产品配方和处理顺序实际跨越过程边界时记录；否则将该原子行标记为不适用。
- 不确定性：保留秤分辨率、校准状态、去皮方法、适用时的水分基准以及批次核对差异。

###### 移出冷藏烟熏猪肉香肠放行不合格物（`final_reject_pork_smoked_chilled`）

Pork smoked sausage, chilled release reject 在本过程中作为一项原子输出交换记录；其不得代替任何其他物料、载体、废物或排放。

- 选定流：Pork smoked sausage, chilled release reject
- 流属性/单位：Mass / kg
- 数量规则：记录该交换针对锁定批次跨越本过程边界的前景实测数量。
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：产品特定（`product_specific`）
- 归一化基准：每 1 kg 厂门处净合格可销售参考产品
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_material_waste_mass`
- 来源：`eu-pef-2021-2279`、`jrc-sa-bref-2024`
- UUID 状态：未解析；在精确双核核验前保持为空。
- 适用性：仅在 Pork smoked sausage, chilled release reject 针对单一锁定产品配方和处理顺序实际跨越过程边界时记录；否则将该原子行标记为不适用。
- 不确定性：保留秤分辨率、校准状态、去皮方法、适用时的水分基准以及批次核对差异。

###### 移出冷藏烟熏牛肉香肠放行不合格物（`final_reject_beef_smoked_chilled`）

Beef smoked sausage, chilled release reject 在本过程中作为一项原子输出交换记录；其不得代替任何其他物料、载体、废物或排放。

- 选定流：Beef smoked sausage, chilled release reject
- 流属性/单位：Mass / kg
- 数量规则：记录该交换针对锁定批次跨越本过程边界的前景实测数量。
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：产品特定（`product_specific`）
- 归一化基准：每 1 kg 厂门处净合格可销售参考产品
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_material_waste_mass`
- 来源：`eu-pef-2021-2279`、`jrc-sa-bref-2024`
- UUID 状态：未解析；在精确双核核验前保持为空。
- 适用性：仅在 Beef smoked sausage, chilled release reject 针对单一锁定产品配方和处理顺序实际跨越过程边界时记录；否则将该原子行标记为不适用。
- 不确定性：保留秤分辨率、校准状态、去皮方法、适用时的水分基准以及批次核对差异。

###### 移出冷藏猪血布丁放行不合格物（`final_reject_pig_blood_chilled`）

Pig blood pudding, chilled release reject 在本过程中作为一项原子输出交换记录；其不得代替任何其他物料、载体、废物或排放。

- 选定流：Pig blood pudding, chilled release reject
- 流属性/单位：Mass / kg
- 数量规则：记录该交换针对锁定批次跨越本过程边界的前景实测数量。
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：产品特定（`product_specific`）
- 归一化基准：每 1 kg 厂门处净合格可销售参考产品
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_material_waste_mass`
- 来源：`eu-pef-2021-2279`、`jrc-sa-bref-2024`
- UUID 状态：未解析；在精确双核核验前保持为空。
- 适用性：仅在 Pig blood pudding, chilled release reject 针对单一锁定产品配方和处理顺序实际跨越过程边界时记录；否则将该原子行标记为不适用。
- 不确定性：保留秤分辨率、校准状态、去皮方法、适用时的水分基准以及批次核对差异。

###### 移出冷冻猪血布丁放行不合格物（`final_reject_pig_blood_frozen`）

Pig blood pudding, frozen release reject 在本过程中作为一项原子输出交换记录；其不得代替任何其他物料、载体、废物或排放。

- 选定流：Pig blood pudding, frozen release reject
- 流属性/单位：Mass / kg
- 数量规则：记录该交换针对锁定批次跨越本过程边界的前景实测数量。
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：产品特定（`product_specific`）
- 归一化基准：每 1 kg 厂门处净合格可销售参考产品
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_material_waste_mass`
- 来源：`eu-pef-2021-2279`、`jrc-sa-bref-2024`
- UUID 状态：未解析；在精确双核核验前保持为空。
- 适用性：仅在 Pig blood pudding, frozen release reject 针对单一锁定产品配方和处理顺序实际跨越过程边界时记录；否则将该原子行标记为不适用。
- 不确定性：保留秤分辨率、校准状态、去皮方法、适用时的水分基准以及批次核对差异。

###### 移出冷藏牛血布丁放行不合格物（`final_reject_cattle_blood_chilled`）

Cattle blood pudding, chilled release reject 在本过程中作为一项原子输出交换记录；其不得代替任何其他物料、载体、废物或排放。

- 选定流：Cattle blood pudding, chilled release reject
- 流属性/单位：Mass / kg
- 数量规则：记录该交换针对锁定批次跨越本过程边界的前景实测数量。
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：产品特定（`product_specific`）
- 归一化基准：每 1 kg 厂门处净合格可销售参考产品
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_material_waste_mass`
- 来源：`eu-pef-2021-2279`、`jrc-sa-bref-2024`
- UUID 状态：未解析；在精确双核核验前保持为空。
- 适用性：仅在 Cattle blood pudding, chilled release reject 针对单一锁定产品配方和处理顺序实际跨越过程边界时记录；否则将该原子行标记为不适用。
- 不确定性：保留秤分辨率、校准状态、去皮方法、适用时的水分基准以及批次核对差异。

###### 移出冷藏猪肝香肠放行不合格物（`final_reject_pork_liver_chilled`）

Pork liver sausage, chilled release reject 在本过程中作为一项原子输出交换记录；其不得代替任何其他物料、载体、废物或排放。

- 选定流：Pork liver sausage, chilled release reject
- 流属性/单位：Mass / kg
- 数量规则：记录该交换针对锁定批次跨越本过程边界的前景实测数量。
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：产品特定（`product_specific`）
- 归一化基准：每 1 kg 厂门处净合格可销售参考产品
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_material_waste_mass`
- 来源：`eu-pef-2021-2279`、`jrc-sa-bref-2024`
- UUID 状态：未解析；在精确双核核验前保持为空。
- 适用性：仅在 Pork liver sausage, chilled release reject 针对单一锁定产品配方和处理顺序实际跨越过程边界时记录；否则将该原子行标记为不适用。
- 不确定性：保留秤分辨率、校准状态、去皮方法、适用时的水分基准以及批次核对差异。

###### 移出冷冻猪肝香肠放行不合格物（`final_reject_pork_liver_frozen`）

Pork liver sausage, frozen release reject 在本过程中作为一项原子输出交换记录；其不得代替任何其他物料、载体、废物或排放。

- 选定流：Pork liver sausage, frozen release reject
- 流属性/单位：Mass / kg
- 数量规则：记录该交换针对锁定批次跨越本过程边界的前景实测数量。
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：产品特定（`product_specific`）
- 归一化基准：每 1 kg 厂门处净合格可销售参考产品
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_material_waste_mass`
- 来源：`eu-pef-2021-2279`、`jrc-sa-bref-2024`
- UUID 状态：未解析；在精确双核核验前保持为空。
- 适用性：仅在 Pork liver sausage, frozen release reject 针对单一锁定产品配方和处理顺序实际跨越过程边界时记录；否则将该原子行标记为不适用。
- 不确定性：保留秤分辨率、校准状态、去皮方法、适用时的水分基准以及批次核对差异。

###### 移出冷藏牛心香肠放行不合格物（`final_reject_beef_heart_chilled`）

Beef heart sausage, chilled release reject 在本过程中作为一项原子输出交换记录；其不得代替任何其他物料、载体、废物或排放。

- 选定流：Beef heart sausage, chilled release reject
- 流属性/单位：Mass / kg
- 数量规则：记录该交换针对锁定批次跨越本过程边界的前景实测数量。
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：产品特定（`product_specific`）
- 归一化基准：每 1 kg 厂门处净合格可销售参考产品
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_material_waste_mass`
- 来源：`eu-pef-2021-2279`、`jrc-sa-bref-2024`
- UUID 状态：未解析；在精确双核核验前保持为空。
- 适用性：仅在 Beef heart sausage, chilled release reject 针对单一锁定产品配方和处理顺序实际跨越过程边界时记录；否则将该原子行标记为不适用。
- 不确定性：保留秤分辨率、校准状态、去皮方法、适用时的水分基准以及批次核对差异。

###### 移出冷藏猪肾香肠放行不合格物（`final_reject_pork_kidney_chilled`）

Pork kidney sausage, chilled release reject 在本过程中作为一项原子输出交换记录；其不得代替任何其他物料、载体、废物或排放。

- 选定流：Pork kidney sausage, chilled release reject
- 流属性/单位：Mass / kg
- 数量规则：记录该交换针对锁定批次跨越本过程边界的前景实测数量。
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：产品特定（`product_specific`）
- 归一化基准：每 1 kg 厂门处净合格可销售参考产品
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_material_waste_mass`
- 来源：`eu-pef-2021-2279`、`jrc-sa-bref-2024`
- UUID 状态：未解析；在精确双核核验前保持为空。
- 适用性：仅在 Pork kidney sausage, chilled release reject 针对单一锁定产品配方和处理顺序实际跨越过程边界时记录；否则将该原子行标记为不适用。
- 不确定性：保留秤分辨率、校准状态、去皮方法、适用时的水分基准以及批次核对差异。

###### 移出冷藏肠衣内鸡肉加朗汀放行不合格物（`final_reject_chicken_galantine_chilled`）

Chicken galantine in casing, chilled release reject 在本过程中作为一项原子输出交换记录；其不得代替任何其他物料、载体、废物或排放。

- 选定流：Chicken galantine in casing, chilled release reject
- 流属性/单位：Mass / kg
- 数量规则：记录该交换针对锁定批次跨越本过程边界的前景实测数量。
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：产品特定（`product_specific`）
- 归一化基准：每 1 kg 厂门处净合格可销售参考产品
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_material_waste_mass`
- 来源：`eu-pef-2021-2279`、`jrc-sa-bref-2024`
- UUID 状态：未解析；在精确双核核验前保持为空。
- 适用性：仅在 Chicken galantine in casing, chilled release reject 针对单一锁定产品配方和处理顺序实际跨越过程边界时记录；否则将该原子行标记为不适用。
- 不确定性：保留秤分辨率、校准状态、去皮方法、适用时的水分基准以及批次核对差异。

###### 移出冷藏肠衣内牛肉酱放行不合格物（`final_reject_beef_meat_paste_chilled`）

Beef meat paste in casing, chilled release reject 在本过程中作为一项原子输出交换记录；其不得代替任何其他物料、载体、废物或排放。

- 选定流：Beef meat paste in casing, chilled release reject
- 流属性/单位：Mass / kg
- 数量规则：记录该交换针对锁定批次跨越本过程边界的前景实测数量。
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：产品特定（`product_specific`）
- 归一化基准：每 1 kg 厂门处净合格可销售参考产品
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_material_waste_mass`
- 来源：`eu-pef-2021-2279`、`jrc-sa-bref-2024`
- UUID 状态：未解析；在精确双核核验前保持为空。
- 适用性：仅在 Beef meat paste in casing, chilled release reject 针对单一锁定产品配方和处理顺序实际跨越过程边界时记录；否则将该原子行标记为不适用。
- 不确定性：保留秤分辨率、校准状态、去皮方法、适用时的水分基准以及批次核对差异。

###### 移出冷藏肠衣内猪肉酱放行不合格物（`final_reject_pork_pate_chilled`）

Pork pâté in casing, chilled release reject 在本过程中作为一项原子输出交换记录；其不得代替任何其他物料、载体、废物或排放。

- 选定流：Pork pâté in casing, chilled release reject
- 流属性/单位：Mass / kg
- 数量规则：记录该交换针对锁定批次跨越本过程边界的前景实测数量。
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：产品特定（`product_specific`）
- 归一化基准：每 1 kg 厂门处净合格可销售参考产品
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_material_waste_mass`
- 来源：`eu-pef-2021-2279`、`jrc-sa-bref-2024`
- UUID 状态：未解析；在精确双核核验前保持为空。
- 适用性：仅在 Pork pâté in casing, chilled release reject 针对单一锁定产品配方和处理顺序实际跨越过程边界时记录；否则将该原子行标记为不适用。
- 不确定性：保留秤分辨率、校准状态、去皮方法、适用时的水分基准以及批次核对差异。

###### 移出冷藏肠衣内猪肉酥酱放行不合格物（`final_reject_pork_rillettes_chilled`）

Pork rillettes in casing, chilled release reject 在本过程中作为一项原子输出交换记录；其不得代替任何其他物料、载体、废物或排放。

- 选定流：Pork rillettes in casing, chilled release reject
- 流属性/单位：Mass / kg
- 数量规则：记录该交换针对锁定批次跨越本过程边界的前景实测数量。
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：产品特定（`product_specific`）
- 归一化基准：每 1 kg 厂门处净合格可销售参考产品
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_material_waste_mass`
- 来源：`eu-pef-2021-2279`、`jrc-sa-bref-2024`
- UUID 状态：未解析；在精确双核核验前保持为空。
- 适用性：仅在 Pork rillettes in casing, chilled release reject 针对单一锁定产品配方和处理顺序实际跨越过程边界时记录；否则将该原子行标记为不适用。
- 不确定性：保留秤分辨率、校准状态、去皮方法、适用时的水分基准以及批次核对差异。

###### 移出低密度聚乙烯薄膜包装边角废物（`packaging_scrap_ldpe_film`）

Low-density polyethylene film packaging scrap 在本过程中作为一项原子输出交换记录；其不得代替任何其他物料、载体、废物或排放。

- 选定流：Low-density polyethylene film packaging scrap
- 流属性/单位：Mass / kg
- 数量规则：记录该交换针对锁定批次跨越本过程边界的前景实测数量。
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每 1 kg 厂门处净合格可销售参考产品
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_material_waste_mass`
- 来源：`eu-pef-2021-2279`
- UUID 状态：未解析；在精确双核核验前保持为空。
- 适用性：仅在 Low-density polyethylene film packaging scrap 针对单一锁定产品配方和处理顺序实际跨越过程边界时记录；否则将该原子行标记为不适用。
- 不确定性：保留秤分辨率、校准状态、去皮方法、适用时的水分基准以及批次核对差异。

###### 移出聚酰胺薄膜包装边角废物（`packaging_scrap_polyamide_film`）

Polyamide film packaging scrap 在本过程中作为一项原子输出交换记录；其不得代替任何其他物料、载体、废物或排放。

- 选定流：Polyamide film packaging scrap
- 流属性/单位：Mass / kg
- 数量规则：记录该交换针对锁定批次跨越本过程边界的前景实测数量。
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每 1 kg 厂门处净合格可销售参考产品
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_material_waste_mass`
- 来源：`eu-pef-2021-2279`
- UUID 状态：未解析；在精确双核核验前保持为空。
- 适用性：仅在 Polyamide film packaging scrap 针对单一锁定产品配方和处理顺序实际跨越过程边界时记录；否则将该原子行标记为不适用。
- 不确定性：保留秤分辨率、校准状态、去皮方法、适用时的水分基准以及批次核对差异。

###### 移出聚丙烯托盘包装边角废物（`packaging_scrap_pp_tray`）

Polypropylene tray packaging scrap 在本过程中作为一项原子输出交换记录；其不得代替任何其他物料、载体、废物或排放。

- 选定流：Polypropylene tray packaging scrap
- 流属性/单位：Mass / kg
- 数量规则：记录该交换针对锁定批次跨越本过程边界的前景实测数量。
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每 1 kg 厂门处净合格可销售参考产品
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_material_waste_mass`
- 来源：`eu-pef-2021-2279`
- UUID 状态：未解析；在精确双核核验前保持为空。
- 适用性：仅在 Polypropylene tray packaging scrap 针对单一锁定产品配方和处理顺序实际跨越过程边界时记录；否则将该原子行标记为不适用。
- 不确定性：保留秤分辨率、校准状态、去皮方法、适用时的水分基准以及批次核对差异。

###### 移出聚对苯二甲酸乙二醇酯托盘包装边角废物（`packaging_scrap_pet_tray`）

Polyethylene terephthalate tray packaging scrap 在本过程中作为一项原子输出交换记录；其不得代替任何其他物料、载体、废物或排放。

- 选定流：Polyethylene terephthalate tray packaging scrap
- 流属性/单位：Mass / kg
- 数量规则：记录该交换针对锁定批次跨越本过程边界的前景实测数量。
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每 1 kg 厂门处净合格可销售参考产品
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_material_waste_mass`
- 来源：`eu-pef-2021-2279`
- UUID 状态：未解析；在精确双核核验前保持为空。
- 适用性：仅在 Polyethylene terephthalate tray packaging scrap 针对单一锁定产品配方和处理顺序实际跨越过程边界时记录；否则将该原子行标记为不适用。
- 不确定性：保留秤分辨率、校准状态、去皮方法、适用时的水分基准以及批次核对差异。

###### 移出瓦楞纤维板纸箱包装边角废物（`packaging_scrap_fibreboard`）

Corrugated fibreboard carton packaging scrap 在本过程中作为一项原子输出交换记录；其不得代替任何其他物料、载体、废物或排放。

- 选定流：Corrugated fibreboard carton packaging scrap
- 流属性/单位：Mass / kg
- 数量规则：记录该交换针对锁定批次跨越本过程边界的前景实测数量。
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每 1 kg 厂门处净合格可销售参考产品
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_material_waste_mass`
- 来源：`eu-pef-2021-2279`
- UUID 状态：未解析；在精确双核核验前保持为空。
- 适用性：仅在 Corrugated fibreboard carton packaging scrap 针对单一锁定产品配方和处理顺序实际跨越过程边界时记录；否则将该原子行标记为不适用。
- 不确定性：保留秤分辨率、校准状态、去皮方法、适用时的水分基准以及批次核对差异。

###### 移出镀锡钢罐包装边角废物（`packaging_scrap_tinplate`）

Tinplate steel can packaging scrap 在本过程中作为一项原子输出交换记录；其不得代替任何其他物料、载体、废物或排放。

- 选定流：Tinplate steel can packaging scrap
- 流属性/单位：Mass / kg
- 数量规则：记录该交换针对锁定批次跨越本过程边界的前景实测数量。
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每 1 kg 厂门处净合格可销售参考产品
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_material_waste_mass`
- 来源：`eu-pef-2021-2279`
- UUID 状态：未解析；在精确双核核验前保持为空。
- 适用性：仅在 Tinplate steel can packaging scrap 针对单一锁定产品配方和处理顺序实际跨越过程边界时记录；否则将该原子行标记为不适用。
- 不确定性：保留秤分辨率、校准状态、去皮方法、适用时的水分基准以及批次核对差异。

###### 移出铝箔袋包装边角废物（`packaging_scrap_aluminium_pouch`）

Aluminium foil pouch packaging scrap 在本过程中作为一项原子输出交换记录；其不得代替任何其他物料、载体、废物或排放。

- 选定流：Aluminium foil pouch packaging scrap
- 流属性/单位：Mass / kg
- 数量规则：记录该交换针对锁定批次跨越本过程边界的前景实测数量。
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每 1 kg 厂门处净合格可销售参考产品
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_material_waste_mass`
- 来源：`eu-pef-2021-2279`
- UUID 状态：未解析；在精确双核核验前保持为空。
- 适用性：仅在 Aluminium foil pouch packaging scrap 针对单一锁定产品配方和处理顺序实际跨越过程边界时记录；否则将该原子行标记为不适用。
- 不确定性：保留秤分辨率、校准状态、去皮方法、适用时的水分基准以及批次核对差异。

###### 移出纸标签包装边角废物（`packaging_scrap_paper_label`）

Paper label packaging scrap 在本过程中作为一项原子输出交换记录；其不得代替任何其他物料、载体、废物或排放。

- 选定流：Paper label packaging scrap
- 流属性/单位：Mass / kg
- 数量规则：记录该交换针对锁定批次跨越本过程边界的前景实测数量。
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每 1 kg 厂门处净合格可销售参考产品
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_material_waste_mass`
- 来源：`eu-pef-2021-2279`
- UUID 状态：未解析；在精确双核核验前保持为空。
- 适用性：仅在 Paper label packaging scrap 针对单一锁定产品配方和处理顺序实际跨越过程边界时记录；否则将该原子行标记为不适用。
- 不确定性：保留秤分辨率、校准状态、去皮方法、适用时的水分基准以及批次核对差异。

###### 移出木托盘包装边角废物（`packaging_scrap_wood_pallet`）

Wooden pallet packaging scrap 在本过程中作为一项原子输出交换记录；其不得代替任何其他物料、载体、废物或排放。

- 选定流：Wooden pallet packaging scrap
- 流属性/单位：Mass / kg
- 数量规则：记录该交换针对锁定批次跨越本过程边界的前景实测数量。
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每 1 kg 厂门处净合格可销售参考产品
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_material_waste_mass`
- 来源：`eu-pef-2021-2279`
- UUID 状态：未解析；在精确双核核验前保持为空。
- 适用性：仅在 Wooden pallet packaging scrap 针对单一锁定产品配方和处理顺序实际跨越过程边界时记录；否则将该原子行标记为不适用。
- 不确定性：保留秤分辨率、校准状态、去皮方法、适用时的水分基准以及批次核对差异。

##### 基本流

###### 排放氨（R717）向空气排放（`packaging_r717_release`）

Ammonia (R717) to air 在本过程中作为一项原子输出交换记录；其不得代替任何其他物料、载体、废物或排放。

- 选定流：Ammonia (R717) to air
- 流属性/单位：Mass / kg
- 数量规则：仅依据所链接协议定义的前景记录计算可归属于该批次的数量。
- 数值来源模式：计算值（`calculated_value`）
- 适用范围：技术特定（`technology_specific`）
- 归一化基准：每 1 kg 厂门处净合格可销售参考产品
- 基准类型：参考流（`reference_flow`）
- 证据类型：由采集计算（`calculated_from_collection`）
- 采集协议：`cp_refrigerant_reconciliation`
- 来源：`eu-pef-2021-2279`、`jrc-sa-bref-2024`
- UUID 状态：未解析；在精确双核核验前保持为空。
- 适用性：仅在 Ammonia (R717) to air 针对单一锁定产品配方和处理顺序实际跨越过程边界时记录；否则将该原子行标记为不适用。
- 不确定性：保留采样或质量平衡方法、检出限、时间代表性、换算记录和分析不确定性。

###### 排放二氧化碳（R744）向空气排放（`packaging_r744_release`）

Carbon dioxide (R744) to air 在本过程中作为一项原子输出交换记录；其不得代替任何其他物料、载体、废物或排放。

- 选定流：Carbon dioxide (R744) to air
- 流属性/单位：Mass / kg
- 数量规则：仅依据所链接协议定义的前景记录计算可归属于该批次的数量。
- 数值来源模式：计算值（`calculated_value`）
- 适用范围：技术特定（`technology_specific`）
- 归一化基准：每 1 kg 厂门处净合格可销售参考产品
- 基准类型：参考流（`reference_flow`）
- 证据类型：由采集计算（`calculated_from_collection`）
- 采集协议：`cp_refrigerant_reconciliation`
- 来源：`eu-pef-2021-2279`、`jrc-sa-bref-2024`
- UUID 状态：未解析；在精确双核核验前保持为空。
- 适用性：仅在 Carbon dioxide (R744) to air 针对单一锁定产品配方和处理顺序实际跨越过程边界时记录；否则将该原子行标记为不适用。
- 不确定性：保留采样或质量平衡方法、检出限、时间代表性、换算记录和分析不确定性。

###### 排放丙烷（R290）向空气排放（`packaging_r290_release`）

Propane (R290) to air 在本过程中作为一项原子输出交换记录；其不得代替任何其他物料、载体、废物或排放。

- 选定流：Propane (R290) to air
- 流属性/单位：Mass / kg
- 数量规则：仅依据所链接协议定义的前景记录计算可归属于该批次的数量。
- 数值来源模式：计算值（`calculated_value`）
- 适用范围：技术特定（`technology_specific`）
- 归一化基准：每 1 kg 厂门处净合格可销售参考产品
- 基准类型：参考流（`reference_flow`）
- 证据类型：由采集计算（`calculated_from_collection`）
- 采集协议：`cp_refrigerant_reconciliation`
- 来源：`eu-pef-2021-2279`、`jrc-sa-bref-2024`
- UUID 状态：未解析；在精确双核核验前保持为空。
- 适用性：仅在 Propane (R290) to air 针对单一锁定产品配方和处理顺序实际跨越过程边界时记录；否则将该原子行标记为不适用。
- 不确定性：保留采样或质量平衡方法、检出限、时间代表性、换算记录和分析不确定性。

### 过程：卫生清洗与消毒（`hygiene_cleaning_sanitation`）

前景清洗、漂洗、消毒和残留物移除。始终纳入可归属于锁定生产批次的产品接触面和区域清洗。

#### 输入

##### 产品流

###### 使用饮用级清洗水（`hygiene_input_water`）

Potable cleaning water 在本过程中作为一项原子输入交换记录；其不得代替任何其他物料、载体、废物或排放。

- 选定流：Potable cleaning water
- 流属性/单位：Mass / kg
- 数量规则：记录该交换针对锁定批次跨越本过程边界的前景实测数量。
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每 1 kg 厂门处净合格可销售参考产品
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_cleaning_water_mass`
- 来源：`eu-pef-2021-2279`、`jrc-sa-bref-2024`、`codex-cxc-58-2005`
- UUID 状态：未解析；在精确双核核验前保持为空。
- 适用性：仅在 Potable cleaning water 针对单一锁定产品配方和处理顺序实际跨越过程边界时记录；否则将该原子行标记为不适用。
- 不确定性：保留秤分辨率、校准状态、去皮方法、适用时的水分基准以及批次核对差异。

###### 使用中压电网电力（`hygiene_input_electricity`）

Grid electricity, medium voltage 在本过程中作为一项原子输入交换记录；其不得代替任何其他物料、载体、废物或排放。

- 选定流：Grid electricity, medium voltage
- 流属性/单位：Energy / kWh
- 数量规则：记录该交换针对锁定批次跨越本过程边界的前景实测数量。
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每 1 kg 厂门处净合格可销售参考产品
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_stage_electricity`
- 来源：`eu-pef-2021-2279`、`jrc-sa-bref-2024`、`codex-cxc-58-2005`
- UUID 状态：未解析；在精确双核核验前保持为空。
- 适用性：仅在 Grid electricity, medium voltage 针对单一锁定产品配方和处理顺序实际跨越过程边界时记录；否则将该原子行标记为不适用。
- 不确定性：保留仪表分辨率、校准状态、计量覆盖、时间区间以及任何批次归属计算。

###### 使用外购蒸汽（`hygiene_input_purchased_steam`）

Purchased steam 在本过程中作为一项原子输入交换记录；其不得代替任何其他物料、载体、废物或排放。

- 选定流：Purchased steam
- 流属性/单位：Energy / MJ
- 数量规则：记录该交换针对锁定批次跨越本过程边界的前景实测数量。
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每 1 kg 厂门处净合格可销售参考产品
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_purchased_heat`
- 来源：`eu-pef-2021-2279`、`jrc-sa-bref-2024`、`codex-cxc-58-2005`
- UUID 状态：未解析；在精确双核核验前保持为空。
- 适用性：仅在 Purchased steam 针对单一锁定产品配方和处理顺序实际跨越过程边界时记录；否则将该原子行标记为不适用。
- 不确定性：保留仪表分辨率、校准状态、计量覆盖、时间区间以及任何批次归属计算。

###### 使用外购热水（`hygiene_input_purchased_hot_water`）

Purchased hot water 在本过程中作为一项原子输入交换记录；其不得代替任何其他物料、载体、废物或排放。

- 选定流：Purchased hot water
- 流属性/单位：Energy / MJ
- 数量规则：记录该交换针对锁定批次跨越本过程边界的前景实测数量。
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每 1 kg 厂门处净合格可销售参考产品
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_purchased_heat`
- 来源：`eu-pef-2021-2279`、`jrc-sa-bref-2024`、`codex-cxc-58-2005`
- UUID 状态：未解析；在精确双核核验前保持为空。
- 适用性：仅在 Purchased hot water 针对单一锁定产品配方和处理顺序实际跨越过程边界时记录；否则将该原子行标记为不适用。
- 不确定性：保留仪表分辨率、校准状态、计量覆盖、时间区间以及任何批次归属计算。

###### 使用场内生成蒸汽（`hygiene_input_onsite_steam`）

Onsite-generated steam 在本过程中作为一项原子输入交换记录；其不得代替任何其他物料、载体、废物或排放。

- 选定流：Onsite-generated steam
- 流属性/单位：Energy / MJ
- 数量规则：记录该交换针对锁定批次跨越本过程边界的前景实测数量。
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：技术特定（`technology_specific`）
- 归一化基准：每 1 kg 厂门处净合格可销售参考产品
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_internal_heat_output`
- 来源：`eu-pef-2021-2279`、`jrc-sa-bref-2024`、`codex-cxc-58-2005`
- UUID 状态：未解析；在精确双核核验前保持为空。
- 适用性：仅在 Onsite-generated steam 针对单一锁定产品配方和处理顺序实际跨越过程边界时记录；否则将该原子行标记为不适用。
- 不确定性：保留仪表分辨率、校准状态、计量覆盖、时间区间以及任何批次归属计算。

###### 使用场内生成热水（`hygiene_input_onsite_hot_water`）

Onsite-generated hot water 在本过程中作为一项原子输入交换记录；其不得代替任何其他物料、载体、废物或排放。

- 选定流：Onsite-generated hot water
- 流属性/单位：Energy / MJ
- 数量规则：记录该交换针对锁定批次跨越本过程边界的前景实测数量。
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：技术特定（`technology_specific`）
- 归一化基准：每 1 kg 厂门处净合格可销售参考产品
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_internal_heat_output`
- 来源：`eu-pef-2021-2279`、`jrc-sa-bref-2024`、`codex-cxc-58-2005`
- UUID 状态：未解析；在精确双核核验前保持为空。
- 适用性：仅在 Onsite-generated hot water 针对单一锁定产品配方和处理顺序实际跨越过程边界时记录；否则将该原子行标记为不适用。
- 不确定性：保留仪表分辨率、校准状态、计量覆盖、时间区间以及任何批次归属计算。

###### 使用天然气（`hygiene_input_natural_gas`）

Natural gas 在本过程中作为一项原子输入交换记录；其不得代替任何其他物料、载体、废物或排放。

- 选定流：Natural gas
- 流属性/单位：Mass / kg
- 数量规则：记录该交换针对锁定批次跨越本过程边界的前景实测数量。
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：技术特定（`technology_specific`）
- 归一化基准：每 1 kg 厂门处净合格可销售参考产品
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_fuel_inventory`
- 来源：`eu-pef-2021-2279`、`jrc-sa-bref-2024`、`codex-cxc-58-2005`
- UUID 状态：未解析；在精确双核核验前保持为空。
- 适用性：仅在 Natural gas 针对单一锁定产品配方和处理顺序实际跨越过程边界时记录；否则将该原子行标记为不适用。
- 不确定性：保留秤分辨率、校准状态、去皮方法、适用时的水分基准以及批次核对差异。

###### 使用柴油（`hygiene_input_diesel`）

Diesel fuel 在本过程中作为一项原子输入交换记录；其不得代替任何其他物料、载体、废物或排放。

- 选定流：Diesel fuel
- 流属性/单位：Mass / kg
- 数量规则：记录该交换针对锁定批次跨越本过程边界的前景实测数量。
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：技术特定（`technology_specific`）
- 归一化基准：每 1 kg 厂门处净合格可销售参考产品
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_fuel_inventory`
- 来源：`eu-pef-2021-2279`、`jrc-sa-bref-2024`、`codex-cxc-58-2005`
- UUID 状态：未解析；在精确双核核验前保持为空。
- 适用性：仅在 Diesel fuel 针对单一锁定产品配方和处理顺序实际跨越过程边界时记录；否则将该原子行标记为不适用。
- 不确定性：保留秤分辨率、校准状态、去皮方法、适用时的水分基准以及批次核对差异。

###### 使用液化石油气（`hygiene_input_lpg`）

Liquefied petroleum gas 在本过程中作为一项原子输入交换记录；其不得代替任何其他物料、载体、废物或排放。

- 选定流：Liquefied petroleum gas
- 流属性/单位：Mass / kg
- 数量规则：记录该交换针对锁定批次跨越本过程边界的前景实测数量。
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：技术特定（`technology_specific`）
- 归一化基准：每 1 kg 厂门处净合格可销售参考产品
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_fuel_inventory`
- 来源：`eu-pef-2021-2279`、`jrc-sa-bref-2024`、`codex-cxc-58-2005`
- UUID 状态：未解析；在精确双核核验前保持为空。
- 适用性：仅在 Liquefied petroleum gas 针对单一锁定产品配方和处理顺序实际跨越过程边界时记录；否则将该原子行标记为不适用。
- 不确定性：保留秤分辨率、校准状态、去皮方法、适用时的水分基准以及批次核对差异。

###### 使用氢氧化钠（`hygiene_input_sodium_hydroxide`）

Sodium hydroxide 在本过程中作为一项原子输入交换记录；其不得代替任何其他物料、载体、废物或排放。

- 选定流：Sodium hydroxide
- 流属性/单位：Mass / kg
- 数量规则：记录该交换针对锁定批次跨越本过程边界的前景实测数量。
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：产品特定（`product_specific`）
- 归一化基准：每 1 kg 厂门处净合格可销售参考产品
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_cleaning_chemical_mass`
- 来源：`eu-pef-2021-2279`、`jrc-sa-bref-2024`、`codex-cxc-58-2005`
- UUID 状态：未解析；在精确双核核验前保持为空。
- 适用性：仅在 Sodium hydroxide 针对单一锁定产品配方和处理顺序实际跨越过程边界时记录；否则将该原子行标记为不适用。
- 不确定性：保留秤分辨率、校准状态、去皮方法、适用时的水分基准以及批次核对差异。

###### 使用硝酸（`hygiene_input_nitric_acid`）

Nitric acid 在本过程中作为一项原子输入交换记录；其不得代替任何其他物料、载体、废物或排放。

- 选定流：Nitric acid
- 流属性/单位：Mass / kg
- 数量规则：记录该交换针对锁定批次跨越本过程边界的前景实测数量。
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：产品特定（`product_specific`）
- 归一化基准：每 1 kg 厂门处净合格可销售参考产品
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_cleaning_chemical_mass`
- 来源：`eu-pef-2021-2279`、`jrc-sa-bref-2024`、`codex-cxc-58-2005`
- UUID 状态：未解析；在精确双核核验前保持为空。
- 适用性：仅在 Nitric acid 针对单一锁定产品配方和处理顺序实际跨越过程边界时记录；否则将该原子行标记为不适用。
- 不确定性：保留秤分辨率、校准状态、去皮方法、适用时的水分基准以及批次核对差异。

###### 使用磷酸（`hygiene_input_phosphoric_acid`）

Phosphoric acid 在本过程中作为一项原子输入交换记录；其不得代替任何其他物料、载体、废物或排放。

- 选定流：Phosphoric acid
- 流属性/单位：Mass / kg
- 数量规则：记录该交换针对锁定批次跨越本过程边界的前景实测数量。
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：产品特定（`product_specific`）
- 归一化基准：每 1 kg 厂门处净合格可销售参考产品
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_cleaning_chemical_mass`
- 来源：`eu-pef-2021-2279`、`jrc-sa-bref-2024`、`codex-cxc-58-2005`
- UUID 状态：未解析；在精确双核核验前保持为空。
- 适用性：仅在 Phosphoric acid 针对单一锁定产品配方和处理顺序实际跨越过程边界时记录；否则将该原子行标记为不适用。
- 不确定性：保留秤分辨率、校准状态、去皮方法、适用时的水分基准以及批次核对差异。

###### 使用过氧乙酸（`hygiene_input_peracetic_acid`）

Peracetic acid 在本过程中作为一项原子输入交换记录；其不得代替任何其他物料、载体、废物或排放。

- 选定流：Peracetic acid
- 流属性/单位：Mass / kg
- 数量规则：记录该交换针对锁定批次跨越本过程边界的前景实测数量。
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：产品特定（`product_specific`）
- 归一化基准：每 1 kg 厂门处净合格可销售参考产品
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_cleaning_chemical_mass`
- 来源：`eu-pef-2021-2279`、`jrc-sa-bref-2024`、`codex-cxc-58-2005`
- UUID 状态：未解析；在精确双核核验前保持为空。
- 适用性：仅在 Peracetic acid 针对单一锁定产品配方和处理顺序实际跨越过程边界时记录；否则将该原子行标记为不适用。
- 不确定性：保留秤分辨率、校准状态、去皮方法、适用时的水分基准以及批次核对差异。

###### 使用次氯酸钠（`hygiene_input_sodium_hypochlorite`）

Sodium hypochlorite 在本过程中作为一项原子输入交换记录；其不得代替任何其他物料、载体、废物或排放。

- 选定流：Sodium hypochlorite
- 流属性/单位：Mass / kg
- 数量规则：记录该交换针对锁定批次跨越本过程边界的前景实测数量。
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：产品特定（`product_specific`）
- 归一化基准：每 1 kg 厂门处净合格可销售参考产品
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_cleaning_chemical_mass`
- 来源：`eu-pef-2021-2279`、`jrc-sa-bref-2024`、`codex-cxc-58-2005`
- UUID 状态：未解析；在精确双核核验前保持为空。
- 适用性：仅在 Sodium hypochlorite 针对单一锁定产品配方和处理顺序实际跨越过程边界时记录；否则将该原子行标记为不适用。
- 不确定性：保留秤分辨率、校准状态、去皮方法、适用时的水分基准以及批次核对差异。

##### 废物流

##### 基本流

#### 输出

##### 产品流

##### 废物流

###### 移出高浓度香肠加工清洗废水（`hygiene_output_high_strength`）

High-strength sausage-processing cleaning wastewater 在本过程中作为一项原子输出交换记录；其不得代替任何其他物料、载体、废物或排放。

- 选定流：High-strength sausage-processing cleaning wastewater
- 流属性/单位：Volume / m3
- 数量规则：记录该交换针对锁定批次跨越本过程边界的前景实测数量。
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每 1 kg 厂门处净合格可销售参考产品
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_wastewater_volume`
- 来源：`eu-pef-2021-2279`、`jrc-sa-bref-2024`、`codex-cxc-58-2005`
- UUID 状态：未解析；在精确双核核验前保持为空。
- 适用性：仅在 High-strength sausage-processing cleaning wastewater 针对单一锁定产品配方和处理顺序实际跨越过程边界时记录；否则将该原子行标记为不适用。
- 不确定性：保留仪表分辨率、校准状态、采样间隔、适用时的密度换算以及时间覆盖。

###### 移出低浓度末次漂洗废水（`hygiene_output_final_rinse`）

Low-strength final-rinse wastewater 在本过程中作为一项原子输出交换记录；其不得代替任何其他物料、载体、废物或排放。

- 选定流：Low-strength final-rinse wastewater
- 流属性/单位：Volume / m3
- 数量规则：记录该交换针对锁定批次跨越本过程边界的前景实测数量。
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每 1 kg 厂门处净合格可销售参考产品
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_wastewater_volume`
- 来源：`eu-pef-2021-2279`、`jrc-sa-bref-2024`、`codex-cxc-58-2005`
- UUID 状态：未解析；在精确双核核验前保持为空。
- 适用性：仅在 Low-strength final-rinse wastewater 针对单一锁定产品配方和处理顺序实际跨越过程边界时记录；否则将该原子行标记为不适用。
- 不确定性：保留仪表分辨率、校准状态、采样间隔、适用时的密度换算以及时间覆盖。

###### 移出猪肉香肠肉地面残留物（`hygiene_output_pork_residue`）

Pork sausage meat floor residue 在本过程中作为一项原子输出交换记录；其不得代替任何其他物料、载体、废物或排放。

- 选定流：Pork sausage meat floor residue
- 流属性/单位：Mass / kg
- 数量规则：记录该交换针对锁定批次跨越本过程边界的前景实测数量。
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每 1 kg 厂门处净合格可销售参考产品
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_material_waste_mass`
- 来源：`eu-pef-2021-2279`、`jrc-sa-bref-2024`、`codex-cxc-58-2005`
- UUID 状态：未解析；在精确双核核验前保持为空。
- 适用性：仅在 Pork sausage meat floor residue 针对单一锁定产品配方和处理顺序实际跨越过程边界时记录；否则将该原子行标记为不适用。
- 不确定性：保留秤分辨率、校准状态、去皮方法、适用时的水分基准以及批次核对差异。

###### 移出牛肉香肠肉地面残留物（`hygiene_output_beef_residue`）

Beef sausage meat floor residue 在本过程中作为一项原子输出交换记录；其不得代替任何其他物料、载体、废物或排放。

- 选定流：Beef sausage meat floor residue
- 流属性/单位：Mass / kg
- 数量规则：记录该交换针对锁定批次跨越本过程边界的前景实测数量。
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每 1 kg 厂门处净合格可销售参考产品
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_material_waste_mass`
- 来源：`eu-pef-2021-2279`、`jrc-sa-bref-2024`、`codex-cxc-58-2005`
- UUID 状态：未解析；在精确双核核验前保持为空。
- 适用性：仅在 Beef sausage meat floor residue 针对单一锁定产品配方和处理顺序实际跨越过程边界时记录；否则将该原子行标记为不适用。
- 不确定性：保留秤分辨率、校准状态、去皮方法、适用时的水分基准以及批次核对差异。

###### 移出猪血制品地面残留物（`hygiene_output_pig_blood_residue`）

Pig blood product floor residue 在本过程中作为一项原子输出交换记录；其不得代替任何其他物料、载体、废物或排放。

- 选定流：Pig blood product floor residue
- 流属性/单位：Mass / kg
- 数量规则：记录该交换针对锁定批次跨越本过程边界的前景实测数量。
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每 1 kg 厂门处净合格可销售参考产品
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_material_waste_mass`
- 来源：`eu-pef-2021-2279`、`jrc-sa-bref-2024`、`codex-cxc-58-2005`
- UUID 状态：未解析；在精确双核核验前保持为空。
- 适用性：仅在 Pig blood product floor residue 针对单一锁定产品配方和处理顺序实际跨越过程边界时记录；否则将该原子行标记为不适用。
- 不确定性：保留秤分辨率、校准状态、去皮方法、适用时的水分基准以及批次核对差异。

###### 移出猪肝制品地面残留物（`hygiene_output_pork_liver_residue`）

Pork liver product floor residue 在本过程中作为一项原子输出交换记录；其不得代替任何其他物料、载体、废物或排放。

- 选定流：Pork liver product floor residue
- 流属性/单位：Mass / kg
- 数量规则：记录该交换针对锁定批次跨越本过程边界的前景实测数量。
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每 1 kg 厂门处净合格可销售参考产品
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_material_waste_mass`
- 来源：`eu-pef-2021-2279`、`jrc-sa-bref-2024`、`codex-cxc-58-2005`
- UUID 状态：未解析；在精确双核核验前保持为空。
- 适用性：仅在 Pork liver product floor residue 针对单一锁定产品配方和处理顺序实际跨越过程边界时记录；否则将该原子行标记为不适用。
- 不确定性：保留秤分辨率、校准状态、去皮方法、适用时的水分基准以及批次核对差异。

###### 移出鸡肉加朗汀地面残留物（`hygiene_output_chicken_galantine_residue`）

Chicken galantine floor residue 在本过程中作为一项原子输出交换记录；其不得代替任何其他物料、载体、废物或排放。

- 选定流：Chicken galantine floor residue
- 流属性/单位：Mass / kg
- 数量规则：记录该交换针对锁定批次跨越本过程边界的前景实测数量。
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每 1 kg 厂门处净合格可销售参考产品
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_material_waste_mass`
- 来源：`eu-pef-2021-2279`、`jrc-sa-bref-2024`、`codex-cxc-58-2005`
- UUID 状态：未解析；在精确双核核验前保持为空。
- 适用性：仅在 Chicken galantine floor residue 针对单一锁定产品配方和处理顺序实际跨越过程边界时记录；否则将该原子行标记为不适用。
- 不确定性：保留秤分辨率、校准状态、去皮方法、适用时的水分基准以及批次核对差异。

###### 移出废氢氧化钠清洗液（`hygiene_output_spent_caustic`）

Spent sodium hydroxide cleaning solution 在本过程中作为一项原子输出交换记录；其不得代替任何其他物料、载体、废物或排放。

- 选定流：Spent sodium hydroxide cleaning solution
- 流属性/单位：Volume / m3
- 数量规则：记录该交换针对锁定批次跨越本过程边界的前景实测数量。
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每 1 kg 厂门处净合格可销售参考产品
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_wastewater_volume`
- 来源：`eu-pef-2021-2279`、`jrc-sa-bref-2024`、`codex-cxc-58-2005`
- UUID 状态：未解析；在精确双核核验前保持为空。
- 适用性：仅在 Spent sodium hydroxide cleaning solution 针对单一锁定产品配方和处理顺序实际跨越过程边界时记录；否则将该原子行标记为不适用。
- 不确定性：保留仪表分辨率、校准状态、采样间隔、适用时的密度换算以及时间覆盖。

###### 移出废硝酸清洗液（`hygiene_output_spent_nitric`）

Spent nitric acid cleaning solution 在本过程中作为一项原子输出交换记录；其不得代替任何其他物料、载体、废物或排放。

- 选定流：Spent nitric acid cleaning solution
- 流属性/单位：Volume / m3
- 数量规则：记录该交换针对锁定批次跨越本过程边界的前景实测数量。
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每 1 kg 厂门处净合格可销售参考产品
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_wastewater_volume`
- 来源：`eu-pef-2021-2279`、`jrc-sa-bref-2024`、`codex-cxc-58-2005`
- UUID 状态：未解析；在精确双核核验前保持为空。
- 适用性：仅在 Spent nitric acid cleaning solution 针对单一锁定产品配方和处理顺序实际跨越过程边界时记录；否则将该原子行标记为不适用。
- 不确定性：保留仪表分辨率、校准状态、采样间隔、适用时的密度换算以及时间覆盖。

###### 移出废磷酸清洗液（`hygiene_output_spent_phosphoric`）

Spent phosphoric acid cleaning solution 在本过程中作为一项原子输出交换记录；其不得代替任何其他物料、载体、废物或排放。

- 选定流：Spent phosphoric acid cleaning solution
- 流属性/单位：Volume / m3
- 数量规则：记录该交换针对锁定批次跨越本过程边界的前景实测数量。
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每 1 kg 厂门处净合格可销售参考产品
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_wastewater_volume`
- 来源：`eu-pef-2021-2279`、`jrc-sa-bref-2024`、`codex-cxc-58-2005`
- UUID 状态：未解析；在精确双核核验前保持为空。
- 适用性：仅在 Spent phosphoric acid cleaning solution 针对单一锁定产品配方和处理顺序实际跨越过程边界时记录；否则将该原子行标记为不适用。
- 不确定性：保留仪表分辨率、校准状态、采样间隔、适用时的密度换算以及时间覆盖。

###### 移出废过氧乙酸消毒液（`hygiene_output_spent_peracetic`）

Spent peracetic acid sanitising solution 在本过程中作为一项原子输出交换记录；其不得代替任何其他物料、载体、废物或排放。

- 选定流：Spent peracetic acid sanitising solution
- 流属性/单位：Volume / m3
- 数量规则：记录该交换针对锁定批次跨越本过程边界的前景实测数量。
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每 1 kg 厂门处净合格可销售参考产品
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_wastewater_volume`
- 来源：`eu-pef-2021-2279`、`jrc-sa-bref-2024`、`codex-cxc-58-2005`
- UUID 状态：未解析；在精确双核核验前保持为空。
- 适用性：仅在 Spent peracetic acid sanitising solution 针对单一锁定产品配方和处理顺序实际跨越过程边界时记录；否则将该原子行标记为不适用。
- 不确定性：保留仪表分辨率、校准状态、采样间隔、适用时的密度换算以及时间覆盖。

###### 移出废次氯酸钠消毒液（`hygiene_output_spent_hypochlorite`）

Spent sodium hypochlorite sanitising solution 在本过程中作为一项原子输出交换记录；其不得代替任何其他物料、载体、废物或排放。

- 选定流：Spent sodium hypochlorite sanitising solution
- 流属性/单位：Volume / m3
- 数量规则：记录该交换针对锁定批次跨越本过程边界的前景实测数量。
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每 1 kg 厂门处净合格可销售参考产品
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_wastewater_volume`
- 来源：`eu-pef-2021-2279`、`jrc-sa-bref-2024`、`codex-cxc-58-2005`
- UUID 状态：未解析；在精确双核核验前保持为空。
- 适用性：仅在 Spent sodium hypochlorite sanitising solution 针对单一锁定产品配方和处理顺序实际跨越过程边界时记录；否则将该原子行标记为不适用。
- 不确定性：保留仪表分辨率、校准状态、采样间隔、适用时的密度换算以及时间覆盖。

##### 基本流

### 过程：场内供热（`onsite_heat_generation`）

用于内部供应蒸汽或热水的前景锅炉或加热器运行。仅在前景工厂内部产生蒸汽或热水时纳入。

#### 输入

##### 产品流

###### 使用天然气（`heat_input_natural_gas`）

Natural gas 在本过程中作为一项原子输入交换记录；其不得代替任何其他物料、载体、废物或排放。

- 选定流：Natural gas
- 流属性/单位：Mass / kg
- 数量规则：记录该交换针对锁定批次跨越本过程边界的前景实测数量。
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：技术特定（`technology_specific`）
- 归一化基准：每 1 kg 厂门处净合格可销售参考产品
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_fuel_inventory`
- 来源：`eu-pef-2021-2279`、`jrc-sa-bref-2024`
- UUID 状态：未解析；在精确双核核验前保持为空。
- 适用性：仅在 Natural gas 针对单一锁定产品配方和处理顺序实际跨越过程边界时记录；否则将该原子行标记为不适用。
- 不确定性：保留秤分辨率、校准状态、去皮方法、适用时的水分基准以及批次核对差异。

###### 使用柴油（`heat_input_diesel`）

Diesel fuel 在本过程中作为一项原子输入交换记录；其不得代替任何其他物料、载体、废物或排放。

- 选定流：Diesel fuel
- 流属性/单位：Mass / kg
- 数量规则：记录该交换针对锁定批次跨越本过程边界的前景实测数量。
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：技术特定（`technology_specific`）
- 归一化基准：每 1 kg 厂门处净合格可销售参考产品
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_fuel_inventory`
- 来源：`eu-pef-2021-2279`、`jrc-sa-bref-2024`
- UUID 状态：未解析；在精确双核核验前保持为空。
- 适用性：仅在 Diesel fuel 针对单一锁定产品配方和处理顺序实际跨越过程边界时记录；否则将该原子行标记为不适用。
- 不确定性：保留秤分辨率、校准状态、去皮方法、适用时的水分基准以及批次核对差异。

###### 使用液化石油气（`heat_input_lpg`）

Liquefied petroleum gas 在本过程中作为一项原子输入交换记录；其不得代替任何其他物料、载体、废物或排放。

- 选定流：Liquefied petroleum gas
- 流属性/单位：Mass / kg
- 数量规则：记录该交换针对锁定批次跨越本过程边界的前景实测数量。
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：技术特定（`technology_specific`）
- 归一化基准：每 1 kg 厂门处净合格可销售参考产品
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_fuel_inventory`
- 来源：`eu-pef-2021-2279`、`jrc-sa-bref-2024`
- UUID 状态：未解析；在精确双核核验前保持为空。
- 适用性：仅在 Liquefied petroleum gas 针对单一锁定产品配方和处理顺序实际跨越过程边界时记录；否则将该原子行标记为不适用。
- 不确定性：保留秤分辨率、校准状态、去皮方法、适用时的水分基准以及批次核对差异。

###### 使用中压电网电力（`heat_input_electricity`）

Grid electricity, medium voltage 在本过程中作为一项原子输入交换记录；其不得代替任何其他物料、载体、废物或排放。

- 选定流：Grid electricity, medium voltage
- 流属性/单位：Energy / kWh
- 数量规则：记录该交换针对锁定批次跨越本过程边界的前景实测数量。
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：技术特定（`technology_specific`）
- 归一化基准：每 1 kg 厂门处净合格可销售参考产品
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_stage_electricity`
- 来源：`eu-pef-2021-2279`、`jrc-sa-bref-2024`
- UUID 状态：未解析；在精确双核核验前保持为空。
- 适用性：仅在 Grid electricity, medium voltage 针对单一锁定产品配方和处理顺序实际跨越过程边界时记录；否则将该原子行标记为不适用。
- 不确定性：保留仪表分辨率、校准状态、计量覆盖、时间区间以及任何批次归属计算。

###### 使用锅炉给水（`heat_input_feedwater`）

Boiler feedwater 在本过程中作为一项原子输入交换记录；其不得代替任何其他物料、载体、废物或排放。

- 选定流：Boiler feedwater
- 流属性/单位：Mass / kg
- 数量规则：记录该交换针对锁定批次跨越本过程边界的前景实测数量。
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：技术特定（`technology_specific`）
- 归一化基准：每 1 kg 厂门处净合格可销售参考产品
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_process_water_mass`
- 来源：`eu-pef-2021-2279`、`jrc-sa-bref-2024`
- UUID 状态：未解析；在精确双核核验前保持为空。
- 适用性：仅在 Boiler feedwater 针对单一锁定产品配方和处理顺序实际跨越过程边界时记录；否则将该原子行标记为不适用。
- 不确定性：保留秤分辨率、校准状态、去皮方法、适用时的水分基准以及批次核对差异。

##### 废物流

##### 基本流

#### 输出

##### 产品流

###### 产出场内生成蒸汽（`heat_output_steam`）

Onsite-generated steam 在本过程中作为一项原子输出交换记录；其不得代替任何其他物料、载体、废物或排放。

- 选定流：Onsite-generated steam
- 流属性/单位：Energy / MJ
- 数量规则：记录该交换针对锁定批次跨越本过程边界的前景实测数量。
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：技术特定（`technology_specific`）
- 归一化基准：每个可归属于锁定产品批次的场内供热实测批次
- 基准类型：过程输出（`process_output`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_internal_heat_output`
- 来源：`eu-pef-2021-2279`、`jrc-sa-bref-2024`
- UUID 状态：未解析；在精确双核核验前保持为空。
- 适用性：仅在 Onsite-generated steam 针对单一锁定产品配方和处理顺序实际跨越过程边界时记录；否则将该原子行标记为不适用。
- 不确定性：保留仪表分辨率、校准状态、计量覆盖、时间区间以及任何批次归属计算。

###### 产出场内生成热水（`heat_output_hot_water`）

Onsite-generated hot water 在本过程中作为一项原子输出交换记录；其不得代替任何其他物料、载体、废物或排放。

- 选定流：Onsite-generated hot water
- 流属性/单位：Energy / MJ
- 数量规则：记录该交换针对锁定批次跨越本过程边界的前景实测数量。
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：技术特定（`technology_specific`）
- 归一化基准：每个可归属于锁定产品批次的场内供热实测批次
- 基准类型：过程输出（`process_output`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_internal_heat_output`
- 来源：`eu-pef-2021-2279`、`jrc-sa-bref-2024`
- UUID 状态：未解析；在精确双核核验前保持为空。
- 适用性：仅在 Onsite-generated hot water 针对单一锁定产品配方和处理顺序实际跨越过程边界时记录；否则将该原子行标记为不适用。
- 不确定性：保留仪表分辨率、校准状态、计量覆盖、时间区间以及任何批次归属计算。

##### 废物流

###### 移出锅炉排污废水（`heat_waste_blowdown`）

Boiler blowdown wastewater 在本过程中作为一项原子输出交换记录；其不得代替任何其他物料、载体、废物或排放。

- 选定流：Boiler blowdown wastewater
- 流属性/单位：Volume / m3
- 数量规则：记录该交换针对锁定批次跨越本过程边界的前景实测数量。
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：技术特定（`technology_specific`）
- 归一化基准：每 1 kg 厂门处净合格可销售参考产品
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_wastewater_volume`
- 来源：`eu-pef-2021-2279`、`jrc-sa-bref-2024`
- UUID 状态：未解析；在精确双核核验前保持为空。
- 适用性：仅在 Boiler blowdown wastewater 针对单一锁定产品配方和处理顺序实际跨越过程边界时记录；否则将该原子行标记为不适用。
- 不确定性：保留仪表分辨率、校准状态、采样间隔、适用时的密度换算以及时间覆盖。

###### 移出废离子交换树脂（`heat_waste_resin`）

Spent ion-exchange resin 在本过程中作为一项原子输出交换记录；其不得代替任何其他物料、载体、废物或排放。

- 选定流：Spent ion-exchange resin
- 流属性/单位：Mass / kg
- 数量规则：记录该交换针对锁定批次跨越本过程边界的前景实测数量。
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：技术特定（`technology_specific`）
- 归一化基准：每 1 kg 厂门处净合格可销售参考产品
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_material_waste_mass`
- 来源：`eu-pef-2021-2279`、`jrc-sa-bref-2024`
- UUID 状态：未解析；在精确双核核验前保持为空。
- 适用性：仅在 Spent ion-exchange resin 针对单一锁定产品配方和处理顺序实际跨越过程边界时记录；否则将该原子行标记为不适用。
- 不确定性：保留秤分辨率、校准状态、去皮方法、适用时的水分基准以及批次核对差异。

##### 基本流

###### 排放化石二氧化碳向空气排放（`heat_release_co2`）

Fossil carbon dioxide to air 在本过程中作为一项原子输出交换记录；其不得代替任何其他物料、载体、废物或排放。

- 选定流：Fossil carbon dioxide to air
- 流属性/单位：Mass / kg
- 数量规则：记录该交换针对锁定批次跨越本过程边界的前景实测数量。
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：技术特定（`technology_specific`）
- 归一化基准：每 1 kg 厂门处净合格可销售参考产品
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_direct_emission_measurement`
- 来源：`eu-pef-2021-2279`、`jrc-sa-bref-2024`
- UUID 状态：未解析；在精确双核核验前保持为空。
- 适用性：仅在 Fossil carbon dioxide to air 针对单一锁定产品配方和处理顺序实际跨越过程边界时记录；否则将该原子行标记为不适用。
- 不确定性：保留采样或质量平衡方法、检出限、时间代表性、换算记录和分析不确定性。

###### 排放氮氧化物（NOx）向空气排放（`heat_release_nox`）

Nitrogen oxides (NOx) to air 在本过程中作为一项原子输出交换记录；其不得代替任何其他物料、载体、废物或排放。

- 选定流：Nitrogen oxides (NOx) to air
- 流属性/单位：Mass / kg
- 数量规则：记录该交换针对锁定批次跨越本过程边界的前景实测数量。
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：技术特定（`technology_specific`）
- 归一化基准：每 1 kg 厂门处净合格可销售参考产品
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_direct_emission_measurement`
- 来源：`eu-pef-2021-2279`、`jrc-sa-bref-2024`
- UUID 状态：未解析；在精确双核核验前保持为空。
- 适用性：仅在 Nitrogen oxides (NOx) to air 针对单一锁定产品配方和处理顺序实际跨越过程边界时记录；否则将该原子行标记为不适用。
- 不确定性：保留采样或质量平衡方法、检出限、时间代表性、换算记录和分析不确定性。

###### 排放硫氧化物（SOx）向空气排放（`heat_release_sox`）

Sulfur oxides (SOx) to air 在本过程中作为一项原子输出交换记录；其不得代替任何其他物料、载体、废物或排放。

- 选定流：Sulfur oxides (SOx) to air
- 流属性/单位：Mass / kg
- 数量规则：记录该交换针对锁定批次跨越本过程边界的前景实测数量。
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：技术特定（`technology_specific`）
- 归一化基准：每 1 kg 厂门处净合格可销售参考产品
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_direct_emission_measurement`
- 来源：`eu-pef-2021-2279`、`jrc-sa-bref-2024`
- UUID 状态：未解析；在精确双核核验前保持为空。
- 适用性：仅在 Sulfur oxides (SOx) to air 针对单一锁定产品配方和处理顺序实际跨越过程边界时记录；否则将该原子行标记为不适用。
- 不确定性：保留采样或质量平衡方法、检出限、时间代表性、换算记录和分析不确定性。

###### 排放粒径不大于2.5微米颗粒物向空气排放（`heat_release_pm25`）

Particulate matter, ≤2.5 µm, to air 在本过程中作为一项原子输出交换记录；其不得代替任何其他物料、载体、废物或排放。

- 选定流：Particulate matter, ≤2.5 µm, to air
- 流属性/单位：Mass / kg
- 数量规则：记录该交换针对锁定批次跨越本过程边界的前景实测数量。
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：技术特定（`technology_specific`）
- 归一化基准：每 1 kg 厂门处净合格可销售参考产品
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_direct_emission_measurement`
- 来源：`eu-pef-2021-2279`、`jrc-sa-bref-2024`
- UUID 状态：未解析；在精确双核核验前保持为空。
- 适用性：仅在 Particulate matter, ≤2.5 µm, to air 针对单一锁定产品配方和处理顺序实际跨越过程边界时记录；否则将该原子行标记为不适用。
- 不确定性：保留采样或质量平衡方法、检出限、时间代表性、换算记录和分析不确定性。

###### 排放一氧化碳向空气排放（`heat_release_co`）

Carbon monoxide to air 在本过程中作为一项原子输出交换记录；其不得代替任何其他物料、载体、废物或排放。

- 选定流：Carbon monoxide to air
- 流属性/单位：Mass / kg
- 数量规则：记录该交换针对锁定批次跨越本过程边界的前景实测数量。
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：技术特定（`technology_specific`）
- 归一化基准：每 1 kg 厂门处净合格可销售参考产品
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_direct_emission_measurement`
- 来源：`eu-pef-2021-2279`、`jrc-sa-bref-2024`
- UUID 状态：未解析；在精确双核核验前保持为空。
- 适用性：仅在 Carbon monoxide to air 针对单一锁定产品配方和处理顺序实际跨越过程边界时记录；否则将该原子行标记为不适用。
- 不确定性：保留采样或质量平衡方法、检出限、时间代表性、换算记录和分析不确定性。

### 过程：场内废水处理（`onsite_wastewater_treatment`）

对两个已命名废水流进行前景物理、化学和生物处理。仅在废水于前景工厂边界内处理时纳入。

#### 输入

##### 产品流

###### 使用中压电网电力（`wwtp_input_electricity`）

Grid electricity, medium voltage 在本过程中作为一项原子输入交换记录；其不得代替任何其他物料、载体、废物或排放。

- 选定流：Grid electricity, medium voltage
- 流属性/单位：Energy / kWh
- 数量规则：记录该交换针对锁定批次跨越本过程边界的前景实测数量。
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：技术特定（`technology_specific`）
- 归一化基准：每 1 kg 厂门处净合格可销售参考产品
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_stage_electricity`
- 来源：`eu-pef-2021-2279`、`jrc-sa-bref-2024`
- UUID 状态：未解析；在精确双核核验前保持为空。
- 适用性：仅在 Grid electricity, medium voltage 针对单一锁定产品配方和处理顺序实际跨越过程边界时记录；否则将该原子行标记为不适用。
- 不确定性：保留仪表分辨率、校准状态、计量覆盖、时间区间以及任何批次归属计算。

###### 使用氯化铁（`wwtp_input_ferric_chloride`）

Ferric chloride 在本过程中作为一项原子输入交换记录；其不得代替任何其他物料、载体、废物或排放。

- 选定流：Ferric chloride
- 流属性/单位：Mass / kg
- 数量规则：记录该交换针对锁定批次跨越本过程边界的前景实测数量。
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：技术特定（`technology_specific`）
- 归一化基准：每 1 kg 厂门处净合格可销售参考产品
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_wwtp_chemical_mass`
- 来源：`eu-pef-2021-2279`、`jrc-sa-bref-2024`
- UUID 状态：未解析；在精确双核核验前保持为空。
- 适用性：仅在 Ferric chloride 针对单一锁定产品配方和处理顺序实际跨越过程边界时记录；否则将该原子行标记为不适用。
- 不确定性：保留秤分辨率、校准状态、去皮方法、适用时的水分基准以及批次核对差异。

###### 使用硫酸铝（`wwtp_input_aluminium_sulfate`）

Aluminium sulfate 在本过程中作为一项原子输入交换记录；其不得代替任何其他物料、载体、废物或排放。

- 选定流：Aluminium sulfate
- 流属性/单位：Mass / kg
- 数量规则：记录该交换针对锁定批次跨越本过程边界的前景实测数量。
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：技术特定（`technology_specific`）
- 归一化基准：每 1 kg 厂门处净合格可销售参考产品
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_wwtp_chemical_mass`
- 来源：`eu-pef-2021-2279`、`jrc-sa-bref-2024`
- UUID 状态：未解析；在精确双核核验前保持为空。
- 适用性：仅在 Aluminium sulfate 针对单一锁定产品配方和处理顺序实际跨越过程边界时记录；否则将该原子行标记为不适用。
- 不确定性：保留秤分辨率、校准状态、去皮方法、适用时的水分基准以及批次核对差异。

###### 使用聚丙烯酰胺絮凝剂（`wwtp_input_polyacrylamide`）

Polyacrylamide flocculant 在本过程中作为一项原子输入交换记录；其不得代替任何其他物料、载体、废物或排放。

- 选定流：Polyacrylamide flocculant
- 流属性/单位：Mass / kg
- 数量规则：记录该交换针对锁定批次跨越本过程边界的前景实测数量。
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：技术特定（`technology_specific`）
- 归一化基准：每 1 kg 厂门处净合格可销售参考产品
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_wwtp_chemical_mass`
- 来源：`eu-pef-2021-2279`、`jrc-sa-bref-2024`
- UUID 状态：未解析；在精确双核核验前保持为空。
- 适用性：仅在 Polyacrylamide flocculant 针对单一锁定产品配方和处理顺序实际跨越过程边界时记录；否则将该原子行标记为不适用。
- 不确定性：保留秤分辨率、校准状态、去皮方法、适用时的水分基准以及批次核对差异。

###### 使用氢氧化钠（`wwtp_input_sodium_hydroxide`）

Sodium hydroxide 在本过程中作为一项原子输入交换记录；其不得代替任何其他物料、载体、废物或排放。

- 选定流：Sodium hydroxide
- 流属性/单位：Mass / kg
- 数量规则：记录该交换针对锁定批次跨越本过程边界的前景实测数量。
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：技术特定（`technology_specific`）
- 归一化基准：每 1 kg 厂门处净合格可销售参考产品
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_wwtp_chemical_mass`
- 来源：`eu-pef-2021-2279`、`jrc-sa-bref-2024`
- UUID 状态：未解析；在精确双核核验前保持为空。
- 适用性：仅在 Sodium hydroxide 针对单一锁定产品配方和处理顺序实际跨越过程边界时记录；否则将该原子行标记为不适用。
- 不确定性：保留秤分辨率、校准状态、去皮方法、适用时的水分基准以及批次核对差异。

###### 使用氢氧化钙（`wwtp_input_calcium_hydroxide`）

Calcium hydroxide 在本过程中作为一项原子输入交换记录；其不得代替任何其他物料、载体、废物或排放。

- 选定流：Calcium hydroxide
- 流属性/单位：Mass / kg
- 数量规则：记录该交换针对锁定批次跨越本过程边界的前景实测数量。
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：技术特定（`technology_specific`）
- 归一化基准：每 1 kg 厂门处净合格可销售参考产品
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_wwtp_chemical_mass`
- 来源：`eu-pef-2021-2279`、`jrc-sa-bref-2024`
- UUID 状态：未解析；在精确双核核验前保持为空。
- 适用性：仅在 Calcium hydroxide 针对单一锁定产品配方和处理顺序实际跨越过程边界时记录；否则将该原子行标记为不适用。
- 不确定性：保留秤分辨率、校准状态、去皮方法、适用时的水分基准以及批次核对差异。

##### 废物流

###### 处理高浓度香肠加工清洗废水（`wwtp_input_high_strength`）

High-strength sausage-processing cleaning wastewater 在本过程中作为一项原子输入交换记录；其不得代替任何其他物料、载体、废物或排放。

- 选定流：High-strength sausage-processing cleaning wastewater
- 流属性/单位：Volume / m3
- 数量规则：记录该交换针对锁定批次跨越本过程边界的前景实测数量。
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每 1 kg 厂门处净合格可销售参考产品
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_wastewater_volume`
- 来源：`eu-pef-2021-2279`、`jrc-sa-bref-2024`
- UUID 状态：未解析；在精确双核核验前保持为空。
- 适用性：仅在 High-strength sausage-processing cleaning wastewater 针对单一锁定产品配方和处理顺序实际跨越过程边界时记录；否则将该原子行标记为不适用。
- 不确定性：保留仪表分辨率、校准状态、采样间隔、适用时的密度换算以及时间覆盖。

###### 处理低浓度末次漂洗废水（`wwtp_input_final_rinse`）

Low-strength final-rinse wastewater 在本过程中作为一项原子输入交换记录；其不得代替任何其他物料、载体、废物或排放。

- 选定流：Low-strength final-rinse wastewater
- 流属性/单位：Volume / m3
- 数量规则：记录该交换针对锁定批次跨越本过程边界的前景实测数量。
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每 1 kg 厂门处净合格可销售参考产品
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_wastewater_volume`
- 来源：`eu-pef-2021-2279`、`jrc-sa-bref-2024`
- UUID 状态：未解析；在精确双核核验前保持为空。
- 适用性：仅在 Low-strength final-rinse wastewater 针对单一锁定产品配方和处理顺序实际跨越过程边界时记录；否则将该原子行标记为不适用。
- 不确定性：保留仪表分辨率、校准状态、采样间隔、适用时的密度换算以及时间覆盖。

##### 基本流

#### 输出

##### 产品流

##### 废物流

###### 移出处理后香肠加工废水（`wwtp_output_treated_effluent`）

Treated sausage-processing wastewater 在本过程中作为一项原子输出交换记录；其不得代替任何其他物料、载体、废物或排放。

- 选定流：Treated sausage-processing wastewater
- 流属性/单位：Volume / m3
- 数量规则：记录该交换针对锁定批次跨越本过程边界的前景实测数量。
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：技术特定（`technology_specific`）
- 归一化基准：每 1 kg 厂门处净合格可销售参考产品
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_wastewater_volume`
- 来源：`eu-pef-2021-2279`、`jrc-sa-bref-2024`
- UUID 状态：未解析；在精确双核核验前保持为空。
- 适用性：仅在 Treated sausage-processing wastewater 针对单一锁定产品配方和处理顺序实际跨越过程边界时记录；否则将该原子行标记为不适用。
- 不确定性：保留仪表分辨率、校准状态、采样间隔、适用时的密度换算以及时间覆盖。

###### 移出溶气气浮污泥（`wwtp_output_daf_sludge`）

Dissolved-air-flotation sludge 在本过程中作为一项原子输出交换记录；其不得代替任何其他物料、载体、废物或排放。

- 选定流：Dissolved-air-flotation sludge
- 流属性/单位：Mass / kg
- 数量规则：记录该交换针对锁定批次跨越本过程边界的前景实测数量。
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：技术特定（`technology_specific`）
- 归一化基准：每 1 kg 厂门处净合格可销售参考产品
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_sludge_mass`
- 来源：`eu-pef-2021-2279`、`jrc-sa-bref-2024`
- UUID 状态：未解析；在精确双核核验前保持为空。
- 适用性：仅在 Dissolved-air-flotation sludge 针对单一锁定产品配方和处理顺序实际跨越过程边界时记录；否则将该原子行标记为不适用。
- 不确定性：保留秤分辨率、校准状态、去皮方法、适用时的水分基准以及批次核对差异。

###### 移出生物废水处理污泥（`wwtp_output_biological_sludge`）

Biological wastewater-treatment sludge 在本过程中作为一项原子输出交换记录；其不得代替任何其他物料、载体、废物或排放。

- 选定流：Biological wastewater-treatment sludge
- 流属性/单位：Mass / kg
- 数量规则：记录该交换针对锁定批次跨越本过程边界的前景实测数量。
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：技术特定（`technology_specific`）
- 归一化基准：每 1 kg 厂门处净合格可销售参考产品
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_sludge_mass`
- 来源：`eu-pef-2021-2279`、`jrc-sa-bref-2024`
- UUID 状态：未解析；在精确双核核验前保持为空。
- 适用性：仅在 Biological wastewater-treatment sludge 针对单一锁定产品配方和处理顺序实际跨越过程边界时记录；否则将该原子行标记为不适用。
- 不确定性：保留秤分辨率、校准状态、去皮方法、适用时的水分基准以及批次核对差异。

###### 移出废水格栅固体（`wwtp_output_screenings`）

Wastewater bar-screen solids 在本过程中作为一项原子输出交换记录；其不得代替任何其他物料、载体、废物或排放。

- 选定流：Wastewater bar-screen solids
- 流属性/单位：Mass / kg
- 数量规则：记录该交换针对锁定批次跨越本过程边界的前景实测数量。
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：技术特定（`technology_specific`）
- 归一化基准：每 1 kg 厂门处净合格可销售参考产品
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_material_waste_mass`
- 来源：`eu-pef-2021-2279`、`jrc-sa-bref-2024`
- UUID 状态：未解析；在精确双核核验前保持为空。
- 适用性：仅在 Wastewater bar-screen solids 针对单一锁定产品配方和处理顺序实际跨越过程边界时记录；否则将该原子行标记为不适用。
- 不确定性：保留秤分辨率、校准状态、去皮方法、适用时的水分基准以及批次核对差异。

###### 移出分离猪脂浮渣（`wwtp_output_pork_fat_scum`）

Separated pork-fat scum 在本过程中作为一项原子输出交换记录；其不得代替任何其他物料、载体、废物或排放。

- 选定流：Separated pork-fat scum
- 流属性/单位：Mass / kg
- 数量规则：记录该交换针对锁定批次跨越本过程边界的前景实测数量。
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：技术特定（`technology_specific`）
- 归一化基准：每 1 kg 厂门处净合格可销售参考产品
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_material_waste_mass`
- 来源：`eu-pef-2021-2279`、`jrc-sa-bref-2024`
- UUID 状态：未解析；在精确双核核验前保持为空。
- 适用性：仅在 Separated pork-fat scum 针对单一锁定产品配方和处理顺序实际跨越过程边界时记录；否则将该原子行标记为不适用。
- 不确定性：保留秤分辨率、校准状态、去皮方法、适用时的水分基准以及批次核对差异。

###### 移出分离牛脂浮渣（`wwtp_output_beef_fat_scum`）

Separated beef-fat scum 在本过程中作为一项原子输出交换记录；其不得代替任何其他物料、载体、废物或排放。

- 选定流：Separated beef-fat scum
- 流属性/单位：Mass / kg
- 数量规则：记录该交换针对锁定批次跨越本过程边界的前景实测数量。
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：技术特定（`technology_specific`）
- 归一化基准：每 1 kg 厂门处净合格可销售参考产品
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_material_waste_mass`
- 来源：`eu-pef-2021-2279`、`jrc-sa-bref-2024`
- UUID 状态：未解析；在精确双核核验前保持为空。
- 适用性：仅在 Separated beef-fat scum 针对单一锁定产品配方和处理顺序实际跨越过程边界时记录；否则将该原子行标记为不适用。
- 不确定性：保留秤分辨率、校准状态、去皮方法、适用时的水分基准以及批次核对差异。

###### 移出废活性炭（`wwtp_output_activated_carbon`）

Spent activated carbon 在本过程中作为一项原子输出交换记录；其不得代替任何其他物料、载体、废物或排放。

- 选定流：Spent activated carbon
- 流属性/单位：Mass / kg
- 数量规则：记录该交换针对锁定批次跨越本过程边界的前景实测数量。
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：技术特定（`technology_specific`）
- 归一化基准：每 1 kg 厂门处净合格可销售参考产品
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_material_waste_mass`
- 来源：`eu-pef-2021-2279`、`jrc-sa-bref-2024`
- UUID 状态：未解析；在精确双核核验前保持为空。
- 适用性：仅在 Spent activated carbon 针对单一锁定产品配方和处理顺序实际跨越过程边界时记录；否则将该原子行标记为不适用。
- 不确定性：保留秤分辨率、校准状态、去皮方法、适用时的水分基准以及批次核对差异。

##### 基本流

###### 排放化学需氧量向水体排放（`wwtp_release_cod`）

Chemical oxygen demand to water 在本过程中作为一项原子输出交换记录；其不得代替任何其他物料、载体、废物或排放。

- 选定流：Chemical oxygen demand to water
- 流属性/单位：Mass / kg
- 数量规则：仅依据所链接协议定义的前景记录计算可归属于该批次的数量。
- 数值来源模式：计算值（`calculated_value`）
- 适用范围：技术特定（`technology_specific`）
- 归一化基准：每 1 kg 厂门处净合格可销售参考产品
- 基准类型：参考流（`reference_flow`）
- 证据类型：由采集计算（`calculated_from_collection`）
- 采集协议：`cp_wastewater_pollutant_load`
- 来源：`eu-pef-2021-2279`、`jrc-sa-bref-2024`
- UUID 状态：未解析；在精确双核核验前保持为空。
- 适用性：仅在 Chemical oxygen demand to water 针对单一锁定产品配方和处理顺序实际跨越过程边界时记录；否则将该原子行标记为不适用。
- 不确定性：保留采样或质量平衡方法、检出限、时间代表性、换算记录和分析不确定性。

###### 排放五日生化需氧量向水体排放（`wwtp_release_bod5`）

Biochemical oxygen demand, 5-day, to water 在本过程中作为一项原子输出交换记录；其不得代替任何其他物料、载体、废物或排放。

- 选定流：Biochemical oxygen demand, 5-day, to water
- 流属性/单位：Mass / kg
- 数量规则：仅依据所链接协议定义的前景记录计算可归属于该批次的数量。
- 数值来源模式：计算值（`calculated_value`）
- 适用范围：技术特定（`technology_specific`）
- 归一化基准：每 1 kg 厂门处净合格可销售参考产品
- 基准类型：参考流（`reference_flow`）
- 证据类型：由采集计算（`calculated_from_collection`）
- 采集协议：`cp_wastewater_pollutant_load`
- 来源：`eu-pef-2021-2279`、`jrc-sa-bref-2024`
- UUID 状态：未解析；在精确双核核验前保持为空。
- 适用性：仅在 Biochemical oxygen demand, 5-day, to water 针对单一锁定产品配方和处理顺序实际跨越过程边界时记录；否则将该原子行标记为不适用。
- 不确定性：保留采样或质量平衡方法、检出限、时间代表性、换算记录和分析不确定性。

###### 排放总悬浮固体向水体排放（`wwtp_release_tss`）

Total suspended solids to water 在本过程中作为一项原子输出交换记录；其不得代替任何其他物料、载体、废物或排放。

- 选定流：Total suspended solids to water
- 流属性/单位：Mass / kg
- 数量规则：仅依据所链接协议定义的前景记录计算可归属于该批次的数量。
- 数值来源模式：计算值（`calculated_value`）
- 适用范围：技术特定（`technology_specific`）
- 归一化基准：每 1 kg 厂门处净合格可销售参考产品
- 基准类型：参考流（`reference_flow`）
- 证据类型：由采集计算（`calculated_from_collection`）
- 采集协议：`cp_wastewater_pollutant_load`
- 来源：`eu-pef-2021-2279`、`jrc-sa-bref-2024`
- UUID 状态：未解析；在精确双核核验前保持为空。
- 适用性：仅在 Total suspended solids to water 针对单一锁定产品配方和处理顺序实际跨越过程边界时记录；否则将该原子行标记为不适用。
- 不确定性：保留采样或质量平衡方法、检出限、时间代表性、换算记录和分析不确定性。

###### 排放铵态氮向水体排放（`wwtp_release_ammonium`）

Ammonium nitrogen to water 在本过程中作为一项原子输出交换记录；其不得代替任何其他物料、载体、废物或排放。

- 选定流：Ammonium nitrogen to water
- 流属性/单位：Mass / kg
- 数量规则：仅依据所链接协议定义的前景记录计算可归属于该批次的数量。
- 数值来源模式：计算值（`calculated_value`）
- 适用范围：技术特定（`technology_specific`）
- 归一化基准：每 1 kg 厂门处净合格可销售参考产品
- 基准类型：参考流（`reference_flow`）
- 证据类型：由采集计算（`calculated_from_collection`）
- 采集协议：`cp_wastewater_pollutant_load`
- 来源：`eu-pef-2021-2279`、`jrc-sa-bref-2024`
- UUID 状态：未解析；在精确双核核验前保持为空。
- 适用性：仅在 Ammonium nitrogen to water 针对单一锁定产品配方和处理顺序实际跨越过程边界时记录；否则将该原子行标记为不适用。
- 不确定性：保留采样或质量平衡方法、检出限、时间代表性、换算记录和分析不确定性。

###### 排放硝态氮向水体排放（`wwtp_release_nitrate`）

Nitrate nitrogen to water 在本过程中作为一项原子输出交换记录；其不得代替任何其他物料、载体、废物或排放。

- 选定流：Nitrate nitrogen to water
- 流属性/单位：Mass / kg
- 数量规则：仅依据所链接协议定义的前景记录计算可归属于该批次的数量。
- 数值来源模式：计算值（`calculated_value`）
- 适用范围：技术特定（`technology_specific`）
- 归一化基准：每 1 kg 厂门处净合格可销售参考产品
- 基准类型：参考流（`reference_flow`）
- 证据类型：由采集计算（`calculated_from_collection`）
- 采集协议：`cp_wastewater_pollutant_load`
- 来源：`eu-pef-2021-2279`、`jrc-sa-bref-2024`
- UUID 状态：未解析；在精确双核核验前保持为空。
- 适用性：仅在 Nitrate nitrogen to water 针对单一锁定产品配方和处理顺序实际跨越过程边界时记录；否则将该原子行标记为不适用。
- 不确定性：保留采样或质量平衡方法、检出限、时间代表性、换算记录和分析不确定性。

###### 排放磷酸盐磷向水体排放（`wwtp_release_phosphate`）

Phosphate phosphorus to water 在本过程中作为一项原子输出交换记录；其不得代替任何其他物料、载体、废物或排放。

- 选定流：Phosphate phosphorus to water
- 流属性/单位：Mass / kg
- 数量规则：仅依据所链接协议定义的前景记录计算可归属于该批次的数量。
- 数值来源模式：计算值（`calculated_value`）
- 适用范围：技术特定（`technology_specific`）
- 归一化基准：每 1 kg 厂门处净合格可销售参考产品
- 基准类型：参考流（`reference_flow`）
- 证据类型：由采集计算（`calculated_from_collection`）
- 采集协议：`cp_wastewater_pollutant_load`
- 来源：`eu-pef-2021-2279`、`jrc-sa-bref-2024`
- UUID 状态：未解析；在精确双核核验前保持为空。
- 适用性：仅在 Phosphate phosphorus to water 针对单一锁定产品配方和处理顺序实际跨越过程边界时记录；否则将该原子行标记为不适用。
- 不确定性：保留采样或质量平衡方法、检出限、时间代表性、换算记录和分析不确定性。

###### 排放氯化物向水体排放（`wwtp_release_chloride`）

Chloride to water 在本过程中作为一项原子输出交换记录；其不得代替任何其他物料、载体、废物或排放。

- 选定流：Chloride to water
- 流属性/单位：Mass / kg
- 数量规则：仅依据所链接协议定义的前景记录计算可归属于该批次的数量。
- 数值来源模式：计算值（`calculated_value`）
- 适用范围：技术特定（`technology_specific`）
- 归一化基准：每 1 kg 厂门处净合格可销售参考产品
- 基准类型：参考流（`reference_flow`）
- 证据类型：由采集计算（`calculated_from_collection`）
- 采集协议：`cp_wastewater_pollutant_load`
- 来源：`eu-pef-2021-2279`、`jrc-sa-bref-2024`
- UUID 状态：未解析；在精确双核核验前保持为空。
- 适用性：仅在 Chloride to water 针对单一锁定产品配方和处理顺序实际跨越过程边界时记录；否则将该原子行标记为不适用。
- 不确定性：保留采样或质量平衡方法、检出限、时间代表性、换算记录和分析不确定性。

###### 排放猪脂向水体排放（`wwtp_release_pork_fat`）

Pork fat to water 在本过程中作为一项原子输出交换记录；其不得代替任何其他物料、载体、废物或排放。

- 选定流：Pork fat to water
- 流属性/单位：Mass / kg
- 数量规则：仅依据所链接协议定义的前景记录计算可归属于该批次的数量。
- 数值来源模式：计算值（`calculated_value`）
- 适用范围：技术特定（`technology_specific`）
- 归一化基准：每 1 kg 厂门处净合格可销售参考产品
- 基准类型：参考流（`reference_flow`）
- 证据类型：由采集计算（`calculated_from_collection`）
- 采集协议：`cp_wastewater_pollutant_load`
- 来源：`eu-pef-2021-2279`、`jrc-sa-bref-2024`
- UUID 状态：未解析；在精确双核核验前保持为空。
- 适用性：仅在 Pork fat to water 针对单一锁定产品配方和处理顺序实际跨越过程边界时记录；否则将该原子行标记为不适用。
- 不确定性：保留采样或质量平衡方法、检出限、时间代表性、换算记录和分析不确定性。

###### 排放牛脂向水体排放（`wwtp_release_beef_fat`）

Beef fat to water 在本过程中作为一项原子输出交换记录；其不得代替任何其他物料、载体、废物或排放。

- 选定流：Beef fat to water
- 流属性/单位：Mass / kg
- 数量规则：仅依据所链接协议定义的前景记录计算可归属于该批次的数量。
- 数值来源模式：计算值（`calculated_value`）
- 适用范围：技术特定（`technology_specific`）
- 归一化基准：每 1 kg 厂门处净合格可销售参考产品
- 基准类型：参考流（`reference_flow`）
- 证据类型：由采集计算（`calculated_from_collection`）
- 采集协议：`cp_wastewater_pollutant_load`
- 来源：`eu-pef-2021-2279`、`jrc-sa-bref-2024`
- UUID 状态：未解析；在精确双核核验前保持为空。
- 适用性：仅在 Beef fat to water 针对单一锁定产品配方和处理顺序实际跨越过程边界时记录；否则将该原子行标记为不适用。
- 不确定性：保留采样或质量平衡方法、检出限、时间代表性、换算记录和分析不确定性。

###### 排放甲烷向空气排放（`wwtp_release_methane`）

Methane to air 在本过程中作为一项原子输出交换记录；其不得代替任何其他物料、载体、废物或排放。

- 选定流：Methane to air
- 流属性/单位：Mass / kg
- 数量规则：仅依据所链接协议定义的前景记录计算可归属于该批次的数量。
- 数值来源模式：计算值（`calculated_value`）
- 适用范围：技术特定（`technology_specific`）
- 归一化基准：每 1 kg 厂门处净合格可销售参考产品
- 基准类型：参考流（`reference_flow`）
- 证据类型：由采集计算（`calculated_from_collection`）
- 采集协议：`cp_wastewater_pollutant_load`
- 来源：`eu-pef-2021-2279`、`jrc-sa-bref-2024`
- UUID 状态：未解析；在精确双核核验前保持为空。
- 适用性：仅在 Methane to air 针对单一锁定产品配方和处理顺序实际跨越过程边界时记录；否则将该原子行标记为不适用。
- 不确定性：保留采样或质量平衡方法、检出限、时间代表性、换算记录和分析不确定性。

###### 排放氧化亚氮向空气排放（`wwtp_release_nitrous_oxide`）

Nitrous oxide to air 在本过程中作为一项原子输出交换记录；其不得代替任何其他物料、载体、废物或排放。

- 选定流：Nitrous oxide to air
- 流属性/单位：Mass / kg
- 数量规则：仅依据所链接协议定义的前景记录计算可归属于该批次的数量。
- 数值来源模式：计算值（`calculated_value`）
- 适用范围：技术特定（`technology_specific`）
- 归一化基准：每 1 kg 厂门处净合格可销售参考产品
- 基准类型：参考流（`reference_flow`）
- 证据类型：由采集计算（`calculated_from_collection`）
- 采集协议：`cp_wastewater_pollutant_load`
- 来源：`eu-pef-2021-2279`、`jrc-sa-bref-2024`
- UUID 状态：未解析；在精确双核核验前保持为空。
- 适用性：仅在 Nitrous oxide to air 针对单一锁定产品配方和处理顺序实际跨越过程边界时记录；否则将该原子行标记为不适用。
- 不确定性：保留采样或质量平衡方法、检出限、时间代表性、换算记录和分析不确定性。

###### 排放生物源二氧化碳向空气排放（`wwtp_release_biogenic_co2`）

Biogenic carbon dioxide to air 在本过程中作为一项原子输出交换记录；其不得代替任何其他物料、载体、废物或排放。

- 选定流：Biogenic carbon dioxide to air
- 流属性/单位：Mass / kg
- 数量规则：仅依据所链接协议定义的前景记录计算可归属于该批次的数量。
- 数值来源模式：计算值（`calculated_value`）
- 适用范围：技术特定（`technology_specific`）
- 归一化基准：每 1 kg 厂门处净合格可销售参考产品
- 基准类型：参考流（`reference_flow`）
- 证据类型：由采集计算（`calculated_from_collection`）
- 采集协议：`cp_wastewater_pollutant_load`
- 来源：`eu-pef-2021-2279`、`jrc-sa-bref-2024`
- UUID 状态：未解析；在精确双核核验前保持为空。
- 适用性：仅在 Biogenic carbon dioxide to air 针对单一锁定产品配方和处理顺序实际跨越过程边界时记录；否则将该原子行标记为不适用。
- 不确定性：保留采样或质量平衡方法、检出限、时间代表性、换算记录和分析不确定性。

###### 排放氨向空气排放（`wwtp_release_ammonia`）

Ammonia to air 在本过程中作为一项原子输出交换记录；其不得代替任何其他物料、载体、废物或排放。

- 选定流：Ammonia to air
- 流属性/单位：Mass / kg
- 数量规则：仅依据所链接协议定义的前景记录计算可归属于该批次的数量。
- 数值来源模式：计算值（`calculated_value`）
- 适用范围：技术特定（`technology_specific`）
- 归一化基准：每 1 kg 厂门处净合格可销售参考产品
- 基准类型：参考流（`reference_flow`）
- 证据类型：由采集计算（`calculated_from_collection`）
- 采集协议：`cp_wastewater_pollutant_load`
- 来源：`eu-pef-2021-2279`、`jrc-sa-bref-2024`
- UUID 状态：未解析；在精确双核核验前保持为空。
- 适用性：仅在 Ammonia to air 针对单一锁定产品配方和处理顺序实际跨越过程边界时记录；否则将该原子行标记为不适用。
- 不确定性：保留采样或质量平衡方法、检出限、时间代表性、换算记录和分析不确定性。

## 7. 分配与共产品处理

| rule_id | 适用对象 | 规则 | source_ids |
| --- | --- | --- | --- |
| `avoid_allocation` | 全部过程 | 尽可能利用批次特定配方、分表、生产时间、设备状态和废物记录避免分配。 | `eu-pef-2021-2279` |
| `recipe_partition` | 共享配方记录 | 依据锁定批次的实际配方和称量记录划分物料投入；不得使用类别平均配方。 | `eu-pef-2021-2279` |
| `utility_partition` | 共享公用工程 | 使用实测过程时间、计量区间、质量处理量或另一项有记录的因果驱动，划分共享电力、热量、制冷、清洗和废水记录。 | `eu-pef-2021-2279` |
| `physical_relation` | 多输出过程 | 当物理因果关系能解释资源使用或排放产生时采用该关系，并记录关系及计算。 | `eu-pef-2021-2279` |
| `mass_allocation` | 未解决的物理拆分 | 仅在没有更直接物理关系且所有输出质量采用同一生产批次基准时使用质量分配。 | `eu-pef-2021-2279` |
| `economic_residual` | 剩余多功能性 | 仅在物理关系无法表示功能时，将经济分配作为有记录的剩余方法；保留价格期间、地域和敏感性披露。 | `eu-pef-2021-2279` |
| `rework_once` | 内部返工料 | 不得向仍处于同一锁定批次质量平衡内的内部返工料再次分配负荷。 | `eu-pef-2021-2279` |
| `waste_no_credit` | 废物输出 | 没有位于本前景数据包之外且有独立证据的下游替代模型时，不得向废物流分配避免产品信用。 | `eu-pef-2021-2279` |
| `route_no_average` | 产品系列 | 不得把鲜、熟制、发酵、干燥、烟熏、冷藏、冷冻、肉、器官或血液路线平均为一个参考输出。 | `un-cpc-3-2025`、`eu-pef-2021-2279`、`codex-cxs-192-1995` |

## 8. 前景数据采集、计算与质量规则

### 数据采集协议

| protocol_id | process_id | flow_role | record_type | raw_fields | collection_method | unit | frequency | temporal_coverage | site_scope | aggregation_rule | quality_evidence |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| `cp_animal_material_mass` | formulation_material_receiving | 动物源配方投入 | 交付批次质量记录 | 供应商批次 id；物种；解剖物料；接收状态；毛重；皮重；接收质量；拒收质量 | 使用经校准接收秤并与供应商交付文件核对。 | kg | 每个交付批次 | 完整生产批次 | 所有动物源物料接收点 | 按精确物料身份汇总接收净质量，且仅归属于锁定批次。 | 秤校准、供应商规格、批次追溯和验收记录 |
| `cp_stage_electricity` | multiple | 阶段电力 | 分表区间记录 | 仪表 id；期初读数；期末读数；时间戳；过程状态；批次 id | 读取专用分表；一个仪表覆盖多个批次时，保留因果归属计算。 | kWh | 每批或每个计量区间 | 完整生产批次 | 全部纳入的前景阶段 | 计算读数差，并只归属明确服务锁定批次的区间。 | 仪表校准、区间日志和覆盖声明 |
| `cp_refrigerant_reconciliation` | multiple | 制冷剂补充与排放 | 制冷剂库存记录 | 制冷剂身份；期初库存；购入；补加；回收；转移；期末库存；设备 id；批次归属 | 使用库存和维修记录分别核对每种制冷剂。 | kg | 每次维修事件和报告批次 | 完整生产批次 | 锁定批次的全部适用前景计量、称量或采样点 | 分别计算 R717、R744 和 R290 的未回收排放；不得在不同制冷剂间净额处理。 | 维修发票、钢瓶称量和库存核对 |
| `cp_material_waste_mass` | multiple | 具体固体或产品废物 | 废物称量记录 | row_id；精确物料身份；毛重；皮重；去向；批次 id | 在储存或外运前分别称量每个已命名废物流。 | kg | 每个容器或批次 | 完整生产批次 | 锁定批次的全部适用前景计量、称量或采样点 | 按 row_id 和锁定批次汇总净质量；不得跨物料合并。 | 秤校准、废物联单和去向记录 |
| `cp_recipe_component_mass` | comminution_batching_mixing | 配方组分 | 批次配方记录 | 组分身份；供应商等级；批次 id；毛重；皮重；实际投料质量；生产批次 id | 对每种具体组分使用经校准投料秤或质量流量记录。 | kg | 每次投料 | 完整生产批次 | 锁定批次的全部适用前景计量、称量或采样点 | 按精确组分汇总实际投料质量，并与已批准锁定配方核对。 | 秤校准、配方版本和供应商规格 |
| `cp_process_utility_volume` | comminution_batching_mixing | 压缩空气 | 公用工程计量记录 | 仪表 id；期初读数；期末读数；压力基准；温度基准；批次 id | 读取专用公用工程仪表并保留标准状态换算输入。 | m3 | 每批或区间 | 完整生产批次 | 锁定批次的全部适用前景计量、称量或采样点 | 在一个已声明状态基准上计算读数差并归属于锁定批次。 | 仪表校准和状态换算记录 |
| `cp_intermediate_product_mass` | multiple | 具体中间产品 | 批次称量记录 | 精确中间产品名称；批次 id；毛重；皮重；净质量；处理状态 | 在已命名过程转移点称量每个具体中间产品。 | kg | 每次转移 | 完整生产批次 | 锁定批次的全部适用前景计量、称量或采样点 | 仅汇总一个锁定产品路线，并核对连续阶段间转移。 | 秤校准、批次流转单和路线记录 |
| `cp_process_water_mass` | multiple | 工艺水 | 水表或称量投料记录 | 水源；仪表 id 或秤 id；期初；期末；投料质量；批次 id | 将已命名工艺水与清洗水分开计量或称量。 | kg | 每批或区间 | 完整生产批次 | 锁定批次的全部适用前景计量、称量或采样点 | 按记录的密度基准计算净水质量并归属于锁定批次。 | 仪表或秤校准和水源记录 |
| `cp_wastewater_volume` | multiple | 具体废水流 | 流量计记录 | 流身份；仪表 id；期初；期末；时间戳；批次 id | 在与另一流混合前计量每个已命名废水流。 | m3 | 连续累计并进行批次核对 | 完整生产批次 | 锁定批次的全部适用前景计量、称量或采样点 | 计算读数差并将实测体积归属于锁定生产批次。 | 流量计校准、排水图和批次核对 |
| `cp_direct_emission_measurement` | multiple | 具体直接空气排放 | 烟道或作业区排放测量 | 污染物身份；采样点；采样时间；浓度；流量；检出限；运行状态；批次 id | 对一个已命名污染物采用经验证直接监测或采样。 | kg | 每个有效采样批次 | 生产批次中的代表性运行 | 锁定批次的全部适用前景计量、称量或采样点 | 在可归属运行时间内积分实测浓度和流量；不得用无引用因子替代。 | 实验室报告、方法 id、检出限和运行日志 |
| `cp_casing_mass` | portion_forming | 具体肠衣 | 肠衣领退记录 | 肠衣身份；物种或聚合物；批次 id；领用质量；退回质量；边角料质量；生产批次 id | 分别称量每种精确肠衣材料的领用、退回和修边。 | kg | 每个肠衣批次和生产批次 | 完整生产批次 | 锁定批次的全部适用前景计量、称量或采样点 | 领用质量减经核实退回量；边角料保留为独立废物行。 | 秤校准、肠衣规格和领退日志 |
| `cp_purchased_heat` | multiple | 外购蒸汽或外购热水 | 公用工程计量和发票记录 | 载体身份；仪表 id；质量或能量；入口状态；出口状态；时间戳；批次 id | 将外购蒸汽和外购热水作为不同载体计量。 | MJ | 每批或公用工程区间 | 完整生产批次 | 锁定批次的全部适用前景计量、称量或采样点 | 使用实测能量，或仅依据记录的状态数据计算焓；不得合并两个载体。 | 仪表校准、发票和状态记录 |
| `cp_internal_heat_output` | multiple | 场内蒸汽或场内热水 | 供热输出计量记录 | 载体身份；输出仪表 id；质量；温度；压力；焓基准；时间戳；批次 id | 在发生器出口和使用点分别计量场内蒸汽与场内热水。 | MJ | 每批或公用工程区间 | 完整生产批次 | 锁定批次的全部适用前景计量、称量或采样点 | 按载体核对发生器输出与过程使用；防止与外购热重复计数。 | 仪表校准、状态记录和热平衡核对 |
| `cp_fuel_inventory` | multiple | 具体燃料 | 储罐、质量流量或发票记录 | 燃料身份；期初库存；接收；期末库存；仪表读数；密度；批次 id | 分别核对天然气、柴油和 LPG；需要能量换算时保留供应商低位热值。 | kg | 每批或报告区间 | 完整生产批次 | 锁定批次的全部适用前景计量、称量或采样点 | 期初加接收减期末和经核实转移，仅归属于服务锁定批次的运行区间。 | 仪表或储罐校准、发票和供应商燃料规格 |
| `cp_packaging_material_mass` | packaging_cold_storage_release | 具体包装材料 | 包装领退记录 | 材料身份；供应商等级；批次 id；领用质量；退回质量；废料质量；生产批次 id | 分别称量每种包装材料；不得从包装总数量推断一种材料。 | kg | 每个包装批次和生产批次 | 完整生产批次 | 锁定批次的全部适用前景计量、称量或采样点 | 领用质量减经核实退回量；将废料与匹配的材料特定废物行核对。 | 秤校准、供应商规格和领退日志 |
| `cp_final_product_mass` | packaging_cold_storage_release | 一个具体最终产品 | 放行称量与质量记录 | 精确产品名称；动物与组织身份；配方 id；路线顺序；市场状态；毛重；皮重；包装质量；合格净质量；批次 id | 最终处理后称量合格可销售食品质量，不把包装质量计入。 | kg | 每个放行批次 | 完整生产批次 | 锁定批次的全部适用前景计量、称量或采样点 | 仅汇总一个锁定产品行的合格净产品；排除包装和全部不合格品。 | 秤校准、放行证书、产品规格和路线记录 |
| `cp_cleaning_water_mass` | hygiene_cleaning_sanitation | 清洗水 | 专用仪表记录 | 仪表 id；期初；期末；清洗事件 id；设备或区域；批次归属 | 将饮用级清洗水与配方水和蒸煮水分开计量。 | kg | 每次清洗事件 | 完整可归属清洗批次 | 锁定批次的全部适用前景计量、称量或采样点 | 计算读数差，只归属服务锁定生产批次的清洗事件。 | 仪表校准、卫生计划和事件日志 |
| `cp_cleaning_chemical_mass` | hygiene_cleaning_sanitation | 具体清洗化学品 | 化学品领用记录 | 化学品身份；供应浓度；批次 id；领用质量；退回质量；事件 id；生产批次归属 | 分别称量氢氧化钠、硝酸、磷酸、过氧乙酸和次氯酸钠。 | kg | 每次清洗事件 | 完整可归属清洗批次 | 锁定批次的全部适用前景计量、称量或采样点 | 精确化学品的领用质量减经核实退回量；保留供应浓度。 | 秤校准、安全数据表和化学品领用日志 |
| `cp_wwtp_chemical_mass` | onsite_wastewater_treatment | 具体废水处理化学品 | 化学品投加记录 | 化学品身份；供应浓度；期初库存；接收；期末库存；投加仪表；处理批次 id | 分别核对每种已命名处理化学品。 | kg | 每个处理批次 | 完整可归属处理批次 | 锁定批次的全部适用前景计量、称量或采样点 | 期初加接收减期末和经核实转移，并与投加记录核对。 | 秤或投加泵校准、发票和库存记录 |
| `cp_sludge_mass` | onsite_wastewater_treatment | 具体污泥 | 脱水污泥称量记录 | 污泥身份；毛重；皮重；干物质；去向；处理批次 id | 分别称量每种已命名污泥并保留实测干物质含量。 | kg | 每个容器或外运批次 | 完整可归属处理批次 | 锁定批次的全部适用前景计量、称量或采样点 | 按污泥身份汇总湿基净质量；披露干物质但除非需要不进行换算。 | 秤校准、干物质测试和外运联单 |
| `cp_wastewater_pollutant_load` | onsite_wastewater_treatment | 具体水体或空气污染物 | 流量与实验室记录 | 污染物身份；采样点；浓度；检出限；废水流量；适用时空气流量；时间区间；处理批次 id | 对每个已命名污染物采用经验证采样，并与相应实测流量配对。 | kg | 每个代表性采样区间 | 完整可归属处理批次 | 锁定批次的全部适用前景计量、称量或采样点 | 以浓度乘匹配流量计算负荷并在可归属批次内积分；每种污染物保持分开。 | 实验室认可、分析方法、检出限和流量计校准 |

### 计算规则

| rule_id | 适用对象 | 公式或规则 | 输入 | 输出 | source_ids |
| --- | --- | --- | --- | --- | --- |
| `normalize_to_reference` | 全部清单数量 | normalized_amount = batch_attributable_amount / net_conforming_product_mass | 可归属于批次的数量；净合格产品质量 | 每 1 kg 参考产品的数量 | `eu-pef-2021-2279` |
| `recipe_reconciliation` | 配方 | recipe_difference = accepted_animal_materials + charged_components - mixture_output - named_losses | 接收物料质量；组分投料；混合物输出；已命名损失 | 配方质量平衡差 | `eu-pef-2021-2279` |
| `forming_reconciliation` | 定量成形 | forming_difference = mixture_input + casing_input - formed_product_output - casing_trim - product_reject | 混合物质量；肠衣质量；成形输出；边角料；不合格品 | 成形质量平衡差 | `eu-pef-2021-2279` |
| `refrigerant_release` | 每种制冷剂 | release = opening_stock + purchases + additions - closing_stock - recovered_mass - verified_transfers | 一种化学品的制冷剂库存字段 | 未回收制冷剂排放 | `eu-pef-2021-2279` |
| `wastewater_pollutant_load` | 每种废水污染物 | pollutant_load = concentration × matching_wastewater_volume with documented unit conversion | 污染物浓度；匹配流量体积 | 污染物质量 | `eu-pef-2021-2279`、`jrc-sa-bref-2024` |
| `packaging_use` | 每种包装材料 | packaging_use = issued_mass - returned_unused_mass | 领用质量；退回未用质量 | 包装材料投入 | `eu-pef-2021-2279` |
| `packaging_scrap` | 每种包装材料 | packaging_scrap = trim_mass + damaged_mass + unrecovered_setup_mass | 边角料；破损材料；未回收开机损失 | 材料特定包装废物 | `eu-pef-2021-2279` |
| `fuel_reconciliation` | 每种燃料 | fuel_use = opening_stock + receipts - closing_stock - verified_transfers | 一种燃料的库存和计量记录 | 可归属于生产批次的燃料质量 | `eu-pef-2021-2279`、`jrc-sa-bref-2024` |
| `heat_reconciliation` | 蒸汽与热水 | heat_difference = measured_generator_output + purchased_heat - measured_process_heat_use - measured_distribution_loss | 载体特定的发生、购入、使用和损失记录 | 载体特定供热核对差 | `eu-pef-2021-2279`、`jrc-sa-bref-2024` |
| `yield` | 最终产品 | conforming_yield = net_conforming_product_mass / total_locked_recipe_input_mass | 净合格输出；锁定配方投入质量 | 路线特定合格收率 | `eu-pef-2021-2279` |

### 数据质量要求

| requirement_id | 适用对象 | 要求 | 证据 |
| --- | --- | --- | --- |
| `dq_product_identity` | 参考与最终输出 | 保留精确产品名称、动物物种、骨骼肌肉或已命名器官或血液身份、配方版本、肠衣或形状成形方法、顺序化处理路线和最终市场状态。 | 批准的产品规格和批次流转单 |
| `dq_lot_traceability` | 动物源与配方投入 | 保留供应商、批次、接收状态、验收决定以及每项具体投入与锁定批次之间的链接。 | 供应商证书、接收日志和批次谱系 |
| `dq_measurement` | 质量与公用工程记录 | 使用经校准设备并保留原始读数、皮重、单位、时间戳和操作员或自动记录身份。 | 校准证书和不可变原始记录 |
| `dq_treatment_parameters` | 腌制、发酵、干燥、烟熏和热处理 | 保留锁定路线适用的实际时间、温度、湿度、气流、烟熏施用和产品内部温度字段。 | 经验证的过程记录和控制图 |
| `dq_cold_chain` | 接收、冷却与储存 | 保留冷藏或冷冻物料与产品的连续或批次可解析温度记录和偏差。 | 温度记录器数据和偏差处置 |
| `dq_completeness` | 完整 LCI | 核算实际跨越边界的每项具体配方组分、公用工程载体、制冷剂、清洗化学品、包装材料、产品、不合格品、废物流、废水污染物和直接空气排放。 | 与过程图关联的逐行完整性清单 |
| `dq_mass_balance` | 物料过程 | 针对同一生产批次核对配方、成形、处理、包装、产品和废物质量；调查无法解释的差异。 | 签署的批次质量平衡工作表 |
| `dq_temporal` | 生产批次数据 | 使用来自同一生产批次的记录，或使用具有精确路线等同性且已披露的代表期间记录。 | 带时间戳的生产和公用工程记录 |
| `dq_specificity` | 共享记录 | 记录每个归属驱动，并证明其表示单一锁定产品而非工厂或 CPC 类别平均值。 | 分配工作表和计量图 |
| `dq_wastewater` | 废水与污染物 | 保留采样点、方法、检出限、匹配流量区间、处理状态和实验室认可信息。 | 实验室报告和流量计记录 |
| `dq_emissions` | 直接排放 | 保留污染物特定监测或采样方法、运行状态、检出限和时间代表性。 | 监测报告和运行日志 |
| `dq_no_defaults` | 全部定量行 | 不得用无引用的默认数量、范围或估算替代本候选 PCR 中缺失的前景数据。 | 标识缺失记录的数据缺口登记表 |
| `dq_source_transparency` | 方法规则 | 保留来源标识，并披露 CPC 范围、Codex 过程类别、JRC 过程结构或 PEF 建模规则的应用位置。 | 来源到规则的可追溯记录 |

## 9. 校验规则

| rule_id | 适用对象 | 规则 | source_ids |
| --- | --- | --- | --- |
| `val_identity` | 参考流 | 参考产品 UUID 必须为 `d4e41d5c-a905-4fb7-ad9d-8f442be1f833`，流属性 UUID 必须为 `93a60a56-a3c8-11da-a746-0800200b9a66`，单位组 UUID 必须为 `93a60a57-a4c8-11da-a746-0800200c9a66`，单位必须为 kg。 | `un-cpc-3-2025` |
| `val_single_route` | 数据集身份 | 拒绝未锁定一个具体产品形态、已命名动物及组织或血液配方、精确配方版本、顺序化处理路线和最终市场状态的数据包。 | `un-cpc-3-2025`、`eu-pef-2021-2279`、`codex-cxs-192-1995` |
| `val_scope` | 产品身份 | 拒绝完整餐食，以及任何未以肠衣或香肠形态供应的加朗汀、肉酱、pâté 或 rillettes 输出。 | `un-cpc-3-2025` |
| `val_reference_mass` | 参考数量 | 参考数量必须为 1 kg 净合格可食产品，且必须排除包装。 | `eu-pef-2021-2279` |
| `val_atomic_selected_flow` | 清单卡 | 拒绝任何将集合、选择器、备选清单、未指明配料、调味料、肠衣、载体、包装材料、废物、污染物或排放用作选定流的卡。 | `eu-pef-2021-2279` |
| `val_uuid_policy` | 清单身份 | 除非精确的 hybrid-search 和公开 state-100 直读证据同时确认相同原子语义，否则每个非参考 UUID 必须保持为空。 | `eu-pef-2021-2279` |
| `val_manifest_closure` | 清单身份 | 每个空清单 UUID 的 row_id 必须在 manifest 中恰有一项未解析记录，且候选流相同并具有具体拒绝原因。 | `eu-pef-2021-2279` |
| `val_process_map` | 过程清单 | 每个必需过程必须有一个详细章节；每个条件过程必须与锁定路线中相应已命名操作的实际发生完全一致。 | `eu-pef-2021-2279`、`codex-cxs-192-1995`、`codex-cxc-58-2005` |
| `val_recipe_completeness` | 配方 | 若任何实际肉、已命名器官、血液、脂肪、水、冰、盐、香辛料、添加剂、粘结剂、发酵剂或肠衣被隐藏在集合配方行中，则拒绝数据包。 | `eu-pef-2021-2279`、`codex-cxs-192-1995` |
| `val_casing_identity` | 定量成形 | 天然肠衣必须给出精确动物物种，人工肠衣必须给出精确聚合物；拒绝通用肠衣交换。 | `codex-cxs-192-1995` |
| `val_energy_split` | 公用工程 | 适用时要求为电网电力、外购蒸汽、外购热水、场内蒸汽、场内热水、天然气、柴油和 LPG 分别建行。 | `eu-pef-2021-2279`、`jrc-sa-bref-2024` |
| `val_heat_double_count` | 热量 | 拒绝针对同一热量同时计入外购热和其场内燃料发生负荷。 | `eu-pef-2021-2279` |
| `val_refrigerant_split` | 制冷 | 要求对实际使用的每种制冷剂分别核对补充量和排放量；拒绝通用制冷剂流。 | `eu-pef-2021-2279`、`jrc-sa-bref-2024` |
| `val_chemical_split` | 化学品 | 每种精确添加剂、腌制剂、清洗化学品、消毒剂和废水处理化学品必须各有一行。 | `eu-pef-2021-2279`、`codex-cxs-192-1995`、`codex-cxc-58-2005` |
| `val_packaging_split` | 包装 | 每种精确包装材料必须各有一行，发生废料时必须有匹配的材料特定废料行。 | `eu-pef-2021-2279` |
| `val_product_output` | 最终输出 | 只有一个具体最终产品输出行可承载归一化的 1 kg 参考数量；所有其他最终产品行必须不适用。 | `un-cpc-3-2025`、`eu-pef-2021-2279` |
| `val_waste_split` | 废物 | 实际发生的每项具体产品不合格物、肠衣边角料、包装废料、污泥、残留物和废水流必须分别建行。 | `eu-pef-2021-2279`、`jrc-sa-bref-2024` |
| `val_pollutant_split` | 排放 | 每种已命名水污染物和每种已命名空气排放必须分别建行；拒绝合并污染物或排放行。 | `eu-pef-2021-2279`、`jrc-sa-bref-2024` |
| `val_mass_balance` | 质量平衡 | 配方、成形、处理、最终产品、不合格品和废物记录必须针对同一生产批次核对，或披露并调查差异。 | `eu-pef-2021-2279` |
| `val_nonnegative` | 数量 | 拒绝负的质量、能量、体积、浓度或排放值。 | `eu-pef-2021-2279` |
| `val_foreground_modes` | 数量生成 | 清单数量只能使用 foreground_record 或 calculated_value；拒绝 fixed_value、modelled_estimate、reasoned_estimate 和无引用范围。 | `eu-pef-2021-2279` |
| `val_protocol_links` | 采集 | 每个 collected_record 或 calculated_from_collection 行必须引用一个已存在的采集协议。 | `eu-pef-2021-2279` |
| `val_source_whitelist` | 来源 | 来源 id 仅限 retained UN CPC 3.0 来源、JRC135916、Recommendation (EU) 2021/2279、CXC 58-2005 和 CXS 192-1995。 | `un-cpc-3-2025`、`jrc-sa-bref-2024`、`eu-pef-2021-2279`、`codex-cxc-58-2005`、`codex-cxs-192-1995` |
| `val_bilingual` | 翻译 | 英文和中文必须保持相同顺序的 process_id、row_id、direction、flow_type、Selected flow、受控 token、协议 id、来源 id 和规范性 rule_id。 | `eu-pef-2021-2279` |
| `val_temperature_records` | 处理后产品 | 热处理要求实际时间和温度记录；每项适用的调理步骤要求实际时间、温度、湿度或气流记录。 | `codex-cxc-58-2005`、`codex-cxs-192-1995` |
| `val_unlisted_variant` | 范围变体 | 不得为范围内未列明物种、器官、血液来源、配方组分、产品形态、包装、废物、污染物或排放使用集合回退行；须先新增精确原子行。 | `un-cpc-3-2025`、`eu-pef-2021-2279`、`codex-cxs-192-1995` |

## 10. 发布数据集画像

| 字段 | 值 |
| --- | --- |
| dataset_role | `secondary_dataset` 候选；仅在全部精确路线要求和校验规则满足后，才适合经审查后作为 `background_dataset` 使用。 |
| downstream_use | 用于同一具体产品形态、动物源配方、处理顺序、市场状态、地域、技术和期间的产品特定过程及生命周期模型构建。 |
| allowed_use | 仅在完整产品身份、配方、适用过程图、原子清单、分配、数据质量和未解析 UUID 披露均可用时，用于匹配的香肠或香肠类似产品。 |
| excluded_use | 不得用作 CPC 全类别平均值，不得跨动物物种、器官、血液来源、配方、肠衣系统、处理路线或市场状态做代理，也不得用于完整餐食和肠衣或香肠形态以外的相关产品。 |
| required_metadata | PCR id；CPC 21184；精确产品名称；动物物种和解剖物料身份；配方版本；批次 id 和日期；顺序化路线；肠衣或成形方法；处理控制；最终状态；净参考质量；包装组成；场址和地域；技术；分配方法；来源 id；UUID 解析状态。 |
| required_quality_disclosure | 仪表与秤覆盖；校准；配方和质量平衡差；条件过程适用性；冷链和处理记录；采样方法与检出限；共享资源归属；数据缺口；未解析 UUID 行；偏差和纠正措施。 |
| update_trigger | 新的产品形态、动物物种、器官、血液来源、配方版本、肠衣、处理技术、制冷剂、包装材料、废物路线、污染物、排放、场址配置、来源修订或经核验 Tiangong UUID。 |

## 11. 数据源

| 来源 id | 类型 | 参考资料 | 用途 |
| --- | --- | --- | --- |
| `un-cpc-3-2025` | `dataset` | 联合国统计司，《Central Product Classification Version 3.0》，保留的 2025-06-30 原始结构，代码 21184，https://unstats.un.org/unsd/classifications/Econ/cpc（检索于 2026-08-13）。 | CPC 21184 精确类别标题和语义范围边界，包括与完整餐食及非香肠形态相关产品的区分。 |
| `jrc-sa-bref-2024` | `official_guidance` | 欧盟委员会联合研究中心，《Best Available Techniques Reference Document for the Slaughterhouses, Animal By-products and/or Edible Co-products Industries》，JRC135916，EUR 31752 EN，DOI 10.2760/18199，https://publications.jrc.ec.europa.eu/repository/handle/JRC135916（检索于 2026-08-13）。 | 动物源物料处理、公用工程、制冷、清洗、废物、废水处理和已命名排放的过程分解；未引入默认数量。 |
| `eu-pef-2021-2279` | `official_guidance` | Commission Recommendation (EU) 2021/2279，环境足迹方法合并文本，https://eur-lex.europa.eu/eli/reco/2021/2279/2021-12-30/eng（检索于 2026-08-13）。 | 产品特定物料清单、公司特定制造数据、完整 LCI、分配、数据质量、报告和核验。 |
| `codex-cxc-58-2005` | `standard` | Codex Alimentarius，《Code of Hygienic Practice for Meat》，CXC 58-2005，https://www.fao.org/fao-who-codexalimentarius/sh-proxy/pl/?lnk=1&url=https%3A%2F%2Fworkspace.fao.org%2Fsites%2Fcodex%2FStandards%2FCXC+58-2005%2FCXC_058e.pdf（检索于 2026-08-13）。 | 肉制品过程控制、卫生、废水排放、温度控制、热处理参数记录、储存和批次核验结构；未引入默认数量。 |
| `codex-cxs-192-1995` | `standard` | Codex Alimentarius，《General Standard for Food Additives》，CXS 192-1995，食品类别说明 08.3 和 08.4，https://www.fao.org/fao-who-codexalimentarius/sh-proxy/en/?lnk=1&url=https%3A%2F%2Fworkspace.fao.org%2Fsites%2Fcodex%2FStandards%2FCXS+192-1995%2FCXS_192e.pdf（检索于 2026-08-13）。 | 非热处理、腌制、干燥、发酵、热处理和冷冻碎肉制品的官方全文分类，以及天然、胶原、纤维素和合成肠衣身份；未引入添加剂限值。 |
