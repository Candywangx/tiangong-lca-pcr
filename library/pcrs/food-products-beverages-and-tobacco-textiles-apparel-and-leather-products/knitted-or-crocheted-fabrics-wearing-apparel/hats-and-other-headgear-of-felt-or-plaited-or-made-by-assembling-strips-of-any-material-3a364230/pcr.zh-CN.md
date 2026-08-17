---
pcr_id: pcr.food-products-beverages-and-tobacco-textiles-apparel-and-leather-products.knitted-or-crocheted-fabrics-wearing-apparel.hats-and-other-headgear-of-felt-or-plaited-or-made-by-assembling-strips-of-any-material-3a364230
language: zh-CN
status: candidate
sync_with: pcr.en-US.md
---

# 毡制、编条拼装、针织或钩编、花边或其他纺织物制帽子及其他头饰；发网

## 1. 范围与适用性

本 PCR 用于 CPC 28262 成品帽子、纺织头饰及发网的工厂门前景数据生产。覆盖毡帽体阻帽成形、编条缝合或拼装、纱线针织或钩编，以及整幅花边或其他纺织物裁剪装配；申报路线可组合这些构造。

边界始于数据生产者申报的购入材料状态，终于可发运的合格成品头饰。场内实施的帽体形成、裁剪、阻帽、湿法整理、缝制、装饰、检验和包装均应纳入。购入纱线、织物、毡帽体、编条、化学品、公用工程及包装的上游生产用匹配的上游数据集表示。

CPC 28261 未加工帽坯、帽体和帽兜不作为本成品参考流。安全头盔、橡胶或塑料头饰、石棉头饰、CPC 28262 之外的零部件与帽架、纯毛皮头饰、一次性特殊传统工艺品，以及分销、使用和报废阶段均不在本工厂门边界内。

## 2. 产品类别识别

| 字段 | 值 |
| --- | --- |
| canonical_pcr_id | `pcr.food-products-beverages-and-tobacco-textiles-apparel-and-leather-products.knitted-or-crocheted-fabrics-wearing-apparel.hats-and-other-headgear-of-felt-or-plaited-or-made-by-assembling-strips-of-any-material-3a364230` |
| classification_refs | CPC 3.0 `28262` |
| covered_products | 成品毡帽；由任何材料编条或条带拼装的帽；针织或钩编纺织帽及头饰；整幅花边或其他纺织物制头饰；纺织发网 |
| excluded_products | 未加工帽坯、帽体、帽兜、毡片和筒套；安全头盔；橡胶、塑料或石棉头饰；帽饰零部件和帽架；CPC 28262 外产品；分销、使用和报废服务 |
| representative_product | 采用已申报毡制、编条、针织/钩编、花边或整幅纺织物路线的一个合格成品纺织头饰 |
| production_route | 已申报的帽体形成或裁剪、适用时的阻帽成形、条件性湿法整理、最终装配/装饰/检验及包装组合 |
| market_state | 工厂门处符合申报商业规格的已制造成品头饰 |

## 3. 参考流

| 字段 | 值 |
| --- | --- |
| What | 在工厂门提供合格 CPC 28262 成品头饰 |
| How much | 1 kg 不含包装的成品净质量 |
| How well | 符合申报的产品类型、材料构造、尺寸、整理、部件规格和验收准则 |
| How long or cycle | 一个报告生产期；不包含消费者使用寿命声明 |
| reference_flow_link | 包装过程合格成品净质量输出，归一化为 1 kg |

| 字段 | 值 |
| --- | --- |
| 参考数量 | 1 kg 不含包装的合格成品头饰 |
| 参考产品流 | Hats and other headgear, of felt, or plaited or made by assembling strips of any material, or knitted or crocheted or made up from lace or other textile fabric in the piece, hair-nets `b00baec8-ce3f-4e11-99c7-8a40167d2f4f` |
| 参考流属性 | Mass `93a60a56-a3c8-11da-a746-0800200b9a66` |
| 参考单位组 | Units of mass `93a60a57-a4c8-11da-a746-0800200c9a66` |
| 参考单位 | kg |
| 必需限定信息 | 产品类型；主要材料及纤维成分；构造路线；参考尺寸；每 kg 成品件数；适用时毡帽体或编条来源；适用时针织或钩编规格；湿法整理操作；里料、汗带、骨架、弹性件与装饰配置；工厂地理位置；生产期；包装配置 |

构建前景数据包时，`必需限定信息` 中列出的信息应在数据集元数据、过程说明、参考流备注、产品说明或等效数据包字段中明确声明。缺失必需限定信息的数据包视为参考流定义不完整。

## 4. 计量与单位规则

| rule_id | 适用对象 | 必需流属性 | 必需单位 | 规则 |
| --- | --- | --- | --- | --- |
| `reference_net_mass` | 合格成品头饰 | Mass `93a60a56-a3c8-11da-a746-0800200b9a66` | kg | 对不含任何包装的合格成品称重；所有清单结果归一化为恰好 1 kg 净产品。 |
| `item_to_mass_conversion` | 以件数记录的数据 | Mass | kg | 对同一产品规格和期间记录件数及代表性实测单件净质量，并以其比值换算为 kg。 |
| `textile_area_to_mass` | 以面积或长度记录的织物 | Mass | kg | 使用产品特定实测克重与幅宽，或领料/退料卷材质量；不得使用无来源的通用换算。 |
| `thermal_energy_consistency` | 蒸汽、热水和现场燃料 | Energy or Mass | MJ, kWh or kg | 保留计量载能体单位及换算所需压力/温度或低位热值；蒸汽、热水、天然气和 LPG 分开记录。 |
| `chemical_formulation_mass` | 染料、挺括剂、防水剂和洗涤剂 | Mass | kg | 分别记录交付配方质量并在相关时另记活性成分；不得合并化学配方。 |
| `packaging_net_separation` | 包装材料 | Mass | kg | 各包装组件分别计量，全部包装质量排除在参考产品质量之外。 |

## 5. 系统边界

### 边界概化

| 字段 | 值 |
| --- | --- |
| declared_starting_condition | 购入纱线、花边或成品整幅纺织物、毡帽体、编条或帽形、辅料、化学品和包装首次进入报告工厂时的状态 |
| starting_condition_role | 申报制造路线的前景起点 |
| product_classification_scope | 仅限 CPC 28262 成品头饰；购入 CPC 28261 帽体为上游投入，完成申报整理前不成为参考产品 |
| recursive_input_rule | 同一产品类别的购入成品头饰作为一个带供应商数据集身份和质量的上游产品投入记录，不递归重建其制造 |
| upstream_dataset_requirement | 各购入材料、公用工程、化学品和包装需采用与申报材料状态匹配且具地理和技术代表性的上游数据集 |
| disclosure | 申报工厂与分包覆盖、购入起始状态、纳入路线过程、未纳入的条件过程、公用工程供应方式、湿法整理、废物去向及包装配置 |

| rule_id | 适用对象 | 规则 | source_ids |
| --- | --- | --- | --- |
| `boundary_factory_gate` | 前景系统 | 纳入从申报购入材料状态直至工厂门合格并包装成品头饰的所有范围内操作。 | `afw-pefcr-v3-1-2025`; `ec-pef-method-2021` |
| `boundary_route_disclosure` | 生产路线 | 识别产品采用毡阻帽、编条拼装、针织/钩编、花边或其他整幅纺织物裁制，或其组合；纳入全部实际路线步骤。 | `un-cpc-3-0-28262`; `ilo-isco-68-hatmaking`; `historic-england-plaiters-lea-2011` |
| `boundary_wet_finishing` | 湿法整理 | 仅在前景实施时纳入洗涤、染色、挺括、防水和相关干燥；水、各化学配方、公用工程、废水和直接排放分别记录。 | `jrc-textiles-bref-2023`; `afw-pefcr-v3-1-2025` |
| `boundary_subcontractors` | 分包操作 | 用供应商特定活动记录或披露的代表性数据集纳入范围内分包操作；分包不构成遗漏理由。 | `ec-pef-method-2021`; `afw-pefcr-v3-1-2025` |
| `boundary_losses` | 制造损失 | 按过程拆分材料损失和不合格品并记录接收处理；不得用销售、再用或回收抵减材料投入。 | `afw-pefcr-v3-1-2025` |
| `boundary_packaging` | 包装 | 纳入用于发运的每个初级、次级和三级包装组件，同时将其质量排除在 1 kg 参考产品之外。 | `afw-pefcr-v3-1-2025` |

## 6. 过程清单结构

### 过程图

| process_id | 过程名称 | 纳入状态 | 纳入条件 | 建模角色 | 定量参考 |
| --- | --- | --- | --- | --- | --- |
| `headgear_body_formation` | 帽体形成与材料准备 | `conditional` | 纳入报告工厂实施的所有帽体形成、针织/钩编、编条拼装或织物裁剪操作 | 前景部件形成 | kg 合格已形成帽体输出 |
| `blocking_shaping` | 阻帽与成形 | `conditional` | 毡制、编条、针织/钩编或织物帽体在模具、压机或帽楦上调湿成形时纳入 | 前景成形 | kg 合格已成形帽体输出 |
| `wet_finishing` | 湿法整理与干燥 | `conditional` | 前景实施洗涤、染色、漂洗、挺括、防水或其他湿法整理时纳入 | 前景整理 | kg 合格已整理帽体输出 |
| `final_assembly_inspection` | 最终装配、装饰与检验 | `required` | 始终纳入最终连接、适用的加衬/装饰、验收检验和不合格品处理 | 前景最终制造 | kg 合格成品头饰输出 |
| `packaging` | 产品包装 | `required` | 始终纳入工厂门采用的包装配置 | 前景发运准备 | 1 kg 合格成品头饰净质量 |

### 过程：帽体形成与材料准备（`headgear_body_formation`）

#### 输入

##### 产品流

###### 头饰制造用毡帽体（`felt_hat_body_input`）

购入毡帽体或帽兜进入裁边、阻帽或装配；按申报毡材料的收货及领料记录取得质量。

- 选定流：Felt hat body
- 流属性/单位：Mass / kg
- 数量规则：实测领用毡帽体质量减去退库未用帽体
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：产品特定（`product_specific`）
- 归一化基准：每 kg 合格已形成帽体输出
- 基准类型：过程输出（`process_output`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_body_formation_records`
- 来源：`historic-england-plaiters-lea-2011`

###### 帽体拼装用编条（`plaited_strip_input`）

以螺旋缝合或连接条带形成帽体时，编条跨越边界；记录特定材料的领用质量。

- 选定流：Plaited strip for headgear
- 流属性/单位：Mass / kg
- 数量规则：实测领用编条质量减去退库未用编条
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：产品特定（`product_specific`）
- 归一化基准：每 kg 合格已形成帽体输出
- 基准类型：过程输出（`process_output`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_body_formation_records`
- 来源：`historic-england-plaiters-lea-2011`

###### 购入整幅成品纺织物（`textile_fabric_piece_input`）

成品机织、针织、钩编或其他非花边整幅织物进入版样裁剪；随领料质量申报纤维成分、构造和整理。

- 选定流：Finished textile fabric in the piece
- 流属性/单位：Mass / kg
- 数量规则：实测领用织物质量减去退库未用织物
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：产品特定（`product_specific`）
- 归一化基准：每 kg 合格已形成帽体输出
- 基准类型：过程输出（`process_output`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_body_formation_records`
- 来源：`afw-pefcr-v3-1-2025`

###### 购入整幅成品花边织物（`lace_fabric_input`）

花边与其他纺织物分开记录，使其材料身份和裁剪损失可追溯。

- 选定流：Finished lace fabric
- 流属性/单位：Mass / kg
- 数量规则：实测领用花边质量减去退库未用花边
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：产品特定（`product_specific`）
- 归一化基准：每 kg 合格已形成帽体输出
- 基准类型：过程输出（`process_output`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_body_formation_records`
- 来源：`un-cpc-3-0-28262`

###### 针织或钩编用纱线（`textile_yarn_input`）

工厂内针织或钩编头饰、发网时纱线进入过程；具体数据集按每项申报纱线规格拆分交换。

- 选定流：Textile yarn for knitted or crocheted headgear
- 流属性/单位：Mass / kg
- 数量规则：实测领用纱线质量减去退库未用纱线
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：产品特定（`product_specific`）
- 归一化基准：每 kg 合格已形成帽体输出
- 基准类型：过程输出（`process_output`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_body_formation_records`
- 来源：`afw-pefcr-v3-1-2025`

###### 帽体形成用缝纫线（`formation_sewing_thread_input`）

连接编条或裁片的缝纫线为一个并入产品的材料投入，以线轴领退称重或经记录的耗线计算确定质量。

- 选定流：Sewing thread
- 流属性/单位：Mass / kg
- 数量规则：实测或计算的消耗缝纫线质量
- 数值来源模式：计算值（`calculated_value`）
- 适用范围：产品特定（`product_specific`）
- 归一化基准：每 kg 合格已形成帽体输出
- 基准类型：过程输出（`process_output`）
- 证据类型：采集计算（`calculated_from_collection`）
- 采集协议：`cp_body_formation_records`
- 来源：`ilo-isco-68-hatmaking`

###### 形成、裁剪与连接用电力（`formation_electricity_input`）

针织/钩编机、裁剪机、抽排及连接设备用电由专表或场址总表的文件化分配取得。

- 选定流：Electricity, low voltage, at factory
- 流属性/单位：Energy / kWh
- 数量规则：实测帽体形成过程耗电
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每 kg 合格已形成帽体输出
- 基准类型：过程输出（`process_output`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_body_formation_records`
- 来源：`afw-pefcr-v3-1-2025`

##### 废物流

##### 基本流

#### 输出

##### 产品流

###### 合格已形成帽体（`formed_headgear_body_output`）

合格帽体或裁片组离开形成过程进入阻帽或最终装配；通过批次称重或产品特定质量平衡确定。

- 选定流：Formed textile headgear body
- 流属性/单位：Mass / kg
- 数量规则：实测合格已形成帽体质量
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：产品特定（`product_specific`）
- 归一化基准：每 kg 合格已形成帽体输出
- 基准类型：过程输出（`process_output`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_body_formation_records`
- 来源：

##### 废物流

###### 纺织物裁剪边角料（`textile_cutting_offcuts_output`）

版样裁剪产生的织物边角料按成分特定废物流实测质量并记录去向。

- 选定流：Waste textile cutting offcuts
- 流属性/单位：Mass / kg
- 数量规则：实测纺织物裁剪边角料质量
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：产品特定（`product_specific`）
- 归一化基准：每 kg 合格已形成帽体输出
- 基准类型：过程输出（`process_output`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_body_formation_records`
- 来源：`afw-pefcr-v3-1-2025`

###### 编条边角料（`plaited_strip_offcuts_output`）

申报编条的端头和不合格段与其他纺织废物分开称重并关联接收处理。

- 选定流：Waste plaited strip offcuts
- 流属性/单位：Mass / kg
- 数量规则：实测编条边角料质量
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：产品特定（`product_specific`）
- 归一化基准：每 kg 合格已形成帽体输出
- 基准类型：过程输出（`process_output`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_body_formation_records`
- 来源：`historic-england-plaiters-lea-2011`

###### 针织或钩编纱线废物（`yarn_waste_output`）

纱头、开机废料及不合格针织/钩编材料作为一个申报纤维成分的废物流收集。

- 选定流：Waste textile yarn
- 流属性/单位：Mass / kg
- 数量规则：实测纱线废物质量
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：产品特定（`product_specific`）
- 归一化基准：每 kg 合格已形成帽体输出
- 基准类型：过程输出（`process_output`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_body_formation_records`
- 来源：`afw-pefcr-v3-1-2025`

##### 基本流

### 过程：阻帽与成形（`blocking_shaping`）

#### 输入

##### 产品流

###### 进入阻帽的已形成帽体（`formed_body_blocking_input`）

已形成的毡制、编条、针织/钩编或织物帽体进入调湿成形，并保留路线及实测质量。

- 选定流：Formed textile headgear body
- 流属性/单位：Mass / kg
- 数量规则：实测进入阻帽的已形成帽体质量
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：产品特定（`product_specific`）
- 归一化基准：每 kg 合格已成形帽体输出
- 基准类型：过程输出（`process_output`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_blocking_records`
- 来源：`ilo-isco-68-hatmaking`; `historic-england-plaiters-lea-2011`

###### 阻帽过程用水（`blocking_process_water_input`）

喷洒、浇注或调湿帽体的水由过程水表或批次加水记录取得。

- 选定流：Process water
- 流属性/单位：Mass / kg
- 数量规则：实测阻帽过程用水
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每 kg 合格已成形帽体输出
- 基准类型：过程输出（`process_output`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_blocking_records`
- 来源：`ilo-isco-68-hatmaking`

###### 阻帽用蒸汽（`blocking_steam_input`）

进入阻帽设备的外购或单独生成蒸汽与热水及燃料分别计量。

- 选定流：Steam supplied to headgear blocking
- 流属性/单位：Mass / kg
- 数量规则：实测供应阻帽的蒸汽
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每 kg 合格已成形帽体输出
- 基准类型：过程输出（`process_output`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_blocking_records`
- 来源：`historic-england-plaiters-lea-2011`

###### 阻帽用热水（`blocking_hot_water_input`）

作为载热体跨越阻帽边界的热水独立记录，不计入蒸汽。

- 选定流：Hot water supplied to headgear blocking
- 流属性/单位：Mass / kg
- 数量规则：实测供应阻帽的热水
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每 kg 合格已成形帽体输出
- 基准类型：过程输出（`process_output`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_blocking_records`
- 来源：`ilo-isco-68-hatmaking`

###### 阻帽与成形用电力（`blocking_electricity_input`）

压机、阻帽机、泵、抽排和直接辅助设备用电由计量或物理分配取得。

- 选定流：Electricity, low voltage, at factory
- 流属性/单位：Energy / kWh
- 数量规则：实测阻帽过程耗电
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每 kg 合格已成形帽体输出
- 基准类型：过程输出（`process_output`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_blocking_records`
- 来源：`afw-pefcr-v3-1-2025`

###### 阻帽供热燃烧天然气（`blocking_natural_gas_input`）

仅在前景边界内燃烧供阻帽热时记录天然气，不与 LPG 或外购蒸汽合并。

- 选定流：Natural gas burned for blocking heat
- 流属性/单位：Energy / MJ
- 数量规则：实测分配至阻帽的天然气消耗
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每 kg 合格已成形帽体输出
- 基准类型：过程输出（`process_output`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_blocking_records`
- 来源：`ec-pef-method-2021`

###### 阻帽供热燃烧液化石油气（`blocking_lpg_input`）

仅在前景边界内燃烧供阻帽热时将 LPG 作为独立燃料记录。

- 选定流：Liquefied petroleum gas burned for blocking heat
- 流属性/单位：Mass / kg
- 数量规则：实测分配至阻帽的 LPG 消耗
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每 kg 合格已成形帽体输出
- 基准类型：过程输出（`process_output`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_blocking_records`
- 来源：`ec-pef-method-2021`

##### 废物流

##### 基本流

#### 输出

##### 产品流

###### 合格阻帽成形帽体（`shaped_headgear_body_output`）

合格成形帽体在记录的含湿状态称重后转入整理或装配。

- 选定流：Blocked and shaped textile headgear body
- 流属性/单位：Mass / kg
- 数量规则：实测合格成形帽体质量
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：产品特定（`product_specific`）
- 归一化基准：每 kg 合格已成形帽体输出
- 基准类型：过程输出（`process_output`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_blocking_records`
- 来源：`ilo-isco-68-hatmaking`

##### 废物流

###### 阻帽排放废水（`blocking_wastewater_output`）

离开阻帽过程的水在处理或转移前计量，不与固体废物合并。

- 选定流：Wastewater from headgear blocking
- 流属性/单位：Mass / kg
- 数量规则：实测阻帽废水质量
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每 kg 合格已成形帽体输出
- 基准类型：过程输出（`process_output`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_blocking_records`
- 来源：`jrc-textiles-bref-2023`

##### 基本流

###### 阻帽燃料燃烧化石二氧化碳（`blocking_fossil_co2_output`）

由分别记录的天然气或 LPG 消耗及披露的适用因子计算直接化石二氧化碳。

- 选定流：Carbon dioxide, fossil, to air
- 流属性/单位：Mass / kg
- 数量规则：计算前景阻帽燃料燃烧的直接化石 CO2
- 数值来源模式：计算值（`calculated_value`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每 kg 合格已成形帽体输出
- 基准类型：过程输出（`process_output`）
- 证据类型：采集计算（`calculated_from_collection`）
- 采集协议：`cp_blocking_records`
- 来源：`ec-pef-method-2021`

###### 阻帽燃料燃烧氮氧化物（`blocking_nox_output`）

直接氮氧化物由烟气实测，或按各燃料记录和披露的技术特定因子计算。

- 选定流：Nitrogen oxides to air
- 流属性/单位：Mass / kg
- 数量规则：实测或计算前景阻帽燃料燃烧氮氧化物
- 数值来源模式：计算值（`calculated_value`）
- 适用范围：技术特定（`technology_specific`）
- 归一化基准：每 kg 合格已成形帽体输出
- 基准类型：过程输出（`process_output`）
- 证据类型：采集计算（`calculated_from_collection`）
- 采集协议：`cp_blocking_records`
- 来源：`ec-pef-method-2021`

### 过程：湿法整理与干燥（`wet_finishing`）

#### 输入

##### 产品流

###### 进入湿法整理的成形帽体（`shaped_body_wet_finishing_input`）

成形帽体进入洗涤、染色、挺括或防水，保留实测进料质量和含湿状态。

- 选定流：Blocked and shaped textile headgear body
- 流属性/单位：Mass / kg
- 数量规则：实测进入湿法整理的成形帽体质量
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：产品特定（`product_specific`）
- 归一化基准：每 kg 合格已整理帽体输出
- 基准类型：过程输出（`process_output`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_wet_finishing_records`
- 来源：`historic-england-plaiters-lea-2011`

###### 湿法整理过程用水（`finishing_process_water_input`）

洗涤、染色、漂洗、挺括或防水加水由水表或批次配方取得。

- 选定流：Process water
- 流属性/单位：Mass / kg
- 数量规则：实测湿法整理用水
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每 kg 合格已整理帽体输出
- 基准类型：过程输出（`process_output`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_wet_finishing_records`
- 来源：`jrc-textiles-bref-2023`

###### 湿法整理用蒸汽（`finishing_steam_input`）

进入湿法整理设备的蒸汽与热水和电力分别计量。

- 选定流：Steam supplied to textile finishing
- 流属性/单位：Mass / kg
- 数量规则：实测供应湿法整理的蒸汽
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每 kg 合格已整理帽体输出
- 基准类型：过程输出（`process_output`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_wet_finishing_records`
- 来源：`jrc-textiles-bref-2023`

###### 湿法整理用热水（`finishing_hot_water_input`）

作为载热体供应的热水独立计量，不与蒸汽或常温过程水合并。

- 选定流：Hot water supplied to textile finishing
- 流属性/单位：Mass / kg
- 数量规则：实测供应湿法整理的热水
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每 kg 合格已整理帽体输出
- 基准类型：过程输出（`process_output`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_wet_finishing_records`
- 来源：`jrc-textiles-bref-2023`

###### 湿法整理与干燥用电力（`finishing_electricity_input`）

槽体、泵、干燥机、抽排和直接辅助设备用电由计量或物理分配取得。

- 选定流：Electricity, low voltage, at factory
- 流属性/单位：Energy / kWh
- 数量规则：实测湿法整理耗电
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每 kg 合格已整理帽体输出
- 基准类型：过程输出（`process_output`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_wet_finishing_records`
- 来源：`jrc-textiles-bref-2023`

###### 头饰染色配方（`dye_formulation_input`）

实际颜色对应的配制染料与挺括剂、防水剂和洗涤剂分别记录。

- 选定流：Textile dye formulation
- 流属性/单位：Mass / kg
- 数量规则：实测染料配方加料质量
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：产品特定（`product_specific`）
- 归一化基准：每 kg 合格已整理帽体输出
- 基准类型：过程输出（`process_output`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_wet_finishing_records`
- 来源：`jrc-textiles-bref-2023`

###### 头饰挺括配方（`stiffening_agent_input`）

用于定型帽体或帽檐时，将申报挺括剂作为单一化学品投入记录。

- 选定流：Textile stiffening agent formulation
- 流属性/单位：Mass / kg
- 数量规则：实测挺括配方加料质量
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：产品特定（`product_specific`）
- 归一化基准：每 kg 合格已整理帽体输出
- 基准类型：过程输出（`process_output`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_wet_finishing_records`
- 来源：`historic-england-plaiters-lea-2011`

###### 头饰防水配方（`water_repellent_agent_input`）

使用时单独记录产品特定防水配方，并保留化学身份和固含量。

- 选定流：Textile water-repellent agent formulation
- 流属性/单位：Mass / kg
- 数量规则：实测防水配方加料质量
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：产品特定（`product_specific`）
- 归一化基准：每 kg 合格已整理帽体输出
- 基准类型：过程输出（`process_output`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_wet_finishing_records`
- 来源：`jrc-textiles-bref-2023`

###### 洗涤剂配方（`detergent_formulation_input`）

前景洗涤所用洗涤剂作为一个配方记录，不与染料或整理剂合并。

- 选定流：Textile detergent formulation
- 流属性/单位：Mass / kg
- 数量规则：实测洗涤剂配方加料质量
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：产品特定（`product_specific`）
- 归一化基准：每 kg 合格已整理帽体输出
- 基准类型：过程输出（`process_output`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_wet_finishing_records`
- 来源：`jrc-textiles-bref-2023`

##### 废物流

##### 基本流

#### 输出

##### 产品流

###### 合格湿法整理帽体（`finished_headgear_body_output`）

合格帽体经干燥并调节至记录含湿状态后离开湿法整理。

- 选定流：Finished textile headgear body
- 流属性/单位：Mass / kg
- 数量规则：实测合格湿法整理帽体质量
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：产品特定（`product_specific`）
- 归一化基准：每 kg 合格已整理帽体输出
- 基准类型：过程输出（`process_output`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_wet_finishing_records`
- 来源：

##### 废物流

###### 湿法整理排放废水（`finishing_wastewater_output`）

申报湿法整理线的合并水相排放在处理前计量，并按工厂采样方案表征。

- 选定流：Wastewater from textile headgear finishing
- 流属性/单位：Mass / kg
- 数量规则：实测湿法整理废水质量
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每 kg 合格已整理帽体输出
- 基准类型：过程输出（`process_output`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_wet_finishing_records`
- 来源：`jrc-textiles-bref-2023`

##### 基本流

###### 排入空气的非甲烷挥发性有机物（`finishing_nmvoc_output`）

仅当整理配方或干燥操作产生经证实的释放时，以实测或配方质量平衡记录直接 NMVOC。

- 选定流：Non-methane volatile organic compounds to air
- 流属性/单位：Mass / kg
- 数量规则：实测或计算湿法整理直接 NMVOC 排放
- 数值来源模式：计算值（`calculated_value`）
- 适用范围：技术特定（`technology_specific`）
- 归一化基准：每 kg 合格已整理帽体输出
- 基准类型：过程输出（`process_output`）
- 证据类型：采集计算（`calculated_from_collection`）
- 采集协议：`cp_wet_finishing_records`
- 来源：`jrc-textiles-bref-2023`

### 过程：最终装配、装饰与检验（`final_assembly_inspection`）

#### 输入

##### 产品流

###### 进入最终装配的已整理帽体（`finished_body_assembly_input`）

合格的已形成、成形或湿法整理帽体进入最终装配，并保留路线和进料质量。

- 选定流：Finished textile headgear body
- 流属性/单位：Mass / kg
- 数量规则：实测进入最终装配的帽体质量
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：产品特定（`product_specific`）
- 归一化基准：每 kg 合格成品头饰输出
- 基准类型：过程输出（`process_output`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_final_assembly_records`
- 来源：`ilo-isco-68-hatmaking`

###### 并入头饰的里料织物（`lining_fabric_input`）

申报里料织物与帽壳分开记录，由领用裁片实测或计算并入质量。

- 选定流：Textile lining fabric
- 流属性/单位：Mass / kg
- 数量规则：实测或计算并入的里料质量
- 数值来源模式：计算值（`calculated_value`）
- 适用范围：产品特定（`product_specific`）
- 归一化基准：每 kg 合格成品头饰输出
- 基准类型：过程输出（`process_output`）
- 证据类型：采集计算（`calculated_from_collection`）
- 采集协议：`cp_final_assembly_records`
- 来源：`ilo-isco-68-hatmaking`; `afw-pefcr-v3-1-2025`

###### 并入头饰的汗带（`sweatband_input`）

指定汗带作为单一组件跨越装配边界，以实测或供应商申报质量记录。

- 选定流：Textile sweatband
- 流属性/单位：Mass / kg
- 数量规则：实测并入的汗带质量
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：产品特定（`product_specific`）
- 归一化基准：每 kg 合格成品头饰输出
- 基准类型：过程输出（`process_output`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_final_assembly_records`
- 来源：`ilo-isco-68-hatmaking`

###### 并入头饰的织带装饰（`ribbon_trim_input`）

外部帽带或装饰用织带按纤维成分及并入质量独立记录。

- 选定流：Textile ribbon trim
- 流属性/单位：Mass / kg
- 数量规则：实测并入的织带质量
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：产品特定（`product_specific`）
- 归一化基准：每 kg 合格成品头饰输出
- 基准类型：过程输出（`process_output`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_final_assembly_records`
- 来源：`historic-england-plaiters-lea-2011`

###### 并入头饰的钢丝骨架（`wire_frame_input`）

帽檐或内部骨架用钢丝作为一个金属组件记录，不与纺织辅料合并。

- 选定流：Steel wire headgear frame
- 流属性/单位：Mass / kg
- 数量规则：实测并入的钢丝质量
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：产品特定（`product_specific`）
- 归一化基准：每 kg 合格成品头饰输出
- 基准类型：过程输出（`process_output`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_final_assembly_records`
- 来源：`ilo-isco-68-hatmaking`

###### 并入头饰或发网的弹性带（`elastic_band_input`）

用于保持贴合的弹性带按申报聚合物/纺织成分和并入质量单独记录。

- 选定流：Textile elastic band
- 流属性/单位：Mass / kg
- 数量规则：实测并入的弹性带质量
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：产品特定（`product_specific`）
- 归一化基准：每 kg 合格成品头饰输出
- 基准类型：过程输出（`process_output`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_final_assembly_records`
- 来源：`afw-pefcr-v3-1-2025`

###### 最终装配用缝纫线（`assembly_sewing_thread_input`）

连接里料、帽带、装饰或裁片的缝纫线由线轴领退或文件化耗线法计算。

- 选定流：Sewing thread
- 流属性/单位：Mass / kg
- 数量规则：实测或计算装配缝纫线消耗质量
- 数值来源模式：计算值（`calculated_value`）
- 适用范围：产品特定（`product_specific`）
- 归一化基准：每 kg 合格成品头饰输出
- 基准类型：过程输出（`process_output`）
- 证据类型：采集计算（`calculated_from_collection`）
- 采集协议：`cp_final_assembly_records`
- 来源：`ilo-isco-68-hatmaking`

###### 最终装配用胶粘剂（`assembly_adhesive_input`）

固定装饰或组件的实际胶粘剂配方与挺括剂和涂层分开记录。

- 选定流：Headgear assembly adhesive
- 流属性/单位：Mass / kg
- 数量规则：实测胶粘剂配方消耗质量
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：产品特定（`product_specific`）
- 归一化基准：每 kg 合格成品头饰输出
- 基准类型：过程输出（`process_output`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_final_assembly_records`
- 来源：`afw-pefcr-v3-1-2025`

###### 最终装配与检验用电力（`assembly_electricity_input`）

缝制、修边、压整、抽排和检验设备用电由计量或物理分配取得。

- 选定流：Electricity, low voltage, at factory
- 流属性/单位：Energy / kWh
- 数量规则：实测最终装配耗电
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每 kg 合格成品头饰输出
- 基准类型：过程输出（`process_output`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_final_assembly_records`
- 来源：`afw-pefcr-v3-1-2025`

##### 废物流

##### 基本流

#### 输出

##### 产品流

###### 包装前合格成品头饰（`accepted_finished_headgear_output`）

检验后的合格品不含包装称重，并与不合格品及所有并入组件核对。

- 选定流：Accepted finished textile headgear
- 流属性/单位：Mass / kg
- 数量规则：实测合格成品头饰净质量
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：产品特定（`product_specific`）
- 归一化基准：每 kg 合格成品头饰输出
- 基准类型：过程输出（`process_output`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_final_assembly_records`
- 来源：`afw-pefcr-v3-1-2025`

##### 废物流

###### 最终装配纺织里料边角料（`assembly_textile_waste_output`）

纺织里料边角料作为一个成分特定废物交换称重并关联接收处理；其他每种装配废物材料均在实施数据集中单列。

- 选定流：Waste textile lining offcuts
- 流属性/单位：Mass / kg
- 数量规则：实测纺织装配废物质量
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：产品特定（`product_specific`）
- 归一化基准：每 kg 合格成品头饰输出
- 基准类型：过程输出（`process_output`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_final_assembly_records`
- 来源：`afw-pefcr-v3-1-2025`

###### 最终装配钢丝边角料（`assembly_metal_waste_output`）

钢丝端头及不合格骨架件与纺织废物分开称重并记录去向。

- 选定流：Waste steel wire offcuts
- 流属性/单位：Mass / kg
- 数量规则：实测钢丝边角料质量
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：产品特定（`product_specific`）
- 归一化基准：每 kg 合格成品头饰输出
- 基准类型：过程输出（`process_output`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_final_assembly_records`
- 来源：`afw-pefcr-v3-1-2025`

###### 不合格成品头饰（`defective_headgear_waste_output`）

作为废物离开过程的不合格成品单独称重并关联实际接收处理。

- 选定流：Waste defective textile headgear
- 流属性/单位：Mass / kg
- 数量规则：实测不合格成品头饰质量
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：产品特定（`product_specific`）
- 归一化基准：每 kg 合格成品头饰输出
- 基准类型：过程输出（`process_output`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_final_assembly_records`
- 来源：`afw-pefcr-v3-1-2025`

##### 基本流

### 过程：产品包装（`packaging`）

#### 输入

##### 产品流

###### 进入包装的合格成品头饰（`finished_headgear_packaging_input`）

合格净产品以最终归一化所用相同规格和实测质量进入包装。

- 选定流：Accepted finished textile headgear
- 流属性/单位：Mass / kg
- 数量规则：实测进入包装的合格头饰净质量
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：产品特定（`product_specific`）
- 归一化基准：每 1 kg 参考产品
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_packaging_records`
- 来源：`afw-pefcr-v3-1-2025`

###### 初级包装纸板帽盒（`paperboard_hat_box_input`）

直接容纳头饰的硬纸板盒与薄页纸、塑料袋和运输纸箱分别称重。

- 选定流：Paperboard hat box
- 流属性/单位：Mass / kg
- 数量规则：实测使用的纸板帽盒质量
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：产品特定（`product_specific`）
- 归一化基准：每 1 kg 参考产品
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_packaging_records`
- 来源：`afw-pefcr-v3-1-2025`

###### 包裹用薄页纸（`tissue_paper_input`）

产品周围或内部的薄页纸作为单独纸质投入称重。

- 选定流：Tissue wrapping paper
- 流属性/单位：Mass / kg
- 数量规则：实测使用的薄页纸质量
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：产品特定（`product_specific`）
- 归一化基准：每 1 kg 参考产品
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_packaging_records`
- 来源：`afw-pefcr-v3-1-2025`

###### 初级包装聚乙烯袋（`polyethylene_bag_input`）

直接容纳产品的聚乙烯薄膜袋与纸包装分别记录。

- 选定流：Polyethylene packaging bag
- 流属性/单位：Mass / kg
- 数量规则：实测使用的聚乙烯袋质量
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：产品特定（`product_specific`）
- 归一化基准：每 1 kg 参考产品
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_packaging_records`
- 来源：`afw-pefcr-v3-1-2025`

###### 产品纸吊牌（`paper_hangtag_input`）

纸吊牌作为一个包装组件记录实测质量及申报涂层或印刷规格。

- 选定流：Paper hangtag
- 流属性/单位：Mass / kg
- 数量规则：实测使用的纸吊牌质量
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：产品特定（`product_specific`）
- 归一化基准：每 1 kg 参考产品
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_packaging_records`
- 来源：`afw-pefcr-v3-1-2025`

###### 分组运输瓦楞纸箱（`corrugated_carton_input`）

按实测空箱质量和箱内产品净质量计算分配给参考产品的瓦楞纸箱份额。

- 选定流：Corrugated paperboard shipping carton
- 流属性/单位：Mass / kg
- 数量规则：计算分配给参考产品的瓦楞纸箱质量
- 数值来源模式：计算值（`calculated_value`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每 1 kg 参考产品
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集计算（`calculated_from_collection`）
- 采集协议：`cp_packaging_records`
- 来源：`afw-pefcr-v3-1-2025`

###### 包装用电力（`packaging_electricity_input`）

包装、封口、贴标和直接辅助设备用电由计量或物理分配取得。

- 选定流：Electricity, low voltage, at factory
- 流属性/单位：Energy / kWh
- 数量规则：实测包装过程耗电
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每 1 kg 参考产品
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_packaging_records`
- 来源：`afw-pefcr-v3-1-2025`

##### 废物流

##### 基本流

#### 输出

##### 产品流

###### 参考产品输出（`reference_finished_headgear_output`）

经核验 CPC 28262 产品流以恰好 1 kg 合格头饰净质量离开包装，包装保持独立。

- 选定流：Hats and other headgear, of felt, or plaited or made by assembling strips of any material, or knitted or crocheted or made up from lace or other textile fabric in the piece, hair-nets `b00baec8-ce3f-4e11-99c7-8a40167d2f4f`
- 流属性/单位：Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg (`93a60a57-a4c8-11da-a746-0800200c9a66`)
- 数量规则：合格成品头饰净质量归一化为恰好 1 kg
- 数值来源模式：计算值（`calculated_value`）
- 适用范围：产品特定（`product_specific`）
- 归一化基准：每 1 kg 参考产品
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集计算（`calculated_from_collection`）
- 采集协议：`cp_packaging_records`
- 来源：`un-cpc-3-0-28262`

##### 废物流

###### 包装工序瓦楞运输纸箱废物（`paper_packaging_waste_output`）

将损坏或未用瓦楞运输纸箱材料记录为一个瓦楞纸板废物交换；产生的帽盒、薄页纸和吊牌废物须在实施数据集中分别单列。

- 选定流：Waste corrugated paperboard
- 流属性/单位：Mass / kg
- 数量规则：实测瓦楞运输纸箱废物质量
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每 1 kg 参考产品
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_packaging_records`
- 来源：`afw-pefcr-v3-1-2025`

###### 包装工序聚乙烯薄膜废物（`polyethylene_film_waste_output`）

损坏或未用聚乙烯薄膜与纸基包装废物分开称重并关联接收处理。

- 选定流：Waste polyethylene packaging film
- 流属性/单位：Mass / kg
- 数量规则：实测聚乙烯包装废物质量
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每 1 kg 参考产品
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_packaging_records`
- 来源：`afw-pefcr-v3-1-2025`

##### 基本流

## 7. 分配与共产品处理

| rule_id | 适用对象 | 规则 | source_ids |
| --- | --- | --- | --- |
| `allocation_avoid` | 前景操作 | 先细分帽体形成、阻帽、湿法整理、装配和包装，并计量产品特定投入产出；仅在物理细分穷尽后使用分配。 | `ec-pef-method-2021`; `afw-pefcr-v3-1-2025` |
| `allocation_shared_electricity` | 共用电表 | 采用设备计量、运行时间乘实测/额定功率或其他因果物理驱动分配共用电力，并保留总表、分子和分母。 | `afw-pefcr-v3-1-2025` |
| `allocation_shared_thermal` | 共用蒸汽和热水 | 各载热体用过程表计或因果热需求分别分配；不得把蒸汽、热水和燃料合并为公用工程池。 | `jrc-textiles-bref-2023` |
| `allocation_material_losses` | 边角料、不合格品和余料 | 全部投入负荷归于产生损失的生产；记录废物流及处理，不扣减销售或回收收入。 | `afw-pefcr-v3-1-2025` |
| `allocation_packaging` | 分组包装 | 按同期间该包装内实际产品净质量或件数分配实测分组包装质量。 | `afw-pefcr-v3-1-2025` |

## 8. 前景数据采集、计算与质量规则

### 数据采集协议

| protocol_id | process_id | flow_role | record_type | raw_fields | collection_method | unit | frequency | temporal_coverage | site_scope | aggregation_rule | quality_evidence |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| `cp_body_formation_records` | `headgear_body_formation` | 材料投入、电力、合格帽体和形成废物 | BOM；领退料单；秤；设备或区域电表；废物转移记录 | 产品代码；路线；材料规格；领用/退料质量；电表起止；合格输出；各废物质量与去向 | 按批次核对领料、合格输出和分别称量的废物 | kg; kWh | 每批，按月汇总 | 通常至少连续 12 个月或完整生产期 | 全部形成线及分包商 | 按产品规格汇总后除以合格帽体质量 | 秤校准；表计身份；签署领退料；BOM 版本；废物凭证；平衡差 |
| `cp_blocking_records` | `blocking_shaping` | 帽体、水、公用工程、燃料、输出、废水和直接排放 | 批记录；各表计；秤；烟气数据 | 产品代码；帽体质量；水；蒸汽；热水；电力；天然气；LPG；输出；废水；因子或烟气结果 | 各载能体分别记录，并核对调湿投入、成形输出和水分变化 | kg; kWh; MJ | 每批或班次，按月汇总 | 代表性生产期 | 全部阻帽设备及直接供热 | 归一化至合格成形帽体；仅由已记录燃料计算排放 | 表计校准；燃料发票核对；含湿记录；烟气报告或因子；操作日志 |
| `cp_wet_finishing_records` | `wet_finishing` | 帽体、水、公用工程、各配方、输出、废水和 NMVOC | 批配方；化学品领用；表计；秤；废水和空气监测 | 产品代码；配方；进出质量/含湿；水；蒸汽；热水；电力；各配方质量/成分；废水；NMVOC | 每项配方加料及监测排放关联到批次和操作 | kg; kWh | 每批，按月汇总 | 代表性生产期 | 全部湿法整理和干燥线 | 按产品和操作汇总，扣除退料后除以合格干态帽体质量 | 配方批准；SDS/规格；表计校准；实验结果；含湿方法；排放记录 |
| `cp_final_assembly_records` | `final_assembly_inspection` | 帽体、组件、电力、合格产品和各废物 | BOM；组件领退；秤；电表；检验和废物记录 | 产品代码；BOM 版本；各组件规格/质量；电力；合格件数/质量；纺织废物；金属废物；不合格品；去向 | 按产品规格核对并入组件、不合格材料和合格净产品 | kg; item; kWh | 每批，按月汇总 | 代表性生产期 | 全部最终装配、检验线及分包商 | 同质批次汇总后除以合格头饰净质量 | BOM 覆盖；秤校准；检验准则；不合格日志；废物凭证；平衡差 |
| `cp_packaging_records` | `packaging` | 净产品、各包装组件、电力和包装废物 | 包装规格；计数；皮重称量；电表；废物记录 | 产品代码；净产品件数/质量；各包装件数/空重；分组纸箱内容；电力；纸废物；聚乙烯废物 | 称量代表性空包装并核对领用、退回、使用和废弃 | kg; item; kWh | 每种包装配置及月度汇总 | 代表性生产期 | 全部包装线 | 件数转质量，分组包装按所含净产品质量分配，再归一化至 1 kg | 校准秤；包装规格；领退记录；装箱单；表计身份；废物凭证 |

### 计算规则

| rule_id | Applies to | Formula or rule | Inputs | Output | source_ids |
| --- | --- | --- | --- | --- | --- |
| `calc_reference_normalization` | 全部清单行 | 归一化量 = 期间交换量 / 合格成品头饰净质量 | 期间交换量；合格净产品质量 | 每 1 kg 参考产品的交换量 | `ec-pef-method-2021` |
| `calc_material_consumption` | 领用材料和组件 | 消耗质量 = 领用质量 - 受控退库未用质量 | 领退记录 | 材料消耗质量 | `afw-pefcr-v3-1-2025` |
| `calc_count_to_mass` | 件数记录 | 材料质量 = 件数 × 同规格实测单件质量 | 件数；单件质量 | kg 材料或包装 | `afw-pefcr-v3-1-2025` |
| `calc_process_mass_balance` | 各前景过程 | 差额 = 投入质量 + 留存水 - 合格输出 - 各废物 - 记录蒸发 | 全部质量投入产出；水分变化 | 披露差额和完整性检查 | `afw-pefcr-v3-1-2025` |
| `calc_shared_electricity` | 共用电表 | 过程电量 = 总表电量 × 因果驱动 / 驱动总和 | 总表；设备时间与功率或经验证驱动 | 分配过程 kWh | `afw-pefcr-v3-1-2025` |
| `calc_direct_combustion_emissions` | 阻帽燃料燃烧 | 由各燃料记录及适用因子分别计算每种排放，或采用直接实测 | 燃料量/属性；因子或烟气实测 | 一种指定基本流 kg | `ec-pef-method-2021` |
| `calc_group_packaging` | 瓦楞纸箱等分组包装 | 分配包装质量 = 空包装质量 × 参考产品净质量 / 包含产品净质量 | 空包装质量；所含产品件数和净质量 | 分配包装 kg | `afw-pefcr-v3-1-2025` |

### 数据质量要求

| requirement_id | Applies to | Requirement | Evidence |
| --- | --- | --- | --- |
| `dq_product_identity` | 参考产品 | 证明 CPC 28262 范围，并申报产品类型、材料构造、路线、尺寸和整理。 | 批准规格、BOM、产品图像/图纸和分类审查 |
| `dq_bom_coverage` | 并入材料 | 至少覆盖成品质量 95%，并覆盖 100% 主要材料、里料、骨架/金属及结构相关组件；披露所有遗漏。 | BOM 覆盖计算和质量核对 |
| `dq_route_coverage` | 过程图 | 全部场内和分包操作映射到过程清单，并说明每个未纳入条件过程。 | 流程图、供应商声明和生产记录 |
| `dq_temporal` | 前景记录 | 采用通常连续 12 个月或完整生产期的代表性期间，并说明异常停机或产品组合变化。 | 带日期的表计、生产、采购和废物记录 |
| `dq_measurement` | 实测量 | 对各材料、水、公用工程、输出和废物注明仪器、校准、读取频率及分配。 | 校准证书、表计清单和计算底稿 |
| `dq_chemical_identity` | 化学配方 | 保留各染料、挺括剂、防水剂、洗涤剂和胶粘剂名称、供应商、配方/活性成分、SDS/规格及加料质量。 | 化学品领用、SDS 和供应商规格 |
| `dq_waste_destination` | 各废物流 | 各废物流保留独立质量和接收处理证据；不得仅由销售推断回收。 | 转移联单、发票和处理设施声明 |
| `dq_representativeness` | 全部上游数据集 | 记录与申报材料状态、电力组合、热供应、化学品和包装的地理、时间及技术匹配。 | 数据集元数据和质量评价 |

## 9. 校验规则

| rule_id | 适用对象 | 规则 | source_ids |
| --- | --- | --- | --- |
| `validate_reference_identity` | 参考流 | 参考 UUID 必须为 `b00baec8-ce3f-4e11-99c7-8a40167d2f4f`，解析为公开 state-100、CPC 28262 Product flow，并采用 Mass `93a60a56-a3c8-11da-a746-0800200b9a66` 与 Units of mass `93a60a57-a4c8-11da-a746-0800200c9a66` 的 kg。 | `un-cpc-3-0-28262` |
| `validate_reference_amount` | 参考流 | 输出须归一化为恰好 1 kg 合格成品头饰净质量，并可追溯未归一化实测产品质量和件数。 | `ec-pef-method-2021` |
| `validate_scope` | 产品身份 | 产品须为 CPC 28262 成品头饰或发网，不得为未加工帽体、安全头盔、排除材料类别或头饰零部件。 | `un-cpc-3-0-28262`; `afw-pefcr-v3-1-2025` |
| `validate_route` | 过程清单 | 全部申报毡制、编条、针织/钩编、花边或整幅织物操作须表示；实际阻帽和湿法整理不得遗漏。 | `ilo-isco-68-hatmaking`; `historic-england-plaiters-lea-2011`; `afw-pefcr-v3-1-2025` |
| `validate_atomic_rows` | 过程清单 | 每卡仅描述一个交换；各材料、电力、蒸汽、热水、燃料、化学配方、包装、废物和基本流排放必须分开。 | `ec-pef-method-2021` |
| `validate_uuid_evidence` | 含 UUID 的行 | 仅当 hybrid-search 与 state-100 详情对身份、流类型、适用分类和参考属性一致时保存 Tiangong UUID；否则留空并保留 manifest 审查项。 |  |
| `validate_bom` | 并入投入 | BOM 须满足 `dq_bom_coverage`，具体产品中的每项并入材料或组件均须有独立实施交换。 | `afw-pefcr-v3-1-2025` |
| `validate_mass_balance` | 前景过程 | 各过程须核对合格输出、分别计量的废物及记录水分/蒸发；不明净额或隐藏全局损失率不合格。 | `afw-pefcr-v3-1-2025` |
| `validate_utility_allocation` | 电力和载热体 | 共用表分配须披露边界、期间、驱动、分子和分母；蒸汽、热水、天然气和 LPG 不得合并。 | `afw-pefcr-v3-1-2025`; `jrc-textiles-bref-2023` |
| `validate_packaging` | 包装 | 各使用包装组件和各包装废物材料须分别记录，全部包装质量排除在参考产品质量之外。 | `afw-pefcr-v3-1-2025` |

## 10. 发布数据集画像

| 字段 | 值 |
| --- | --- |
| dataset_role | `secondary_dataset`；经方法和数据审查后可作为 `background_dataset` |
| downstream_use | CPC 28262 成品头饰工厂门前景过程和 lifecyclemodel 构建 |
| allowed_use | 产品类型、材料构造、路线、尺寸、整理、工厂地理、期间和包装与数据集匹配的产品特定工厂门研究 |
| excluded_use | 未加工帽体；安全、橡胶、塑料、石棉或纯毛皮头饰；不匹配构造路线；未另行建模的分销、使用或报废声明；无适用审查比较方法的比较声明 |
| required_metadata | 规范 PCR id；参考 UUID；CPC；产品规格；材料和纤维成分；构造路线；尺寸；每 kg 件数；BOM 覆盖；纳入及分包过程；湿法整理；工厂地理；期间；分配；包装；废物去向；source ids |
| required_quality_disclosure | 原始数据覆盖；计量和校准；共用资源分配；过程质量平衡差；数据缺口；代理；上游代表性；化学身份；直接排放方法；不确定性及核证状态 |
| update_trigger | 产品范围、材料构造、帽体形成或阻帽路线、湿法整理化学品、工厂或分包地理、电力或热供应、包装、废物处理、参考流身份、适用 PEF 方法或实质改变规则的证据发生变化 |

## 11. 数据源

| Source id | Type | Reference | Used for |
| --- | --- | --- | --- |
| `un-cpc-3-0-28262` | 官方指南（`official_guidance`） | United Nations Statistics Division, CPC Version 3.0 Explanatory Notes, code 28262, https://unstats.un.org/unsd/classifications/Econ/Download/In%20Text/CPC_Ver_3.0_Exp_Notes_30Jun2025.pdf, 访问日期 2026-08-13 | 产品范围、相邻排除项和分类身份 |
| `afw-pefcr-v3-1-2025` | 标准（`standard`） | Technical Secretariat, Product Environmental Footprint Category Rules: Apparel and Footwear, Version 3.1, 29 April 2025, https://www.carbonfact.com/hubfs/A%26FW_PEFCR_v3.1.pdf；European Commission PEF status page, https://green-forum.ec.europa.eu/green-business/environmental-footprint-methods/pef-method_en，访问日期 2026-08-13 | 帽饰纳入 apparel accessories；BOM、过程拆分、损失、装配、湿处理、包装、公司特定数据和质量规则 |
| `ec-pef-method-2021` | 官方指南（`official_guidance`） | Commission Recommendation (EU) 2021/2279, https://eur-lex.europa.eu/eli/reco/2021/2279/2021-12-30/eng，访问日期 2026-08-13 | 功能单位、前景数据、分配、完整性、报告和核证 |
| `ilo-isco-68-hatmaking` | 官方指南（`official_guidance`） | International Labour Office, International Standard Classification of Occupations, Revised Edition 1968, definitions 7-93.20 to 7-95, https://webapps.ilo.org/ilostat-files/ISCO/newdocs-08-2021/Previous%20versions%20of%20ISCO/ISCO-68/ISCO-68%20EN%20Structure%20and%20defnitions.pdf，访问日期 2026-08-13 | 帽类裁版、阻帽、缝制、加衬、装饰、形成和整理 |
| `historic-england-plaiters-lea-2011` | 官方指南（`official_guidance`） | McOmish, D., Graham, K. and Grech, D., Plaiters' Lea Conservation Area, Luton: Historic Area Assessment, Report 69/2011, Historic England, https://historicengland.org.uk/research/results/reports/69-2011，访问日期 2026-08-13 | 毡帽及编条帽路线、蒸制、阻帽、挺括、干燥、加衬和装饰 |
| `jrc-textiles-bref-2023` | 官方指南（`official_guidance`） | Roth, J. et al., Best Available Techniques Reference Document for the Textiles Industry, EUR 31392 EN, JRC131874, 2023, doi:10.2760/355887, https://publications.jrc.ec.europa.eu/repository/handle/JRC131874，访问日期 2026-08-13 | 条件性纺织准备、染色、洗涤、整理、公用工程、废水和直接排放数据要求 |
