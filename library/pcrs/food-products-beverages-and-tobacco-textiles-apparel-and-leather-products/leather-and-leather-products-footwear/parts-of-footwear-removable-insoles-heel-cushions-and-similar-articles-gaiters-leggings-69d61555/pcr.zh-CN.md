---
pcr_id: pcr.food-products-beverages-and-tobacco-textiles-apparel-and-leather-products.leather-and-leather-products-footwear.parts-of-footwear-removable-insoles-heel-cushions-and-similar-articles-gaiters-leggings-69d61555
language: zh-CN
status: candidate
sync_with: pcr.en-US.md
---

# 鞋类零件、可拆装的鞋垫、后跟垫及类似物品，鞋罩、绑腿和类似物品及其零件

## 1. 范围与适用性

本 PCR 适用于工厂门生产一个明确声明的 CPC 3.0 子类 29600 产品：鞋类部件、可拆装鞋垫、后跟垫或类似制品、鞋罩、绑腿或此类制品的部件。边界纳入该声明产品真实采用的路线，包括发生时的材料准备、模切或转化、聚合物配混与模塑、缝制或粘接、整理、检验和包装。

本 PCR 不涵盖完整鞋类、矫形器械、冰鞋，亦不涵盖外购皮革、纺织品、聚合物、配混料、板材、化学品、电力或包装的上游生产，以及销售制品的分销、使用、维修和寿命终止。由于 CPC 29600 包含物质构成差异很大的产品，前景数据包必须表示一个具名部件族、结构、配方、尺码或尺码组合及制造路线；不得把无关的鞋帮、鞋底、鞋垫、后跟垫、鞋罩和绑腿平均为一个结果。

## 2. 产品类别识别

| 字段 | 值 |
| --- | --- |
| canonical_pcr_id | pcr.food-products-beverages-and-tobacco-textiles-apparel-and-leather-products.leather-and-leather-products-footwear.parts-of-footwear-removable-insoles-heel-cushions-and-similar-articles-gaiters-leggings-69d61555 |
| classification_refs | CPC 3.0: 29600，精确范围参考 |
| covered_products | 作为已制造成品销售或转移的鞋帮及其他鞋类部件、可拆装鞋垫、后跟垫及类似制品、鞋罩和绑腿及类似制品和其部件 |
| excluded_products | 完整鞋类；矫形器械；冰鞋；尚未制成所声明 CPC 29600 制品的原皮革、纺织品、聚合物、橡胶、泡沫或板材；分销、使用和寿命终止服务 |
| representative_product | 一个规定的 CPC 29600 成品部件族和型号，符合所声明规格并在工厂门可供转移 |
| production_route | 按产品选择片材或板材准备与模切、聚合物配混与模塑、缝制或粘接、整理、检验和包装 |
| market_state | 工厂门的已制造鞋类部件或相关成品，销售包装单独计量 |

## 3. 参考流

| 字段 | 值 |
| --- | --- |
| What | 提供一个规定 CPC 29600 鞋类部件或相关制品所声明的合脚、缓冲、结构、覆盖、防护或装配功能 |
| How much | 工厂门 1 kg 净质量的所声明合格成品 |
| How well | 符合所声明部件族、材料、结构、尺码、性能和质量规格 |
| How long or cycle | 声明其预期寿命或使用循环与鞋类或防护制品的关系；不设跨类别默认寿命 |
| reference_flow_link | 实现所述功能的一个声明成品的净质量；包装不计入 1 kg 参考数量并单独列入清单 |

| 字段 | 值 |
| --- | --- |
| 参考数量 | 1 kg |
| 参考产品流 | 鞋类零件，可拆装的鞋垫、后跟垫及类似物品，鞋罩、绑腿和类似物品及其零件 `13caecd4-f313-436a-8ab4-2abfbab600bb` |
| 参考流属性 | Mass `93a60a56-a3c8-11da-a746-0800200b9a66` |
| 参考单位组 | Units of mass `93a60a57-a4c8-11da-a746-0800200c9a66` |
| 参考单位 | kg |
| 必需限定信息 | 精确产品族和型号；预期功能；CPC 29600 范围依据；材料和配方；结构和制造路线；尺码或产量加权尺码组合；性能规格；净质量；质量口径物料清单；所含再生料；包装配置；工厂地域；报告期；所含场址和分包商 |

构建前景数据包时，`必需限定信息` 中列出的信息应在数据集元数据、过程说明、参考流备注、产品说明或等效数据包字段中明确声明。缺失必需限定信息的数据包视为参考流定义不完整。

## 4. 计量与单位规则

| rule_id | 适用对象 | 必需流属性 | 必需单位 | 规则 |
| --- | --- | --- | --- | --- |
| `reference_net_mass` | 所声明成品 | Mass `93a60a56-a3c8-11da-a746-0800200b9a66` | kg | 称量不含销售或运输包装的合格成品，并把前景交换归一化到恰好 1 kg 净产品。 |
| `item_to_mass` | 按件或双记录的数据 | Mass | kg | 使用同型号同尺码的实测质量或有记录的产量加权尺码组合换算件数；保留件数、称量记录、样本覆盖和换算过程。 |
| `bom_mass_balance` | 材料、中间品、产品和废物 | Mass | kg | 对每个过程和报告期核对接收投入、退料、并入产品的质量、过程损耗、不合格品质量和合格产出。 |
| `electricity_measurement` | 电力驱动过程 | Energy | kWh | 使用分表用电量，或有记录的设备功率乘运行时间及负荷系数；识别场址电力供应，不得把电力与热或燃料合并。 |
| `packaging_separation` | 销售包装 | Mass | kg | 在净产品质量之外分别计量瓦楞纸板和 LDPE 包装；由件数换算质量时必须使用该具体包装件的实测质量。 |

## 5. 系统边界

### 边界概化

| 字段 | 值 |
| --- | --- |
| declared_starting_condition | 在所声明产品路线中首个纳入的工厂或分包商门口验收合格的外购材料或半成品 |
| starting_condition_role | 前景制造起点；上游生产由可追溯产品数据集表示 |
| product_classification_scope | 一个明确声明的 CPC 29600 成品部件族和型号，而非不同部件族的汇总平均 |
| recursive_input_rule | 外购且已属于 CPC 29600 的产品作为一个带独立数据集的上游产品投入记录，不在前景数据包内递归拆解。 |
| upstream_dataset_requirement | 对每项外购皮革、纺织品、泡沫、聚合物配混料、板材、缝线、胶黏剂、脱模剂、电力和包装投入使用可追溯上游数据集；披露代理和缺失数据集。 |
| disclosure | 声明精确产品、路线、场址与分包商、物料清单、损耗和不合格品路线、电力供应、包装、分配、地域、报告期、数据缺口和任何排除的操作。 |

| rule_id | 适用对象 | 规则 | source_ids |
| --- | --- | --- | --- |
| `boundary_factory_gate` | 前景系统 | 纳入真实产品路线中从验收外购投入到工厂门合格包装产品的每个过程，包括分包的部件制造。 | `af-pefcr-3-1-2025`; `eu-pef-method-2021` |
| `boundary_route_specific` | CPC 29600 产品多样性 | 只纳入适用于所声明产品的路线，但必须覆盖该路线完整的准备和制造链；不得替换为无关的鞋类部件路线。 | `af-pefcr-3-1-2025` |
| `boundary_upstream_products` | 外购投入 | 在前景数据中保留产品特定采购量，并用上游数据集表示其生产，不得在本边界内重建上游制造。 | `eu-pef-method-2021`; `af-pefcr-3-1-2025` |
| `boundary_classification` | 产品身份 | 要求成品产出保持在 CPC 29600 内，并排除完整鞋类和原材料。 | `un-cpc-3-2025` |

## 6. 过程清单结构

以下流卡是由目标证据支持的原子路线示例。数据集应实例化与声明路线相符的流卡，并把其他每项真实 BOM 材料、载能体、包装组件、废物流和直接排放新增为同样具体的单独交换。无关路线应以证据标记不适用，不得用数值为零的聚合占位符表示。

### 过程图

| process_id | 过程名称 | 纳入状态 | 纳入条件 | 建模角色 | 定量参考 |
| --- | --- | --- | --- | --- | --- |
| `sheet_part_converting` | 片材、板材、皮革或纺织品准备与模切 | `conditional` | 由片材、板材、皮革或纺织品库存转化的产品必须纳入 | 前景部件制造 | 每批次验收切割件 kg |
| `eva_part_moulding` | EVA 配混与注塑 | `conditional` | 模塑 EVA 鞋底、鞋垫、后跟垫或类似部件必须纳入 | 前景聚合物部件制造 | 每批次合格模塑 EVA 部件 kg |
| `sewn_part_assembly` | 鞋帮、鞋罩或绑腿部件的缝制与粘接 | `conditional` | 缝制或粘接的多片制品必须纳入 | 前景部件合并 | 每批次合格装配制品 kg |
| `finishing_packaging` | 整理、检验与包装 | `required` | 所声明成品始终纳入 | 前景完工 | 1 kg 合格净成品 |

### 过程：片材、板材、皮革或纺织品准备与模切（`sheet_part_converting`）

#### 输入

##### 产品流

###### 发泡 EVA 泡沫片材（`eva_foam_sheet`）

仅在其转化为所声明鞋垫、后跟垫、鞋底层或类似部件时，记录精确 EVA 片材牌号。

- 选定流：发泡乙烯-醋酸乙烯共聚物泡沫片材
- 流属性/单位：Mass / kg
- 数量规则：发出合格片材质量减有记录的退料
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：产品特定（`product_specific`）
- 归一化基准：每 kg 验收合格的 EVA 切割件
- 基准类型：过程输出（`process_output`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_sheet_part_converting`
- 来源：`af-pefcr-3-1-2025`

###### 成品牛皮鞋面革（`bovine_upper_leather`）

切割所声明鞋帮或其他皮革鞋类部件时，单独记录成品牛皮革。

- 选定流：成品牛皮鞋面革
- 流属性/单位：Mass / kg
- 数量规则：发出合格皮革质量减有记录的退料
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：产品特定（`product_specific`）
- 归一化基准：每 kg 验收合格的皮革切割件
- 基准类型：过程输出（`process_output`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_sheet_part_converting`
- 来源：`rossi-leather-shoe-lca-2021`; `footwear-manufacturing-4-0-2021`

###### 聚酯机织物（`polyester_woven_fabric`）

用于鞋罩、绑腿或鞋帮切割时，单独记录所声明结构的聚酯机织物。

- 选定流：所声明结构的聚酯机织物
- 流属性/单位：Mass / kg
- 数量规则：发出合格织物质量减有记录的退料
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：产品特定（`product_specific`）
- 归一化基准：每 kg 验收合格的聚酯切割件
- 基准类型：过程输出（`process_output`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_sheet_part_converting`
- 来源：`af-pefcr-3-1-2025`

###### 纤维素鞋垫板（`cellulose_insole_board`）

纤维素板成为所声明鞋垫、后跟垫或其他部件的结构层时应单独记录。

- 选定流：纤维素鞋垫板
- 流属性/单位：Mass / kg
- 数量规则：发出合格板材质量减有记录的退料
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：产品特定（`product_specific`）
- 归一化基准：每 kg 验收合格的纤维素板切割件
- 基准类型：过程输出（`process_output`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_sheet_part_converting`
- 来源：`rossi-leather-shoe-lca-2021`

###### 模切用电（`electricity_die_cutting`）

记录本过程切割、片皮、削薄、冲孔、抽风、输送和相关准备设备的电力。

- 选定流：低压电力
- 流属性/单位：Energy / kWh
- 数量规则：分表用电量，或设备功率乘运行时间及有记录的负荷系数
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每 kg 验收合格的切割件
- 基准类型：过程输出（`process_output`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_sheet_part_converting`
- 来源：`af-pefcr-3-1-2025`; `footwear-manufacturing-4-0-2021`

##### 废物流

##### 基本流

#### 输出

##### 产品流

###### 模切 EVA 可拆装鞋垫坯（`die_cut_eva_insole_blank`）

该产品输出在切割后跨越转换过程边界；以实测合格 EVA 坯料质量确定数量。

- 选定流：模切 EVA 可拆装鞋垫坯
- 流属性/单位：Mass / kg
- 数量规则：转入整理或后续装配的实测合格坯件质量
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：产品特定（`product_specific`）
- 归一化基准：每转化批次
- 基准类型：过程输出（`process_output`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_sheet_part_converting`
- 来源：`af-pefcr-3-1-2025`

###### 牛皮鞋帮裁片（`cut_leather_upper_panel`）

该产品输出在切割后跨越转换过程边界；以实测合格牛皮裁片质量确定数量。

- 选定流：牛皮鞋帮裁片
- 流属性/单位：Mass / kg
- 数量规则：转入装配的实测合格裁片质量
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：产品特定（`product_specific`）
- 归一化基准：每转化批次
- 基准类型：过程输出（`process_output`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_sheet_part_converting`
- 来源：`footwear-manufacturing-4-0-2021`

###### 聚酯鞋罩裁片（`cut_polyester_gaiter_panel`）

该产品输出在切割后跨越转换过程边界；以实测合格聚酯裁片质量确定数量。

- 选定流：聚酯鞋罩裁片
- 流属性/单位：Mass / kg
- 数量规则：转入装配的实测合格裁片质量
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：产品特定（`product_specific`）
- 归一化基准：每转化批次
- 基准类型：过程输出（`process_output`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_sheet_part_converting`
- 来源：`af-pefcr-3-1-2025`

###### 纤维素后跟垫坯（`cut_cellulose_heel_cushion_blank`）

该产品输出在切割后跨越转换过程边界；以实测合格纤维素坯料质量确定数量。

- 选定流：纤维素后跟垫坯
- 流属性/单位：Mass / kg
- 数量规则：转入整理或后续装配的实测合格坯件质量
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：产品特定（`product_specific`）
- 归一化基准：每转化批次
- 基准类型：过程输出（`process_output`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_sheet_part_converting`
- 来源：`rossi-leather-shoe-lca-2021`

##### 废物流

###### EVA 泡沫切割边角料（`eva_cutting_offcuts`）

该废物作为单独识别的 EVA 切割边角料跨越转换过程边界；按声明回收或处理路线称量。

- 选定流：EVA 泡沫切割边角料
- 流属性/单位：Mass / kg
- 数量规则：按声明回收、资源化或处置路线实测边角料质量
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每 kg 验收合格的 EVA 切割件
- 基准类型：过程输出（`process_output`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_sheet_part_converting`
- 来源：`af-pefcr-3-1-2025`

###### 牛皮鞋面革切割边角料（`leather_cutting_offcuts`）

该废物作为单独识别的牛皮鞋面革切割边角料跨越转换过程边界；按声明回收或处理路线称量。

- 选定流：牛皮鞋面革切割边角料
- 流属性/单位：Mass / kg
- 数量规则：按声明回收、资源化或处置路线实测边角料质量
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每 kg 验收合格的皮革切割件
- 基准类型：过程输出（`process_output`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_sheet_part_converting`
- 来源：`footwear-manufacturing-4-0-2021`

###### 聚酯织物切割边角料（`polyester_cutting_offcuts`）

该废物作为单独识别的聚酯织物切割边角料跨越转换过程边界；按声明回收或处理路线称量。

- 选定流：聚酯织物切割边角料
- 流属性/单位：Mass / kg
- 数量规则：按声明回收、资源化或处置路线实测边角料质量
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每 kg 验收合格的聚酯切割件
- 基准类型：过程输出（`process_output`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_sheet_part_converting`
- 来源：`af-pefcr-3-1-2025`

###### 纤维素鞋垫板切割边角料（`cellulose_board_offcuts`）

该废物作为单独识别的纤维素鞋垫板切割边角料跨越转换过程边界；按声明回收或处理路线称量。

- 选定流：纤维素鞋垫板切割边角料
- 流属性/单位：Mass / kg
- 数量规则：按声明回收、资源化或处置路线实测边角料质量
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每 kg 验收合格的纤维素板切割件
- 基准类型：过程输出（`process_output`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_sheet_part_converting`
- 来源：`af-pefcr-3-1-2025`

##### 基本流

### 过程：EVA 配混与注塑（`eva_part_moulding`）

#### 输入

##### 产品流

###### 可发泡 EVA 鞋材配混料（`expandable_eva_compound`）

该配混料作为所声明聚合物进料跨越模塑过程边界；以批次领退料记录并与实测质量核对确定数量。

- 选定流：可发泡乙烯-醋酸乙烯共聚物鞋材配混料
- 流属性/单位：Mass / kg
- 数量规则：投入注塑机的合格配混料质量减有记录的退料
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：产品特定（`product_specific`）
- 归一化基准：每 kg 合格模塑 EVA 部件
- 基准类型：过程输出（`process_output`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_eva_part_moulding`
- 来源：`bianchi-recycled-eva-footwear-2023`

###### 有机硅脱模剂（`silicone_mould_release_agent`）

该脱模剂在施用于模具时跨越模塑过程边界；以批次领用记录或经校准的计量加料记录确定数量。

- 选定流：有机硅脱模剂
- 流属性/单位：Mass / kg
- 数量规则：发到模塑工序的脱模剂质量减有记录的退料
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：技术特定（`technology_specific`）
- 归一化基准：每 kg 合格模塑 EVA 部件
- 基准类型：过程输出（`process_output`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_eva_part_moulding`
- 来源：`bianchi-recycled-eva-footwear-2023`

###### EVA 模塑用电（`electricity_eva_moulding`）

该电力跨越模塑过程边界，为加热、注射、压制、冷却和辅助设备供能；采用计量表或有文件依据的分表分配值。

- 选定流：低压电力
- 流属性/单位：Energy / kWh
- 数量规则：分表计量的注塑、温控、粉碎及辅助用电
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每 kg 合格模塑 EVA 部件
- 基准类型：过程输出（`process_output`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_eva_part_moulding`
- 来源：`bianchi-recycled-eva-footwear-2023`; `af-pefcr-3-1-2025`

##### 废物流

##### 基本流

#### 输出

##### 产品流

###### 模塑 EVA 鞋外底（`moulded_eva_footwear_part`）

该产品输出在修边和检验后跨越模塑过程边界；以实测合格 EVA 鞋外底质量确定数量。

- 选定流：模塑 EVA 鞋外底
- 流属性/单位：Mass / kg
- 数量规则：去除浇口、流道和余料后的实测合格部件质量
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：产品特定（`product_specific`）
- 归一化基准：每模塑批次
- 基准类型：过程输出（`process_output`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_eva_part_moulding`
- 来源：`bianchi-recycled-eva-footwear-2023`

##### 废物流

###### 交联 EVA 注塑浇口（`crosslinked_eva_gates`）

该废物作为单独移除的交联 EVA 浇口跨越模塑过程边界；按声明内部回收或外送处理路线称量。

- 选定流：交联 EVA 注塑浇口
- 流属性/单位：Mass / kg
- 数量规则：按声明内部回收或外送处理路线实测浇口质量
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：技术特定（`technology_specific`）
- 归一化基准：每 kg 合格模塑 EVA 部件
- 基准类型：过程输出（`process_output`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_eva_part_moulding`
- 来源：`bianchi-recycled-eva-footwear-2023`

###### 交联 EVA 注塑流道（`crosslinked_eva_runners`）

该废物作为单独移除的交联 EVA 流道跨越模塑过程边界；按声明内部回收或外送处理路线称量。

- 选定流：交联 EVA 注塑流道
- 流属性/单位：Mass / kg
- 数量规则：按声明内部回收或外送处理路线实测流道质量
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：技术特定（`technology_specific`）
- 归一化基准：每 kg 合格模塑 EVA 部件
- 基准类型：过程输出（`process_output`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_eva_part_moulding`
- 来源：`bianchi-recycled-eva-footwear-2023`

###### 不合格模塑 EVA 鞋类部件（`defective_moulded_eva_part`）

该废物在检验判定模塑部件不合格后跨越模塑过程边界；按声明内部回收或外送处理路线称量。

- 选定流：不合格模塑 EVA 鞋类部件
- 流属性/单位：Mass / kg
- 数量规则：按声明内部回收或外送处理路线实测不合格部件质量
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每 kg 合格模塑 EVA 部件
- 基准类型：过程输出（`process_output`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_eva_part_moulding`
- 来源：`bianchi-recycled-eva-footwear-2023`

##### 基本流

### 过程：鞋帮、鞋罩或绑腿部件的缝制与粘接（`sewn_part_assembly`）

#### 输入

##### 产品流

###### 牛皮鞋帮裁片投入（`cut_leather_upper_input`）

该裁片作为产品投入进入缝制装配；以与所声明型号核对的领退料质量确定数量。

- 选定流：牛皮鞋帮裁片
- 流属性/单位：Mass / kg
- 数量规则：从切割工序接收的实测合格裁片质量
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：产品特定（`product_specific`）
- 归一化基准：每装配批次
- 基准类型：过程输出（`process_output`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_sewn_part_assembly`
- 来源：`footwear-manufacturing-4-0-2021`

###### 聚酯鞋罩裁片投入（`cut_polyester_gaiter_input`）

该裁片作为产品投入进入缝制装配；以与所声明型号核对的领退料质量确定数量。

- 选定流：聚酯鞋罩裁片
- 流属性/单位：Mass / kg
- 数量规则：从切割工序接收的实测合格裁片质量
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：产品特定（`product_specific`）
- 归一化基准：每装配批次
- 基准类型：过程输出（`process_output`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_sewn_part_assembly`
- 来源：`af-pefcr-3-1-2025`

###### 聚酯缝纫线（`polyester_sewing_thread`）

该缝纫线作为材料投入进入缝制装配；以领退料质量或经验证的长度—质量换算确定数量。

- 选定流：聚酯缝纫线
- 流属性/单位：Mass / kg
- 数量规则：发出缝线质量减退回线轴质量和未用缝线
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：产品特定（`product_specific`）
- 归一化基准：每 kg 合格装配制品
- 基准类型：过程输出（`process_output`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_sewn_part_assembly`
- 来源：`footwear-manufacturing-4-0-2021`

###### 聚氨酯鞋用胶黏剂（`polyurethane_footwear_adhesive`）

该胶黏剂在粘接所声明部件时进入缝制装配；以领退料记录或经校准的施胶记录确定数量。

- 选定流：聚氨酯鞋用胶黏剂
- 流属性/单位：Mass / kg
- 数量规则：发出配制胶黏剂质量减有记录的退料
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：技术特定（`technology_specific`）
- 归一化基准：每 kg 合格粘接制品
- 基准类型：过程输出（`process_output`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_sewn_part_assembly`
- 来源：`footwear-manufacturing-4-0-2021`

###### 缝制装配用电（`electricity_sewn_assembly`）

该电力跨越装配过程边界，为缝制、施胶、压合和辅助设备供能；采用计量表或有文件依据的分表分配值。

- 选定流：低压电力
- 流属性/单位：Energy / kWh
- 数量规则：分表计量的缝制、施胶、压合、抽风和输送用电
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每 kg 合格装配制品
- 基准类型：过程输出（`process_output`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_sewn_part_assembly`
- 来源：`af-pefcr-3-1-2025`; `footwear-manufacturing-4-0-2021`

##### 废物流

##### 基本流

#### 输出

##### 产品流

###### 装配鞋帮（`assembled_footwear_upper`）

该产品输出在缝制和粘接后跨越装配过程边界；以实测所声明型号的合格鞋帮质量确定数量。

- 选定流：装配鞋帮
- 流属性/单位：Mass / kg
- 数量规则：转入整理或鞋类装配的实测合格鞋帮质量
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：产品特定（`product_specific`）
- 归一化基准：每装配批次
- 基准类型：过程输出（`process_output`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_sewn_part_assembly`
- 来源：`footwear-manufacturing-4-0-2021`

###### 装配纺织鞋罩（`assembled_textile_gaiter`）

该产品输出在缝制和粘接后跨越装配过程边界；以实测所声明型号的合格鞋罩质量确定数量。

- 选定流：装配纺织鞋罩
- 流属性/单位：Mass / kg
- 数量规则：转入整理的实测合格鞋罩质量
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：产品特定（`product_specific`）
- 归一化基准：每装配批次
- 基准类型：过程输出（`process_output`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_sewn_part_assembly`
- 来源：`af-pefcr-3-1-2025`

##### 废物流

###### 固化聚氨酯胶黏剂残渣（`cured_adhesive_residue`）

该废物作为单独收集的固化胶黏剂残渣跨越装配过程边界；按声明处理路线称量。

- 选定流：固化聚氨酯胶黏剂残渣
- 流属性/单位：Mass / kg
- 数量规则：送往声明处理路线的实测固化残渣质量
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每 kg 合格粘接制品
- 基准类型：过程输出（`process_output`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_sewn_part_assembly`
- 来源：`footwear-manufacturing-4-0-2021`

##### 基本流

### 过程：整理、检验与包装（`finishing_packaging`）

#### 输入

##### 产品流

###### 未装箱的所声明鞋类部件（`unboxed_declared_part`）

这是来自适用上游路线的一个特定合格部件，而不是部件族的混合。

- 选定流：未装箱的所声明 CPC 29600 鞋类部件
- 流属性/单位：Mass / kg
- 数量规则：从适用制造路线接收的实测合格质量
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：产品特定（`product_specific`）
- 归一化基准：每整理批次
- 基准类型：过程输出（`process_output`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_finishing_packaging`
- 来源：`af-pefcr-3-1-2025`

###### 整理和包装用电（`electricity_finishing_packaging`）

该电力跨越精整过程边界，为检验、修边、标识和包装设备供能；采用计量表或有文件依据的分表分配值。

- 选定流：低压电力
- 流属性/单位：Energy / kWh
- 数量规则：分表计量的整理、检验、测试和包装用电
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每 1 kg 合格净成品
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_finishing_packaging`
- 来源：`af-pefcr-3-1-2025`

###### 瓦楞纸板箱（`corrugated_paperboard_box`）

该纸箱作为所声明销售或运输配置的包装投入跨越精整过程边界；以包装物料清单和实测单件质量确定数量。

- 选定流：瓦楞纸板箱
- 流属性/单位：Mass / kg
- 数量规则：数量乘精确箱型规格的实测单件质量
- 数值来源模式：计算值（`calculated_value`）
- 适用范围：产品特定（`product_specific`）
- 归一化基准：每 1 kg 合格净成品
- 基准类型：参考流（`reference_flow`）
- 证据类型：由采集数据计算（`calculated_from_collection`）
- 采集协议：`cp_finishing_packaging`
- 来源：`af-pefcr-3-1-2025`

###### LDPE 包装袋（`ldpe_packaging_bag`）

该包装袋作为所声明销售或运输配置的包装投入跨越精整过程边界；以包装物料清单和实测单件质量确定数量。

- 选定流：低密度聚乙烯包装袋
- 流属性/单位：Mass / kg
- 数量规则：数量乘精确袋型规格的实测单件质量
- 数值来源模式：计算值（`calculated_value`）
- 适用范围：产品特定（`product_specific`）
- 归一化基准：每 1 kg 合格净成品
- 基准类型：参考流（`reference_flow`）
- 证据类型：由采集数据计算（`calculated_from_collection`）
- 采集协议：`cp_finishing_packaging`
- 来源：`af-pefcr-3-1-2025`

##### 废物流

##### 基本流

#### 输出

##### 产品流

###### 合格 CPC 29600 成品（`reference_product_output`）

该流是跨越工厂大门的合格所声明产品；称量不含包装的成品净质量，并将数据集归一化至 1 kg。

- 选定流：鞋类零件，可拆装的鞋垫、后跟垫及类似物品，鞋罩、绑腿和类似物品及其零件 `13caecd4-f313-436a-8ab4-2abfbab600bb`
- 流属性/单位：Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- 数量规则：归一化后恰好 1 kg 净合格成品
- 数值来源模式：固定值（`fixed_value`）
- 适用范围：产品特定（`product_specific`）
- 归一化基准：1 kg 参考产品
- 基准类型：参考流（`reference_flow`）
- 证据类型：身份参考（`identity_reference`）
- 采集协议：
- 来源：

##### 废物流

###### 不合格鞋类成品部件（`rejected_finished_footwear_part`）

该废物在终检判定所声明产品不合格后跨越精整过程边界；按声明回收或处理路线单独称量。

- 选定流：不合格鞋类成品部件
- 流属性/单位：Mass / kg
- 数量规则：按精确材料组成和声明处理路线实测不合格品质量
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每 1 kg 合格净成品
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_finishing_packaging`
- 来源：`af-pefcr-3-1-2025`

##### 基本流

## 7. 分配与共产品处理

| rule_id | 适用对象 | 规则 | source_ids |
| --- | --- | --- | --- |
| `allocation_avoid` | 共用过程 | 优先使用分表、批次记录、产线时间和材料领用记录细分真实路线，然后才进行分配。 | `eu-pef-method-2021` |
| `allocation_mass_operations` | 配混、模切、鞋垫生产、底部件组合和整理 | 无法细分时，以同一报告期实测产品质量分配共用投入和产出。 | `af-pefcr-3-1-2025` |
| `allocation_unit_operations` | 缝制和装配 | 无法细分时，以加工件数分配共用缝制或装配负荷，再用实测质量把所代表型号和尺码组合换算到 1 kg 参考流。 | `af-pefcr-3-1-2025` |
| `allocation_recycled_scrap` | 内部回收 EVA 或其他过程废料 | 明确记录废料产生、回收投入和替代，防止重复计算避免的原生材料或废物处理，并披露选定的再生分配方法。 | `eu-pef-method-2021`; `bianchi-recycled-eva-footwear-2023` |

## 8. 前景数据采集、计算与质量规则

### 数据采集协议

| protocol_id | process_id | flow_role | record_type | raw_fields | collection_method | unit | frequency | temporal_coverage | site_scope | aggregation_rule | quality_evidence |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| `cp_sheet_part_converting` | `sheet_part_converting` | 材料、电力、合格部件和边角料交换 | 采购、领退料、称量、计量和废物转移记录 | 材料 id；批次；领用质量；退料质量；合格切割件质量；边角料质量；处理路线；kWh；机器时间；产出型号和尺码 | 用签字材料流转和校准称量核对阶段用电记录 | kg；kWh | 每批次采集、每月核对 | 至少一个代表性生产年度或完整的更短生产期 | 所有纳入的切割场址和分包商 | 按原子流和处理路线求和，仅按第 7 节分配，归一化到合格切割产出和参考产品 | 校准；发票；领退料单；裁剪图；生产日志；废物转移记录 |
| `cp_eva_part_moulding` | `eva_part_moulding` | EVA 配混料、脱模剂、电力、产品、浇口/流道和不合格品交换 | 批次配方、料斗领料、称量、计量、机器和废物记录 | 配混料批次与配方；原生和再生质量；脱模剂质量；kWh；合格部件质量；浇口/流道质量；不合格品质量；回收或处置路线 | 核对每个模塑批次并保留机器循环和回收记录 | kg；kWh | 每批次采集、每月核对 | 至少一个代表性生产年度或完整的更短生产期 | 所有纳入的模塑场址和分包商 | 按原子流和废物路线求和；单独报告内部回收料；归一化到合格模塑产出和参考产品 | 校准秤/表；配方；机器日志；不合格品日志；废物转移记录 |
| `cp_sewn_part_assembly` | `sewn_part_assembly` | 裁片、缝线、胶黏剂、电力、装配制品和残渣交换 | 领退料、称量、计量、缝制、粘接和废物记录 | 裁片质量；缝线质量；胶黏剂配方和质量；kWh；合格产出质量和件数；残渣质量；不合格品质量 | 按型号和尺码组合核对材料领退、合格产出和残渣 | kg；kWh；item | 每批次采集、每月核对 | 至少一个代表性生产年度或完整的更短生产期 | 所有纳入的缝制或粘接场址和分包商 | 按原子流求和；仅按第 7 节使用件数分配；用实测产出质量归一化 | 秤/表校准；物料清单；工单；胶黏剂记录；检验和废物记录 |
| `cp_finishing_packaging` | `finishing_packaging` | 未装箱产品、电力、纸板箱、LDPE 袋、合格产出和不合格品交换 | 接收、称量、计量、包装领用和检验记录 | 来料质量；kWh；箱数和单箱质量；袋数和单袋质量；合格净质量；不合格品质量和处理路线 | 核对合格来料、包装领用、合格净产出和不合格品 | kg；kWh；item | 每批次采集、每月核对 | 至少一个代表性生产年度或完整的更短生产期 | 所有纳入的整理和包装场址 | 按原子流求和；包装不计入净产品；归一化到 1 kg 合格净产出 | 校准秤/表；包装规格；检验日志；生产和废物记录 |

### 计算规则

| rule_id | Applies to | Formula or rule | Inputs | Output | source_ids |
| --- | --- | --- | --- | --- | --- |
| `calc_reference_normalization` | 所有清单交换 | 归一化量 = 报告期交换量 / 报告期合格净产品质量 | 原子交换量；合格净产品质量 | 每 1 kg 参考产品的量 | `eu-pef-method-2021` |
| `calc_process_loss` | 每个材料过程 | 损耗率 =（合格投入 - 退料 - 合格转移产出）/ 合格投入；用单独实测废物和库存变化核对结果质量 | 合格投入；退料；产出；废物；期初和期末库存 | 过程特定损耗率和质量平衡结论 | `af-pefcr-3-1-2025` |
| `calc_item_mass` | 按件记录的部件和包装 | 质量 = 件数乘相同规格、有记录样本的实测平均质量 | 件数；样本质量；规格和尺码组合 | 部件或包装组件 kg | `af-pefcr-3-1-2025` |
| `calc_shared_electricity` | 共用电气设备 | 分配 kWh = 计量 kWh 乘以与第 7 节一致、由机器时间、加工质量或加工件数确定的有记录分配份额 | 计量 kWh；机器时间；加工质量或件数 | 所声明产品的过程用电 | `af-pefcr-3-1-2025` |

### 数据质量要求

| requirement_id | Applies to | Requirement | Evidence |
| --- | --- | --- | --- |
| `dq_product_identity` | 参考产品 | 保留产品规格、照片或图纸、部件族、型号、材料/配方、结构、尺码或尺码组合、性能要求和 CPC 29600 依据。 | 受控规格；物料清单；检验记录；产品图纸或照片 |
| `dq_primary_coverage` | 前景路线 | 对每个纳入工厂和分包商使用原始记录；记录报告期、产量和排除项。 | 场址和供应商记录；覆盖核对；签字数据回传 |
| `dq_bom_completeness` | 材料清单 | 覆盖至少 95% 的产品 BOM 质量以及 100% 的所声明主要结构、缓冲、覆盖和紧固材料；披露每项遗漏的原子投入。 | 质量口径 BOM 完整性计算和遗漏登记 |
| `dq_mass_balance` | 每个过程 | 核对投入、退料、产出、废物和库存变化；调查无法解释的差额，不得把差额归入聚合废物流。 | 过程质量平衡表和纠正措施记录 |
| `dq_energy` | 电力 | 保留计量表、计算输入、分配依据和场址供应证据；不得把电力与热或燃料合并。 | 计量记录；设备日志；供应发票或合同；分配工作表 |
| `dq_waste_route` | 每项废物流 | 记录精确材料、适用时的危险性、接收方和处理路线；不得合并 EVA、皮革、聚酯、纤维素、胶黏剂或产品不合格品。 | 废物联单、接收方证据和材料核对 |
| `dq_source_and_proxy` | 上游数据集 | 对每项上游投入记录数据集身份、地域、技术、时间、版本和代理理由。 | 数据集登记和代理评估 |

## 9. 校验规则

| rule_id | Applies to | Rule | source_ids |
| --- | --- | --- | --- |
| `validate_reference_identity` | 参考流 | 要求 state-100 Product flow UUID `13caecd4-f313-436a-8ab4-2abfbab600bb`、Mass UUID `93a60a56-a3c8-11da-a746-0800200b9a66`、Units of mass UUID `93a60a57-a4c8-11da-a746-0800200c9a66`、单位 kg 和参考数量 1。 |  |
| `validate_scope` | 产品身份 | 要求一个具名 CPC 29600 部件族和型号；拒绝完整鞋类、原材料以及混合无关部件族或路线的汇总结果。 | `un-cpc-3-2025` |
| `validate_route_completeness` | 过程图 | 要求纳入整理与包装以及所有真实使用的条件过程和分包操作；每项不适用路线都必须有证据。 | `af-pefcr-3-1-2025` |
| `validate_atomic_inventory` | 清单行 | 要求每项材料、电力投入、包装组件、废物材料和直接排放均为单独交换；拒绝集合标签或合并载能体。 | `af-pefcr-3-1-2025`; `eu-pef-method-2021` |
| `validate_mass_balance` | 每个纳入过程 | 要求合格投入、退料、合格产出、实测废物和库存变化在所声明测量不确定度内核对一致。 | `af-pefcr-3-1-2025` |
| `validate_no_case_range` | 定量筛选 | 拒绝上下限相等的范围或从单个工厂、产品或论文推导的经验区间；接受跨类别经验范围前，要求两个独立且边界可比的原始来源及有记录的综合过程。 |  |
| `validate_bilingual_alignment` | 本地化 PCR | 要求中英文具有相同有序 rule id、process id、row id、UUID、受控 token 和 source id，并对带 UUID 的参考产品使用 Tiangong 精确中文 baseName。 |  |

## 10. 发布数据集画像

| 字段 | 值 |
| --- | --- |
| dataset_role | 一个规定 CPC 29600 产品的工厂门 `secondary_dataset` 或 `background_dataset` |
| downstream_use | 作为鞋类或防护制品过程数据集和生命周期模型的上游部件投入；产品特定足迹；供应商和工厂改进分析 |
| allowed_use | 产品族、型号、材料/配方、结构、路线、尺码组合、地域、期间、包装和数据质量与研究相符时使用 |
| excluded_use | 完整鞋类参考产品；跨无关鞋类部件族的通用代理；消费者使用或寿命终止建模；无依据的比较声明；替代缺失的产品特定路线数据 |
| required_metadata | 规范 PCR id；参考 UUID 和 Mass/单位支持；精确部件族和型号；功能；CPC 范围依据；材料/配方；BOM 和覆盖率；结构和路线；尺码或尺码组合；净质量；场址和分包商；报告期；电力供应；包装；废物和处理路线；分配；上游数据集；代理；截断和数据缺口 |
| required_quality_disclosure | 前景记录覆盖；计量与校准；质量平衡结果；BOM 完整性；分配；供应商覆盖；上游数据集质量；代理使用；缺失 UUID；不确定性和未解决的范围证据 |
| update_trigger | 产品族、配方、结构、制造路线、主要供应商、场址、电力供应、包装、分配、废物处理、性能规格发生变化，或出现实质性数据质量提升 |

## 11. 数据源

| Source id | Type | Reference | Used for |
| --- | --- | --- | --- |
| `un-cpc-3-2025` | `official_guidance` | 联合国统计司，*Central Product Classification (CPC), Version 3.0, Explanatory Notes*，代码 29600，2025。https://unstats.un.org/unsd/classifications/Econ/Download/In%20Text/CPC_Ver_3.0_Exp_Notes_30Jun2025.pdf（检索于 2026-08-20）。 | 精确产品类别范围和排除项 |
| `eu-pef-method-2021` | `official_guidance` | 欧盟委员会建议 (EU) 2021/2279，环境足迹方法，附件 I 产品环境足迹方法。https://eur-lex.europa.eu/eli/reco/2021/2279/oj（检索于 2026-08-20）。 | 生命周期边界、清单、分配、数据质量和披露原则 |
| `af-pefcr-3-1-2025` | `official_guidance` | Apparel and Footwear Technical Secretariat，*Product Environmental Footprint Category Rules: Apparel and Footwear*，Version 3.1，2025-04-29。https://www.carbonfact.com/hubfs/A%26FW_PEFCR_v3.1.pdf（检索于 2026-08-20）；欧盟委员会列示页：https://green-forum.ec.europa.eu/green-business/environmental-footprint-methods/pef-method_en。 | 鞋类部件制造路线；BOM 和原始数据规则；损耗；包装；分配和电力建模 |
| `rossi-leather-shoe-lca-2021` | `literature` | Rossi, M.; Papetti, A.; Marconi, M.; Germani, M. “Life cycle assessment of a leather shoe supply chain.” *International Journal of Sustainable Engineering* (2021). https://doi.org/10.1080/19397038.2021.1920643. | 全链条部件专业化、鞋垫和鞋底结构、原始数据采集及工厂过程分解 |
| `footwear-manufacturing-4-0-2021` | `literature` | Oliver, G.; Gil, P.; Gomez, J. F.; Torres, F. “Towards footwear manufacturing 4.0: shoe sole robotic grasping in assembling operations.” *The International Journal of Advanced Manufacturing Technology* 114, 811–827 (2021). https://doi.org/10.1007/s00170-021-06697-0. | 出版者开放全文支持的切割、缝制、施胶、装配、压合和整理过程序列 |
| `bianchi-recycled-eva-footwear-2023` | `literature` | Bianchi, I.; Forcellese, A.; Simoncini, M.; Vita, A. “Mechanical characterization and sustainability assessment of recycled EVA for footwears.” *The International Journal of Advanced Manufacturing Technology* 126, 3149–3160 (2023). https://doi.org/10.1007/s00170-023-11332-1. | 出版者开放全文支持的 EVA 注塑路线、脱模剂、能源与耗材清单、浇口/流道和不合格品废物、回收与处理核算 |
