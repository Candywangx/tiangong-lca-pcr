---
pcr_id: pcr.food-products-beverages-and-tobacco-textiles-apparel-and-leather-products.knitted-or-crocheted-fabrics-wearing-apparel.women-s-or-girls-suits-coats-jackets-dresses-skirts-trousers-shorts-and-the-like-of-tex-3ce0e778
language: zh-CN
status: candidate
content_maturity: authored_methodology
translation_status: aligned
sync_with: pcr.en-US.md
---

# 非针织或钩编纺织物制女式或女童套装、大衣、夹克、连衣裙、裙子、裤、短裤及类似品

## 1. 范围与适用性

本 PCR 规定非针织或钩编纺织物制女式或女童套装、大衣、夹克、连衣裙、裙子、裤、短裤及类似成衣的前景生产数据要求。边界从面料、里料、衬料、辅料和包装材料进入申报工厂开始，涵盖裁剪、缝制与组装、条件性成衣湿整理、熨烫、质量检验和包装，止于工厂门处验收合格的成品。

本 PCR 不涵盖针织或钩编服装、归属其他产品类别的衬衫和内衣、婴儿服装、运动套装、滑雪服、泳装、毛皮服装、鞋类、独立服饰配件，以及在申报前景设施之外进行的上游纤维、纱线、织物、染色和织物整理生产。配送、零售、消费者使用、维修和生命终结阶段不属于本前景数据包；这些阶段只能在下游生命周期模型中以独立数据和假设明确加入。

一千克参考流用于生产清单和供应商数据交换，不表示每次穿着服务，未进行单独功能等效研究时不得用于服装耐久性或消费者性能比较。

## 2. 产品类别识别

| 字段 | 值 |
| --- | --- |
| canonical_pcr_id | pcr.food-products-beverages-and-tobacco-textiles-apparel-and-leather-products.knitted-or-crocheted-fabrics-wearing-apparel.women-s-or-girls-suits-coats-jackets-dresses-skirts-trousers-shorts-and-the-like-of-tex-3ce0e778 |
| classification_refs | CPC 3.0: 28233 |
| covered_products | 非针织或钩编纺织物制女式或女童套装、大衣、夹克、连衣裙、裙子、裤、短裤及类似成衣 |
| excluded_products | 针织或钩编服装；CPC 28233 以外的衬衫和内衣；婴儿服装；运动套装；滑雪服；泳装；毛皮服装；鞋类；独立服饰配件 |
| representative_product | 一件符合 CPC 28233 的已申报包装成衣，按验收净产品质量归一化 |
| production_route | 接收非针织或钩编纺织面料和辅料；裁剪；缝制与组装；条件性成衣湿整理；熨烫与质量检验；包装 |
| market_state | 工厂门处已包装的制造成品 |

## 3. 参考流

| 字段 | 值 |
| --- | --- |
| What | 生产一件非针织或钩编纺织物制女式或女童成衣，提供所申报服装子类别的穿着、遮盖或防护功能 |
| How much | 工厂门处 1 kg 验收合格的已包装成衣 |
| How well | 符合申报的服装规格、参考尺码或尺码分布、纤维组成、织物结构、整理方式、质量验收准则和包装配置 |
| How long or cycle | 一个申报生产批次或具有代表性的年度生产期；不表示消费者使用寿命 |
| reference_flow_link | 验收输出质量与下列 Tiangong CPC 28233 产品流一一对应 |

| 字段 | 值 |
| --- | --- |
| 参考数量 | 1 kg |
| 参考产品流 | 非针织或钩编而成的纺织品女装、女童装、外衣、夹克衫、礼服、裙子、长裤、短裤及其类似物品 `27320bfc-4629-4ed1-8139-2abf1f1ea14e` |
| 参考流属性 | Mass `93a60a56-a3c8-11da-a746-0800200b9a66` |
| 参考单位组 | Units of mass `93a60a57-a4c8-11da-a746-0800200c9a66` |
| 参考单位 | kg |
| 必需限定信息 | 服装子类别；女式或女童尺码基准；各部件纤维组成；面料结构；里料、衬料和填料是否存在；辅料规格；湿整理状态；干整理状态；生产地域；设施；批次或参考期；成品净质量；包装配置 |

构建前景数据包时，每项必需限定信息都必须在元数据、产品描述、参考流备注或等效受控字段中声明。验收包装输出质量不含可重复使用的运输资产，但包含随产品离厂的一次性包装；还应分别报告产品质量和包装质量。

## 4. 计量与单位规则

| rule_id | 适用对象 | 必需流属性 | 必需单位 | 规则 |
| --- | --- | --- | --- | --- |
| `reference_mass` | 验收合格的已包装成衣输出 | Mass `93a60a56-a3c8-11da-a746-0800200b9a66` | kg | 在最终质量验收和包装后用经校准秤具确定输出质量；所有清单交换均归一化为 1 kg 验收输出。 |
| `component_mass` | 面料、里料、衬料、缝纫线、辅料和一次性包装 | Mass `93a60a56-a3c8-11da-a746-0800200b9a66` | kg | 按部件和材料记录领用、退回、转移和废弃质量；除非保留有文件支持的产品特定质量换算，否则不得用采购金额或件数替代。 |
| `energy_measurement` | 电力和蒸汽 | Energy | kWh or MJ | 保留计量能源单位和换算因子；没有发票支持的费率和消费量时，不得将费用视为能源量。 |
| `water_measurement` | 工艺用水和湿处理废水 | Volume or Mass | m3 or kg | 按实测单位记录供水和排水；体积与质量换算时保留密度或仪表换算依据。 |
| `packaging_separation` | 一次性包装和可重复使用运输资产 | Mass | kg | 各包装材料分别报告；可重复使用托盘的生产负荷按有文件支持的重复使用次数分配，托盘质量不计入参考产品质量。 |

## 5. 系统边界

| rule_id | Applies to | Rule | source_ids |
| --- | --- | --- | --- |
| `foreground_gate_boundary` | 前景服装生产 | 纳入会改变产品的来料处理、裁剪、缝制与组装、条件性成衣湿整理、熨烫、最终质量检验、包装、现场废物处理以及直至包装成品工厂门的直接排放。 | afw-pefcr-3-1-2025 |
| `upstream_dataset_boundary` | 外购物料与公用工程 | 面料、里料、衬料、缝纫线、辅料、电力、蒸汽、水、洗涤剂和包装应由可追溯上游数据集表示；缺失任何重要材料上游数据集时不得声称摇篮到工厂门完整。 | afw-pefcr-3-1-2025 |
| `loss_and_release_boundary` | 各前景过程 | 在实际发生过程记录逐工序材料损失、不合格成衣、包装废料、废水、污泥和直接排放；不得将损失隐藏在单一类别总收率中。 | afw-pefcr-3-1-2025; eu-textiles-bref-2023 |
| `excluded_life_cycle_stages` | 下游模型 | 配送、零售、使用、维修和生命终结不属于本前景数据包；仅在下游生命周期模型中作为明确阶段加入并披露情景。 | afw-pefcr-3-1-2025 |

### 边界概化

| 字段 | 值 |
| --- | --- |
| declared_starting_condition | 面料、里料、衬料、缝纫线、辅料、标签和包装进入前景设施时，已申报供应商身份、质量、组成和上游数据集引用。 |
| starting_condition_role | 裁剪缝制服装生产的门到门前景起始条件。 |
| product_classification_scope | 仅 CPC 3.0 代码 28233；产品身份必须属于本 PCR 列出的非针织或钩编纺织物制成衣。 |
| recursive_input_rule | 已属于本规范类别的来料产品应作为产品输入并附其自身上游数据集和生产阶段声明；不得用本前景数据包静默递归展开。 |
| upstream_dataset_requirement | 每项跨越边界的外购物料和公用工程都需要供应商特定或其他具有代表性的上游数据集，并披露地域、技术、时期和数据质量。 |
| disclosure | 申报服装子类别、部件 BOM、设施地域、工艺路线、外包作业、分配基准、废物去向、输出验收基准以及全部省略或代理上游数据集。 |

## 6. 过程清单结构

### 过程图

| process_id | 过程名称 | 纳入状态 | 纳入条件 | 建模角色 | 定量参考 |
| --- | --- | --- | --- | --- | --- |
| `material_cutting` | 材料裁剪 | required | 范围内裁剪缝制服装始终纳入。 | 将来料片状织物转换为计量的服装裁片和分类边角料。 | 每 1 kg 验收合格的已包装成衣 |
| `sewing_assembly` | 缝制与组装 | required | 由裁片组装的服装始终纳入。 | 将服装裁片和产品特定辅料连接为组装成衣。 | 每 1 kg 验收合格的已包装成衣 |
| `garment_wet_finishing` | 成衣湿整理 | conditional | 当前景设施或受控承包商对组装成衣进行水洗、漂洗、柔软、染色或其他湿处理时纳入。 | 应用申报湿处理并记录用水、能源、配方、废水和污泥。 | 每 1 kg 验收合格的已包装成衣 |
| `pressing_quality_control` | 熨烫与最终质量检验 | required | 纳入最终熨烫或等效定形和验收检验。 | 产出验收合格的未包装成衣并分出不合格输出。 | 每 1 kg 验收合格的已包装成衣 |
| `packaging` | 产品包装 | required | 纳入随产品离厂的一次性包装和运输批次使用的可重复运输资产。 | 包装验收成衣并在工厂门交付 CPC 28233 参考产品。 | 每 1 kg 验收合格的已包装成衣 |

### 过程：材料裁剪（`material_cutting`）

#### 输入

##### 产品流

###### 供裁剪的面料（`shell_fabric_input`）

申报的非针织或钩编面料作为主要服装材料进入裁剪。依据 BOM 和领料记录其纤维组成、结构、整理、幅宽与质量。

- 选定流：Non-knitted/non-crocheted textile shell fabric
- 流属性/单位：Mass / kg
- 数量规则：裁剪批次领用实测质量减去退回受控库存的未使用材料
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：产品特定（`product_specific`）
- 归一化基准：每 1 kg 验收合格的已包装成衣
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_cutting_mass_and_bom`
- 来源：`afw-pefcr-3-1-2025`; `eu-textile-fibre-regulation-1007-2011`

###### 供裁剪的里料（`lining_fabric_input`）

仅当申报服装规格含里料时，里料进入裁剪。其纤维组成和质量必须与面料分开记录。

- 选定流：Textile lining fabric
- 流属性/单位：Mass / kg
- 数量规则：裁剪批次领用里料实测质量减去退回受控库存的未使用里料；仅 BOM 确认无里料时为零
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：产品特定（`product_specific`）
- 归一化基准：每 1 kg 验收合格的已包装成衣
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_cutting_mass_and_bom`
- 来源：`afw-pefcr-3-1-2025`; `eu-textile-fibre-regulation-1007-2011`

###### 供裁剪的粘合衬（`fusible_interlining_input`）

仅当定形或加固规格要求时，粘合衬进入裁剪。基材和胶黏体系应作为产品限定信息记录。

- 选定流：Fusible textile interlining
- 流属性/单位：Mass / kg
- 数量规则：裁剪批次领用衬料实测质量减去退回受控库存的未使用衬料；仅 BOM 确认无衬料时为零
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：产品特定（`product_specific`）
- 归一化基准：每 1 kg 验收合格的已包装成衣
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_cutting_mass_and_bom`
- 来源：`afw-pefcr-3-1-2025`

###### 裁剪设备耗电（`cutting_electricity_input`）

电力通过裁床、刀具、真空系统和直接辅助设备跨越裁剪边界。采用专用计量或可审计的分表分配。

- 选定流：中压电力
- 流属性/单位：Energy / kWh
- 数量规则：生产批次裁剪实测电耗
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每 1 kg 验收合格的已包装成衣
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_cutting_electricity`
- 来源：`afw-pefcr-3-1-2025`

##### 废物流

##### 基本流

#### 输出

##### 产品流

###### 转移至缝制的面料裁片（`cut_shell_panels_output`）

合格面料裁片作为计量内部产品转移离开裁剪。其身份继续关联服装型号、尺码分布和面料批次。

- 选定流：Cut shell-fabric garment panels
- 流属性/单位：Mass / kg
- 数量规则：转移至缝制的合格面料裁片实测质量
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：产品特定（`product_specific`）
- 归一化基准：每 1 kg 验收合格的已包装成衣
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_cutting_mass_and_bom`
- 来源：`afw-pefcr-3-1-2025`

###### 转移至缝制的里料裁片（`cut_lining_panels_output`）

仅有里服装产生合格里料裁片。该内部转移与面料裁片分别记录。

- 选定流：Cut lining-fabric garment panels
- 流属性/单位：Mass / kg
- 数量规则：转移至缝制的合格里料裁片实测质量；仅未指定里料时为零
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：产品特定（`product_specific`）
- 归一化基准：每 1 kg 验收合格的已包装成衣
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_cutting_mass_and_bom`
- 来源：`afw-pefcr-3-1-2025`

###### 转移至缝制的衬料裁片（`cut_interlining_panels_output`）

仅要求加固时产生合格衬料裁片。其质量作为独立内部产品转移记录。

- 选定流：Cut fusible-interlining garment panels
- 流属性/单位：Mass / kg
- 数量规则：转移至缝制的合格衬料裁片实测质量；仅未指定衬料时为零
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：产品特定（`product_specific`）
- 归一化基准：每 1 kg 验收合格的已包装成衣
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_cutting_mass_and_bom`
- 来源：`afw-pefcr-3-1-2025`

##### 废物流

###### 面料裁剪边角料（`shell_fabric_offcuts_output`）

面料边角料作为分类废物交换离开裁剪。实际质量应在再使用、回收或处置前记录，并保留去向证据。

- 选定流：Waste shell textile fabric
- 流属性/单位：Mass / kg
- 数量规则：裁剪批次产生的面料边角料实测质量
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：产品特定（`product_specific`）
- 归一化基准：每 1 kg 验收合格的已包装成衣
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_cutting_mass_and_bom`
- 来源：`afw-pefcr-3-1-2025`

###### 里料裁剪边角料（`lining_fabric_offcuts_output`）

使用里料时，里料边角料作为独立废物交换离开裁剪。不得与面料边角料合并。

- 选定流：Waste lining textile fabric
- 流属性/单位：Mass / kg
- 数量规则：裁剪批次产生的里料边角料实测质量；仅未使用里料时为零
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：产品特定（`product_specific`）
- 归一化基准：每 1 kg 验收合格的已包装成衣
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_cutting_mass_and_bom`
- 来源：`afw-pefcr-3-1-2025`

###### 衬料裁剪边角料（`interlining_offcuts_output`）

使用衬料时，衬料边角料作为独立废物交换离开裁剪。含胶废物应与普通纺织边角料分开。

- 选定流：Waste fusible textile interlining
- 流属性/单位：Mass / kg
- 数量规则：裁剪批次产生的衬料边角料实测质量；仅未使用衬料时为零
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：产品特定（`product_specific`）
- 归一化基准：每 1 kg 验收合格的已包装成衣
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_cutting_mass_and_bom`
- 来源：`afw-pefcr-3-1-2025`

##### 基本流

### 过程：缝制与组装（`sewing_assembly`）

#### 输入

##### 产品流

###### 缝制接收的面料裁片（`cut_shell_panels_input`）

合格面料裁片由裁剪转移进入缝制，其实测质量构成成衣组装的主要材料投入。

- 选定流：Cut shell-fabric garment panels
- 流属性/单位：Mass / kg
- 数量规则：缝制接收的面料裁片实测质量
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：产品特定（`product_specific`）
- 归一化基准：每 1 kg 验收合格的已包装成衣
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_sewing_materials`
- 来源：`afw-pefcr-3-1-2025`

###### 缝制接收的里料裁片（`cut_lining_panels_input`）

仅有里服装的合格里料裁片进入缝制，并与面料裁片分别记录。

- 选定流：Cut lining-fabric garment panels
- 流属性/单位：Mass / kg
- 数量规则：缝制接收的里料裁片实测质量；仅未指定里料时为零
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：产品特定（`product_specific`）
- 归一化基准：每 1 kg 验收合格的已包装成衣
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_sewing_materials`
- 来源：`afw-pefcr-3-1-2025`

###### 缝制接收的衬料裁片（`cut_interlining_panels_input`）

仅要求加固时，合格衬料裁片进入缝制或粘合工序，并单独记录质量。

- 选定流：Cut fusible-interlining garment panels
- 流属性/单位：Mass / kg
- 数量规则：缝制接收的衬料裁片实测质量；仅未指定衬料时为零
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：产品特定（`product_specific`）
- 归一化基准：每 1 kg 验收合格的已包装成衣
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_sewing_materials`
- 来源：`afw-pefcr-3-1-2025`

###### 组装消耗的缝纫线（`sewing_thread_input`）

缝纫线作为独立辅料跨越组装边界。申报纤维或聚合物组成，按领用质量扣除退回线轴计量。

- 选定流：缝纫线
- 流属性/单位：Mass / kg
- 数量规则：批次领用线质量减去退回受控库存的未用线质量
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：产品特定（`product_specific`）
- 归一化基准：每 1 kg 验收合格的已包装成衣
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_sewing_materials`
- 来源：`afw-pefcr-3-1-2025`

###### 安装于服装的拉链（`zipper_input`）

仅 BOM 要求时，拉链进入组装。其质量和材料规格与纽扣、标签分别记录。

- 选定流：Garment zipper
- 流属性/单位：Mass / kg
- 数量规则：安装于合格和不合格件的拉链实测质量；仅 BOM 确认无拉链时为零
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：产品特定（`product_specific`）
- 归一化基准：每 1 kg 验收合格的已包装成衣
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_sewing_materials`
- 来源：`afw-pefcr-3-1-2025`

###### 安装于服装的纽扣（`button_input`）

仅 BOM 要求时，纽扣进入组装。纽扣材料和质量与其他扣合部件分别记录。

- 选定流：Garment button
- 流属性/单位：Mass / kg
- 数量规则：安装于合格和不合格件的纽扣实测质量；仅 BOM 确认无纽扣时为零
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：产品特定（`product_specific`）
- 归一化基准：每 1 kg 验收合格的已包装成衣
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_sewing_materials`
- 来源：`afw-pefcr-3-1-2025`

###### 安装于服装的纺织护理标签（`care_label_input`）

缝入护理标签作为独立纺织部件进入组装。其基材、印刷体系和质量与可拆纸吊牌分别记录。

- 选定流：Textile garment care label
- 流属性/单位：Mass / kg
- 数量规则：安装于合格和不合格件的护理标签实测质量
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：产品特定（`product_specific`）
- 归一化基准：每 1 kg 验收合格的已包装成衣
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_sewing_materials`
- 来源：`afw-pefcr-3-1-2025`; `eu-textile-fibre-regulation-1007-2011`

###### 缝制设备耗电（`sewing_electricity_input`）

电力通过缝纫、粘合和直接辅助设备跨越组装边界。使用专用计量或可审计分表分配。

- 选定流：中压电力
- 流属性/单位：Energy / kWh
- 数量规则：生产批次缝制与组装实测电耗
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每 1 kg 验收合格的已包装成衣
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_sewing_electricity`
- 来源：`afw-pefcr-3-1-2025`

##### 废物流

##### 基本流

#### 输出

##### 产品流

###### 从缝制转移的组装成衣（`assembled_garment_output`）

组装成衣在可选湿整理和最终熨烫前离开缝制。按服装型号和批次记录合格内部转移质量。

- 选定流：Assembled non-knitted/non-crocheted textile garment
- 流属性/单位：Mass / kg
- 数量规则：转移至下一过程的组装成衣实测质量
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：产品特定（`product_specific`）
- 归一化基准：每 1 kg 验收合格的已包装成衣
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_sewing_materials`
- 来源：`afw-pefcr-3-1-2025`

##### 废物流

###### 缝纫线修剪废料（`sewing_thread_waste_output`）

线头和不可用缝纫线作为独立废物交换离开缝制。不得与纺织裁剪边角料合并。

- 选定流：Waste sewing thread
- 流属性/单位：Mass / kg
- 数量规则：批次产生的缝纫线废料实测质量
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：产品特定（`product_specific`）
- 归一化基准：每 1 kg 验收合格的已包装成衣
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_sewing_materials`
- 来源：`afw-pefcr-3-1-2025`

##### 基本流

### 过程：成衣湿整理（`garment_wet_finishing`）

#### 输入

##### 产品流

###### 供湿整理的组装成衣（`assembled_garment_wet_input`）

仅当申报生产路线包含成衣级湿处理时，组装成衣进入本过程。记录实际处理成衣质量。

- 选定流：Assembled non-knitted/non-crocheted textile garment
- 流属性/单位：Mass / kg
- 数量规则：装入成衣湿整理的组装成衣实测质量；仅本过程不适用时为零
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：产品特定（`product_specific`）
- 归一化基准：每 1 kg 验收合格的已包装成衣
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_wet_finishing_records`
- 来源：`afw-pefcr-3-1-2025`; `eu-textiles-bref-2023`

###### 湿整理工艺用水（`process_water_input`）

工艺用水通过洗涤、漂洗或配方制备进入成衣湿整理。记录专用水表或批次体积总量。

- 选定流：过程用水
- 流属性/单位：Volume / m3
- 数量规则：成衣湿整理批次实测供水量
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每 1 kg 验收合格的已包装成衣
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_wet_finishing_records`
- 来源：`afw-pefcr-3-1-2025`; `eu-textiles-bref-2023`

###### 湿整理设备耗电（`wet_finishing_electricity_input`）

电力通过洗衣机、泵、加料系统和直接辅助设备跨越湿整理边界。记录专用计量或可审计分配。

- 选定流：中压电力
- 流属性/单位：Energy / kWh
- 数量规则：成衣湿整理批次实测电耗
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每 1 kg 验收合格的已包装成衣
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_wet_finishing_records`
- 来源：`afw-pefcr-3-1-2025`; `eu-textiles-bref-2023`

###### 湿整理使用的蒸汽（`steam_input`）

仅实际配方使用间接或直接蒸汽加热时，蒸汽进入湿整理。申报蒸汽条件和供应方或锅炉来源。

- 选定流：蒸汽
- 流属性/单位：Energy / MJ
- 数量规则：供给成衣湿整理批次的实测蒸汽；仅未使用蒸汽时为零
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每 1 kg 验收合格的已包装成衣
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_wet_finishing_records`
- 来源：`afw-pefcr-3-1-2025`; `eu-textiles-bref-2023`

###### 湿整理投加的液体纺织洗涤剂（`liquid_textile_detergent_input`）

仅经批准湿整理配方明确时，外购液体洗涤剂配方进入过程。将该配方作为一个产品交换，并披露供应商身份和组成信息。

- 选定流：Liquid textile detergent
- 流属性/单位：Mass / kg
- 数量规则：成衣湿整理批次投加的洗涤剂配方实测质量；仅配方确认无洗涤剂时为零
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：产品特定（`product_specific`）
- 归一化基准：每 1 kg 验收合格的已包装成衣
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_wet_finishing_records`
- 来源：`afw-pefcr-3-1-2025`; `eu-textiles-bref-2023`

##### 废物流

##### 基本流

#### 输出

##### 产品流

###### 转移至熨烫的湿整理成衣（`wet_finished_garment_output`）

湿整理成衣在完成申报洗涤或处理及相应干燥后离开本过程。合格转移质量与未处理组装成衣分别记录。

- 选定流：Wet-finished non-knitted/non-crocheted textile garment
- 流属性/单位：Mass / kg
- 数量规则：转移至熨烫的合格湿整理成衣实测质量
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：产品特定（`product_specific`）
- 归一化基准：每 1 kg 验收合格的已包装成衣
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_wet_finishing_records`
- 来源：`afw-pefcr-3-1-2025`

##### 废物流

###### 成衣湿处理废水（`wet_processing_wastewater_output`）

废水在场外处理或现场污水处理前作为独立废物交换离开湿整理。记录体积和去向，不得与污泥合并。

- 选定流：Garment wet-processing wastewater
- 流属性/单位：Volume / m3
- 数量规则：成衣湿整理批次实测排放废水量
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每 1 kg 验收合格的已包装成衣
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_wet_finishing_records`
- 来源：`afw-pefcr-3-1-2025`; `eu-textiles-bref-2023`

###### 成衣湿处理污泥（`wet_processing_sludge_output`）

仅当现场处理产生可归属于湿整理批次的污泥时，污泥离开前景边界。记录湿基或干基以及处理去向。

- 选定流：Garment wet-processing sludge
- 流属性/单位：Mass / kg
- 数量规则：可归属于成衣湿整理的实测污泥质量；仅未产生可归属现场污泥时为零
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每 1 kg 验收合格的已包装成衣
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_wet_finishing_records`
- 来源：`eu-textiles-bref-2023`

##### 基本流

### 过程：熨烫与最终质量检验（`pressing_quality_control`）

#### 输入

##### 产品流

###### 直接供熨烫的组装成衣（`assembled_garment_pressing_input`）

仅未进行成衣级湿整理时，组装成衣直接进入熨烫。本卡表示单一内部转移，不与湿整理成衣合并。

- 选定流：Assembled non-knitted/non-crocheted textile garment
- 流属性/单位：Mass / kg
- 数量规则：未经过成衣湿整理而进入熨烫的组装成衣实测质量；采用湿整理路径时为零
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：产品特定（`product_specific`）
- 归一化基准：每 1 kg 验收合格的已包装成衣
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_pressing_and_quality`
- 来源：`afw-pefcr-3-1-2025`

###### 供熨烫的湿整理成衣（`wet_finished_garment_pressing_input`）

仅进行了成衣湿整理时，湿整理成衣进入熨烫。该内部转移与未处理组装成衣分别记录。

- 选定流：Wet-finished non-knitted/non-crocheted textile garment
- 流属性/单位：Mass / kg
- 数量规则：进入熨烫的湿整理成衣实测质量；未进行成衣湿整理时为零
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：产品特定（`product_specific`）
- 归一化基准：每 1 kg 验收合格的已包装成衣
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_pressing_and_quality`
- 来源：`afw-pefcr-3-1-2025`

###### 熨烫设备耗电（`pressing_electricity_input`）

电力通过熨烫机、熨斗、检验照明和直接辅助设备跨越过程边界。记录专用计量或可审计分配。

- 选定流：中压电力
- 流属性/单位：Energy / kWh
- 数量规则：生产批次熨烫与最终质检实测电耗
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每 1 kg 验收合格的已包装成衣
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_pressing_and_quality`
- 来源：`afw-pefcr-3-1-2025`

###### 熨烫设备使用的蒸汽（`pressing_steam_input`）

蒸汽供给熨斗、工作台或隧道整理机时进入熨烫过程。蒸汽条件和来源与电力分别申报。

- 选定流：蒸汽
- 流属性/单位：Energy / MJ
- 数量规则：供给生产批次熨烫的实测蒸汽；仅未使用蒸汽时为零
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每 1 kg 验收合格的已包装成衣
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_pressing_and_quality`
- 来源：`afw-pefcr-3-1-2025`

##### 废物流

##### 基本流

#### 输出

##### 产品流

###### 最终质检验收的未包装成衣（`finished_unpackaged_garment_output`）

未包装成衣在最终验收后离开熨烫。加入一次性包装前记录验收质量。

- 选定流：Finished unpackaged non-knitted/non-crocheted textile garment
- 流属性/单位：Mass / kg
- 数量规则：最终质量检验验收的未包装成衣实测质量
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：产品特定（`product_specific`）
- 归一化基准：每 1 kg 验收合格的已包装成衣
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_pressing_and_quality`
- 来源：`afw-pefcr-3-1-2025`

##### 废物流

###### 最终检验淘汰的不合格成衣（`nonconforming_garment_output`）

除非经返修重新成为验收产出，不能销售的成衣作为独立废物交换离开质量检验。记录去向，不得从合格输出中净扣。

- 选定流：Waste nonconforming textile garment
- 流属性/单位：Mass / kg
- 数量规则：未返回合格生产的不合格成衣实测质量
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：产品特定（`product_specific`）
- 归一化基准：每 1 kg 验收合格的已包装成衣
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_pressing_and_quality`
- 来源：`afw-pefcr-3-1-2025`

##### 基本流

### 过程：产品包装（`packaging`）

#### 输入

##### 产品流

###### 供包装的未包装成衣（`finished_unpackaged_garment_input`）

验收合格的未包装成衣作为唯一服装输入进入包装。在添加包装材料前记录转移产品质量。

- 选定流：Finished unpackaged non-knitted/non-crocheted textile garment
- 流属性/单位：Mass / kg
- 数量规则：包装接收的合格未包装成衣实测质量
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：产品特定（`product_specific`）
- 归一化基准：每 1 kg 验收合格的已包装成衣
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_packaging_materials`
- 来源：`afw-pefcr-3-1-2025`

###### LDPE 成衣胶袋（`ldpe_polybag_input`）

仅胶袋随产品离厂时，成衣胶袋进入包装。LDPE 薄膜质量和再生含量与收缩膜分别记录。

- 选定流：Low-density polyethylene garment polybag
- 流属性/单位：Mass / kg
- 数量规则：运输批次消耗的 LDPE 成衣胶袋实测质量；仅无此包装时为零
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：产品特定（`product_specific`）
- 归一化基准：每 1 kg 验收合格的已包装成衣
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_packaging_materials`
- 来源：`afw-pefcr-3-1-2025`

###### 纸制服装吊牌（`paper_hangtag_input`）

可拆纸吊牌作为独立初级包装部件进入包装。纸张等级、印刷后质量和再生含量与缝入护理标签分别记录。

- 选定流：Paper garment hangtag
- 流属性/单位：Mass / kg
- 数量规则：运输批次消耗的纸吊牌实测质量；仅未使用纸吊牌时为零
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：产品特定（`product_specific`）
- 归一化基准：每 1 kg 验收合格的已包装成衣
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_packaging_materials`
- 来源：`afw-pefcr-3-1-2025`

###### 瓦楞纸板运输箱（`corrugated_cardboard_input`）

瓦楞纸板作为独立运输容器交换进入包装。共用纸箱质量按实测装箱成衣质量分摊。

- 选定流：Corrugated cardboard shipping carton
- 流属性/单位：Mass / kg
- 数量规则：运输批次使用的瓦楞纸板箱实测质量
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：产品特定（`product_specific`）
- 归一化基准：每 1 kg 验收合格的已包装成衣
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_packaging_materials`
- 来源：`afw-pefcr-3-1-2025`

###### 运输使用的可重复木托盘（`wood_pallet_input`）

运输批次使用木托盘时，托盘作为可重复运输资产进入包装模型。记录托盘规格、分配质量和有文件支持的重复使用次数；托盘实体质量不计入产品参考流。

- 选定流：Reusable wood pallet
- 流属性/单位：Mass / kg
- 数量规则：托盘实测质量除以有文件支持的预期使用次数后分配至运输批次；仅未使用木托盘时为零
- 数值来源模式：计算值（`calculated_value`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每 1 kg 验收合格的已包装成衣
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集记录计算（`calculated_from_collection`）
- 采集协议：`cp_packaging_materials`
- 来源：`afw-pefcr-3-1-2025`

###### 托盘化使用的 LDPE 收缩膜（`ldpe_shrink_film_input`）

仅用于固定运输批次时，LDPE 收缩膜进入包装，并与成衣胶袋分别记录。

- 选定流：Low-density polyethylene shrink film
- 流属性/单位：Mass / kg
- 数量规则：运输批次消耗的 LDPE 收缩膜实测质量；仅未使用收缩膜时为零
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每 1 kg 验收合格的已包装成衣
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_packaging_materials`
- 来源：`afw-pefcr-3-1-2025`

###### 包装设备耗电（`packaging_electricity_input`）

电力通过封袋、贴标、输送和直接辅助设备跨越包装边界。记录专用计量或可审计分配。

- 选定流：中压电力
- 流属性/单位：Energy / kWh
- 数量规则：运输批次包装实测电耗
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每 1 kg 验收合格的已包装成衣
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_packaging_materials`
- 来源：`afw-pefcr-3-1-2025`

##### 废物流

##### 基本流

#### 输出

##### 产品流

###### 验收合格的已包装成衣（`finished_packaged_garment_output`）

验收合格的已包装成衣作为参考产品在工厂门离开前景系统。其身份为经双核确认、以质量为定量参考的 Tiangong CPC 28233 产品流。

- 选定流：非针织或钩编而成的纺织品女装、女童装、外衣、夹克衫、礼服、裙子、长裤、短裤及其类似物品 `27320bfc-4629-4ed1-8139-2abf1f1ea14e`
- 流属性/单位：Mass / kg
- 数量规则：验收包装输出实测质量；归一化后恰为 1 kg
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：产品特定（`product_specific`）
- 归一化基准：工厂门处 1 kg 验收合格的已包装成衣
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_reference_output`
- 来源：`un-cpc-3-0-2025`; `afw-pefcr-3-1-2025`

##### 废物流

###### 废 LDPE 成衣胶袋膜（`waste_ldpe_polybag_output`）

破损或多余的成衣胶袋膜作为独立废物交换离开包装。实际质量和处理去向与收缩膜分别记录。

- 选定流：Waste low-density polyethylene polybag film
- 流属性/单位：Mass / kg
- 数量规则：包装过程产生的废成衣胶袋膜实测质量
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每 1 kg 验收合格的已包装成衣
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_packaging_materials`
- 来源：`afw-pefcr-3-1-2025`

###### 废 LDPE 收缩膜（`waste_ldpe_shrink_film_output`）

破损或多余收缩膜作为独立废物交换离开包装，不得与成衣胶袋废料合并记录。

- 选定流：Waste low-density polyethylene shrink film
- 流属性/单位：Mass / kg
- 数量规则：包装过程产生的废收缩膜实测质量；仅未使用收缩膜时为零
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每 1 kg 验收合格的已包装成衣
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_packaging_materials`
- 来源：`afw-pefcr-3-1-2025`

###### 废纸吊牌（`waste_paper_hangtag_output`）

淘汰或破损纸吊牌作为独立废物交换离开包装，与瓦楞纸板分别记录质量。

- 选定流：Waste paper hangtag
- 流属性/单位：Mass / kg
- 数量规则：包装过程产生的废纸吊牌实测质量
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每 1 kg 验收合格的已包装成衣
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_packaging_materials`
- 来源：`afw-pefcr-3-1-2025`

###### 废瓦楞纸板（`waste_corrugated_cardboard_output`）

破损或多余瓦楞纸板作为独立废物交换离开包装。记录实际质量和处理去向。

- 选定流：Waste corrugated cardboard
- 流属性/单位：Mass / kg
- 数量规则：包装过程产生的废瓦楞纸板实测质量
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每 1 kg 验收合格的已包装成衣
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_packaging_materials`
- 来源：`afw-pefcr-3-1-2025`

##### 基本流

## 7. 分配与共产品处理

| rule_id | Applies to | Rule | source_ids |
| --- | --- | --- | --- |
| `allocation_avoidance` | 共用前景作业 | 优先采用过程细分、专用计量、批次领料记录和废物直接称量；仅无法直接计量的剩余共用投入或输出才采用分配。 | afw-pefcr-3-1-2025 |
| `assembly_unit_allocation` | 共用缝制与组装资源 | 剩余共用缝制资源按加工的验收服装件数分配，再用实测验收成衣净质量换算至一千克参考流；披露件数和换算质量。 | afw-pefcr-3-1-2025 |
| `finishing_mass_allocation` | 共用湿整理与熨烫资源 | 剩余共用整理投入和输出按共用批次处理的服装实测质量分配，不得采用收入。 | afw-pefcr-3-1-2025 |
| `packaging_mass_allocation` | 纸箱、托盘和运输批次包装 | 共用一次性包装按实测包装成衣质量分配；可重复托盘生产负荷先以托盘实测质量除以有文件支持的预期使用次数，再分配至运输批次。 | afw-pefcr-3-1-2025 |
| `waste_no_avoided_burden` | 边角料、不合格品和包装废料 | 各废物输出按实测毛质量和实际去向报告；前景清单内不得扣减替代材料信用，回收或能量回收在下游处理数据集中建模。 | afw-pefcr-3-1-2025 |

## 8. 前景数据采集、计算与质量规则

### 数据采集协议

| protocol_id | process_id | flow_role | record_type | raw_fields | collection_method | unit | frequency | temporal_coverage | site_scope | aggregation_rule | quality_evidence |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| `cp_cutting_mass_and_bom` | `material_cutting` | 面料投入、裁片转移和分类边角料 | BOM、仓库领退料、批次转移和校准秤记录 | batch_id; product_reference; size_distribution; component_id; fibre_composition; fabric_construction; issued_mass_kg; returned_mass_kg; transferred_mass_kg; offcut_mass_kg; waste_destination | 将 BOM 和仓库移动与合格裁片及各边角料直接称量核对 | kg | 每个裁剪批次 | 申报参考期内全部批次 | 每个纳入的裁剪场址和受控承包商 | 按产品参考和材料部件汇总，再用 `calc_normalize_to_reference_mass` 归一化 | 秤具校准、签字领退料单、转移单、废物票据和 BOM 修订版 |
| `cp_cutting_electricity` | `material_cutting` | 裁剪电力 | 收费电表、分表或设备能耗记录 | meter_id; timestamp_start; timestamp_end; opening_kwh; closing_kwh; batch_id; allocation_driver | 优先专用计量，否则采用 `calc_shared_meter_allocation` | kWh | 每批或按月分配至批次 | 与输出质量相同期间 | 每个纳入裁剪场址 | 汇总专用耗电或分配共用耗电后归一化 | 电表校准、账单、设备日志和分配工作表 |
| `cp_sewing_materials` | `sewing_assembly` | 裁片、缝纫线、辅料、组装输出和线废料 | BOM、产线领退料、转移和校准秤记录 | batch_id; component_id; material_specification; issued_mass_kg; returned_mass_kg; installed_mass_kg; output_mass_kg; waste_mass_kg | 将 BOM 与产线领用、退回、验收输出和缝纫线废料单独称量核对 | kg | 每个缝制批次 | 申报参考期内全部批次 | 每个纳入缝制场址和受控承包商 | 按部件和产品参考汇总后归一化 | BOM 修订版、签字物料票据、秤具校准和转移记录 |
| `cp_sewing_electricity` | `sewing_assembly` | 缝制电力 | 分表或设备能耗记录 | meter_id; timestamp_start; timestamp_end; opening_kwh; closing_kwh; batch_id; accepted_units; accepted_mass_kg | 优先专用计量，否则采用单位分配和 `calc_shared_meter_allocation` | kWh | 每批或按月分配至批次 | 与输出质量相同期间 | 每个纳入缝制场址 | 汇总或分配至验收件数，再按验收质量归一化 | 电表校准、生产计数和分配工作表 |
| `cp_wet_finishing_records` | `garment_wet_finishing` | 成衣装载、水、电力、蒸汽、洗涤剂、合格输出、废水和污泥 | 配方、批次单、公用工程计量、加料、排水和废物记录 | batch_id; garment_input_mass_kg; water_m3; electricity_kwh; steam_mj; detergent_mass_kg; accepted_output_mass_kg; wastewater_m3; sludge_mass_kg; sludge_basis; destination | 读取专用批次记录和计量；保留配方身份以及不存在交换的零声明 | kg; m3; kWh; MJ | 每个湿整理批次 | 申报参考期内所有适用批次 | 每个纳入湿整理场址和受控承包商 | 按产品参考汇总并归一化；共用批次按处理服装质量分配 | 计量和秤具校准、签字配方、加料日志、排水记录和废物联单 |
| `cp_pressing_and_quality` | `pressing_quality_control` | 成衣转移、电力、蒸汽、验收输出和不合格成衣废物 | 批次转移、公用工程计量、检验和校准秤记录 | batch_id; input_route; input_mass_kg; electricity_kwh; steam_mj; accepted_mass_kg; rejected_mass_kg; rework_return_mass_kg; disposition | 将转移投入与验收输出、返修退回和最终淘汰单独称量核对 | kg; kWh; MJ | 每批 | 申报参考期内全部批次 | 每个纳入熨烫与检验场址 | 按产品参考汇总并归一化；共用公用工程按处理质量分配 | 计量和秤具校准、检验放行、淘汰去向和返修记录 |
| `cp_packaging_materials` | `packaging` | 未包装成衣、各包装材料、包装电力和各包装废料流 | 包装 BOM、仓库领退料、运输批次、托盘登记、计量和废物记录 | shipment_lot; product_reference; unpackaged_mass_kg; material_id; issued_mass_kg; returned_mass_kg; scrap_mass_kg; packed_mass_kg; pallet_mass_kg; expected_reuses; electricity_kwh | 各包装材料分别核对；保留托盘重复使用证据并分别称量各废料 | kg; kWh | 每个运输批次 | 申报参考期内全部运输批次 | 每个纳入包装场址 | 按材料汇总净消耗，计算可重复托盘份额，分配至包装质量后归一化 | 包装规格、领退料票据、秤具校准、托盘池记录、电表和废物票据 |
| `cp_reference_output` | `packaging` | CPC 28233 验收包装产品 | 最终放行、校准秤和运输记录 | batch_id; shipment_lot; product_reference; garment_subcategory; size_basis; fibre_composition; net_product_mass_kg; disposable_packaging_mass_kg; accepted_packaged_mass_kg; rejected_mass_kg | 包装后称量验收放行产品；分别报告成衣净质量和一次性包装质量 | kg | 每个运输批次 | 申报参考期内全部验收输出 | 每个纳入工厂门 | 汇总验收质量并将清单归一化为恰好 1 kg | 最终放行签字、秤具校准、装箱单和生产件数核对 |

### 计算规则

| rule_id | Applies to | Formula or rule | Inputs | Output | source_ids |
| --- | --- | --- | --- | --- | --- |
| `calc_normalize_to_reference_mass` | 每项前景交换 | 归一化数量 = 可归属批次或期间数量 / 验收包装输出质量（kg） | 可归属交换数量；验收包装输出质量 | 每 1 kg 参考产品的交换量 | afw-pefcr-3-1-2025 |
| `calc_net_material_consumption` | 面料、辅料和一次性包装 | 净消耗质量 = 领用质量 - 未使用退回质量；实测废料和库存变化另行报告 | 领用质量；退回质量；废料质量；库存变化 | 净材料投入和核对废物输出 | afw-pefcr-3-1-2025 |
| `calc_shared_meter_allocation` | 剩余共用电力或蒸汽 | 分配量 = 仪表期间消耗 × 有文件支持的批次分配因子 / 仪表期间总因子 | 起止表读数；批次因子；总因子 | 批次公用工程量 | afw-pefcr-3-1-2025 |
| `calc_process_mass_balance` | 裁剪、缝制、湿整理、熨烫和包装 | 投入质量 + 期初在制品 = 验收转移 + 实测废物 + 期末在制品；归一化前调查残差 | 部件投入；转移；废物；期初和期末在制品 | 过程质量平衡残差 | afw-pefcr-3-1-2025 |
| `calc_reusable_pallet_share` | 可重复木托盘 | 分配托盘生产质量 = 托盘质量 / 有文件支持的预期使用次数 × 运输批次分配份额 | 托盘质量；预期使用次数；运输批次包装质量；托盘化总包装质量 | 每运输批次分配托盘质量 | afw-pefcr-3-1-2025 |

### 数据质量要求

| requirement_id | Applies to | Requirement | Evidence |
| --- | --- | --- | --- |
| `dq_identity` | 产品和材料 | 保留产品参考、服装子类别、女式或女童尺码基准、部件级纤维组成、面料结构、整理路线和包装配置。 | 批准规格、当前 BOM、纤维组成记录和最终放行 |
| `dq_temporal` | 前景记录 | 使用完整且有代表性的生产期间，通常为最近 12 个月或覆盖全部相关变体的较短生产活动；披露停产、试验和异常批次。 | 带日期计量导出、生产台账和覆盖说明 |
| `dq_geography` | 场址和供应商 | 识别每个前景场址、受控承包商和公用工程地域；通用地域替代必须披露。 | 场址清单、供应商登记和数据集元数据 |
| `dq_technology` | 裁剪、组装、整理、熨烫和包装 | 充分记录实际设备和工艺路线，以选择具有代表性的上游数据集并解释条件性过程。 | 设备清单、路线单、配方和生产记录 |
| `dq_completeness` | 清单 | 覆盖 100% 验收输出和全部已知材料部件；核对至少 95% BOM 质量并明确列出未表示余量。 | BOM 覆盖计算、质量平衡和例外日志 |
| `dq_measurement` | 计量和秤具 | 使用校准设备，或记录所用不确定性和修正；聚合前保留原始读数。 | 校准证书、原始计量导出和签字称量票据 |
| `dq_uuid_status` | Tiangong 引用 | 仅当 hybrid-search 识别和独立 state-100 获取确认相同语义流、流类型、属性以及适用分类时使用 UUID；未解决 UUID 留空并保留 manifest 审查项。 | 身份审查记录和 manifest 未解决候选条目 |
| `dq_outsourcing` | 受控承包商 | 对外包裁剪、缝制、湿整理、熨烫或包装应用相同采集协议；否则披露供应商数据集、缺口和代表性限制。 | 供应商问卷、活动记录和数据集元数据 |

## 9. 校验规则

| rule_id | Applies to | Rule | source_ids |
| --- | --- | --- | --- |
| `validate_reference_identity` | 参考流 | 确认 UUID `27320bfc-4629-4ed1-8139-2abf1f1ea14e` 在 state 100 解析为 CPC 28233、Product flow、Mass，且单位组为 Units of mass、参考单位为 kg。 | un-cpc-3-0-2025 |
| `validate_category_scope` | 产品元数据 | 拒绝针织或钩编服装以及超出 CPC 28233 边界的产品；要求申报服装子类别和面料结构。 | un-cpc-3-0-2025 |
| `validate_atomic_inventory` | 过程清单 | 拒绝在同一清单行组合多项公用工程、材料、包装部件、废物或排放；每项交换必须具有一个 row_id 和一个具体 Selected flow。 | afw-pefcr-3-1-2025 |
| `validate_process_route` | 过程图 | 要求裁剪、缝制与组装、熨烫与质量检验以及包装；仅路线声明或记录显示发生时要求成衣湿整理。 | afw-pefcr-3-1-2025 |
| `validate_mass_balance` | 各前景过程 | 调查并披露超过场址计量不确定性的材料平衡残差；不得通过修改验收输出来强制残差归零。 | afw-pefcr-3-1-2025 |
| `validate_bom_coverage` | 材料投入 | 确认报告 BOM 覆盖至少 95% 产品质量，并在存在时覆盖 100% 面料、里料、衬料、填料、电子部件和金属；明确列出余量。 | afw-pefcr-3-1-2025 |
| `validate_packaging` | 包装 | 确认胶袋、吊牌、纸箱、托盘和收缩膜数量分别作为产品特定前景记录；没有实际产品件数和质量基准时，拒绝将按件默认值直接换算为 kg。 | afw-pefcr-3-1-2025 |
| `validate_data_quality` | 发布前景数据包 | 要求披露当前期间、技术、地域、完整性、校准、分配和外包；任何未解决的重要 UUID 或上游数据集都会使数据包不满足发布完整性。 | afw-pefcr-3-1-2025 |

## 10. 发布数据集画像

| 字段 | 值 |
| --- | --- |
| dataset_role | CPC 28233 成衣的门到门前景生产数据集 |
| downstream_use | `secondary_dataset`; `background_dataset` |
| allowed_use | 供应商数据交换、前景过程建模、加入完整上游数据集的摇篮到工厂门模型，以及加入已申报配送、使用和生命终结情景的生命周期模型 |
| excluded_use | 每次穿着比较、耐久性声明、面向消费者的比较断言、针织或钩编服装，或未添加下游阶段的摇篮到坟墓声明 |
| required_metadata | PCR id 与版本；产品流 UUID；服装子类别；尺码基准；部件 BOM 和纤维组成；生产场址；参考期；工艺路线；产品净质量；包装配置；分配基准；废物去向；上游数据集标识符 |
| required_quality_disclosure | BOM 覆盖；时间、地域和技术代表性；计量和秤具校准；质量平衡残差；供应商和承包商覆盖；代理数据集；未解决 UUID；排除交换；不确定性和审查状态 |
| update_trigger | 产品组成、服装结构、工艺路线、湿整理、设备、能源供应、场址地域、承包商、包装配置、分配方法、Tiangong 身份或治理来源发生重大变化 |

## 11. 数据源

| Source id | Type | Reference | Used for |
| --- | --- | --- | --- |
| `un-cpc-3-0-2025` | `official_guidance` | United Nations Statistics Division, CPC Version 3.0 Explanatory Notes, 30 June 2025, https://unstats.un.org/unsd/classifications/Econ/Download/In%20Text/CPC_Ver_3.0_Exp_Notes_30Jun2025.pdf | CPC 28233 身份及纳入、排除边界 |
| `afw-pefcr-3-1-2025` | `standard` | Product Environmental Footprint Category Rules for Apparel and Footwear, Version 3.1, 29 April 2025, Technical Secretariat coordinated by Cascale, official landing page https://pefapparelandfootwear.eu/afw_pefcr_v3-1_final/ and full text https://www.carbonfact.com/hubfs/A%26FW_PEFCR_v3.1.pdf | 服装子类别、BOM 覆盖、制造过程分解、逐工序损失、前景数据采集、分配、电力层级、包装类型和数据质量规则 |
| `eu-textiles-bref-2023` | `official_guidance` | European Commission Joint Research Centre, Best Available Techniques Reference Document for the Textiles Industry, January 2023, https://bureau-industrial-transformation.jrc.ec.europa.eu/index.php/reference/textiles-industry | 条件性成衣湿处理边界、公用工程以及废水和污泥记录要求 |
| `eu-textile-fibre-regulation-1007-2011` | `standard` | Regulation (EU) No 1007/2011 on textile fibre names and related labelling and marking of fibre composition, ELI http://data.europa.eu/eli/reg/2011/1007/oj | 纤维组成和纺织部件身份披露 |
