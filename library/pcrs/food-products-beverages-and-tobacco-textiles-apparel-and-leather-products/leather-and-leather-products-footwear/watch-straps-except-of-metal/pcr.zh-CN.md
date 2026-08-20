---
pcr_id: pcr.food-products-beverages-and-tobacco-textiles-apparel-and-leather-products.leather-and-leather-products-footwear.watch-straps-except-of-metal
language: zh-CN
status: candidate
sync_with: pcr.en-US.md
---

# 非金属表带
+## 1. 范围与适用性

本 PCR 适用于表带本体不是金属的完整表带，包括以皮革、模塑硅橡胶、热塑性聚氨酯和聚酰胺织带为本体的原装或替换表带。表扣、表扣针舌和生耳等少量金属组件在装入非金属表带时仍属于范围内。

金属链带、表壳、手表、电子模块、带传感器的智能腕带、独立表扣，以及成品皮革、聚合物配混料、织带、颜料、胶黏剂和五金的上游生产，不属于前景生产。其负荷通过产品投入及相符的上游数据集进入模型。默认工厂门边界不包括配送、使用、维护和寿命终止。

生产者应声明准确的表带本体材料及牌号、结构路线、兼容手表接口、尺寸、闭合件与五金组成、颜色和表面处理、生产地理和时期、产品净质量、包装配置、前景过程覆盖以及与代表性过程图的任何偏离。

## 2. 产品类别识别

| 字段 | 值 |
| --- | --- |
| canonical_pcr_id | pcr.food-products-beverages-and-tobacco-textiles-apparel-and-leather-products.leather-and-leather-products-footwear.watch-straps-except-of-metal |
| classification_refs | CPC 3.0：29230，Watch straps, except of metal |
| covered_products | 完整的皮革、硅橡胶、热塑性聚氨酯、聚酰胺织带及类似非金属表带，包括已装入的闭合件和手表接口五金 |
| excluded_products | 金属链带；手表和表壳；电子或带传感器的腕带；独立五金；成品材料的上游生产 |
| representative_product | 工厂门状态的非金属表带，具有声明的本体材料、已装闭合件和手表接口五金 |
| production_route | 接收成品材料与五金 → 本体转换 → 五金装配与表带组装 → 条件性表面处理与清洁 → 最终质量控制 → 包装 |
| market_state | 在工厂门放行的原装或替换用成品表带 |

## 3. 参考流

| 字段 | 值 |
| --- | --- |
| What | 在声明的配合与闭合要求下，为兼容手表提供非金属腕部固定功能 |
| How much | 1 kg 净成品表带，不含可移除包装 |
| How well | 符合生产者声明的尺寸、兼容接口、闭合完整性、外观及适用皮肤接触规范后放行 |
| How long or cycle | 工厂门的一个生产批次；不按使用寿命归一化，任何耐久测试基准均须披露 |
| reference_flow_link | `reference_watch_strap` |

| 字段 | 值 |
| --- | --- |
| 参考数量 | 1 kg |
| 参考产品流 | 表带，金属表带除外 `19a79c1e-d7a4-422d-b754-47ea82969f9f` |
| 参考流属性 | Mass `93a60a56-a3c8-11da-a746-0800200b9a66` |
| 参考单位组 | Units of mass `93a60a57-a4c8-11da-a746-0800200c9a66` |
| 参考单位 | kg |
| 必需限定信息 | 表带本体材料与牌号；结构路线；兼容手表接口；表带尺寸与尺码；闭合件与五金组成；颜色与表面处理；净质量；包装配置；生产地理与时期 |

构建前景数据包时，每项必需限定信息均应记录在数据集元数据、过程说明、参考流备注、产品说明或等效字段中。缺少限定信息时，参考流定义不完整。

## 4. 计量与单位规则

| rule_id | 适用对象 | 必需流属性 | 必需单位 | 规则 |
| --- | --- | --- | --- | --- |
| `reference_net_mass` | 参考产品 | Mass `93a60a56-a3c8-11da-a746-0800200b9a66` | kg | 称量合格表带本体及永久装入的闭合件、表带圈、生耳、缝线、胶黏剂和涂层；排除可移除袋、纸盒、内页和运输材料。 |
| `component_count_to_mass` | 计件组件和包装 | Mass | kg | 用同一 SKU 和生产期的实测平均单件质量把件数换算为质量，并保留样本量和称量记录。 |
| `utility_units` | 电力、热水与天然气 | Energy | kWh 或 MJ | 保留仪表单位和换算因子。天然气按声明的低位热值基准报告，不得把公用工程合并为一个交换。 |
| `water_volume` | 冷却水、清洁用水与废水 | Volume | m3 | 使用经校准计量或有文件支持的批次平衡；循环内部水只计一次，只记录跨边界的补充量或排放量。 |
| `dry_waste_mass` | 材料与包装废物 | Mass | kg | 按指定材料和处置方式进行皮重修正后称量；内部可重复使用退料不作为废物输出。 |

## 5. 系统边界

默认研究边界为从摇篮到工厂门。前景从接收成品表带本体材料、连接材料、五金和包装开始，到已放行并包装的表带结束。产品投入应具有覆盖原材料开采及其自身生产的上游数据集。除非研究明确扩展边界，否则配送、消费者使用和寿命终止均排除。

对于皮革路线，生皮鞣制和皮革整饰属于上游。除非报告组织确实控制这些作业并单独披露，否则不得把鞣制过程放入表带组装场址的前景清单。

### 边界概化

| 字段 | 值 |
| --- | --- |
| declared_starting_condition | 接收具有声明牌号、质量、供应商和地理信息的成品皮革、聚合物配混料或织带，以及单独供应的五金、连接材料和包装 |
| starting_condition_role | 前景工厂门转换投入 |
| product_classification_scope | 对应 CPC 3.0 subclass 29230 的完整非金属表带 |
| recursive_input_rule | 对接收后继续加工的完整非金属表带，以其上游数据集作为产品投入记录一次；不得在接收过程中递归重建同一类别 |
| upstream_dataset_requirement | 每种成品材料、化学品、公用工程、五金和包装投入均应链接地理及技术具有代表性的上游数据集；成品皮革数据须包括鞣制与整饰负荷 |
| disclosure | 声明材料路线、供应商或数据集代理、受控过程、排除作业、包装、分配、时间覆盖及未解决的上游数据缺口 |

## 6. 过程清单结构

### 过程图

| process_id | 过程名称 | 纳入状态 | 纳入条件 | 建模角色 | 定量参考 |
| --- | --- | --- | --- | --- | --- |
| `p_body_conversion` | 表带本体转换 | `required` | 至少纳入一种声明的材料路线；未使用的路线特定原子行标记为不适用。 | 对表带本体进行前景裁切、削薄、模切、热切或成型。 | 1 kg 合格转换后表带本体组件 |
| `p_hardware_assembly` | 五金装配与表带组装 | `required` | 始终纳入；只记录声明物料清单中实际存在的五金和连接材料。 | 对闭合件和手表接口组件进行前景连接、缝制与装配。 | 1 kg 合格组装表带 |
| `p_surface_finishing` | 表面处理与清洁 | `conditional` | 当前景场址进行封边涂饰、溶剂清洁、水洗或直燃干燥时纳入。 | 组装后的前景封边涂饰、清洁与干燥。 | 1 kg 表面处理后表带 |
| `p_quality_control` | 最终质量控制 | `required` | 始终纳入；依据声明路线选择表面处理后表带或未涂饰组装表带投入。 | 前景检验、尺寸及放行测试和不合格品分流。 | 1 kg 合格表带 |
| `p_packaging` | 初级与运输包装 | `required` | 始终纳入实际使用的包装；未使用的包装类型标记为不适用。 | 对放行表带进行前景包装并记录可移除包装材料。 | 1 kg 净成品表带 |

### 过程：表带本体转换（`p_body_conversion`）

#### 输入

##### 产品流

###### 成品牛皮革投入（`body_finished_bovine_leather`）

记录“成品牛皮革投入”作为跨越本过程边界的单一交换；按声明路线适用，未发生时明确标记为不适用。

- 选定流：Finished bovine leather
- 流属性/单位：Mass 93a60a56-a3c8-11da-a746-0800200b9a66 / kg; Units of mass 93a60a57-a4c8-11da-a746-0800200c9a66
- 数量规则：依据批次领用、退料、库存核对或配方称量记录取得净投入量
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：产品特定（`product_specific`）
- 归一化基准：每 1 kg 合格转换后表带本体
- 基准类型：过程输出（`process_output`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_body_conversion`
- 来源：`ec-pef-method-2021-2279`; `ec-apparel-footwear-pefcr-2025`; `jrc-tanning-hides-skins-bref-2013`

###### 硅橡胶配混料投入（`body_silicone_compound`）

记录“硅橡胶配混料投入”作为跨越本过程边界的单一交换；按声明路线适用，未发生时明确标记为不适用。

- 选定流：Silicone rubber compound
- 流属性/单位：Mass 93a60a56-a3c8-11da-a746-0800200b9a66 / kg; Units of mass 93a60a57-a4c8-11da-a746-0800200c9a66
- 数量规则：依据批次领用、退料、库存核对或配方称量记录取得净投入量
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：产品特定（`product_specific`）
- 归一化基准：每 1 kg 合格转换后表带本体
- 基准类型：过程输出（`process_output`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_body_conversion`
- 来源：`ec-pef-method-2021-2279`; `ec-apparel-footwear-pefcr-2025`

###### 热塑性聚氨酯投入（`body_tpu_granules`）

记录“热塑性聚氨酯投入”作为跨越本过程边界的单一交换；按声明路线适用，未发生时明确标记为不适用。

- 选定流：Thermoplastic polyurethane granules
- 流属性/单位：Mass 93a60a56-a3c8-11da-a746-0800200b9a66 / kg; Units of mass 93a60a57-a4c8-11da-a746-0800200c9a66
- 数量规则：依据批次领用、退料、库存核对或配方称量记录取得净投入量
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：产品特定（`product_specific`）
- 归一化基准：每 1 kg 合格转换后表带本体
- 基准类型：过程输出（`process_output`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_body_conversion`
- 来源：`ec-pef-method-2021-2279`; `ec-apparel-footwear-pefcr-2025`

###### 聚酰胺织带投入（`body_polyamide_webbing`）

记录“聚酰胺织带投入”作为跨越本过程边界的单一交换；按声明路线适用，未发生时明确标记为不适用。

- 选定流：Polyamide 6.6 woven webbing
- 流属性/单位：Mass 93a60a56-a3c8-11da-a746-0800200b9a66 / kg; Units of mass 93a60a57-a4c8-11da-a746-0800200c9a66
- 数量规则：依据批次领用、退料、库存核对或配方称量记录取得净投入量
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：产品特定（`product_specific`）
- 归一化基准：每 1 kg 合格转换后表带本体
- 基准类型：过程输出（`process_output`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_body_conversion`
- 来源：`ec-pef-method-2021-2279`; `ec-apparel-footwear-pefcr-2025`

###### 聚酯增强材料投入（`body_polyester_reinforcement`）

记录“聚酯增强材料投入”作为跨越本过程边界的单一交换；按声明路线适用，未发生时明确标记为不适用。

- 选定流：Polyester woven reinforcement fabric
- 流属性/单位：Mass 93a60a56-a3c8-11da-a746-0800200b9a66 / kg; Units of mass 93a60a57-a4c8-11da-a746-0800200c9a66
- 数量规则：依据批次领用、退料、库存核对或配方称量记录取得净投入量
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：产品特定（`product_specific`）
- 归一化基准：每 1 kg 合格转换后表带本体
- 基准类型：过程输出（`process_output`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_body_conversion`
- 来源：`ec-pef-method-2021-2279`; `ec-apparel-footwear-pefcr-2025`

###### 颜料母粒投入（`body_pigment_masterbatch`）

记录“颜料母粒投入”作为跨越本过程边界的单一交换；按声明路线适用，未发生时明确标记为不适用。

- 选定流：Silicone-compatible pigment masterbatch
- 流属性/单位：Mass 93a60a56-a3c8-11da-a746-0800200b9a66 / kg; Units of mass 93a60a57-a4c8-11da-a746-0800200c9a66
- 数量规则：依据批次领用、退料、库存核对或配方称量记录取得净投入量
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：产品特定（`product_specific`）
- 归一化基准：每 1 kg 合格转换后表带本体
- 基准类型：过程输出（`process_output`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_body_conversion`
- 来源：`ec-pef-method-2021-2279`; `ec-apparel-footwear-pefcr-2025`

###### 本体转换用电（`body_electricity`）

记录“本体转换用电”作为跨越本过程边界的单一交换；按声明路线适用，未发生时明确标记为不适用。

- 选定流：电网电力
- 流属性/单位：Energy / kWh
- 数量规则：优先分表计量；否则按有记录的设备运行时间与负荷计算
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每 1 kg 合格转换后表带本体
- 基准类型：过程输出（`process_output`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_body_conversion`
- 来源：`ec-pef-method-2021-2279`; `ec-apparel-footwear-pefcr-2025`

###### 模具冷却水投入（`body_cooling_water`）

记录“模具冷却水投入”作为跨越本过程边界的单一交换；按声明路线适用，未发生时明确标记为不适用。

- 选定流：Process cooling water
- 流属性/单位：Volume / m3
- 数量规则：归属于批次的计量补充水
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每 1 kg 合格转换后表带本体
- 基准类型：过程输出（`process_output`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_body_conversion`
- 来源：`ec-pef-method-2021-2279`; `ec-apparel-footwear-pefcr-2025`

##### 废物流

无。

##### 基本流

无。

#### 输出

##### 产品流

###### 转换后表带本体输出（`converted_strap_body`）

记录“转换后表带本体输出”作为跨越本过程边界的单一交换；按声明路线适用，未发生时明确标记为不适用。

- 选定流：Converted non-metal watch-strap body component
- 流属性/单位：Mass 93a60a56-a3c8-11da-a746-0800200b9a66 / kg; Units of mass 93a60a57-a4c8-11da-a746-0800200c9a66
- 数量规则：经校准称量的合格输出质量
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：产品特定（`product_specific`）
- 归一化基准：每个本体转换批次
- 基准类型：过程输出（`process_output`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_body_conversion`
- 来源：`ec-pef-method-2021-2279`; `ec-apparel-footwear-pefcr-2025`

##### 废物流

###### 皮革裁切边角料（`body_leather_offcuts`）

记录“皮革裁切边角料”作为跨越本过程边界的单一交换；按声明路线适用，未发生时明确标记为不适用。

- 选定流：Finished leather cutting offcuts
- 流属性/单位：Mass 93a60a56-a3c8-11da-a746-0800200b9a66 / kg; Units of mass 93a60a57-a4c8-11da-a746-0800200c9a66
- 数量规则：经皮重修正并按处置去向称量的废物质量
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每 1 kg 合格转换后表带本体
- 基准类型：过程输出（`process_output`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_body_conversion`
- 来源：`ec-pef-method-2021-2279`; `ec-apparel-footwear-pefcr-2025`

###### 硅橡胶成型废料（`body_silicone_scrap`）

记录“硅橡胶成型废料”作为跨越本过程边界的单一交换；按声明路线适用，未发生时明确标记为不适用。

- 选定流：Cured silicone rubber moulding scrap
- 流属性/单位：Mass 93a60a56-a3c8-11da-a746-0800200b9a66 / kg; Units of mass 93a60a57-a4c8-11da-a746-0800200c9a66
- 数量规则：经皮重修正并按处置去向称量的废物质量
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每 1 kg 合格转换后表带本体
- 基准类型：过程输出（`process_output`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_body_conversion`
- 来源：`ec-pef-method-2021-2279`; `ec-apparel-footwear-pefcr-2025`

###### TPU 成型废料（`body_tpu_scrap`）

记录“TPU 成型废料”作为跨越本过程边界的单一交换；按声明路线适用，未发生时明确标记为不适用。

- 选定流：Thermoplastic polyurethane moulding scrap
- 流属性/单位：Mass 93a60a56-a3c8-11da-a746-0800200b9a66 / kg; Units of mass 93a60a57-a4c8-11da-a746-0800200c9a66
- 数量规则：经皮重修正并按处置去向称量的废物质量
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每 1 kg 合格转换后表带本体
- 基准类型：过程输出（`process_output`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_body_conversion`
- 来源：`ec-pef-method-2021-2279`; `ec-apparel-footwear-pefcr-2025`

###### 聚酰胺织带边角料（`body_polyamide_offcuts`）

记录“聚酰胺织带边角料”作为跨越本过程边界的单一交换；按声明路线适用，未发生时明确标记为不适用。

- 选定流：Polyamide 6.6 webbing offcuts
- 流属性/单位：Mass 93a60a56-a3c8-11da-a746-0800200b9a66 / kg; Units of mass 93a60a57-a4c8-11da-a746-0800200c9a66
- 数量规则：经皮重修正并按处置去向称量的废物质量
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每 1 kg 合格转换后表带本体
- 基准类型：过程输出（`process_output`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_body_conversion`
- 来源：`ec-pef-method-2021-2279`; `ec-apparel-footwear-pefcr-2025`

###### 冷却水排放（`body_cooling_water_discharge`）

记录“冷却水排放”作为跨越本过程边界的单一交换；按声明路线适用，未发生时明确标记为不适用。

- 选定流：Spent mould cooling water
- 流属性/单位：Volume / m3
- 数量规则：归属于批次的计量排放量或批次水平衡
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每 1 kg 合格转换后表带本体
- 基准类型：过程输出（`process_output`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_body_conversion`
- 来源：`ec-pef-method-2021-2279`; `ec-apparel-footwear-pefcr-2025`

##### 基本流

无。


### 过程：五金装配与表带组装（`p_hardware_assembly`）

#### 输入

##### 产品流

###### 转换后表带本体投入（`assembly_converted_body`）

记录“转换后表带本体投入”作为跨越本过程边界的单一交换；按声明路线适用，未发生时明确标记为不适用。

- 选定流：Converted non-metal watch-strap body component
- 流属性/单位：Mass 93a60a56-a3c8-11da-a746-0800200b9a66 / kg; Units of mass 93a60a57-a4c8-11da-a746-0800200c9a66
- 数量规则：批次转移质量
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：产品特定（`product_specific`）
- 归一化基准：每 1 kg 合格组装表带
- 基准类型：过程输出（`process_output`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_hardware_assembly`
- 来源：`ec-pef-method-2021-2279`; `ec-apparel-footwear-pefcr-2025`

###### 不锈钢表扣投入（`assembly_stainless_buckle`）

记录“不锈钢表扣投入”作为跨越本过程边界的单一交换；按声明路线适用，未发生时明确标记为不适用。

- 选定流：Stainless steel watch-strap buckle
- 流属性/单位：Mass 93a60a56-a3c8-11da-a746-0800200b9a66 / kg; Units of mass 93a60a57-a4c8-11da-a746-0800200c9a66
- 数量规则：数量乘以同一 SKU 和生产期的实测平均单件质量
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：产品特定（`product_specific`）
- 归一化基准：每 1 kg 合格组装表带
- 基准类型：过程输出（`process_output`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_hardware_assembly`
- 来源：`ec-pef-method-2021-2279`; `ec-apparel-footwear-pefcr-2025`

###### 生耳投入（`assembly_spring_bar`）

记录“生耳投入”作为跨越本过程边界的单一交换；按声明路线适用，未发生时明确标记为不适用。

- 选定流：Stainless steel watch spring bar
- 流属性/单位：Mass 93a60a56-a3c8-11da-a746-0800200b9a66 / kg; Units of mass 93a60a57-a4c8-11da-a746-0800200c9a66
- 数量规则：数量乘以同一 SKU 和生产期的实测平均单件质量
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：产品特定（`product_specific`）
- 归一化基准：每 1 kg 合格组装表带
- 基准类型：过程输出（`process_output`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_hardware_assembly`
- 来源：`ec-pef-method-2021-2279`; `ec-apparel-footwear-pefcr-2025`

###### 表扣针舌投入（`assembly_stainless_tongue`）

记录“表扣针舌投入”作为跨越本过程边界的单一交换；按声明路线适用，未发生时明确标记为不适用。

- 选定流：Stainless steel buckle tongue
- 流属性/单位：Mass 93a60a56-a3c8-11da-a746-0800200b9a66 / kg; Units of mass 93a60a57-a4c8-11da-a746-0800200c9a66
- 数量规则：数量乘以同一 SKU 和生产期的实测平均单件质量
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：产品特定（`product_specific`）
- 归一化基准：每 1 kg 合格组装表带
- 基准类型：过程输出（`process_output`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_hardware_assembly`
- 来源：`ec-pef-method-2021-2279`; `ec-apparel-footwear-pefcr-2025`

###### 硅橡胶表带圈投入（`assembly_silicone_keeper`）

记录“硅橡胶表带圈投入”作为跨越本过程边界的单一交换；按声明路线适用，未发生时明确标记为不适用。

- 选定流：Silicone rubber watch-strap keeper
- 流属性/单位：Mass 93a60a56-a3c8-11da-a746-0800200b9a66 / kg; Units of mass 93a60a57-a4c8-11da-a746-0800200c9a66
- 数量规则：数量乘以同一 SKU 和生产期的实测平均单件质量
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：产品特定（`product_specific`）
- 归一化基准：每 1 kg 合格组装表带
- 基准类型：过程输出（`process_output`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_hardware_assembly`
- 来源：`ec-pef-method-2021-2279`; `ec-apparel-footwear-pefcr-2025`

###### 缝纫线投入（`assembly_polyester_thread`）

记录“缝纫线投入”作为跨越本过程边界的单一交换；按声明路线适用，未发生时明确标记为不适用。

- 选定流：聚酯缝纫线
- 流属性/单位：Mass 93a60a56-a3c8-11da-a746-0800200b9a66 / kg; Units of mass 93a60a57-a4c8-11da-a746-0800200c9a66
- 数量规则：依据批次领用、退料、库存核对或配方称量记录取得净投入量
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：产品特定（`product_specific`）
- 归一化基准：每 1 kg 合格组装表带
- 基准类型：过程输出（`process_output`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_hardware_assembly`
- 来源：`ec-pef-method-2021-2279`; `ec-apparel-footwear-pefcr-2025`

###### 组装胶黏剂投入（`assembly_pu_adhesive`）

记录“组装胶黏剂投入”作为跨越本过程边界的单一交换；按声明路线适用，未发生时明确标记为不适用。

- 选定流：Waterborne polyurethane adhesive
- 流属性/单位：Mass 93a60a56-a3c8-11da-a746-0800200b9a66 / kg; Units of mass 93a60a57-a4c8-11da-a746-0800200c9a66
- 数量规则：依据相应采集协议的批次记录、计量、称量或质量平衡取得
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：产品特定（`product_specific`）
- 归一化基准：每 1 kg 合格组装表带
- 基准类型：过程输出（`process_output`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_hardware_assembly`
- 来源：`ec-pef-method-2021-2279`; `ec-apparel-footwear-pefcr-2025`

###### 组装用电（`assembly_electricity`）

记录“组装用电”作为跨越本过程边界的单一交换；按声明路线适用，未发生时明确标记为不适用。

- 选定流：电网电力
- 流属性/单位：Energy / kWh
- 数量规则：优先分表计量；否则按有记录的设备运行时间与负荷计算
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每 1 kg 合格组装表带
- 基准类型：过程输出（`process_output`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_hardware_assembly`
- 来源：`ec-pef-method-2021-2279`; `ec-apparel-footwear-pefcr-2025`

##### 废物流

无。

##### 基本流

无。

#### 输出

##### 产品流

###### 组装后表带输出（`assembled_watch_strap`）

记录“组装后表带输出”作为跨越本过程边界的单一交换；按声明路线适用，未发生时明确标记为不适用。

- 选定流：Assembled non-metal watch strap
- 流属性/单位：Mass 93a60a56-a3c8-11da-a746-0800200b9a66 / kg; Units of mass 93a60a57-a4c8-11da-a746-0800200c9a66
- 数量规则：经校准称量的合格输出质量
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：产品特定（`product_specific`）
- 归一化基准：每个组装批次
- 基准类型：过程输出（`process_output`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_hardware_assembly`
- 来源：`ec-pef-method-2021-2279`; `ec-apparel-footwear-pefcr-2025`

##### 废物流

###### 线头废料（`assembly_thread_scrap`）

记录“线头废料”作为跨越本过程边界的单一交换；按声明路线适用，未发生时明确标记为不适用。

- 选定流：Waste polyester sewing thread
- 流属性/单位：Mass 93a60a56-a3c8-11da-a746-0800200b9a66 / kg; Units of mass 93a60a57-a4c8-11da-a746-0800200c9a66
- 数量规则：批次废物称量质量
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每 1 kg 合格组装表带
- 基准类型：过程输出（`process_output`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_hardware_assembly`
- 来源：`ec-pef-method-2021-2279`; `ec-apparel-footwear-pefcr-2025`

###### 固化胶黏剂废物（`assembly_cured_adhesive_waste`）

记录“固化胶黏剂废物”作为跨越本过程边界的单一交换；按声明路线适用，未发生时明确标记为不适用。

- 选定流：Cured polyurethane adhesive waste
- 流属性/单位：Mass 93a60a56-a3c8-11da-a746-0800200b9a66 / kg; Units of mass 93a60a57-a4c8-11da-a746-0800200c9a66
- 数量规则：经皮重修正并按处置去向称量的废物质量
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每 1 kg 合格组装表带
- 基准类型：过程输出（`process_output`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_hardware_assembly`
- 来源：`ec-pef-method-2021-2279`; `ec-apparel-footwear-pefcr-2025`

###### 组装不合格品（`assembly_reject`）

记录“组装不合格品”作为跨越本过程边界的单一交换；按声明路线适用，未发生时明确标记为不适用。

- 选定流：Rejected non-metal watch-strap assembly
- 流属性/单位：Mass 93a60a56-a3c8-11da-a746-0800200b9a66 / kg; Units of mass 93a60a57-a4c8-11da-a746-0800200c9a66
- 数量规则：按处置去向称量的不合格品质量
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：产品特定（`product_specific`）
- 归一化基准：每 1 kg 合格组装表带
- 基准类型：过程输出（`process_output`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_hardware_assembly`
- 来源：`ec-pef-method-2021-2279`; `ec-apparel-footwear-pefcr-2025`

##### 基本流

无。


### 过程：表面处理与清洁（`p_surface_finishing`）

#### 输入

##### 产品流

###### 组装后表带投入（`finish_assembled_strap`）

记录“组装后表带投入”作为跨越本过程边界的单一交换；按声明路线适用，未发生时明确标记为不适用。

- 选定流：Assembled non-metal watch strap
- 流属性/单位：Mass 93a60a56-a3c8-11da-a746-0800200b9a66 / kg; Units of mass 93a60a57-a4c8-11da-a746-0800200c9a66
- 数量规则：批次转移质量
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：产品特定（`product_specific`）
- 归一化基准：每 1 kg 表面处理后表带
- 基准类型：过程输出（`process_output`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_surface_finishing`
- 来源：`ec-pef-method-2021-2279`; `ec-apparel-footwear-pefcr-2025`

###### 封边涂层投入（`finish_pu_edge_coating`）

记录“封边涂层投入”作为跨越本过程边界的单一交换；按声明路线适用，未发生时明确标记为不适用。

- 选定流：Waterborne polyurethane leather edge coating
- 流属性/单位：Mass 93a60a56-a3c8-11da-a746-0800200b9a66 / kg; Units of mass 93a60a57-a4c8-11da-a746-0800200c9a66
- 数量规则：依据相应采集协议的批次记录、计量、称量或质量平衡取得
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：产品特定（`product_specific`）
- 归一化基准：每 1 kg 表面处理后表带
- 基准类型：过程输出（`process_output`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_surface_finishing`
- 来源：`ec-pef-method-2021-2279`; `ec-apparel-footwear-pefcr-2025`

###### 清洁溶剂投入（`finish_isopropanol`）

记录“清洁溶剂投入”作为跨越本过程边界的单一交换；按声明路线适用，未发生时明确标记为不适用。

- 选定流：Isopropyl alcohol
- 流属性/单位：Mass 93a60a56-a3c8-11da-a746-0800200b9a66 / kg; Units of mass 93a60a57-a4c8-11da-a746-0800200c9a66
- 数量规则：依据批次领用、退料、库存核对或配方称量记录取得净投入量
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每 1 kg 表面处理后表带
- 基准类型：过程输出（`process_output`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_surface_finishing`
- 来源：`ec-pef-method-2021-2279`; `ec-apparel-footwear-pefcr-2025`

###### 表面处理用水投入（`finish_process_water`）

记录“表面处理用水投入”作为跨越本过程边界的单一交换；按声明路线适用，未发生时明确标记为不适用。

- 选定流：过程用水
- 流属性/单位：Volume / m3
- 数量规则：依据相应采集协议的批次记录、计量、称量或质量平衡取得
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每 1 kg 表面处理后表带
- 基准类型：过程输出（`process_output`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_surface_finishing`
- 来源：`ec-pef-method-2021-2279`; `ec-apparel-footwear-pefcr-2025`

###### 清洁布投入（`finish_cotton_cloth`）

记录“清洁布投入”作为跨越本过程边界的单一交换；按声明路线适用，未发生时明确标记为不适用。

- 选定流：Cotton cleaning cloth
- 流属性/单位：Mass 93a60a56-a3c8-11da-a746-0800200b9a66 / kg; Units of mass 93a60a57-a4c8-11da-a746-0800200c9a66
- 数量规则：数量乘以同一 SKU 和生产期的实测平均单件质量
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每 1 kg 表面处理后表带
- 基准类型：过程输出（`process_output`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_surface_finishing`
- 来源：`ec-pef-method-2021-2279`; `ec-apparel-footwear-pefcr-2025`

###### 表面处理用电（`finish_electricity`）

记录“表面处理用电”作为跨越本过程边界的单一交换；按声明路线适用，未发生时明确标记为不适用。

- 选定流：电网电力
- 流属性/单位：Energy / kWh
- 数量规则：优先分表计量；否则按有记录的设备运行时间与负荷计算
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每 1 kg 表面处理后表带
- 基准类型：过程输出（`process_output`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_surface_finishing`
- 来源：`ec-pef-method-2021-2279`; `ec-apparel-footwear-pefcr-2025`

###### 外购热水投入（`finish_hot_water`）

记录“外购热水投入”作为跨越本过程边界的单一交换；按声明路线适用，未发生时明确标记为不适用。

- 选定流：外购热水
- 流属性/单位：Energy / MJ
- 数量规则：归属于批次的计量热能
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每 1 kg 表面处理后表带
- 基准类型：过程输出（`process_output`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_surface_finishing`
- 来源：`ec-pef-method-2021-2279`; `ec-apparel-footwear-pefcr-2025`

###### 直燃干燥燃料（`finish_natural_gas`）

记录“直燃干燥燃料”作为跨越本过程边界的单一交换；按声明路线适用，未发生时明确标记为不适用。

- 选定流：天然气
- 流属性/单位：Energy / MJ
- 数量规则：按声明低位热值基准计量的燃料能量
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每 1 kg 表面处理后表带
- 基准类型：过程输出（`process_output`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_surface_finishing`
- 来源：`ec-pef-method-2021-2279`; `ec-apparel-footwear-pefcr-2025`

##### 废物流

无。

##### 基本流

无。

#### 输出

##### 产品流

###### 表面处理后表带输出（`finished_watch_strap`）

记录“表面处理后表带输出”作为跨越本过程边界的单一交换；按声明路线适用，未发生时明确标记为不适用。

- 选定流：Finished non-metal watch strap
- 流属性/单位：Mass 93a60a56-a3c8-11da-a746-0800200b9a66 / kg; Units of mass 93a60a57-a4c8-11da-a746-0800200c9a66
- 数量规则：经校准称量的合格输出质量
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：产品特定（`product_specific`）
- 归一化基准：每个表面处理批次
- 基准类型：过程输出（`process_output`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_surface_finishing`
- 来源：`ec-pef-method-2021-2279`; `ec-apparel-footwear-pefcr-2025`

##### 废物流

###### 涂层残余废物（`finish_coating_residue`）

记录“涂层残余废物”作为跨越本过程边界的单一交换；按声明路线适用，未发生时明确标记为不适用。

- 选定流：Waste waterborne polyurethane edge coating
- 流属性/单位：Mass 93a60a56-a3c8-11da-a746-0800200b9a66 / kg; Units of mass 93a60a57-a4c8-11da-a746-0800200c9a66
- 数量规则：经皮重修正并按处置去向称量的废物质量
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每 1 kg 表面处理后表带
- 基准类型：过程输出（`process_output`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_surface_finishing`
- 来源：`ec-pef-method-2021-2279`; `ec-apparel-footwear-pefcr-2025`

###### 废清洁布（`finish_used_cloth`）

记录“废清洁布”作为跨越本过程边界的单一交换；按声明路线适用，未发生时明确标记为不适用。

- 选定流：Used cotton cleaning cloth
- 流属性/单位：Mass 93a60a56-a3c8-11da-a746-0800200b9a66 / kg; Units of mass 93a60a57-a4c8-11da-a746-0800200c9a66
- 数量规则：数量乘以同一 SKU 和生产期的实测平均单件质量
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每 1 kg 表面处理后表带
- 基准类型：过程输出（`process_output`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_surface_finishing`
- 来源：`ec-pef-method-2021-2279`; `ec-apparel-footwear-pefcr-2025`

###### 表面处理废水（`finish_wastewater`）

记录“表面处理废水”作为跨越本过程边界的单一交换；按声明路线适用，未发生时明确标记为不适用。

- 选定流：Watch-strap finishing wastewater
- 流属性/单位：Volume / m3
- 数量规则：归属于批次的计量排放量或批次水平衡
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每 1 kg 表面处理后表带
- 基准类型：过程输出（`process_output`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_surface_finishing`
- 来源：`ec-pef-method-2021-2279`; `ec-apparel-footwear-pefcr-2025`

##### 基本流

###### 异丙醇向空气排放（`finish_isopropanol_air`）

记录“异丙醇向空气排放”作为跨越本过程边界的单一交换；按声明路线适用，未发生时明确标记为不适用。

- 选定流：Isopropyl alcohol to air
- 流属性/单位：Mass 93a60a56-a3c8-11da-a746-0800200b9a66 / kg; Units of mass 93a60a57-a4c8-11da-a746-0800200c9a66
- 数量规则：异丙醇领用量减退回量、收集废物中残留量及捕集量
- 数值来源模式：计算值（`calculated_value`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每 1 kg 表面处理后表带
- 基准类型：过程输出（`process_output`）
- 证据类型：基于采集数据计算（`calculated_from_collection`）
- 采集协议：`cp_surface_finishing`
- 来源：`ec-pef-method-2021-2279`

###### 化石二氧化碳排放（`finish_fossil_co2_air`）

记录“化石二氧化碳排放”作为跨越本过程边界的单一交换；按声明路线适用，未发生时明确标记为不适用。

- 选定流：化石源二氧化碳，排入空气
- 流属性/单位：Mass 93a60a56-a3c8-11da-a746-0800200b9a66 / kg; Units of mass 93a60a57-a4c8-11da-a746-0800200c9a66
- 数量规则：前景天然气记录乘以有文件支持的场址或供应商燃烧因子
- 数值来源模式：计算值（`calculated_value`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每 1 kg 表面处理后表带
- 基准类型：过程输出（`process_output`）
- 证据类型：基于采集数据计算（`calculated_from_collection`）
- 采集协议：`cp_surface_finishing`
- 来源：`ec-pef-method-2021-2279`

###### 氮氧化物排放（`finish_nox_air`）

记录“氮氧化物排放”作为跨越本过程边界的单一交换；按声明路线适用，未发生时明确标记为不适用。

- 选定流：氮氧化物，排入空气
- 流属性/单位：Mass 93a60a56-a3c8-11da-a746-0800200b9a66 / kg; Units of mass 93a60a57-a4c8-11da-a746-0800200c9a66
- 数量规则：场址监测结果或前景燃料记录乘以有文件支持的设备特定因子
- 数值来源模式：计算值（`calculated_value`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每 1 kg 表面处理后表带
- 基准类型：过程输出（`process_output`）
- 证据类型：基于采集数据计算（`calculated_from_collection`）
- 采集协议：`cp_surface_finishing`
- 来源：`ec-pef-method-2021-2279`


### 过程：最终质量控制（`p_quality_control`）

#### 输入

##### 产品流

###### 表面处理后表带投入（`qc_finished_strap`）

记录“表面处理后表带投入”作为跨越本过程边界的单一交换；按声明路线适用，未发生时明确标记为不适用。

- 选定流：Finished non-metal watch strap
- 流属性/单位：Mass 93a60a56-a3c8-11da-a746-0800200b9a66 / kg; Units of mass 93a60a57-a4c8-11da-a746-0800200c9a66
- 数量规则：批次转移质量
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：产品特定（`product_specific`）
- 归一化基准：每 1 kg 合格表带
- 基准类型：过程输出（`process_output`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_quality_control`
- 来源：`ec-pef-method-2021-2279`; `ec-apparel-footwear-pefcr-2025`

###### 未涂饰组装表带投入（`qc_uncoated_assembled_strap`）

记录“未涂饰组装表带投入”作为跨越本过程边界的单一交换；按声明路线适用，未发生时明确标记为不适用。

- 选定流：Assembled non-metal watch strap
- 流属性/单位：Mass 93a60a56-a3c8-11da-a746-0800200b9a66 / kg; Units of mass 93a60a57-a4c8-11da-a746-0800200c9a66
- 数量规则：批次转移质量
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：产品特定（`product_specific`）
- 归一化基准：每 1 kg 合格表带
- 基准类型：过程输出（`process_output`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_quality_control`
- 来源：`ec-pef-method-2021-2279`; `ec-apparel-footwear-pefcr-2025`

###### 质检用电（`qc_electricity`）

记录“质检用电”作为跨越本过程边界的单一交换；按声明路线适用，未发生时明确标记为不适用。

- 选定流：电网电力
- 流属性/单位：Energy / kWh
- 数量规则：优先分表计量；否则按有记录的设备运行时间与负荷计算
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每 1 kg 合格表带
- 基准类型：过程输出（`process_output`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_quality_control`
- 来源：`ec-pef-method-2021-2279`; `ec-apparel-footwear-pefcr-2025`

##### 废物流

无。

##### 基本流

无。

#### 输出

##### 产品流

###### 合格表带输出（`accepted_watch_strap`）

记录“合格表带输出”作为跨越本过程边界的单一交换；按声明路线适用，未发生时明确标记为不适用。

- 选定流：Accepted non-metal watch strap
- 流属性/单位：Mass 93a60a56-a3c8-11da-a746-0800200b9a66 / kg; Units of mass 93a60a57-a4c8-11da-a746-0800200c9a66
- 数量规则：经校准称量的合格净质量
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：产品特定（`product_specific`）
- 归一化基准：每个质量控制批次
- 基准类型：过程输出（`process_output`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_quality_control`
- 来源：`ec-pef-method-2021-2279`; `ec-apparel-footwear-pefcr-2025`

##### 废物流

###### 最终不合格表带（`qc_rejected_strap`）

记录“最终不合格表带”作为跨越本过程边界的单一交换；按声明路线适用，未发生时明确标记为不适用。

- 选定流：Rejected non-metal watch strap
- 流属性/单位：Mass 93a60a56-a3c8-11da-a746-0800200b9a66 / kg; Units of mass 93a60a57-a4c8-11da-a746-0800200c9a66
- 数量规则：按处置去向称量的不合格品质量
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：产品特定（`product_specific`）
- 归一化基准：每 1 kg 合格表带
- 基准类型：过程输出（`process_output`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_quality_control`
- 来源：`ec-pef-method-2021-2279`; `ec-apparel-footwear-pefcr-2025`

##### 基本流

无。


### 过程：初级与运输包装（`p_packaging`）

#### 输入

##### 产品流

###### 合格表带投入（`pack_accepted_strap`）

记录“合格表带投入”作为跨越本过程边界的单一交换；按声明路线适用，未发生时明确标记为不适用。

- 选定流：Accepted non-metal watch strap
- 流属性/单位：Mass 93a60a56-a3c8-11da-a746-0800200b9a66 / kg; Units of mass 93a60a57-a4c8-11da-a746-0800200c9a66
- 数量规则：批次转移质量
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：产品特定（`product_specific`）
- 归一化基准：每 1 kg 净成品表带
- 基准类型：过程输出（`process_output`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_packaging`
- 来源：`ec-pef-method-2021-2279`; `ec-apparel-footwear-pefcr-2025`

###### LDPE 包装袋投入（`pack_ldpe_bag`）

记录“LDPE 包装袋投入”作为跨越本过程边界的单一交换；按声明路线适用，未发生时明确标记为不适用。

- 选定流：Low-density polyethylene watch-strap bag
- 流属性/单位：Mass 93a60a56-a3c8-11da-a746-0800200b9a66 / kg; Units of mass 93a60a57-a4c8-11da-a746-0800200c9a66
- 数量规则：数量乘以同一 SKU 和生产期的实测平均单件质量
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：产品特定（`product_specific`）
- 归一化基准：每 1 kg 净成品表带
- 基准类型：过程输出（`process_output`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_packaging`
- 来源：`ec-pef-method-2021-2279`; `ec-apparel-footwear-pefcr-2025`

###### 折叠纸盒投入（`pack_folding_carton`）

记录“折叠纸盒投入”作为跨越本过程边界的单一交换；按声明路线适用，未发生时明确标记为不适用。

- 选定流：Paperboard watch-strap folding carton
- 流属性/单位：Mass 93a60a56-a3c8-11da-a746-0800200b9a66 / kg; Units of mass 93a60a57-a4c8-11da-a746-0800200c9a66
- 数量规则：数量乘以同一 SKU 和生产期的实测平均单件质量
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：产品特定（`product_specific`）
- 归一化基准：每 1 kg 净成品表带
- 基准类型：过程输出（`process_output`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_packaging`
- 来源：`ec-pef-method-2021-2279`; `ec-apparel-footwear-pefcr-2025`

###### 纸质内页投入（`pack_paper_insert`）

记录“纸质内页投入”作为跨越本过程边界的单一交换；按声明路线适用，未发生时明确标记为不适用。

- 选定流：Printed paper watch-strap insert
- 流属性/单位：Mass 93a60a56-a3c8-11da-a746-0800200b9a66 / kg; Units of mass 93a60a57-a4c8-11da-a746-0800200c9a66
- 数量规则：数量乘以同一 SKU 和生产期的实测平均单件质量
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：产品特定（`product_specific`）
- 归一化基准：每 1 kg 净成品表带
- 基准类型：过程输出（`process_output`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_packaging`
- 来源：`ec-pef-method-2021-2279`; `ec-apparel-footwear-pefcr-2025`

###### 瓦楞运输箱投入（`pack_corrugated_shipper`）

记录“瓦楞运输箱投入”作为跨越本过程边界的单一交换；按声明路线适用，未发生时明确标记为不适用。

- 选定流：瓦楞纸板运输箱
- 流属性/单位：Mass 93a60a56-a3c8-11da-a746-0800200b9a66 / kg; Units of mass 93a60a57-a4c8-11da-a746-0800200c9a66
- 数量规则：空箱质量按装箱件数或经核实的占用质量分配
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每 1 kg 净成品表带
- 基准类型：过程输出（`process_output`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_packaging`
- 来源：`ec-pef-method-2021-2279`; `ec-apparel-footwear-pefcr-2025`

###### 纸质胶带投入（`pack_paper_tape`）

记录“纸质胶带投入”作为跨越本过程边界的单一交换；按声明路线适用，未发生时明确标记为不适用。

- 选定流：Water-activated paper packaging tape
- 流属性/单位：Mass 93a60a56-a3c8-11da-a746-0800200b9a66 / kg; Units of mass 93a60a57-a4c8-11da-a746-0800200c9a66
- 数量规则：领用卷材质量减经核实的剩余量
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每 1 kg 净成品表带
- 基准类型：过程输出（`process_output`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_packaging`
- 来源：`ec-pef-method-2021-2279`; `ec-apparel-footwear-pefcr-2025`

###### 包装用电（`pack_electricity`）

记录“包装用电”作为跨越本过程边界的单一交换；按声明路线适用，未发生时明确标记为不适用。

- 选定流：电网电力
- 流属性/单位：Energy / kWh
- 数量规则：优先分表计量；否则按有记录的设备运行时间与负荷计算
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每 1 kg 净成品表带
- 基准类型：过程输出（`process_output`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_packaging`
- 来源：`ec-pef-method-2021-2279`; `ec-apparel-footwear-pefcr-2025`

##### 废物流

无。

##### 基本流

无。

#### 输出

##### 产品流

###### 参考表带输出（`reference_watch_strap`）

记录“参考表带输出”作为跨越本过程边界的单一交换；按声明路线适用，未发生时明确标记为不适用。

- 选定流：表带，金属表带除外 `19a79c1e-d7a4-422d-b754-47ea82969f9f`
- 流属性/单位：Mass 93a60a56-a3c8-11da-a746-0800200b9a66 / kg; Units of mass 93a60a57-a4c8-11da-a746-0800200c9a66
- 数量规则：经校准的净质量并归一化至 1 kg 参考量
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：产品特定（`product_specific`）
- 归一化基准：每个包装批次
- 基准类型：过程输出（`process_output`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_packaging`
- 来源：`ec-pef-method-2021-2279`; `ec-apparel-footwear-pefcr-2025`

##### 废物流

###### 破损纸板包装废物（`pack_damaged_paperboard`）

记录“破损纸板包装废物”作为跨越本过程边界的单一交换；按声明路线适用，未发生时明确标记为不适用。

- 选定流：Waste paperboard packaging
- 流属性/单位：Mass 93a60a56-a3c8-11da-a746-0800200b9a66 / kg; Units of mass 93a60a57-a4c8-11da-a746-0800200c9a66
- 数量规则：批次废物称量质量
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每 1 kg 净成品表带
- 基准类型：过程输出（`process_output`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_packaging`
- 来源：`ec-pef-method-2021-2279`; `ec-apparel-footwear-pefcr-2025`

###### LDPE 包装废料（`pack_ldpe_scrap`）

记录“LDPE 包装废料”作为跨越本过程边界的单一交换；按声明路线适用，未发生时明确标记为不适用。

- 选定流：废低密度聚乙烯薄膜
- 流属性/单位：Mass 93a60a56-a3c8-11da-a746-0800200b9a66 / kg; Units of mass 93a60a57-a4c8-11da-a746-0800200c9a66
- 数量规则：批次废物称量质量
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每 1 kg 净成品表带
- 基准类型：过程输出（`process_output`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_packaging`
- 来源：`ec-pef-method-2021-2279`; `ec-apparel-footwear-pefcr-2025`

##### 基本流

无。


## 7. 分配与共产品处理

- `allocation_avoid_by_subdivision`：首先通过批次分离、直接称量、分表计量、设备时间记录和独立废物票据避免分配。来源：`ec-pef-method-2021-2279`。
- `allocation_shared_equipment`：共享设备无法细分时，使用最接近的实测物理驱动因素分配电力和直接设备公用工程，通常为设备时间乘以有记录的负荷；披露驱动因素。来源：`ec-pef-method-2021-2279`；`ec-apparel-footwear-pefcr-2025`。
- `allocation_shared_materials`：按与声明 SKU 关联的批次领用、配方、件数或实测质量分配胶黏剂、涂层、清洁剂和包装，不按收入分配。来源：`ec-pef-method-2021-2279`；`ec-apparel-footwear-pefcr-2025`。
- `allocation_rework`：在谱系与记录保留时，返工留在原批次内。离开过程进行外部回收或处理的材料仍作为明确废物输出。来源：`ec-pef-method-2021-2279`。
- `allocation_recycling_credit`：报告材料总投入与指定废物输出，不在前景数量中净扣避免材料信用。任何下游回收替代属于该前景数据包之外明确声明的生命周期方法。来源：`ec-pef-method-2021-2279`。
- `allocation_multi_product`：若物理关系无法代表真正不可分的多产品过程，在采用其他分配基准前记录原因、方法、受影响流和敏感性。来源：`ec-pef-method-2021-2279`。

## 8. 前景数据采集、计算与质量规则

### 数据采集协议

| protocol_id | process_id | flow_role | record_type | raw_fields | collection_method | unit | frequency | temporal_coverage | site_scope | aggregation_rule | quality_evidence |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| `cp_body_conversion` | `p_body_conversion` | 表带本体材料、公用工程、合格组件和路线特定废物 | 批次领料、仪表、生产和废物记录 | batch_id; SKU; material grade; issued and returned mass; item count; machine; meter start/end; accepted mass; waste mass and disposition | 经校准称量、库存核对、分表或有记录的设备时间计算以及批次谱系 | kg; kWh; m3 | 每批次 | 代表性生产期，通常为连续 12 个月或较短活动的完整期间 | 所有受控本体转换线 | 对每个原子交换求和并按合格转换本体质量归一化 | 校准记录；供应商标签；批次单；仪表；废物票据；签署核对表 |
| `cp_hardware_assembly` | `p_hardware_assembly` | 本体组件、五金、连接材料、电力、组装输出和废物 | BoM、批次领用、计数、仪表和不合格记录 | batch_id; SKU; component type; count; mean unit mass; adhesive issue; thread issue; meter start/end; accepted and rejected mass | BoM 核对、校准称量、组件计数及分表或设备时间计算 | kg; count; kWh | 每批次 | 与参考生产相同期间 | 所有受控组装线 | 件数换算质量，各指定流求和并按合格组装质量归一化 | 经批准 BoM；抽样称量；批次流转单；仪表与不合格记录 |
| `cp_surface_finishing` | `p_surface_finishing` | 涂层、溶剂、水、公用工程、成品、废物和直接排放 | 配方、库存、仪表、废物、捕集和排放记录 | batch_id; coating issue/return; solvent issue/return; water; electricity; hot water; natural gas; captured solvent; waste mass; discharge; emission factor | 经校准领用称量、仪表、废物记录及质量平衡或监测排放计算 | kg; kWh; MJ; m3 | 每批次及每个相关排放期 | 与参考生产相同期间 | 所有受控表面处理及直燃干燥设备 | 每个原子投入、废物和排放按成品质量归一化 | 配方批准；SDS；校准；仪表；废物联单；监测或因子记录 |
| `cp_quality_control` | `p_quality_control` | 来料表带、电力、合格输出和不合格品 | 批次转移、测试、检验、仪表和不合格记录 | batch_id; SKU; route; input mass; test plan; result; accepted mass; rejected mass; disposition; electricity | 校准称量、受控检验测试及分表或设备时间计算 | kg; kWh | 每批次 | 与参考生产相同期间 | 所有最终放行工位 | 汇总合格和不合格质量并按合格净质量归一化 | 测试计划；检验日志；校准；放行和处置批准 |
| `cp_packaging` | `p_packaging` | 合格表带、各包装组件、电力、参考输出和包装废物 | 包装规范、计数、领用、称量、仪表和废物记录 | batch_id; SKU; accepted strap mass; packaging SKU; count; unit mass; electricity; damaged package mass; packed quantity | 经批准包装 BoM、组件抽样、校准称量及仪表或设备时间计算 | kg; count; kWh | 每批次 | 与参考生产相同期间 | 所有包装线 | 每种包装件数换算质量，按表带净质量归一化 | 包装规范；供应商记录；抽样质量；仪表；废物票据 |

### 计算规则

| rule_id | 适用对象 | 公式或规则 | 输入 | 输出 | source_ids |
| --- | --- | --- | --- | --- | --- |
| `calc_net_reference_mass` | 参考输出 | 合计含永久五金与表面处理的合格表带校准质量，并减去全部可移除包装皮重 | 合格包装件质量；包装皮重；直接净重 | kg 净表带 | `ec-pef-method-2021-2279` |
| `calc_counted_component_mass` | 五金和包装 | 组件数量 × 同一 SKU 和期间的实测平均单件质量 | 数量；抽样单件质量 | kg 指定组件 | `ec-pef-method-2021-2279`；`ec-apparel-footwear-pefcr-2025` |
| `calc_shared_electricity` | 共享设备 | 总计量电力 × 声明产品设备时间占比；负荷不同时按有记录的负荷加权 | 仪表总量；设备时间；额定或实测负荷 | 归属于批次的 kWh | `ec-pef-method-2021-2279` |
| `calc_material_balance` | 各生产过程 | 指定材料投入 = 合格产品转移 + 指定废物 + 测量不确定度内的库存变化 | 领用和退回质量；合格输出；废物；库存变化 | 按材料核对的 kg | `ec-pef-method-2021-2279` |
| `calc_isopropanol_air` | 表面处理溶剂 | 异丙醇领用量 − 退回量 − 收集废物中残留量 − 捕集量 | 库存与废物记录；捕集记录 | kg 异丙醇向空气排放 | `ec-pef-method-2021-2279` |
| `calc_direct_combustion` | 直燃干燥 | 对每种排放分别用天然气能量乘以有文件支持的特定因子 | 天然气能量；因子身份和单位 | kg 指定基本流排放 | `ec-pef-method-2021-2279` |
| `calc_packaging_mass` | 包装 | 每个包装 SKU 数量 × 实测空包装单件质量；共享运输箱按装箱件数或占用质量分配 | 数量；单件质量；分配驱动因素 | 按包装材料的 kg | `ec-apparel-footwear-pefcr-2025` |

### 数据质量要求

| requirement_id | 适用对象 | 要求 | 证据 |
| --- | --- | --- | --- |
| `dq_product_identity` | 参考产品及批次链接 | 匹配 CPC 29230 范围，并声明本体材料、结构、接口、尺寸、闭合件、五金、颜色、表面处理和包装。 | 产品规范、BoM、SKU 表和批次谱系 |
| `dq_company_specific_foreground` | 受控制造 | 对受控过程使用公司特定 BoM 和制造数据，覆盖所有已知材料、能源、产品、废物和直接排放。 | 批次记录、仪表、发票、废物记录及 `ec-pef-method-2021-2279` |
| `dq_route_completeness` | 过程图 | 纳入实际本体转换路线和所有受控下游步骤，并解释条件性排除。 | 流程图、设备清单、现场核查及 `ec-apparel-footwear-pefcr-2025` |
| `dq_atomic_inventory` | 清单交换 | 每个材料牌号、化学品、公用工程、燃料、包装组件、废物和基本流排放均为独立行。 | BoM 至清单核对与原子流审计 |
| `dq_temporal_geography_technology` | 前景及上游数据 | 报告生产期、场址地理、技术以及供应商或代理地理，并说明不匹配。 | 数据集元数据及 `ec-pef-method-2021-2279` |
| `dq_mass_balance` | 所有制造过程 | 按指定材料核对批次投入、合格转移、废物和库存变化，并披露残差。 | 质量平衡表及 `ec-pef-method-2021-2279` |
| `dq_upstream_leather` | 皮革路线 | 使用覆盖鞣制和整饰的上游成品皮革数据集，不得移入非鞣革场址前景。 | 供应商追溯、上游数据集范围及 `jrc-tanning-hides-skins-bref-2013` |
| `dq_chemicals` | 胶黏剂、涂层、颜料和溶剂 | 记录供应商、商品名、组成证据、浓度、领用量、废物和释放路径，不以集合流替代单项化学品。 | SDS、配方、库存台账和废物/排放记录 |
| `dq_packaging` | 包装 | 分别记录每个包装组件，并将可移除包装排除在参考净质量之外。 | 包装 BoM、单件质量抽样及 `ec-apparel-footwear-pefcr-2025` |
| `dq_unresolved_uuid` | 非参考清单流 | 精确 hybrid 与 state-100 直读一致前保持 UUID 为空，并在 manifest 保留行特定缺口。 | manifest 未解析清单行 |

## 9. 校验规则

- `validate_reference_identity`：确认 Product flow UUID `19a79c1e-d7a4-422d-b754-47ea82969f9f`、精确名称“Watch straps, except of metal”、公开 state 100、Mass UUID `93a60a56-a3c8-11da-a746-0800200b9a66`、Units of mass UUID `93a60a57-a4c8-11da-a746-0800200c9a66` 及 kg。来源：`unsd-cpc-3-29230`。
- `validate_scope`：若表带本体为金属，或输出为手表、表壳、电子腕带、独立五金而非完整非金属表带，则拒绝。来源：`unsd-cpc-3-29230`。
- `validate_reference_mass`：核验输出等于 1 kg 净合格表带，包含永久五金并排除可移除包装。来源：`ec-pef-method-2021-2279`。
- `validate_route`：确认材料路线与本体转换投入、废物、上游数据集和条件过程一致。来源：`ec-pef-method-2021-2279`；`ec-apparel-footwear-pefcr-2025`。
- `validate_inventory_completeness`：将产品特定 BoM 和受控作业核对至所有已知材料、能源、产品、废物及向空气、水、土壤排放。来源：`ec-pef-method-2021-2279`。
- `validate_atomic_flows`：拒绝合并多种材料、公用工程、燃料、包装、废物或排放的选定流。
- `validate_uuid_gate`：仅在精确 hybrid 与 state-100 直读确认后接受非参考 UUID；否则要求 UUID 为空且存在 manifest 行。
- `validate_mass_balance`：检查指定材料投入与合格转移、指定废物和库存变化并调查残差。来源：`ec-pef-method-2021-2279`。
- `validate_direct_emissions`：存在天然气或异丙醇时，对每个适用基本流要求独立排放记录或有文件支持的零释放/捕集依据。来源：`ec-pef-method-2021-2279`。
- `validate_leather_upstream`：皮革表带的成品皮革上游数据集应覆盖鞣制和整饰，并保留在非鞣革场址前景之外。来源：`jrc-tanning-hides-skins-bref-2013`。
- `validate_packaging`：确认每个包装组件独立记录且其质量排除在参考净质量之外。来源：`ec-pef-method-2021-2279`；`ec-apparel-footwear-pefcr-2025`。
- `validate_bilingual_alignment`：确认中英文 process id、row id、选定流、受控 token、UUID、rule id、protocol id、calculation id、quality id 与 source id 同序一致。

## 10. 发布数据集画像

| 字段 | 值 |
| --- | --- |
| dataset_role | 完整非金属表带工厂门生产的产品类别前景数据包 |
| downstream_use | `secondary_dataset`；`background_dataset` |
| allowed_use | 声明路线和地理内的产品 LCA、产品环境足迹、供应商数据集、情景模型及下游 process 或 lifecyclemodel 构建 |
| excluded_use | 金属链带；手表和电子产品；未披露材料路线；缺少净质量、BoM、边界或上游数据透明度的数据集 |
| required_metadata | PCR id；CPC；参考 UUID；本体材料与牌号；结构路线；接口与尺寸；闭合件与五金；颜色与表面处理；净质量；包装；场址与时期；技术；供应商或代理；过程纳入；分配；未解析身份 |
| required_quality_disclosure | 前景覆盖；计量和计算；时间、地理和技术代表性；质量平衡残差；上游代理缺口；化学品和排放缺口；包装；不合格批次；审查状态 |
| update_trigger | 材料或供应商、过程、设备、配方、五金、包装、场址或时期变化；质量平衡变化；新排放证据；UUID 解析；方法修订 |

## 11. 数据源

| 来源 id | 类型 | 参考资料 | 用途 |
| --- | --- | --- | --- |
| `unsd-cpc-3-29230` | official_guidance | 联合国统计司，Central Product Classification Version 3.0，subclass 29230“Watch straps, except of metal”，https://unstats.un.org/unsd/classifications/Econ/CPC（仓库官方来源检索于 2026-08-13） | 产品范围、分类层级与参考身份校验 |
| `ec-pef-method-2021-2279` | official_guidance | 欧盟委员会，Commission Recommendation (EU) 2021/2279 环境足迹方法建议，合并正文，https://eur-lex.europa.eu/eli/reco/2021/2279/2021-12-30/eng | 产品特定 BoM、公司特定制造数据、LCI 完整性、边界、分配、质量与透明度 |
| `jrc-tanning-hides-skins-bref-2013` | official_guidance | 欧盟委员会联合研究中心，Best Available Techniques Reference Document for the Tanning of Hides and Skins，https://eippcb.jrc.ec.europa.eu/reference/tanning-hides-and-skins-0 | 上游成品皮革生产范围与数据要求；除非受控，鞣制化学品与排放保留在上游 |
| `ec-apparel-footwear-pefcr-2025` | official_guidance | Apparel and Footwear Product Environmental Footprint Category Rules，version 3.1（2025） | 组织产品 BoM、制造损耗、包装与制造过程数据，不提供默认数量 |
