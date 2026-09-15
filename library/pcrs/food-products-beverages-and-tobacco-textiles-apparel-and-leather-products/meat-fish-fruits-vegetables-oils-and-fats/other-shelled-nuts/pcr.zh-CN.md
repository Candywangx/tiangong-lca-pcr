---
pcr_id: pcr.food-products-beverages-and-tobacco-textiles-apparel-and-leather-products.meat-fish-fruits-vegetables-oils-and-fats.other-shelled-nuts
language: zh-CN
status: candidate
content_maturity: authored_methodology
translation_status: aligned
sync_with: pcr.en-US.md
---

# 其他去壳坚果

## 1. 范围与适用性

本 PCR 支持为 CPC 3.0 子类 21429 范围内的鲜或干制去壳坚果生产产品特定的前景数据包，边界从已声明状态的坚果物料接收开始，至去壳产品出厂交付为止。本 PCR 适用于明确物种、产品状态、批次、场址和加工路线的产品；不得据此将一个通用平均值应用于整个异质子类。

本 PCR 唯一已解析的天工产品流标识是名称为 Almond、UUID 为 `05bb565f-a834-4543-8d65-dd4029d5deea` 的流。该流所给 CPC 3.0:21429 分类已经精确复核，并在本任务中被接受为正确；但分类正确并不意味着该 UUID 可以代表整个类别。它只是窄范围代表，仅当前景产品确为杏仁代表情形且预期产品边界已确认时才可使用。不得为椰子、巴西坚果、栗子、开心果、澳洲坚果、槟榔、银杏果、碧根果、菱角、可乐果、松子或任何其他非杏仁产品自动选择该流。对于这些产品，应替换为产品特定的天工产品流；如尚无已核验流，必须停止自动标识选择并将数据集交由人工复核。

UNSD 界定本子类。Codex CXC 6-1972 仅对其范围内的树坚果支持过程与卫生概化，不为 CPC 21429 中的非树坚果成员建立要求。UNECE DDP-06 仅适用于该标准所述的完整甜杏仁仁，不得外推至其他坚果、被该标准排除的杏仁形态或其他加工状态。欧盟委员会建议 (EU) 2021/2279 提供通用环境足迹方法原则；本 PCR 本身既不是完整 PEF 研究，也不是经欧盟认可的 PEFCR。

## 2. 产品类别识别

| 字段 | 值 |
| --- | --- |
| canonical_pcr_id | pcr.food-products-beverages-and-tobacco-textiles-apparel-and-leather-products.meat-fish-fruits-vegetables-oils-and-fats.other-shelled-nuts |
| classification_refs | CPC 3.0: 21429, Other shelled nuts |
| covered_products | CPC 3.0 子类 21429 范围内的产品特定鲜或干制去壳坚果；UNSD 示例包括椰子、巴西坚果、腰果、栗子、开心果、澳洲坚果、槟榔、银杏果、碧根果、菱角、可乐果和松子（Pinus pinea）。 |
| excluded_products | 带壳坚果；花生以及单独分类的产品（除非已明确确认适用 CPC 21429）；混合物；经烘烤、盐渍、糖渍、调味或其他处理而超出鲜或干制去壳状态的产品；复合食品中的坚果配料；未经核验即把 Almond 流用于其他坚果。 |
| representative_product | 窄范围数据库代表：Almond `05bb565f-a834-4543-8d65-dd4029d5deea`。该引用不会把产品类别扩展到全部杏仁，也不代表非杏仁产品。 |
| production_route | 已声明接收状态，随后进行适用的去壳或分离、清理或调理、缺陷剔除与分级、可选产品特定食品安全处理、包装及受控场内储存。 |
| market_state | 设施出厂时的净重去壳坚果产品，鲜或干制状态按实际声明，并披露物种、形态、水分基准、等级或规格、处理状态、原产地和批次标识。 |

## 3. 参考流

| 字段 | 值 |
| --- | --- |
| What | 在设施出厂时满足已声明市场规格的产品特定去壳坚果。 |
| How much | 1 kg 去除包装和非产品异物后的去壳产品净质量。 |
| How well | 声明物种、形态、水分基准、质量或等级、处理状态、原产地和批次，并满足产品特定法律或商业要求。 |
| How long or cycle | 出厂时的一个已声明生产批次；不表示消费者使用期限。 |
| reference_flow_link | reference_shelled_nut_product |

| 字段 | 值 |
| --- | --- |
| 参考数量 | 1 kg |
| 参考产品流 | 杏仁 `05bb565f-a834-4543-8d65-dd4029d5deea` |
| 参考流属性 | Mass `93a60a56-a3c8-11da-a746-0800200b9a66` |
| 参考单位组 | Units of mass `93a60a57-a4c8-11da-a746-0800200c9a66` |
| 参考单位 | kg |
| 必需限定信息 | 产品通用名和学名；确认 Almond UUID 适用，或提供替换产品流 UUID 及复核决定；完整仁或碎仁；鲜或干制状态；生、漂烫、巴氏杀菌或其他已声明处理；水分含量及湿基或干基；质量等级或买方规格；原产国家及地区；收获年份或批次；设施与路线；包装状态 |

构建前景数据包时，`必需限定信息` 中列出的信息应在数据集元数据、过程说明、参考流备注、产品说明或等效数据包字段中明确声明。缺失必需限定信息的数据包视为参考流定义不完整。不得仅因缺少产品特定替代流而保留 Almond UUID。

## 4. 计量与单位规则

| rule_id | 适用对象 | 必需流属性 | 必需单位 | 规则 |
| --- | --- | --- | --- | --- |
| `reference_net_mass` | 参考去壳坚果产品 | Mass `93a60a56-a3c8-11da-a746-0800200b9a66` | kg | 扣除皮重和包装后确定产品净质量。说明该质量为按收到状态计量还是已调整到声明的水分基准；不得应用未声明的干物质换算。 |
| `lot_mass_consistency` | 各前景过程 | Mass `93a60a56-a3c8-11da-a746-0800200b9a66` | kg | 在同一批次和水分基准下记录投入、产品、共产品、剔除物和废物质量，或记录用于对齐基准的每项换算。 |
| `resource_normalization` | 水、能源和包装记录 | 已记录物理属性 | 已记录原始单位和归一化单位 | 保留仪表、发票或领料记录的原始单位，在将资源用量归一化至 1 kg 参考产品前记录换算因子。 |
| `almond_ddp06_applicability` | 声称符合 UNECE DDP-06 的产品 | Mass `93a60a56-a3c8-11da-a746-0800200b9a66` 和实测水分质量分数 | kg 和质量百分比 | DDP-06 水分和商业质量规则仅适用于该标准范围内的完整甜杏仁仁。不得把其 6.5% 水分上限应用于非杏仁坚果或被排除的杏仁形态和处理。`unece-ddp-06-almond-kernels-2024` |

## 5. 系统边界

### 边界概化

| 字段 | 值 |
| --- | --- |
| declared_starting_condition | 在首个由前景控制的作业处接收的坚果物料，并按物种、原产地、收获年份或批次、带壳或去壳状态、水分基准、先前处理和供应商加以识别。 |
| starting_condition_role | 前景门口投入。接收带壳物料时纳入去壳；接收已去壳物料时，将其视为同类别递归投入，而不重建其上游生产。 |
| product_classification_scope | 输出产品必须确认属于 CPC 3.0 子类 21429。Almond UUID 仅为杏仁代表，绝非该子类的范围等同标识。 |
| recursive_input_rule | 将外购或转入的同类别去壳坚果记录为附带上游数据集的技术圈投入。不得重新运行通用去壳路线，也不得静默替换为 Almond UUID。 |
| upstream_dataset_requirement | 为研究边界所需的接收坚果物料、电力、燃料、供水、包装材料、运输和处理服务链接产品特定上游数据集。产品标识未解析时要求人工复核。 |
| disclosure | 声明物种、产品流决定、原产地、批次或收获年份、接收状态、加工和处理路线、质量与水分基准、产率、剔除物及共产品去向、包装、储存条件、地理、技术、时间段及全部前景排除项。 |

| rule_id | 适用对象 | 规则 | source_ids |
| --- | --- | --- | --- |
| `sb_foreground_gate` | 前景生产 | 纳入批次接收和标识控制、适用的去壳与分离、清理或调理、分选与分级、可选产品特定安全处理、包装及至出厂的受控场内储存。省略所列作业时必须标为不适用，并给出产品和路线原因。 | `codex-cxc-6-1972-tree-nuts`; `eu-recommendation-2021-2279-pef` |
| `sb_upstream_links` | 从摇篮到大门投影 | 农业生产、供应商加工、外购能源和物料及入厂运输，只有在链接产品特定上游数据集并披露不直接进行前景采集的排除理由时，才可留在前景大门外。 | `eu-recommendation-2021-2279-pef` |
| `sb_downstream_limit` | 数据集使用 | 设施出厂后的分销、零售、消费者制备或消费以及生命末期均不属于本前景数据集。完整生命周期研究必须补充并论证适用下游阶段，不得把本门到门数据集单独表述为完整 PEF 研究。 | `eu-recommendation-2021-2279-pef` |
| `sb_standard_scope` | 产品特定标准的使用 | CXC 6-1972 的过程和卫生条款仅用于其范围内的树坚果。DDP-06 仅用于符合条件的完整甜杏仁仁。对于非树坚果和其他产品形态，应采用已核验的产品特定法律或技术规则，或要求人工复核。 | `codex-cxc-6-1972-tree-nuts`; `unece-ddp-06-almond-kernels-2024`; `unsd-cpc-3-0-explanatory-notes-2025` |

## 6. 过程清单结构

### 过程图

| process_id | 过程名称 | 纳入状态 | 纳入条件 | 建模角色 | 定量参考 |
| --- | --- | --- | --- | --- | --- |
| `lot_receipt` | 批次接收与标识控制 | required | 始终适用；必须声明起始状态和产品标识。 | 建立前景大门、接收投入和拒收物料。 | 接收坚果物料质量 |
| `shelling_separation` | 去壳与果仁分离 | conditional | 当接收物料带壳，或需在报告设施内去除果壳或外壳时纳入。 | 将可食果仁与果壳、外壳、细料和剔除物分离。 | 去壳果仁中间体质量 |
| `kernel_conditioning_grading` | 果仁清理、调理与分级 | required | 始终纳入检验和分级；仅在实际进行且仍属于已声明产品类别时纳入清洗、干燥、漂烫、巴氏杀菌或其他作业。 | 生产符合已声明规格的去壳坚果。 | 分级去壳坚果质量 |
| `packing_storage` | 包装与受控场内储存 | required | 始终纳入包装；按实际处于前景控制下的期间纳入储存负荷。 | 在设施出厂时交付参考产品。 | 1 kg 净重参考产品 |

### 过程：批次接收与标识控制（`lot_receipt`）

#### 输入

##### 产品流

###### 接收坚果物料（`received_nut_material`）

记录进入前景控制的批次。选定流必须描述实际物种以及带壳或去壳状态；非杏仁投入不得使用 Almond UUID。

- 选定流：产品特定接收坚果物料；存在已核验天工流时必须提供 UUID
- 流属性/单位：Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- 数量规则：接收时实测净接收质量，并记录水分基准
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：产品特定（`product_specific`）
- 归一化基准：每批次，并在计算后按每 1 kg 参考产品归一化
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_lot_identity_mass`
- 来源：`unsd-cpc-3-0-explanatory-notes-2025`; `codex-cxc-6-1972-tree-nuts`

##### 废物流

##### 基本流

#### 输出

##### 产品流

###### 接收的合格坚果物料（`accepted_nut_material`）

记录在完成标识和接收检查后放行加工的质量。

- 选定流：产品特定的接收合格坚果物料
- 流属性/单位：Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- 数量规则：同一接收批次的实测合格质量
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每批次，并在计算后按每 1 kg 参考产品归一化
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_lot_identity_mass`
- 来源：`codex-cxc-6-1972-tree-nuts`

##### 废物流

###### 接收剔除物（`receipt_rejects`）

记录被拒收、受污染、虫害、霉变、含异物或其他不适于使用的物料及实际去向。

- 选定流：产品特定的被拒收坚果物料
- 流属性/单位：Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- 数量规则：按去向类别实测剔除质量
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每批次，并在计算后按每 1 kg 参考产品归一化
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_mass_outputs_disposition`
- 来源：`codex-cxc-6-1972-tree-nuts`

##### 基本流

### 过程：去壳与果仁分离（`shelling_separation`）

#### 输入

##### 产品流

###### 接收的合格带壳坚果（`accepted_inshell_nuts`）

仅当前景设施内进行去壳时记录。

- 选定流：产品特定的接收合格带壳坚果
- 流属性/单位：Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- 数量规则：投入去壳的实测质量
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：产品特定（`product_specific`）
- 归一化基准：每去壳批次，并在计算后按每 1 kg 参考产品归一化
- 基准类型：过程输出（`process_output`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_lot_identity_mass`
- 来源：`codex-cxc-6-1972-tree-nuts`

###### 去壳能源（`shelling_energy`）

记录去壳、分离、风选和输送设备使用的计量或分配电力与燃料。

- 选定流：产品特定外购电力和燃料流
- 流属性/单位：Energy / 原始仪表或发票单位，以及经记录换算后的 kWh 或 MJ
- 数量规则：去壳批次的实测用量或有记录的设备级分配量
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：技术特定（`technology_specific`）
- 归一化基准：每 kg 去壳果仁中间体
- 基准类型：过程输出（`process_output`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_resources_operations`
- 来源：`eu-recommendation-2021-2279-pef`

###### 去壳用水（`shelling_water`）

仅在清洗、湿法去壳或清洁用水跨越过程边界时记录。

- 选定流：产品特定供水流
- 流属性/单位：记录的质量或体积 / kg 或 m3
- 数量规则：去壳批次的实测供水量；干法路线标为不适用
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：技术特定（`technology_specific`）
- 归一化基准：每 kg 去壳果仁中间体
- 基准类型：过程输出（`process_output`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_resources_operations`
- 来源：`codex-cxc-6-1972-tree-nuts`

##### 废物流

##### 基本流

#### 输出

##### 产品流

###### 去壳果仁中间体（`shelled_kernel_intermediate`）

记录去壳后、最终分级前产出的可食果仁质量。

- 选定流：产品特定去壳果仁中间体
- 流属性/单位：Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- 数量规则：按已声明水分基准实测果仁质量
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：产品特定（`product_specific`）
- 归一化基准：每去壳批次
- 基准类型：过程输出（`process_output`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_mass_outputs_disposition`
- 来源：`codex-cxc-6-1972-tree-nuts`

###### 作为商品的果壳、外壳或降级物料（`shell_hull_coproduct`）

仅当物料具有已记录客户或内部生产用途，且作为共产品而非废物处理时记录本行。

- 选定流：产品特定的果壳、外壳或降级物料共产品
- 流属性/单位：Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- 数量规则：按已记录去向转移为共产品的实测质量
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每去壳批次，并在分配后按每 1 kg 参考产品归一化
- 基准类型：过程输出（`process_output`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_mass_outputs_disposition`
- 来源：`eu-recommendation-2021-2279-pef`

##### 废物流

###### 送往处理的果壳、外壳、细料和剔除物（`shell_hull_waste`）

仅记录作为废物管理的物料；不得重复计入已报告为共产品的质量。

- 选定流：产品特定的果壳、外壳、细料和剔除废物
- 流属性/单位：Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- 数量规则：按处理或处置去向实测废物质量
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每去壳批次，并在计算后按每 1 kg 参考产品归一化
- 基准类型：过程输出（`process_output`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_mass_outputs_disposition`
- 来源：`eu-recommendation-2021-2279-pef`

###### 去壳废水（`shelling_wastewater`）

采用湿法作业时记录废水，并包括去向和处理路线。

- 选定流：产品特定的送处理废水
- 流属性/单位：记录的质量或体积 / kg 或 m3
- 数量规则：去壳批次的实测排放量或根据水量平衡计算
- 数值来源模式：计算值（`calculated_value`）
- 适用范围：技术特定（`technology_specific`）
- 归一化基准：每 kg 去壳果仁中间体
- 基准类型：过程输出（`process_output`）
- 证据类型：由采集数据计算（`calculated_from_collection`）
- 采集协议：`cp_resources_operations`
- 来源：`codex-cxc-6-1972-tree-nuts`

##### 基本流

### 过程：果仁清理、调理与分级（`kernel_conditioning_grading`）

#### 输入

##### 产品流

###### 进入调理与分级的果仁物料（`kernel_input`）

记录进入清理、检验、调理和分级的产品特定批次。

- 选定流：产品特定去壳果仁中间体
- 流属性/单位：Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- 数量规则：进入过程的实测果仁质量
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：产品特定（`product_specific`）
- 归一化基准：每调理与分级批次
- 基准类型：过程输出（`process_output`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_lot_identity_mass`
- 来源：`codex-cxc-6-1972-tree-nuts`

###### 调理与分级能源（`conditioning_grading_energy`）

记录清理、输送、干燥、风选、光学或人工分选、分级及任何已声明食品安全处理所用的电力和燃料。

- 选定流：产品特定外购电力和燃料流
- 流属性/单位：Energy / 原始仪表或发票单位，以及经记录换算后的 kWh 或 MJ
- 数量规则：批次的实测用量或有记录的设备级分配量
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：技术特定（`technology_specific`）
- 归一化基准：每 kg 分级去壳坚果
- 基准类型：过程输出（`process_output`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_resources_operations`
- 来源：`codex-cxc-6-1972-tree-nuts`; `eu-recommendation-2021-2279-pef`

###### 调理用水和过程助剂（`conditioning_water_aids`）

清洗、漂烫、卫生或其他已声明作业使用水和过程助剂时记录；在生成的数据集中分别识别每种物料。

- 选定流：产品特定的水和过程助剂流
- 流属性/单位：适用记录属性 / 原始采购或仪表单位
- 数量规则：按物料和批次实测领用量或计量量；干法路线标为不适用
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：技术特定（`technology_specific`）
- 归一化基准：每 kg 分级去壳坚果
- 基准类型：过程输出（`process_output`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_resources_operations`
- 来源：`codex-cxc-6-1972-tree-nuts`

##### 废物流

##### 基本流

#### 输出

##### 产品流

###### 分级去壳坚果（`graded_shelled_nuts`）

记录满足已声明物种特定及买方或法规规格的产品质量。

- 选定流：产品特定分级去壳坚果；杏仁 `05bb565f-a834-4543-8d65-dd4029d5deea` 仅用于已确认的杏仁代表情形
- 流属性/单位：Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- 数量规则：按已声明水分基准实测合格产品质量
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：产品特定（`product_specific`）
- 归一化基准：每调理与分级批次
- 基准类型：过程输出（`process_output`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_quality_and_product_release`
- 来源：`unsd-cpc-3-0-explanatory-notes-2025`; `unece-ddp-06-almond-kernels-2024`

##### 废物流

###### 调理与分级剔除物（`conditioning_grading_rejects`）

按去向分别记录异物、缺陷果仁、集尘物和其他移除物料；可销售的降级产品应重新分类为共产品并应用第 7 节。

- 选定流：产品特定调理与分级剔除物
- 流属性/单位：Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- 数量规则：按剔除物类型和去向实测质量
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每调理与分级批次，并在计算后按每 1 kg 参考产品归一化
- 基准类型：过程输出（`process_output`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_mass_outputs_disposition`
- 来源：`codex-cxc-6-1972-tree-nuts`

###### 调理废水（`conditioning_wastewater`）

清洗、漂烫或卫生用水跨越前景边界时记录废水。

- 选定流：产品特定的送处理废水
- 流属性/单位：记录的质量或体积 / kg 或 m3
- 数量规则：按批次实测排放量或根据水量平衡计算
- 数值来源模式：计算值（`calculated_value`）
- 适用范围：技术特定（`technology_specific`）
- 归一化基准：每 kg 分级去壳坚果
- 基准类型：过程输出（`process_output`）
- 证据类型：由采集数据计算（`calculated_from_collection`）
- 采集协议：`cp_resources_operations`
- 来源：`codex-cxc-6-1972-tree-nuts`

##### 基本流

###### 直接粉尘、燃烧或制冷剂排放（`conditioning_direct_emissions`）

仅当前景设备直接排放时记录基本流；构建数据集时选择已核验的基本流 UUID。

- 选定流：产品和技术特定的直接基本流；发布数据集前必须提供 UUID
- 流属性/单位：适用流属性 / 实测或计算单位
- 数量规则：实测排放，或使用有引证因子根据所采集燃料、制冷剂或治理记录计算
- 数值来源模式：计算值（`calculated_value`）
- 适用范围：技术特定（`technology_specific`）
- 归一化基准：每 kg 分级去壳坚果
- 基准类型：过程输出（`process_output`）
- 证据类型：由采集数据计算（`calculated_from_collection`）
- 采集协议：`cp_resources_operations`
- 来源：`eu-recommendation-2021-2279-pef`

### 过程：包装与受控场内储存（`packing_storage`）

#### 输入

##### 产品流

###### 待包装的分级去壳坚果（`product_for_packing`）

记录转入包装的已放行产品批次。

- 选定流：产品特定分级去壳坚果；杏仁 `05bb565f-a834-4543-8d65-dd4029d5deea` 仅用于已确认的杏仁代表情形
- 流属性/单位：Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- 数量规则：进入包装的实测产品质量
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：产品特定（`product_specific`）
- 归一化基准：每包装批次
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_quality_and_product_release`
- 来源：`unsd-cpc-3-0-explanatory-notes-2025`

###### 初级和次级包装（`packaging_materials`）

按实际领料或采购数量分别记录每种包装材料、组件和可重复使用运输器具。

- 选定流：产品特定包装材料流
- 流属性/单位：适用质量或件数属性 / kg，或件数及实测单件质量
- 数量规则：批次实测领用材料量减去有记录的重复使用或退回数量
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每 1 kg 净重参考产品
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_packing_storage`
- 来源：`eu-recommendation-2021-2279-pef`

###### 包装与储存能源（`packing_storage_energy`）

记录包装线能源及实际受控储存期间的能源，包括共用仪表的有记录分配。

- 选定流：产品特定外购电力和燃料流
- 流属性/单位：Energy / 原始仪表或发票单位，以及经记录换算后的 kWh 或 MJ
- 数量规则：在批次包装与储存期间的实测用量或有记录分配量
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每 1 kg 净重参考产品
- 基准类型：储存期限（`storage_duration`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_packing_storage`
- 来源：`codex-cxc-6-1972-tree-nuts`; `eu-recommendation-2021-2279-pef`

##### 废物流

##### 基本流

#### 输出

##### 产品流

###### 参考去壳坚果产品（`reference_shelled_nut_product`）

本行是定量参考。Almond UUID 仅对已确认的杏仁代表情形有效；每种非杏仁产品均要求已核验产品特定流或人工复核。

- 选定流：杏仁 `05bb565f-a834-4543-8d65-dd4029d5deea` 仅用于杏仁代表情形；否则使用已核验产品特定流
- 流属性/单位：Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- 数量规则：扣除皮重后的 1 kg 出厂产品净重，根据前景放行记录归一化
- 数值来源模式：计算值（`calculated_value`）
- 适用范围：产品特定（`product_specific`）
- 归一化基准：1 kg 净重参考产品
- 基准类型：参考流（`reference_flow`）
- 证据类型：由采集数据计算（`calculated_from_collection`）
- 采集协议：`cp_packing_storage`
- 来源：`unsd-cpc-3-0-explanatory-notes-2025`

##### 废物流

###### 包装损耗和受损产品（`packing_losses`）

按材料和去向记录包装边角料、受损容器、洒落产品以及包装和储存期间降级或丢弃的产品。

- 选定流：产品特定包装和产品废物流
- 流属性/单位：Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- 数量规则：按材料和去向实测损失质量
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每 1 kg 净重参考产品
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_packing_storage`
- 来源：`eu-recommendation-2021-2279-pef`

##### 基本流

###### 场内储存制冷剂直接泄漏（`storage_refrigerant_leakage`）

仅当前景控制下的冷藏设备在报告期内发生制冷剂泄漏时记录。

- 选定流：制冷剂特定基本流；发布数据集前必须提供 UUID
- 流属性/单位：Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- 数量规则：根据实测充注和回收记录计算批次份额，扣除有记录的转移量
- 数值来源模式：计算值（`calculated_value`）
- 适用范围：技术特定（`technology_specific`）
- 归一化基准：每 1 kg 净重参考产品及实际储存期限
- 基准类型：储存期限（`storage_duration`）
- 证据类型：由采集数据计算（`calculated_from_collection`）
- 采集协议：`cp_packing_storage`
- 来源：`eu-recommendation-2021-2279-pef`

## 7. 分配与共产品处理

| rule_id | 适用对象 | 规则 | source_ids |
| --- | --- | --- | --- |
| `alloc_avoid` | 所有多功能前景过程 | 首先通过采集细分过程数据避免分配，或在符合研究目标时通过系统扩展避免分配。将可直接归属的投入和排放保留给引起这些投入和排放的产品或功能。 | `eu-recommendation-2021-2279-pef` |
| `alloc_physical` | 果仁、果壳、外壳、降级产品或服务之间不可避免的分配 | 无法细分或系统扩展时，采用与所提供功能相关、有记录且可量化的物理关系。质量分配不是自动选择；必须论证质量为何反映基本关系，并使用对齐的水分基准。 | `eu-recommendation-2021-2279-pef` |
| `alloc_economic` | 不存在可辩护物理关系的多功能过程 | 使用经济分配时，记录产品状态、市场、价格来源、平均期、币种和计算方法；一致应用该方法并披露敏感性检查。不得仅因产出价值低而分配零负荷。 | `eu-recommendation-2021-2279-pef` |
| `alloc_disposition` | 果壳、外壳、剔除物、细料和降级产品 | 根据有记录去向，将每项产出仅一次分类为参考产品、共产品或废物。不得在产品行与废物行重复。除非所选经复核方法另有规定，废物处理负荷仍与该过程关联。 | `eu-recommendation-2021-2279-pef` |

## 8. 前景数据采集、计算与质量规则

### 数据采集协议

| protocol_id | process_id | flow_role | record_type | raw_fields | collection_method | unit | frequency | temporal_coverage | site_scope | aggregation_rule | quality_evidence |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| `cp_lot_identity_mass` | `lot_receipt`; `shelling_separation`; `kernel_conditioning_grading` | 接收、合格和转移的坚果物料 | 收货单、秤量记录、批次谱系记录 | lot_id; supplier; common_name; scientific_name; origin; crop_year; receipt_state; treatment_state; gross_mass; tare_mass; net_mass; moisture_value; moisture_method; product_flow_uuid_decision | 校准秤量加标识与可追溯性审核 | kg; percent moisture | 每批次和每次转移 | 已声明报告期 | 每个报告设施和生产线 | 保留批次级记录；仅在核对转移和水分基准后汇总 | 校准记录；签字收货记录；供应商规格；流标识复核决定 |
| `cp_mass_outputs_disposition` | `lot_receipt`; `shelling_separation`; `kernel_conditioning_grading` | 产品、共产品、剔除物、果壳、外壳、细料和废水 | 秤单、容器计数及单件质量、废物联单、转移记录 | lot_id; output_type; mass_or_volume; moisture_basis; destination; product_or_waste_status; customer_or_treatment | 称量各物流，或使用有记录的容器计数换算；适用时计量废水 | kg; m3 | 每批次或每次移除事件 | 与产品输出相同期间 | 每个报告设施和过程 | 按过程、产出状态和去向汇总；防止产品/废物重复分类 | 秤校准；去向接收单；废物联单；换算记录 |
| `cp_resources_operations` | `shelling_separation`; `kernel_conditioning_grading` | 电力、燃料、水、过程助剂、废水和直接排放 | 仪表、发票、燃料领料、化学品领料、维护和治理日志 | timestamp; meter_id; opening_reading; closing_reading; fuel_or_material; quantity; unit; process; allocation_driver; production_lot; emission_factor_source | 优先直接分表计量；否则根据共用记录进行有记录分配 | native unit; kWh; MJ; kg; m3 | 每批次或可获得的最短仪表间隔 | 与覆盖生产相同期间 | 每个报告设施及相关设备 | 扣除有记录的非生产用量；按已声明驱动因子分配共用记录；批次质量核对后归一化 | 仪表校准；发票；领料日志；因子引用；分配工作表 |
| `cp_quality_and_product_release` | `kernel_conditioning_grading`; `packing_storage` | 分级并放行的去壳产品 | 实验室结果、检验表、放行证书 | lot_id; common_name; scientific_name; form; treatment_state; moisture_value; moisture_method; defects; grade_or_specification; origin; crop_year; release_mass; standard_claim | 产品特定抽样及公认试验或检验方法 | kg; percent; declared defect unit | 每个放行批次 | 与生产相同期间 | 每个产品和设施 | 不跨物种平均；结果与放行批次一并保留 | 实验室认可或方法；检验员记录；适用标准及范围决定 |
| `cp_packing_storage` | `packing_storage` | 包装、已包装产品、储存能源、损耗和制冷剂 | 包装领料、包装线记录、仓库日志、仪表、制冷剂服务记录 | lot_id; package_component; material; issued_quantity; returned_quantity; packed_gross_mass; tare_mass; storage_start; storage_end; storage_condition; energy; refrigerant_recharge; refrigerant_recovery; loss_destination | 实测领用与质量记录，并链接仓库及维护日志 | kg; count; kWh; MJ; day | 每个包装批次和储存期 | 与出厂输出相同期间 | 每个报告设施和储存系统 | 计算出厂净质量；按批次实际停留时间汇总储存负荷；核对制冷剂充注和回收 | 包装规格；秤和仪表校准；仓库日志；服务发票 |

### 计算规则

| rule_id | 适用对象 | 公式或规则 | 输入 | 输出 | source_ids |
| --- | --- | --- | --- | --- | --- |
| `calc_net_reference_mass` | 包装出厂产品 | 产品净质量 = 包装毛质量 - 皮重及排除的包装质量；用净出厂质量归一化全部清单数量 | 包装毛质量；皮重；包装质量；放行批次标识 | kg 净重参考产品及每 kg 归一化清单 | `eu-recommendation-2021-2279-pef` |
| `calc_process_yield` | 接收、去壳、调理和分级 | 产率 = 对齐基准后的产品输出质量 / 对齐基准后的合格投入质量；结果同时报告物种、路线和水分基准 | 合格投入质量；产品输出质量；水分值与换算 | 产品特定过程产率 |  |
| `calc_mass_balance` | 各前景过程和完整前景路线 | 质量平衡差额 = 对齐基准后的投入质量 - 产品、共产品、废物、实测排放及有记录库存变化质量之和；调查并披露差额，不应用虚构容差 | 全部投入和产出质量；库存变化；水分换算 | 已核对质量平衡和已披露残差 |  |
| `calc_resource_intensity` | 能源、水、过程助剂和包装 | 资源强度 = 已核对资源数量 / 适用过程输出或净重参考产品质量，并使用有记录的单位换算 | 仪表、发票、领料和产出记录 | 每声明基准的资源用量 | `eu-recommendation-2021-2279-pef` |
| `calc_allocation_factors` | 多功能过程 | 依次应用 `alloc_avoid`、`alloc_physical`、`alloc_economic`；纳入共产品的因子必须合计为完整分配份额，并与源数据一并保留 | 细分证据；物理驱动因子；或价格与市场记录 | 有记录的分配因子和已分配清单 | `eu-recommendation-2021-2279-pef` |

### 数据质量要求

| requirement_id | 适用对象 | 要求 | 证据 |
| --- | --- | --- | --- |
| `dq_product_identity` | 每个前景数据包 | 解析实际产品标识和 CPC 21429 适用性。仅为已确认杏仁代表情形保留 Almond UUID；否则在发布前存储已核验产品特定 UUID 或人工复核决定。 | 批次标识；产品说明；天工流决定；`unsd-cpc-3-0-explanatory-notes-2025` |
| `dq_traceability` | 全部产品和物料流 | 保持从接收到出厂的批次谱系，包括原产地、收获年份或批次、接收状态、处理状态、水分基准、规格和移除物料去向。 | 接收、转移、检验和出厂记录 |
| `dq_completeness` | 全部前景过程 | 覆盖所有适用的所列过程，并核对主要物料、水、能源、包装、废物、共产品、废水和直接排放记录。不适用行须给出路线特定原因。 | 过程图；仪表和质量平衡核对；排除日志 |
| `dq_representativeness` | 活动数据和链接数据集 | 对实际物种、设施、技术和报告期评估并披露技术、地理、时间代表性及精度；未经记录的代表性和加权决定，不得平均不同坚果产品。 | 前景记录和 DQR 披露；`eu-recommendation-2021-2279-pef` |
| `dq_standard_scope` | 标准或规格声明 | 应在应用商品标准前核验植物物种、产品形态、处理和市场声明。DDP-06 数据只能约束符合条件的完整甜杏仁仁；CXC 6-1972 过程规则只能支持其范围内的树坚果。 | 适用性检查表；实验室或检验记录；`unece-ddp-06-almond-kernels-2024`; `codex-cxc-6-1972-tree-nuts` |
| `dq_range_evidence` | 重要清单流 | 必须使用前景值。由于缺少经复核的跨产品证据，本 PCR 不提供类别级数值默认值或 QA 范围；在将 PCR 推进为 active 方法前，应以产品和路线特定的经复核范围补足该证据缺口。 | 方法评审期间新增的来源复核记录和产品特定证据 |

## 9. 校验规则

| rule_id | 适用对象 | 规则 | source_ids |
| --- | --- | --- | --- |
| `val_identity_scope` | 产品标识 | 缺失 CPC 21429 适用性、物种或产品状态，或将 Almond UUID 用于非杏仁产品时，自动校验失败。其他坚果缺少已核验产品特定流时要求人工复核。 | `unsd-cpc-3-0-explanatory-notes-2025` |
| `val_reference_flow` | 参考产品 | 确认在已声明水分基准下恰为 1 kg 净重产品，Mass UUID 为 `93a60a56-a3c8-11da-a746-0800200b9a66`，单位组 UUID 为 `93a60a57-a4c8-11da-a746-0800200c9a66`，单位为 kg；必须排除包装质量。 | `eu-recommendation-2021-2279-pef` |
| `val_process_coverage` | 前景边界 | 确认已处理过程图中的四个条目，接收带壳物料时纳入 `shelling_separation`，且每项省略的条件性作业都有产品和路线特定原因。 | `codex-cxc-6-1972-tree-nuts`; `eu-recommendation-2021-2279-pef` |
| `val_mass_balance` | 各过程和完整路线 | 确认水分和单位基准已对齐，核对产品、共产品、废物、废水、排放和库存变化，并报告每项未解释残差；本 PCR 不提供虚构验收容差。 |  |
| `val_allocation` | 多功能过程 | 确认在可能时已避免分配；否则核验所选物理或经济关系、输入记录、因子计算、完整性、一致应用和披露。 | `eu-recommendation-2021-2279-pef` |
| `val_almond_ddp06` | 声称符合 DDP-06 的杏仁产品 | 仅在声称符合 DDP-06 时，确认产品是符合条件的完整甜杏仁仁，不存在被排除的形态和处理，使用适用方法测得水分质量分数不超过 6.5%，并保留所需质量、呈现和标识证据。 | `unece-ddp-06-almond-kernels-2024` |
| `val_data_quality` | 数据集放行 | 确认批次可追溯性、测量证据、校准、时间覆盖、场址与技术覆盖、链接上游数据集、排除项和代表性披露。产品流标识未解析或缺失主要前景记录时，校验结论为不确定。 | `eu-recommendation-2021-2279-pef` |

## 10. 发布数据集画像

| 字段 | 值 |
| --- | --- |
| dataset_role | CPC 21429 范围内已声明去壳坚果在设施出厂时的产品和路线特定前景生产数据包。 |
| downstream_use | 经复核、产品流解析、上游链接补齐和质量披露后可作为 `secondary_dataset`；`background_dataset`。 |
| allowed_use | 对已声明物种、原产地、产品状态、设施、技术、期间和包装进行产品特定过程或从摇篮到大门建模；仅在代表性和加权均有记录时进行汇总。 |
| excluded_use | 由 Almond UUID 自动代表整个 CPC 21429 子类；未经复核在坚果物种间替代；用于带壳、烘烤、盐渍、糖渍、调味、复合或其他范围外产品；在未补充适用规则、生命周期阶段、验证及协调情景时用于比较声明或 PEF 符合性声明。 |
| required_metadata | PCR id；CPC 坐标及范围决定；产品通用名和学名；所选产品流 UUID 及代表局限；原产地；收获年份或批次；设施；技术；接收和市场状态；形态；处理；水分值、方法及基准；等级或规格；时间段；地理；过程覆盖；产率；分配；包装；储存；链接上游数据集。 |
| required_quality_disclosure | 数据源及采集覆盖；校准和试验方法；质量平衡残差；缺失的重要流范围；产品流复核状态；技术、地理、时间代表性及精度；排除项；分配方法及敏感性；商品标准适用性。 |
| update_trigger | 物种或产品标识、路线、设施、技术、产品状态、水分或等级基准、处理、包装、储存系统、分配关系、报告期、法律或商业规格、天工产品流解析或重大来源证据发生变化。 |

## 11. 数据源

| 来源 id | 类型 | 引用 | 用途 |
| --- | --- | --- | --- |
| `unsd-cpc-3-0-explanatory-notes-2025` | official_guidance | 联合国统计司，Central Product Classification (CPC) Version 3.0 Explanatory Notes，子类 21429，2025-06-30。https://unstats.un.org/unsd/classifications/Econ/Download/In%20Text/CPC_Ver_3.0_Exp_Notes_30Jun2025.pdf（检索于 2026-08-11） | 官方产品类别范围和示例；不作为过程或数量证据。 |
| `codex-cxc-6-1972-tree-nuts` | standard | Codex Alimentarius，CXC 6-1972，Code of Hygienic Practice for Tree Nuts。https://workspace.fao.org/sites/codex/Standards/CXC%206-1972/CXC_006e.pdf（检索于 2026-08-11） | 仅用于树坚果的过程分解、接收控制、去壳、干燥、缺陷分离、包装、储存和卫生要求；不扩展到非树坚果。 |
| `unece-ddp-06-almond-kernels-2024` | standard | UNECE Standard DDP-06 concerning the marketing and commercial quality control of almond kernels，2024。https://unece.org/sites/default/files/2025-02/DDP-06_Almond_kernels_2024_e.pdf（检索于 2026-08-11） | 仅在该标准所述产品范围内用于窄范围 Almond 代表的限定信息、水分、质量、呈现和标识。 |
| `eu-recommendation-2021-2279-pef` | official_guidance | Commission Recommendation (EU) 2021/2279 of 15 December 2021，Annex I，Product Environmental Footprint Method。https://eur-lex.europa.eu/eli/reco/2021/2279/oj/eng（检索于 2026-08-11） | 功能或声明单位、参考流、供应链边界披露、多功能层级、企业特定数据和数据质量维度；不作为坚果工艺证据。 |
