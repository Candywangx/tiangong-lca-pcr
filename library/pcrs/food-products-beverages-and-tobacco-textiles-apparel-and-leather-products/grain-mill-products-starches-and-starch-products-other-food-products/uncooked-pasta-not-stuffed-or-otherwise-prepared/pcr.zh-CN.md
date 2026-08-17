---
pcr_id: pcr.food-products-beverages-and-tobacco-textiles-apparel-and-leather-products.grain-mill-products-starches-and-starch-products-other-food-products.uncooked-pasta-not-stuffed-or-otherwise-prepared
language: zh-CN
status: candidate
sync_with: pcr.en-US.md
---

# 未烹煮、未填馅或未以其他方式调制的面食

## 1. 范围与适用性

本 PCR 覆盖属于 CPC 3.0 代码 23710 的未烹煮、未填馅且未以其他方式调制的面食和面条产品的工厂生产。所覆盖产品可以是干制、半干制或其他已声明的未烹煮水分状态，主要粉质原料可以是小麦、稻米、其他谷物、豆类或其混合物。前景数据包应说明实际配方、成形路线、调湿状态、包装状态和报告关口。

填馅面食、已烹煮或预煮面食、带调味料或以其他方式调制的产品、完整菜肴、酱料，以及交付功能并非未烹煮面食产品的产品不在范围内。原料生产、消费者烹煮、分销和生命末期不属于默认前景制造数据集，但可在生命周期模型中作为上游或下游数据集连接。

天工流 `540fef24-1038-48b8-8ee1-8cc415df780a` 是经核验的 **semi-dried noodles** 产品流，在本类别中仅作为代表产品形态使用。它不是 CPC 23710 所有产品的通用 UUID。数据作者应声明实际产品形态；若存在与实际产品更匹配的真实天工流，应替换该代表 UUID。绝不能把该代表 UUID 静默用于干面食、新鲜未烹煮面食、蛋面、米粉或其他实质不同的产品形态。

## 2. 产品类别识别

| 字段 | 值 |
| --- | --- |
| canonical_pcr_id | pcr.food-products-beverages-and-tobacco-textiles-apparel-and-leather-products.grain-mill-products-starches-and-starch-products-other-food-products.uncooked-pasta-not-stuffed-or-otherwise-prepared |
| classification_refs | CPC 3.0: 23710 — Uncooked pasta, not stuffed or otherwise prepared |
| covered_products | 以未烹煮、未填馅且未另行调制状态交付的面食或面条；包括明确声明为干制、半干制、新鲜未烹煮或其他水分状态的产品，以及以小麦、稻米、其他谷物、豆类或混合原料制成的产品 |
| excluded_products | 填馅面食；已烹煮或预煮面食；带调味料或以其他方式调制的面食；完整菜肴；酱料；以及归入 CPC 23710 之外的古斯米或其他产品 |
| representative_product | 由于经核验的天工参考流仅指向 semi-dried noodles，半干面作为代表产品/物理形态；本类别范围仍宽于该代表流 |
| production_route | 原料接收与准备；面团或浆料制备；挤压、压片、切割或其他已声明方式成形；产品特定的调湿或干燥；检验；包装或散装放行 |
| market_state | 在声明的工厂门放行条件下交付的未烹煮产品，明确报告水分/调湿状态和包装状态 |

## 3. 参考流

| 字段 | 值 |
| --- | --- |
| What | 在声明的工厂门放行条件下交付的未烹煮、未填馅且未以其他方式调制的面食或面条 |
| How much | 1 kg 产品净质量，不含包装 |
| How well | 满足生产者放行规范，以及对所声明产品形态、配方、水分/调湿状态和包装状态适用的法律或客户要求 |
| How long or cycle | 足以代表所声明产品直至工厂门交接的一次生产活动或报告期；保质期作为元数据报告，不改变 1 kg 参考数量 |
| reference_flow_link | 1 kg 所声明的可销售未烹煮面食输出；只有在产品身份准确时才使用代表性 semi-dried noodles UUID，否则应选择更具体的真实产品流 |

| 字段 | 值 |
| --- | --- |
| 参考数量 | 1 kg 未烹煮面食产品净质量 |
| 参考产品流 | semi-dried noodles `540fef24-1038-48b8-8ee1-8cc415df780a` — 仅作代表；若实际产品形态有更具体匹配流则替换 |
| 参考流属性 | Mass `93a60a56-a3c8-11da-a746-0800200b9a66` |
| 参考单位组 | Units of mass `93a60a57-a4c8-11da-a746-0800200c9a66` |
| 参考单位 | kg |
| 必需限定信息 | 实际产品形态和天工产品流身份；主要粉质原料；配方及含蛋/不含蛋状态；成形技术；放行时水分或调湿状态；包装或散装状态；生产地理位置与设施/路线；工厂门报告点 |

构建前景数据包时，`必需限定信息` 中的每一项都应在数据集元数据、过程说明、参考流备注、产品说明或等效字段中声明。缺少限定信息时，参考流定义不完整。若所声明形态并非 semi-dried noodles，仍保留 UUID `540fef24-1038-48b8-8ee1-8cc415df780a` 且没有明确记录的身份匹配，应视为校验错误。

## 4. 计量与单位规则

| rule_id | 适用对象 | 必需流属性 | 必需单位 | 规则 |
| --- | --- | --- | --- | --- |
| `reference_mass` | 参考产品及按质量归一化的产品/中间产品行 | Mass `93a60a56-a3c8-11da-a746-0800200b9a66` | kg | 参考产品按产品净质量报告。包装质量单独列入清单，绝不计入 1 kg 参考数量。 |
| `mass_conversion` | 原料、中间产品、产品、废物和水分平衡的质量记录 | Mass `93a60a56-a3c8-11da-a746-0800200b9a66` | kg | 归一化前，使用有记录的单位换算把源记录转换为 kg；保留原始单位和换算证据。 |
| `conditioning_state` | 产品和中间产品质量值 | Mass `93a60a56-a3c8-11da-a746-0800200b9a66` | kg | 记录测量点和产品水分/调湿状态。若无有据的水分校正，不得比较或合并在实质不同调湿状态下测得的质量。 |
| `energy_units` | 电力和热能投入 | 与选定流相适配的 Energy | 电力用 kWh；燃料或交付热能用 MJ | 电力与热能分别记录，并说明所用热值或蒸汽/热量换算。 |

## 5. 系统边界

### 边界概化

| 字段 | 值 |
| --- | --- |
| declared_starting_condition | 在制造场址接收点验收的粉质原料、水、其他配方原料、公用工程和包装材料，以及所声明的配方、产品形态和初始水分状态 |
| starting_condition_role | 前景制造投入关口；上游生产负荷由独立且可追溯的数据集提供，不在面食制造过程中重复构建 |
| product_classification_scope | CPC 3.0 代码 23710 所覆盖的已声明未烹煮、未填馅产品形态；semi-dried noodles 流仅为代表，不是类别级身份依据 |
| recursive_input_rule | 若购入的同类别未烹煮面食或面条材料进入再加工，应按其实际进入状态作为技术系统产品投入记录一次，并关联其自身上游数据集；不得在本前景数据集中递归重建其制造 |
| upstream_dataset_requirement | 每项实质性原料、公用工程和包装投入应关联在地理、技术和时间上具有代表性的上游数据集，否则应披露为数据缺口 |
| disclosure | 声明产品形态、配方、水分/调湿状态、成形与调湿技术、包装状态、报告关口、纳入场址、分配方法、数据期，以及任何遗漏或未解析流 |

| rule_id | 适用对象 | 规则 | source_ids |
| --- | --- | --- | --- |
| `boundary_foreground_manufacturing` | 所有前景数据集 | 纳入原料接收/准备、面团或浆料制备、成形、产品特定的调湿、检验/返工核算，以及报告组织内部实施的包装或散装放行。 | `unafpa-dry-pasta-pefcr-2020` |
| `boundary_dry_route` | 干制或半干制路线 | 纳入实际调湿/干燥操作、电力、热能或燃料、水分去除、损失，以及所声明的放行水分状态。只有路线明确落入干面食证据范围时，才应用相应来源规则。 | `unafpa-dry-pasta-pefcr-2020` |
| `boundary_upstream_connections` | 原料、公用工程和包装生产 | 通过关联所采集前景物料清单的独立数据集表示上游生产和入厂服务；不得把未经核验的通用代理当作产品特定数据。 | `unafpa-dry-pasta-pefcr-2020` |
| `boundary_downstream_exclusion` | 默认前景产品数据集 | 本工厂门前景数据集不纳入分销、消费者储存/烹煮、包装生命末期和食品生命末期。仅在明确声明的下游生命周期模型中添加。 |  |
| `boundary_recursive_category_input` | 同类别购入面食或面条投入 | 按其实际进入状态记录购入产品并关联独立上游数据集，不得在前景过程中递归展开同一类别。 |  |

## 6. 过程清单结构

### 过程图

| process_id | 过程名称 | 纳入状态 | 纳入条件 | 建模角色 | 定量参考 |
| --- | --- | --- | --- | --- | --- |
| `dough_forming` | 原料准备、面团/浆料制备与成形 | required |  | 在保留产品特定配方与成形记录的情况下，把声明配方转化为已成形未烹煮中间产品 | kg 已成形未烹煮中间产品 |
| `conditioning_release` | 调湿、检验、包装与工厂门放行 | required |  | 把已成形中间产品转化为声明的水分/调湿和包装状态，并放行参考产品 | 1 kg 可销售未烹煮面食产品净质量 |

### 过程：原料准备、面团/浆料制备与成形（`dough_forming`）

#### 输入

##### 产品流

###### 主要粉质原料（`principal_farinaceous_input`）

每种主要面粉、粗粒粉、粉料、含淀粉材料或等效粉质原料应分别记录其材料身份、已知时的供应商/来源、批次、相关时的水分基准，以及实测质量。

- 选定流：产品特定粉质原料流；天工 UUID 未解析
- 流属性/单位：Mass / kg
- 数量规则：投入所声明产品生产活动的已验收原料实测质量
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：产品特定（`product_specific`）
- 归一化基准：每 kg 已成形未烹煮中间产品
- 基准类型：过程输出（`process_output`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_ingredient_bom`
- 来源：`unafpa-dry-pasta-pefcr-2020`

###### 工艺用水（`process_water_input`）

记录有意加入面团/浆料或直接作为配方投入的水。未进入产品、但跨越选定过程边界的清洗水应另行记录。

- 选定流：场址特定供水流；天工 UUID 未解析
- 流属性/单位：Mass / kg
- 数量规则：计量或按批次配方加入所声明产品生产活动的水量
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：产品特定（`product_specific`）
- 归一化基准：每 kg 已成形未烹煮中间产品
- 基准类型：过程输出（`process_output`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_process_water`
- 来源：`unafpa-dry-pasta-pefcr-2020`

###### 其他配方原料（`other_recipe_inputs`）

若使用蛋或蛋制品、盐、蔬菜、香辛料、加工助剂及其他有意加入的原料，应按产品特定流分别记录。不得根据代表性 semi-dried noodles 流推断某种原料不存在。

- 选定流：产品特定配方原料流；天工 UUID 未解析
- 流属性/单位：Mass / kg
- 数量规则：投入所声明产品生产活动的每种原料已验收实测质量
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：产品特定（`product_specific`）
- 归一化基准：每 kg 已成形未烹煮中间产品
- 基准类型：过程输出（`process_output`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_ingredient_bom`
- 来源：`unafpa-dry-pasta-pefcr-2020`

###### 面团制备与成形用电（`dough_forming_electricity`）

记录配料、混合/揉制、挤压、压片、切割和直接归属辅助设备的用电。共享用电只能按已声明的分配规则分配。

- 选定流：场址及期间特定电力供应流；天工 UUID 未解析
- 流属性/单位：Energy / kWh
- 数量规则：分表计量用电，或设施总表用电中有据分配给所声明生产活动的用电
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每 kg 已成形未烹煮中间产品
- 基准类型：过程输出（`process_output`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_dough_forming_energy`
- 来源：`unafpa-dry-pasta-pefcr-2020`

##### 废物流

##### 基本流

#### 输出

##### 产品流

###### 已成形未烹煮面食中间产品（`formed_pasta_intermediate`）

记录转入调湿/放行过程的已成形产品实测质量和调湿状态。它是内部中间产品，不得替代最终参考产品。

- 选定流：产品特定已成形未烹煮面食中间产品；天工 UUID 未解析
- 流属性/单位：Mass / kg
- 数量规则：从成形工序转出的已验收中间产品实测质量
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：产品特定（`product_specific`）
- 归一化基准：每 kg 已成形未烹煮中间产品
- 基准类型：过程输出（`process_output`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_intermediate_output`
- 来源：

##### 废物流

###### 准备与成形损失（`dough_forming_losses`）

按实际处理路线记录作为废物离开过程的洒漏、被拒面团、边角料和其他材料。若材料在过程输出测量前返回内部循环，应作为内部循环记录，不得重复计为废物。

- 选定流：处理路线特定的食品制造废物流；天工 UUID 未解析
- 流属性/单位：Mass / kg
- 数量规则：扣除有记录内部返回后的、按处理路线计量的废物质量
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每 kg 已成形未烹煮中间产品
- 基准类型：过程输出（`process_output`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_manufacturing_waste`
- 来源：`unafpa-dry-pasta-pefcr-2020`

##### 基本流

### 过程：调湿、检验、包装与工厂门放行（`conditioning_release`）

#### 输入

##### 产品流

###### 已成形未烹煮面食投入（`formed_pasta_input`）

沿用上一过程输出，不改变其转移点的实测质量和已声明调湿状态。

- 选定流：产品特定已成形未烹煮面食中间产品；天工 UUID 未解析
- 流属性/单位：Mass / kg
- 数量规则：调湿/放行过程接收的已验收中间产品实测质量
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：产品特定（`product_specific`）
- 归一化基准：每 1 kg 可销售未烹煮面食产品净输出
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_intermediate_output`
- 来源：

###### 调湿与放行用电（`conditioning_electricity`）

记录实际发生的干燥或水分调节、输送、冷却、检验和包装/放行设备用电，并声明所纳入的操作。

- 选定流：场址及期间特定电力供应流；天工 UUID 未解析
- 流属性/单位：Energy / kWh
- 数量规则：分表计量用电，或设施总表用电中有据分配给所声明产品的用电
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每 1 kg 可销售未烹煮面食产品净输出
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_conditioning_energy`
- 来源：`unafpa-dry-pasta-pefcr-2020`

###### 热能或燃料（`conditioning_thermal_energy`）

记录干燥或调湿使用的每种燃料、蒸汽或交付热量。若所声明路线不使用热能，应记录不适用及其依据，而不是直接假设为零。

- 选定流：场址及技术特定的燃料、蒸汽或热量流；天工 UUID 未解析
- 流属性/单位：Energy / MJ
- 数量规则：实测燃料或交付热能，并记录从源表单位到 MJ 的换算
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：技术特定（`technology_specific`）
- 归一化基准：每 1 kg 可销售未烹煮面食产品净输出
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_conditioning_energy`
- 来源：`unafpa-dry-pasta-pefcr-2020`

###### 初级及组合包装材料（`packaging_materials`）

按材料、质量和包装配置记录每种包装材料与组件。散装放行时，应声明该状态；只有跨越报告关口的可重复使用运输包装才计入。

- 选定流：材料特定包装产品流；天工 UUID 未解析
- 流属性/单位：Mass / kg
- 数量规则：所声明输出消耗的实测包装材料，或经采购与库存核对的包装材料
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：产品特定（`product_specific`）
- 归一化基准：每 1 kg 可销售未烹煮面食产品净输出
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_packaging_bom`
- 来源：`unafpa-dry-pasta-pefcr-2020`

##### 废物流

##### 基本流

#### 输出

##### 产品流

###### 所声明未烹煮面食参考产品（`reference_uncooked_pasta`）

按声明的水分/调湿和包装状态记录可销售输出。仅当实际产品身份确为 semi-dried noodles 时选择该流；否则应替换为更具体且已核验的天工流，并保持 Mass/kg 支持链。

- 选定流：semi-dried noodles `540fef24-1038-48b8-8ee1-8cc415df780a` — 仅作代表，且以实际身份匹配为使用条件
- 流属性/单位：Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- 数量规则：1 kg 所声明可销售未烹煮面食产品净输出，不含包装质量
- 数值来源模式：固定值（`fixed_value`）
- 适用范围：产品特定（`product_specific`）
- 归一化基准：1 kg 所声明未烹煮面食参考产品净质量
- 基准类型：参考流（`reference_flow`）
- 证据类型：身份引用（`identity_reference`）
- 采集协议：`cp_product_identity_output`
- 来源：

##### 废物流

###### 调湿与产品损失（`conditioning_product_losses`）

按实际处理路线记录作为废物离开前景系统的拒收、破碎、不合格或其他损失面食。不得把通用干面食损失默认值用于半干、新鲜或其他产品形态。

- 选定流：处理路线特定的食品制造废物流；天工 UUID 未解析
- 流属性/单位：Mass / kg
- 数量规则：扣除有记录内部返回后的、按处理路线计量的废物质量
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：产品特定（`product_specific`）
- 归一化基准：每 1 kg 可销售未烹煮面食产品净输出
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_conditioning_waste`
- 来源：`unafpa-dry-pasta-pefcr-2020`

###### 包装损失（`packaging_losses`）

按材料和实际处理路线分别记录离开前景系统的包装边角、废包和损坏组件。

- 选定流：材料与处理路线特定的包装废物流；天工 UUID 未解析
- 流属性/单位：Mass / kg
- 数量规则：按材料和处理路线实测的包装废物质量
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每 1 kg 可销售未烹煮面食产品净输出
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_packaging_bom`
- 来源：`unafpa-dry-pasta-pefcr-2020`

##### 基本流

###### 释放到空气的水分（`moisture_to_air`）

对于干燥或水分调节路线，在扣除其他实测损失后，根据实测质量和水分记录计算释放到空气的水。在激活前选择并核验适当的基本流 UUID。

- 选定流：适合清单情境的水到空气基本流；天工 UUID 未解析
- 流属性/单位：Mass / kg
- 数量规则：按 `calculate_conditioning_moisture_release` 计算；未发生可测水分调节步骤时不适用
- 数值来源模式：计算值（`calculated_value`）
- 适用范围：产品特定（`product_specific`）
- 归一化基准：每 1 kg 可销售未烹煮面食产品净输出
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集数据计算（`calculated_from_collection`）
- 采集协议：`cp_conditioning_mass_moisture`
- 来源：`unafpa-dry-pasta-pefcr-2020`

## 7. 分配与共产品处理

| rule_id | 适用对象 | 规则 | source_ids |
| --- | --- | --- | --- |
| `allocation_avoid_by_subdivision` | 共享或多输出前景操作 | 首先通过分表计量或细分原料准备、成形、调湿和包装操作，并采集产品特定投入与产出，避免分配。 | `unafpa-dry-pasta-pefcr-2020` |
| `allocation_physical_mass` | 无法细分的共享制造负荷 | 只有当质量能表示基础物理关系时，才按合格产品输出质量分配共享制造投入和产出；披露产品、期间、分母和计算。 | `unafpa-dry-pasta-pefcr-2020` |
| `allocation_scrap_as_waste` | 离开场址的面食边角和不合格产品 | 除非可审计记录证明其为有价值共产品，否则按实际处理路线作为废物处理。不得对无记录的内部返工或避免生产计入抵扣。 | `unafpa-dry-pasta-pefcr-2020` |
| `allocation_nonphysical_exception` | 质量不能代表物理关系的有价值共产品 | 不得默认采用质量分配。记录物理关系评估；只有在具有产品特定证据和明确敏感性披露时，才使用经评审的替代方法。 |  |

## 8. 前景数据采集、计算与质量规则

### 数据采集协议

| protocol_id | process_id | flow_role | record_type | raw_fields | collection_method | unit | frequency | temporal_coverage | site_scope | aggregation_rule | quality_evidence |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| `cp_ingredient_bom` | `dough_forming` | 主要及其他配方原料 | 批次领料、配方、供应商和库存记录 | 原料身份；已知时的供应商与来源；批次；验收质量；源单位；相关时的水分基准；产品代码；生产活动 | 用接收与库存记录核对批准配方和批次领料 | kg 及原始源单位 | 每批，并在报告期核对 | 完整声明报告期；年度干面食数据集使用连续 12 个月，其他形态则论证具有代表性的生产活动/季节 | 每个纳入制造场址和生产线 | 按原料与产品汇总验收质量；排除无关产品；用 `normalize_dough_forming_totals` 归一化 | 经校准秤具；批次可追溯性；配方批准；库存核对；有记录的换算 |
| `cp_process_water` | `dough_forming` | 配方及直接工艺用水 | 批次加水、流量计或配方记录 | 起止读数或投加量；水源；操作；产品代码；批次；时间戳；源单位 | 读取专用计量表或经验证投加系统；否则以配方剂量和生产活动次数核对 | kg，或以有记录密度换算的 L | 每批或连续计量区间 | 与产品输出相同期间 | 每条纳入生产线；共享计量表需声明分配 | 汇总归属于声明产品的用水，并用 `normalize_dough_forming_totals` 归一化 | 仪表校准；投加系统检查；换算记录；共享计量核对 |
| `cp_dough_forming_energy` | `dough_forming` | 混合、揉制、挤压/压片/切割用电 | 分表或设施总表记录及设备运行日志 | 仪表读数；设备/生产线；时间戳；产品代码；运行时间；分配驱动；kWh | 优先使用生产线分表；否则按第 7 节分配经核对的设施用电 | kWh | 计量区间及每个报告期 | 与产品输出相同期间 | 每条纳入生产线和直接辅助设备 | 汇总直接用电及有据分配份额；用 `normalize_dough_forming_totals` 归一化 | 仪表校准；公用事业账单核对；分配工作表；停机与无关负荷排除 |
| `cp_intermediate_output` | `dough_forming` | 已成形未烹煮中间产品转移 | 生产与转移记录 | 产品代码；批次；质量；测量点；水分/调湿状态；去向；时间戳 | 在转移点称量已验收中间产品，或核对经验证的连续质量测量 | kg | 每批或每班 | 与投入及能源记录相同期间 | 每条纳入生产线 | 按产品和状态汇总已验收转移质量 | 秤具校准；批次核对；状态定义；拒收质量分离 |
| `cp_conditioning_energy` | `conditioning_release` | 电力、燃料、蒸汽或交付热量 | 公用工程仪表、燃料发票、锅炉/蒸汽表和设备日志 | 能源载体；仪表读数或数量；源单位；热值或换算；设备/生产线；产品代码；时间戳；分配驱动 | 优先使用生产线计量；把能源载体总量与发票核对，并记录每项换算 | 电力 kWh；换算后的燃料或热量 MJ | 计量区间并在报告期核对 | 与放行产品相同期间；年度干面食数据集使用连续 12 个月，另有论证除外 | 每条纳入调湿、检验和放行生产线 | 按能源载体与操作汇总；按第 7 节分配共享使用；用 `normalize_conditioning_totals` 归一化 | 仪表校准；发票核对；换算来源；分配工作表；设备范围 |
| `cp_packaging_bom` | `conditioning_release` | 包装投入与包装损失 | 包装规范、采购/库存、生产线领用和废物记录 | 组件身份；材料；单位质量；消耗数量；退库；废物质量；处理路线；产品代码；包装配置 | 用包装规范和生产线领用核对已包装输出及材料特定废物 | kg 和组件数量 | 每次包装生产活动并在期间核对 | 与已包装输出相同期间 | 每条纳入包装线；散装放行单独声明 | 包装消耗量等于期初库存加收货减期末/退回库存；把产品包装与废物分开 | 经核验组件质量；库存核对；包装规范；废物单据 |
| `cp_manufacturing_waste` | `dough_forming` | 按路线区分的面食和原料损失 | 废物称量、生产拒收、返工和处理记录 | 材料/产品；质量；原因；过程；内部返回标志；处理路线；承运人/记录；时间戳 | 称量或质量平衡各废物流；核对内部返回以免作为废物输出重复计数 | kg | 每批/每班及每次废物转移 | 与产品输出相同期间 | 每个纳入过程和场址 | 按处理路线汇总离开前景系统的材料；排除有记录内部返回 | 秤具校准；拒收日志；废物转移记录；处理证据；质量平衡核对 |
| `cp_conditioning_waste` | `conditioning_release` | 按路线区分的调湿产品损失 | 成品拒收、返工、废物称量和处理记录 | 产品；放行水分/调湿状态；质量；原因；内部返回标志；处理路线；承运人/记录；时间戳 | 称量每项调湿/放行损失流，并用成品记录核对内部返回 | kg | 每批/每班及每次废物转移 | 与放行产品输出相同期间 | 每条纳入调湿/放行生产线和场址 | 按处理路线汇总离开前景系统的产品；排除有记录内部返回 | 秤具校准；放行/拒收日志；废物转移记录；处理证据；成品质量平衡核对 |
| `cp_conditioning_mass_moisture` | `conditioning_release` | 中间产品投入、放行输出、水分状态与水分损失 | 转移称量、成品称量、水分测试和其他损失记录 | 投入质量与水分；输出质量与水分；取样方法；批次；其他实测废物/损失；时间戳 | 对同一生产活动配对质量测量和代表性水分测试；仅在核对其他损失后计算 | kg 和按声明基准表示的水分分数 | 每种产品/生产活动；按声明控制频率取样水分 | 与输出相同生产活动和报告期 | 每条纳入调湿线及产品形态 | 应用 `calculate_conditioning_moisture_release`；只汇总同类产品和调湿状态 | 秤具与水分方法校准；样品可追溯性；配对批次记录；有记录的水分基准 |
| `cp_product_identity_output` | `conditioning_release` | 所声明参考产品身份与可销售净输出 | 产品主数据、放行规范、批次放行和成品记录 | 实际产品名称/形态；天工流 UUID；CPC；配方；含蛋状态；成形路线；水分/调湿状态；包装状态；净质量；场址；报告关口；放行状态 | 对照产品主数据和完整天工流回读核验产品身份；只称量已放行合格产品净质量 | kg | 每个放行批次，并在期间核对 | 完整声明报告期 | 每个纳入场址、生产线和产品变体 | 只有必需限定信息完全相同才汇总合格净输出；不得聚合不匹配的流身份 | 批准产品主数据；放行证明；秤具校准；天工身份依据；限定信息完整性复核 |

### 计算规则

| rule_id | Applies to | Formula or rule | Inputs | Output | source_ids |
| --- | --- | --- | --- | --- | --- |
| `normalize_dough_forming_totals` | 面团/成形投入与产出行 | 每项经核对的生产活动或期间总量，除以同一产品、生产线和调湿状态的已验收成形中间产品质量。 | 经核对的行总量；已验收成形中间产品质量；产品/生产线/状态键 | 每 kg 已成形未烹煮中间产品的行数量 | `unafpa-dry-pasta-pefcr-2020` |
| `normalize_conditioning_totals` | 调湿、包装、损失与放行行 | 每项经核对的产品特定总量，除以合格放行产品净质量，不含包装质量。 | 经核对的行总量；合格放行产品净质量；限定信息键 | 每 1 kg 参考产品的行数量 | `unafpa-dry-pasta-pefcr-2020` |
| `calculate_conditioning_moisture_release` | 干燥或水分调节的水分释放 | 释放到空气的水分 = 已成形中间产品投入质量 − 放行产品净质量 − 实测产品/废物输出 − 离开调湿过程的其他有记录质量；结果为负或无法解释时无效。 | 配对中间产品投入质量；放行产品质量；实测废物/损失质量；其他有记录质量输出；水分状态记录 | 每参考流的计算候选水到空气流 kg | `unafpa-dry-pasta-pefcr-2020` |
| `allocate_shared_manufacturing` | 无法避免的共享制造数据 | 只有在已证明无法细分且质量能代表物理关系后，共享总量乘以声明产品质量，再除以同期间共享操作的全部合格产品质量。 | 共享总量；声明产品质量；共享操作产品总质量；期间；产品清单 | 含分配披露的前景分配量 | `unafpa-dry-pasta-pefcr-2020` |

### 数据质量要求

| requirement_id | Applies to | Requirement | Evidence |
| --- | --- | --- | --- |
| `dq_product_identity` | 参考产品及所有产品特定行 | 必需限定信息应完整且内部一致。只有实际身份匹配时才可保留 semi-dried noodles UUID；否则应替换为更具体且已核验的流。 | 产品主数据、放行规范、CPC 检查和完整天工流回读 |
| `dq_temporal_representativeness` | 前景活动数据 | 使用一致的报告期。年度干面食数据集应覆盖连续 12 个月；其他产品形态只有在说明理由并披露产量覆盖时，才可使用代表性生产活动或季节期间。 | 带日期的计量、批次、生产、库存和废物记录；覆盖率计算；理由 |
| `dq_measurement_traceability` | 质量、水分、用水、电力和热能记录 | 保留原始读数、单位、仪表/秤具身份、校准或核验状态、换算和责任记录来源。 | 校准证书、仪表日志、实验室方法记录、发票和换算工作表 |
| `dq_mass_balance` | 两个前景过程 | 核对材料投入与中间/产品输出、实测废物、相关时的水分释放、库存变化和有记录内部返回。调查并披露无法解释的不平衡；不得用无记录默认值强制闭合。 | 生产活动质量平衡工作表和偏差调查 |
| `dq_completeness` | 前景清单 | 纳入跨越声明前景边界的所有材料原料、水、能源、包装、产品和废物流。明确记录不适用判定和未解析 UUID。 | 与过程图、物料清单、公用工程、废物台账和包装记录关联的完整性清单 |
| `dq_background_linkage` | 上游数据集 | 上游数据集应匹配实际原料、能源、水、包装和废物处理身份，并披露地理、时间或技术代理。 | 数据集引用、供应商/来源记录、代理理由和数据缺口台账 |
| `dq_source_scope` | 外部干面食证据的使用 | `unafpa-dry-pasta-pefcr-2020` 仅用于符合声明路线的干面食规则。它可作为过程/数据采集指南，但不能证明半干、新鲜、米制、豆制或 CPC 23710 其他更宽产品符合该 PEFCR。 | 产品范围对比和方法局限声明 |

## 9. 校验规则

| rule_id | 适用对象 | 规则 | source_ids |
| --- | --- | --- | --- |
| `validate_category_and_form` | 产品身份 | 确认 CPC 3.0 代码 23710、未烹煮状态、未填馅且未另行调制；拒绝超出范围的已烹煮、填馅、带调味/已调制或完整菜肴产品。 | `international-epd-pcr-2010-01` |
| `validate_representative_flow_use` | 参考产品流 | 根据完整天工流记录确认实际产品形态。若产品不是 semi-dried noodles，或存在更具体匹配的真实流，则应替换 UUID `540fef24-1038-48b8-8ee1-8cc415df780a`；静默复用属于错误。 |  |
| `validate_reference_support_chain` | 参考数量与单位 | 确认参考数量为 1 kg 产品净质量，Mass UUID 为 `93a60a56-a3c8-11da-a746-0800200b9a66`，Units of mass UUID 为 `93a60a57-a4c8-11da-a746-0800200c9a66`，参考单位为 kg；包装质量应保持分列。 |  |
| `validate_process_coverage` | 前景过程图 | 确认实际配方、成形、调湿/干燥、检验/返工核算、包装或散装放行均有表示，且不适用的路线步骤有明确理由。 | `unafpa-dry-pasta-pefcr-2020` |
| `validate_inventory_and_mass_balance` | 前景清单 | 确认已采集原料/包装 BoM、能源、水、输出、损失和废物记录；按过程和产品状态核对质量，且不使用无记录默认值。 | `unafpa-dry-pasta-pefcr-2020` |
| `validate_allocation` | 共享操作与多输出过程 | 确认已先尝试细分，剩余分配具有物理上有代表性的驱动、完整分母、同期间记录和披露。 | `unafpa-dry-pasta-pefcr-2020` |
| `validate_period_and_traceability` | 数据集质量 | 确认期间一致、场址/生产线范围、校准/换算证据、来源可追溯性、上游数据集关联和明确的数据缺口。 | `unafpa-dry-pasta-pefcr-2020` |

## 10. 发布数据集画像

| 字段 | 值 |
| --- | --- |
| dataset_role | 针对一种已声明未烹煮面食形态和工厂门放行条件的前景产品生产数据集 |
| downstream_use | 完成方法评审、UUID 补全、校验和发布控制后，可作为 `secondary_dataset` 或 `background_dataset` 发布 |
| allowed_use | 产品形态、配方、成形/调湿路线、水分状态、包装状态、地理、技术和报告关口与所声明数据集兼容的产品系统 |
| excluded_use | 把 semi-dried noodles UUID 静默用于其他产品形态；已烹煮、填馅、带调味/已调制或完整菜肴产品；无明确下游阶段时作为从摇篮到坟墓结果使用；无支持的跨形态或跨路线平均 |
| required_metadata | 规范 PCR id；CPC；实际天工产品流 UUID；全部必需限定信息；场址/地理；技术和过程图；报告期与关口；产品净质量与包装基准；分配；来源与代理披露；未解析流状态 |
| required_quality_disclosure | 记录覆盖、校准/换算证据、质量平衡结果、分配理由、时间/地理/技术代表性、干面食来源适用性、缺失 UUID、代理数据集和校验发现 |
| update_trigger | 产品形态或流身份、配方、含蛋状态、主要原料、成形或调湿技术、放行水分状态、包装配置、场址/能源供应、分配基准、报告关口、实质性供应商组合、法律规范或证据来源发生变化 |

## 11. 数据源

| Source id | Type | Reference | Used for |
| --- | --- | --- | --- |
| `unafpa-dry-pasta-pefcr-2020` | 官方指南（`official_guidance`） | UN.A.F.P.A. and Life Cycle Engineering, *Product Environmental Footprint Category Rules for Dry Pasta*, version 3.1, February 2020, hosted by the Slovak Environment Agency, https://www.sazp.sk/dokument/f/cestoviny.pdf（检索日期 2026-08-10） | 干面食过程分解；企业特定原料/包装 BoM 和能源数据；制造用水、辅助材料、运输与废物记录；12 个月场址活动期；优先细分和物理质量分配。仅在声明产品路线符合来源的干面食范围时应用；未采用其任何默认定量损失或配方值。 |
| `international-epd-pcr-2010-01` | 标准（`standard`） | International EPD System, PCR 2010:01, *Uncooked pasta, not stuffed or otherwise prepared*, version 4.0.5, https://www.environdec.com/pcr-library/pcr2010-01（检索日期 2026-08-10；项目页面报告状态为 expired，有效期止于 2026-05-24） | 仅用于独立核对类别标题和 UN CPC 2371 范围；不作为当前规范性或定量要求。 |
